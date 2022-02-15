import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from 'unplugin-vue-components/vite'
import { TiroResolver } from './TiroResolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        TiroResolver()
      ]
    })
  ]
})
