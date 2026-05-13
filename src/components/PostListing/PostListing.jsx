import React from 'react';
import { Link } from 'react-router-dom';
import './PostListing.css';

export default function PostListing({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <React.Fragment key={post.slug}>
          <Link to={`/blog/${post.slug}`}>
            <h2 className="post-title">{post.title}</h2>
          </Link>
          <p className="post-excerpt">{post.excerpt}</p>
        </React.Fragment>
      ))}
    </div>
  );
}
