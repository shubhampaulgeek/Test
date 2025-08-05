
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DeFiYieldCalculator from '@/components/tools/DeFiYieldCalculator';
import SEO from '@/components/SEO';
import RelatedTools from '@/components/RelatedTools';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const DeFiYieldCalculatorPage = () => {
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="DeFi Yield Calculator – Estimate Potential Returns"
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
          <DeFiYieldCalculator 
            showCurrencyConverter={showCurrencyConverter}
            setShowCurrencyConverter={setShowCurrencyConverter}
          />
        </div>
      </section>

      {/* Quick Currency Converter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Related Tools Section */}
      <RelatedTools category="crypto" currentTool="DeFi Yield Calculator" />
      <Footer />
    </div>
  );
};

export default DeFiYieldCalculatorPage;

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
