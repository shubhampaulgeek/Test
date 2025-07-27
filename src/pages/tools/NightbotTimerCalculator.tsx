import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NightbotTimerCalculator from '@/components/tools/NightbotTimerCalculator';
import SEO from '@/components/SEO';

const NightbotTimerCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEO
        title="Nightbot Timer Calculator – Auto Chat Timer Generator for Twitch & YouTube"
        description="Easily create chat timers for Nightbot to auto-send messages during streams. Customize timer intervals for Twitch or YouTube Live."
        keywords="nightbot timer calculator, twitch timer commands, youtube chat timer, nightbot commands, stream automation, chat moderation"
        canonical="https://www.shubhampaul.xyz/tools/nightbot-timer-calculator"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-800 dark:to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nightbot Timer Calculator</h1>
          <p className="text-xl text-indigo-100 dark:text-indigo-200 max-w-2xl mx-auto">
            Generate timed chat commands for Nightbot on Twitch and YouTube
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NightbotTimerCalculator />

          {/* About Section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About This Tool</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The Nightbot Timer Calculator streamlines the creation of automated chat messages for your Twitch and YouTube streams. This essential tool helps content creators generate properly formatted timer commands that keep their audience engaged with recurring reminders about social media, Discord servers, subscriptions, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Instant command generation</li>
                  <li>• Customizable intervals and chat lines</li>
                  <li>• Popular preset templates</li>
                  <li>• Copy-to-clipboard functionality</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Perfect For</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Twitch streamers</li>
                  <li>• YouTube live creators</li>
                  <li>• Community engagement</li>
                  <li>• Stream automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Use This Tool?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Create Your Message</h3>
                <p className="text-gray-600 dark:text-gray-300">Write the message you want Nightbot to post automatically in your chat.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Set Timing Parameters</h3>
                <p className="text-gray-600 dark:text-gray-300">Choose how often the message should appear (in minutes) and minimum chat activity required.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Generate and Apply</h3>
                <p className="text-gray-600 dark:text-gray-300">Copy the generated command and paste it into your Twitch chat to activate the timer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NightbotTimerCalculatorPage;
