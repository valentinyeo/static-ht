"use client"

import { useState } from 'react'
import TestimonialCard2 from './TestimonialCard2ClientOnly'

interface TestimonialProps {
  name: string
  title: string
  image: string
  text: string
  pullQuote?: string
  rating?: number
  grayscale?: boolean
}

interface ScrollingColumnProps {
  testimonials: TestimonialProps[]
  direction: "up" | "down"
  speed: number
}

function ScrollingColumn({ testimonials, direction, speed }: ScrollingColumnProps) {
  const [isPaused, setIsPaused] = useState(false)

  // Triple the testimonials for seamless infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <div
      className="h-[500px] lg:h-[900px] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"} ${isPaused ? "pause-animation" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <TestimonialCard2 key={`testimonial-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

interface ScrollingColumnsProps {
  testimonials: TestimonialProps[]
}

export default function ScrollingColumns({ testimonials }: ScrollingColumnsProps) {
  // Create 4 columns, each with all testimonials in different orders
  function createStaggeredColumn(offset: number) {
    const arr = [...testimonials]
    // Rotate array by offset
    return arr.slice(offset).concat(arr.slice(0, offset))
  }

  const column1 = createStaggeredColumn(0)
  const column2 = createStaggeredColumn(2) // Changed from 1 to 2 for better distribution
  const column3 = createStaggeredColumn(4) // Changed from 2 to 4
  const column4 = createStaggeredColumn(6) // Changed from 3 to 6

  return (
    <>
      {/* Desktop: Show 4 scrolling columns (hidden on mobile/tablet) */}
      <div className="hidden lg:block w-full px-4 h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}>
        <div className="grid grid-cols-4 gap-6 mx-auto">
          <ScrollingColumn testimonials={column1} direction="up" speed={60} />
          <ScrollingColumn testimonials={column2} direction="down" speed={60} />
          <ScrollingColumn testimonials={column3} direction="up" speed={60} />
          <ScrollingColumn testimonials={column4} direction="down" speed={60} />
        </div>
      </div>

      {/* Tablet: Show 3 columns (hidden on mobile and desktop) */}
      <div className="hidden md:block lg:hidden w-full px-4 h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ScrollingColumn testimonials={column1} direction="up" speed={70} />
          <ScrollingColumn testimonials={column3} direction="down" speed={70} />
          <ScrollingColumn testimonials={column2} direction="up" speed={70} />
        </div>
      </div>
    </>
  )
} 