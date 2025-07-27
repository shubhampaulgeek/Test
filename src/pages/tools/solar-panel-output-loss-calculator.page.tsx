import { Helmet } from 'react-helmet-async';
import SolarPanelOutputLossCalculator from '../../pages/tools/SolarPanelOutputLossCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Solar Panel Output Loss Calculator - Paul Tools</title>
        <meta name="description" content="Estimate output losses in solar panels due to various factors." />
        <meta name="keywords" content="solar panel output loss calculator, solar loss calculator, pv loss, solar tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/solar-panel-output-loss-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Solar Panel Output Loss Calculator",
            "description": "Estimate output losses in solar panels due to various factors.",
            "url": "https://www.shubhampaul.xyz/tools/solar-panel-output-loss-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <SolarPanelOutputLossCalculator />
    </>
  );
}