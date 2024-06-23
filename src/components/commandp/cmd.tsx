import {
  Logo,
  LinearIcon,
  FigmaIcon,
  SlackIcon,
  YouTubeIcon,
  RaycastIcon
} from "@/components/icons"
import React from "react"
import { ClipboardIcon, HammerIcon, RaycastLightIcon } from "../raycast"
import { cn } from "@/lib/utils"
import {
  CmdFooter,
  CmdVertifcalSeparator,
  CmdGroup,
  CmdInput,
  CmdList,
  ActionPanel,
  CmdEmpty,
  CmdItem,
  CmdShortcut,
  Cmd
} from "./lib"
import { Button } from "@/components/ui/button"

export function RaycastCmdKDemo({ className }: { className?: string }) {
  const [value, setValue] = React.useState("linear")
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <Cmd
      className={cn("xc-border-[1px]", className)}
      value={value}
      onValueChange={(v) => {
        console.log(v)
        setValue(v)
      }}
    >
      <CmdInput
        ref={inputRef}
        autoFocus
        placeholder="Search for apps and commands..."
      />
      <hr />
      <CmdList ref={listRef}>
        <CmdEmpty>No results found.</CmdEmpty>
        <CmdGroup heading="Suggestions">
          <CmdItem value="Linear" keywords={["issue", "sprint"]}>
            <Logo>
              <LinearIcon
                style={{
                  width: 12,
                  height: 12
                }}
              />
            </Logo>
            Linear
          </CmdItem>
          <CmdItem value="Figma" keywords={["design", "ui", "ux"]}>
            <Logo>
              <FigmaIcon />
            </Logo>
            Figma
          </CmdItem>
          <CmdItem value="Slack" keywords={["chat", "team", "communication"]}>
            <Logo>
              <SlackIcon />
            </Logo>
            Slack
            <CmdShortcut>⌘P</CmdShortcut>
          </CmdItem>
          <CmdItem value="YouTube" keywords={["video", "watch", "stream"]}>
            <Logo>
              <YouTubeIcon />
            </Logo>
            YouTube
            <CmdShortcut>⌘P</CmdShortcut>
          </CmdItem>
          <CmdItem value="Raycast" keywords={["productivity", "tools", "apps"]}>
            <Logo>
              <RaycastIcon />
            </Logo>
            Raycast
          </CmdItem>
        </CmdGroup>
        <CmdGroup heading="Commands">
          <CmdItem
            value="Clipboard History"
            keywords={["copy", "paste", "clipboard"]}
          >
            <Logo>
              <ClipboardIcon />
            </Logo>
            Clipboard History
          </CmdItem>
          <CmdItem value="Import Extension" keywords={["import", "extension"]}>
            <Logo>
              <HammerIcon />
            </Logo>
            Import Extension
          </CmdItem>
          <CmdItem value="Manage Extensions" keywords={["manage", "extension"]}>
            <Logo>
              <HammerIcon />
            </Logo>
            Manage Extensions
          </CmdItem>
        </CmdGroup>
      </CmdList>

      <CmdFooter>
        <RaycastLightIcon className="xc-w-6 xc-h-6 xc-ml-2" />
        <div className="xc-flex xc-space-x-2">
          <Button variant="ghost">
            Open Application
            <kbd className="xc-ml-1">↵</kbd>
          </Button>

          <CmdVertifcalSeparator />
          <ActionPanel
            listRef={listRef}
            selectedValue={value}
            inputRef={inputRef}
            actionItems={[
              { label: "Open Application", value: "open" },
              { label: "Show in Finder", value: "finder" },
              { label: "Show Info in Finder", value: "info" },
              { label: "Add to Favorites", value: "favorites" }
            ]}
          ></ActionPanel>
        </div>
      </CmdFooter>
    </Cmd>
  )
}
