import { defineConfig } from 'vike/config'

export default defineConfig({
  prerender: false,
  // Force production environment for prerendering
  onBeforePrerenderStart: () => {
    process.env.NODE_ENV = 'production'
  },
  // Ensure proper JSX runtime during prerendering
  onRenderHtml: {
    env: 'server-only'
  }
}) 