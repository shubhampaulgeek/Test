import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vike from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Force production mode for builds
  const isProduction = mode === 'production' || process.env.NODE_ENV === 'production';
  
  return {
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
        jsxRuntime: 'automatic',
        jsxImportSource: 'react'
      }),
      vike({ prerender: false }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Pre-rendering configuration
    ssr: {
      noExternal: ['react-helmet-async', 'react', 'react-dom']
    },
    optimizeDeps: {
      include: ['react-helmet-async']
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
    },
    build: {
      rollupOptions: {
        external: []
      }
    }
  };
});
