import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { TiroUIResolver } from './TiroUIResolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [TiroUIResolver()]
    })
  ],
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    cors: true
  }
})
