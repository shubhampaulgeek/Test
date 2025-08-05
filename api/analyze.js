import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);



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
        const transliteratedHindi = /\b(prem|asha|anand|kritagyata|daya|atmavishvas|safalta|prerna|sadbhav|prashansa|madadgar|imanadar|aadarsh|bahadur|sundar|svasthya|nyaypriya|shaurya|utthaan|shraddha|shanti|sahanubhuti|khula dil|acha|bahut|shandar|behtareen|utkrisht|mahan|dilchasp|pasand|sundar|aakarshan|lajawab|jabardast|adbhut|avishwasniya|gussa|khatarnaak|nafrat|dukhi|vyathit|pareshan|dar|bura|asafal|moorkh|nirash|vishwasghaat|asatya|swarthi|matlabi|kathor|kalhapoorn|adhir|nakli|kamzor|apmaan|kharab|bekar|niraashajanak|behuda|bematlab|napasand|ghrinat)\b/i;
  const transliteratedUrdu = /\b(acha|bahut|shandar|behtareen|utkrisht|mahan|dilchasp|pasand|prerna|sundar|aakarshan|lajawab|jabardast|adbhut|avishwasniya|shandar|utkrisht|behtareen|mahan|dilchasp|bura|kharab|bekar|niraashajanak|behuda|bematlab|napasand|ghrinat)\b/i;
  const transliteratedAssamese = /\b(bhal|bor|bhal|chomotkar|osadharon|darun|bah|mojar|posond|uddipok|sundor|akorshoniyo|osadharon|chomotkar|darun|beia|bor|beia|baje|noiroashyjonok|baje|oposond|ghrinno)\b/i;
  
  if (transliteratedHindi.test(text) || transliteratedUrdu.test(text)) return 'hindi';
  if (transliteratedAssamese.test(text)) return 'assamese';
  
  return 'english';
}

// Enhanced sentiment analysis with comprehensive word lists
const englishPositiveWords = ['able', 'abundant', 'accepting', 'achievement', 'admire', 'adore', 'affectionate', 'amazing', 'ambitious', 'appreciative', 'brave', 'brilliant', 'caring', 'cheerful', 'confident', 'creative', 'dependable', 'dynamic', 'energetic', 'faithful', 'forgiving', 'generous', 'genuine', 'helpful', 'honest', 'hopeful', 'humble', 'inspiring', 'joyful', 'kind', 'knowledgeable', 'loving', 'loyal', 'motivated', 'optimistic', 'outstanding', 'passionate', 'polite', 'positive', 'reliable', 'respectful', 'sincere', 'smart', 'strong', 'supportive', 'thoughtful', 'trustworthy', 'upbeat', 'vibrant', 'wise', 'wonderful', 'zealous', 'great', 'excellent', 'perfect', 'fantastic', 'incredible', 'good', 'nice', 'awesome', 'wonderful', 'superb', 'marvelous', 'splendid', 'terrific', 'fabulous', 'magnificent', 'exceptional', 'remarkable', 'phenomenal', 'extraordinary', 'superior', 'premium', 'quality', 'valuable', 'beneficial', 'useful', 'effective', 'efficient', 'productive', 'successful', 'victory', 'triumph', 'win', 'gain', 'profit', 'advantage', 'benefit', 'improvement', 'enhancement', 'upgrade', 'boost', 'increase', 'growth', 'development', 'progress', 'advancement', 'innovation', 'creativity', 'inspiration', 'motivation', 'encouragement', 'support', 'appreciation', 'gratitude', 'thanks', 'thankful', 'blessed', 'fortunate', 'lucky', 'happy', 'excited', 'enthusiastic', 'dedicated', 'committed', 'faithful', 'consistent', 'stable', 'secure', 'safe', 'protected', 'comfortable', 'satisfied', 'content', 'pleased', 'delighted', 'thrilled', 'ecstatic', 'elated', 'overjoyed', 'euphoric', 'blissful', 'serene', 'peaceful', 'calm', 'relaxed', 'tranquil', 'harmonious', 'balanced', 'healthy', 'powerful', 'mighty', 'robust', 'sturdy', 'solid', 'firm', 'steady', 'assured', 'certain', 'definite', 'clear', 'obvious', 'evident', 'apparent', 'visible', 'noticeable', 'prominent', 'distinguished', 'eminent', 'famous', 'renowned', 'celebrated', 'acclaimed', 'praised', 'commended', 'lauded', 'applauded', 'cheered', 'encouraged', 'inspired', 'motivated', 'driven', 'determined', 'focused', 'concentrated', 'attentive', 'mindful', 'aware', 'conscious', 'knowledgeable', 'educated', 'informed', 'enlightened', 'intelligent', 'clever', 'genius', 'expert', 'specialist', 'professional', 'skilled', 'talented', 'gifted', 'natural', 'innate', 'inherent', 'intrinsic', 'essential', 'vital', 'crucial', 'important', 'significant', 'meaningful', 'precious', 'treasured', 'cherished', 'beloved', 'adored', 'worshiped', 'idolized', 'revered', 'respected', 'honored', 'esteemed', 'admired', 'appreciated', 'valued'];

const englishNegativeWords = ['abysmal', 'adverse', 'angry', 'annoy', 'anxious', 'apathy', 'appalling', 'atrocious', 'awful', 'bad', 'boring', 'broken', 'callous', 'clumsy', 'cold-hearted', 'confused', 'corrupt', 'cruel', 'damaging', 'deplorable', 'depressed', 'despicable', 'detrimental', 'dirty', 'disgusting', 'dishonest', 'dismal', 'distress', 'dreadful', 'dreary', 'fail', 'fear', 'foolish', 'greedy', 'harmful', 'hate', 'hostile', 'hurt', 'ill', 'jealous', 'lazy', 'mean', 'moody', 'nasty', 'negative', 'offensive', 'pain', 'pessimistic', 'rude', 'ruthless', 'sad', 'selfish', 'stubborn', 'stupid', 'unkind', 'unpredictable', 'unreliable', 'untrustworthy', 'worthless', 'terrible', 'horrible', 'disappointing', 'waste', 'useless', 'worst', 'dislike', 'poor', 'weak', 'lame', 'sucks', 'trash', 'garbage', 'revolting', 'nauseating', 'sickening', 'repulsive', 'insulting', 'disrespectful', 'impolite', 'crude', 'vulgar', 'obscene', 'inappropriate', 'unacceptable', 'unreasonable', 'irrational', 'illogical', 'nonsensical', 'ridiculous', 'absurd', 'preposterous', 'outrageous', 'scandalous', 'shocking', 'frightful', 'terrifying', 'horrifying', 'petrifying', 'alarming', 'disturbing', 'troubling', 'concerning', 'worrisome', 'nervous', 'tense', 'stressed', 'overwhelmed', 'exhausted', 'tired', 'fatigued', 'weary', 'drained', 'depleted', 'empty', 'hollow', 'void', 'meaningless', 'pointless', 'futile', 'hopeless', 'desperate', 'despairing', 'miserable', 'unhappy', 'unfortunate', 'unlucky', 'cursed', 'doomed', 'damned', 'condemned', 'punished', 'penalized', 'fined', 'charged', 'costly', 'expensive', 'overpriced', 'unaffordable', 'inaccessible', 'unreachable', 'impossible', 'unattainable', 'unachievable', 'unrealistic', 'impractical', 'unfeasible', 'unworkable', 'unmanageable', 'uncontrollable', 'unstable', 'insecure', 'unsafe', 'dangerous', 'risky', 'hazardous', 'perilous', 'threatening', 'menacing', 'intimidating', 'frightening', 'scary', 'fearful', 'afraid', 'terrified', 'panicked', 'hysterical', 'crazy', 'insane', 'mad', 'furious', 'enraged', 'livid', 'irate', 'outraged', 'infuriated', 'exasperated', 'frustrated', 'irritated', 'bothered', 'disrupted', 'interrupted', 'damaged', 'destroyed', 'ruined', 'wrecked', 'shattered', 'crushed', 'smashed', 'splintered', 'fractured', 'cracked', 'split', 'torn', 'ripped', 'shredded', 'pulverized', 'obliterated', 'annihilated', 'eliminated', 'eradicated', 'exterminated', 'terminated', 'ended', 'finished', 'completed', 'concluded', 'finalized', 'settled', 'resolved', 'determined', 'decided', 'chosen', 'selected', 'picked', 'elected', 'voted'];

// Multi-language word dictionaries
const languageWords = {
  hindi: {
    positive: ['प्रेम', 'आशा', 'आनंद', 'कृतज्ञता', 'दया', 'आत्मविश्वास', 'सफलता', 'प्रेरणा', 'सद्भाव', 'प्रशंसा', 'मददगार', 'ईमानदार', 'आदर्श', 'बहादुर', 'सुंदर', 'स्वास्थ्य', 'न्यायप्रिय', 'शौर्य', 'उत्थान', 'श्रद्धा', 'शांति', 'सहानुभूति', 'खुला दिल', 'prem', 'asha', 'anand', 'kritagyata', 'daya', 'atmavishvas', 'safalta', 'prerna', 'sadbhav', 'prashansa', 'madadgar', 'imanadar', 'aadarsh', 'bahadur', 'sundar', 'svasthya', 'nyaypriya', 'shaurya', 'utthaan', 'shraddha', 'shanti', 'sahanubhuti', 'khula dil', 'acha', 'bahut', 'shandar', 'behtareen', 'utkrisht', 'mahan', 'dilchasp', 'pasand', 'sundar', 'aakarshan', 'lajawab', 'jabardast', 'adbhut', 'avishwasniya'],
    negative: ['गुस्सा', 'खतरनाक', 'नफरत', 'दुःखी', 'व्यथित', 'परेशान', 'डर', 'बुरा', 'असफल', 'मूर्ख', 'निराश', 'विश्वासघात', 'असत्य', 'स्वार्थी', 'मतलबी', 'कठोर', 'कलहपूर्ण', 'अधीर', 'नकली', 'कमजोर', 'अपमान', 'gussa', 'khatarnaak', 'nafrat', 'dukhi', 'vyathit', 'pareshan', 'dar', 'bura', 'asafal', 'moorkh', 'nirash', 'vishwasghaat', 'asatya', 'swarthi', 'matlabi', 'kathor', 'kalhapoorn', 'adhir', 'nakli', 'kamzor', 'apmaan', 'kharab', 'bekar', 'niraashajanak', 'behuda', 'bematlab', 'napasand', 'ghrinat']
  },
  urdu: {
    positive: ['محبت', 'خوشی', 'امید', 'تعریف', 'حقیقت', 'ایماندار', 'سچائی', 'مہربان', 'پرخلوص', 'مسرت', 'پرسکون', 'کامیاب', 'وفادار', 'بخشش', 'خیال', 'سکون', 'رہنمائی', 'دوستی', 'خوبصورت', 'acha', 'bahut', 'shandar', 'behtareen', 'utkrisht', 'mahan', 'dilchasp', 'pasand', 'prerna', 'sundar', 'aakarshan', 'lajawab', 'jabardast', 'adbhut', 'avishwasniya'],
    negative: ['ناراض', 'خوف', 'نفرت', 'برا', 'مایوس', 'شدید', 'خودغرض', 'محبوب', 'جھوٹ', 'دشمنی', 'افسوس', 'نقصان', 'خطرناک', 'دکھی', 'فریب', 'کینہ پرور', 'روکھا', 'bura', 'kharab', 'bekar', 'niraashajanak', 'behuda', 'bematlab', 'napasand', 'ghrinat']
  },
  bengali: {
    positive: ['ভালোবাসা', 'আনন্দ', 'আশা', 'নির্ভরযোগ্য', 'সাহসী', 'সৎ', 'সহানুভূতি', 'প্রশংসা', 'সুন্দর', 'উৎসাহী', 'সহযোগী', 'কৃতজ্ঞতা', 'সুখী', 'আদর্শ', 'উজ্জ্বল', 'bhalo', 'khub bhalo', 'chomotkar', 'osadharon', 'darun', 'bah', 'mojar', 'posond', 'uddipok', 'sundor', 'akorshoniyo'],
    negative: ['রাগান্বিত', 'উৎকণ্ঠিত', 'বিরক্ত', 'নিরাশ', 'অভিযোগ', 'কুঁড়ে', 'মিথ্যা', 'ক্ষতি', 'কুৎসিত', 'কঠোর', 'স্বার্থপর', 'অসৎ', 'দু:খিত', 'ভীত', 'খারাপ', 'kharap', 'khub kharap', 'baje', 'niraashajanok', 'oposond', 'ghrinno']
  },
  tamil: {
    positive: ['அன்பு', 'மகிழ்ச்சி', 'நம்பிக்கை', 'பாராட்டு', 'நல்லது', 'உண்மை', 'துணிவு', 'உறுதி', 'ஆன்மிகம்', 'நட்பு', 'உதவி', 'பொறுமை', 'திறமை', 'செல்வாக்கு', 'பொறுப்பான', 'nalla', 'mik nalla', 'arumai', 'sirantha', 'membatta', 'sirapu', 'viyappu', 'pidikkum', 'ukkamalikkum', 'azhagu', 'kavarccikaramana'],
    negative: ['கோபம்', 'பயம்', 'ஒதுக்கீடு', 'குற்றம்', 'துக்கம்', 'பொய்', 'பொறாமை', 'தீமை', 'தீங்கு', 'துரோகம்', 'சோகம்', 'சாபம்', 'வழிழைப்பு', 'வேண்டாம்', 'mosam', 'mik mosam', 'payanatra', 'emarramalikkum', 'virumbada', 'verukkattakka']
  },
  marathi: {
    positive: ['प्रेम', 'आनंद', 'आशा', 'आदर', 'यश', 'बळकट', 'चांगला', 'दयाळू', 'आत्मनिर्भर', 'प्रामाणिक', 'मैत्री', 'समाधान', 'ज्ञान', 'प्रेरणा', 'सहकार्य', 'changale', 'khup changale', 'chaan', 'uttam', 'atyuttam', 'mahan', 'manoranjak', 'avadte', 'prernadayak', 'sundar', 'akarshan', 'lajawab', 'jabardast', 'adbhut', 'avishwasniya'],
    negative: ['राग', 'दुष्ट', 'अपयश', 'द्वेष', 'अपराध', 'खोटे', 'अडचण', 'कंटाळवाणा', 'असंतुलित', 'दु:ख', 'अन्याय', 'शोक', 'दोष', 'थकवा', 'भीती', 'vait', 'kharab', 'nirupayogi', 'nirashajanak', 'behuda', 'bematlab', 'napasand', 'ghrinaspad']
  },
  telugu: {
    positive: ['ప్రేమ', 'ఆనందం', 'ఆశ', 'విజయము', 'విశ్వాసం', 'స్నేహం', 'సహాయం', 'ధైర్యం', 'మంచితనం', 'విజయం', 'పాజిటివ్', 'చైతన్యం', 'గౌరవం', 'సంపూర్ణం', 'ధీర్ఘదృష్టి', 'manchi', 'chaala manchi', 'adbhutam', 'adbhutamaina', 'uttama', 'maha', 'aasaktikaram', 'ishtam', 'prerapaka', 'andamaina', 'akarshaneyam', 'adbhutam', 'uttama'],
    negative: ['కోపం', 'ద్వేషం', 'భయం', 'నష్టము', 'మోసం', 'బాధ', 'అసత్యం', 'చిరాకు', 'బాధ', 'నిరాశ', 'అలసత్వం', 'దుర్గుణం', 'దోపిడి', 'దుర్మార్గం', 'తప్పు', 'chedu', 'chaala chedu', 'panikirani', 'niraashajanakam', 'ishtamleni', 'asahyakaram']
  },
  assamese: {
    positive: ['মৰম', 'আশা', 'আনন্দ', 'সাহসী', 'সদয়', 'হেল্পুল', 'ভালো', 'ইষ্টি', 'স্যন্তুষ্ট', 'সুন্দৰ', 'কৃতজ্ঞতা', 'bhal', 'bor bhal', 'chomotkar', 'osadharon', 'darun', 'bah', 'mojar', 'posond', 'uddipok', 'sundor', 'akorshoniyo'],
    negative: ['ৰাগ', 'ভীতি', 'দুখি', 'ক্ৰুদ্ধ', 'অশান্ত', 'বেয়া', 'অবিশ্বাসী', 'দুৰ্ভাগ্য', 'কঠিন', 'অলস', 'দুঃখ', 'অশুভ', 'beia', 'bor beia', 'baje', 'noiroashyjonok', 'oposond', 'ghrinno']
  }
};

export default async function handler(req, res) {
  // Set CORS headers for Vercel
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

  console.log('API request received:', { method: req.method, body: req.body });

  // Set a timeout to prevent Vercel timeout
  const startTime = Date.now();
  const TIMEOUT_MS = 28000; // 28 seconds to maximize processing time
  const isVercel = process.env.VERCEL === '1';
  
  if (isVercel) {
    console.log('Running on Vercel - using optimized settings');
  }

  try {
    const { videoId } = req.body;
    
    if (!videoId) {
      return res.status(400).json({ error: 'Missing videoId' });
    }

    // YouTube API Key
    const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyBgKrTmQwQLpJMn64VzQSqqG5UFimglX1s";
    
    if (!YOUTUBE_API_KEY) {
      return res.status(500).json({ error: 'YouTube API key not configured' });
    }

    // Fetch video details first
    const videoResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`,
      { timeout: 10000 }
    );
    
    if (!videoResponse.ok) {
      console.error('YouTube API error:', videoResponse.status, videoResponse.statusText);
      return res.status(500).json({ error: 'Failed to fetch video details from YouTube API' });
    }
    
    const videoData = await videoResponse.json();

    if (!videoData.items || videoData.items.length === 0) {
      return res.status(404).json({ error: 'Video not found or access denied' });
    }

    const video = videoData.items[0];
    const videoTitle = video.snippet.title;
    const channelName = video.snippet.channelTitle;
    const totalComments = parseInt(video.statistics.commentCount || 0);

    // Fetch comments with dynamic limit based on total comments
    const comments = [];
    let nextPageToken = null;
    let commentCount = 0;
    const TARGET_COMMENTS = Math.min(Math.max(Math.floor(totalComments * 0.4), 1000), 15000); // 40% of total, min 1000, max 15000 for 28 seconds
    const MAX_PAGES = Math.ceil(TARGET_COMMENTS / 100) + 10; // Calculate pages needed + buffer
    let pageCount = 0;

    console.log(`Total comments: ${totalComments}, Target to analyze: ${TARGET_COMMENTS}`);

    while (commentCount < TARGET_COMMENTS && pageCount < MAX_PAGES) {
      // Check timeout
      if (Date.now() - startTime > TIMEOUT_MS) {
        console.log('Timeout reached during comment fetching, stopping early');
        break;
      }

      const commentResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=100&order=relevance&key=${YOUTUBE_API_KEY}${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`,
        { timeout: 10000 }
      );
      
      if (!commentResponse.ok) {
        console.error('YouTube Comments API error:', commentResponse.status, commentResponse.statusText);
        return res.status(500).json({ error: 'Failed to fetch comments from YouTube API' });
      }
      
      const commentData = await commentResponse.json();

      if (!commentData.items) break;

      for (const item of commentData.items) {
        const commentText = item.snippet.topLevelComment.snippet.textDisplay;
        comments.push(commentText);
        commentCount++;
        
        // Stop if we've reached the target
        if (commentCount >= TARGET_COMMENTS) break;
      }

      nextPageToken = commentData.nextPageToken;
      if (!nextPageToken) break;
      pageCount++;
    }

    console.log(`Analyzed ${commentCount} comments from ${pageCount} pages`);

    // Analysis containers
    const totals = { positive: 0, neutral: 0, negative: 0 };
    const languageStats = { english: 0, hindi: 0, urdu: 0, bengali: 0, assamese: 0, tamil: 0, marathi: 0, telugu: 0, other: 0 };
    const allEmojis = [];
    const emojiSentiment = { positive: [], negative: [], neutral: [] };

    // Analyze each comment with progress logging and timeout check
    let processedCount = 0;
    for (const comment of comments) {
      // Check timeout every 1000 comments for maximum processing
      if (processedCount % 1000 === 0 && Date.now() - startTime > TIMEOUT_MS) {
        console.log('Timeout reached during analysis, stopping early');
        break;
      }
      // Language detection
      const language = detectLanguage(comment);
      languageStats[language] = (languageStats[language] || 0) + 1;
      
      // Emoji extraction
      const commentEmojis = extractEmojis(comment);
      allEmojis.push(...commentEmojis);
      
      // Enhanced sentiment analysis with optimized word matching
      const lowerComment = comment.toLowerCase();
      let positiveCount = 0;
      let negativeCount = 0;
      
      // English analysis - use more efficient matching with early exit
      for (const word of englishPositiveWords) {
        if (lowerComment.includes(word)) {
          positiveCount++;
          if (positiveCount > 3) break; // Early exit for maximum processing
        }
      }
      for (const word of englishNegativeWords) {
        if (lowerComment.includes(word)) {
          negativeCount++;
          if (negativeCount > 3) break; // Early exit for maximum processing
        }
      }
      
      // Multi-language analysis - use more efficient matching with early exit
      if (languageWords[language]) {
        for (const word of languageWords[language].positive) {
          if (lowerComment.includes(word.toLowerCase())) {
            positiveCount++;
            if (positiveCount > 3) break; // Early exit for maximum processing
          }
        }
        for (const word of languageWords[language].negative) {
          if (lowerComment.includes(word.toLowerCase())) {
            negativeCount++;
            if (negativeCount > 3) break; // Early exit for maximum processing
          }
        }
      }
      
      let sentiment = 'neutral';
      if (positiveCount > negativeCount) sentiment = 'positive';
      else if (negativeCount > positiveCount) sentiment = 'negative';
      
      totals[sentiment]++;
      
      // Track emojis by sentiment
      if (commentEmojis.length > 0) {
        for (const emojiChar of commentEmojis) {
          emojiSentiment[sentiment].push(emojiChar);
        }
      }
      
      // Log progress every 1000 comments for maximum processing
      processedCount++;
      if (processedCount % 1000 === 0) {
        const percentage = Math.round((processedCount / comments.length) * 100);
        console.log(`Processed ${processedCount}/${comments.length} comments (${percentage}%)`);
      }
    }

    // Emoji analysis
    const emojiCounter = {};
    allEmojis.forEach(emoji => {
      emojiCounter[emoji] = (emojiCounter[emoji] || 0) + 1;
    });
    
    const topEmojis = Object.entries(emojiCounter)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 15)
      .map(([emoji, count]) => ({ emoji, count }));

    // Emoji sentiment analysis
    const emojiSentimentStats = {};
    for (const emojiData of topEmojis) {
      const emojiChar = emojiData.emoji;
      const count = emojiData.count;
      const positiveCount = emojiSentiment.positive.filter(e => e === emojiChar).length;
      const negativeCount = emojiSentiment.negative.filter(e => e === emojiChar).length;
      const neutralCount = emojiSentiment.neutral.filter(e => e === emojiChar).length;
      
      emojiSentimentStats[emojiChar] = {
        total: count,
        positive: positiveCount,
        negative: negativeCount,
        neutral: neutralCount,
        dominant_sentiment: positiveCount > negativeCount ? 'positive' : negativeCount > positiveCount ? 'negative' : 'neutral'
      };
    }

    // Calculate percentages
    const totalAnalyzed = comments.length;
    const percentages = {
      positive: totalAnalyzed > 0 ? ((totals.positive / totalAnalyzed) * 100).toFixed(1) : '0',
      neutral: totalAnalyzed > 0 ? ((totals.neutral / totalAnalyzed) * 100).toFixed(1) : '0',
      negative: totalAnalyzed > 0 ? ((totals.negative / totalAnalyzed) * 100).toFixed(1) : '0'
    };

    // Get example comments for each sentiment
    const positiveExamples = comments.filter((comment, index) => {
      const language = detectLanguage(comment);
      const lowerComment = comment.toLowerCase();
      let positiveCount = 0;
      let negativeCount = 0;
      
      positiveCount += englishPositiveWords.filter(word => lowerComment.includes(word)).length;
      negativeCount += englishNegativeWords.filter(word => lowerComment.includes(word)).length;
      
      if (languageWords[language]) {
        positiveCount += languageWords[language].positive.filter(word => lowerComment.includes(word.toLowerCase())).length;
        negativeCount += languageWords[language].negative.filter(word => lowerComment.includes(word.toLowerCase())).length;
      }
      
      return positiveCount > negativeCount;
    }).slice(0, 5);

    const negativeExamples = comments.filter((comment, index) => {
      const language = detectLanguage(comment);
      const lowerComment = comment.toLowerCase();
      let positiveCount = 0;
      let negativeCount = 0;
      
      positiveCount += englishPositiveWords.filter(word => lowerComment.includes(word)).length;
      negativeCount += englishNegativeWords.filter(word => lowerComment.includes(word)).length;
      
      if (languageWords[language]) {
        positiveCount += languageWords[language].positive.filter(word => lowerComment.includes(word.toLowerCase())).length;
        negativeCount += languageWords[language].negative.filter(word => lowerComment.includes(word.toLowerCase())).length;
      }
      
      return negativeCount > positiveCount;
    }).slice(0, 5);

    const neutralExamples = comments.filter((comment, index) => {
      const language = detectLanguage(comment);
      const lowerComment = comment.toLowerCase();
      let positiveCount = 0;
      let negativeCount = 0;
      
      positiveCount += englishPositiveWords.filter(word => lowerComment.includes(word)).length;
      negativeCount += englishNegativeWords.filter(word => lowerComment.includes(word)).length;
      
      if (languageWords[language]) {
        positiveCount += languageWords[language].positive.filter(word => lowerComment.includes(word.toLowerCase())).length;
        negativeCount += languageWords[language].negative.filter(word => lowerComment.includes(word.toLowerCase())).length;
      }
      
      return positiveCount === negativeCount;
    }).slice(0, 5);

    // Calculate overall sentiment score
    const sentimentScore = Math.round(((totals.positive - totals.negative) / totalAnalyzed) * 100 + 50);

    // Determine overall sentiment
    let overallSentiment = 'Neutral';
    if (sentimentScore > 60) overallSentiment = 'Positive';
    else if (sentimentScore < 40) overallSentiment = 'Negative';

    return res.status(200).json({
      totals,
      percentages,
      count: comments.length,
      videoTitle: videoTitle,
      channelName: channelName,
      totalComments: totalComments,
      languageBreakdown: languageStats,
      emojiAnalysis: {
        totalEmojis: allEmojis.length,
        uniqueEmojis: Object.keys(emojiCounter).length,
        topEmojis: topEmojis,
        emojiSentimentStats: emojiSentimentStats
      },
      positiveExamples,
      negativeExamples,
      neutralExamples,
      sentimentScore,
      overallSentiment,
      supportedLanguages: ["English", "Hindi", "Urdu", "Bengali", "Assamese", "Tamil", "Marathi", "Telugu"],
      analysisNote: totalComments > 2000 ? `Note: Analyzed ${comments.length} top comments (${Math.round((comments.length/totalComments)*100)}%) out of ${totalComments} total comments for maximum coverage.` : null
    });

  } catch (error) {
    console.error('API Error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    // Return more specific error messages for debugging
    if (error.message.includes('API key')) {
      return res.status(500).json({ error: 'YouTube API key error' });
    } else if (error.message.includes('fetch')) {
      return res.status(500).json({ error: 'Network error while fetching data' });
    } else {
      return res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
      });
    }
  }
} 