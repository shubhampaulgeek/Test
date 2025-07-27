import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, TrendingUp, Receipt } from 'lucide-react';

const CryptoToolsPage = () => {
  const cryptoTools = [
    {
      name: 'Crypto Airdrop Token Price Estimator',
      description: 'Estimate the initial token price based on market capitalization and circulating supply',
      icon: <Calculator className="w-8 h-8" />,
      link: '/tools/crypto-airdrop-estimator',
      color: 'bg-blue-500'
    },
    {
      name: 'Crypto ROI Calculator',
      description: 'Calculate your potential return on investment for cryptocurrency trades or holdings',
      icon: <TrendingUp className="w-8 h-8" />,
      link: '/tools/crypto-roi-calculator',
      color: 'bg-green-500'
    },
    {
      name: 'Crypto Tax Calculator',
      description: 'Calculate your cryptocurrency tax liability based on your gains',
      icon: <Receipt className="w-8 h-8" />,
      link: '/tools/crypto-tax-calculator',
      color: 'bg-purple-500'
    },
    {
      name: 'Crypto to Fiat Converter',
      description: 'Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection.',
      icon: <Calculator className="w-8 h-8" />,
      link: '/tools/crypto-fiat-converter',
      color: 'bg-blue-500'
    },
    {
      name: 'DeFi Yield Calculator',
      description: 'Calculate your potential yield from DeFi protocols and decentralized lending platforms.',
      icon: <TrendingUp className="w-8 h-8" />,
      link: '/tools/defi-yield-calculator',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 dark:from-orange-800 dark:to-yellow-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crypto Tools</h1>
          <p className="text-xl text-orange-100 dark:text-orange-200 max-w-2xl mx-auto">
            Comprehensive cryptocurrency calculation tools for trading, investing, and tax planning
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoTools.map((tool, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Use Tool
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CryptoToolsPage;
