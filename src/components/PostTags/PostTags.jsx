import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

export default function PostTags({ tags }) {
  if (!tags) return null;
  return (
    <div className="post-tag-container">
      {tags.map(tag => (
        <Link
          key={tag}
          style={{ textDecoration: 'none' }}
          to={`/tags/${_.kebabCase(tag)}`}
        >
          <button type="button">{tag}</button>
        </Link>
      ))}
    </div>
  );
}
