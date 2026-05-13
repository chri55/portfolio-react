import React from 'react';
import config from '../../data/siteConfig';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">{config.siteTitle}</h1>
      <div className="titles">
        <span className="job">Software Engineer</span>
        <span className="spacer">•</span>
        <span className="job">UI/UX Designer</span>
      </div>
      <hr />
    </header>
  );
}
