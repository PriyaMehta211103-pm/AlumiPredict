import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaArrowLeft, FaVial, FaChartBar, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const ChemicalCompositionAnalysis = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?spectroscopy,laboratory,chemistry';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaFlask />
        </div>
        <h1>Chemical Composition Analysis</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Spectroscopic Verification</h2>
          <p>
            Ensuring the correct chemical composition is non-negotiable. We employ Optical Emission Spectroscopy (OES) 
            to analyze samples taken directly from the holding furnace. This ensures that every coil produced 
            falls within the strict tolerance limits of international standards like ASTM B233.
          </p>
          <div className="feature-image-container">
            <img 
              src="/chemical-analysis.jpg" 
              alt="Spectroscopy Lab" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Key Elements Monitored</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Iron (Fe)</h3>
              <p>Controlled (0.10-0.25%) to provide strength without compromising conductivity significantly.</p>
            </div>
            <div className="benefit-card">
              <h3>Silicon (Si)</h3>
              <p>Kept low (&lt;0.10%) to prevent conductivity loss, unless producing Al-Mg-Si alloys.</p>
            </div>
            <div className="benefit-card">
              <h3>Trace Elements</h3>
              <p>Strict monitoring of V, Ti, Cr, and Mn as they drastically reduce electrical conductivity.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Testing Protocol</h2>
          <ol className="process-steps">
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Sampling</h3>
                <p>Molten metal is poured into a mushroom mold to create a solid sample disk.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Surface Prep</h3>
                <p>Sample surface is machined to a smooth finish for accurate sparking.</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>OES Analysis</h3>
                <p>Spark emission spectrum is analyzed to determine elemental percentages.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=optical+emission+spectroscopy+aluminum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>OES Testing</h4>
                <p>How spectroscopy works</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+alloy+composition+analysis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Alloy Analysis</h4>
                <p>Understanding aluminum grades</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChemicalCompositionAnalysis;
