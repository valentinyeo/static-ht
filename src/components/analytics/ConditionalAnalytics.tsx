'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Dynamically import analytics components only when needed
const PostHogProvider = dynamic(() => import('./PostHogProvider'), {
  ssr: false,
  loading: () => null
})

const VWOOptimizer = dynamic(() => import('./VWOOptimizer'), {
  ssr: false,
  loading: () => null
})

interface ConditionalAnalyticsProps {
  enabled?: boolean
  posthogEnabled?: boolean
  vwoEnabled?: boolean
}

export default function ConditionalAnalytics({ 
  enabled = false, // Default to false for static site
  posthogEnabled = false,
  vwoEnabled = false 
}: ConditionalAnalyticsProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load analytics if explicitly enabled
    if (enabled) {
      // Delay loading to avoid blocking initial render
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 1000) // Load after 1 second

      return () => clearTimeout(timer)
    }
  }, [enabled])

  if (!enabled || !shouldLoad) {
    return null
  }

  return (
    <>
      {posthogEnabled && <PostHogProvider><></></PostHogProvider>}
      {vwoEnabled && <VWOOptimizer />}
    </>
  )
}
