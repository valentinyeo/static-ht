'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TestPartytownPage() {
  const [partytownStatus, setPartytownStatus] = useState<string>('Loading...')
  const [analyticsStatus, setAnalyticsStatus] = useState<string>('Loading...')

  useEffect(() => {
    // Check if Partytown is loaded
    const checkPartytown = () => {
      if (typeof window !== 'undefined') {
        // Check if Partytown is present
        const partytownScript = document.querySelector('script[src*="partytown"]')
        if (partytownScript) {
          setPartytownStatus('✅ Partytown script loaded')
        } else {
          setPartytownStatus('❌ Partytown script not found')
        }

        // Check if analytics are running in web worker
        setTimeout(() => {
          if (typeof window.gtag === 'function') {
            setAnalyticsStatus('✅ Google Analytics loaded (likely in web worker)')
          } else {
            setAnalyticsStatus('❌ Google Analytics not loaded')
          }
        }, 3000)
      }
    }

    checkPartytown()
  }, [])

  const testAnalyticsEvent = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'partytown_test', {
        event_category: 'test',
        event_label: 'partytown_working'
      })
      alert('Analytics event sent! Check your browser dev tools Network tab.')
    } else {
      alert('Analytics not loaded yet. Wait a moment and try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">🎉 Partytown Test Page</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Status Check</h2>
          <div className="space-y-2">
            <p><strong>Partytown:</strong> {partytownStatus}</p>
            <p><strong>Analytics:</strong> {analyticsStatus}</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Performance Benefits</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>🚀 Main thread freed up for your app</li>
            <li>⚡ Third-party scripts run in web workers</li>
            <li>📈 Better Lighthouse performance scores</li>
            <li>🎯 Improved Core Web Vitals</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Test Analytics</h2>
          <button
            onClick={testAnalyticsEvent}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Test Event
          </button>
          <p className="text-sm text-gray-400 mt-2">
            This will send a test event to Google Analytics via Partytown
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
} 