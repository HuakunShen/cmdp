import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Button } from "@/components/ui/button"
import { CommandDemo } from "./components/command"
import { RaycastCMDK } from "./components/raycast"
import { ThemeProvider } from "@/components/theme-provider"
import { Command } from "./components/commandp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <h1 className="xc-text-3xl font-bold underline">Hello world!</h1>
      <h1 className="pb-5 border border-red-500">hello</h1>
      {/* <CommandDemo /> */}
      <RaycastCMDK />
      <br />
      <Command className="xc-w-[35em]" />
    </ThemeProvider>
  )
}

export default App
