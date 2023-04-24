import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupReplace from "@rollup/plugin-replace"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) =>{
  if (command === "build") {
    return {
      plugins: [react()],
      base: "/calculator/"
    }
  } else {
    return {
      plugins: [react()]
    }
  }
})
