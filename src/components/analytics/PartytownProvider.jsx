'use client'

import Script from 'next/script'
import { Partytown } from '@builder.io/partytown/react';

export default function PartytownProvider({ children }) {
  return (
    <>
      {/* Partytown Configuration */}
      <Partytown
        debug={false}
        lib="/~partytown/"
        loadScriptsOnMainThread={[
          'https://googleads.g.doubleclick.net',
          'https://www.googletagmanager.com',
          'https://dev.visualwebsiteoptimizer.com', // VWO A/B testing
          'https://connect.facebook.net', // Facebook Pixel
          'https://rum.corewebvitals.io', // Core Web Vitals monitoring
        ]}
        forward={[
          ['dataLayer.push', { preserveBehavior: true }],
          ['gtag', { preserveBehavior: true }],
          ['google_tag_manager', { preserveBehavior: true }],
          ['fbq', { preserveBehavior: true }],
          ['_vwo_code', { preserveBehavior: true }],
        ]}
      />
     
      
      {children}
    </>
  )
}
