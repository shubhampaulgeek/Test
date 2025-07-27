
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Paul Tools</title>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our free online tools for crypto, electronics, and streaming." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        
        <div className="flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist. You might have mistyped the URL or the page has been moved.
            </p>
            <div className="space-x-4">
              <Link 
                to="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Go Home
              </Link>
              <Link 
                to="/tools" 
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Browse Tools
              </Link>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
