import React from 'react';
import config from '../../data/siteConfig';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">{config.siteTitle}</h1>
      <div className="titles">
        <span className="job">Full-Stack Software Engineer</span>
        <span className="spacer">•</span>
        <span className="job">UI/UX Design with React and TS</span>
      </div>
      <hr />
    </header>
  );
}
