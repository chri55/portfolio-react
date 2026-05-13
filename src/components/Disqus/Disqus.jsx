import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import urljoin from 'url-join';
import config from '../../data/siteConfig';

export default function Disqus({ postNode }) {
  if (!config.disqusShortname) return null;

  const post = postNode.frontmatter || postNode;
  const url = urljoin(config.siteUrl, config.pathPrefix, postNode.slug || '');

  return (
    <DiscussionEmbed
      shortname={config.disqusShortname}
      config={{
        url,
        identifier: post.title,
        title: post.title,
      }}
    />
  );
}
