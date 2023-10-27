import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import qiankun from 'vite-plugin-qiankun';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() ,qiankun('vue3-vite-app', {
    useDevMode: true
  })],
  server:{
    host: '127.0.0.1',
    port: 5174,
  }
 
})
