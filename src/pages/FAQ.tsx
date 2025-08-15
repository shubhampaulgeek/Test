import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HelpCircle, Search, MessageCircle, Shield, Zap, Calculator, Video, Coins } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          q: "What is Paul Tools?",
          a: "Paul Tools is a comprehensive online platform offering free, professional-grade calculators and utilities for cryptocurrency, electronics, and content creation. We provide tools that help users make informed decisions and simplify complex calculations."
        },
        {
          q: "Are all tools really free?",
          a: "Yes, absolutely! All our tools are 100% free to use with no hidden costs, premium features, or subscription requirements. We believe in making quality tools accessible to everyone."
        },
        {
          q: "Do I need to create an account?",
          a: "No account creation is required. All tools work immediately without any registration, making them accessible and convenient for all users."
        },
        {
          q: "How often are tools updated?",
          a: "We regularly update our tools based on user feedback, new features, and improvements. We're committed to maintaining high quality and adding new functionality."
        }
      ]
    },
    {
      title: "Cryptocurrency Tools",
      icon: Coins,
      questions: [
        {
          q: "How accurate are the crypto calculations?",
          a: "Our crypto tools use industry-standard formulas and real-time market data from reliable APIs. The ROI calculator, tax estimator, and other tools provide accurate results based on current market conditions."
        },
        {
          q: "Which cryptocurrencies are supported?",
          a: "We support 1000+ cryptocurrencies including Bitcoin, Ethereum, and major altcoins. Our tools work with any cryptocurrency - you can manually enter prices for coins not in our database."
        },
        {
          q: "Are the live prices real-time?",
          a: "Yes, our live prices are sourced from CoinGecko API and update in real-time to reflect current market conditions across major exchanges."
        },
        {
          q: "Can I use these tools for tax reporting?",
          a: "While our crypto tax calculator provides estimates, we recommend consulting with a tax professional for official tax reporting. Our tools are designed for informational purposes."
        }
      ]
    },
    {
      title: "Electronics Tools",
      icon: Zap,
      questions: [
        {
          q: "How accurate are the electronics calculations?",
          a: "Our electronics tools use standard engineering formulas and industry-accepted methods. They're suitable for educational purposes, DIY projects, and professional reference."
        },
        {
          q: "Which electrical standards do you follow?",
          a: "Our calculations follow standard electrical engineering principles and safety guidelines. However, always consult local electrical codes for actual installations."
        },
        {
          q: "Can I use these for professional projects?",
          a: "While our tools provide accurate calculations, professional projects should always be reviewed by qualified engineers and follow local regulations and safety standards."
        }
      ]
    },
    {
      title: "Content Creation Tools",
      icon: Video,
      questions: [
        {
          q: "How does the YouTube sentiment analyzer work?",
          a: "Our sentiment analyzer uses AI to analyze YouTube comments and categorize them as positive, negative, or neutral. It helps creators understand audience engagement and feedback."
        },
        {
          q: "Are the AI-generated titles unique?",
          a: "Yes, our AI title generator creates unique, engaging titles based on your content description. Each generation produces different results to give you multiple options."
        },
        {
          q: "Can I download YouTube thumbnails legally?",
          a: "Our thumbnail downloader only works with publicly available thumbnails. Always respect copyright and only download content you have permission to use."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      questions: [
        {
          q: "Do you store my data?",
          a: "No, we don't store, collect, or track any of your data. All calculations happen locally in your browser, ensuring complete privacy and security."
        },
        {
          q: "Are my calculations private?",
          a: "Absolutely! Your calculations, inputs, and results are never transmitted to our servers. Everything stays on your device for maximum privacy."
        },
        {
          q: "Do you use cookies?",
          a: "We only use essential cookies for basic website functionality. We don't use tracking cookies or collect analytics data about individual users."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: MessageCircle,
      questions: [
        {
          q: "What browsers are supported?",
          a: "Our tools work on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest browser versions for optimal performance."
        },
        {
          q: "Are the tools mobile-friendly?",
          a: "Yes, all our tools are fully responsive and work perfectly on mobile devices, tablets, and desktop computers."
        },
        {
          q: "What if I find a bug or error?",
          a: "We welcome feedback! If you encounter any issues, please report them through our contact form. We'll investigate and fix any problems promptly."
        },
        {
          q: "How can I suggest new features?",
          a: "We love hearing from users! Send us your suggestions through our contact form. User feedback helps us prioritize new tools and improvements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about Paul Tools and our services
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.q}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? We're here to help! Contact us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/tools" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-blue-200"
            >
              Explore Tools
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
