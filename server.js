import express from 'express';
import fetch from 'node-fetch';
import { renderPage } from 'vike/server';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const root = join(__dirname, 'dist');

startServer();

async function startServer() {
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

      // Extract emojis from text
      function extractEmojis(text) {
        const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu;
        return text.match(emojiRegex) || [];
      }

      // Enhanced language detection with transliterated text support
      function detectLanguage(text) {
        const hindiPattern = /[\u0900-\u097F]/;
        const bengaliPattern = /[\u0980-\u09FF]/;
        const urduPattern = /[\u0600-\u06FF]/;
        const tamilPattern = /[\u0B80-\u0BFF]/;
        const marathiPattern = /[\u0900-\u097F]/; // Same as Hindi
        const teluguPattern = /[\u0C00-\u0C7F]/;
        const assamesePattern = /[\u0980-\u09FF]/; // Same as Bengali script
        
        if (hindiPattern.test(text)) return 'hindi';
        if (bengaliPattern.test(text)) return 'bengali';
        if (urduPattern.test(text)) return 'urdu';
        if (tamilPattern.test(text)) return 'tamil';
        if (marathiPattern.test(text)) return 'marathi';
        if (teluguPattern.test(text)) return 'telugu';
        if (assamesePattern.test(text)) return 'assamese';
        
        // Check for transliterated text (Hindi/Urdu/Assamese in English letters)
        const transliteratedHindi = /\b(acha|bahut|shandar|behtareen|utkrisht|mahan|dilchasp|pasand|prerna|sundar|aakarshan|lajawab|jabardast|adbhut|avishwasniya|shandar|utkrisht|behtareen|mahan|dilchasp|bura|kharab|bekar|niraashajanak|behuda|bematlab|napasand|ghrinat)\b/i;
        const transliteratedUrdu = /\b(acha|bahut|shandar|behtareen|utkrisht|mahan|dilchasp|pasand|prerna|sundar|aakarshan|lajawab|jabardast|adbhut|avishwasniya|shandar|utkrisht|behtareen|mahan|dilchasp|bura|kharab|bekar|niraashajanak|behuda|bematlab|napasand|ghrinat)\b/i;
        const transliteratedAssamese = /\b(bhal|bor|bhal|chomotkar|osadharon|darun|bah|mojar|posond|uddipok|sundor|akorshoniyo|osadharon|chomotkar|darun|beia|bor|beia|baje|noiroashyjonok|baje|oposond|ghrinno|baje|noiroashyjonok)\b/i;
        
        if (transliteratedHindi.test(text) || transliteratedUrdu.test(text)) return 'hindi';
        if (transliteratedAssamese.test(text)) return 'assamese';
        
        return 'english';
      }

      // Enhanced sentiment analysis with multi-language support
      const englishPositiveWords = ['great', 'amazing', 'excellent', 'love', 'perfect', 'helpful', 'informative', 'fantastic', 'incredible', 'outstanding', 'good', 'nice', 'awesome', 'wonderful', 'brilliant', 'superb', 'marvelous', 'splendid', 'terrific', 'fabulous', 'magnificent', 'exceptional', 'remarkable', 'phenomenal', 'extraordinary', 'superior', 'premium', 'quality', 'valuable', 'beneficial', 'useful', 'effective', 'efficient', 'productive', 'successful', 'achievement', 'accomplishment', 'victory', 'triumph', 'win', 'gain', 'profit', 'advantage', 'benefit', 'improvement', 'enhancement', 'upgrade', 'boost', 'increase', 'growth', 'development', 'progress', 'advancement', 'innovation', 'creativity', 'inspiration', 'motivation', 'encouragement', 'support', 'appreciation', 'gratitude', 'thanks', 'thankful', 'blessed', 'fortunate', 'lucky', 'happy', 'joyful', 'excited', 'enthusiastic', 'passionate', 'dedicated', 'committed', 'loyal', 'faithful', 'trustworthy', 'reliable', 'dependable', 'consistent', 'stable', 'secure', 'safe', 'protected', 'comfortable', 'satisfied', 'content', 'pleased', 'delighted', 'thrilled', 'ecstatic', 'elated', 'overjoyed', 'euphoric', 'blissful', 'serene', 'peaceful', 'calm', 'relaxed', 'tranquil', 'harmonious', 'balanced', 'healthy', 'strong', 'powerful', 'mighty', 'robust', 'sturdy', 'solid', 'firm', 'steady', 'confident', 'assured', 'certain', 'definite', 'clear', 'obvious', 'evident', 'apparent', 'visible', 'noticeable', 'prominent', 'distinguished', 'eminent', 'famous', 'renowned', 'celebrated', 'acclaimed', 'praised', 'commended', 'lauded', 'applauded', 'cheered', 'encouraged', 'inspired', 'motivated', 'driven', 'determined', 'focused', 'concentrated', 'attentive', 'mindful', 'aware', 'conscious', 'knowledgeable', 'educated', 'informed', 'enlightened', 'wise', 'intelligent', 'smart', 'clever', 'brilliant', 'genius', 'expert', 'specialist', 'professional', 'skilled', 'talented', 'gifted', 'natural', 'innate', 'inherent', 'intrinsic', 'essential', 'vital', 'crucial', 'important', 'significant', 'meaningful', 'valuable', 'precious', 'treasured', 'cherished', 'beloved', 'adored', 'worshiped', 'idolized', 'revered', 'respected', 'honored', 'esteemed', 'admired', 'appreciated', 'valued'];
      
      const englishNegativeWords = ['bad', 'terrible', 'awful', 'horrible', 'disappointing', 'waste', 'boring', 'stupid', 'useless', 'worst', 'hate', 'dislike', 'poor', 'weak', 'lame', 'sucks', 'trash', 'garbage', 'disgusting', 'revolting', 'nauseating', 'sickening', 'repulsive', 'offensive', 'insulting', 'disrespectful', 'rude', 'impolite', 'crude', 'vulgar', 'obscene', 'inappropriate', 'unacceptable', 'unreasonable', 'irrational', 'illogical', 'nonsensical', 'ridiculous', 'absurd', 'preposterous', 'outrageous', 'scandalous', 'shocking', 'appalling', 'dreadful', 'frightful', 'terrifying', 'horrifying', 'petrifying', 'alarming', 'disturbing', 'troubling', 'concerning', 'worrisome', 'anxious', 'nervous', 'tense', 'stressed', 'overwhelmed', 'exhausted', 'tired', 'fatigued', 'weary', 'drained', 'depleted', 'empty', 'hollow', 'void', 'meaningless', 'pointless', 'futile', 'hopeless', 'desperate', 'despairing', 'depressed', 'sad', 'miserable', 'unhappy', 'unfortunate', 'unlucky', 'cursed', 'doomed', 'damned', 'condemned', 'punished', 'penalized', 'fined', 'charged', 'costly', 'expensive', 'overpriced', 'unaffordable', 'inaccessible', 'unreachable', 'impossible', 'unattainable', 'unachievable', 'unrealistic', 'impractical', 'unfeasible', 'unworkable', 'unmanageable', 'uncontrollable', 'unpredictable', 'unreliable', 'unstable', 'insecure', 'unsafe', 'dangerous', 'risky', 'hazardous', 'perilous', 'threatening', 'menacing', 'intimidating', 'frightening', 'scary', 'fearful', 'afraid', 'terrified', 'panicked', 'hysterical', 'crazy', 'insane', 'mad', 'angry', 'furious', 'enraged', 'livid', 'irate', 'outraged', 'infuriated', 'exasperated', 'frustrated', 'annoyed', 'irritated', 'bothered', 'disturbed', 'disrupted', 'interrupted', 'broken', 'damaged', 'destroyed', 'ruined', 'wrecked', 'shattered', 'crushed', 'smashed', 'splintered', 'fractured', 'cracked', 'split', 'torn', 'ripped', 'shredded', 'pulverized', 'obliterated', 'annihilated', 'eliminated', 'eradicated', 'exterminated', 'terminated', 'ended', 'finished', 'completed', 'concluded', 'finalized', 'settled', 'resolved', 'determined', 'decided', 'chosen', 'selected', 'picked', 'elected', 'voted'];

      // Multi-language word dictionaries
      const languageWords = {
        hindi: {
          positive: ['अच्छा', 'बहुत अच्छा', 'शानदार', 'बेहतरीन', 'उत्कृष्ट', 'महान', 'दिलचस्प', 'पसंद', 'प्रेरणादायक', 'सुंदर', 'आकर्षक', 'लाजवाब', 'जबरदस्त', 'अद्भुत', 'अविश्वसनीय', 'शानदार', 'उत्कृष्ट', 'बेहतरीन', 'महान', 'दिलचस्प', 'acha', 'bahut', 'shandar', 'behtareen', 'utkrisht', 'mahan', 'dilchasp', 'pasand', 'prerna', 'sundar', 'aakarshan', 'lajawab', 'jabardast', 'adbhut', 'avishwasniya'],
          negative: ['बुरा', 'खराब', 'बेकार', 'निराशाजनक', 'बेहूदा', 'बेमतलब', 'नापसंद', 'घृणित', 'bura', 'kharab', 'bekar', 'niraashajanak', 'behuda', 'bematlab', 'napasand', 'ghrinat']
        },
        urdu: {
          positive: ['اچھا', 'بہت اچھا', 'شاندار', 'بہترین', 'عمدہ', 'مہان', 'دلچسپ', 'پسند', 'پریرنا', 'سندر', 'آکرشن', 'لاجواب', 'جباردست', 'عجب', 'اویسواسنیہ', 'شاندار', 'عمدہ', 'بہترین', 'مہان', 'دلچسپ'],
          negative: ['برا', 'خراب', 'بیکار', 'نراشاجنک', 'بیہودہ', 'بےمطلب', 'ناپسند', 'گھناؤنا']
        },
        bengali: {
          positive: ['ভালো', 'খুব ভালো', 'চমৎকার', 'অসাধারণ', 'দারুণ', 'বাহ', 'মজার', 'পছন্দ', 'উদ্দীপক', 'সুন্দর', 'আকৰ্ষণীয়', 'অসাধারণ', 'চমৎকার', 'দারুণ'],
          negative: ['খারাপ', 'খুব খারাপ', 'বাজে', 'নিরাশাজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 'বাজে', 'নিরাশাজনক']
        },
        tamil: {
          positive: ['நல்ல', 'மிக நல்ல', 'அருமை', 'சிறந்த', 'மேம்பட்ட', 'சிறப்பு', 'வியப்பு', 'பிடிக்கும்', 'ஊக்கமளிக்கும்', 'அழகு', 'கவர்ச்சிகரமான', 'அருமை', 'சிறந்த'],
          negative: ['மோசம்', 'மிக மோசம்', 'பயனற்ற', 'ஏமாற்றமளிக்கும்', 'பயனற்ற', 'விரும்பாத', 'வெறுக்கத்தக்க', 'பயனற்ற']
        },
        marathi: {
          positive: ['चांगले', 'खूप चांगले', 'छान', 'उत्तम', 'अत्युत्तम', 'महान', 'मनोरंजक', 'आवडते', 'प्रेरणादायक', 'सुंदर', 'आकर्षक', 'लाजवाब', 'जबरदस्त', 'अद्भुत', 'अविश्वसनीय'],
          negative: ['वाईट', 'खराब', 'निरुपयोगी', 'निराशाजनक', 'बेहूदा', 'बेमतलब', 'नापसंद', 'घृणास्पद']
        },
                 telugu: {
           positive: ['మంచి', 'చాలా మంచి', 'అద్భుతం', 'అద్భుతమైన', 'ఉత్తమ', 'మహా', 'ఆసక్తికరం', 'ఇష్టం', 'ప్రేరేపక', 'అందమైన', 'ఆకర్షణీయం', 'అద్భుతం', 'ఉత్తమ'],
           negative: ['చెడు', 'చాలా చెడు', 'పనికిరాని', 'నిరాశాజనకం', 'పనికిరాని', 'ఇష్టంలేని', 'అసహ్యకరం', 'పనికిరాని']
         },
         assamese: {
           positive: ['ভাল', 'বৰ ভাল', 'চমৎকাৰ', 'অসাধাৰণ', 'দাৰুণ', 'বাহ', 'মজাৰ', 'পছন্দ', 'উদ্দীপক', 'সুন্দৰ', 'আকৰ্ষণীয়', 'অসাধাৰণ', 'চমৎকাৰ', 'দাৰুণ', 'bhal', 'bor', 'bhal', 'chomotkar', 'osadharon', 'darun', 'bah', 'mojar', 'posond', 'uddipok', 'sundor', 'akorshoniyo'],
           negative: ['বেয়া', 'বৰ বেয়া', 'বাজে', 'নৈৰাশ্যজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 'বাজে', 'নৈৰাশ্যজনক', 'beia', 'bor', 'beia', 'baje', 'noiroashyjonok', 'baje', 'oposond', 'ghrinno']
         }
      };

      const analysisResults = comments.map((comment, index) => {
        const language = detectLanguage(comment);
        const lowerComment = comment.toLowerCase();
        
        let positiveCount = 0;
        let negativeCount = 0;
        
        // English analysis
        positiveCount += englishPositiveWords.filter(word => lowerComment.includes(word)).length;
        negativeCount += englishNegativeWords.filter(word => lowerComment.includes(word)).length;
        
        // Multi-language analysis
        if (languageWords[language]) {
          positiveCount += languageWords[language].positive.filter(word => lowerComment.includes(word.toLowerCase())).length;
          negativeCount += languageWords[language].negative.filter(word => lowerComment.includes(word.toLowerCase())).length;
        }
        
        let sentiment = 'neutral';
        if (positiveCount > negativeCount) sentiment = 'positive';
        else if (negativeCount > positiveCount) sentiment = 'negative';
        
        return {
          comment: comment,
          sentiment: sentiment,
          positiveScore: positiveCount,
          negativeScore: negativeCount,
          confidence: Math.abs(positiveCount - negativeCount) / Math.max(positiveCount + negativeCount, 1),
          detectedLanguage: language
        };
      });

      // Emoji analysis
      const allEmojis = [];
      const emojiCounter = {};
      
      comments.forEach(comment => {
        const commentEmojis = extractEmojis(comment);
        allEmojis.push(...commentEmojis);
        
        commentEmojis.forEach(emoji => {
          emojiCounter[emoji] = (emojiCounter[emoji] || 0) + 1;
        });
      });
      
      const topEmojis = Object.entries(emojiCounter)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 15)
        .map(([emoji, count]) => ({ emoji, count }));

      const emojiAnalysis = {
        totalEmojis: allEmojis.length,
        uniqueEmojis: Object.keys(emojiCounter).length,
        topEmojis: topEmojis,
        emojiSentimentStats: {}
      };

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
        overallSentiment,
        emojiAnalysis,
        supportedLanguages: ["English", "Hindi", "Urdu", "Bengali", "Assamese", "Tamil", "Marathi", "Telugu"]
      });

    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'Internal server error', details: error.message });
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

  const port = 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
} 