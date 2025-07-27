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
  Percent
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Home = () => {
  const cryptoTools = [
    {
      title: 'Crypto ROI Calculator',
      description: 'Calculate your crypto return on investment with live market data',
      icon: TrendingUp,
      link: '/tools/crypto-roi-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Crypto Airdrop Price Estimator',
      description: 'Estimate token prices based on market cap and supply',
      icon: Coins,
      link: '/tools/crypto-airdrop-estimator',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Crypto Tax Calculator',
      description: 'Calculate your cryptocurrency tax liability',
      icon: Receipt,
      link: '/tools/crypto-tax-calculator',
      bgColor: 'bg-gradient-to-br from-red-500 to-rose-500'
    },
    {
      title: 'Crypto to Fiat Converter',
      description: 'Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection.',
      icon: Calculator,
      link: '/tools/crypto-fiat-converter',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-500'
    },
    {
      title: 'DeFi Yield Calculator',
      description: 'Calculate potential profits from DeFi staking and farming',
      icon: Percent,
      link: '/tools/defi-yield-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-teal-500'
    },
    {
      title: 'Gas Fee Estimator',
      description: 'Check real-time gas fees across multiple blockchains',
      icon: Zap,
      link: '/tools/gas-fee-estimator',
      bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-500'
    }
  ];

  const electronicsTools = [
    {
      title: 'Inverter Efficiency Calculator',
      description: 'Calculate inverter efficiency and power losses',
      icon: Zap,
      link: '/tools/inverter-efficiency-calculator',
      bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Inverter Battery Backup Calculator',
      description: 'Calculate how long your inverter battery will last',
      icon: Battery,
      link: '/tools/inverter-battery-calculator',
      bgColor: 'bg-gradient-to-br from-orange-500 to-amber-500'
    },
    {
      title: 'Solar Panel Output Loss Calculator',
      description: 'Estimate real-world solar panel performance loss',
      icon: Calculator,
      link: '/tools/solar-panel-output-loss-calculator',
      bgColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      title: 'PCB Trace Current Calculator',
      description: 'Calculate safe current capacity for PCB traces',
      icon: Zap,
      link: '/tools/pcb-trace-current-calculator',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'Capacitor Charging Time Calculator',
      description: 'Calculate RC circuit charging and discharging times',
      icon: Clock,
      link: '/tools/capacitor-charging-time-calculator',
      bgColor: 'bg-gradient-to-br from-purple-500 to-violet-500'
    }
  ];

  const streamingTools = [
    {
      title: 'YouTube Comment Sentiment Analyzer',
      description: 'Analyze YouTube comments for positive, negative, or neutral sentiment and gain insights perfect for creators',
      icon: Video,
      link: '/tools/youtube-comment-sentiment-analyzer',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'Nightbot Timer Calculator',
      description: 'Generate timed chat commands for Nightbot',
      icon: Clock,
      link: '/tools/nightbot-timer-calculator',
      bgColor: 'bg-gradient-to-br from-indigo-500 to-blue-500'
    },
    {
      title: 'Nightbot Command Generator',
      description: 'Create and manage custom commands for Nightbot',
      icon: Bot,
      link: '/tools/nightbot-command-generator',
      bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Clip Title Generator',
      description: 'Generate catchy titles and descriptions for your clips',
      icon: Video,
      link: '/tools/ai-clip-generator',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      title: 'YouTube Thumbnail Downloader',
      description: 'Extract and download high-quality thumbnails from YouTube videos',
      icon: Download,
      link: '/tools/youtube-thumbnail-downloader',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-500'
    },
    {
      title: 'LiveSnip',
      description: 'The ultimate tool for content creators to capture, save, and share the best moments from live streams. Easily clip highlights using Nightbot integration and discover amazing content from popular streamers.',
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
      <SEO
        title="Paul Tools – Free Crypto, Electronics and Streaming Tools"
        description="Explore a free multi-tool platform packed with calculators, generators, and downloaders for crypto, electronics, streaming, and other useful tools."
        keywords="crypto calculators, free crypto tools, electronics calculators, streaming tools, Nightbot command generator, YouTube tools, online utilities, airdrop estimator, inverter calculator, gas fee checker, streamer helper, crypto tools, crypto calculators, crypto tax calculator, electronics tools, electronics calculators, electrical calculators, streaming tools, nightbot tools, nightbot automation, youtube tools, twitch tools, ai clip generator, clip downloader, thumbnail downloader, free online calculators, free tools for crypto, streaming utilities, youtube streaming tools, twitch streaming tools, crypto profit calculator, crypto ROI calculator, livesnip, stream clipper"
        canonical="https://www.shubhampaul.xyz/"
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Paul Tools
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto mb-8">
            Explore a free multi-tool platform packed with calculators, generators, and downloaders for crypto, electronics, streaming, and other useful tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/tools" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      {/* Crypto Tools Section */}
      <section id="crypto-tools" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Crypto Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover easy-to-use crypto tools for tracking profits, estimating taxes, managing your investments, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Electronics Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore a wide range of electronics calculators—perfect for research, electronics projects, or electrical calculations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Streaming Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover powerful streaming tools for YouTube and Twitch—powered by AI and Nightbot—to level up your content!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streamingTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
