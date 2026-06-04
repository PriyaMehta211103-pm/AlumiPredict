import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaArrowLeft, FaCompressArrowsAlt, FaWater, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const ThreeRollRollingMill = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?rolling,mill,metal';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaCogs />
        </div>
        <h1>Three-Roll Rolling Mill</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Continuous Deformation</h2>
          <p>
            Our mill utilizes a specialized 3-roll configuration across 13 to 15 stands to progressively 
            reduce the trapezoidal cast bar into a round wire rod. The 3-roll design (Y-configuration) 
            provides superior deformation characteristics and better surface quality compared to traditional 2-roll mills.
          </p>
          <div className="feature-image-container">
            <img 
              src="/rolling-mill.jpg" 
              alt="Rolling Mill Stands" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Process Features</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Triangular Deformation</h3>
              <p>Alternating triangular-hexagonal passes ensure uniform compression and grain refinement.</p>
            </div>
            <div className="benefit-card">
              <h3>Emulsion Cooling</h3>
              <p>High-pressure emulsion sprays lubricate the rolls and control the rod temperature.</p>
            </div>
            <div className="benefit-card">
              <h3>Speed Synchronization</h3>
              <p>Each stand is geared to handle the increasing speed of the rod as its diameter decreases.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Reduction Stats</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Input Size</th>
                  <th>Output Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Roughing (Stands 1-4)</td>
                  <td>2500 mm² Bar</td>
                  <td>~600 mm² Hexagon</td>
                </tr>
                <tr>
                  <td>Intermediate (Stands 5-10)</td>
                  <td>~600 mm²</td>
                  <td>~100 mm² Triangle</td>
                </tr>
                <tr>
                  <td>Finishing (Stands 11-15)</td>
                  <td>~100 mm²</td>
                  <td>9.5 mm / 12 mm Rod</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+wire+rod+rolling+mill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Rolling Mill Process</h4>
                <p>Inside a continuous rolling mill</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=rolling+mill+roll+change" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Maintenance & Ops</h4>
                <p>Roll changing and calibration</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ThreeRollRollingMill;
