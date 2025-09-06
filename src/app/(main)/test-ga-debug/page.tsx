'use client'

import { useState } from 'react'
import AnalyticsScripts from '@/components/analytics/AnalyticsScripts'

export default function TestGADebugPage() {
  const [debugMode, setDebugMode] = useState(false)
  
  const sendTestEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      const eventName = `test_event_${Date.now()}`
      window.gtag('event', eventName, {
        event_category: 'test',
        event_label: 'debug_page',
        test_mode: debugMode ? 'debug' : 'partytown',
        timestamp: new Date().toISOString()
      })
      console.log(`📊 Sent GA event: ${eventName}`)
      alert(`Event sent: ${eventName}`)
    } else {
      console.error('❌ gtag not available')
      alert('gtag not available - check console')
    }
  }

  const checkAnalyticsStatus = () => {
    const status = {
      gtag_available: typeof window !== 'undefined' && !!window.gtag,
      dataLayer_length: typeof window !== 'undefined' ? window.dataLayer?.length || 0 : 0,
      debug_mode: debugMode,
      user_agent: typeof window !== 'undefined' ? navigator.userAgent : 'server'
    }
    
    console.log('📊 Analytics Status:', status)
    alert(`Analytics Status:\n${JSON.stringify(status, null, 2)}`)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Load Analytics with current debug mode */}
      <AnalyticsScripts/>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Google Analytics Debug Test</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-2xl mb-4">Current Mode</h2>
          <p className="mb-4">
            <strong>Mode:</strong> {debugMode ? 'Debug Mode (No Partytown)' : 'Partytown Mode (Web Worker)'}
          </p>
          <p className="mb-4 text-sm text-gray-300">
            {debugMode 
              ? '🔍 In debug mode, GA runs on main thread and is visible to Tag Assistant'
              : '⚡ In Partytown mode, GA runs in web worker and is NOT visible to Tag Assistant'
            }
          </p>
          
          <button
            onClick={() => {
              setDebugMode(!debugMode)
              setTimeout(() => window.location.reload(), 100) // Reload to apply new mode
            }}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Switch to {debugMode ? 'Partytown' : 'Debug'} Mode
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl mb-4">Test Analytics</h3>
            <div className="space-y-4">
              <button
                onClick={sendTestEvent}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
              >
                Send Test Event
              </button>
              
              <button
                onClick={checkAnalyticsStatus}
                className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded w-full"
              >
                Check Analytics Status
              </button>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl mb-4">Debug Instructions</h3>
            <div className="text-sm space-y-2">
              <p><strong>Debug Mode:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>GA visible in Google Tag Assistant</li>
                <li>Can use browser devtools Network tab</li>
                <li>Scripts run on main thread</li>
                <li>Better for debugging setup issues</li>
              </ul>
              
              <p className="mt-4"><strong>Partytown Mode:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>GA NOT visible in Tag Assistant</li>
                <li>Runs in web worker (better performance)</li>
                <li>Check console logs for debug info</li>
                <li>Use GA Realtime reports to verify data</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg mt-8">
          <h3 className="text-xl mb-4">Verification Methods</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">1. Console Logs</h4>
              <p className="text-gray-300">Check browser console for GA loading and event messages</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. GA Realtime</h4>
              <p className="text-gray-300">Check Google Analytics Realtime reports for page views and events</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Network Tab</h4>
              <p className="text-gray-300">(Debug mode only) Check Network tab for requests to google-analytics.com</p>
            </div>
          </div>
        </div>

        <div className="bg-red-900 p-6 rounded-lg mt-8">
          <h3 className="text-xl mb-4">⚠️ Important Notes</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li><strong>Partytown + Tag Assistant:</strong> Tag Assistant cannot detect GA when using Partytown because scripts run in web workers</li>
            <li><strong>This is expected behavior</strong> - not a bug! Partytown isolates third-party scripts for better performance</li>
            <li><strong>GA still works:</strong> Data is still sent to Google Analytics, just invisible to debugging tools</li>
            <li><strong>For production:</strong> Use Partytown mode for better performance</li>
            <li><strong>For debugging:</strong> Temporarily use debug mode to verify setup with Tag Assistant</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 