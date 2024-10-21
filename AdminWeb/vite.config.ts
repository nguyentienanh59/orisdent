import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {},
        javascriptEnabled: true
      },
      scss: {
        additionalData: `
        @import "./src/common/assets/scss/variables/_variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'app-admin': resolve(__dirname, './src/app-admin')
    }
  }
});
