import { Helmet } from 'react-helmet-async';
import CryptoAirdropEstimator from '../../components/tools/CryptoAirdropEstimator';

function Page() {
  return (
    <>
      <Helmet>
        <title>Crypto Airdrop Price Estimator | Predict Token Prices Pre-Launch</title>
        <meta name="description" content="Estimate the value of upcoming crypto airdrops using market cap, total supply, and circulating supply. Calculate potential token prices before launch." />
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
