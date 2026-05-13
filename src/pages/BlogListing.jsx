import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../data/siteConfig';
import allPosts from '../data/posts.json';
import './BlogListing.css';

export default function BlogListing({ page = 1 }) {
  const { postsPerPage } = config;
  const pageCount = Math.ceil(allPosts.length / postsPerPage);
  const skip = (page - 1) * postsPerPage;
  const posts = allPosts.slice(skip, skip + postsPerPage);

  const prevPage = page - 1 === 1 ? '/blog' : `/blog/${page - 1}`;
  const nextPage = `/blog/${page + 1}`;
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  return (
    <MainLayout>
      <div className="listing-container">
        <Helmet><title>{config.siteTitle}</title></Helmet>
        <SEO />
        <div className="posts-container">
          <PostListing posts={posts} />
        </div>
        {pageCount > 1 && (
          <div className="paging-container">
            {!isFirstPage && <Link to={prevPage}>Previous</Link>}
            {[...Array(pageCount)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <Link key={pageNum} to={pageNum === 1 ? '/blog' : `/blog/${pageNum}`}>
                  {pageNum}
                </Link>
              );
            })}
            {!isLastPage && <Link to={nextPage}>Next</Link>}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
