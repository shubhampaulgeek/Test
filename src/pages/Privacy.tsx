
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Shield, Database, Eye, Users, Lock, UserCheck, Mail, Cpu, Cloud, BarChart3, MessageSquare, Sparkles } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Privacy Policy"
        description="Learn about how Paul Tools handles your privacy and data. We don't store personal information and all calculations happen in your browser."
        canonical="https://www.shubhampaul.xyz/privacy"
      />
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Database className="h-6 w-6 text-blue-500 mr-2" /> Data Collection</h2>
              <p className="text-gray-700 mb-6">
                Paul Tools does not collect, store, or transmit any personal data. All calculations and operations are performed locally in your browser, except for specific AI-powered tools that require server-side processing.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cloud className="h-6 w-6 text-purple-500 mr-2" /> Browser Storage</h2>
              <p className="text-gray-700 mb-6">
                We may use local browser storage to save your preferences for a better user experience. This data never leaves your device.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Users className="h-6 w-6 text-red-500 mr-2" /> Third-Party Services</h2>
              <p className="text-gray-700 mb-6">
                Our website uses analytics services to understand how users interact with our tools. These services may collect anonymous usage data.
              </p>

              {/* Google Analytics */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><BarChart3 className="h-6 w-6 text-green-500 mr-2" /> Google Analytics</h2>
              <p className="text-gray-700 mb-6">
                This website uses Google Analytics to understand how visitors interact with our tools and improve user experience. Google Analytics may collect anonymous data such as pages visited, time spent on site, and referring websites. This information helps us optimize our tools and provide better services.
              </p>
              <p className="text-gray-700 mb-6">
                You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Analytics Opt-out Browser Add-on</a>.
              </p>

              {/* Google AdSense and Cookies Policy */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Lock className="h-6 w-6 text-yellow-500 mr-2" /> Google AdSense & Cookies</h2>
              <p className="text-gray-700 mb-6">
                This website uses Google AdSense to serve advertisements. Google and its partners may use cookies to personalize ads and measure their effectiveness. These cookies may collect data about your visits to this and other websites to provide personalized advertising based on your interests.
              </p>
              <p className="text-gray-700 mb-6">
                By using this site, you consent to the use of cookies for advertising purposes. You can manage your cookie preferences and opt out of personalized advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ad Settings</a> or by using the <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NAI opt-out tool</a>.
              </p>
              <p className="text-gray-700 mb-6">
                For more information on how Google uses data when you use our site, please visit <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google's Advertising Policy</a>.
              </p>
              
              {/* AI and API Privacy Policies */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-6 w-6 text-green-500 mr-2" /> AI and API Privacy Policies</h2>
              <p className="text-gray-700 mb-6">
                Some tools on Paul Tools use AI models and third-party APIs to provide advanced features and real-time data. We do not store or share any personal data sent to these services. Data sent to APIs or AI models is used solely for processing your request and is not retained beyond the session. Please note that third-party API providers may have their own privacy policies, and we recommend reviewing them for more information. We strive to use reputable providers and minimize data sharing to only what is necessary for tool functionality.
              </p>

              {/* YouTube Comment Sentiment Analyzer */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><MessageSquare className="h-6 w-6 text-blue-500 mr-2" /> YouTube Comment Sentiment Analyzer</h2>
              <p className="text-gray-700 mb-6">
                Our YouTube Comment Sentiment Analyzer tool fetches public comments from YouTube videos using the YouTube Data API v3. The tool analyzes comments in multiple languages and provides comprehensive sentiment analysis including spam detection and emoji analysis.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Storage:</strong> To provide Tool Insights and improve analysis quality, we store compressed analysis data securely. This includes aggregated statistics, sentiment scores, and analysis metadata. Individual comment content is not stored, only processed analysis results.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Protection:</strong> All stored data is compressed and encrypted. We implement secure data practices and do not share your analysis data with third parties. The tool only accesses publicly available YouTube data and does not require any user authentication.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Tool Insights and Learning:</strong> We aggregate analysis data to provide insights about sentiment trends, spam patterns, and emoji usage across multiple analyses. We may derive compact, anonymized keyword signals (without storing raw comments) to improve detection for transliterated and local languages over time.
              </p>

              {/* AI Clip Generator */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Sparkles className="h-6 w-6 text-purple-500 mr-2" /> AI Clip Title & Description Generator</h2>
              <p className="text-gray-700 mb-6">
                Our AI Clip Generator uses Google's Gemini AI to create engaging titles and descriptions for stream clips. When you use this tool, your transcript and chat log data are sent to Google's Gemini API for processing. This data is used solely to generate the requested content and is not stored by us or shared with other parties.
              </p>
              <p className="text-gray-700 mb-6">
                The generated content is returned to you immediately and is not saved on our servers. Google may temporarily process your data according to their privacy policy, but we do not retain any of your input data or generated results.
              </p>

              {/* Crypto Tools Privacy */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-6 w-6 text-yellow-500 mr-2" /> Crypto Tools Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our crypto tools (Tax Calculator, ROI Calculator, Airdrop Estimator, Fiat Converter, DeFi Yield Calculator, Gas Fee Estimator) perform all calculations locally in your browser. No financial data, wallet addresses, or transaction information is transmitted to our servers. All calculations are performed using real-time data from public APIs, but your personal financial information remains private and is never stored or shared.
              </p>

              {/* Electronics Tools Privacy */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-6 w-6 text-green-500 mr-2" /> Electronics Tools Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our electronics tools (Capacitor Charging Time Calculator, Inverter Battery Calculator, Inverter Efficiency Calculator, PCB Trace Current Calculator, Solar Panel Output Loss Calculator) perform all calculations locally in your browser. No technical specifications or project data is stored or transmitted. All calculations are performed using standard engineering formulas and your input data remains private.
              </p>

              {/* Streaming Tools Privacy */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><MessageSquare className="h-6 w-6 text-purple-500 mr-2" /> Streaming Tools Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our streaming tools (YouTube Comment Sentiment Analyzer, AI Clip Generator, YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online, Nightbot Command Generator, Nightbot Timer Calculator) may interact with external APIs to provide functionality. The YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online accesses public YouTube data, while the Nightbot tools generate commands locally without storing any data. All tools are designed to respect user privacy and minimize data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Livesnip Privacy Policy Section (light mode only) */}
      <LivesnipPrivacyPolicySection />
      <Footer />
    </div>
  );
};

// Livesnip Privacy Policy Section (light mode only)
const LivesnipPrivacyPolicySection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Livesnip Privacy Policies
        </h1>
      </div>

      {/* Introduction */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <Shield className="h-8 w-8 text-purple-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Your Privacy Matters
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-600">
          At LiveSnip, we are committed to protecting your privacy and ensuring the security of your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data when you use our service.
        </p>
      </div>

      {/* Information We Collect */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <Database className="h-8 w-8 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Information We Collect
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Clip Data
            </h3>
            <p className="text-gray-600">
              We collect usernames, messages, timestamps, and channel information when clips are created through Nightbot commands.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Usage Information
            </h3>
            <p className="text-gray-600">
              We may collect information about how you interact with our service, including pages visited and features used.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Contact Information
            </h3>
            <p className="text-gray-600">
              When you contact us, we collect the information you provide, such as your name and email address.
            </p>
          </div>
        </div>
      </div>

      {/* How We Use Information */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <Eye className="h-8 w-8 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            How We Use Your Information
          </h2>
        </div>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To provide and maintain our clipping service
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To display clips and associated metadata on our platform
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To improve our service and user experience
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To respond to your inquiries and provide customer support
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To comply with legal obligations
          </li>
        </ul>
      </div>

      {/* Data Sharing */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <Users className="h-8 w-8 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Data Sharing and Disclosure
          </h2>
        </div>
        <p className="mb-4 text-gray-600">
          We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            With your explicit consent
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To comply with legal requirements or court orders
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            To protect our rights, property, or safety, or that of our users
          </li>
        </ul>
      </div>

      {/* Data Security */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <Lock className="h-8 w-8 text-orange-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Data Security
          </h2>
        </div>
        <p className="leading-relaxed text-gray-600">
          We implement appropriate technical and organizational security measures to protect your personal information 
          against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
          the internet or electronic storage is 100% secure.
        </p>
      </div>

      {/* Your Rights */}
      <div className="rounded-lg p-8 mb-8 bg-white">
        <div className="flex items-center mb-4">
          <UserCheck className="h-8 w-8 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Your Rights
          </h2>
        </div>
        <p className="mb-4 text-gray-600">
          You have the right to:
        </p>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Request access to your personal information
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Request correction of inaccurate information
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Request deletion of your information (subject to legal requirements)
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Object to the processing of your information
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="rounded-lg p-8 bg-white">
        <div className="flex items-center mb-4">
          <Mail className="h-8 w-8 text-teal-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Us
          </h2>
        </div>
        <p className="leading-relaxed text-gray-600">
          If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
          <a href="mailto:shubhampaul01@outlook.com" className="text-purple-500 hover:text-purple-600">
            shubhampaul01@outlook.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
