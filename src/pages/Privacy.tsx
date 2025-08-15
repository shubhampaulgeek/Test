
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Shield, Database, Eye, Users, Lock, UserCheck, Mail, Cpu, Cloud, BarChart3, MessageSquare, Sparkles, Clock } from 'lucide-react';

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
          {/* Table of Contents */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <span className="mr-2">📋</span> Privacy Policy Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Core Principles:</h3>
                <ul className="space-y-1 text-blue-700">
                  <li>• Zero personal data collection</li>
                  <li>• Local browser processing</li>
                  <li>• Minimal data retention</li>
                  <li>• Transparent practices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Quick Navigation:</h3>
                <ul className="space-y-1 text-blue-700">
                  <li>• <a href="#data-collection" className="underline hover:text-blue-900">Data Collection</a></li>
                  <li>• <a href="#tool-specific" className="underline hover:text-blue-900">Tool-Specific Privacy</a></li>
                  <li>• <a href="#third-party" className="underline hover:text-blue-900">Third-Party Services</a></li>
                  <li>• <a href="#livesnip" className="underline hover:text-blue-900">LiveSnip Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <h2 id="data-collection" className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Database className="h-6 w-6 text-blue-500 mr-2" /> Data Collection & Processing</h2>
              <p className="text-gray-700 mb-6">
                Paul Tools operates on a <strong>privacy-first principle</strong>. We do not collect, store, or transmit any personal data. All calculations and operations are performed locally in your browser, except for specific AI-powered tools that require server-side processing for advanced functionality.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cloud className="h-6 w-6 text-purple-500 mr-2" /> Browser Storage</h2>
              <p className="text-gray-700 mb-6">
                We may use local browser storage to save your preferences for a better user experience. This data never leaves your device.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Clock className="h-6 w-6 text-orange-500 mr-2" /> Data Retention Policy</h2>
              <p className="text-gray-700 mb-6">
                We are committed to data minimization and limited retention periods. Our data retention policy ensures that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li><strong>Browser-based tools:</strong> Zero data retention - all processing happens locally</li>
                <li><strong>API-powered tools:</strong> No user data storage - real-time processing only</li>
                <li><strong>AI analysis tools:</strong> Limited metadata retention (90 days maximum) for learning purposes only</li>
                <li><strong>Analytics data:</strong> Anonymous usage statistics with no personal identification</li>
                <li><strong>Contact information:</strong> Retained only as long as necessary to respond to inquiries</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We automatically delete data when retention periods expire and regularly review our data practices to ensure compliance with privacy principles.
              </p>
              
              <h2 id="third-party" className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Users className="h-6 w-6 text-red-500 mr-2" /> Third-Party Services & Analytics</h2>
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
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> We follow strict data minimization principles and do not retain user data longer than necessary. Most tool interactions are processed in real-time without storage, and any temporary data is automatically cleared within 24 hours or at the end of your session.
              </p>

              {/* Tool-Specific Privacy Policies */}
              <h2 id="tool-specific" className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-6 w-6 text-green-500 mr-2" /> Tool-Specific Privacy Policies</h2>
              <p className="text-gray-700 mb-6">
                Different tools have different privacy requirements based on their functionality. Here's how each category handles your data:
              </p>

              {/* YouTube Comment Sentiment Analyzer */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><MessageSquare className="h-5 w-5 text-blue-500 mr-2" /> YouTube Comment Sentiment Analyzer</h3>
              <p className="text-gray-700 mb-6">
                Our YouTube Comment Sentiment Analyzer tool fetches public comments from YouTube videos using the YouTube Data API v3. The tool analyzes comments in multiple languages and provides comprehensive sentiment analysis including spam detection and emoji analysis.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Storage:</strong> To provide Tool Insights and improve analysis quality, we store compressed analysis data securely. This includes aggregated statistics, sentiment scores, and analysis metadata. Individual comment content is not stored, only processed analysis results.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> Analysis data is automatically deleted after 90 days to ensure we don't keep data longer than necessary for learning and insights. This limited retention period helps maintain tool accuracy while respecting user privacy and data minimization principles.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Protection:</strong> All stored data is compressed and encrypted. We implement secure data practices and do not share your analysis data with third parties. The tool only accesses publicly available YouTube data and does not require any user authentication.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Tool Insights and Learning:</strong> We aggregate analysis data to provide insights about sentiment trends, spam patterns, and emoji usage across multiple analyses. We may derive compact, anonymized keyword signals (without storing raw comments) to improve detection for transliterated and local languages over time. This learning data is also subject to the 90-day retention policy.
              </p>

              {/* AI Clip Generator */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Sparkles className="h-5 w-5 text-purple-500 mr-2" /> AI Clip Title & Description Generator</h3>
              <p className="text-gray-700 mb-6">
                Our AI Clip Generator uses Google's Gemini AI to create engaging titles and descriptions for stream clips. When you use this tool, your transcript and chat log data are sent to Google's Gemini API for processing. This data is used solely to generate the requested content and is not stored by us or shared with other parties.
              </p>
              <p className="text-gray-700 mb-6">
                The generated content is returned to you immediately and is not saved on our servers. Google may temporarily process your data according to their privacy policy, but we do not retain any of your input data or generated results.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> No user data is stored or retained from this tool. All processing happens in real-time through Google's API, and we maintain zero data retention for user inputs or generated content.
              </p>

              {/* Crypto Tools Privacy */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-5 w-5 text-yellow-500 mr-2" /> Crypto Tools Privacy</h3>
              <p className="text-gray-700 mb-6">
                Our crypto tools (Tax Calculator, ROI Calculator, Airdrop Estimator, Fiat Converter, DeFi Yield Calculator, Gas Fee Estimator) perform all calculations locally in your browser. No financial data, wallet addresses, or transaction information is transmitted to our servers. All calculations are performed using real-time data from public APIs, but your personal financial information remains private and is never stored or shared.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> These tools operate entirely in your browser with zero data retention. No calculations, inputs, or results are stored on our servers or in any persistent storage.
              </p>

              {/* Electronics Tools Privacy */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Cpu className="h-5 w-5 text-green-500 mr-2" /> Electronics Tools Privacy</h3>
              <p className="text-gray-700 mb-6">
                Our electronics tools (Capacitor Charging Time Calculator, Inverter Battery Calculator, Inverter Efficiency Calculator, PCB Trace Current Calculator, Solar Panel Output Loss Calculator) perform all calculations locally in your browser. No technical specifications or project data is stored or transmitted. All calculations are performed using standard engineering formulas and your input data remains private.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> These tools operate entirely in your browser with zero data retention. No technical specifications, calculations, or project data are stored on our servers or in any persistent storage.
              </p>

              {/* Streaming Tools Privacy */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><MessageSquare className="h-5 w-5 text-purple-500 mr-2" /> Streaming Tools Privacy</h3>
              <p className="text-gray-700 mb-6">
                Our streaming tools (YouTube Comment Sentiment Analyzer, AI Clip Generator, YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online, Nightbot Command Generator, Nightbot Timer Calculator) may interact with external APIs to provide functionality. The YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online accesses public YouTube data, while the Nightbot tools generate commands locally without storing any data. All tools are designed to respect user privacy and minimize data collection.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Data Retention:</strong> Most streaming tools operate with zero data retention. The YouTube Comment Sentiment Analyzer is the only tool that stores analysis metadata (for 90 days), while all other tools process data in real-time without storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LiveSnip Privacy Policy Section */}
      <div id="livesnip">
        <LivesnipPrivacyPolicySection />
      </div>

      {/* Privacy Summary & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Summary & Your Rights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-green-500 mr-2" />
                  What We Don't Do
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Collect personal information</li>
                  <li>• Store your calculations or inputs</li>
                  <li>• Track your browsing behavior</li>
                  <li>• Share data with third parties</li>
                  <li>• Use cookies for tracking</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-2" />
                  What We Do
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Process data locally in your browser</li>
                  <li>• Use minimal analytics for improvement</li>
                  <li>• Provide secure API integrations</li>
                  <li>• Maintain transparent practices</li>
                  <li>• Respect your privacy choices</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Your Privacy Rights</h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                You have the right to access, correct, or delete any information we may have about you. 
                You can also opt out of analytics tracking and request information about our data practices. 
                Contact us at <a href="mailto:shubhampaul01@outlook.com" className="underline font-semibold">shubhampaul01@outlook.com</a> for any privacy-related questions.
              </p>
            </div>
          </div>
        </div>
      </section>

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
