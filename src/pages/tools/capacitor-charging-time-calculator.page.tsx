
import { Helmet } from 'react-helmet-async';
import CapacitorChargingTimeCalculator from '../../pages/tools/CapacitorChargingTimeCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Capacitor Charging Time Calculator - Paul Tools</title>
        <meta name="description" content="Determine how long it takes for a capacitor to charge in a circuit." />
        <meta name="keywords" content="capacitor charging time calculator, rc circuit calculator, capacitor discharge, electronics tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/capacitor-charging-time-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Capacitor Charging Time Calculator",
            "description": "Determine how long it takes for a capacitor to charge in a circuit.",
            "url": "https://www.shubhampaul.xyz/tools/capacitor-charging-time-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <CapacitorChargingTimeCalculator />
    </>
  );
}
