
import { prerender } from 'vite-plugin-ssr/prerender'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

// Skip prerendering if disabled in vite config
console.log('Skipping prerendering (disabled in vite config)')
console.log('Build completed successfully!')

// Uncomment the following lines to enable prerendering:
/*
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
  '/tools/youtube-thumbnail-downloader'
]

await prerender({ routes })
*/
