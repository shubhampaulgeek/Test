
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseUrl = 'https://www.shubhampaul.xyz';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.6', changefreq: 'yearly' },
  { path: '/disclaimer', priority: '0.6', changefreq: 'yearly' },
  { path: '/tools', priority: '0.9', changefreq: 'weekly' },
  
  // Crypto Tools
  { path: '/tools/crypto-roi-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/crypto-airdrop-estimator', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/crypto-tax-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/defi-yield-calculator', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/gas-fee-estimator', priority: '0.8', changefreq: 'daily' },
  
  // Electronics Tools
  { path: '/tools/inverter-efficiency-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/inverter-battery-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/solar-panel-output-loss-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/pcb-trace-current-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/capacitor-charging-time-calculator', priority: '0.7', changefreq: 'monthly' },
  
  // Streaming Tools
  { path: '/tools/nightbot-timer-calculator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/nightbot-command-generator', priority: '0.7', changefreq: 'monthly' },
  { path: '/tools/ai-clip-generator', priority: '0.8', changefreq: 'weekly' },
  { path: '/tools/youtube-thumbnail-downloader', priority: '0.7', changefreq: 'monthly' }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
