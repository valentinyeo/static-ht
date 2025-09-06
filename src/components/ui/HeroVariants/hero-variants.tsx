"use client"

import React from "react"
import GradientContainer from "../GradientContainer"

import MediaContainer from "../MediaContainer"
import { Headline, Subheadline } from "../typography"

type GradKey =
  | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13"
  | "a" | "b" | "c" | "d"

interface BaseProps {
  title: string
  description: string
  gradientVariant?: GradKey
  image: string
  imageAlt?: string
}

/**
 * Variant A — split layout with right-overlapping media (matches “Tab” reference)
 */
export function HeroVariantSplit({
  title,
  description,
  gradientVariant = "5",
  image,
  imageAlt = "Preview",
}: BaseProps) {
  return (
    <GradientContainer
      gradientVariant={gradientVariant}
      variant="fullscreen"
      className="relative flex flex-col items-end justify-between lg:grid lg:grid-cols-2 sm:aspect-[344/610] max-h-[610px] w-full overflow-hidden rounded-2xl lg:aspect-[1296/656] lg:max-h-[656px]"
    >
      <div className="flex-1 self-end lg:p-7 xl:p-14">
        <Headline className="text-left mb-4">{title}</Headline>
        <Subheadline className="font-medium text-left">{description}</Subheadline>
      </div>

      <div className="flex-1">
        {/* Wrapper to mimic dark floating panel */}
        <div className="relative z-10 lg:[grid-area:1_/_2_/_2_/_4]">
          <div className="rounded-[18px] bg-black/90 ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.75)]">
            <MediaContainer
              src={image}
              type="image"
              alt={imageAlt}
              width={1200}
              height={1200}
              className="relative z-10 aspect-[320/380] max-h-[380px] sm:aspect-[450/380] md:max-h-[480px] lg:aspect-[initial] max-[400px]:!max-h-[320px] !rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </GradientContainer>
  )
}

/**
 * Variant B — centered docked media with left text (matches “Agent” reference)
 */
export function HeroVariantDocked({
  title,
  description,
  gradientVariant = "10",
  image,
  imageAlt = "Preview",
}: BaseProps) {
  return (
    <GradientContainer
      gradientVariant={gradientVariant}
      variant="fullscreen"
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(640px,820px)_1fr] items-center sm:aspect-[344/610] max-h-[610px] w-full overflow-hidden rounded-2xl lg:aspect-[1296/656] lg:max-h-[656px]"
    >
      {/* Left text block, bottom-left aligned */}
      <div className="z-10 pointer-events-none lg:col-start-1 lg:row-start-1 self-end px-5 md:px-8 xl:px-12 pb-8 md:pb-10">
        <Headline className="mb-4">{title}</Headline>
        <Subheadline className="font-medium">{description}</Subheadline>
      </div>

      {/* Center floating panel */}
      <div className="lg:col-start-2 lg:row-start-1 place-self-center w-full max-w-[820px] px-4">
        <div className="rounded-[18px] bg-black/90 ring-1 ring-white/10 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.75)]">
          <MediaContainer
            src={image}
            type="image"
            alt={imageAlt}
            width={1400}
            height={900}
            className="!rounded-[18px]"
          />
        </div>
      </div>
    </GradientContainer>
  )
}
