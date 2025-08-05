import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CryptoTaxCalculator from '@/components/tools/CryptoTaxCalculator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import CurrencyConverterMini from '@/components/tools/CurrencyConverterMini';

const CryptoTaxCalculatorPage = () => {
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO
        title="Crypto Tax Calculator – Calculate Capital Gains on Cryptocurrency"
        description="Quickly estimate your crypto taxes based on capital gains. Enter buy and sell data to know your tax liability for short-term or long-term gains."
        keywords="crypto tax calculator, crypto tax, capital gains tax, crypto profit tax, crypto tools"
        canonical="https://www.shubhampaul.xyz/tools/crypto-tax-calculator"
      />

      <Navbar />

      <div style={{background:'#ff0',color:'#900',padding:'4px',fontWeight:'bold',textAlign:'center'}}>DEBUG: CryptoTaxCalculatorPage</div>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-700 via-rose-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Crypto Tax Calculator</h1>
            <p className="text-xl max-w-3xl mx-auto text-red-100">
              Free crypto tax calculator to estimate cryptocurrency capital gains, tax liabilities, and obligations. Generate detailed reports for easy tax filing.
            </p>
          </div>
        </div>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <CryptoTaxCalculator />
            </div>
          </div>
        </section>

        {/* Quick Currency Converter - above About This Tool */}
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

        {/* About This Tool */}
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">About This Tool</h2>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The Crypto Tax Calculator lets you estimate your capital gains and tax liability on crypto trades. Enter your investment details and tax rate to get instant calculations. Great for tax planning and understanding your obligations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What You Get</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Capital gain calculation</li>
                      <li>• Tax liability estimation</li>
                      <li>• Net profit after tax</li>
                      <li>• Simple and fast results</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Perfect For</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Crypto traders and investors</li>
                      <li>• Tax planning</li>
                      <li>• Financial record keeping</li>
                      <li>• Quick capital gains checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use This Tool */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">How to Use This Tool?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enter Initial Investment</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Input the amount you initially invested in your crypto asset.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enter Current Value</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Enter the current value of your investment.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Set Tax Rate & Calculate</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Adjust your capital gains tax rate and view your tax liability and net profit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CryptoTaxCalculatorPage;
