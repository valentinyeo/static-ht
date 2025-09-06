"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { InternalLink } from "./internal-link"

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  external?: boolean
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'header' | 'hero' | 'section' | 'sm' | 'lg'
  className?: string,
  id?: string
}

// Helper: determine if this is a "login metric" (should get id='get-started-button')
// Now: if it leads user to app.hypertask.ai, that's it
function isLoginMetric(href?: string): boolean {
  if (!href) return false
  try {
    // If absolute URL, check host and must include 'login'
    if (href.startsWith("http")) {
      const url = new URL(href)
      return url.hostname === "app.hypertask.ai" && href.toLowerCase().includes("login")
    }
    // If relative, not a login metric
    return false
  } catch {
    return false
  }
}

// Helper: determine if this is a login URL that needs PostHog enhancement
function isLoginUrl(href?: string): boolean {
  if (!href) return false
  return href.includes('/login') && href.includes('app.hypertask.ai')
}

export const CTAButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CTAButtonProps>(
  ({ 
    children, 
    className, 
    href, 
    external, 
    variant = "primary", 
    size = "hero",
    id,
    ...props 
  }, ref) => {
    
    // Size styles
    const sizeStyles = {
      header: "px-4 py-2 text-sm font-semibold",
      hero: "px-8 py-3 lg:text-base text-sm font-semibold",
      section: "px-6 py-2.5 lg:text-lg text-base font-medium",
      sm: "px-3 py-1.5 text-sm font-medium",
      lg: "px-8 py-3 text-base font-semibold lg:px-10 lg:py-4 lg:text-lg"
    }

    // Variant styles
    const variantStyles = {
      primary: "gradient-button_VWO bg-white text-black hover:bg-gray-50 border-white",
      secondary: "bg-black text-white border-brand-border border-1",
      outline: "border border-white text-white bg-transparent ",
      ghost: "text-white hover:bg-white/10"
    }

    const buttonClasses = cn(

      " inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all duration-200",
      "hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      sizeStyles[size],
      variantStyles[variant],
      className,
      ""
    )

    // Determine the id to use
    const computedId = isLoginMetric(href) ? "get-started-button" : id

    if (href) {
      // Use InternalLink for login URLs to enable PostHog session tracking
      if (isLoginUrl(href)) {
        return (
          <InternalLink
            href={href}
            external={external}
            className={buttonClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
            id={computedId}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </InternalLink>
        )
      }
      
      if (href.startsWith('http') || external) {
        // Only pass anchor-allowed props to <a>
        const { type, ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
            id={computedId}
            {...anchorProps}
          >
            {children}
          </a>
        )
      }
      
      return (
        <Link href={href}>
          <span
            className={buttonClasses}
            ref={ref as React.Ref<HTMLSpanElement>}
            id={computedId}
            {...props}
          >
            {children}
          </span>
        </Link>
      )
    }

    return (
      <button
        className={buttonClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        id={computedId}
        {...props}
      >
        {children}
      </button>
    )
  }
)
CTAButton.displayName = "CTAButton"

// CTA Group component
interface CTAGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  className?: string
}

export const CTAGroup = React.forwardRef<HTMLDivElement, CTAGroupProps>(
  ({ children, className, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-4",
          orientation === "horizontal" ? "flex-col sm:flex-row" : "flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CTAGroup.displayName = "CTAGroup"
