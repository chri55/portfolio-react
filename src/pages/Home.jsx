import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import portfolioItems from '../data/portfolio';
import config from '../data/siteConfig';
import './Home.css';

function TagList({ tags }) {
  return tags.map((elem, i) => (
    <li
      className={`tagwhite ${i === 0 ? 'first' : ''} ${i === tags.length - 1 ? 'last' : ''}`}
      key={elem}
    >
      <span>{elem}</span>
    </li>
  ));
}

function renderPortfolio() {
  return portfolioItems.slice(0, 2).map(({ title, synopsis, link, previewImageLink, tags, slug }) => (
    <div className="project" key={slug}>
      <Link className="no-underline" to={`/portfolio/${slug}`}>
        <img src={previewImageLink} alt={`Screenshot of ${title}`} className="preview" />
      </Link>
      <Link to={`/portfolio/${slug}`}>
        <h3 className="projectName">{title}</h3>
      </Link>
      <p><span className="synopsis">{synopsis}</span></p>
      <a href={link} className="external-portfolio-link">Link to project</a>
      <br />
      <ul className="tags"><TagList tags={tags} /></ul>
    </div>
  ));
}

function renderTechLogos(arr, maxLen = 8) {
  const count = Math.min(arr.length, maxLen);
  return arr.slice(0, count).map(item => (
    <div className="innerTech" key={item}>
      <object
        className="tech-logo"
        data={`https://cpt-images.s3.us-east-2.amazonaws.com/${item.toLowerCase()}.svg`}
        type="image/svg+xml"
      />
      <h6 className="logo-desc">{item}</h6>
    </div>
  ));
}

export default function Home() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1000;

  return (
    <MainLayout>
      <div className="index-container">
        <Helmet><title>{config.siteTitle}</title></Helmet>
        <div className="content">
          <h2>Hi!</h2>
          <p>
            I'm Chris — a creative full-stack software engineer with a specialty in Voice and Text AI
            via LLMs and UI/UX design. I've shipped LLM-integrated solutions to over 150 businesses
            and led multiple frontend app rewrites with React. I enjoy building things that are fast,
            accessible, and actually useful.
          </p>
          <Link to="/about"><h3>See my resume!</h3></Link>
          <p><a href="https://github.com/chri55">Connect with me on GitHub.</a></p>
        </div>
        <br />
        <div className="content">
          <h2>Some Tools I Like To Use:</h2>
          <div className="tech">
            {renderTechLogos(
              ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'PostgreSQL', 'Python',  'Docker', 'JS'],
              isMobile ? 9 : 8 // 3x3 grid on mobile, 2x4 grid on desktop
            )}
          </div>
        </div>
        <br />
        <div className="content">
          <h2>Some Examples of my Work:</h2>
        </div>
        <div className="portfolio">{renderPortfolio()}</div>
        <br />
        <div className="portfolio">
          <Link to="/portfolio"><h3>See the rest of my portfolio!</h3></Link>
        </div>
      </div>
    </MainLayout>
  );
}
