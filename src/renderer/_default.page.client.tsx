import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageShell } from './PageShell';
import type { PageContextClient } from './types';

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const root = ReactDOM.createRoot(document.getElementById('root')!);
  
  root.render(
    <BrowserRouter>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </BrowserRouter>
  );
}
