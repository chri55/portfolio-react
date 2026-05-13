import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../data/siteConfig';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import './index.css';

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Header />
      {children}
      <Footer config={config} />
      <section className="bottom-spacer" />
      <BottomNavigation />
    </div>
  );
}
