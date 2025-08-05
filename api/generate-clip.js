import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDgp1ilHpUXEZR9l_pK8alab3OgF7jHqI4';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { transcript, chatLog, style, tone, format } = req.body;

    if (!transcript || !transcript.trim()) {
      return res.status(400).json({ error: 'Transcript is required' });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create the prompt based on style and tone
    const stylePrompts = {
      'Gaming': 'gaming, esports, competitive',
      'Funny': 'humorous, comedic, entertaining',
      'Dramatic': 'dramatic, intense, emotional',
      'Educational': 'educational, informative, learning',
      'Sports': 'sports, athletic, competitive',
      'Music': 'musical, rhythmic, artistic',
      'Tech': 'technical, innovative, cutting-edge'
    };

    const tonePrompts = {
      'Casual': 'casual and friendly',
      'Gen Z slang': 'using Gen Z slang and internet culture',
      'Professional': 'professional and polished',
      'Hype': 'hyped up and exciting',
      'Friendly': 'warm and approachable',
      'Exciting': 'thrilling and engaging'
    };

    const stylePrompt = stylePrompts[style] || 'engaging';
    const tonePrompt = tonePrompts[tone] || 'casual';

    // Build the full prompt
    let prompt = `You are an expert content creator specializing in creating viral clip titles and descriptions for streaming platforms like Twitch, YouTube, and TikTok.

Context:
- Style: ${stylePrompt}
- Tone: ${tonePrompt}
- Transcript: "${transcript.trim()}"`;

    if (chatLog && chatLog.trim()) {
      prompt += `\n- Chat Reactions: "${chatLog.trim()}"`;
    }

    prompt += `\n\nTask: Create a compelling title and description for this stream clip that will maximize views and engagement.

Requirements:
1. Title should be catchy, under 60 characters, and use relevant hashtags
2. Description should be engaging, under 150 characters, and include relevant keywords
3. Match the ${stylePrompt} style and ${tonePrompt} tone
4. Consider the chat reactions for context and energy
5. Use platform-optimized language that encourages clicks and shares

Output format: ${format === 'JSON' ? 'JSON with "title" and "description" fields' : format === 'Markdown' ? 'Markdown with bold title and description' : 'Plain text with title on first line and description on second line'}

Generate the content now:`;

    // Generate content with Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    // Format the output based on the requested format
    let formattedResult = generatedText;

    if (format === 'JSON') {
      try {
        // Try to parse as JSON if it's already in JSON format
        const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          formattedResult = jsonMatch[0];
        } else {
          // Extract title and description from the text
          const lines = generatedText.split('\n').filter(line => line.trim());
          const title = lines[0] || 'Generated Title';
          const description = lines.slice(1).join(' ') || 'Generated description';
          formattedResult = JSON.stringify({ title, description }, null, 2);
        }
      } catch (error) {
        // Fallback to simple JSON structure
        const lines = generatedText.split('\n').filter(line => line.trim());
        const title = lines[0] || 'Generated Title';
        const description = lines.slice(1).join(' ') || 'Generated description';
        formattedResult = JSON.stringify({ title, description }, null, 2);
      }
    } else if (format === 'Markdown') {
      const lines = generatedText.split('\n').filter(line => line.trim());
      if (lines.length >= 2) {
        formattedResult = `**${lines[0]}**\n\n${lines.slice(1).join('\n')}`;
      }
    }

    res.status(200).json({ result: formattedResult });

  } catch (error) {
    console.error('Error generating clip content:', error);
    
    // Handle specific Gemini API errors
    if (error.message.includes('403')) {
      return res.status(500).json({ 
        error: 'Gemini API access denied. Please check API key configuration.' 
      });
    }
    
    if (error.message.includes('429')) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded. Please try again in a few minutes.' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to generate clip content. Please try again.' 
    });
  }
} 