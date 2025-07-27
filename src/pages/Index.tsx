import { Calculator, Zap, Monitor, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const categories = [
    {
      title: 'Crypto Tools',
      description: 'Calculate ROI, estimate airdrops, and manage crypto taxes',
      icon: <Calculator className="w-8 h-8" />,
      color: 'bg-orange-500',
      tools: ['Airdrop Price Estimator', 'ROI Calculator', 'Tax Calculator']
    },
    {
      title: 'DeFi Tools',
      description: 'Calculate yields and optimize DeFi strategies',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-green-500',
      tools: ['Yield Calculator']
    },
    {
      title: 'Electronics Tools',
      description: 'Inverter calculations and power system optimization',
      icon: <Monitor className="w-8 h-8" />,
      color: 'bg-blue-500',
      tools: ['Battery Backup Calculator', 'Efficiency Calculator']
    },
    {
      title: 'Streaming Tools',
      description: 'AI clip generator, Nightbot commands, thumbnail downloader, and streaming utilities',
      icon: <Video className="w-8 h-8" />,
      color: 'bg-purple-500',
      tools: ['AI Clip Generator', 'Timer Calculator', 'Command Generator', 'Thumbnail Downloader', 'LiveSnip']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Paul Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-blue-200">
            Multi Tool Platform
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Explore Paul Tools – a free multi-tool website with calculators, generators, and downloaders for Crypto, Electronics, and Streaming tasks.
          </p>
          <a
            href="/tools"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 dark:hover:bg-gray-200 transition-colors"
          >
            Explore All Tools
          </a>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tool Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive collection of free online tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mr-2"></div>
                      {tool}
                    </div>
                  ))}
                </div>
                <a 
                  href="/tools" 
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  View Tools →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Paul Tools?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Always Free</h3>
              <p className="text-gray-600 dark:text-gray-300">All our tools are completely free to use with no hidden costs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Privacy Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">Your data stays in your browser - we don't store or track anything</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimized for speed with instant results and minimal loading times</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">Perfect experience across all devices and screen sizes</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
