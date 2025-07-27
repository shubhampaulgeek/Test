import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Battery, Zap } from 'lucide-react';

const ElectronicsToolsPage = () => {
  const electronicsTools = [
    {
      name: 'Inverter Battery Backup Time Calculator',
      description: 'Calculate how long your inverter battery will last based on your power consumption',
      icon: <Battery className="w-8 h-8" />,
      link: '/tools/inverter-battery-calculator',
      color: 'bg-orange-500'
    },
    {
      name: 'Inverter Efficiency Calculator',
      description: 'Calculate inverter efficiency and power losses to optimize your power system performance',
      icon: <Zap className="w-8 h-8" />,
      link: '/tools/inverter-efficiency-calculator',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics Tools</h1>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            Power system calculators for inverters, batteries, and electrical efficiency optimization
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronicsTools.map((tool, index) => (
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

export default ElectronicsToolsPage;
