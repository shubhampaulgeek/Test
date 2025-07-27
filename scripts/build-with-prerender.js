
#!/usr/bin/env node
import { execSync } from 'child_process';
import { existsSync } from 'fs';

console.log('🚀 Building with pre-rendering...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if prerender script exists
  if (existsSync('./scripts/prerender.js')) {
    console.log('🔄 Pre-rendering pages...');
    execSync('node ./scripts/prerender.js', { stdio: 'inherit' });
  }
  
  console.log('✅ Build with pre-rendering complete!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
