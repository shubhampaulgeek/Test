import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { path: '/', title: 'Paul Tools – Crypto, Electronics, Streaming & YouTube Tools', description: 'Free multi-tool website with calculators, generators, and downloaders for Crypto, Electronics, Streaming, and YouTube tasks' },
  { path: '/about', title: 'About Us | Paul Tools', description: 'Learn more about Paul Tools and our mission to provide free online utilities' },
  { path: '/contact', title: 'Contact Us | Paul Tools', description: 'Get in touch with the Paul Tools team for support and feedback' },
  { path: '/tools', title: 'All Tools | Paul Tools', description: 'Browse all our free online tools for crypto, electronics, and streaming' },
  { path: '/tools/crypto-roi-calculator', title: 'Crypto ROI Calculator | Calculate Investment Returns', description: 'Calculate your cryptocurrency return on investment with our free ROI calculator tool' },
  { path: '/tools/crypto-airdrop-estimator', title: 'Crypto Airdrop Price Estimator | Token Value Calculator', description: 'Estimate token prices based on market cap and supply for crypto airdrops' },
  { path: '/tools/crypto-tax-calculator', title: 'Crypto Tax Calculator | Calculate Tax Liability', description: 'Calculate your cryptocurrency tax liability with our free tax calculator' },
  { path: '/tools/defi-yield-calculator', title: 'DeFi Yield Calculator | Staking & Farming Returns', description: 'Calculate potential profits from DeFi staking and yield farming' },
  { path: '/tools/gas-fee-estimator', title: 'Gas Fee Estimator | Ethereum, Polygon & BSC Gas Tracker', description: 'Check real-time gas fees for Ethereum, Polygon, and BSC blockchains' },
  { path: '/tools/inverter-efficiency-calculator', title: 'Inverter Efficiency Calculator | Power Loss Calculator', description: 'Calculate inverter efficiency and power losses for your electrical systems' },
  { path: '/tools/inverter-battery-calculator', title: 'Inverter Battery Backup Calculator | Runtime Calculator', description: 'Calculate how long your inverter battery will last based on power consumption' },
  { path: '/tools/solar-panel-output-loss-calculator', title: 'Solar Panel Output Loss Calculator | Real-World Performance', description: 'Estimate real-world solar panel performance loss due to environmental factors' },
  { path: '/tools/pcb-trace-current-calculator', title: 'PCB Trace Current Calculator | Safe Current Capacity', description: 'Calculate safe current handling capacity for PCB traces using IPC standards' },
  { path: '/tools/capacitor-charging-time-calculator', title: 'Capacitor RC Charging Time Calculator | Circuit Tool', description: 'Calculate charging and discharging times for RC circuits' },
  { path: '/tools/nightbot-timer-calculator', title: 'Nightbot Timer Calculator | Auto Chat Commands', description: 'Generate timed chat commands for Nightbot on Twitch and YouTube' },
  { path: '/tools/nightbot-command-generator', title: 'Nightbot Command Generator | Create Stream Commands', description: 'Create and manage custom commands for Nightbot to enhance your streams' },
  { path: '/tools/ai-clip-generator', title: 'AI Clip Title Generator | Stream Clip Titles & Descriptions', description: 'Generate catchy titles and descriptions for your stream clips using AI' },
  { path: '/tools/youtube-thumbnail-downloader', title: 'YouTube Thumbnail Downloader | Extract Video Thumbnails', description: 'Extract and download high-quality thumbnails from YouTube videos' },
];

const baseTemplate = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/pt-favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESCRIPTION}}" />
    <meta name="keywords" content="{{KEYWORDS}}" />
    <meta name="author" content="Paul Tools" />
    <meta name="robots" content="index, follow" />
    
    <!-- Open Graph meta tags -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Paul Tools" />
    <meta property="og:title" content="{{TITLE}}" />
    <meta property="og:description" content="{{DESCRIPTION}}" />
    <meta property="og:url" content="https://www.shubhampaul.xyz{{PATH}}" />
    <meta property="og:image" content="https://www.shubhampaul.xyz/og-image.png" />
    
    <!-- Twitter Card meta tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@paultools" />
    <meta name="twitter:title" content="{{TITLE}}" />
    <meta name="twitter:description" content="{{DESCRIPTION}}" />
    <meta name="twitter:image" content="https://www.shubhampaul.xyz/og-image.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://www.shubhampaul.xyz{{PATH}}" />
    
    <!-- Structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Paul Tools",
      "description": "{{DESCRIPTION}}",
      "url": "https://www.shubhampaul.xyz{{PATH}}"
    }
    </script>
    <script type="module" crossorigin src="/assets/index-BMVnOA9x.js"></script>
    <link rel="modulepreload" crossorigin href="/assets/vendor-inVa7cSl.js">
    <link rel="modulepreload" crossorigin href="/assets/router-BjOJhtxj.js">
    <link rel="stylesheet" crossorigin href="/assets/index-DIellrCB.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

const distPath = path.resolve(__dirname, '../dist');

// Generate HTML files for each route
routes.forEach(route => {
  const keywords = generateKeywords(route.path, route.description);
  const html = baseTemplate
    .replace(/{{TITLE}}/g, route.title)
    .replace(/{{DESCRIPTION}}/g, route.description)
    .replace(/{{KEYWORDS}}/g, keywords)
    .replace(/{{PATH}}/g, route.path);

  const filePath = route.path === '/' ? 
    path.join(distPath, 'index.html') : 
    path.join(distPath, route.path, 'index.html');

  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, html);
  console.log(`Generated: ${filePath}`);
});

function generateKeywords(path, description) {
  const baseKeywords = 'free online tools, Paul Tools';
  
  if (path.includes('crypto')) {
    return `${baseKeywords}, crypto tools, cryptocurrency calculator, crypto investment`;
  } else if (path.includes('inverter') || path.includes('solar') || path.includes('pcb') || path.includes('capacitor')) {
    return `${baseKeywords}, electronics tools, electrical calculator, engineering tools`;
  } else if (path.includes('nightbot') || path.includes('ai-clip') || path.includes('youtube')) {
    return `${baseKeywords}, streaming tools, twitch tools, youtube tools, content creation`;
  }
  
  return baseKeywords;
}

console.log('Static HTML generation complete!');
