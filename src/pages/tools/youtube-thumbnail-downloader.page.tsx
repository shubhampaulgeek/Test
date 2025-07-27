import { Helmet } from 'react-helmet-async';
import YouTubeThumbnailDownloader from '../../pages/tools/YouTubeThumbnailDownloader';

export function Page() {
  return (
    <>
      <Helmet>
        <title>YouTube Thumbnail Downloader - Paul Tools</title>
        <meta name="description" content="Download high-quality thumbnails from YouTube videos instantly." />
        <meta name="keywords" content="youtube thumbnail downloader, download youtube thumbnails, youtube tools, video thumbnail extractor" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/youtube-thumbnail-downloader" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Thumbnail Downloader",
            "description": "Download high-quality thumbnails from YouTube videos instantly.",
            "url": "https://www.shubhampaul.xyz/tools/youtube-thumbnail-downloader",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "All",
            "image": "https://www.shubhampaul.xyz/og-image.png",
            "author": { "@type": "Person", "name": "Shubham Paul" },
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          }
        `}</script>
      </Helmet>
      <YouTubeThumbnailDownloader />
    </>
  );
}