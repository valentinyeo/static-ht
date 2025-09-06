import Image from "next/image"
import { useEffect, useState } from 'react'

interface TestimonialProps {
  name: string
  title: string
  image: string
  text: string
  pullQuote?: string
  rating?: number
  grayscale?: boolean
}

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex ">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`relative right-[2px] w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: TestimonialProps
}

export default function TestimonialCard2({ testimonial }: TestimonialCardProps) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Prevent hydration mismatch by using consistent content until hydrated
  const displayQuote = isHydrated ? (testimonial.pullQuote || testimonial.text.slice(0, 50) + '...') : (testimonial.pullQuote || testimonial.text.slice(0, 50) + '...')

  return (
    <div className="relative group h-full  rounded-xl px-4 py-8 sm:px-6 border border-gray-800/50 bg-white/5 backdrop-blur-sm mb-6 flex-shrink-0 overflow-hidden">
      {/* Gradient background that shows on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#291e284f] to-[#b700ffa6] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

      {/* Top dark overlay for readability */}
      <div className="absolute top-0 left-0 right-0 h-1/2  bg-opacity-20 pointer-events-none" />

      {/* Content layer */}
      <div className="relative h-full flex flex-col justify-between z-10">
        {/* Pull Quote */}
        <div className="mb-4 VWO_393" suppressHydrationWarning>
          <h4 className="text-white text-lg md:text-xl font-semibold mb-3" suppressHydrationWarning>&ldquo;{displayQuote}&rdquo;</h4>
        </div>

        <p className="text-gray-300 text-base md:text-lg">{testimonial.text}</p>
        <div className="VWO_393_disable_on_VWO flex items-start gap-3 mt-10">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-white text-sm md:text-base font-bold">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm md:text-sm font-semibold">{testimonial.title}</p>
          </div>
        </div>

        <div className="VWO_393 flex items-start gap-3 mt-auto sm:mt-10" suppressHydrationWarning>
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full flex-shrink-0"
          />
          <div className="min-w-0 ">
            <div className="flex flex-col items-start gap-1">
              <p className='inline-block gap-2 text-left space-x-2'>
                <span className="text-white text-sm md:text-base font-bold whitespace-nowrap">{testimonial.name}</span>
                <span className="text-gray-400 text-sm md:text-sm font-semibold">{testimonial.title}</span>
              </p>
              {/* Star Rating - inline with name */}
              <StarRating rating={testimonial.rating || 5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 