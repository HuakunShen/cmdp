import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "xc-z-50 xc-w-72 xc-rounded-md xc-border xc-bg-popover xc-p-1.5 xc-text-popover-foreground xc-shadow-md xc-outline-none data-[state=open]:xc-animate-in data-[state=closed]:xc-animate-out data-[state=closed]:xc-fade-out-0 data-[state=open]:xc-fade-in-0 data-[state=closed]:xc-zoom-out-95 data-[state=open]:xc-zoom-in-95 data-[side=bottom]:xc-slide-in-from-top-2 data-[side=left]:xc-slide-in-from-right-2 data-[side=right]:xc-slide-in-from-left-2 data-[side=top]:xc-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
