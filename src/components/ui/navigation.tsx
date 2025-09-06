import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavigationLink {
  href: string
  label: string
  external?: boolean
}

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  links: NavigationLink[]
  orientation?: "horizontal" | "vertical"
  gap?: "sm" | "md" | "lg"
  linkClassName?: string
  as?: React.ElementType
}

export const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  (
    {
      links,
      className,
      orientation = "horizontal",
      gap = "md",
      linkClassName = "",
      as: Component = "nav",
      ...props
    },
    ref
  ) => {
    const gaps = {
      sm: "gap-5",
      md: "gap-6", 
      lg: "lg:gap-6 md:gap-2 gap-3"
    }
    
    const flexDir = orientation === "vertical" ? "flex-col items-center" : "flex-row"
    const linkStyles = "text-neutral rounded-sm hover:text-white hover:bg-white/10 transition-all duration-200 p-2 font-semibold no-underline text-base "
    
    return (
      <Component
        ref={ref}
        className={cn("flex", flexDir, gaps[gap], className)}
        {...props}
      >
        {links.map((link, i) =>
          link.external || link.href.startsWith("http") ? (
            <a
              key={link.href + i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(linkStyles, linkClassName)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href + i}
              href={link.href}
              className={cn(linkStyles, linkClassName)}
            >
              {link.label}
            </Link>
          )
        )}
      </Component>
    )
  }
)
Navigation.displayName = "Navigation"

// Navigation Group for header layout
interface NavigationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gap?: "sm" | "md" | "lg"
}

export const NavigationGroup = React.forwardRef<HTMLDivElement, NavigationGroupProps>(
  ({ children, className, gap = "md", ...props }, ref) => {
    const gaps = {
      sm: "gap-5",
      md: "gap-6",
      lg: "gap-8"
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center", gaps[gap], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NavigationGroup.displayName = "NavigationGroup" 