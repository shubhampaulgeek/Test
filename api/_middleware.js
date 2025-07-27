import { createRequestHandler } from '@vercel/node';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const handler = createRequestHandler({
  entrypoint: join(__dirname, '../dist/server/entries/src_renderer_default-page-server.mjs'),
});

export default handler; 