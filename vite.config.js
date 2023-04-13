import { defineConfig } from 'vite'
import { join } from 'path';
import serveStatic from 'serve-static';
import path from 'path';
import cesium from 'vite-plugin-cesium';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium()
  ],
})
