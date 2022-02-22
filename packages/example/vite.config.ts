import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from 'unplugin-vue-components/vite'
import { TiroUIResolver } from './TiroUIResolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        TiroUIResolver()
      ]
    })
  ],
  server: {
    host: 'localhost',
    port: 3000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
