import { Helmet } from 'react-helmet-async';
import NightbotTimerCalculator from '../../pages/tools/NightbotTimerCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Nightbot Timer Calculator - Paul Tools</title>
        <meta name="description" content="Calculate optimal timer intervals for your Nightbot commands." />
        <meta name="keywords" content="nightbot timer calculator, nightbot commands, chat timer, streaming tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/nightbot-timer-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Nightbot Timer Calculator",
            "description": "Calculate optimal timer intervals for your Nightbot commands.",
            "url": "https://www.shubhampaul.xyz/tools/nightbot-timer-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <NightbotTimerCalculator />
    </>
  );
}