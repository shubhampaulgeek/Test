# Deployment Guide - Paul Tools

This guide will help you deploy Paul Tools to Vercel with all features working correctly.

## 🚀 Vercel Deployment

### Prerequisites
- GitHub account
- Vercel account
- YouTube Data API v3 key (for sentiment analyzer)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Ensure all files are committed:**
   - `vercel.json` - Vercel configuration
   - `api/analyze.js` - Serverless function for sentiment analysis
   - All source files in `src/`
   - `package.json` with correct scripts

### Step 2: Connect to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Step 3: Environment Variables

In your Vercel project settings, add these environment variables:

```
YOUTUBE_API_KEY=your_youtube_api_key_here
```

**To get a YouTube API key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable YouTube Data API v3
4. Create credentials (API key)
5. Copy the key to Vercel environment variables

### Step 4: Deploy

1. **Click "Deploy"**
2. **Wait for build to complete**
3. **Test your deployment**

## 🔧 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "functions": {
    "dist/server/**/*.js": {
      "runtime": "nodejs20.x"
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/dist/server/entry-server.js"
    }
  ]
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/prerender.js",
    "preview": "vite preview",
    "start": "node server.js"
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (should be 20.x)
   - Ensure all dependencies are in `package.json`
   - Check for TypeScript errors

2. **API Routes Not Working**
   - Verify `api/analyze.js` exists
   - Check environment variables are set
   - Ensure proper CORS headers

3. **SSR Issues**
   - Verify `vercel.json` configuration
   - Check `dist/server/entry-server.js` exists after build
   - Ensure all page components export correctly

4. **YouTube API Errors**
   - Verify API key is correct
   - Check API quota limits
   - Ensure API is enabled in Google Cloud Console

### Debug Commands

```bash
# Local build test
npm run build

# Check build output
ls -la dist/

# Test serverless function locally
vercel dev
```

## 📊 Performance Optimization

### Build Optimization
- Images are optimized automatically
- CSS is minified
- JavaScript is tree-shaken and minified
- Static assets are cached

### Runtime Optimization
- Serverless functions are cold-started as needed
- Static pages are served from CDN
- API responses are cached where appropriate

## 🔒 Security

### Environment Variables
- Never commit API keys to repository
- Use Vercel environment variables
- Rotate keys regularly

### API Security
- Rate limiting on serverless functions
- Input validation on all endpoints
- CORS properly configured

## 📈 Monitoring

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor performance metrics
- Track user behavior

### Error Tracking
- Check Vercel function logs
- Monitor build logs
- Set up error notifications

## 🔄 Continuous Deployment

### Automatic Deployments
- Every push to `main` triggers deployment
- Preview deployments for pull requests
- Automatic rollback on failures

### Manual Deployments
```bash
# Deploy from CLI
vercel --prod

# Deploy specific branch
vercel --prod --branch feature-branch
```

## 📞 Support

If you encounter issues:

1. **Check Vercel documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Review build logs** in Vercel dashboard
3. **Test locally** with `vercel dev`
4. **Contact support** if needed

## 🎉 Success!

Once deployed, your Paul Tools platform will be available at your Vercel URL with:
- ✅ All tools working
- ✅ SSR rendering
- ✅ API endpoints functional
- ✅ YouTube sentiment analysis (unlimited comments)
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Fast loading times 