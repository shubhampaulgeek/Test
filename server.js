import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';
import { renderPage } from 'vite-plugin-ssr/server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const root = join(__dirname, 'dist');

// Import the analyze function and start server
async function startServer() {
  try {
    const module = await import('./api/analyze.js');
    const analyzeHandler = module.default;

    const app = express();
    
    // Enable CORS for all routes
    app.use(cors({
      origin: ['http://localhost:8081', 'http://localhost:8080', 'http://localhost:3000'],
      credentials: true
    }));
    
    app.use(express.json()); // Add JSON parsing middleware

    // YouTube Comment Sentiment Analyzer API endpoint
    app.post('/api/analyze', async (req, res) => {
      try {
        await analyzeHandler(req, res);
      } catch (error) {
        console.error('Error in analyze endpoint:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    // AI Clip Generator API endpoint
    app.post('/api/generate-clip', async (req, res) => {
      try {
        const { transcript, chatLog, style, tone, format } = req.body;
        
        if (!transcript) {
          return res.status(400).json({ error: 'Missing transcript' });
        }

        const geminiApiKey = process.env.GEMINI_API_KEY || "AIzaSyDgp1ilHpUXEZR9l_pK8alab3OgF7jHqI4";

        const prompt = `
You are an AI assistant that helps content creators generate catchy clip titles and short descriptions from live stream transcripts or chat logs.

Follow these steps:

1. Analyze the given transcript and/or chat log.
2. Based on the selected style preset, language tone, and output format, generate:
   - A relevant, engaging title (max 10 words)
   - A short summary (max 30 words)

Be creative but relevant. Don't use boring or repetitive titles.

---  
Style Preset: ${style}  
Language Tone: ${tone}  
Output Format: ${format}  

---  
Transcript:  
${transcript}

Chat Log:  
${chatLog}

---  
Your Output:
${format}
`;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: {
                temperature: 0.8,
                maxOutputTokens: 200,
              }
            })
          }
        );

        if (!response.ok) {
          const errorData = await response.text();
          console.error('Gemini API error response:', errorData);
          throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        
        if (!result.candidates || result.candidates.length === 0) {
          throw new Error('No response generated from Gemini API');
        }
        
        res.json({ result: result.candidates[0].content.parts[0].text });

      } catch (error) {
        console.error('AI Clip Generator Error:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
      }
    });

    // Proxy endpoint for Chainbase Gas Tracker API to bypass CORS in local dev
    app.get('/api/gas-proxy', async (req, res) => {
      const chainId = req.query.chain_id;
      if (!chainId) return res.status(400).json({ error: 'Missing chain_id' });
      try {
        const response = await fetch(`https://api.chainbase.online/v1/gas/price?chain_id=${chainId}`, {
          headers: { 'x-api-key': '2zoUW2UpajWN2mOQR660ggDfeoc' }
        });
        const data = await response.json();
        res.status(response.status).json(data);
      } catch (e) {
        res.status(500).json({ error: 'Proxy error', details: e.message });
      }
    });

    if (isProduction) {
      app.use(express.static(join(root, 'client')));
    } else {
      const vite = await import('vite');
      const viteDevMiddleware = (
        await vite.createServer({
          root: process.cwd(),
          server: { middlewareMode: true }
        })
      ).middlewares;
      app.use(viteDevMiddleware);
    }

    app.get('*', async (req, res, next) => {
      const urlOriginal = req.originalUrl;
      const pageContextInit = {
        urlOriginal
      };
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;
      if (!httpResponse) {
        return next();
      }
      const { body, statusCode, contentType } = httpResponse;
      res.status(statusCode).type(contentType).send(body);
    });

    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log(`Server running at http://localhost:${port}`);
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer(); 