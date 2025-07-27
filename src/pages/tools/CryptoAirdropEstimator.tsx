
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CryptoAirdropEstimator from '@/components/tools/CryptoAirdropEstimator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const CryptoAirdropEstimatorPage = () => {
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Crypto Airdrop Price Estimator – Calculate Token Price"
        description="Estimate the value of upcoming crypto airdrops using market cap, total supply, and circulating supply. Calculate potential token prices before launch with simple crypto valuation methods."
        keywords="crypto airdrop estimator, token price estimator, market cap, supply, crypto tools"
        canonical="https://www.shubhampaul.xyz/tools/crypto-airdrop-estimator"
      />

      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Crypto Airdrop Price Estimator</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Estimate the initial token price based on market capitalization and circulating supply
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <CryptoAirdropEstimator />
            </div>
          </div>
        </section>

        {/* Quick Currency Converter - now directly below tool card */}
        <div className="max-w-md mx-auto mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-yellow-800 text-sm flex items-center">
              <span className="inline-block mr-1">💱</span> Quick Currency Converter
            </h3>
            <div className="flex items-center gap-2">
              <Label htmlFor="converter-toggle" className="text-xs text-gray-700">Enable</Label>
              <Switch 
                id="converter-toggle"
                checked={showCurrencyConverter} 
                onCheckedChange={setShowCurrencyConverter}
              />
            </div>
          </div>
          {showCurrencyConverter && <CurrencyConverterMini />}
        </div>

        {/* Why Crypto Airdrop Price Estimator Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Crypto Airdrop Price Estimator?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Investment Decisions</h3>
                  <p className="text-gray-600 text-sm">Make informed decisions about airdrop participation by understanding potential token values before claiming.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Price Projections</h3>
                  <p className="text-gray-600 text-sm">Get immediate estimates for new token launches and airdrops without waiting for market data.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Planning</h3>
                  <p className="text-gray-600 text-sm">Plan your crypto portfolio by estimating the value of upcoming airdrops and token distributions.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy-First Approach</h3>
                  <p className="text-gray-600 text-sm">All calculations happen locally in your browser - no data is stored or transmitted to external servers.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Assessment</h3>
                  <p className="text-gray-600 text-sm">Evaluate the potential risks and rewards of participating in new token launches and airdrops.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Access Advantage</h3>
                  <p className="text-gray-600 text-sm">Get ahead of the market by estimating token values before they hit major exchanges.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About This Tool</h2>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  The Crypto Airdrop Price Estimator is a powerful tool designed to help crypto enthusiasts, investors, and traders estimate the initial price of new tokens based on market capitalization and circulating supply. Whether you're participating in airdrops, evaluating new token launches, or planning your crypto portfolio, this tool provides quick and reliable price projections.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Market cap and supply-based price estimation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Works with any token that has known supply metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Real-time calculations with instant results</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Privacy-focused - no data storage or tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Mobile-friendly responsive design</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Use Cases</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Airdrop value estimation and planning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>New token launch analysis and evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Portfolio planning and risk assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>ICO and token sale price projections</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Educational tool for understanding token economics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use This Tool */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use This Tool?</h2>
              
              {/* Step-by-step guide */}
              <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Step-by-Step Guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Market Cap</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Input the projected or actual market capitalization in USD. This represents the total value of all tokens in circulation.
                    </p>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-700 font-medium">Example: $1,000,000</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Enter Supply</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Enter the total or circulating supply of tokens. Use circulating supply for more accurate estimates.
                    </p>
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-green-700 font-medium">Example: 100,000,000</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Get Results</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Click "Calculate" to instantly see the estimated token price. Use this for your investment decisions.
                    </p>
                    <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-purple-700 font-medium">Result: $0.01 per token</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pro Tips */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  Pro Tips for Better Estimates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-medium mb-2">Market Cap Considerations:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Research similar projects for reference</li>
                      <li>• Consider the project's potential and team</li>
                      <li>• Factor in market conditions and trends</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Supply Best Practices:</p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Use circulating supply for accuracy</li>
                      <li>• Account for locked or vested tokens</li>
                      <li>• Consider future token releases</li>
                    </ul>
                  </div>
                </div>
                            </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* FAQ content moved here */}
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">What is a Crypto Airdrop Price Estimator?</h3>
                      <p className="text-gray-600">A tool that calculates the estimated initial price of a new token based on market capitalization and circulating supply. It helps you understand potential token values before they hit the market.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate are these estimates?</h3>
                      <p className="text-gray-600">These are rough estimates based on basic tokenomics. Actual prices may vary significantly due to market demand, liquidity, exchange listings, and other factors.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for ICOs and new token launches?</h3>
                      <p className="text-gray-600">Yes! This tool works for any new token launch including ICOs, IDOs, and airdrops. Just input the projected market cap and supply information.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Should I use total supply or circulating supply?</h3>
                      <p className="text-gray-600">Use circulating supply for more accurate estimates. Total supply includes locked or vested tokens that won't affect the initial price.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I estimate my airdrop value?</h3>
                      <p className="text-gray-600">Multiply the estimated token price by the number of tokens you'll receive. For example: 1000 tokens × $0.01 = $10 estimated value.</p>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">What factors affect token prices after launch?</h3>
                      <p className="text-gray-600">Market demand, exchange listings, project development, team reputation, market conditions, and overall crypto market sentiment.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this tool financial advice?</h3>
                      <p className="text-gray-600">No, this is for informational purposes only. Always do your own research and consult with financial professionals before making investment decisions.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">How often should I check token prices?</h3>
                      <p className="text-gray-600">Check regularly, especially after launch. Token prices can be highly volatile in the first few days and weeks of trading.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data stored or tracked?</h3>
                      <p className="text-gray-600">No, all calculations happen locally in your browser. We don't store, track, or transmit any of your input data.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for existing tokens?</h3>
                      <p className="text-gray-600">While designed for new tokens, you can use it to verify current prices by inputting the actual market cap and supply of existing tokens.</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Tips */}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Additional Tips</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Research the project team and roadmap before participating</li>
                    <li>• Consider the token's utility and use cases</li>
                    <li>• Monitor social media and community sentiment</li>
                    <li>• Be aware of vesting schedules and token unlock dates</li>
                    <li>• Diversify your airdrop portfolio to manage risk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - now removed or left empty if not needed */}
      </div>

      <Footer />
    </div>
  );
};

export default CryptoAirdropEstimatorPage;

function CurrencyConverterMini() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [rates, setRates] = useState<{ [key: string]: number }>({ USD: 1 });
  const [currencyList, setCurrencyList] = useState<string[]>(['USD']);
  const [converted, setConverted] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_TTHSgYzjc4wvTRft0Q25OOTmiMKobYpVmmq9v6U7')
      .then(res => res.json())
      .then(data => {
        if (data && data.data && typeof data.data === 'object') {
          const ratesObj: { [key: string]: number } = {};
          Object.keys(data.data).forEach(code => {
            ratesObj[code] = data.data[code].value;
          });
          setRates(ratesObj);
          const codes = Object.keys(ratesObj).sort();
          setCurrencyList(codes);
          if (!codes.includes('USD')) setFrom(codes[0] || 'USD');
          if (!codes.includes('EUR')) setTo(codes[1] || codes[0] || 'USD');
        } else {
          setError('Failed to load currency rates.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load currency rates.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!amount || isNaN(Number(amount)) || !rates[from] || !rates[to]) {
      setConverted('');
      return;
    }
    const usdValue = Number(amount) / rates[from];
    const val = usdValue * rates[to];
    setConverted(val.toLocaleString(undefined, { style: 'currency', currency: to }));
  }, [amount, from, to, rates]);

  if (loading) return <div className="text-xs text-gray-500">Loading rates...</div>;
  if (error) return <div className="text-xs text-red-600">{error}</div>;

  return (
    <div className="flex gap-2 items-end flex-wrap">
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">From</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={from}
          onChange={e => setFrom(e.target.value)}
        >
          {currencyList.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">Amount</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          placeholder={`Amount in ${from}`}
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">To</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={to}
          onChange={e => setTo(e.target.value)}
        >
          {currencyList.map(code => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[120px]">
        <label className="block text-xs text-gray-700 mb-1">Result</label>
        <input
          className="border rounded px-2 py-1 w-full bg-gray-100"
          value={converted}
          readOnly
        />
      </div>
    </div>
  );
}
