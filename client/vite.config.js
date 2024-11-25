import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // For example, proxy requests from `/api` to the backend server
      '/api': {
        target: 'http://localhost:8000',  // The URL of your backend server
        changeOrigin: true,              // To modify the origin header
        secure: false,                   // Set to true if using HTTPS on the backend
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite the path
      },
    },
  },

})
