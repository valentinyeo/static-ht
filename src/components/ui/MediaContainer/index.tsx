"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface MediaContainerProps {
  src?: string
  dataSrc?: string // For lazy loading
  type: "video" | "image" | "gif"
  alt?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  controls?: boolean
  width?: number
  height?: number
  priority?: boolean
  fallbackText?: string
}

// EXACT SAME CODE STRUCTURE (props and control flow) AS REQUESTED
const MediaContainer: React.FC<MediaContainerProps> = ({
  src,
  dataSrc,
  type,
  alt = "Media content",
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  width = 800,
  height = 600,
  priority = false,
  fallbackText = "Your browser does not support this media type.",
}) => {
  const defaultClasses =
    "w-full md:max-w-2xl h-auto rounded-t-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"

  // Video component
  if (type === "video") {
    return (
      <video
        className={cn(defaultClasses, className)}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        controls={controls}
        src={src}
        data-src={dataSrc}
      >
        {src && <source src={src} type="video/mp4" />}
        {fallbackText}
      </video>
    )
  }

  // Image or GIF component (handled the same way by Next.js Image)
  if (type === "image" || type === "gif") {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn(defaultClasses, className)}
        priority={priority}
        loading="lazy"
        unoptimized={type === "gif"} // Prevent optimization for GIFs to maintain animation
      />
    )
  }

  // Fallback
  return (
    <div
      className={cn(
        defaultClasses,
        "flex items-center justify-center bg-gray-800 text-white",
        className
      )}
    >
        <p>Unsupported media type: {type}</p>
    </div>
  )
}

export default MediaContainer
