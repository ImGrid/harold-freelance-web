import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/',
  
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  
  build: {
    outDir: 'dist',
    
    emptyOutDir: true,
    
    sourcemap: false,
    
    assetsDir: 'assets',
    
    assetsInlineLimit: 4096, // 4kb
    
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          
          'router-vendor': ['react-router-dom'],
          
          'email-vendor': ['@emailjs/browser'],
        }
      }
    },
    
    minify: 'esbuild', // Más rápido que terser
    
    target: 'es2020',
    
    chunkSizeWarningLimit: 1000, // 1MB warning
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@data': resolve(__dirname, 'src/data'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@assets': resolve(__dirname, 'src/assets'),
    }
  },
  
  css: {
    devSourcemap: true,
    
    postcss: './postcss.config.js',
  },
  
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emailjs/browser'
    ],
    
  },
  
  // Variables de entorno
  envPrefix: 'VITE_',
  
})
