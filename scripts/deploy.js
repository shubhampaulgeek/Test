
#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('🚀 Starting deployment process...');

try {
  // Generate sitemap
  console.log('🗺️ Generating sitemap...');
  execSync('node ./scripts/generate-sitemap.js', { stdio: 'inherit' });
  
  // Build with pre-rendering
  console.log('📦 Building with pre-rendering...');
  execSync('node ./scripts/build-with-prerender.js', { stdio: 'inherit' });
  
  console.log('✅ Deployment ready!');
  console.log('📁 Files ready in ./dist directory');
  console.log('🌐 Deploy to Vercel with: vercel --prod');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
