import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "xc-fixed xc-inset-0 xc-z-50 xc-bg-black/80 xc- data-[state=open]:xc-animate-in data-[state=closed]:xc-animate-out data-[state=closed]:xc-fade-out-0 data-[state=open]:xc-fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "xc-fixed xc-left-[50%] xc-top-[50%] xc-z-50 xc-grid xc-w-full xc-max-w-lg xc-translate-x-[-50%] xc-translate-y-[-50%] xc-gap-4 xc-border xc-bg-background xc-p-6 xc-shadow-lg xc-duration-200 data-[state=open]:xc-animate-in data-[state=closed]:xc-animate-out data-[state=closed]:xc-fade-out-0 data-[state=open]:xc-fade-in-0 data-[state=closed]:xc-zoom-out-95 data-[state=open]:xc-zoom-in-95 data-[state=closed]:xc-slide-out-to-left-1/2 data-[state=closed]:xc-slide-out-to-top-[48%] data-[state=open]:xc-slide-in-from-left-1/2 data-[state=open]:xc-slide-in-from-top-[48%] sm:xc-rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="xc-absolute xc-right-4 xc-top-4 xc-rounded-sm xc-opacity-70 xc-ring-offset-background xc-transition-opacity hover:xc-opacity-100 focus:xc-outline-none focus:xc-ring-2 focus:xc-ring-ring focus:xc-ring-offset-2 disabled:xc-pointer-events-none data-[state=open]:xc-bg-accent data-[state=open]:xc-text-muted-foreground">
        <Cross2Icon className="xc-h-4 xc-w-4" />
        <span className="xc-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "xc-flex xc-flex-col xc-space-y-1.5 xc-text-center sm:xc-text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "xc-flex xc-flex-col-reverse sm:xc-flex-row sm:xc-justify-end sm:xc-space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "xc-text-lg xc-font-semibold xc-leading-none xc-tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("xc-text-sm xc-text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
