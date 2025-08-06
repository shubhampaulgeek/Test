import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: 'react',
      jsxRuntime: 'automatic'
    }),
    ssr({ 
      prerender: true // Prerendering enabled here
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      // Using "src" as the new alias to avoid '@'
      "src": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async']
  },
  optimizeDeps: {
    include: ['react-helmet-async']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
}));
