import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'cave/',
  plugins: [vue()],
  build: {
      outDir: './docs'
  }
})
