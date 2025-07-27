const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Paul Tools</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Explore a free multi-tool platform packed with calculators, generators, and downloaders for crypto, electronics, streaming, and other useful tools.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              All tools are free to use and work directly in your browser for maximum privacy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li><a href="/" className="hover:text-white dark:hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="/tools" className="hover:text-white dark:hover:text-gray-200 transition-colors">All Tools</a></li>
              <li><a href="/about" className="hover:text-white dark:hover:text-gray-200 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white dark:hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li><a href="/privacy" className="hover:text-white dark:hover:text-gray-200 transition-colors">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-white dark:hover:text-gray-200 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 mb-2">
            © Paul Tools - All Rights Reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-600 text-sm">
            Developed By Shubham Paul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
