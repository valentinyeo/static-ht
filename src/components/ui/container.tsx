import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "hero" | "section" | "narrow" | "wide"
  as?: React.ElementType
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, variant = "section", as: Component = "div", ...props }, ref) => {
    const variants = {
      hero: cn(
        "flex flex-col items-center text-center w-full lg:gap-6 gap-5",
            "lg:px-10 md:pt-24 lg:pb-0",
            "px-0 pt-12 pb-0"
      ),
      section: cn(
            "w-full flex flex-col items-center max-w-[1344px] mx-auto",
            "lg:px-8 lg:py-16",
            "px-4 py-12"
      ),
      narrow: cn(
            "w-full max-w-4xl mx-auto",
            "lg:px-8 lg:py-12",
            "px-4 py-8"
      ),
      wide: cn(
            "w-full max-w-7xl mx-auto",
            "lg:px-12 lg:py-20",
            "px-6 py-16"
          )
    }

    return (
      <Component
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Container.displayName = "Container"

// Content wrapper with gap spacing
interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gap?: "sm" | "md" | "lg" | "xl"
  as?: React.ElementType
}

export const ContentWrapper = React.forwardRef<HTMLElement, ContentWrapperProps>(
  ({ children, className, gap = "md", as: Component = "div", ...props }, ref) => {
    const gaps = {
      sm: "lg:gap-4 gap-3",
      md: "lg:gap-6 gap-4",
      lg: "lg:gap-8 gap-6",
      xl: "lg:gap-10 gap-8"
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "flex flex-col items-center text-center w-full",
          gaps[gap],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
ContentWrapper.displayName = "ContentWrapper" 