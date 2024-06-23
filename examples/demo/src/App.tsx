import {
  Cmd,
  CmdEmpty,
  CmdFooter,
  CmdGroup,
  CmdInput,
  CmdItem,
  CmdList,
  CmdShortcut,
  ActionPanel,
  CmdVertifcalSeparator
} from "@crosscopy/ui"
import '@crosscopy/ui/css'
import React from "react"
// import '../../../src/index.css'

function App() {
  const [value, setValue] = React.useState("linear")
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Cmd
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
              Linear
            </CmdItem>
            <CmdItem value="Figma" keywords={["design", "ui", "ux"]}>
              Figma
            </CmdItem>
            <CmdItem value="Slack" keywords={["chat", "team", "communication"]}>
              Slack
            </CmdItem>
            <CmdItem value="YouTube" keywords={["video", "watch", "stream"]}>
              YouTube
              <CmdShortcut>⌘P</CmdShortcut>
            </CmdItem>
            <CmdItem
              value="Raycast"
              keywords={["productivity", "tools", "apps"]}
            >
              Raycast
            </CmdItem>
          </CmdGroup>
          <CmdGroup heading="Commands">
            <CmdItem
              value="Clipboard History"
              keywords={["copy", "paste", "clipboard"]}
            >
              Clipboard History
            </CmdItem>
            <CmdItem
              value="Import Extension"
              keywords={["import", "extension"]}
            >
              Import Extension
            </CmdItem>
            <CmdItem
              value="Manage Extensions"
              keywords={["manage", "extension"]}
            >
              Manage Extensions
            </CmdItem>
          </CmdGroup>
        </CmdList>

        <CmdFooter>
          {/* <RaycastLightIcon className="xc-w-6 xc-h-6 xc-ml-2" /> */}
          <div className="xc-flex xc-space-x-2">
            <button>
              Open Application
              <kbd className="xc-ml-1">↵</kbd>
            </button>

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
    </div>
  )
}

export default App
