import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import apiConfig from './apiConfig.json'
const isDevMode = () => process.env.NODE_ENV === 'development'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: '../WebAPI/wwwroot'
  },
  server: {
    proxy: {
      "/api": {
        target: isDevMode() ? apiConfig.dev.useHttps ? apiConfig.dev.https : apiConfig.dev.http : apiConfig.pro.useHttps ? apiConfig.pro.https : apiConfig.pro.http,
        changeOrigin: true,
        secure: isDevMode() ? false : true,
        ws: true,
      }
    }
  }
})
