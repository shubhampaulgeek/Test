import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import type { PageContextServer } from './types';

export { render };
export { passToClient };

const passToClient = ['pageProps', 'urlPathname'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlPathname } = pageContext;
  
  // This object is passed to react-helmet-async for SSR
  const helmetContext: any = {};

  const pageHtml = ReactDOMServer.renderToString(
    <StaticRouter location={urlPathname}>
      <PageShell pageContext={pageContext} helmetContext={helmetContext}>
        <Page {...pageProps} />
      </PageShell>
    </StaticRouter>
  );

  // Extract the helmet data for meta tags
  const { helmet } = helmetContext;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en" ${helmet ? dangerouslySkipEscape(helmet.htmlAttributes.toString()) : ''}>
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/pt-favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : dangerouslySkipEscape('<title>Paul Tools</title>')}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        
        <!-- Preconnect for performance -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4M8LXFV9C8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4M8LXFV9C8');
        </script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8605710430431312"
             crossorigin="anonymous"></script>
      </head>
      <body ${helmet ? dangerouslySkipEscape(helmet.bodyAttributes.toString()) : ''}>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}
