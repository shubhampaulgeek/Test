
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ClipRequest {
  transcript: string;
  chatLog: string;
  style: string;
  tone: string;
  format: string;
}

async function generateWithGemini(data: ClipRequest) {
  const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
  if (!geminiApiKey) {
    throw new Error('Gemini API key not configured');
  }

  const prompt = `
You are an AI assistant that helps content creators generate catchy clip titles and short descriptions from live stream transcripts or chat logs.

Follow these steps:

1. Analyze the given transcript and/or chat log.
2. Based on the selected style preset, language tone, and output format, generate:
   - A relevant, engaging title (max 10 words)
   - A short summary (max 30 words)

Be creative but relevant. Don't use boring or repetitive titles.

---  
Style Preset: ${data.style}  
Language Tone: ${data.tone}  
Output Format: ${data.format}  

---  
Transcript:  
${data.transcript}

Chat Log:  
${data.chatLog}

---  
Your Output:
${data.format}
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-latest:generateContent?key=${geminiApiKey}`,
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
  
  return result.candidates[0].content.parts[0].text;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ClipRequest = await req.json();
    
    console.log('Generating clip metadata with Gemini:', {
      style: data.style,
      tone: data.tone,
      format: data.format,
      transcriptLength: data.transcript.length,
      chatLogLength: data.chatLog.length
    });

    const result = await generateWithGemini(data);

    console.log('Successfully generated result with Gemini');
    
    return new Response(JSON.stringify({ result }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-clip-generator function:', error);
    
    let errorMessage = 'An unexpected error occurred';
    if (error.message.includes('API key')) {
      errorMessage = 'Gemini API key configuration error. Please check your settings.';
    } else if (error.message.includes('Not Found')) {
      errorMessage = 'Gemini API endpoint not found. Please try again later.';
    } else {
      errorMessage = error.message;
    }
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
