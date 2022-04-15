/*
 * @Author: yuxiong.zhang
 * @Date: 2022-04-07 15:58:35
 * @LastEditors: yuxiong.zhang
 * @LastEditTime: 2022-04-15 09:38:59
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    port: 4000, //启动端口
    // open: true, // 自动打开浏览器
    // hmr: {
    //     host: '127.0.0.1',
    //     port: 8088,
    // },
    // 设置 https 代理
    // proxy: {
    //   '/api': {
    //     target: 'your https address',
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
