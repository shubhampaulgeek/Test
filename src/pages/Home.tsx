import React from 'react';
import { 
  Calculator, 
  Coins, 
  Zap, 
  Battery, 
  Video, 
  Clock, 
  Bot, 
  Download,
  TrendingUp,
  Receipt,
  Percent,
  Shield,
  Users,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Home = () => {
  const cryptoTools = [
    {
      title: 'Crypto ROI Calculator',
      description: 'Calculate your crypto return on investment with live market data and comprehensive profit analysis',
      icon: TrendingUp,
      link: '/tools/crypto-roi-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Crypto Airdrop Price Estimator',
      description: 'Estimate token prices based on market cap, supply, and historical data for informed investment decisions',
      icon: Coins,
      link: '/tools/crypto-airdrop-estimator',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Crypto Tax Calculator',
      description: 'Calculate your cryptocurrency tax liability with support for multiple jurisdictions and tax years',
      icon: Receipt,
      link: '/tools/crypto-tax-calculator',
      bgColor: 'bg-gradient-to-br from-red-500 to-rose-500'
    },
    {
      title: 'Crypto to Fiat Converter',
      description: 'Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection',
      icon: Calculator,
      link: '/tools/crypto-fiat-converter',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-500'
    },
    {
      title: 'DeFi Yield Calculator',
      description: 'Calculate potential profits from DeFi staking, farming, and liquidity provision with APY calculations',
      icon: Percent,
      link: '/tools/defi-yield-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-teal-500'
    },
    {
      title: 'Gas Fee Estimator',
      description: 'Check real-time gas fees across multiple blockchains including Ethereum, Polygon, and BSC',
      icon: Zap,
      link: '/tools/gas-fee-estimator',
      bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    }
  ];

  const electronicsTools = [
    {
      title: 'Inverter Efficiency Calculator',
      description: 'Calculate inverter efficiency and power losses to optimize your power system performance',
      icon: Zap,
      link: '/tools/inverter-efficiency-calculator',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Inverter Battery Backup Calculator',
      description: 'Calculate how long your inverter battery will last during power outages with load analysis',
      icon: Battery,
      link: '/tools/inverter-battery-calculator',
      bgColor: 'bg-gradient-to-br from-orange-500 to-amber-500'
    },
    {
      title: 'Solar Panel Output Loss Calculator',
      description: 'Estimate real-world solar panel performance loss due to weather, temperature, and environmental factors',
      icon: Calculator,
      link: '/tools/solar-panel-output-loss-calculator',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      title: 'PCB Trace Current Calculator',
      description: 'Calculate safe current capacity for PCB traces with temperature rise and safety margin considerations',
      icon: Zap,
      link: '/tools/pcb-trace-current-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Capacitor Charging Time Calculator',
      description: 'Calculate RC circuit charging and discharging times for electronic design and troubleshooting',
      icon: Clock,
      link: '/tools/capacitor-charging-time-calculator',
      bgColor: 'bg-gradient-to-br from-purple-500 to-violet-500'
    }
  ];

  const streamingTools = [
    {
      title: 'YouTube Comment Sentiment Analyzer',
      description: 'Analyze YouTube comments for positive, negative, or neutral sentiment using AI-powered analysis for content creators',
      icon: Video,
      link: '/tools/youtube-comment-sentiment-analyzer',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'Nightbot Timer Calculator',
      description: 'Generate timed chat commands for Nightbot with customizable intervals and message triggers',
      icon: Clock,
      link: '/tools/nightbot-timer-calculator',
      bgColor: 'bg-gradient-to-br from-indigo-500 to-blue-500'
    },
    {
      title: 'Nightbot Command Generator',
      description: 'Create and manage custom commands for Nightbot with advanced moderation and automation features',
      icon: Bot,
      link: '/tools/nightbot-command-generator',
      bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Clip Title Generator',
      description: 'Generate catchy titles and descriptions for your clips using advanced AI algorithms',
      icon: Video,
      link: '/tools/ai-clip-generator',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      title: 'YouTube Thumbnail Downloader',
      description: 'Download high-quality YouTube thumbnails in seconds with support for multiple resolutions and formats',
      icon: Download,
      link: '/tools/youtube-thumbnail-downloader',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      title: 'LiveSnip',
      description: 'The ultimate tool for content creators to capture, save, and share the best moments from live streams with Nightbot integration',
      icon: Video,
      link: 'https://livesnip.shubhampaul.xyz/',
      bgColor: 'bg-gradient-to-br from-green-600 to-blue-600'
    }
  ];

  const ToolCard = ({ tool }: { tool: any }) => {
    const IconComponent = tool.icon;
    return (
      <a href={tool.link} className="group">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <div className={`${tool.bgColor} h-32 flex items-center justify-center`}>
            <IconComponent className="w-12 h-12 text-white" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tool.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {tool.description}
            </p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Paul Tools
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto mb-8">
            Your comprehensive platform for free online calculators, crypto tools, electronics calculators, and streaming utilities. Professional-grade tools designed for accuracy and ease of use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tools" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Explore All Tools
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Paul Tools?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional-grade tools designed for accuracy, ease of use, and comprehensive functionality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">100% Free</h3>
              <p className="text-gray-600 dark:text-gray-300">All tools are completely free to use with no hidden costs or registration required</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Accuracy</h3>
              <p className="text-gray-600 dark:text-gray-300">Built with industry-standard algorithms and formulas for reliable results</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">User-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">Intuitive interfaces designed for both beginners and professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Always Available</h3>
              <p className="text-gray-600 dark:text-gray-300">24/7 access to all tools with no downtime or maintenance windows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Tools Section */}
      <section id="crypto-tools" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Crypto & DeFi Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive cryptocurrency tools for tracking profits, estimating taxes, managing investments, and optimizing DeFi strategies. Our crypto calculators provide real-time data and professional-grade accuracy for informed decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Tools Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Electronics & Electrical Calculators
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional electronics calculators for engineers, technicians, and DIY enthusiasts. From inverter efficiency to PCB design, our tools provide accurate calculations for electrical projects and system optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electronicsTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Content Creator & Streaming Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful tools for YouTube creators, Twitch streamers, and content creators. From AI-powered title generation to Nightbot automation, our streaming tools help you create engaging content and grow your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamingTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How to Use Our Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Getting started with Paul Tools is simple and straightforward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Choose Your Tool</h3>
              <p className="text-gray-600 dark:text-gray-300">Browse our collection of specialized calculators and tools across different categories</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Enter Your Data</h3>
              <p className="text-gray-600 dark:text-gray-300">Input your values using our intuitive forms with helpful placeholders and descriptions</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Receive instant, accurate calculations with detailed explanations and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions about our tools and services
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Are these tools really free to use?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes, all our tools are completely free with no hidden costs, registration requirements, or usage limits. We believe in providing valuable tools accessible to everyone.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How accurate are the calculations?</h3>
              <p className="text-gray-600 dark:text-gray-300">Our tools use industry-standard formulas and algorithms to ensure professional-grade accuracy. We regularly update our calculations to maintain the highest standards of precision.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Do you store my data?</h3>
              <p className="text-gray-600 dark:text-gray-300">No, we don't store any of your input data. All calculations are performed locally in your browser, ensuring your privacy and data security.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I use these tools on mobile devices?</h3>
              <p className="text-gray-600 dark:text-gray-300">Absolutely! All our tools are fully responsive and optimized for mobile devices, tablets, and desktop computers.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do you add new tools?</h3>
              <p className="text-gray-600 dark:text-gray-300">We continuously develop and add new tools based on user feedback and emerging needs. Follow us for updates on new features and tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Explore our comprehensive collection of free online tools and calculators designed to make your work easier and more efficient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tools" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Browse All Tools
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
