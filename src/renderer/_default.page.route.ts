import { resolveRoute } from 'vike/routing';

// We use a catch-all route to implement client-side routing.
// We can also use Server Routing instead: https://vite-plugin-ssr.com/SR

export default function route(pageContext: { urlPathname: string }) {
  // Use resolveRoute for proper client-side routing
  const match = resolveRoute('/*', pageContext.urlPathname);
  return match;
}
