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
        <title>YouTube Comment Sentiment Analyzer Tool</title>
        <meta name="description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Discover top words, emojis, and patterns to better understand your audience's reactions." />
        <meta name="keywords" content="YouTube comment analyzer, sentiment analysis, comment sentiment tool, YouTube audience insights, free sentiment analyzer, analyze YouTube comments, audience engagement, content creator tools, comment analysis, social media sentiment" />
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
        <meta property="og:title" content="YouTube Comment Sentiment Analyzer Tool" />
        <meta property="og:description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Discover top words, emojis, and patterns to better understand your audience's reactions." />
        <meta property="og:image" content="https://www.shubhampaul.xyz/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Paul Tools" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer" />
        <meta property="twitter:title" content="YouTube Comment Sentiment Analyzer Tool" />
        <meta property="twitter:description" content="Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Discover top words, emojis, and patterns to better understand your audience's reactions." />
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
            "name": "YouTube Comment Sentiment Analyzer Tool",
            "description": "Explore detailed sentiment insights on YouTube comments—analyzing positive, neutral, negative, and spam feedback. Discover top words, emojis, and patterns to better understand your audience's reactions.",
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
              "Privacy-focused analysis"
            ]
          }
        `}</script>
        
        {/* Additional Structured Data for Tool */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "YouTube Comment Sentiment Analyzer",
            "description": "Professional sentiment analysis tool for YouTube comments using VADER sentiment analysis and YouTube Data API",
            "url": "https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web Browser",
            "browserRequirements": "Requires JavaScript. Requires HTML5.",
            "softwareVersion": "1.0",
            "datePublished": "2024-01-01",
            "dateModified": "2024-01-01",
            "author": {
              "@type": "Person",
              "name": "Shubham Paul",
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Paul Tools"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Paul Tools",
              "url": "https://www.shubhampaul.xyz"
            }
          }
        `}</script>
      </Helmet>

      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            YouTube Comment Sentiment Analyzer
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Analyze YouTube comments for sentiment trends. See how positive or negative your audience is over time.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {activeTab === 'tool' && (
          <YouTubeCommentSentimentAnalyzer />
        )}

        {activeTab === 'about' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About YouTube Comment Sentiment Analyzer</h2>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The YouTube Comment Sentiment Analyzer is a powerful tool designed for content creators, marketers, and researchers who want to understand audience sentiment from YouTube video comments. Using advanced Natural Language Processing (NLP) techniques, this tool analyzes the emotional tone of comments to provide insights into how your audience feels about your content.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our tool uses the VADER (Valence Aware Dictionary and sEntiment Reasoner) sentiment analysis model, which is specifically attuned to sentiments expressed in social media. The process involves:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Fetching comments from YouTube videos using the YouTube Data API</li>
                <li>Cleaning and preprocessing the text data</li>
                <li>Analyzing sentiment using NLTK's VADER sentiment analyzer</li>
                <li>Categorizing comments as positive, neutral, or negative</li>
                <li>Presenting results in an easy-to-understand visual format</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li><strong>Real-time Analysis:</strong> Get instant sentiment analysis of unlimited comments</li>
                <li><strong>Comprehensive Data:</strong> View video title, channel name, and total comment count</li>
                <li><strong>Visual Results:</strong> Interactive bar chart showing sentiment distribution</li>
                <li><strong>Accurate Analysis:</strong> Uses industry-standard VADER sentiment analysis</li>
                <li><strong>Privacy Focused:</strong> No data is stored or shared - analysis happens in real-time</li>
              </ul>


            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How many comments can be analyzed?</h3>
                <p className="text-gray-700 dark:text-gray-300">The tool can analyze unlimited comments per video. This covers even the most popular YouTube videos and provides a comprehensive sentiment overview.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Is my data safe and private?</h3>
                <p className="text-gray-700 dark:text-gray-300">Yes, absolutely! We don't store any of your data. All analysis happens in real-time and no information is saved on our servers.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What types of YouTube videos can be analyzed?</h3>
                <p className="text-gray-700 dark:text-gray-300">Any public YouTube video with comments enabled can be analyzed. Private videos or videos with disabled comments cannot be processed.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">How accurate is the sentiment analysis?</h3>
                <p className="text-gray-700 dark:text-gray-300">The VADER sentiment analyzer is specifically designed for social media content and achieves high accuracy for YouTube comments. However, context and sarcasm can sometimes be misinterpreted.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Can I analyze comments from live streams?</h3>
                <p className="text-gray-700 dark:text-gray-300">Currently, the tool analyzes comments from uploaded videos. Live stream comments require different API endpoints and may be added in future updates.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What if I get an error message?</h3>
                <p className="text-gray-700 dark:text-gray-300">Common errors include invalid video URLs, private videos, or videos with disabled comments. Make sure you're using a valid public YouTube video URL.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Is this tool free to use?</h3>
                <p className="text-gray-700 dark:text-gray-300">Yes, the YouTube Comment Sentiment Analyzer is completely free to use with no limitations or hidden costs.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'why' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Use YouTube Comment Sentiment Analyzer?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Content Creators</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Understand audience reception of your content</li>
                    <li>• Identify which videos resonate most with viewers</li>
                    <li>• Make data-driven decisions for future content</li>
                    <li>• Track sentiment trends over time</li>
                    <li>• Improve engagement strategies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Marketers</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Monitor brand sentiment in video comments</li>
                    <li>• Analyze competitor video performance</li>
                    <li>• Identify trending topics and audience interests</li>
                    <li>• Measure campaign effectiveness</li>
                    <li>• Understand target audience preferences</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">For Researchers</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Study social media sentiment patterns</li>
                    <li>• Analyze public opinion on various topics</li>
                    <li>• Conduct academic research on online behavior</li>
                    <li>• Gather data for sentiment analysis studies</li>
                    <li>• Understand community dynamics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Instant Results:</strong> Get sentiment analysis in seconds</li>
                    <li>• <strong>No Registration:</strong> Use immediately without signing up</li>
                    <li>• <strong>Comprehensive Data:</strong> Analyze thousands of comments</li>
                    <li>• <strong>Visual Insights:</strong> Easy-to-understand charts and graphs</li>
                    <li>• <strong>Privacy Focused:</strong> Your data stays private</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ready to Get Started?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
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

      {/* Related Tools Section */}
      <RelatedTools category="streaming" currentTool="YouTube Comment Sentiment Analyzer" />
      <Footer />
    </div>
  );
} 
