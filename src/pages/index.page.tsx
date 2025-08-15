import { Helmet } from 'react-helmet-async';
import Home from '../pages/Home';

export function Page() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Paul Tools – Free Tools for Crypto, Electronics & Streaming</title>
        <meta name="description" content="Discover our collection of free online tools, including calculators for crypto and electronics, plus powerful streaming utilities and downloaders. Each tool is designed for exceptional precision, reliability, and ease of use, so you can get the job done quickly and accurately." />
        <meta name="keywords" content="free online calculators, crypto calculators, crypto ROI calculator, crypto tax calculator, crypto airdrop estimator, DeFi yield calculator, gas fee estimator, electronics calculators, inverter efficiency calculator, inverter battery calculator, solar panel calculator, PCB trace calculator, capacitor calculator, streaming tools, YouTube comment sentiment analyzer, YouTube thumbnail downloader, Nightbot timer calculator, Nightbot command generator, AI clip generator, LiveSnip, free tools, online utilities, crypto tools, electrical calculators, streamer tools, content creator tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shubhampaul.xyz/" />
        <meta property="og:title" content="Paul Tools – Free Tools for Crypto, Electronics & Streaming" />
        <meta property="og:description" content="Discover our collection of free online tools, including calculators for crypto and electronics, plus powerful streaming utilities and downloaders. Each tool is designed for exceptional precision, reliability, and ease of use, so you can get the job done quickly and accurately." />
        <meta property="og:image" content="https://www.shubhampaul.xyz/og-image.png" />
        <meta property="og:site_name" content="Paul Tools" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.shubhampaul.xyz/" />
        <meta name="twitter:title" content="Paul Tools – Free Tools for Crypto, Electronics & Streaming" />
        <meta name="twitter:description" content="Discover our collection of free online tools, including calculators for crypto and electronics, plus powerful streaming utilities and downloaders. Each tool is designed for exceptional precision, reliability, and ease of use, so you can get the job done quickly and accurately." />
        <meta name="twitter:image" content="https://www.shubhampaul.xyz/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Paul Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Paul Tools",
            "url": "https://www.shubhampaul.xyz",
            "logo": "https://www.shubhampaul.xyz/logo.png",
            "description": "Free online calculators and tools for crypto, electronics, and streaming",
            "sameAs": [
              "https://www.shubhampaul.xyz"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://www.shubhampaul.xyz/contact"
            }
          })}
        </script>
        
        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Paul Tools",
            "url": "https://www.shubhampaul.xyz",
            "description": "Free online calculators and tools for crypto, electronics, and streaming",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.shubhampaul.xyz/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Structured Data - WebPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Paul Tools - Free Tools for Crypto, Electronics & Streaming",
            "description": "Discover our collection of free online tools, including calculators for crypto and electronics, plus powerful streaming utilities and downloaders. Each tool is designed for exceptional precision, reliability, and ease of use, so you can get the job done quickly and accurately.",
            "url": "https://www.shubhampaul.xyz",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Crypto ROI Calculator",
                  "url": "https://www.shubhampaul.xyz/tools/crypto-roi-calculator"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Crypto Tax Calculator",
                  "url": "https://www.shubhampaul.xyz/tools/crypto-tax-calculator"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Inverter Efficiency Calculator",
                  "url": "https://www.shubhampaul.xyz/tools/inverter-efficiency-calculator"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "YouTube Comment Sentiment Analyzer",
                  "url": "https://www.shubhampaul.xyz/tools/youtube-comment-sentiment-analyzer"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Home />
    </>
  );
}
