
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  children,
}: SEOProps) => {
  const location = useLocation();
  const fullTitle = title.includes('Paul Tools') ? title : `${title} | Paul Tools`;
  const defaultImage = ogImage || 'https://www.shubhampaul.xyz/og-image.png';
  const canonicalUrl = canonical || `https://www.shubhampaul.xyz${location.pathname}`;

  return (
    <Helmet>
      {/* Primary meta tags - Override any defaults */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook - Complete override */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Paul Tools" />

      {/* Twitter Card - Complete override */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:domain" content="shubhampaul.xyz" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Paul Tools" />

      {children}
    </Helmet>
  );
};

export default SEO;
