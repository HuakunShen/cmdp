import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Command as CommandPrimitive } from "cmdk"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, onValueChange, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "xc-flex xc-h-full xc-w-full xc-flex-col xc-overflow-hidden xc-rounded-md xc-bg-popover xc-text-popover-foreground",
      className
    )}
    onValueChange={onValueChange}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="xc-overflow-hidden xc-p-0">
        <Command className="[&_[cmdk-group-heading]]:xc-px-2 [&_[cmdk-group-heading]]:xc-font-medium [&_[cmdk-group-heading]]:xc-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:xc-pt-0 [&_[cmdk-group]]:xc-px-2 [&_[cmdk-input-wrapper]_svg]:xc-h-5 [&_[cmdk-input-wrapper]_svg]:xc-w-5 [&_[cmdk-input]]:xc-h-12 [&_[cmdk-item]]:xc-px-2 [&_[cmdk-item]]:xc-py-3 [&_[cmdk-item]_svg]:xc-h-5 [&_[cmdk-item]_svg]:xc-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="xc-flex xc-items-center xc-border-b xc-px-3"
    cmdk-input-wrapper=""
  >
    <MagnifyingGlassIcon className="xc-mr-2 xc-h-4 xc-w-4 xc-shrink-0 xc-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "xc-flex xc-h-10 xc-w-full xc-rounded-md xc-bg-transparent xc-py-3 xc-text-sm xc-outline-none placeholder:xc-text-muted-foreground disabled:xc-cursor-not-allowed disabled:xc-opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "xc-overflow-y-auto xc-overflow-x-hidden",
      className
    )}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="xc-py-6 xc-text-center xc-text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "xc-overflow-hidden xc-p-1 xc-text-foreground [&_[cmdk-group-heading]]:xc-px-2 [&_[cmdk-group-heading]]:xc-py-1.5 [&_[cmdk-group-heading]]:xc-text-xs [&_[cmdk-group-heading]]:xc-font-medium [&_[cmdk-group-heading]]:xc-text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("xc--mx-1 xc-h-px xc-bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "xc-relative xc-flex xc-cursor-default xc-select-none xc-items-center xc-rounded-sm xc-px-2 xc-py-1.5 xc-text-sm xc-outline-none data-[disabled=true]:xc-pointer-events-none data-[selected=true]:xc-bg-accent data-[selected=true]:xc-text-accent-foreground data-[disabled=true]:xc-opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "xc-ml-auto xc-text-xs xc-tracking-widest xc-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
}
