import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import DeFiYieldCalculator from '@/components/tools/DeFiYieldCalculator';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import CurrencyConverterMini from '@/components/tools/CurrencyConverterMini';

export function Page() {
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "DeFi Yield Calculator",
            "description": "Calculate potential profits from DeFi staking, farming, and liquidity pools. Discover your DeFi returns based on APY, investment amount, and time.",
            "url": "https://www.shubhampaul.xyz/tools/defi-yield-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <SEO
        title="DeFi Yield Calculator – Estimate Staking and Farming Returns"
        description="Calculate potential profits from DeFi staking, farming, and liquidity pools. Discover your DeFi returns based on APY, investment amount, and time."
        keywords="defi yield calculator, staking calculator, yield farming calculator, liquidity mining returns, defi investment calculator"
        canonical="https://www.shubhampaul.xyz/tools/defi-yield-calculator"
      />
      <Navbar />
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DeFi Yield Calculator</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Calculate potential earnings from staking, farming, and other DeFi yield opportunities
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeFiYieldCalculator showCurrencyConverter={showCurrencyConverter} setShowCurrencyConverter={setShowCurrencyConverter} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default { Page };