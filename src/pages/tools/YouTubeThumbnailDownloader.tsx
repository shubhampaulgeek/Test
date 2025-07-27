import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import YouTubeThumbnailDownloader from '@/components/tools/YouTubeThumbnailDownloader';
import SEO from '@/components/SEO';

const YouTubeThumbnailDownloaderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="YouTube Thumbnail Downloader"
        description="Extract and download high-quality thumbnails from any YouTube video."
        keywords="youtube thumbnail downloader, video thumbnail extractor, youtube thumbnail generator, download youtube thumbnails, free thumbnail tool"
        canonical="https://www.shubhampaul.xyz/tools/youtube-thumbnail-downloader"
      />
      
      <Navbar />
      
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">YouTube Thumbnail Downloader</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Extract and download high-quality thumbnails from any YouTube video
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeThumbnailDownloader />

          {/* About Section */}
          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Tool</h2>
            <p className="text-gray-600 mb-4">
              The YouTube Thumbnail Downloader allows you to extract and download high-quality thumbnails from any public YouTube video. Perfect for content creators, designers, and researchers who need quick access to video preview images.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Download HD, SD, and preview thumbnails</li>
                  <li>• Works for any public YouTube video</li>
                  <li>• No login required</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Use Cases</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Video presentations</li>
                  <li>• Social media posts</li>
                  <li>• Design inspiration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use This Tool?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Copy YouTube URL</h3>
                <p className="text-gray-600">Navigate to any YouTube video and copy the URL from your browser's address bar.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Paste and Generate</h3>
                <p className="text-gray-600">Paste the URL into the input field and click generate to extract all available thumbnail sizes.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Download Your Choice</h3>
                <p className="text-gray-600">Choose your preferred resolution and click download to save the thumbnail to your device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YouTubeThumbnailDownloaderPage;
