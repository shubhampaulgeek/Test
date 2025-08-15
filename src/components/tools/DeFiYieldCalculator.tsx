
import { Zap, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { Switch } from '@/components/ui/switch';
import CurrencyConverterMini from '@/components/tools/CurrencyConverterMini';

interface DeFiYieldCalculatorProps {
  showCurrencyConverter: boolean;
  setShowCurrencyConverter: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeFiYieldCalculator = ({ showCurrencyConverter, setShowCurrencyConverter }: DeFiYieldCalculatorProps) => {
  const [principal, setPrincipal] = useState('');
  const [apy, setApy] = useState('');
  const [days, setDays] = useState('365');
  const [compoundFrequency, setCompoundFrequency] = useState('daily');
  const [result, setResult] = useState<{
    totalValue: number;
    totalEarnings: number;
    dailyEarnings: number;
  } | null>(null);

  const calculateYield = () => {
    const p = parseFloat(principal);
    const rate = parseFloat(apy) / 100;
    const time = parseFloat(days) / 365;
    
    if (p > 0 && rate >= 0 && time > 0) {
      let n = 1; // compound frequency
      switch (compoundFrequency) {
        case 'daily': n = 365; break;
        case 'weekly': n = 52; break;
        case 'monthly': n = 12; break;
        case 'yearly': n = 1; break;
      }
      
      const totalValue = p * Math.pow((1 + rate / n), n * time);
      const totalEarnings = totalValue - p;
      const dailyEarnings = totalEarnings / parseFloat(days);
      
      setResult({ totalValue, totalEarnings, dailyEarnings });
    }
  };

  const reset = () => {
    setPrincipal('');
    setApy('');
    setDays('365');
    setCompoundFrequency('daily');
    setResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Why DeFi Yield Calculator Section */}
      <Card className="bg-gradient-to-br from-emerald-50 to-blue-50 border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Why DeFi Yield Calculator?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximize DeFi Returns</h3>
              <p className="text-gray-600 text-sm">See how compounding, APY, and time affect your DeFi earnings. Plan your staking, farming, or lending strategies for optimal growth.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visualize Compounding</h3>
              <p className="text-gray-600 text-sm">Instantly compare daily, weekly, monthly, and yearly compounding to see which protocol or pool gives the best yield.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Private & Secure</h3>
              <p className="text-gray-600 text-sm">All calculations are performed locally in your browser. No wallet connection, no data tracking, and no risk to your funds.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DeFi for Everyone</h3>
              <p className="text-gray-600 text-sm">Whether you’re a beginner or a DeFi pro, this tool helps you understand and optimize your yield strategies with ease.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Instant Results</h3>
              <p className="text-gray-600 text-sm">Get daily, total, and annualized earnings breakdowns in one click. No signup, no waiting, just results.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal DeFi Support</h3>
              <p className="text-gray-600 text-sm">Works for any DeFi protocol, stablecoin, altcoin, or yield aggregator. Just enter your numbers and compare.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            DeFi Yield Calculator
          </CardTitle>
          <CardDescription>
            Calculate potential earnings from staking, farming, and other DeFi yield opportunities
          </CardDescription>
        </CardHeader>
        
        {/* Enhanced Tool Description */}
        <div className="px-6 pb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg mb-4">
            <h3 className="font-semibold text-emerald-900 mb-2">💡 Understanding DeFi Yield</h3>
            <p className="text-emerald-800 text-sm leading-relaxed">
              DeFi yield farming allows you to earn passive income by providing liquidity or staking your crypto assets. The key is understanding how compounding frequency and APY work together to maximize your returns over time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800 text-sm mb-1">📊 Key Concepts:</h4>
              <ul className="text-blue-700 text-xs space-y-1">
                <li>• APY: Annual Percentage Yield</li>
                <li>• Compounding: Interest on interest</li>
                <li>• Liquidity: Providing assets to pools</li>
                <li>• Staking: Locking assets for rewards</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <h4 className="font-medium text-purple-800 text-sm mb-1">⚡ Compounding Impact:</h4>
              <ul className="text-purple-700 text-xs space-y-1">
                <li>• Daily: Highest returns</li>
                <li>• Weekly: Good balance</li>
                <li>• Monthly: Moderate growth</li>
                <li>• Yearly: Simple interest</li>
              </ul>
            </div>
          </div>
        </div>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Principal Amount ($)</Label>
            <Input
              id="principal"
              type="number"
              placeholder="e.g., 10000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="apy">Annual Percentage Yield (APY %)</Label>
            <Input
              id="apy"
              type="number"
              placeholder="e.g., 12"
              value={apy}
              onChange={(e) => setApy(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="days">Time Period (Days)</Label>
            <Input
              id="days"
              type="number"
              placeholder="e.g., 365"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="compound">Compound Frequency</Label>
            <select
              id="compound"
              value={compoundFrequency}
              onChange={(e) => setCompoundFrequency(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateYield} className="flex-1">
              Calculate Yield
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {/* Quick Currency Converter below buttons */}
          <div className="mt-4">
            <div className="max-w-md mx-auto p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded shadow">
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
                  <span className="text-xs text-gray-500">({showCurrencyConverter ? 'ON' : 'OFF'})</span>
                </div>
              </div>
              {showCurrencyConverter && <CurrencyConverterMini />}
            </div>
          </div>

          {result !== null && (
            <div className="mt-4 space-y-2">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800">Total Value</h3>
                <p className="text-lg font-bold text-green-600">
                  ${result.totalValue.toFixed(2)}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800">Total Earnings</h3>
                <p className="text-lg font-bold text-blue-600">
                  ${result.totalEarnings.toFixed(2)}
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800">Daily Earnings</h3>
                <p className="text-lg font-bold text-purple-600">
                  ${result.dailyEarnings.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* About This Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            About This Tool
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 text-base">
            The DeFi Yield Calculator is your all-in-one tool for projecting DeFi earnings from staking, farming, lending, and more. It uses advanced compound interest math to show you exactly how your crypto can grow over time, with support for any protocol, asset, or compounding schedule. All calculations are private and instant—no wallet connection or data sharing required.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Compound interest with flexible frequency (daily, weekly, monthly, yearly)</li>
                <li>• Customizable time periods (any number of days)</li>
                <li>• Daily, total, and annualized earnings breakdown</li>
                <li>• Works for any DeFi protocol, stablecoin, or altcoin</li>
                <li>• No wallet connection or data tracking</li>
                <li>• Mobile-friendly and fast</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">DeFi Applications</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Liquidity pool farming (Uniswap, PancakeSwap, Curve, etc.)</li>
                <li>• Crypto staking rewards (ETH, SOL, ADA, etc.)</li>
                <li>• Lending protocols (Aave, Compound, etc.)</li>
                <li>• Yield aggregators (Yearn, Beefy, etc.)</li>
                <li>• Stablecoin farming and more</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="font-semibold mb-1">Enter Principal</h4>
              <p className="text-sm text-muted-foreground">Input your investment amount in USD or your preferred currency.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📊</span>
              </div>
              <h4 className="font-semibold mb-1">Set APY</h4>
              <p className="text-sm text-muted-foreground">Enter the annual yield rate (APY) provided by your DeFi protocol.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">⏰</span>
              </div>
              <h4 className="font-semibold mb-1">Choose Period</h4>
              <p className="text-sm text-muted-foreground">Select the number of days you plan to invest or farm.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">🔄</span>
              </div>
              <h4 className="font-semibold mb-1">Set Compounding</h4>
              <p className="text-sm text-muted-foreground">Choose how often your rewards are compounded (daily, weekly, monthly, yearly).</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-4 border-l-4 border-emerald-400">
            <h4 className="font-semibold mb-2 flex items-center"><span className="text-2xl mr-2">💡</span>Pro Tips</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Daily compounding usually yields the highest returns, but check your protocol’s rules.</li>
              <li>• Use realistic APY values—very high APYs may not be sustainable.</li>
              <li>• Consider fees, lockup periods, and impermanent loss for a complete picture.</li>
              <li>• Reinvest your earnings to maximize compounding effects.</li>
              <li>• Use the daily earnings breakdown to plan withdrawals or reinvestments.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What is a DeFi Yield Calculator?</h3>
              <p className="text-gray-700">A tool that estimates your potential DeFi earnings from staking, farming, lending, or liquidity pools, factoring in compounding and APY.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How does compounding frequency affect my yield?</h3>
              <p className="text-gray-700">More frequent compounding (daily, weekly) increases your total returns over time. The tool lets you compare all options instantly.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What is APY in DeFi?</h3>
              <p className="text-gray-700">APY (Annual Percentage Yield) is the yearly rate of return, including compounding. It’s the most accurate way to compare DeFi yields.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Does this calculator work for all DeFi protocols?</h3>
              <p className="text-gray-700">Yes! As long as you know the APY and principal, it works for any protocol, asset, or yield aggregator.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Does the calculator account for fees or impermanent loss?</h3>
              <p className="text-gray-700">No, it provides a gross estimate. Always consider fees, lockups, and impermanent loss separately for a full picture.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I calculate daily earnings?</h3>
              <p className="text-gray-700">Just enter your principal, APY, and time period. The tool shows daily, total, and annualized earnings breakdowns.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What’s the best compounding frequency for DeFi?</h3>
              <p className="text-gray-700">Daily compounding usually yields the highest returns, but check your protocol’s rules and fees.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for stablecoin farming?</h3>
              <p className="text-gray-700">Yes, it works for stablecoins, altcoins, and any DeFi asset or pool.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is my data private?</h3>
              <p className="text-gray-700">Yes, all calculations are performed locally in your browser. No data is stored, tracked, or shared.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I maximize my DeFi returns?</h3>
              <p className="text-gray-700">Reinvest earnings, choose high-APY protocols, monitor risks, and use the tool’s breakdowns to plan your strategy.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

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

export default DeFiYieldCalculator;
