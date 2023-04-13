import { defineConfig } from 'vite'
import { join } from 'path';
import serveStatic from 'serve-static';
import path from 'path';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],

  server: {
    middleware: [
      serveStatic(join(__dirname, 'node_modules', 'cesium', 'Build', 'Cesium'))
    ]
  }
})
