import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Bot, Download, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';

const StreamingToolsPage = () => {
  const streamingTools = [
    {
      name: 'YouTube Comment Sentiment Analyzer',
      description: 'Analyze sentiment of YouTube comments to understand audience engagement and feedback patterns',
      icon: <MessageSquare className="w-8 h-8" />,
      link: '/tools/youtube-comment-sentiment-analyzer',
      color: 'bg-green-500'
    },
    {
      name: 'AI Clip Title & Description Tool',
      description: 'Generate engaging titles and descriptions for your stream clips using AI with customizable styles and tones',
      icon: <Sparkles className="w-8 h-8" />,
      link: '/tools/ai-clip-generator',
      color: 'bg-purple-500'
    },
    {
      name: 'Nightbot Timer Calculator',
      description: 'Generate timed chat commands for Nightbot on Twitch and YouTube',
      icon: <Clock className="w-8 h-8" />,
      link: '/tools/nightbot-timer-calculator',
      color: 'bg-indigo-500'
    },
    {
      name: 'Nightbot Command Generator',
      description: 'Create, edit, delete and manage custom commands for Nightbot to enhance your Twitch and YouTube streams',
      icon: <Bot className="w-8 h-8" />,
      link: '/tools/nightbot-command-generator',
      color: 'bg-cyan-500'
    },
    {
      name: 'YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online',
      description: 'Download high-quality YouTube thumbnails in seconds! Use our free YouTube Thumbnail Downloader tool to easily grab HD images from any video. No registration needed – simply paste your video link and save thumbnails instantly.',
      icon: <Download className="w-8 h-8" />,
      link: '/tools/youtube-thumbnail-downloader',
      color: 'bg-red-500'
    },
    {
      name: 'LiveSnip',
      description: 'The ultimate tool for content creators to capture, save, and share the best moments from live streams',
      icon: <ExternalLink className="w-8 h-8" />,
      link: 'https://livesnip.shubhampaul.xyz/',
      color: 'bg-blue-500',
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Streaming Tools</h1>
          <p className="text-xl text-purple-100 dark:text-purple-200 max-w-2xl mx-auto">
            Essential tools for Twitch and YouTube streamers to enhance chat automation, viewer engagement, and content creation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streamingTools.map((tool, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  {tool.name}
                  {tool.external && <ExternalLink className="w-4 h-4 ml-2" />}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                {tool.external ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                  >
                    Open Tool
                  </a>
                ) : (
                  <a
                    href={tool.link}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                  >
                    Use Tool
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StreamingToolsPage;
