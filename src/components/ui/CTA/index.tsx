'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  id?: string
  target?: '_blank' | '_self'
  rel?: string
  includeVWO?: boolean
}

const variantStyles = {
  primary: 'bg-white text-black border border-white hover:bg-gray-50 hover:shadow-lg',
  secondary: 'bg-black text-white border border-white/20 hover:bg-gray-900 hover:shadow-lg',
  outline: 'border border-white text-white bg-transparent hover:bg-white/10 hover:shadow-md',
  gradient: 'bg-gradient-to-r from-purple-500 to-blue-400 text-white border-0 hover:from-purple-600 hover:to-blue-500 hover:shadow-lg'
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm font-semibold',
  md: 'px-6 py-3 text-base font-semibold',
  lg: 'px-8 py-4 text-lg font-semibold'
}

const baseStyles = 'inline-block text-center no-underline bg-foreground rounded-md cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-base'

export const CTAButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  id="get-started-button",
  target,
  rel,
  includeVWO = false,
}: CTAButtonProps) => {
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    includeVWO && 'VWO_TEST',
    className
  )

  const commonProps = {
    className: buttonClasses,
    id,
    ...(target && { target }),
    ...(rel && { rel })
  }

  if (href) {
    // External link
    if (href.startsWith('http')) {
      return (
        <a href={href} {...commonProps}>
          {children}
        </a>
      )
    }
    
    // Internal link
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    )
  }

  // Button element
  return (
    <button onClick={onClick} {...commonProps}>
      {children}
    </button>
  )
}

export default CTAButton 