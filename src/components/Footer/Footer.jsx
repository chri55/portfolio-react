import React from 'react';
import './Footer.css';

export default function Footer({ config }) {
  const { copyright, userEmail } = config;
  if (!copyright) return null;
  return (
    <footer id="footer" className="footer">
      <div className="notice-container">
        <h5>
          Contact me:{' '}
          <a href={`mailto:${userEmail}`}>{userEmail}</a>
        </h5>
      </div>
      <div className="notice-container">
        <h5 id="copy">{copyright}</h5>
        <h5 id="origin">
          Based on{' '}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </a>
          .
        </h5>
      </div>
    </footer>
  );
}
