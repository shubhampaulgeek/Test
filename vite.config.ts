import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr({ prerender: true }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Pre-rendering configuration
  ssr: {
    noExternal: ['react-helmet-async']
  },
  optimizeDeps: {
    include: ['react-helmet-async']
  }
}));
