import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import portfolioItems from '../data/portfolio';
import config from '../data/siteConfig';
import './PortfolioItem.css';

export default function PortfolioItem() {
  const { slug } = useParams();
  const item = portfolioItems.find(p => p.slug === slug);

  if (!item) {
    return (
      <MainLayout>
        <div className="portfolio-container">
          <h2>Project not found</h2>
          <Link to="/portfolio">← Back to portfolio</Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="portfolio-container">
        <Link to="/portfolio"><h3>Return to Portfolio</h3></Link>
        <Helmet><title>{`${item.title} | ${config.siteTitle}`}</title></Helmet>
        <h2>{item.title}</h2>
        <p>{item.synopsis}</p>
        <section className="splash">
          <img src={item.previewImageLink} alt={`Screenshot of ${item.title}`} className="featured" />
        </section>
        <br />
        <a className="no-underline" href={item.link} target="_blank" rel="noopener noreferrer">
          <div className="project-link">Link to Project ↗</div>
        </a>
        <h3>More about this project...</h3>
        <hr className="divider" />
        <p>{item.description}</p>
        {item.gifs && item.gifs.length > 0 && (
          <div className="demo-gifs">
            {item.gifs.map((gif, i) => (
              <figure key={i} className="demo-gif-figure">
                <img src={gif.src} alt={gif.caption || `Demo ${i + 1} of ${item.title}`} className="demo-gif" />
                {gif.caption && <figcaption>{gif.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
        <h3>Technologies used</h3>
        <hr className="divider" />
        <ul>
          {item.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </MainLayout>
  );
}
