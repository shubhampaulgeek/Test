
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Paul Tools – Crypto, Electronics, Streaming & YouTube Tools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your one-stop destination for handy online tools</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Paul Tools</h3>
              <p className="text-gray-700 mb-6">
                Welcome to Paul Tools, your one-stop destination for handy online tools built to save your time and make life easier.
              </p>
              
              <p className="text-gray-700 mb-6">
                We've created this platform with a simple idea in mind — to bring together useful tools from different categories like Crypto, Electronics, Streaming under one clean, easy-to-use website.
              </p>
              
              <p className="text-gray-700 mb-6">
                All our tools are free to use, fast, and designed with simplicity in mind. No fluff. No distractions. Just the tools you need — right when you need them.
              </p>
              
              <p className="text-gray-700 mb-8">
                At Paul Tools, we believe small utilities can make a big difference. And we're constantly adding more to help creators, techies, and everyday users get things done with less hassle.
              </p>
              
              <p className="text-gray-700">
                Thanks for stopping by — and if you find our tools helpful, feel free to share the site with your friends or drop us feedback!
              </p>
            </div>
          </div>

          {/* About Shubham Paul */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Shubham Paul</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Welcome to my digital hub. I am an Electronics & Communication Engineer and a dedicated technology and crypto enthusiast with a keen interest in the transformative power of Generative AI. My work centers on leveraging advanced tools and emerging technologies to drive productivity, optimize workflows, and anticipate trends in today's rapidly evolving digital landscape.
              </p>
              <p className="text-gray-700 mb-6">
                Guided by a mindset of continuous learning and innovation, I bring together deep technical expertise and real-world operational experience. My mission is to empower users—whether they're exploring crypto markets, experimenting with electronics, or integrating cutting-edge streaming solutions—through a suite of intelligent, accessible multi-tool resources.
              </p>
              <p className="text-gray-700">
                At the intersection of technology, artificial intelligence, and blockchain, I strive to provide up-to-date solutions and insights that keep you not just current, but ahead of the curve. Welcome to a space designed for thinkers, builders, and forward-thinkers ready to shape the future.
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/shubhampauleng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow transition-colors"
                aria-label="Shubham Paul's LinkedIn"
              >
                <Linkedin size={24} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the go-to platform for essential online utilities, making complex calculations and tasks simple and accessible for everyone.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <p className="text-gray-700">
                A comprehensive suite of tools covering cryptocurrency calculations, content creation utilities, and productivity enhancers - all free and easy to use.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Paul Tools?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Quality</h3>
                <p className="text-gray-600 text-sm">Built with modern web technologies, ensuring fast performance and reliable results for all your calculations and tools.</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-3">🆓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Free</h3>
                <p className="text-gray-600 text-sm">All tools are completely free to use with no hidden costs, premium features, or subscription requirements.</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
                <p className="text-gray-600 text-sm">Your data stays on your device. We don't collect, store, or track any personal information or calculations.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Quality</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Regular updates and improvements based on user feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Comprehensive testing across different devices and browsers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Accurate calculations using industry-standard formulas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>User-friendly interface designed for both beginners and experts</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Sets Us Apart</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Specialized tools for cryptocurrency and DeFi calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Professional-grade electronics and electrical calculators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>AI-powered content creation and analysis tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Streaming and content creator utilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>


            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Always Free</h3>
                  <p className="text-gray-700">All our tools are completely free to use with no hidden costs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy Focused</h3>
                  <p className="text-gray-700">Your data stays in your browser - we don't store or track anything</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
                  <p className="text-gray-700">Optimized for speed with instant results and minimal loading times</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-700">Perfect experience across all devices and screen sizes</p>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
