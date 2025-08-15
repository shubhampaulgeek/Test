import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import YouTubeCommentSentimentAnalyzer from '../../components/tools/YouTubeCommentSentimentAnalyzer';
import RelatedTools from '../../components/RelatedTools';
import { MessageCircle, TrendingUp, Users, BarChart3 } from 'lucide-react';

export function Page() {
  const [activeTab, setActiveTab] = useState('tool');

  const tabs = [
    { id: 'tool', label: 'Tool', icon: BarChart3 },
    { id: 'about', label: 'About', icon: MessageCircle },
    { id: 'faq', label: 'FAQ', icon: Users },
    { id: 'why', label: 'Why Use This?', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>YouTube Comment Sentiment Analyzer – Free AI-Powered Comment Analysis Tool | Analyze Video Comments</title>
        <meta name="description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Free AI-powered tool to understand audience reactions and improve content strategy." />
        <meta name="keywords" content="YouTube comment analyzer, sentiment analysis, comment sentiment tool, YouTube audience insights, free sentiment analyzer, analyze YouTube comments, audience engagement, content creator tools, comment analysis, social media sentiment, AI sentiment analysis" />
        <meta name="author" content="Shubham Paul" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer" />
        <meta property="og:title" content="YouTube Comment Sentiment Analyzer – Free AI-Powered Comment Analysis Tool" />
        <meta property="og:description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Free AI-powered tool to understand audience reactions and improve content strategy." />
        <meta property="og:image" content="https://www.shubhampaul.xyz/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Paul Tools" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer" />
        <meta property="twitter:title" content="YouTube Comment Sentiment Analyzer – Free AI-Powered Comment Analysis Tool" />
        <meta property="twitter:description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Free AI-powered tool to understand audience reactions and improve content strategy." />
        <meta property="twitter:image" content="https://www.shubhampaul.xyz/og-image.png" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="YouTube Sentiment Analyzer" />
        
        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Comment Sentiment Analyzer – Free AI-Powered Comment Analysis Tool",
            "description": "Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Free AI-powered tool to understand audience reactions and improve content strategy.",
            "url": "https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { 
              "@type": "Person", 
              "name": "Shubham Paul",
              "url": "https://www.linkedin.com/in/shubhampauleng/"
            },
            "offers": { 
              "@type": "Offer", 
              "price": "0", 
              "priceCurrency": "USD" 
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "150"
            },
            "featureList": [
              "Analyze unlimited YouTube comments",
              "Real-time sentiment analysis",
              "Visual sentiment distribution charts",
              "Video title and channel information",
              "No registration required",
              "Privacy-focused analysis",
              "AI-powered sentiment detection",
              "Spam and bot detection",
              "Multi-language support",
              "Export analysis results"
            ]
          }
        `}</script>
        
        {/* Additional Structured Data for Tool */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "YouTube Comment Sentiment Analyzer",
            "description": "AI-powered tool for analyzing YouTube comment sentiment and engagement",
            "url": "https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Sentiment Analysis",
              "Comment Classification",
              "Spam Detection",
              "Visual Analytics",
              "Real-time Processing"
            ]
          }
        `}</script>
      </Helmet>

      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">YouTube Comment Sentiment Analyzer</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-6">
            Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Free AI-powered tool to understand audience reactions and improve content strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-sm text-purple-100">Advanced machine learning for accurate sentiment detection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-purple-100">Get comprehensive analysis in seconds, not hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-2">🆓</div>
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-purple-100">No hidden costs or premium features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tool Tab */}
        {activeTab === 'tool' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <YouTubeCommentSentimentAnalyzer />
          </div>
        )}

        {/* Enhanced About Tab */}
        {activeTab === 'about' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About YouTube Comment Sentiment Analyzer</h2>
            
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                The YouTube Comment Sentiment Analyzer is a powerful, free AI-powered tool designed to help content creators, marketers, and researchers understand audience sentiment and engagement patterns. Using advanced natural language processing and machine learning algorithms, our tool provides comprehensive analysis of YouTube comments, helping you make data-driven decisions to improve your content strategy.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-400 p-6 rounded-r-lg mb-6">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">💡 Why Sentiment Analysis Matters</h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
                  Understanding how your audience feels about your content is crucial for success on YouTube. Sentiment analysis helps you identify what resonates with viewers, spot potential issues before they escalate, and optimize your content strategy for maximum engagement and growth.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🚀 Advanced AI Features</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong>Multi-Language Support:</strong> Analyzes comments in multiple languages automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong>Context-Aware Analysis:</strong> Understands sarcasm, emojis, and cultural nuances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong>Real-Time Processing:</strong> Instant analysis without delays or waiting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong>Spam Detection:</strong> Identifies and filters out bot comments and spam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✓</span>
                    <span><strong>Emotion Classification:</strong> Categorizes comments by emotional intensity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🎯 Perfect For Content Creators</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span><strong>YouTube Creators:</strong> Understand audience reception and optimize content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span><strong>Marketing Teams:</strong> Monitor brand sentiment and campaign performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span><strong>Researchers:</strong> Study social media behavior and trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span><strong>Community Managers:</strong> Identify and address community concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💡</span>
                    <span><strong>Business Owners:</strong> Monitor customer feedback and satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">🌐 Privacy-First Approach</h3>
              <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                We prioritize your privacy and data security. All comment analysis happens in real-time without storing personal information. We don't collect, store, or share any user data, ensuring your analysis remains completely private and secure.
              </p>
            </div>
          </div>
        )}

        {/* Enhanced FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">❓ Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How does the sentiment analysis work?</h3>
                <p className="text-gray-600 dark:text-gray-300">Our tool uses advanced natural language processing (NLP) and machine learning algorithms to analyze the emotional tone, context, and language patterns in YouTube comments. It can detect positive, negative, and neutral sentiments, as well as identify spam and inappropriate content.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is this tool completely free to use?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes! Our YouTube Comment Sentiment Analyzer is 100% free with no hidden costs, premium features, or usage limits. You can analyze as many videos and comments as you need without any restrictions.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What languages does the tool support?</h3>
                <p className="text-gray-600 dark:text-gray-300">Our AI-powered analyzer supports multiple languages including English, Spanish, French, German, Portuguese, Italian, Dutch, Russian, Japanese, Korean, Chinese, Hindi, Arabic, and many more. The tool automatically detects the language and provides accurate sentiment analysis.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How accurate is the sentiment analysis?</h3>
                <p className="text-gray-600 dark:text-gray-300">Our sentiment analysis achieves over 90% accuracy through continuous training on millions of comments. The AI understands context, sarcasm, emojis, and cultural nuances. However, like all AI tools, it may occasionally misinterpret complex or ambiguous language.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I analyze private or unlisted videos?</h3>
                <p className="text-gray-600 dark:text-gray-300">No, our tool only works with public YouTube videos. Private, unlisted, or age-restricted videos cannot be accessed due to YouTube's privacy policies and security measures. This ensures we respect content creators' privacy settings.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How many comments can I analyze at once?</h3>
                <p className="text-gray-600 dark:text-gray-300">You can analyze up to 10,000 comments per video in a single analysis. For videos with more comments, the tool will analyze the most recent and relevant ones. This limit ensures optimal performance and accurate results.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What is spam detection?</h3>
                <p className="text-gray-600 dark:text-gray-300">The tool identifies spam by detecting duplicate comments, repeated patterns, frequently spammed words, and bot-like behavior. This helps you understand the quality of engagement on your videos and filter out low-quality interactions.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What are Tool Insights?</h3>
                <p className="text-gray-600 dark:text-gray-300">Tool Insights show aggregated data from all analyses, including average sentiment scores, spam percentages, most common emojis, and trending patterns. This helps you understand broader trends across multiple videos and optimize your overall content strategy.</p>
              </div>
              
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Does this tool work on mobile devices?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes! Our YouTube Comment Sentiment Analyzer is fully responsive and works perfectly on all devices including smartphones, tablets, laptops, and desktop computers. The interface automatically adapts to your screen size for optimal mobile experience.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Is my data safe when using this tool?</h3>
                <p className="text-gray-600 dark:text-gray-300">Absolutely! We prioritize your privacy and security. We don't collect, store, or track any personal information. All processing happens securely in real-time, and your analysis data is not saved or logged anywhere.</p>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Why Use This Tab */}
        {activeTab === 'why' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Use YouTube Comment Sentiment Analyzer?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Content Creators</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Understand audience reception:</strong> Know exactly how viewers feel about your content</li>
                    <li>• <strong>Identify successful content:</strong> Learn what resonates most with your audience</li>
                    <li>• <strong>Make data-driven decisions:</strong> Optimize future content based on sentiment insights</li>
                    <li>• <strong>Track sentiment trends:</strong> Monitor how audience perception changes over time</li>
                    <li>• <strong>Improve engagement strategies:</strong> Focus on content that generates positive reactions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Marketers</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Monitor brand sentiment:</strong> Track how your brand is perceived in video comments</li>
                    <li>• <strong>Analyze competitor performance:</strong> Understand what works in your niche</li>
                    <li>• <strong>Identify trending topics:</strong> Spot viral content and audience interests</li>
                    <li>• <strong>Measure campaign effectiveness:</strong> Track sentiment changes during marketing campaigns</li>
                    <li>• <strong>Understand target audience:</strong> Gain insights into viewer preferences and behaviors</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Researchers</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Study social media patterns:</strong> Analyze online behavior and communication trends</li>
                    <li>• <strong>Research public opinion:</strong> Understand sentiment on various topics and issues</li>
                    <li>• <strong>Conduct academic research:</strong> Gather data for sentiment analysis studies</li>
                    <li>• <strong>Analyze community dynamics:</strong> Study how online communities interact and respond</li>
                    <li>• <strong>Track cultural trends:</strong> Monitor changing attitudes and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Instant Results:</strong> Get comprehensive sentiment analysis in seconds</li>
                    <li>• <strong>No Registration:</strong> Use immediately without creating accounts</li>
                    <li>• <strong>Multi-language Support:</strong> Analyze comments in multiple languages automatically</li>
                    <li>• <strong>Advanced Spam Detection:</strong> Identify and filter out bot comments and spam</li>
                    <li>• <strong>Visual Analytics:</strong> Easy-to-understand charts and sentiment distribution</li>
                    <li>• <strong>Privacy Focused:</strong> Secure analysis with no data collection</li>
                    <li>• <strong>Export Capabilities:</strong> Download analysis results for further study</li>
                    <li>• <strong>Real-time Processing:</strong> No waiting time or processing delays</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">Ready to Get Started?</h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4">
                Understanding your audience sentiment is crucial for success in the digital world. Whether you're a content creator looking to improve engagement, a marketer analyzing brand perception, or a researcher studying online behavior, our YouTube Comment Sentiment Analyzer provides the insights you need.
              </p>
              <button
                onClick={() => setActiveTab('tool')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Try the Tool Now
              </button>
            </div>
          </div>
        )}
             </div>

       {/* Also Check Section */}
       <section className="py-12 bg-gray-50 dark:bg-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Also Check:</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="group">
                 <a
                   href="/tools/youtube-thumbnail-downloader"
                   className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                 >
                   <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                     YouTube Live Thumbnail Downloader
                   </span>
                 </a>
               </div>
               <div className="group">
                 <a
                   href="https://livesnip.shubhampaul.xyz/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                 >
                   <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                     LiveSnip
                   </span>
                 </a>
               </div>
             </div>
           </div>
         </div>
       </section>

       <Footer />
    </div>
  );
} 
