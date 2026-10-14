import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_URL, PAGE_SEO, DEFAULT_SEO, breadcrumbLd } from '../data/pageSeo';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  canonical?: string;
  /** Keep thin or error pages out of the index. */
  noindex?: boolean;
  /** Extra JSON-LD nodes for this page (Product, FAQPage, ...). */
  jsonLd?: object[];
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article, canonical, noindex, jsonLd = [] }) => {
  const { pathname } = useLocation();
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const page = PAGE_SEO[path.replace(/(.)\/$/, '$1')];

  const seo = {
    title: title || page?.title || DEFAULT_SEO.title,
    description: description || page?.description || DEFAULT_SEO.description,
    image: image?.startsWith('http') ? image : `${SITE_URL}${image || '/aureole-logo.webp'}`,
    url: canonical || `${SITE_URL}${path}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : <link rel="canonical" href={seo.url} />}

      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content="Aureole Pharma Tech" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {[breadcrumbLd(seo.url, seo.title), ...jsonLd].map((node, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(node)}</script>
      ))}
    </Helmet>
  );
};

export default SEO;
