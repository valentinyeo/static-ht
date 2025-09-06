'use client'

/**
 * Client-side redirect utilities for Hypertask app navigation
 * Handles PostHog session tracking for cross-domain continuity
 */

import posthog from "posthog-js";

// App domain configuration
const APP_DOMAIN = 'https://app.hypertask.ai'
const LOGIN_PATH = '/login'

// Client-side function to get enhanced login URL with PostHog params
export function getAppLoginURL(): string {
  try {
    const sessionId = posthog.get_session_id();
    const distinctId = posthog.get_distinct_id();
    console.log("🚀 ~ getAppLoginURL ~ sessionId:", sessionId)
    console.log("🚀 ~ getAppLoginURL ~ distinctId:", distinctId)
    return `${APP_DOMAIN}${LOGIN_PATH}#session_id=${sessionId}&distinct_id=${distinctId}`
  } catch (error) {
    console.warn('PostHog not available for URL enhancement:', error)
    return `${APP_DOMAIN}${LOGIN_PATH}`
  }
}

// Base login URL for server components
export const APP_LOGIN_URL = `${APP_DOMAIN}${LOGIN_PATH}`

export default getAppLoginURL;
