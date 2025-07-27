
const { execSync } = require('child_process');

console.log('🚀 Building static site with unique SEO meta tags...');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  execSync('rm -rf dist', { stdio: 'inherit' });

  // Build the project
  console.log('🔨 Building project with Vite...');
  execSync('npm run build', { stdio: 'inherit' });

  // Run react-snap to generate static HTML files
  console.log('📸 Generating static HTML files with react-snap...');
  execSync('npx react-snap', { stdio: 'inherit' });

  console.log('✅ Static site built successfully!');
  console.log('📁 Each route now has its own HTML file with unique meta tags');
  console.log('🔍 Check dist/ folder for individual HTML files');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
