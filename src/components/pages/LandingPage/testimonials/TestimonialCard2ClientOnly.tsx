'use client'

import dynamic from 'next/dynamic'
import { ComponentProps } from 'react'

// Import the original component
import TestimonialCard2 from './TestimonialCard2'

// Create a client-only version to prevent VWO hydration issues
const TestimonialCard2ClientOnly = dynamic(
  () => import('./TestimonialCard2'),
  { 
    ssr: false,
    loading: () => (
      <div className="relative group h-full rounded-xl px-4 py-8 sm:px-6 border border-gray-800/50 bg-white/5 backdrop-blur-sm mb-6 flex-shrink-0 overflow-hidden animate-pulse">
        <div className="relative h-full flex flex-col justify-between z-10">
          <div className="mb-4">
            <div className="h-6 bg-gray-700 rounded mb-3"></div>
          </div>
          <div className="h-20 bg-gray-700 rounded mb-10"></div>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="min-w-0">
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-3 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)

type TestimonialCard2Props = ComponentProps<typeof TestimonialCard2>

export default function TestimonialCard2Wrapper(props: TestimonialCard2Props) {
  return <TestimonialCard2ClientOnly {...props} />
} 