import { Helmet } from 'react-helmet-async';
import YouTubeThumbnailDownloader from '../../pages/tools/YouTubeThumbnailDownloader';

export function Page() {
  return (
    <>
      <Helmet>
        <title>YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online</title>
        <meta name="description" content="Download high-quality YouTube thumbnails in seconds! Use our free YouTube Thumbnail Downloader tool to easily grab HD images from any video. No registration needed – simply paste your video link and save thumbnails instantly." />
        <meta name="keywords" content="youtube thumbnail downloader, download youtube thumbnails, youtube tools, video thumbnail extractor" />
        <link rel="canonical" href="https://www.shubhampaul.xyz/tools/youtube-thumbnail-downloader" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "YouTube Thumbnail Downloader – Free & Fast HD Image Grabber Online",
            "description": "Download high-quality YouTube thumbnails in seconds! Use our free YouTube Thumbnail Downloader tool to easily grab HD images from any video. No registration needed – simply paste your video link and save thumbnails instantly.",
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