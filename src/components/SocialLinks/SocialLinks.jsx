import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';
import urljoin from 'url-join';
import config from '../../data/siteConfig';
import './SocialLinks.css';

export default function SocialLinks({ postNode, postPath, mobile }) {
  const post = postNode.frontmatter || postNode;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
  const iconSize = mobile ? 36 : 48;

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={post.title} summary={postNode.excerpt}>
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  );
}
