
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Disclaimer"
        description="Important disclaimers about using Paul Tools. Please read our terms and limitations before using our free online calculators and tools."
        canonical="https://www.shubhampaul.xyz/disclaimer"
      />
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-blue-100">
            Important information about using our tools
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* YouTube Comment Sentiment Analyzer Disclaimer - NEW SECTION */}
          <div className="bg-orange-50 border-l-4 border-orange-400 rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center"><span className="inline-block mr-2">🔍</span> YouTube Comment Sentiment Analyzer Disclaimer</h2>
            <p className="text-gray-800 mb-4">
              <strong>Important:</strong> The YouTube Comment Sentiment Analyzer tool is provided for <strong>educational and research purposes only</strong>. The sentiment analysis results may not be 100% accurate and should not be considered as definitive or professional analysis.
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Accuracy Limitations:</strong> Our sentiment analysis uses automated algorithms that may not fully capture the nuances, context, sarcasm, or cultural differences in language. The accuracy of results can vary based on:
            </p>
            <ul className="list-disc pl-6 text-gray-800 mb-4">
              <li>Language complexity and cultural context</li>
              <li>Sarcasm, irony, or humor in comments</li>
              <li>Mixed languages or code-switching</li>
              <li>Emoji usage and interpretation</li>
              <li>Comment length and context</li>
              <li>Regional language variations</li>
            </ul>
            <p className="text-gray-800 mb-4">
              <strong>Research Use Only:</strong> This tool is designed for academic research, content analysis, and educational purposes. Do not rely on these results for business decisions, content moderation, or any critical applications without additional verification.
            </p>
            <p className="text-gray-800 font-semibold">
              <strong>By using this tool, you acknowledge that the analysis results are estimates and should be used for educational and research purposes only.</strong>
            </p>
          </div>

          {/* Crypto Tools Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl shadow p-8 mb-10">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4 flex items-center"><span className="inline-block mr-2">⚠️</span> Crypto Tools Disclaimer</h2>
            <p className="text-gray-800 mb-4">
              Crypto Tools is for informational and educational purposes only. It does not provide financial, investment, or legal advice. Cryptocurrency prices, tax rates, and regulations may change frequently and vary by region.
            </p>
            <p className="text-gray-800 mb-4">
              Always double-check your results and consult with a qualified financial advisor, tax expert, or legal professional before making any decisions.
            </p>
            <p className="text-gray-800 mb-4">
              By using our crypto tools, you agree that the website or its creators are not responsible for any losses, errors, or consequences arising from the use of these tools.
            </p>
            <p className="text-gray-800 font-semibold">
              <strong>** Please enter all values in US Dollars ($). You can easily convert the results into your local currency based on your country's exchange rate!</strong>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="inline-block mr-2">⚠️</span> General Disclaimer of Paul Tools</h2>
              <p className="text-gray-700 mb-6">
                The information and tools provided on Paul Tools are for educational and informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any calculations or results.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="inline-block mr-2">💰</span> Financial Calculations</h2>
              <p className="text-gray-700 mb-6">
                Our crypto and financial calculators are not financial advice. Always consult with qualified professionals before making investment decisions. Market conditions can change rapidly and past performance does not guarantee future results.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="inline-block mr-2">🛠️</span> Technical Calculations</h2>
              <p className="text-gray-700 mb-6">
                Electronic and technical calculators are provided as estimates. Always verify calculations with professional engineers or certified technicians for critical applications.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="inline-block mr-2">🔗</span> API Limitations and Usage</h2>
              <p className="text-gray-700 mb-6">
                Certain functionalities within Paul Tools, notably those under Streaming Tools and our Crypto Tools, are powered by integrations with third-party APIs and artificial intelligence. Specifically, our Crypto Tools source live market data from <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">CoinGecko</a>. It is important to understand that the availability, accuracy, and response times of these external APIs are beyond our control. Furthermore, while AI-powered features are provided for your convenience, they may exhibit limitations in accuracy, contextual understanding, or overall reliability. Users are strongly advised to independently verify all results and refrain from relying exclusively on automated outputs for significant decisions. The utilization of these tools is implicitly subject to the terms and limitations set forth by the respective API and AI providers.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="inline-block mr-2">❗</span> Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                Paul Tools and its creators are not liable for any damages or losses resulting from the use of our tools. Use at your own risk.
              </p>
              
              {/* Livesnip Disclaimer */}
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center"><span className="inline-block mr-2">📺</span> Livesnip Disclaimer</h2>
              <p className="text-lg text-gray-700 mb-6">Important information about LiveSnip service</p>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">⚠️</span> General Disclaimer</h3>
                <p className="text-gray-700">
                  LiveSnip is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to this service or the information and materials provided through it.
                </p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">ℹ️</span> Service Limitations</h3>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Availability</h4>
                <p className="text-gray-700 mb-4">We do not guarantee that LiveSnip will be available at all times. The service may be interrupted for maintenance, updates, or due to factors beyond our control.</p>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Accuracy</h4>
                <p className="text-gray-700 mb-4">While we strive for accuracy in clip timestamps and metadata, we cannot guarantee the complete accuracy of all information processed through our system.</p>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">Data Loss</h4>
                <p className="text-gray-700">We implement backup procedures, but we cannot guarantee against data loss. Users should not rely solely on LiveSnip for critical data storage.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">🔗</span> Third-Party Services</h3>
                <p className="text-gray-700 mb-4">LiveSnip integrates with third-party services including:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>YouTube API</li>
                  <li>Twitch API</li>
                  <li>Nightbot services</li>
                </ul>
                <p className="text-gray-700">We are not responsible for the availability, functionality, or policies of these third-party services. Changes to their APIs or terms of service may affect LiveSnip functionality.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">🛡️</span> Content and Copyright</h3>
                <p className="text-gray-700 mb-4">Users are responsible for ensuring they have the right to clip and share content. LiveSnip:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Does not claim ownership of clipped content</li>
                  <li>Acts as a platform for organizing and sharing clips</li>
                  <li>Will respond to valid copyright takedown requests</li>
                  <li>Reserves the right to remove content that violates terms of service</li>
                </ul>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">❗</span> Limitation of Liability</h3>
                <p className="text-gray-700">LiveSnip and its operators will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">🔗</span> Platform Support</h3>
                <p className="text-gray-700">LiveSnip currently supports YouTube and Twitch live streams. We are not affiliated with, endorsed by, or officially connected with YouTube, Twitch, or Nightbot. All product and company names are trademarks™ or registered® trademarks of their respective holders.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">⏰</span> Timing Accuracy</h3>
                <p className="text-gray-700">Due to YouTube and Twitch API limitations, timestamps may vary slightly (a few seconds forward or backward). Please use clip delay wisely to account for this limitation. We recommend testing different delay values to find the optimal setting for your specific streaming setup.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">💾</span> Data Retention</h3>
                <p className="text-gray-700">For service efficiency and storage limitations, all clips are automatically deleted from our system after 60 days. This ensures optimal performance and helps us manage storage costs effectively. We recommend saving important clips to your own storage if you need them for longer periods.</p>
              </div>

              <div className="rounded-lg p-8 mb-8 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center"><span className="inline-block mr-2">🔄</span> Updates to This Disclaimer</h3>
                <p className="text-gray-700">This disclaimer may be updated from time to time. Please check this page periodically for changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
