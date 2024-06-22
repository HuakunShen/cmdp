import { Command } from "cmdk"
import * as ShadCmd from "@/components/ui/command"
import {
  Logo,
  LinearIcon,
  FigmaIcon,
  SlackIcon,
  YouTubeIcon,
  RaycastIcon
} from "@/components/icons"
import React from "react"
import { ClipboardIcon } from "@radix-ui/react-icons"
import { HammerIcon, RaycastLightIcon } from "../raycast"

function Item({
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
    <Command.Item
      value={value}
      keywords={keywords}
      onSelect={() => {
        console.log("Select item", value)
      }}
    >
      {children}
      <span cmdk-raycast-meta="">{isCommand ? "Command" : "Application"}</span>
    </Command.Item>
  )
}

export function Command2() {
  const [value, setValue] = React.useState("linear")
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <ShadCmd.Command
      value={value}
      onValueChange={(v) => {
        console.log(v)
        setValue(v)
      }}
    >
      <div cmdk-raycast-top-shine="" />
      <ShadCmd.CommandInput
        ref={inputRef}
        autoFocus
        placeholder="Search for apps and commands..."
      />
      <hr cmdk-raycast-loader="" />
      <Command.List ref={listRef}>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
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
        </Command.Group>
        <Command.Group heading="Commands">
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
            <HammerIcon />
            Import Extension
          </Item>
          <Item
            isCommand
            value="Manage Extensions"
            keywords={["manage", "extension"]}
          >
            <HammerIcon />
            Manage Extensions
          </Item>
        </Command.Group>
      </Command.List>

      <div cmdk-raycast-footer="">
        {/* {theme === 'dark' ? <RaycastDarkIcon /> : <RaycastLightIcon />} */}
        <RaycastLightIcon />
        <button cmdk-raycast-open-trigger="">
          Open Application
          <kbd>↵</kbd>
        </button>

        <hr />

        {/* <SubCommand
          listRef={listRef}
          selectedValue={value}
          inputRef={inputRef}
        /> */}
      </div>
    </ShadCmd.Command>
  )
}
