import { Helmet } from 'react-helmet-async';
import CryptoROICalculatorPage from '../../components/tools/CryptoROICalculator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Crypto ROI Calculator - Paul Tools</title>
        <meta name="description" content="Measure your crypto investment returns with ease." />
        <meta name="keywords" content="crypto roi calculator, crypto investment calculator, crypto returns, investment roi" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/crypto-roi-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Crypto ROI Calculator",
            "description": "Measure your crypto investment returns with ease.",
            "url": "https://www.shubhampaul.xyz/tools/crypto-roi-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <CryptoROICalculatorPage />
    </>
  );
}