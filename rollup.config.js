import { readFileSync } from "fs"
import { join } from "path"
import { cwd } from "process"
import typescript from "@rollup/plugin-typescript"

const pkg = JSON.parse(readFileSync(join(cwd(), "package.json"), "utf8"))

export default {
  input: "./src/components/commandp/index.tsx",
  output: [
    {
      file: pkg.exports.import,
      format: "esm"
    },
    {
      file: pkg.exports.require,
      format: "cjs"
    }
  ],
  plugins: [typescript()]
}
