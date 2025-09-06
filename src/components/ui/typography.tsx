import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  as?: React.ElementType
}

// Main Headline component
export const Headline = React.forwardRef<
  HTMLElement,
  TypographyProps & { variant?: "regular" | "hero" }
>(
  (
    {
      children,
      className,
      as: Component = "h1",
      variant = "regular",
      ...props
    },
    ref
  ) => {
    // Styles for variants
    const heroStyles =
      "!text-[clamp(3.0rem,_1.6250rem_+_6vw,_96px)] !leading-[0.95] font-bold text-white text-center text-balance -tracking-4";
    const regularStyles =
      "text-[3rem] leading-[3.375rem] font-semibold -tracking-4 text-balance text-brand-neutrals-900 dark:text-white text-center";

    return (
      <Component
        ref={ref}
        className={cn(
          variant === "hero" ? heroStyles : regularStyles,
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Headline.displayName = "Headline";

// Subheadline component
export const Subheadline = React.forwardRef<
  HTMLElement,
  TypographyProps & { variant?: "regular" | "hero" }
>(
  (
    {
      children,
      className,
      as: Component = "p",
      variant = "regular",
      ...props
    },
    ref
  ) => {
    // Styles for variants
    const heroStyles =
      "text-white font-medium text-center max-w-[80%] sm:text-[1.6875rem] md:leading-[1.8875rem] text-base leading-[1.25rem] !text-balance";
    const regularStyles =
      "[&_b]:md:font-semibold [&_strong]:md:font-semibold text-base/[1.25rem] md:text-1.5xl/[1.6875rem] !text-balance text-brand-neutrals-600 dark:text-brand-light-grey-wash";

    return (
      <Component
        ref={ref}
        className={cn(
          variant === "hero" ? heroStyles : regularStyles,
          className
        )}
        style={{ letterSpacing: "0.5px" }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Subheadline.displayName = "Subheadline";

// Section Title component
export const SectionTitle = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-bold text-center",
          "lg:text-4xl lg:leading-tight",
          "text-2xl leading-tight",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
SectionTitle.displayName = "SectionTitle"

// Body text component
export const BodyText = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-center max-w-full",
          "lg:text-lg lg:leading-relaxed",
          "text-base leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
BodyText.displayName = "BodyText" 


// Card Headline
export const CardHeadline = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = "h2", ...props }, ref) => {
    return (
      <Component ref={ref} className={cn("text-[1.5rem] leading-[1.875rem] font-semibold -tracking-4 text-white", className)} {...props}>
        {children}
      </Component>
    )
  }
)
CardHeadline.displayName = "CardHeadline"

// Card Subtext
export const CardSubheadline = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, as: Component = "p", ...props }, ref) => {
    return (
      <Component ref={ref} className={cn("[&_b]:md:font-semibold [&_strong]:md:font-semibold text-base/[1.125rem] md:text-lg/[1.5rem] !text-pretty  text-brand-subtext", className)} {...props}>
        {children}
      </Component>
    )
  }
)
CardSubheadline.displayName = "CardSubheadline"