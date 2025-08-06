import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import YouTubeCommentSentimentAnalyzer from '../../components/tools/YouTubeCommentSentimentAnalyzer';
import RelatedTools from '../../components/RelatedTools';

export function Page() {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <YouTubeCommentSentimentAnalyzer />
      </div>

      {/* Related Tools Section */}
      <RelatedTools category="streaming" currentTool="YouTube Comment Sentiment Analyzer" />
      <Footer />
    </div>
  );
} 
