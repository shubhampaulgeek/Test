import { Helmet } from 'react-helmet-async';
import CryptoFiatConverterPage from './CryptoFiatConverter';
 
export function Page() {
  return <>
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Crypto to Fiat Converter",
          "description": "Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection.",
          "url": "https://www.shubhampaul.xyz/tools/crypto-fiat-converter",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "All",
          "image": "https://www.shubhampaul.xyz/og-image.png",
          "author": { "@type": "Person", "name": "Shubham Paul" },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        }
      `}</script>
    </Helmet>
    <CryptoFiatConverterPage />
  </>;
} 