import type { Config } from 'vike/types'

export default {
  // Enable client-side routing
  clientRouting: true,
  // Enable hydration
  hydrationCanBeAborted: true,
  // Configure page files
  filesystemRoutingRoot: '/src/pages',
  // Pass page context to client
  passToClient: ['pageProps', 'urlPathname'],
  // Configure meta tags
  meta: {
    // Global meta tags
    title: {
      env: { server: true, client: true }
    },
    description: {
      env: { server: true, client: true }
    }
  }
} satisfies Config
