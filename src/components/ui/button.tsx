import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "xc-inline-flex xc-items-center xc-justify-center xc-whitespace-nowrap xc-rounded-md xc-text-sm xc-font-medium xc-transition-colors focus-visible:xc-outline-none focus-visible:xc-ring-1 focus-visible:xc-ring-ring disabled:xc-pointer-events-none disabled:xc-opacity-50",
  {
    variants: {
      variant: {
        default:
          "xc-bg-primary xc-text-primary-foreground xc-shadow hover:xc-bg-primary/90",
        destructive:
          "xc-bg-destructive xc-text-destructive-foreground xc-shadow-sm hover:xc-bg-destructive/90",
        outline:
          "xc-border xc-border-input xc-bg-background xc-shadow-sm hover:xc-bg-accent hover:xc-text-accent-foreground",
        secondary:
          "xc-bg-secondary xc-text-secondary-foreground xc-shadow-sm hover:xc-bg-secondary/80",
        ghost: "hover:xc-bg-accent hover:xc-text-accent-foreground",
        link: "xc-text-primary xc-underline-offset-4 hover:xc-underline",
      },
      size: {
        default: "xc-h-9 xc-px-4 xc-py-2",
        sm: "xc-h-8 xc-rounded-md xc-px-3 xc-text-xs",
        lg: "xc-h-10 xc-rounded-md xc-px-8",
        icon: "xc-h-9 xc-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
