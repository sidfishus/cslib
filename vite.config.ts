import { defineConfig } from 'vite'
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [dts({ tsconfigPath: './tsconfig.app.json'})],
  build: {
    lib: {
      name: "cslib",
      entry: ["src/index.ts"],
    },
    sourcemap: true,
  },
})
