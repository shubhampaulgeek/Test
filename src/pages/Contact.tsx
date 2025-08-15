
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Contact Us - Get in Touch with Paul Tools"
        description="Have questions about our free online tools? Need help with calculations? Contact the Paul Tools team for support and feedback."
        canonical="https://www.shubhampaul.xyz/contact"
      />
      
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Get in touch with the Paul Tools team
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-700">shubhampaul01@outlook.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-700">Usually within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Website</h3>
                <p className="text-gray-700">
                  <a href="https://www.shubhampaul.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.shubhampaul.xyz
                  </a>
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-2">
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


        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
