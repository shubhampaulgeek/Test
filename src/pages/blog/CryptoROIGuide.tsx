import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Calculator, DollarSign, BarChart3, Shield, Zap, Clock, BookOpen, Users, Target } from 'lucide-react';

const CryptoROIGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Understanding Cryptocurrency ROI: A Complete Guide for Beginners
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Master the fundamentals of calculating cryptocurrency returns, understanding market volatility, 
            and making informed investment decisions in the digital asset space.
          </p>
          <div className="flex items-center justify-center mt-6 text-green-200 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>8 min read</span>
            <span className="mx-3">•</span>
            <BookOpen className="w-4 h-4 mr-2" />
            <span>Crypto Education</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cryptocurrency ROI?</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Return on Investment (ROI) is a fundamental metric that measures the profitability of an investment relative to its cost. 
              In the context of cryptocurrency, ROI represents the percentage gain or loss on your initial investment over a specific period.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Unlike traditional investments, cryptocurrency ROI can be extremely volatile, with the potential for both massive gains 
              and significant losses in short time periods. Understanding how to calculate and interpret ROI is crucial for making 
              informed investment decisions in the crypto market.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Key Takeaway</h3>
              <p className="text-green-700">
                ROI = ((Current Value - Initial Investment) / Initial Investment) × 100
              </p>
            </div>
          </div>

          {/* Why ROI Matters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why ROI Matters in Cryptocurrency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Target className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Measurement</h3>
                <p className="text-gray-600">
                  ROI provides a standardized way to compare the performance of different cryptocurrencies 
                  and investment strategies, regardless of the initial investment amount.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment</h3>
                <p className="text-gray-600">
                  By tracking ROI over time, you can assess the risk-reward profile of your investments 
                  and make adjustments to your portfolio strategy.
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <Calculator className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Planning</h3>
                <p className="text-gray-600">
                  Understanding your ROI is essential for tax purposes, as gains and losses must be 
                  reported accurately to tax authorities.
                </p>
              </div>
              <div className="p-6 bg-orange-50 rounded-lg">
                <Users className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal Setting</h3>
                <p className="text-gray-600">
                  ROI helps you set realistic investment goals and track progress toward achieving 
                  your financial objectives.
                </p>
              </div>
            </div>
          </div>

          {/* How to Calculate ROI */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate Cryptocurrency ROI</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Calculation</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                    <span><strong>Determine Initial Investment:</strong> Calculate the total amount you invested, including any fees or transaction costs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                    <span><strong>Calculate Current Value:</strong> Multiply the current price per coin by the number of coins you own.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                    <span><strong>Apply the ROI Formula:</strong> ROI = ((Current Value - Initial Investment) / Initial Investment) × 100</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Practical Example</h3>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-3">Example: Bitcoin Investment</h4>
                <div className="space-y-2 text-green-700">
                  <p><strong>Initial Investment:</strong> $1,000</p>
                  <p><strong>Purchase Price:</strong> $50,000 per Bitcoin</p>
                  <p><strong>Coins Purchased:</strong> 0.02 BTC</p>
                  <p><strong>Current Price:</strong> $60,000 per Bitcoin</p>
                  <p><strong>Current Value:</strong> 0.02 × $60,000 = $1,200</p>
                  <p><strong>ROI Calculation:</strong> (($1,200 - $1,000) / $1,000) × 100 = 20%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Factors Affecting ROI */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Factors Affecting Cryptocurrency ROI</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Market Factors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Overall market sentiment and trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Regulatory developments and news</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Institutional adoption and investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Technological advancements and updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Investment Factors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Timing of entry and exit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Diversification strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Risk management approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Investment horizon and goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common ROI Calculation Mistakes</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Ignoring Transaction Fees</h3>
                <p className="text-red-700">
                  Many investors forget to include exchange fees, network fees, and other transaction costs 
                  when calculating their initial investment, leading to inaccurate ROI calculations.
                </p>
              </div>
              
              <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Not Considering Time Period</h3>
                <p className="text-yellow-700">
                  ROI should always be calculated over a specific time period. A 20% gain in one day 
                  is very different from a 20% gain over one year.
                </p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Forgetting About Taxes</h3>
                <p className="text-blue-700">
                  Your actual ROI after taxes may be significantly different from your pre-tax ROI. 
                  Always factor in tax implications when planning your investment strategy.
                </p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for ROI Tracking</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Regular Monitoring</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Track ROI weekly or monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Use consistent time periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Document all transactions</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Portfolio Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Diversify across assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Set realistic goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Review and rebalance regularly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools and Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools and Resources</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🛠️ Paul Tools ROI Calculator</h3>
                <p className="text-gray-700 mb-4">
                  Use our free Crypto ROI Calculator to quickly and accurately calculate your cryptocurrency returns. 
                  The tool supports both live market prices and manual price entry for maximum flexibility.
                </p>
                <a 
                  href="/tools/crypto-roi-calculator"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Try ROI Calculator
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📊 Portfolio Trackers</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• CoinGecko Portfolio</li>
                    <li>• CoinMarketCap Portfolio</li>
                    <li>• Delta Investment Tracker</li>
                    <li>• Blockfolio</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📈 Market Analysis</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• TradingView Charts</li>
                    <li>• Glassnode Analytics</li>
                    <li>• Santiment Market Data</li>
                    <li>• Messari Research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Understanding and calculating cryptocurrency ROI is essential for making informed investment decisions 
              in the digital asset space. By following the principles outlined in this guide and using the right tools, 
              you can track your performance, manage risk, and work toward your financial goals.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Remember that cryptocurrency markets are highly volatile, and past performance doesn't guarantee future results. 
              Always do your own research, diversify your investments, and consider consulting with financial professionals 
              before making significant investment decisions.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Ready to Calculate Your ROI?</h3>
              <p className="text-gray-600 mb-4">
                Start tracking your cryptocurrency investments with our free ROI calculator and take control of your portfolio performance.
              </p>
              <a 
                href="/tools/crypto-roi-calculator"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Calculate ROI Now
                <TrendingUp className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CryptoROIGuide;
