import React from 'react'
import { cn } from '@/lib/utils'

interface CTAContainerProps {
  children: React.ReactNode
  className?: string
  marginTop?: 'sm' | 'md' | 'lg' | 'xl'
}

const marginTopClasses = {
  sm: 'mt-2',
  md: 'mt-8',
  lg: 'mt-14',
  xl: 'mt-20'
}

export const CTAContainer: React.FC<CTAContainerProps> = ({ 
  children, 
  className,
  marginTop = 'lg'
}) => {
  return (
    <div className={cn(
      "flex justify-center max-w-2xl mx-auto",
      marginTopClasses[marginTop],
      className
    )}>
      {children}
    </div>
  )
}

export default CTAContainer 