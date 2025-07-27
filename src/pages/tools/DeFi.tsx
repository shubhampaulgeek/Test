import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Zap } from 'lucide-react';

const DeFiToolsPage = () => {
  const defiTools = [
    {
      name: 'DeFi Yield Calculator',
      description: 'Calculate potential earnings from staking, farming, and other DeFi yield opportunities',
      icon: <Zap className="w-8 h-8" />,
      link: '/tools/defi-yield-calculator',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DeFi Tools</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Decentralized Finance tools for yield farming, staking, and DeFi investment calculations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defiTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
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

export default DeFiToolsPage;
