import { Helmet } from 'react-helmet-async';
import InverterBatteryCalculator from '../../pages/tools/InverterBatteryCalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Inverter Battery Backup Time Calculator - Paul Tools</title>
        <meta name="description" content="Calculate how long your inverter can run based on battery size and load." />
        <meta name="keywords" content="inverter battery calculator, battery backup calculator, inverter runtime, battery duration, power backup" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/inverter-battery-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Inverter Battery Backup Time Calculator",
            "description": "Calculate how long your inverter can run based on battery size and load.",
            "url": "https://www.shubhampaul.xyz/tools/inverter-battery-calculator",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <InverterBatteryCalculator />
    </>
  );
}