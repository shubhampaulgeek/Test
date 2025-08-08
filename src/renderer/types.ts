export type { PageContextServer, PageContextClient, PageContext };

import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from 'vite-plugin-ssr/types';

type Page = (pageProps: PageProps) => React.ReactElement;
type PageProps = Record<string, unknown>;

export interface PageContextCustom {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    documentProps?: {
      title?: string;
      description?: string;
    };
  };
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

type PageContext = PageContextClient | PageContextServer;