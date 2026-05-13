import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import PostListing from '../components/PostListing/PostListing';
import config from '../data/siteConfig';
import allPosts from '../data/posts.json';
import './BlogListing.css';

export default function CategoryPage() {
  const { category } = useParams();
  const posts = allPosts.filter(p =>
    p.category && p.category.toLowerCase() === decodeURIComponent(category).toLowerCase()
  );

  return (
    <MainLayout>
      <div className="listing-container">
        <Helmet><title>{`Posts in "${category}" | ${config.siteTitle}`}</title></Helmet>
        <PostListing posts={posts} />
      </div>
    </MainLayout>
  );
}
