import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// Set the base path for GitHub Pages deployment
const basePath = '/Sportyassignment/';

export default defineConfig({
  base: basePath,
  plugins: [vue()]
})