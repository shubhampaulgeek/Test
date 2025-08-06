import { createClient } from '@supabase/supabase-js';

// Compression utilities
function compressText(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .trim();
}

// Database client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { commentText, originalSentiment, correctedSentiment, reason } = req.body;

    // Validate required fields
    if (!commentText || !originalSentiment || !correctedSentiment) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate sentiment values
    const validSentiments = ['positive', 'neutral', 'negative'];
    if (!validSentiments.includes(originalSentiment) || !validSentiments.includes(correctedSentiment)) {
      return res.status(400).json({ error: 'Invalid sentiment values' });
    }

    // Find the most recent analysis session for this comment
    const { data: analysisSession, error: analysisError } = await supabase
      .from('analysis_sessions')
      .select('id')
      .order('created_at', { ascending: false })
      .limit(1);

    if (analysisError) {
      console.error('Error finding analysis session:', analysisError);
      return res.status(500).json({ error: 'Database error' });
    }

    if (!analysisSession || analysisSession.length === 0) {
      return res.status(404).json({ error: 'No analysis session found' });
    }

    // Store user feedback
    const { data, error } = await supabase
      .from('user_feedback')
      .insert({
        analysis_id: analysisSession[0].id,
        comment_text: compressText(commentText),
        original_sentiment: originalSentiment,
        corrected_sentiment: correctedSentiment,
        user_reason: reason ? compressText(reason) : null,
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error storing user feedback:', error);
      return res.status(500).json({ error: 'Failed to store feedback' });
    }

    // Update analytics
    await supabase
      .from('analytics')
      .insert({
        metric_name: 'user_feedback_submitted',
        metric_value: 1,
        metric_data: {
          original_sentiment: originalSentiment,
          corrected_sentiment: correctedSentiment,
          has_reason: !!reason,
          timestamp: new Date().toISOString()
        }
      });

    // If sentiment was corrected, update learning metrics
    if (originalSentiment !== correctedSentiment) {
      await supabase
        .from('analytics')
        .insert({
          metric_name: 'sentiment_correction',
          metric_value: 1,
          metric_data: {
            from: originalSentiment,
            to: correctedSentiment,
            timestamp: new Date().toISOString()
          }
        });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      feedbackId: data[0]?.id 
    });

  } catch (error) {
    console.error('Feedback API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
} 