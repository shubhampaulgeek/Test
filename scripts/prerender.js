
import { prerender } from 'vite-plugin-ssr/prerender'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

const routes = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/disclaimer',
  '/tools',
  '/tools/crypto-roi-calculator',
  '/tools/crypto-airdrop-estimator',
  '/tools/crypto-tax-calculator',
  '/tools/defi-yield-calculator',
  '/tools/gas-fee-estimator',
  '/tools/inverter-efficiency-calculator',
  '/tools/inverter-battery-calculator',
  '/tools/solar-panel-output-loss-calculator',
  '/tools/pcb-trace-current-calculator',
  '/tools/capacitor-charging-time-calculator',
  '/tools/nightbot-timer-calculator',
  '/tools/nightbot-command-generator',
  '/tools/ai-clip-generator',
  '/tools/youtube-thumbnail-downloader',
  '/tools/youtube-comment-sentiment-analyzer'
]

// Function to find the correct file names
function findEntryFiles() {
  const assetsDir = join(root, 'dist/client/assets/entries')
  const files = fs.readdirSync(assetsDir)
  
  const clientRoutingFile = files.find(f => f.startsWith('entry-client-routing.'))
  const defaultClientFile = files.find(f => f.startsWith('src_renderer_default.page.client.'))
  
  return {
    clientRouting: clientRoutingFile ? `/assets/entries/${clientRoutingFile}` : '/assets/entries/entry-client-routing.oPQ7qpbS.js',
    defaultClient: defaultClientFile ? `/assets/entries/${defaultClientFile}` : '/assets/entries/src_renderer_default.page.client.CammN0fG.js'
  }
}

console.log('Starting prerendering...')
try {
  await prerender({ routes })
  console.log('Prerendering completed successfully!')
} catch (error) {
  console.log('Prerendering failed, creating fallback index.html:', error.message)
  
  // Find the correct file names
  const entryFiles = findEntryFiles()
  console.log('Found entry files:', entryFiles)
  
  // Create a fallback index.html file with the correct file names from this build
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YouTube Sentiment Analyzer & Tools</title>
  <meta name="description" content="Analyze YouTube comment sentiment and access various useful tools">
  <link rel="icon" type="image/png" href="/myfavicon.png">
  <link rel="manifest" href="/manifest.json">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      background: #f5f5f5;
    }
    #root {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .loading {
      text-align: center;
      color: #333;
    }
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div id="root">
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading YouTube Sentiment Analyzer & Tools...</p>
    </div>
  </div>
  <script type="module" src="${entryFiles.clientRouting}"></script>
  <script type="module" src="${entryFiles.defaultClient}"></script>
</body>
</html>`
  
  const indexPath = join(root, 'dist/client/index.html')
  fs.writeFileSync(indexPath, indexHtml)
  console.log('Created fallback index.html file')
  console.log('Build completed successfully!')
}
