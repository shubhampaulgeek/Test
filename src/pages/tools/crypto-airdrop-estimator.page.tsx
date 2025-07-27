import { Helmet } from 'react-helmet-async';
import CryptoAirdropEstimator from '../../pages/tools/CryptoAirdropEstimator';

function Page() {
  return (
    <>
      <Helmet>
        <title>Crypto Airdrop Estimator - Paul Tools</title>
        <meta name="description" content="Calculate your potential rewards from crypto airdrops instantly." />
        <meta name="keywords" content="crypto airdrop estimator, token price calculator, market cap, circulating supply, crypto tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/crypto-airdrop-estimator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Crypto Airdrop Estimator",
            "description": "Calculate your potential rewards from crypto airdrops instantly.",
            "url": "https://www.shubhampaul.xyz/tools/crypto-airdrop-estimator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <CryptoAirdropEstimator />
    </>
  );
}

export { Page };