import React from 'react';
import { Helmet } from 'react-helmet-async';
import urljoin from 'url-join';
import config from '../../data/siteConfig';

export default function SEO({ postNode, postPath, postSEO }) {
  let title, description, image, postURL;

  if (postSEO) {
    const postMeta = postNode.frontmatter || postNode;
    title = postMeta.title;
    description = postMeta.description || postNode.excerpt;
    image = postMeta.cover;
    postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
  }

  const isAbsoluteUrl = /^(https?|ftp|file):\/\//.test(image || '');
  if (image && !isAbsoluteUrl) {
    image = urljoin(config.siteUrl, config.pathPrefix, image);
  }

  const blogURL = urljoin(config.siteUrl, config.pathPrefix || '/');
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt || '',
    },
  ];

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': postURL, name: title, image } },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt || '',
        headline: title,
        image: { '@type': 'ImageObject', url: image },
        description,
      }
    );
  }

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}
