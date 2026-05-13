import React from 'react';
import './UserLinks.css';

export default function UserLinks({ config, labeled }) {
  const { userLinks } = config;
  if (!userLinks) return null;

  return (
    <div className="user-links">
      {userLinks.map(link => (
        <a href={link.url} key={link.label}>
          <button type="button">{labeled ? link.label : ''}</button>
        </a>
      ))}
    </div>
  );
}
