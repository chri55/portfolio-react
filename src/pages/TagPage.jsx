import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import MainLayout from '../layout/MainLayout';
import PostListing from '../components/PostListing/PostListing';
import config from '../data/siteConfig';
import allPosts from '../data/posts.json';
import './BlogListing.css';

export default function TagPage() {
  const { tag } = useParams();
  const posts = allPosts.filter(p =>
    p.tags.some(t => _.kebabCase(t) === tag)
  );

  return (
    <MainLayout>
      <div className="listing-container">
        <Helmet><title>{`Posts tagged "${tag}" | ${config.siteTitle}`}</title></Helmet>
        <PostListing posts={posts} />
      </div>
    </MainLayout>
  );
}
