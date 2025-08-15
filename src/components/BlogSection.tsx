import React from 'react';
import { BookOpen, TrendingUp, Zap, Video, Calculator, Shield, Users, Clock } from 'lucide-react';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Cryptocurrency ROI: A Complete Guide for Beginners",
      excerpt: "Learn the fundamentals of calculating cryptocurrency returns, understanding market volatility, and making informed investment decisions in the digital asset space.",
      category: "Crypto Education",
      readTime: "8 min read",
      icon: TrendingUp,
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      link: "/blog/crypto-roi-guide"
    },
    {
      id: 2,
      title: "DeFi Yield Farming: How to Calculate Your Potential Returns",
      excerpt: "Master the art of DeFi yield calculations, understand APY vs APR, and learn how to maximize your returns in decentralized finance protocols.",
      category: "DeFi & Yield",
      readTime: "10 min read",
      icon: Calculator,
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      link: "/blog/defi-yield-guide"
    },
    {
      id: 3,
      title: "Gas Fees Explained: Understanding Ethereum Network Costs",
      excerpt: "Everything you need to know about gas fees, how they work, when to transact, and how to optimize your costs on the Ethereum network.",
      category: "Blockchain Basics",
      readTime: "6 min read",
      icon: Zap,
      bgColor: "bg-gradient-to-br from-purple-500 to-indigo-500",
      link: "/blog/gas-fees-explained"
    },
    {
      id: 4,
      title: "Inverter Efficiency: How to Calculate and Improve Your Power System",
      excerpt: "Learn about inverter efficiency calculations, power losses, and practical tips to optimize your solar or backup power system performance.",
      category: "Electronics",
      readTime: "7 min read",
      icon: Zap,
      bgColor: "bg-gradient-to-br from-orange-500 to-amber-500",
      link: "/blog/inverter-efficiency-guide"
    },
    {
      id: 5,
      title: "YouTube Analytics: Understanding Comment Sentiment for Content Creators",
      excerpt: "Discover how sentiment analysis can help you understand your audience, improve engagement, and create better content based on viewer feedback.",
      category: "Content Creation",
      readTime: "9 min read",
      icon: Video,
      bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
      link: "/blog/youtube-sentiment-guide"
    },
    {
      id: 6,
      title: "Crypto Tax Basics: What Every Investor Needs to Know",
      excerpt: "Essential information about cryptocurrency taxation, reporting requirements, and how to calculate your tax liability accurately.",
      category: "Crypto Tax",
      readTime: "12 min read",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-red-500 to-rose-500",
      link: "/blog/crypto-tax-basics"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational Resources & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expand your knowledge with our comprehensive guides on cryptocurrency, electronics, 
            and content creation. Learn from experts and improve your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const IconComponent = article.icon;
            return (
              <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${article.bgColor} h-32 flex items-center justify-center`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <a 
                    href={article.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
