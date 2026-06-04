import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaArrowLeft, FaRuler, FaChartArea, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const MechanicalAnalysis = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?tensile,testing,laboratory';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaTools />
        </div>
        <h1>Mechanical Analysis</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Tensile Testing</h2>
          <p>
            Mechanical properties are the ultimate indicators of wire rod quality. We utilize advanced 
            Universal Testing Machines (UTM) to perform tensile tests on every batch, verifying that 
            the Ultimate Tensile Strength (UTS) and Elongation meet customer specifications.
          </p>
          <div className="feature-image-container">
            <img 
              src="/tensile-testing.jpg" 
              alt="Universal Testing Machine" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Key Properties</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Ultimate Tensile Strength</h3>
              <p>The maximum stress the wire can withstand while being stretched (Target: 110-130 MPa).</p>
            </div>
            <div className="benefit-card">
              <h3>Elongation (%)</h3>
              <p>Measure of ductility; higher elongation (>10%) prevents breakage during downstream drawing.</p>
            </div>
            <div className="benefit-card">
              <h3>Yield Strength</h3>
              <p>The stress at which specific amount of plastic deformation is produced.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Analysis Process</h2>
          <ol className="process-steps">
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Sample Prep</h3>
                <p>Cutting a 250mm straight sample from the coil end.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Loading</h3>
                <p>Clamping the sample in the UTM jaws with a defined gauge length.</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Pulling</h3>
                <p>Applying tensile load until fracture while recording the stress-strain curve.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=tensile+testing+aluminum+wire" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Tensile Testing</h4>
                <p>Watch a UTM test in action</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=stress+strain+curve+explained" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Stress-Strain Curve</h4>
                <p>Understanding mechanical properties</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MechanicalAnalysis;
