import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Tool {
  name: string;
  url: string;
  external?: boolean;
}

interface RelatedToolsProps {
  category: 'crypto' | 'electronics' | 'streaming';
  currentTool: string;
}

const RelatedTools: React.FC<RelatedToolsProps> = ({ category, currentTool }) => {
  const cryptoTools: Tool[] = [
    { name: 'Crypto Airdrop Token Price Estimator', url: '/tools/crypto-airdrop-estimator' },
    { name: 'Crypto ROI Calculator', url: '/tools/crypto-roi-calculator' },
    { name: 'Crypto Tax Calculator', url: '/tools/crypto-tax-calculator' },
    { name: 'Crypto to Fiat Converter', url: '/tools/crypto-fiat-converter' },
    { name: 'DeFi Yield Calculator', url: '/tools/defi-yield-calculator' },
    { name: 'Gas Fee Estimator', url: '/tools/gas-fee-estimator' }
  ];

  const electronicsTools: Tool[] = [
    { name: 'Inverter Battery Backup Time Calculator', url: '/tools/inverter-battery-calculator' },
    { name: 'Inverter Efficiency Calculator', url: '/tools/inverter-efficiency-calculator' },
    { name: 'Solar Panel Output Loss Calculator', url: '/tools/solar-panel-output-loss-calculator' },
    { name: 'PCB Trace Current Capacity Calculator', url: '/tools/pcb-trace-current-calculator' },
    { name: 'Capacitor Charging Time Calculator', url: '/tools/capacitor-charging-time-calculator' }
  ];

  const streamingTools: Tool[] = [
    { name: 'YouTube Comment Sentiment Analyzer', url: '/tools/youtube-comment-sentiment-analyzer' },
    { name: 'AI Clip Title & Description Tool', url: '/tools/ai-clip-generator' },
    { name: 'Nightbot Timer Calculator', url: '/tools/nightbot-timer-calculator' },
    { name: 'Nightbot Command Generator', url: '/tools/nightbot-command-generator' },
    { name: 'YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online', url: '/tools/youtube-thumbnail-downloader' },
    { name: 'LiveSnip', url: 'https://livesnip.shubhampaul.xyz/', external: true }
  ];

  const getToolsByCategory = (category: string): Tool[] => {
    switch (category) {
      case 'crypto':
        return cryptoTools;
      case 'electronics':
        return electronicsTools;
      case 'streaming':
        return streamingTools;
      default:
        return [];
    }
  };

  const tools = getToolsByCategory(category);
  const filteredTools = tools.filter(tool => {
    const currentLower = currentTool.toLowerCase();
    const toolLower = tool.name.toLowerCase();
    
    // Simple exact match check - exclude the current tool
    return currentLower !== toolLower;
  });

  if (filteredTools.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Also Check:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool, index) => (
              <div key={index} className="group">
                {tool.external ? (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group-hover:bg-blue-50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </a>
                ) : (
                  <a
                    href={tool.url}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group-hover:bg-blue-50"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Navigating to:', tool.url);
                      window.location.href = tool.url;
                    }}
                  >
                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedTools; 