
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CryptoROICalculator from '@/components/tools/CryptoROICalculator';
import SEO from '@/components/SEO';
import RelatedTools from '@/components/RelatedTools';
import { TrendingUp, Calculator, DollarSign, BarChart3, Shield, Zap } from 'lucide-react';

const CryptoROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Crypto ROI Calculator – Estimate Your Crypto Profits"
        description="Calculate your cryptocurrency Return on Investment (ROI) with live market data for the potential gains and future value of your cryptocurrency holdings."
        keywords="crypto roi calculator, crypto profit calculator, cryptocurrency roi, crypto investment calculator, bitcoin roi calculator"
        canonical="https://www.shubhampaul.xyz/tools/crypto-roi-calculator"
      />
      
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <TrendingUp className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Crypto ROI Calculator – Estimate Your Crypto Profits</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
             Calculate your cryptocurrency Return on Investment (ROI) with live market data for the potential gains and future value of your cryptocurrency holdings.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CryptoROICalculator />
          </div>
        </section>

        {/* Why Crypto ROI Calculator Section */}
        <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Crypto ROI Calculator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Investment Tracking</h3>
                <p className="text-gray-600 text-sm">Track your crypto investments with precision using live market data or manual price entry for complete control over your calculations.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-Time Market Data</h3>
                <p className="text-gray-600 text-sm">Access live prices for 1000+ cryptocurrencies with instant updates, ensuring your ROI calculations are always current and accurate.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant ROI Calculations</h3>
                <p className="text-gray-600 text-sm">Get immediate results showing your current portfolio value, profit/loss amounts, and ROI percentages with detailed breakdowns.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Currency Support</h3>
                <p className="text-gray-600 text-sm">View results in your preferred currency with automatic conversion rates, making it easy to understand your returns in local terms.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy-First Design</h3>
                <p className="text-gray-600 text-sm">All calculations happen locally in your browser - no financial data is stored or transmitted, ensuring complete privacy.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Performance</h3>
                <p className="text-gray-600 text-sm">Monitor your investment performance with clear profit/loss visualizations and percentage gains for informed decision-making.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About This Tool */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About This Tool</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                The Crypto ROI Calculator is a comprehensive tool designed to help crypto investors and traders track their investment performance with precision and ease. Whether you're a beginner or experienced investor, this calculator provides the insights you need to make informed decisions about your cryptocurrency portfolio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Live cryptocurrency prices from 1000+ coins</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Manual price entry option for complete control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Instant ROI calculations with detailed breakdowns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Multi-currency support with real-time conversion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Privacy-focused - no data storage or tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Mobile-friendly responsive design</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Crypto investors and traders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Portfolio performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Investment decision making</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Financial planning and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Tax preparation and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Educational tool for learning crypto investing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use This Tool */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use This Tool?</h2>
            
            {/* Step-by-step guide */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Step-by-Step Guide</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Investment</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Input your initial investment amount in USD. This is the total money you spent to buy the cryptocurrency.
                  </p>
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700 font-medium">Example: $1,000</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Set Purchase Price</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enter the price per coin when you bought it. This helps calculate how many tokens you own.
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-700 font-medium">Example: $50 per coin</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Choose Price Method</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Use live market prices by searching cryptocurrencies, or manually enter current prices for full control.
                  </p>
                  <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-purple-700 font-medium">Live or Manual</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">4</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Results</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    View your current portfolio value, profit/loss amounts, and ROI percentage instantly.
                  </p>
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                    <p className="text-xs text-orange-700 font-medium">ROI: +120%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Pro Tips for Better ROI Tracking
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium mb-2">Price Entry Best Practices:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Use live prices for current market accuracy</li>
                    <li>• Manual entry for historical calculations</li>
                    <li>• Include all fees in your investment amount</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">ROI Analysis Tips:</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Track multiple time periods for trends</li>
                    <li>• Compare against market benchmarks</li>
                    <li>• Consider tax implications on profits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a Crypto ROI Calculator?</h3>
                    <p className="text-gray-600">A tool that calculates your return on investment for cryptocurrency holdings by comparing your initial investment to current market value, showing profit/loss amounts and percentage gains.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate are the live prices?</h3>
                    <p className="text-gray-600">Live prices are sourced from CoinGecko API and update in real-time. They reflect current market conditions across major exchanges for maximum accuracy.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for any cryptocurrency?</h3>
                    <p className="text-gray-600">Yes! The tool supports 1000+ cryptocurrencies with live prices, or you can manually enter prices for any coin not in the database.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between live and manual prices?</h3>
                    <p className="text-gray-600">Live prices automatically fetch current market data, while manual prices let you enter specific values for historical calculations or custom scenarios.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How is ROI calculated?</h3>
                    <p className="text-gray-600">ROI = ((Current Value - Initial Investment) / Initial Investment) × 100. The tool calculates units owned, current portfolio value, profit/loss, and percentage return.</p>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I view results in different currencies?</h3>
                    <p className="text-gray-600">Yes, the tool supports multiple currencies with real-time conversion rates. You can view your ROI results in your preferred local currency.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this tool financial advice?</h3>
                    <p className="text-gray-600">No, this is for informational purposes only. Always do your own research and consult with financial professionals before making investment decisions.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I check my ROI?</h3>
                    <p className="text-gray-600">Check regularly to track performance, especially during volatile market periods. Many investors check weekly or monthly for portfolio monitoring.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my investment data stored?</h3>
                    <p className="text-gray-600">No, all calculations happen locally in your browser. We don't store, track, or transmit any of your financial information.</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I calculate ROI for multiple investments?</h3>
                    <p className="text-gray-600">Currently, the tool calculates ROI for one investment at a time. You can perform multiple calculations to track different holdings separately.</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Tips */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Investment Tips</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Track your ROI regularly to monitor performance trends</li>
                  <li>• Consider both short-term and long-term investment goals</li>
                  <li>• Factor in transaction fees when calculating actual returns</li>
                  <li>• Compare your ROI against market benchmarks</li>
                  <li>• Use ROI data to inform future investment decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools Section */}
        <RelatedTools category="crypto" currentTool="Crypto ROI Calculator" />
      </div>

      <Footer />
    </div>
  );
};

export default CryptoROICalculatorPage;
