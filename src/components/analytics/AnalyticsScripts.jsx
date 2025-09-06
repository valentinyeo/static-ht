'use client'

import Script from 'next/script'
import dynamic from 'next/dynamic'

import PartytownProvider from './PartytownProvider'
import GoogleTagManager from './GoogleTagManager'
import VWOOptimizer from './VWOOptimizer'
import FacebookPixel from './FacebookPixel'
import PostHogProvider from './PostHogProvider'

const defaultConfig = {
  googleTagManager: {
    gtmId: 'GTM-T9FF2XM2',
    enabled: true,
    debugMode: false
  },
  vwo: {
    accountId: '1115405',
    enabled: true
  },
  facebookPixel: {
    pixelId: 1726658261091410,
    enabled: true
  },
  posthog: {
    enabled: true
  },
  enabled: true,
  debugMode: false
}

export default function AnalyticsScripts() {
  const config = { ...defaultConfig }

  if (!config.enabled) {
    return null
  }

  return (
    <>
      {/* Core Web Vitals RUM - Real User Monitoring */}
      
      {config.posthog?.enabled && (
        <PostHogProvider>
            {/* Google Tag Manager with Partytown */}
            
            

            {/* VWO with Partytown */}
            {config.vwo?.enabled && config.vwo.accountId && (
              <VWOOptimizer
                // accountId={config.vwo.accountId}
                // enabled={config.vwo.enabled}
              />
            )}

            {/* Facebook Pixel with Partytown */}
            {/* {config.facebookPixel?.enabled && config.facebookPixel.pixelId && ( */}
            {/* )} */}
        </PostHogProvider>
      )}
    </>
  )
} 