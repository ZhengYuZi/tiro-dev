import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host:"111.111.125.235",
    port: 3000,
    open: true,
    cors: true
  }
})
