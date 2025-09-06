'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import { POSTHOG_KEY, POSTHOG_HOST } from '@/lib/constants'

interface PostHogProviderProps {
  children: React.ReactNode
}

export default function PostHogProvider({ children }: PostHogProviderProps) {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window !== 'undefined') {
      const key = POSTHOG_KEY
      console.log("🚀 ~ PostHogProvider ~ key:", key)
      const host = POSTHOG_HOST
      console.log("🚀 ~ PostHogProvider ~ host:", host)
      
      if (key && host) {
                // Check for bootstrap data from URL parameters
        const urlParams = new URLSearchParams(window.location.hash.substring(1))
        const sessionId = urlParams.get('session_id')
        const distinctId = urlParams.get('distinct_id')
        
        posthog.init(key, {
          api_host: host,
          person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
          session_recording: {
            // Enable cross-domain session recording
            recordCrossOriginIframes: true,
          },
          // Enable cross-domain tracking
          cross_subdomain_cookie: true,
          // Enable session recording for both domains
          capture_pageview: true,
          capture_pageleave: true,
          // Persistence configuration for cross-domain
          persistence: 'localStorage+cookie',
          persistence_name: 'posthog_hypertask',
          // Enable debug mode in development
          debug: process.env.NODE_ENV === 'development',
          
          // Autocapture settings
        //   autocapture: {
        //     // Capture all clicks and form submissions
        //     capture_copied_text: true,
        //     css_selector_allowlist: undefined,
        //     // url_allowlist: [
        //     //   'https://hypertask.ai',
        //     //   'https://app.hypertask.ai',
        //     //   'https://get.hypertask.ai'
        //     // ]
        //   },
         
        //   // Advanced configurations
        //   advanced_disable_decide: false,
        //   advanced_disable_feature_flags: false,
        })
        
        // // Set up cross-domain user identification
        // posthog.register({
        //   domain: window.location.hostname,
        //   app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0'
        // })

        console.log('PostHog initialized for cross-domain tracking')
      } else {
        console.warn('PostHog environment variables not found')
      }
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && posthog) {
        // Don't reset on cleanup to maintain cross-domain session
        // posthog.reset()
      }
    }
  }, [])

  // Don't render provider on server side
  if (typeof window === 'undefined') {
    return <>{children}</>
  }

  return <PHProvider client={posthog}>{children}</PHProvider>
}

// Helper functions for cross-domain tracking
export const identifyUser = (userId: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.identify(userId, properties)
  }
}

export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.capture(event, properties)
  }
}

export const setUserProperties = (properties: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.setPersonProperties(properties)
  }
}

// Function to manually start session recording (if needed)
export const startSessionRecording = () => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.startSessionRecording()
  }
}

// Function to stop session recording (if needed)
export const stopSessionRecording = () => {
  if (typeof window !== 'undefined' && posthog) {
    posthog.stopSessionRecording()
  }
}

// Function to check if session recording is active
export const isSessionRecordingActive = () => {
  if (typeof window !== 'undefined' && posthog) {
    return posthog.sessionRecording?.status === 'active'
  }
  return false
} 