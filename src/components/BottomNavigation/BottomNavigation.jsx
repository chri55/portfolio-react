import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome as HomeIcon } from '@react-icons/all-files/md/MdHome';
import { MdPhoto as PortfolioIcon } from '@react-icons/all-files/md/MdPhoto';
import { MdBook as BlogIcon } from '@react-icons/all-files/md/MdBook';
import { RiUser3Fill as AboutIcon } from '@react-icons/all-files/ri/RiUser3Fill';
import './BottomNavigation.css';

export default function BottomNavigation() {
  const getClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <div className="bottom-nav-root">
      <NavLink to="/" end className={getClass}>
        <div className="nav-item">
          <HomeIcon />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink to="/about" className={getClass}>
        <div className="nav-item">
          <AboutIcon />
          <p>Resume</p>
        </div>
      </NavLink>
      <NavLink to="/portfolio" className={getClass}>
        <div className="nav-item">
          <PortfolioIcon />
          <p>Portfolio</p>
        </div>
      </NavLink>
      <NavLink to="/blog" className={getClass}>
        <div className="nav-item">
          <BlogIcon />
          <p>Blog</p>
        </div>
      </NavLink>
    </div>
  );
}
