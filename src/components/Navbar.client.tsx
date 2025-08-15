
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Wrench, ChevronDown, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'All Tools', path: '/tools' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
];

const cryptoTools = [
  { name: 'Crypto Airdrop Token Price Estimator', path: '/tools/crypto-airdrop-estimator' },
  { name: 'Crypto ROI Calculator', path: '/tools/crypto-roi-calculator' },
  { name: 'Crypto Tax Calculator', path: '/tools/crypto-tax-calculator' },
  { name: 'Crypto to Fiat Converter', path: '/tools/crypto-fiat-converter' },
  { name: 'DeFi Yield Calculator', path: '/tools/defi-yield-calculator' },
  { name: 'Gas Fee Estimator', path: '/tools/gas-fee-estimator' },
];

const electronicsTools = [
  { name: 'Inverter Battery Backup Time Calculator', path: '/tools/inverter-battery-calculator' },
  { name: 'Inverter Efficiency Calculator', path: '/tools/inverter-efficiency-calculator' },
  { name: 'Solar Panel Output Loss Calculator', path: '/tools/solar-panel-output-loss-calculator' },
  { name: 'PCB Trace Current Capacity Calculator', path: '/tools/pcb-trace-current-calculator' },
  { name: 'Capacitor Charging Time Calculator', path: '/tools/capacitor-charging-time-calculator' },
];

const streamingTools = [
  { name: 'YouTube Comment Sentiment Analyzer', path: '/tools/youtube-comment-sentiment-analyzer' },
  { name: 'AI Clip Title & Description Tool', path: '/tools/ai-clip-generator' },
  { name: 'Nightbot Timer Calculator', path: '/tools/nightbot-timer-calculator' },
  { name: 'Nightbot Command Generator', path: '/tools/nightbot-command-generator' },
      { name: 'YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online', path: '/tools/youtube-thumbnail-downloader' },
  { name: 'LiveSnip', path: 'https://livesnip.shubhampaul.xyz/', external: true },
];

const NavbarClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cryptoDropdownOpen, setCryptoDropdownOpen] = useState(false);
  const [electronicsDropdownOpen, setElectronicsDropdownOpen] = useState(false);
  const [streamingDropdownOpen, setStreamingDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  // Timeout refs for delayed closing
  const cryptoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const electronicsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const streamingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Clear timeout function
  const clearTimeoutRef = (timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  
  // Handle mouse enter with immediate open
  const handleMouseEnter = (setDropdownOpen: (open: boolean) => void, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    clearTimeoutRef(timeoutRef);
    setDropdownOpen(true);
  };
  
  // Handle mouse leave with delayed close
  const handleMouseLeave = (setDropdownOpen: (open: boolean) => void, timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay
  };
  
  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearTimeoutRef(cryptoTimeoutRef);
      clearTimeoutRef(electronicsTimeoutRef);
      clearTimeoutRef(streamingTimeoutRef);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src="/tool.png" alt="Paul Tools Logo" className="h-6 w-6 mr-2 object-contain" style={{filter: 'drop-shadow(0 0 2px #60a5fa)'}} />
              <div>
                <h1 className="text-2xl font-bold text-blue-600">Paul Tools</h1>
                <p className="text-xs text-gray-500">Multi Tool Platform</p>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Crypto Tools Dropdown */}
            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(setCryptoDropdownOpen, cryptoTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setCryptoDropdownOpen, cryptoTimeoutRef)}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center"
              >
                Crypto Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {cryptoDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {cryptoTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Electronics Tools Dropdown */}
            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(setElectronicsDropdownOpen, electronicsTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setElectronicsDropdownOpen, electronicsTimeoutRef)}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center"
              >
                Electronics Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {electronicsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {electronicsTools.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Streaming Tools Dropdown */}
            <div 
              className="relative dropdown-container"
              onMouseEnter={() => handleMouseEnter(setStreamingDropdownOpen, streamingTimeoutRef)}
              onMouseLeave={() => handleMouseLeave(setStreamingDropdownOpen, streamingTimeoutRef)}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center"
              >
                Streaming Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {streamingDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {streamingTools.map((tool) => {
                    if (tool.external) {
                      return (
                        <a
                          key={tool.name}
                          href={tool.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center justify-between"
                        >
                          <span>{tool.name}</span>
                          <ExternalLink className="w-3 h-3 text-gray-400" />
                        </a>
                      );
                    } else {
                      return (
                        <a
                          key={tool.name}
                          href={tool.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {tool.name}
                        </a>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Crypto Tools */}
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Crypto Tools</div>
              {cryptoTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.path}
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {tool.name}
                </a>
              ))}
            </div>

            {/* Mobile Electronics Tools */}
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Electronics Tools</div>
              {electronicsTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.path}
                  className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {tool.name}
                </a>
              ))}
            </div>

            {/* Mobile Streaming Tools */}
            <div className="px-3 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Streaming Tools</div>
              {streamingTools.map((tool) => (
                tool.external ? (
                  <a
                    key={tool.name}
                    href={tool.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 flex items-center justify-between"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{tool.name}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>
                ) : (
                  <a
                    key={tool.name}
                    href={tool.path}
                    className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {tool.name}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarClient; 
