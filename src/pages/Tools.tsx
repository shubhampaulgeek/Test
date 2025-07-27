
import { useState } from 'react';
import { Calculator, Zap, Monitor, Video, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toolCategories = [
    {
      id: 'crypto',
      title: 'Crypto Tools',
      icon: <Calculator className="w-6 h-6" />,
      color: 'bg-orange-500',
      tools: [
        {
          name: 'Crypto Airdrop Token Price Estimator',
          description: 'Estimate the initial token price based on market capitalization and circulating supply',
          features: ['Market cap analysis', 'Supply calculations', 'Price predictions'],
          url: '/tools/crypto-airdrop-estimator'
        },
        {
          name: 'Crypto ROI Calculator',
          description: 'Calculate your potential return on investment for cryptocurrency trades or holdings',
          features: ['ROI percentage', 'Profit/loss calculation', 'Investment tracking'],
          url: '/tools/crypto-roi-calculator'
        },
        {
          name: 'Crypto Tax Calculator',
          description: 'Calculate your cryptocurrency tax liability based on your gains',
          features: ['Tax estimation', 'Gain/loss tracking', 'Multiple jurisdictions'],
          url: '/tools/crypto-tax-calculator'
        },
        {
          name: 'Crypto to Fiat Converter',
          description: 'Convert 1000+ cryptocurrencies to fiat currencies with live prices, exchange rates, and quick pair selection.',
          features: ['Live crypto & fiat rates', 'Bidirectional conversion', 'Manual override', 'Quick-select pairs', 'Export/share', 'Mini chart'],
          url: '/tools/crypto-fiat-converter'
        },
        {
          name: 'DeFi Yield Calculator',
          description: 'Calculate potential earnings from staking, farming, and other DeFi yield opportunities',
          features: ['Yield estimation', 'Compound interest', 'Multiple protocols'],
          url: '/tools/defi-yield-calculator'
        },
        {
          name: 'Gas Fee Estimator',
          description: 'Check real-time gas fees for Ethereum, Polygon, and BSC across different transaction types',
          features: ['Multi-chain support', 'Live gas prices', 'Cost estimation'],
          url: '/tools/gas-fee-estimator'
        }
      ]
    },
    {
      id: 'electronics',
      title: 'Electronics Tools',
      icon: <Monitor className="w-6 h-6" />,
      color: 'bg-blue-500',
      tools: [
        {
          name: 'Inverter Battery Backup Time Calculator',
          description: 'Calculate how long your inverter battery will last based on your power consumption',
          features: ['Backup time estimation', 'Power consumption analysis', 'Battery optimization'],
          url: '/tools/inverter-battery-calculator'
        },
        {
          name: 'Inverter Efficiency Calculator',
          description: 'Calculate inverter efficiency and power losses to optimize your power system performance',
          features: ['Efficiency calculation', 'Power loss analysis', 'System optimization'],
          url: '/tools/inverter-efficiency-calculator'
        },
        {
          name: 'Solar Panel Output Loss Calculator',
          description: 'Estimate real-world solar panel output loss caused by region-specific weather, dust, and environmental factors',
          features: ['Regional weather analysis', 'Dust impact calculation', 'Performance optimization'],
          url: '/tools/solar-panel-output-loss-calculator'
        },
        {
          name: 'PCB Trace Current Capacity Calculator',
          description: 'Calculate safe current handling capacity for PCB traces based on IPC-2221 standards',
          features: ['IPC-2221 compliance', 'Trace width optimization', 'Current safety limits'],
          url: '/tools/pcb-trace-current-calculator'
        },
        {
          name: 'Capacitor Charging Time Calculator',
          description: 'Calculate charging and discharging times for RC circuits based on resistance and capacitance',
          features: ['RC time constant', 'Charge/discharge curves', 'Circuit timing analysis'],
          url: '/tools/capacitor-charging-time-calculator'
        }
      ]
    },
    {
      id: 'streaming',
      title: 'Streaming Tools',
      icon: <Video className="w-6 h-6" />,
      color: 'bg-purple-500',
      tools: [
        {
          name: 'YouTube Comment Sentiment Analyzer',
          description: 'Analyze sentiment of YouTube comments to understand audience engagement and feedback patterns',
          features: ['Sentiment analysis', 'Comment trends', 'Engagement metrics', 'Up to 50,000 comments'],
          url: '/tools/youtube-comment-sentiment-analyzer'
        },
        {
          name: 'AI Clip Title & Description Tool',
          description: 'Generate engaging titles and descriptions for your stream clips using AI with customizable styles and tones',
          features: ['AI-powered generation', 'Multiple providers', 'Custom styles & tones'],
          url: '/tools/ai-clip-generator'
        },
        {
          name: 'Nightbot Timer Calculator',
          description: 'Generate timed chat commands for Nightbot on Twitch and YouTube',
          features: ['Timer commands', 'Custom intervals', 'Chat automation'],
          url: '/tools/nightbot-timer-calculator'
        },
        {
          name: 'Nightbot Command Generator',
          description: 'Create, edit, delete and manage custom commands for Nightbot to enhance your Twitch and YouTube streams',
          features: ['Command creation', 'Response management', 'Permission settings'],
          url: '/tools/nightbot-command-generator'
        },
        {
          name: 'YouTube Thumbnail Downloader',
          description: 'Extract and download high-quality thumbnails from any YouTube video',
          features: ['High-resolution download', 'Multiple formats', 'Batch processing'],
          url: '/tools/youtube-thumbnail-downloader'
        },
        {
          name: 'LiveSnip',
          description: 'The ultimate tool for content creators to capture, save, and share the best moments from live streams. Easily clip highlights using Nightbot integration and discover amazing content from popular streamers.',
          features: ['Live stream clipping', 'Nightbot integration', 'Content discovery'],
          external: true,
          url: 'https://livesnip.shubhampaul.xyz/'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'crypto', name: 'Crypto Tools' },
    { id: 'electronics', name: 'Electronics Tools' },
    { id: 'streaming', name: 'Streaming Tools' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? toolCategories 
    : toolCategories.filter(cat => cat.id === selectedCategory);

  const handleToolClick = (tool: any) => {
    if (tool.external && tool.url) {
      window.open(tool.url, '_blank', 'noopener,noreferrer');
    } else if (tool.url) {
      window.location.href = tool.url;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="All Tools - Free Online Utilities Collection"
        description="Browse our collection of free online tools for crypto calculations, electronics engineering, streaming utilities."
        keywords="crypto calculators, free crypto tools, electronics calculators, streaming tools, Nightbot command generator, YouTube tools, online utilities, airdrop estimator, inverter calculator, gas fee checker, streamer helper, crypto tools, crypto calculators, crypto tax calculator, electronics tools, electronics calculators, electrical calculators, streaming tools, nightbot tools, nightbot automation, youtube tools, twitch tools, ai clip generator, clip downloader, thumbnail downloader, free online calculators, free tools for crypto, streaming utilities, youtube streaming tools, twitch streaming tools, crypto profit calculator, crypto ROI calculator, livesnip, stream clipper"
        canonical="https://www.shubhampaul.xyz/tools"
      />

      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Tools</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Browse our collection of free online tools for crypto calculations, electronics engineering, streaming utilities.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.tools.map((tool, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900 flex-1">{tool.name}</h3>
                      {tool.external && (
                        <ExternalLink className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {tool.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-sm text-gray-500 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleToolClick(tool)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {tool.external ? 'Open Tool' : 'Use Tool'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;
