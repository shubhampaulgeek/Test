import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NightbotCommandGenerator from '@/components/tools/NightbotCommandGenerator';
import SEO from '@/components/SEO';
import RelatedTools from '@/components/RelatedTools';

const NightbotCommandGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Nightbot Command Generator – Create & Manage Stream Commands"
        description="Generate, edit, and manage custom commands for Nightbot on Twitch and YouTube. Boost your stream engagement with smart chatbot commands."
        keywords="nightbot command generator, twitch commands, youtube chat commands, nightbot bot, stream commands, chat automation"
        canonical="https://www.shubhampaul.xyz/tools/nightbot-command-generator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nightbot Command Generator</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Create, edit, delete and manage custom commands for Nightbot to enhance your Twitch and YouTube streams
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NightbotCommandGenerator />

          {/* About Section */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Tool</h2>
            <p className="text-gray-600 mb-4">
              The Nightbot Command Generator helps you create, edit, and manage custom Nightbot commands for your Twitch or YouTube stream. Instantly generate properly formatted commands, set user levels, and add cooldowns to keep your chat organized and interactive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Command presets for common actions</li>
                  <li>• User level and cooldown settings</li>
                  <li>• Copy-to-clipboard functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect For</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Streamers and moderators</li>
                  <li>• Community engagement</li>
                  <li>• Automated chat moderation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Design Your Command</h3>
                <p className="text-gray-600">Enter the command name, response message, and configure user permissions and cooldown settings.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Add to Your Collection</h3>
                <p className="text-gray-600">Save the command to your collection where you can edit, copy, or delete it later.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Deploy to Nightbot</h3>
                <p className="text-gray-600">Copy the generated command and paste it into your chat to add it to Nightbot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <RelatedTools category="streaming" currentTool="Nightbot Command Generator" />
      <Footer />
    </div>
  );
};

export default NightbotCommandGeneratorPage;
