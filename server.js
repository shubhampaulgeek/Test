import express from 'express';
import fetch from 'node-fetch';
import { renderPage } from 'vite-plugin-ssr/server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const root = join(__dirname, 'dist');

startServer();

async function startServer() {
  const app = express();
  app.use(express.json()); // Add JSON parsing middleware

  // YouTube Comment Sentiment Analyzer API endpoint
  app.post('/api/analyze', async (req, res) => {
    try {
      const { videoId } = req.body;
      
      if (!videoId) {
        return res.status(400).json({ error: 'Missing videoId' });
      }

      // YouTube API Key
      const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyBgKrTmQwQLpJMn64VzQSqqG5UFimglX1s";

      // Fetch video details first
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
      );
      const videoData = await videoResponse.json();

      if (!videoData.items || videoData.items.length === 0) {
        return res.status(404).json({ error: 'Video not found or access denied' });
      }

      const video = videoData.items[0];
      const videoTitle = video.snippet.title;
      const channelName = video.snippet.channelTitle;
      const totalComments = parseInt(video.statistics.commentCount || 0);

      // Fetch comments
      const comments = [];
      let nextPageToken = null;
      let commentCount = 0;
      // No limit on comments - analyze all available comments

      while (true) {
        const commentResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&key=${YOUTUBE_API_KEY}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`
        );
        const commentData = await commentResponse.json();

        if (!commentData.items) break;

        for (const item of commentData.items) {
          const commentText = item.snippet.topLevelComment.snippet.textDisplay;
          comments.push(commentText);
          commentCount++;
          

        }

        nextPageToken = commentData.nextPageToken;
        if (!nextPageToken) break;
      }

      // Enhanced sentiment analysis
      const positiveWords = ['great', 'amazing', 'excellent', 'love', 'perfect', 'helpful', 'informative', 'fantastic', 'incredible', 'outstanding', 'good', 'nice', 'awesome', 'wonderful', 'brilliant', 'superb', 'outstanding', 'excellent', 'perfect', 'amazing', 'best', 'incredible', 'outstanding', 'superb', 'marvelous', 'splendid', 'terrific', 'fabulous', 'magnificent', 'exceptional', 'remarkable', 'phenomenal', 'extraordinary', 'outstanding', 'superior', 'premium', 'quality', 'valuable', 'beneficial', 'useful', 'effective', 'efficient', 'productive', 'successful', 'achievement', 'accomplishment', 'victory', 'triumph', 'win', 'gain', 'profit', 'advantage', 'benefit', 'improvement', 'enhancement', 'upgrade', 'boost', 'increase', 'growth', 'development', 'progress', 'advancement', 'innovation', 'creativity', 'inspiration', 'motivation', 'encouragement', 'support', 'appreciation', 'gratitude', 'thanks', 'thankful', 'blessed', 'fortunate', 'lucky', 'happy', 'joyful', 'excited', 'enthusiastic', 'passionate', 'dedicated', 'committed', 'loyal', 'faithful', 'trustworthy', 'reliable', 'dependable', 'consistent', 'stable', 'secure', 'safe', 'protected', 'comfortable', 'satisfied', 'content', 'pleased', 'delighted', 'thrilled', 'ecstatic', 'elated', 'overjoyed', 'euphoric', 'blissful', 'serene', 'peaceful', 'calm', 'relaxed', 'tranquil', 'harmonious', 'balanced', 'healthy', 'strong', 'powerful', 'mighty', 'robust', 'sturdy', 'solid', 'firm', 'steady', 'confident', 'assured', 'certain', 'definite', 'clear', 'obvious', 'evident', 'apparent', 'visible', 'noticeable', 'prominent', 'distinguished', 'eminent', 'famous', 'renowned', 'celebrated', 'acclaimed', 'praised', 'commended', 'lauded', 'applauded', 'cheered', 'encouraged', 'inspired', 'motivated', 'driven', 'determined', 'focused', 'concentrated', 'attentive', 'mindful', 'aware', 'conscious', 'knowledgeable', 'educated', 'informed', 'enlightened', 'wise', 'intelligent', 'smart', 'clever', 'brilliant', 'genius', 'expert', 'specialist', 'professional', 'skilled', 'talented', 'gifted', 'natural', 'innate', 'inherent', 'intrinsic', 'essential', 'vital', 'crucial', 'important', 'significant', 'meaningful', 'valuable', 'precious', 'treasured', 'cherished', 'beloved', 'adored', 'worshiped', 'idolized', 'revered', 'respected', 'honored', 'esteemed', 'admired', 'appreciated', 'valued', 'treasured', 'cherished', 'beloved', 'adored', 'worshiped', 'idolized', 'revered', 'respected', 'honored', 'esteemed', 'admired', 'appreciated', 'valued', 'treasured', 'cherished', 'beloved', 'adored', 'worshiped', 'idolized', 'revered', 'respected', 'honored', 'esteemed', 'admired', 'appreciated', 'valued'];
      
      const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'disappointing', 'waste', 'boring', 'stupid', 'useless', 'worst', 'hate', 'dislike', 'poor', 'weak', 'lame', 'sucks', 'trash', 'garbage', 'disgusting', 'revolting', 'nauseating', 'sickening', 'repulsive', 'offensive', 'insulting', 'disrespectful', 'rude', 'impolite', 'crude', 'vulgar', 'obscene', 'inappropriate', 'unacceptable', 'unreasonable', 'irrational', 'illogical', 'nonsensical', 'ridiculous', 'absurd', 'preposterous', 'outrageous', 'scandalous', 'shocking', 'appalling', 'dreadful', 'frightful', 'terrifying', 'horrifying', 'petrifying', 'alarming', 'disturbing', 'troubling', 'concerning', 'worrisome', 'anxious', 'nervous', 'tense', 'stressed', 'overwhelmed', 'exhausted', 'tired', 'fatigued', 'weary', 'drained', 'depleted', 'empty', 'hollow', 'void', 'meaningless', 'pointless', 'futile', 'hopeless', 'desperate', 'despairing', 'depressed', 'sad', 'miserable', 'unhappy', 'unfortunate', 'unlucky', 'cursed', 'doomed', 'damned', 'condemned', 'punished', 'penalized', 'fined', 'charged', 'costly', 'expensive', 'overpriced', 'unaffordable', 'inaccessible', 'unreachable', 'impossible', 'unattainable', 'unachievable', 'unrealistic', 'impractical', 'unfeasible', 'unworkable', 'unmanageable', 'uncontrollable', 'unpredictable', 'unreliable', 'unstable', 'insecure', 'unsafe', 'dangerous', 'risky', 'hazardous', 'perilous', 'threatening', 'menacing', 'intimidating', 'frightening', 'scary', 'fearful', 'afraid', 'terrified', 'panicked', 'hysterical', 'crazy', 'insane', 'mad', 'angry', 'furious', 'enraged', 'livid', 'irate', 'outraged', 'infuriated', 'exasperated', 'frustrated', 'annoyed', 'irritated', 'bothered', 'disturbed', 'disrupted', 'interrupted', 'broken', 'damaged', 'destroyed', 'ruined', 'wrecked', 'shattered', 'crushed', 'smashed', 'splintered', 'fractured', 'cracked', 'split', 'torn', 'ripped', 'shredded', 'pulverized', 'obliterated', 'annihilated', 'eliminated', 'eradicated', 'exterminated', 'terminated', 'ended', 'finished', 'completed', 'concluded', 'finalized', 'settled', 'resolved', 'determined', 'decided', 'chosen', 'selected', 'picked', 'elected', 'voted', 'chosen', 'selected', 'picked', 'elected', 'voted', 'chosen', 'selected', 'picked', 'elected', 'voted'];

      const analysisResults = comments.map((comment, index) => {
        const lowerComment = comment.toLowerCase();
        const positiveCount = positiveWords.filter(word => lowerComment.includes(word)).length;
        const negativeCount = negativeWords.filter(word => lowerComment.includes(word)).length;
        
        let sentiment = 'neutral';
        if (positiveCount > negativeCount) sentiment = 'positive';
        else if (negativeCount > positiveCount) sentiment = 'negative';
        
        return {
          comment: comment,
          sentiment: sentiment,
          positiveScore: positiveCount,
          negativeScore: negativeCount,
          confidence: Math.abs(positiveCount - negativeCount) / Math.max(positiveCount + negativeCount, 1)
        };
      });

      const totals = {
        positive: analysisResults.filter(r => r.sentiment === 'positive').length,
        neutral: analysisResults.filter(r => r.sentiment === 'neutral').length,
        negative: analysisResults.filter(r => r.sentiment === 'negative').length
      };

      // Calculate percentages
      const totalAnalyzed = comments.length;
      const percentages = {
        positive: ((totals.positive / totalAnalyzed) * 100).toFixed(1),
        neutral: ((totals.neutral / totalAnalyzed) * 100).toFixed(1),
        negative: ((totals.negative / totalAnalyzed) * 100).toFixed(1)
      };

      // Get top keywords
      const allWords = comments.join(' ').toLowerCase().match(/\b\w+\b/g) || [];
      const wordCount = {};
      allWords.forEach(word => {
        if (word.length > 3) { // Only count words longer than 3 characters
          wordCount[word] = (wordCount[word] || 0) + 1;
        }
      });
      const topKeywords = Object.entries(wordCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([word, count]) => ({ word, count }));

      // Get example comments for each sentiment
      const positiveExamples = analysisResults
        .filter(r => r.sentiment === 'positive')
        .slice(0, 3)
        .map(r => r.comment);
      
      const negativeExamples = analysisResults
        .filter(r => r.sentiment === 'negative')
        .slice(0, 3)
        .map(r => r.comment);
      
      const neutralExamples = analysisResults
        .filter(r => r.sentiment === 'neutral')
        .slice(0, 3)
        .map(r => r.comment);

      // Calculate engagement metrics
      const avgCommentLength = Math.round(comments.reduce((sum, comment) => sum + comment.length, 0) / comments.length);
      const longComments = comments.filter(comment => comment.length > 100).length;
      const shortComments = comments.filter(comment => comment.length < 20).length;
      
      const engagementMetrics = {
        avgCommentLength,
        longComments,
        shortComments,
        longCommentPercentage: ((longComments / comments.length) * 100).toFixed(1),
        shortCommentPercentage: ((shortComments / comments.length) * 100).toFixed(1)
      };

      // Analysis confidence details
      const highConfidencePositive = analysisResults.filter(r => r.sentiment === 'positive' && r.confidence > 0.5).length;
      const highConfidenceNegative = analysisResults.filter(r => r.sentiment === 'negative' && r.confidence > 0.5).length;
      const lowConfidence = analysisResults.filter(r => r.confidence <= 0.5).length;

      const analysisDetails = {
        totalAnalyzed: comments.length,
        highConfidencePositive,
        highConfidenceNegative,
        lowConfidence
      };

      // Calculate overall sentiment score
      const sentimentScore = Math.round(((totals.positive - totals.negative) / totalAnalyzed) * 100 + 50);

      // Determine overall sentiment
      let overallSentiment = 'Neutral';
      if (sentimentScore > 60) overallSentiment = 'Positive';
      else if (sentimentScore < 40) overallSentiment = 'Negative';

      res.json({
        videoTitle,
        channelName,
        totalComments,
        count: comments.length,
        totals,
        percentages,
        topKeywords,
        positiveExamples,
        negativeExamples,
        neutralExamples,
        engagementMetrics,
        analysisDetails,
        sentimentScore,
        overallSentiment
      });

    } catch (error) {
      console.error('API Error:', error);
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

  const port = 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
} 