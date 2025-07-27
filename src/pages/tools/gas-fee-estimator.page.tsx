import { Helmet } from 'react-helmet-async';
import GasFeeEstimator from '../../pages/tools/GasFeeEstimator';

export function Page() {
  return (
    <>
      <Helmet>
        <title>Gas Fee Estimator - Paul Tools</title>
        <meta name="description" content="Estimate gas fees across popular blockchains for swaps, transfers, and more." />
        <meta name="keywords" content="gas fee estimator, blockchain gas fees, crypto gas fees, ethereum gas, bsc gas, polygon gas" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/gas-fee-estimator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Gas Fee Estimator",
            "description": "Estimate gas fees across popular blockchains for swaps, transfers, and more.",
            "url": "https://www.shubhampaul.xyz/tools/gas-fee-estimator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <GasFeeEstimator />
    </>
  );
}