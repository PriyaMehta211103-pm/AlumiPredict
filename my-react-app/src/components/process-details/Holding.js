import React from 'react';
import { Link } from 'react-router-dom';
import { FaThermometerHalf, FaArrowLeft, FaFilter, FaWind, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const Holding = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?furnace,aluminum,foundry';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaThermometerHalf />
        </div>
        <h1>Holding Furnace</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Metal Preparation & Stabilization</h2>
          <p>
            The Holding Furnace acts as a buffer between melting and casting, ensuring a continuous supply 
            of molten metal at a stable temperature. This stage is critical for homogenization and 
            final purification before the metal enters the casting wheel.
          </p>
          <div className="feature-image-container">
            <img 
              src="/holding-furnace.jpg" 
              alt="Holding Furnace Operation" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Purification Processes</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Degassing</h3>
              <p>Injection of Argon or Nitrogen gas through rotary impellers to remove dissolved Hydrogen.</p>
            </div>
            <div className="benefit-card">
              <h3>Inclusion Settling</h3>
              <p>Allowing time for heavy inclusions to settle and oxides to float for removal.</p>
            </div>
            <div className="benefit-card">
              <h3>Filtration</h3>
              <p>Passing metal through Ceramic Foam Filters (CFF) to trap microscopic impurities.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Technical Importance</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Target Range</th>
                  <th>Impact on Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Temperature Stability</td>
                  <td>± 5°C</td>
                  <td>Consistent grain structure</td>
                </tr>
                <tr>
                  <td>Hydrogen Content</td>
                  <td>&lt; 0.15 ml/100g</td>
                  <td>Prevents porosity/voids</td>
                </tr>
                <tr>
                  <td>Holding Time</td>
                  <td>Min 30 mins</td>
                  <td>Ensures chemical homogeneity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+degassing+process" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Degassing Process</h4>
                <p>Removing hydrogen from molten aluminum</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=ceramic+foam+filter+aluminum+casting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Filtration Systems</h4>
                <p>Using Ceramic Foam Filters (CFF)</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Holding;
