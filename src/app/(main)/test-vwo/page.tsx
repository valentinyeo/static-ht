'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TestVWOPage() {
  const [vwoStatus, setVwoStatus] = useState<string>('Loading...')
  const [vwoData, setVwoData] = useState<{
    accountId: string
    version: string
    isLoaded: boolean
    hasFinished: boolean | string
  } | null>(null)

  useEffect(() => {
    // Check VWO status
    const checkVWO = () => {
      if (typeof window !== 'undefined') {
        // Check if VWO script is loaded
        setTimeout(() => {
          if (window._vwo_code) {
            setVwoStatus('✅ VWO script loaded and initialized')
            
            // Try to get VWO data
            try {
              const vwoInfo = {
                accountId: '1115405',
                version: '2.1',
                isLoaded: !!window._vwo_code,
                hasFinished: typeof window._vwo_code.finish === 'function' ? 'available' : 'unavailable'
              }
              setVwoData(vwoInfo)
            } catch (error) {
              console.warn('Error getting VWO data:', error)
            }
          } else {
            setVwoStatus('❌ VWO script not loaded')
          }
        }, 3000)
      }
    }

    checkVWO()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">🧪 VWO A/B Testing Status</h1>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">VWO Status</h2>
          <p className="text-lg mb-4">{vwoStatus}</p>
          
          {vwoData && (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">VWO Configuration:</h3>
              <ul className="space-y-1">
                <li><strong>Account ID:</strong> {vwoData.accountId}</li>
                <li><strong>Version:</strong> {vwoData.version}</li>
                <li><strong>Script Loaded:</strong> {vwoData.isLoaded ? '✅ Yes' : '❌ No'}</li>
                <li><strong>Has Finished:</strong> {vwoData.hasFinished}</li>
              </ul>
            </div>
          )}
        </div>

        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About VWO Integration</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li>🎯 A/B testing and experimentation platform</li>
            <li>⚡ Running in web worker via Partytown (no main thread blocking)</li>
            <li>📊 Account ID: 1115405</li>
            <li>🔧 Version: 2.1</li>
            <li>🚀 Optimized for performance</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">How to Create A/B Tests</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Log into your VWO dashboard</li>
            <li>Create a new A/B test campaign</li>
            <li>Set up variations and goals</li>
            <li>VWO will automatically serve different versions to users</li>
            <li>Monitor results in the VWO dashboard</li>
          </ol>
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