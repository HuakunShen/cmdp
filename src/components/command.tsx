import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon
} from "@radix-ui/react-icons"
import * as Popover from "@radix-ui/react-popover"
import { Command as CommandPrimitive } from "cmdk"
import { Command as CmdkCommand } from "cmdk"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/command"
import React from "react"

function SubItem({
  children,
  shortcut
}: {
  children: React.ReactNode
  shortcut: string
}) {
  return (
    <CommandPrimitive.Item>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(" ").map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </CommandPrimitive.Item>
  )
}

function SubCommand({
  inputRef,
  listRef,
  selectedValue
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
}) {
  const [open, setOpen] = React.useState(false)

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
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger
        cmdk-raycast-subcommand-trigger=""
        onClick={() => setOpen(true)}
        aria-expanded={open}
      >
        Actions
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </Popover.Trigger>
      <Popover.Content
        side="top"
        align="end"
        className="raycast-submenu"
        sideOffset={16}
        alignOffset={0}
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <CommandPrimitive>
          <CommandPrimitive.List>
            <CommandPrimitive.Group heading={selectedValue}>
              <SubItem shortcut="↵">
                <GearIcon />
                Open Application
              </SubItem>
              <SubItem shortcut="⌘ ↵">
                <GearIcon />
                Show in Finder
              </SubItem>
              <SubItem shortcut="⌘ I">
                <GearIcon />
                Show Info in Finder
              </SubItem>
              <SubItem shortcut="⌘ ⇧ F">
                <GearIcon />
                Add to Favorites
              </SubItem>
            </CommandPrimitive.Group>
          </CommandPrimitive.List>
          <CommandPrimitive.Input placeholder="Search for actions..." />
        </CommandPrimitive>
      </Popover.Content>
    </Popover.Root>
  )
}

export function CommandDemo() {
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const [value, setValue] = React.useState("linear")
  const listRef = React.useRef(null)
  return (
    <CmdkCommand
      className="rounded-lg border shadow-md"
      onValueChange={(v) => {
        console.log("value", v)
        setValue(v)
      }}
      onSelect={(v) => {
        console.log("selected", v)
      }}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <RocketIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <PersonIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <EnvelopeClosedIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <GearIcon className="xc-mr-2 xc-h-4 xc-w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      {/* <div className="xc-flex xc-h-8 xc-items-center xc-w-full xc-px-3 xc-justify-between">
        <GearIcon />
        <button>
          Open Application
          <kbd>↵</kbd>
        </button>

        <hr />
        <SubCommand
          listRef={listRef}
          selectedValue={value}
          inputRef={inputRef}
        />
      </div> */}
    </CmdkCommand>
  )
}
