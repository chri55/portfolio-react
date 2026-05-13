import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import portfolioItems from '../data/portfolio';
import config from '../data/siteConfig';
import './PortfolioPage.css';

function TagList({ tags }) {
  return tags.map(elem => (
    <li className="tagwhite" key={elem}><span>{elem}</span></li>
  ));
}

export default function PortfolioPage() {
  return (
    <MainLayout>
      <div className="index-container">
        <Helmet><title>{`Portfolio | ${config.siteTitle}`}</title></Helmet>
        <div className="portfolio">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio">
          {portfolioItems.map(({ title, synopsis, previewImageLink, tags, slug }) => (
            <div className="project" key={slug}>
              <Link className="no-underline" to={`/portfolio/${slug}`}>
                <img src={previewImageLink} alt={`Screenshot of ${title}`} className="preview" />
              </Link>
              <Link to={`/portfolio/${slug}`}>
                <h3 className="projectName">{title}</h3>
              </Link>
              <p><span className="synopsis">{synopsis}</span></p>
              <ul className="tags"><TagList tags={tags} /></ul>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
