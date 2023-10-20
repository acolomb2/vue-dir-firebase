/** @type {import('vite').userConfig} */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://acolomb2.github.io/vue-company-directory/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
