import { cn } from "@/lib/utils"
import React from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"
export {
  CommandGroup as CmdGroup,
  CommandItem as CmdItem,
  CommandInput as CmdInput,
  Command as Cmd,
  CommandList as CmdList,
  CommandEmpty as CmdEmpty,
  CommandShortcut as CmdShortcut
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function CmdFooter({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "xc-flex xc-items-center xc-w-full xc-rounded-b-lg xc-border-t-2 xc-bottom-0 xc-justify-between",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CmdVertifcalSeparator() {
  return <hr className="xc-h-6 xc-w-[1px] xc-bg-muted xc-mt-2 xc-mb-2" />
}

export type ActionItemProps = {
  label: string
  value: string
}

export function ActionPanel({
  inputRef,
  listRef,
  selectedValue,
  actionItems,
  children
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
  actionItems: ActionItemProps[]
  children?: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === "k" && e.metaKey) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }

    document.addEventListener("keydown", listener)

    return () => {
      document.removeEventListener("keydown", listener)
    }
  }, [])

  React.useEffect(() => {
    const el = listRef.current

    if (!el) return

    if (open) {
      el.style.overflow = "hidden"
    } else {
      el.style.overflow = ""
    }
  }, [open, listRef])

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          Actions
          <span className="xc-ml-1 xc-flex xc-space-x-0.5">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[200px] p-0"
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <Command>
          <CommandList>
            <CommandEmpty>No result found.</CommandEmpty>
            <CommandGroup heading={selectedValue}>
              {children}
              {actionItems.map((action) => (
                <CommandItem
                  key={action.value}
                  value={action.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {action.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandInput placeholder="Search..." className="h-9" />
        </Command>
      </PopoverContent>
    </Popover>
  )
}
