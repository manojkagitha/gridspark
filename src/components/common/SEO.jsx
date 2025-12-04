import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for managing page metadata, Open Graph tags, and structured data
 * @param {Object} props - SEO configuration object
 * @param {string} props.title - Page title (appended with site name)
 * @param {string} props.description - Meta description (150-160 characters recommended)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} [props.canonical] - Canonical URL (defaults to current page)
 * @param {string} [props.ogType='website'] - Open Graph type
 * @param {string} [props.ogImage] - Open Graph image URL
 * @param {Object} [props.schema] - JSON-LD structured data object
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.gridsparksolutions.com/og-default.jpg',
  schema,
}) {
  const siteName = 'GridSpark Solutions';
  const fullTitle = `${title} | ${siteName}`;
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://www.gridsparksolutions.com');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
