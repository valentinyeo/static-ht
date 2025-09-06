"use client"

import { useState, useCallback, useEffect, useRef } from 'react'
import "../../../../styles/embla.css"
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from "@/components/ui/embla/dotButton"
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

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  testimonials: TestimonialProps[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { testimonials, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  // Opacity range can be adjusted with these constants:
  const MIN_OPACITY = 0.5   // minimum opacity value
  const MAX_OPACITY = 1.0   // maximum opacity value

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          // Calculate tweenValue in [0,1], then map to [MIN_OPACITY, MAX_OPACITY]
          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const clampedTween = numberWithinRange(tweenValue, 0, 1)
          const opacity = (MIN_OPACITY + (MAX_OPACITY - MIN_OPACITY) * clampedTween).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity, setTweenFactor])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((testimonial, index) => (
            <div className="embla__slide max-w-[75%]" key={index}>
              <div className="embla__slide__content p-0">
                <TestimonialCard2 testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface TestimonialMobileCarouselProps {
  testimonials: TestimonialProps[]
}

export default function TestimonialMobileCarousel({ testimonials }: TestimonialMobileCarouselProps) {
  // Set a reasonable autoplay duration (e.g., 5 seconds per slide)
  const OPTIONS: EmblaOptionsType = { loop: true, duration: 10000 }

  return (
    <div className="block md:hidden w-full px-4">
      <EmblaCarousel testimonials={testimonials} options={OPTIONS} />
    </div>
  )
} 