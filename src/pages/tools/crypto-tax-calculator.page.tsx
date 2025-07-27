import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CryptoTaxCalculator from '@/components/tools/CryptoTaxCalculator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import CurrencyConverterMini from '@/components/tools/CurrencyConverterMini';
import { Helmet } from 'react-helmet';

function Page() {
  const [showCurrencyConverter, setShowCurrencyConverter] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Crypto Tax Calculator - Paul Tools</title>
        <meta name="description" content="Calculate your cryptocurrency tax liability based on your gains." />
        <meta name="keywords" content="crypto tax calculator, crypto tax, tax liability, crypto gains, crypto tools" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/crypto-tax-calculator" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Crypto Tax Calculator",
            "description": "Calculate your cryptocurrency tax liability based on your gains.",
            "url": "https://www.shubhampaul.xyz/tools/crypto-tax-calculator",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-700 via-rose-600 to-red-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Crypto Tax Calculator</h1>
            <p className="text-xl max-w-3xl mx-auto text-red-100">
              Calculate your cryptocurrency tax liability based on your capital gains
            </p>
          </div>
        </div>
        {/* Why Crypto Tax Calculator */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Crypto Tax Calculator?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">💰 Tax Compliance Made Simple</h3>
                    <p className="text-blue-800">Navigate the complex world of crypto taxation with confidence. Our calculator handles the intricate math behind capital gains, ensuring you're prepared for tax season without the headache.</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">📊 Accurate Profit Analysis</h3>
                    <p className="text-green-800">Get precise calculations of your actual profits by including fees, transaction costs, and investment amounts. No more guessing - know exactly where you stand financially.</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">⚡ Real-Time Market Data</h3>
                    <p className="text-purple-800">Access live prices for 1000+ cryptocurrencies. Auto-fill current market prices to get the most accurate calculations without manual research.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">📋 Professional Documentation</h3>
                    <p className="text-orange-800">Export detailed Excel reports for your accountant or tax professional. Complete with step-by-step calculations and all transaction details for seamless tax filing.</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">🔒 Complete Privacy</h3>
                    <p className="text-red-800">Your financial data never leaves your browser. All calculations happen locally, ensuring your sensitive crypto transaction information stays completely private.</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">🎯 Investment Planning</h3>
                    <p className="text-indigo-800">Understand the true cost of your crypto investments including taxes. Make informed decisions about when to sell and how much to hold for optimal tax efficiency.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential for Every Crypto Investor</h3>
                  <p className="text-gray-600">Whether you're a casual trader or serious investor, understanding your tax obligations is crucial. Our comprehensive tool helps you stay compliant while maximizing your returns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <Switch id="converter-toggle" checked={showCurrencyConverter} onCheckedChange={setShowCurrencyConverter} />
                  <span className="text-xs font-semibold text-gray-700">{showCurrencyConverter ? 'ON' : 'OFF'}</span>
                </div>
              </div>
              {showCurrencyConverter && <CurrencyConverterMini />}
            </div>
          </div>
        </section>

        {/* About This Tool */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About This Tool</h2>
              <div className="bg-white rounded-xl p-8">
                <p className="text-gray-600 mb-6">
                  The Crypto Tax Calculator provides comprehensive capital gains tax calculations for cryptocurrency investments. It features advanced ROI calculations, investment amount tracking, fee inclusion, and detailed step-by-step breakdowns. The tool supports 1000+ cryptocurrencies with live prices, multiple transactions, customizable tax rates, and professional Excel export functionality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Get</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Advanced ROI calculations with investment amount tracking</li>
                      <li>• 1000+ cryptos with live prices and auto-fill functionality</li>
                      <li>• Customizable short/long-term tax rates</li>
                      <li>• Fee inclusion for accurate profit calculations</li>
                      <li>• Step-by-step calculation breakdown</li>
                      <li>• Professional Excel export with detailed data</li>
                      <li>• Multiple transaction support with reset functionality</li>
                      <li>• Mobile-friendly responsive design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect For</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Crypto traders and investors</li>
                      <li>• Tax planning and compliance</li>
                      <li>• Portfolio performance analysis</li>
                      <li>• Professional tax reporting</li>
                      <li>• Investment decision making</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use This Tool?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Configure & Add Transactions</h3>
                  <p className="text-gray-600 text-sm">Set your short/long-term tax rates, then add transactions with investment amounts, purchase/sell prices, and optional fees. Select from 1000+ cryptocurrencies with live prices.</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Calculations</h3>
                  <p className="text-gray-600 text-sm">View detailed step-by-step breakdowns showing units bought, total sell value, net proceeds, ROI calculations, and tax computations for each transaction.</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Export & Reset</h3>
                  <p className="text-gray-600 text-sm">Download comprehensive Excel reports with all calculation data, or use the reset button to start fresh with new calculations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Which cryptocurrencies are supported?</h3>
                  <p className="text-gray-600">You can search and select from the top 1000+ cryptocurrencies by market cap, each with icon, name, symbol, and live price. Manual entry is also available for any coin.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How are ROI and tax calculated?</h3>
                  <p className="text-gray-600">The tool calculates units bought (investment amount ÷ purchase price), total sell value, net proceeds (after fees), ROI (net proceeds - investment), and tax based on your specified short/long-term rates. All calculations include detailed step-by-step breakdowns.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use live prices and manual prices?</h3>
                  <p className="text-gray-600">Yes! You can auto-fill live prices for any supported coin, or enter prices manually for full control. The sell price auto-fills with current market price when you select a cryptocurrency.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What export options are available?</h3>
                  <p className="text-gray-600">You can download comprehensive Excel reports (CSV format) that include all calculation data: units bought, total sell value, net proceeds, ROI, tax rates, and final profit/loss figures for professional tax reporting.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I include fees in calculations?</h3>
                  <p className="text-gray-600">You can optionally add fees in the "Fees (Optional) ($)" field. Include all total fees for both purchase and sell transactions (exchange fees, network fees, trading fees). The calculator will deduct fees from your total sell value before calculating ROI.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between investment amount and purchase price?</h3>
                  <p className="text-gray-600">Investment amount is the total money you spent to buy the crypto. Purchase price is the price per unit of the cryptocurrency at the time of purchase. The tool calculates units bought by dividing investment amount by purchase price.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I reset my calculations?</h3>
                  <p className="text-gray-600">Yes! Use the "Reset" button to clear all transactions and start fresh. This will remove all entered data, results, and reset tax rates to blank fields.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I set custom tax rates?</h3>
                  <p className="text-gray-600">Enter your short-term and long-term capital gains tax rates in the "Tax Rate Configuration" section. Leave fields blank initially and enter your specific rates. The tool will automatically determine short/long-term based on holding period (more than 365 days = long-term).</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I calculate tax for my entire portfolio?</h3>
                  <p className="text-gray-600">Yes, you can add multiple transactions for different cryptocurrencies. Each transaction is calculated separately with detailed breakdowns, and you get a comprehensive summary of total gains, taxes, and net profit/loss across all transactions.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How accurate are the results?</h3>
                  <p className="text-gray-600">The calculator provides estimates based on your input and specified tax rates. It includes detailed step-by-step calculations for transparency. For official tax filing, always use records from your exchange and consult a tax professional.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this financial or tax advice?</h3>
                  <p className="text-gray-600">No, this tool is for informational purposes only. Always consult a qualified tax professional for actual tax filing and financial advice.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data private?</h3>
                  <p className="text-gray-600">Yes, all calculations are performed in your browser. No transaction or personal data is sent to any server or stored. Your financial information remains completely private.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export { Page };

