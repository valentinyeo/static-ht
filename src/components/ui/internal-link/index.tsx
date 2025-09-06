'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface InternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  external?: boolean
  openInNewTab?: boolean
  className?: string
}

// Client-side utility to add PostHog params for login URLs
async function enhanceLoginURL(href: string): Promise<string> {
  if (!href.includes('/login')) return href
  
  try {
    // Dynamically import posthog to ensure it's only loaded client-side
    const posthog = await import('posthog-js')
    const sessionId = posthog.default.get_session_id()
    const distinctId = posthog.default.get_distinct_id()
    
    const url = new URL(href)
    url.hash = `session_id=${sessionId}&distinct_id=${distinctId}`
    return url.toString()
  } catch (error) {
    // Fallback if posthog fails to load
    console.warn('PostHog not available for URL enhancement:', error)
    return href
  }
}

export const InternalLink = React.forwardRef<HTMLAnchorElement, InternalLinkProps>(
  ({ children, className, href, external, openInNewTab, ...props }, ref) => {
    const [enhancedHref, setEnhancedHref] = React.useState(href)
    
    React.useEffect(() => {
      if (href.includes('/login')) {
        // Only enhance login URLs
        enhanceLoginURL(href).then(setEnhancedHref).catch(() => setEnhancedHref(href))
      }
    }, [href])
    
    if (external || href.startsWith('http') || openInNewTab) {
      return (
        <a
          href={enhancedHref}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={enhancedHref} className={className} ref={ref} {...props}>
        {children}
      </Link>
    )
  }
)

InternalLink.displayName = "InternalLink"
