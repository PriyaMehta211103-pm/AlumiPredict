import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBolt, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const ElectricalAnalysis = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?electrical,measurement,laboratory';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaBolt />
        </div>
        <h1>Electrical Analysis</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>High-Precision Conductivity Testing</h2>
          <p>
            Electrical conductivity is a critical parameter for aluminum wire rod used in electrical applications. 
            We utilize the Kelvin bridge method to measure resistance with extreme accuracy, converting the 
            results to % IACS (International Annealed Copper Standard). Our automated testing stations ensure 
            every batch meets the stringent conductivity requirements for power transmission cables.
          </p>
          <div className="feature-image-container">
            <img 
              src="/electrical-test.jpg" 
              alt="Conductivity Testing Setup" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Performance Standards</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Standard Value</th>
                  <th>Test Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Conductivity</td>
                  <td>&gt; 61.5% IACS</td>
                  <td>IEC 60468</td>
                </tr>
                <tr>
                  <td>Resistivity</td>
                  <td>&lt; 0.02808 Ω·mm²/m</td>
                  <td>ASTM B193</td>
                </tr>
                <tr>
                  <td>Temperature Correction</td>
                  <td>20°C Reference</td>
                  <td>Auto-Compensation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=conductivity+testing+aluminum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Conductivity Testing</h4>
                <p>Methods for measuring electrical properties of aluminum</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=kelvin+bridge+resistance+measurement" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Kelvin Bridge Method</h4>
                <p>Understanding precise resistance measurement techniques</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElectricalAnalysis;
