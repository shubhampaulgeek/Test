
import { Helmet } from 'react-helmet-async';
import AIClipGenerator from '../../pages/tools/AIClipGenerator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>AI Clip Title Generator - Paul Tools</title>
        <meta name="description" content="Use AI to instantly generate catchy titles and descriptions for your YouTube or Twitch stream clips. Boost engagement with smart content suggestions." />
        <meta name="keywords" content="AI clip generator, stream clips, YouTube titles, Twitch clips, content creation, AI tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/ai-clip-generator" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="AI Clip Title Generator - Paul Tools" />
        <meta property="og:description" content="Use AI to instantly generate catchy titles and descriptions for your YouTube or Twitch stream clips. Boost engagement with smart content suggestions." />
        <meta property="og:url" content="https://www.shubhampaul.xyz/tools/ai-clip-generator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.shubhampaul.xyz/og-image.png" />
        <meta property="og:site_name" content="Paul Tools" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.shubhampaul.xyz/tools/ai-clip-generator" />
        <meta name="twitter:title" content="AI Clip Title Generator - Paul Tools" />
        <meta name="twitter:description" content="Use AI to instantly generate catchy titles and descriptions for your YouTube or Twitch stream clips. Boost engagement with smart content suggestions." />
        <meta name="twitter:image" content="https://www.shubhampaul.xyz/og-image.png" />
        <meta name="twitter:domain" content="shubhampaul.xyz" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AI Clip Title Generator",
            "description": "Use AI to instantly generate catchy titles and descriptions for your YouTube or Twitch stream clips. Boost engagement with smart content suggestions.",
            "url": "https://www.shubhampaul.xyz/tools/ai-clip-generator",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <AIClipGenerator />
    </>
  );
}
