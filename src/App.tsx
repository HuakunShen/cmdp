import { ThemeProvider } from "@/components/theme-provider"
import { RaycastCmdKDemo } from "./components/commandp/cmd"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="xc-w-full xc-h-screen xc-flex xc-justify-center xc-items-center">
        <RaycastCmdKDemo className="xc-w-[35em] xc-h-96" />
      </div>
    </ThemeProvider>
  )
}

export default App
