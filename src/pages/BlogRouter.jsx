import React from 'react';
import { useParams } from 'react-router-dom';
import BlogListing from './BlogListing';
import BlogPost from './BlogPost';

export default function BlogRouter() {
  const { pageOrSlug } = useParams();

  // If no segment, or it's a pure integer, render the listing
  if (!pageOrSlug || /^\d+$/.test(pageOrSlug)) {
    const page = pageOrSlug ? parseInt(pageOrSlug, 10) : 1;
    return <BlogListing page={page} />;
  }

  return <BlogPost slug={pageOrSlug} />;
}
