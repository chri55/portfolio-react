import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Prism from 'prismjs';
import MainLayout from '../layout/MainLayout';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import config from '../data/siteConfig';
import allPosts from '../data/posts.json';
import 'prismjs/themes/prism-tomorrow.css';
import './BlogPost.css';

export default function BlogPost({ slug }) {
  const post = allPosts.find(p => p.slug === slug);

  useEffect(() => {
    Prism.highlightAll();
  }, [slug]);

  if (!post) {
    return (
      <MainLayout>
        <div className="post">
          <h2>Post not found</h2>
          <Link to="/blog">← Back to blog</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={`/blog/${slug}`} postNode={post} postSEO />
        <div className="post">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
