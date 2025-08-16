import { Helmet } from 'react-helmet-async';
import NightbotCommandGenerator from '../../components/tools/NightbotCommandGenerator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Nightbot Command Generator - Paul Tools</title>
        <meta name="description" content="Easily generate custom commands for Nightbot on YouTube or Twitch." />
        <meta name="keywords" content="nightbot command generator, nightbot custom commands, streaming tools, chat commands" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/nightbot-command-generator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Nightbot Command Generator",
            "description": "Easily generate custom commands for Nightbot on YouTube or Twitch.",
            "url": "https://www.shubhampaul.xyz/tools/nightbot-command-generator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <NightbotCommandGenerator />
    </>
  );
}