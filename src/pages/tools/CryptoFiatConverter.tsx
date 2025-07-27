import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CryptoFiatConverter from '@/components/tools/CryptoFiatConverter';

const CryptoFiatConverterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Crypto to Fiat Converter – Live Crypto & Fiat Exchange Rates"
        description="Convert 1000+ cryptocurrencies to fiat currencies with live prices and exchange rates. Supports manual override, quick pairs, and export/share."
        keywords="crypto to fiat converter, crypto calculator, bitcoin to usd, eth to inr, live crypto rates, exchange rate, crypto tools, convert crypto to fiat, best crypto converter, real-time crypto rates, crypto price calculator, fiat currency converter"
        canonical="https://www.shubhampaul.xyz/tools/crypto-fiat-converter"
      />
      <Navbar />
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crypto to Fiat Converter</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection.
          </p>
        </div>
      </section>

      {/* Why Crypto to Fiat Converter */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Crypto to Fiat Converter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">🌍 Global Access</h3>
                <p className="text-blue-800">Instantly convert any major cryptocurrency to your local currency, wherever you are in the world. Supports 1000+ cryptos and 100+ fiat currencies.</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">⚡ Real-Time Rates</h3>
                <p className="text-green-800">Get up-to-the-second prices and exchange rates from trusted sources like CoinGecko and ExchangeRate-API. No more outdated conversions.</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">🔄 Bidirectional & Manual Mode</h3>
                <p className="text-purple-800">Convert crypto to fiat or fiat to crypto. Use manual mode for custom rates or hypothetical scenarios.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">📊 Quick Pairs & Trends</h3>
                <p className="text-orange-800">One-click access to popular pairs (BTC/USD, ETH/INR, etc.) and mini price charts for trend spotting.</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-3">🔒 100% Private & Secure</h3>
                <p className="text-red-800">All calculations are done in your browser. No data is sent or stored. Your privacy is guaranteed.</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">📱 Mobile Friendly</h3>
                <p className="text-indigo-800">Designed for seamless use on any device—desktop, tablet, or smartphone.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential for Crypto Users</h3>
              <p className="text-gray-600">Whether you're a trader, investor, or just curious, accurate conversion is crucial for making informed decisions in the fast-moving crypto world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CryptoFiatConverter />
        </div>
      </section>
      {/* About, How to Use, FAQ Sections */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">About This Tool</h2>
          <p className="text-gray-700 text-base">
            The Crypto to Fiat Converter is your all-in-one solution for real-time, accurate, and private crypto-to-fiat conversions. Instantly convert over 1000+ cryptocurrencies to 100+ fiat currencies using live rates from CoinGecko and ExchangeRate-API. Features include bidirectional conversion, manual override, quick-select pairs, export/share, and a mini price trend chart. Designed for traders, investors, and anyone needing fast, reliable crypto-to-fiat calculations on any device.
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">How to Use This Tool?</h2>
          <ol className="list-decimal list-inside text-gray-700 text-base space-y-1">
            <li>Choose your cryptocurrency and fiat currency from the searchable dropdowns.</li>
            <li>Enter the amount of crypto or fiat to convert. The tool auto-calculates the equivalent value using live rates.</li>
            <li>Use quick-select pairs for popular conversions (e.g., BTC/USD, ETH/INR).</li>
            <li>Switch to manual mode to enter your own price/rate for custom or hypothetical scenarios.</li>
            <li>Check the mini chart for recent price trends of your selected pair (7 or 30 days).</li>
            <li>Export or share your conversion results for record-keeping or sharing.</li>
            <li>All calculations are instant, private, and work on any device.</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a crypto to fiat converter?</h3>
              <p className="text-gray-700">An online tool that lets you instantly convert cryptocurrency values (like Bitcoin, Ethereum, etc.) to traditional fiat currencies (like USD, INR, EUR) using live market rates.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate are the conversion rates?</h3>
              <p className="text-gray-700">Rates are fetched live from CoinGecko and ExchangeRate-API for near real-time accuracy. Rates may vary slightly between exchanges and can change rapidly.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I convert any cryptocurrency?</h3>
              <p className="text-gray-700">Yes, over 1000+ cryptocurrencies are supported, including all major and many minor coins and tokens.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does this tool support all fiat currencies?</h3>
              <p className="text-gray-700">Supports all major global fiat currencies (USD, EUR, INR, JPY, GBP, and more) as provided by ExchangeRate-API.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if live prices are not available?</h3>
              <p className="text-gray-700">Switch to manual mode to enter your own crypto price and fiat rate for custom calculations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this tool free to use?</h3>
              <p className="text-gray-700">Yes, 100% free to use with no registration required.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this tool on mobile devices?</h3>
              <p className="text-gray-700">Absolutely! Fully responsive and works seamlessly on smartphones, tablets, and desktops.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I share or export my conversion results?</h3>
              <p className="text-gray-700">Use the Export and Share buttons to download your results as a text file or share them directly using your device's sharing options.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data private and secure?</h3>
              <p className="text-gray-700">Yes, all calculations are performed client-side in your browser. No personal or financial data is stored or transmitted to any server.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I see historical price trends?</h3>
              <p className="text-gray-700">Yes, the mini chart below the converter shows recent price trends (7 or 30 days) for your selected crypto/fiat pair.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CryptoFiatConverterPage; 