'use client'

import Script from 'next/script'



export default function GoogleTagManager() {
  
  // Use regular scripts (no Partytown) in debug mode for Tag Assistant visibility
  
  return (
    <>
      {/* Google Tag Manager - Head Script */}
      <Script 
        id="google-tag-manager"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('✅ Google Tag Manager loaded successfully')
          if (true) {
            console.log('🔍 GTM Debug Mode: Container ID', 'GTM-T9FF2XM2')
            console.log('🔍 dataLayer:', typeof window !== 'undefined' ? window.dataLayer : 'N/A')
          }
        }}
        onError={(e) => {
          console.error('❌ Failed to load Google Tag Manager:', e)
        }}
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T9FF2XM2');
        `}
      </Script>

      
    </>
  )
} 