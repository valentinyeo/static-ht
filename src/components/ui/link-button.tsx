import * as React from "react"
import Link from "next/link"
import { Button, ButtonProps, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface LinkButtonProps extends Omit<ButtonProps, 'asChild'> {
  href?: string
  target?: '_blank' | '_self'
  rel?: string
  external?: boolean
}

const LinkButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkButtonProps>(
  ({ className, href, target, rel, external, children, variant, size, ...props }, ref) => {
    if (href) {
      if (href.startsWith('http') || external) {
        return (
          <a
            href={href}
            target={target}
            rel={rel}
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {children}
          </a>
        )
      }
      
      return (
        <Link href={href} target={target} rel={rel}>
          <Button
            variant={variant}
            size={size}
            className={className}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...props}
          >
            {children}
          </Button>
        </Link>
      )
    }

    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </Button>
    )
  }
)
LinkButton.displayName = "LinkButton"

export { LinkButton } 