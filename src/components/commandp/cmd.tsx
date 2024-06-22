import {
  Command as CommandPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from "@/components/ui/command"
import {
  Logo,
  LinearIcon,
  FigmaIcon,
  SlackIcon,
  YouTubeIcon,
  RaycastIcon
} from "@/components/icons"
import React from "react"
import {
  ClipboardIcon,
  FinderIcon,
  HammerIcon,
  RaycastLightIcon,
  StarIcon,
  WindowIcon
} from "../raycast"
import * as Popover from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

export function Item({
  children,
  value,
  keywords,
  isCommand = false
}: {
  children: React.ReactNode
  value: string
  keywords?: string[]
  isCommand?: boolean
}) {
  return (
    <CommandItem
      value={value}
      keywords={keywords}
      onSelect={() => {
        console.log("Select item", value)
      }}
    >
      {children}
      <span cmdk-raycast-meta="">{isCommand ? "Command" : "Application"}</span>
    </CommandItem>
  )
}

export function Command({ className }: { className?: string }) {
  const [value, setValue] = React.useState("linear")
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <CommandPrimitive
      className={cn("xc-border-[1px]", className)}
      value={value}
      onValueChange={(v) => {
        console.log(v)
        setValue(v)
      }}
    >
      <div cmdk-raycast-top-shine="" />
      <CommandInput
        ref={inputRef}
        autoFocus
        placeholder="Search for apps and commands..."
      />
      <hr cmdk-raycast-loader="" />
      <CommandList ref={listRef}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <Item value="Linear" keywords={["issue", "sprint"]}>
            <Logo>
              <LinearIcon
                style={{
                  width: 12,
                  height: 12
                }}
              />
            </Logo>
            Linear
          </Item>
          <Item value="Figma" keywords={["design", "ui", "ux"]}>
            <Logo>
              <FigmaIcon />
            </Logo>
            Figma
          </Item>
          <Item value="Slack" keywords={["chat", "team", "communication"]}>
            <Logo>
              <SlackIcon />
            </Logo>
            Slack
          </Item>
          <Item value="YouTube" keywords={["video", "watch", "stream"]}>
            <Logo>
              <YouTubeIcon />
            </Logo>
            YouTube
          </Item>
          <Item value="Raycast" keywords={["productivity", "tools", "apps"]}>
            <Logo>
              <RaycastIcon />
            </Logo>
            Raycast
          </Item>
        </CommandGroup>
        <CommandGroup heading="Commands">
          <Item
            isCommand
            value="Clipboard History"
            keywords={["copy", "paste", "clipboard"]}
          >
            <Logo>
              <ClipboardIcon />
            </Logo>
            Clipboard History
          </Item>
          <Item
            isCommand
            value="Import Extension"
            keywords={["import", "extension"]}
          >
            <Logo>
              <HammerIcon />
            </Logo>
            Import Extension
          </Item>
          <Item
            isCommand
            value="Manage Extensions"
            keywords={["manage", "extension"]}
          >
            <Logo>
              <HammerIcon />
            </Logo>
            Manage Extensions
          </Item>
        </CommandGroup>
      </CommandList>

      <div className="xc-flex xc-items-center xc-w-full xc-rounded-b-lg xc-border-t-2 xc-bottom-0 xc-justify-between xc-px-4">
        <RaycastLightIcon className="xc-w-8 xc-h-8" />
        <div className="xc-flex xc-space-x-2">
          <button cmdk-raycast-open-trigger="">
            Open Application
            <kbd>↵</kbd>
          </button>

          <hr className="xc-h-6 xc-w-[1px] xc-bg-muted xc-mt-2 xc-mb-2" />

          <SubCommand
            listRef={listRef}
            selectedValue={value}
            inputRef={inputRef}
          />
        </div>
      </div>
    </CommandPrimitive>
  )
}

export function SubCommand({
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
          <CommandList>
            <CommandGroup heading={selectedValue}>
              <SubItem shortcut="↵">
                <WindowIcon />
                Open Application
              </SubItem>
              <SubItem shortcut="⌘ ↵">
                <FinderIcon />
                Show in Finder
              </SubItem>
              <SubItem shortcut="⌘ I">
                <FinderIcon />
                Show Info in Finder
              </SubItem>
              <SubItem shortcut="⌘ ⇧ F">
                <StarIcon />
                Add to Favorites
              </SubItem>
            </CommandGroup>
          </CommandList>
          <CommandInput placeholder="Search for actions..." />
        </CommandPrimitive>
      </Popover.Content>
    </Popover.Root>
  )
}

export function SubItem({
  children,
  shortcut
}: {
  children: React.ReactNode
  shortcut: string
}) {
  return (
    <CommandItem>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(" ").map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </CommandItem>
  )
}
