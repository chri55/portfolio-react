import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layout/MainLayout';
import config from '../data/siteConfig';
import './About.css';

export default function About() {
  return (
    <MainLayout>
      <div className="index-container">
        <Helmet><title>{`About | ${config.siteTitle}`}</title></Helmet>
        <div className="content">
          <div className="profile">
            <img className="prof" src="https://cpt-images.s3.us-east-2.amazonaws.com/chris-min.jpg" alt="Chris Till" />
          </div>
          <h2>About Me</h2>
          <p>
            Creative full-stack software engineer with a specialty in Voice and Text AI via LLMs
            and UI/UX design. Shipped LLM-integrated solutions to over 150 businesses and led 2
            frontend app rewrites with React.
          </p>
        </div>
        <div className="content">
          <h2>Resume</h2>
          <br />
          <h3>Skills</h3>
          <p><strong>Frontend:</strong> React, JavaScript, TypeScript, Redux, HTML, CSS, SCSS, Relay, browser devtools, cross-compatibility, accessibility, Angular, Vue, Next.js, ESLint, Webpack, Babel</p>
          <p><strong>Backend:</strong> Node.js, GraphQL, PostgreSQL, Schema Design, Sequelize.js, GraphQL dataloaders, Express, Java, Python, Golang, PHP, ElasticSearch, PGVector, Vector indexing</p>
          <p><strong>DevOps and Testing:</strong> GitHub Actions, AWS, GCP, Jest, Playwright, AI Integration (OpenAI and ElevenLabs AI), Prompt Engineering, Microservices, Docker, NPM, Yarn, NVM</p>
          <br />
          <h3>Experience</h3>
          <h4 className="exp"><strong>ReachifyAI, San Diego, CA</strong> &ndash; <em>Software Engineer II</em></h4>
          <p className="exp light"><em>July 2022 &ndash; April 2026</em></p>
          <ul>
            <li>Built and shipped an AI Voice Concierge and SMS Ordering service to over 150 businesses, leading to an increase in average daily restaurant orders of about 10%.</li>
            <li>Created and maintained API integrations for major restaurant platforms like OLO, Square, and Toast, handling hundreds of baskets and completed orders per month.</li>
            <li>Integrated both text (SMS) and voice (phone) AI output using platforms like OpenAI and ElevenLabs and routed through telephony services like Bandwidth and Twilio, handling hundreds of calls per day regarding orders and frequently asked questions.</li>
            <li>Parsed text and speech inputs into discrete data results to determine customer intents, analyze call + order data, and index menu items for restaurants.</li>
            <li>Created and maintained a UI component library in React, used within Reachify's main administration app, and a checkout app handling dozens of transactions daily.</li>
            <li>Built performant backend object-relational models with Node, Sequelize, and PostgreSQL, and optimized using Redis-backed data loaders as a caching layer.</li>
          </ul>
          <br />
          <h4 className="exp"><strong>BTB Security, Philadelphia PA</strong> &ndash; <em>Software Engineer</em></h4>
          <p className="exp light"><em>November 2020 &ndash; July 2022</em></p>
          <ul>
            <li>Led two successful projects to redesign internal tools websites from Angular into React JS, removing tech debt and allowing for new data visualizations in a custom framework.</li>
            <li>Utilized REST APIs within Golang to ingest and normalize logs from 10&ndash;15 security services per client, which were analyzed and indexed with ElasticSearch.</li>
            <li>Maintained PHP code for backend services and APIs that communicated with the React app.</li>
          </ul>
          <br />
          <h4 className="exp"><strong>Rutgers University, Camden NJ</strong> &ndash; <em>Paid Internship for CCIB</em></h4>
          <p className="exp light"><em>June 2018 &ndash; June 2020</em></p>
          <ul>
            <li>Created a JavaScript based visualizer engine for theoretical movement algorithms.</li>
            <li>Presented research at a research conference in New Haven, CT.</li>
            <li>Created Python scripts to scrape research data and integrate with various API endpoints.</li>
          </ul>
          <br />
          <h3>Education</h3>
          <h4 className="exp"><strong>Rutgers University, Camden NJ</strong> &ndash; <em>B.S. Computer Science + B.A. Digital Studies</em></h4>
          <p className="exp light"><em>September 2016 &ndash; May 2020</em></p>
          <ul>
            <li>Webmaster for Association of Computing Machinery &ndash; Rutgers Camden Branch</li>
            <li>Designed first club website with Python, Flask, JS, and Google Cloud Platform hosting</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
