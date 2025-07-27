import { Helmet } from 'react-helmet-async';
import InverterEfficiencyCalculator from '../../pages/tools/InverterEfficiencyCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Inverter Efficiency Calculator - Paul Tools</title>
        <meta name="description" content="Check the efficiency of your inverter and minimize power losses." />
        <meta name="keywords" content="inverter efficiency calculator, inverter losses, power efficiency, inverter performance" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/inverter-efficiency-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Inverter Efficiency Calculator",
            "description": "Check the efficiency of your inverter and minimize power losses.",
            "url": "https://www.shubhampaul.xyz/tools/inverter-efficiency-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <InverterEfficiencyCalculator />
    </>
  );
}