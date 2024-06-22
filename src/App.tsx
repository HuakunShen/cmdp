import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Button } from "@/components/ui/button"
import { CommandDemo } from "./components/command"
import { RaycastCMDK } from "./components/raycast"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="xc-text-3xl font-bold underline">Hello world!</h1>
      <h1 className="pb-5 border border-red-500">hello</h1>
      {/* <CommandDemo /> */}
      <RaycastCMDK />
    </div>
  )
}

export default App
