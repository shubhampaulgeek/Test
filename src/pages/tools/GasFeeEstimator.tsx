import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import GasFeeEstimator from '@/components/tools/GasFeeEstimator';
import RelatedTools from '@/components/RelatedTools';

const GasFeeEstimatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Gas Fee Estimator - Live Gas Fees Tracker"
        description="Check real-time gas fees for various Blockchain Networks. Easily estimate swap, send, or mint costs across chains."
        keywords="ethereum gas calculator, polygon gas fees, BSC fee checker, crypto gas estimator, blockchain gas price"
        canonical="https://www.shubhampaul.xyz/tools/gas-fee-estimator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gas Fee Estimator</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Check real-time gas fees for Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Smart Chain, Avalanche, Linea, and zkSync Era across different transaction types
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GasFeeEstimator />

          {/* About Section */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Tool</h2>
            <p className="text-gray-600 mb-4">
              The Gas Fee Estimator provides real-time gas price data for all major EVM blockchains supported by Infura, including Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Smart Chain, Avalanche, Linea, and zkSync Era. Instantly estimate transaction costs for sending tokens, swapping, or minting NFTs, and optimize your DeFi and trading activities with up-to-date network fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Networks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ethereum mainnet</li>
                  <li>• Polygon (MATIC)</li>
                  <li>• Arbitrum One</li>
                  <li>• Optimism</li>
                  <li>• Base</li>
                  <li>• BNB Smart Chain</li>
                  <li>• Avalanche</li>
                  <li>• Linea</li>
                  <li>• zkSync Era</li>
                  <li>• Real-time price updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transaction Types</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Simple transfers</li>
                  <li>• Token swaps</li>
                  <li>• Contract interactions</li>
                  <li>• NFT minting</li>
                </ul>
              </div>
            </div>

            {/* Why Gas Fee Estimator? */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Gas Fee Estimator?</h3>
              <p className="text-gray-600 mb-4">
                Gas fees can fluctuate rapidly across blockchains, impacting the cost and speed of your transactions. This tool helps you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Compare live gas prices across top EVM networks</li>
                <li>Choose the best time and network for your transaction</li>
                <li>Estimate costs for different transaction types (send, swap, mint)</li>
                <li>Avoid overpaying during periods of high congestion</li>
              </ul>
            </div>

            {/* How to Use This Tool? */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Use This Tool?</h3>
              <ol className="list-decimal pl-6 text-gray-600 mb-4">
                <li>Select your desired blockchain from the dropdown menu.</li>
                <li>Choose the type of transaction (Send Token, Token Swap, NFT Mint).</li>
                <li>View real-time gas prices for slow, standard, and fast speeds.</li>
                <li>See the estimated total fee for your selected action.</li>
                <li>Use this information to plan and optimize your transactions.</li>
              </ol>
            </div>

            {/* FAQ Section */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Frequently Asked Questions (FAQ)</h3>
              <div className="mb-4">
                <b>Q: Which blockchains are supported?</b>
                <p className="text-gray-600">A: All major EVM chains supported by Infura: Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Smart Chain, Avalanche, Linea, and zkSync Era.</p>
              </div>
              <div className="mb-4">
                <b>Q: Are the gas prices live?</b>
                <p className="text-gray-600">A: Yes, gas prices are fetched in real-time from the Infura Gas API.</p>
              </div>
              <div className="mb-4">
                <b>Q: Do I need an API key or backend proxy?</b>
                <p className="text-gray-600">A: No, the tool works directly in your browser using Infura's public API with CORS support.</p>
              </div>
              <div className="mb-4">
                <b>Q: What do "slow", "standard", and "fast" mean?</b>
                <p className="text-gray-600">A: These represent different transaction speeds and fee levels. "Slow" is the cheapest but may take longer, "fast" is the quickest but costs more, and "standard" is a balanced option.</p>
              </div>
              <div className="mb-4">
                <b>Q: Can I use this for DeFi, NFT, and regular transfers?</b>
                <p className="text-gray-600">A: Yes! The estimator supports all common transaction types on supported EVM chains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <RelatedTools category="crypto" currentTool="Gas Fee Estimator" />
      <Footer />
    </div>
  );
};

export default GasFeeEstimatorPage;
