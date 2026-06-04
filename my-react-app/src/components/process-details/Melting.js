import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire, FaArrowLeft, FaTemperatureHigh, FaBroom, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const Melting = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?melting,furnace,foundry';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaFire />
        </div>
        <h1>Melting Process</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Furnace Operations</h2>
          <p>
            The melting process takes place in large Reverberatory Furnaces capable of reaching temperatures 
            up to 800°C. The precise control of the melting environment is crucial to minimize hydrogen uptake 
            and oxide formation, which are detrimental to wire quality.
          </p>
          <div className="feature-image-container">
            <img 
              src="/melting-furnace.jpg" 
              alt="Reverberatory Melting Furnace" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Key Process Parameters</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Temperature Control</h3>
              <p>Maintained strictly between 720°C - 750°C to ensure optimal fluidity without overheating.</p>
            </div>
            <div className="benefit-card">
              <h3>Fluxing Treatment</h3>
              <p>Addition of covering and drossing fluxes to protect the melt from oxidation and remove impurities.</p>
            </div>
            <div className="benefit-card">
              <h3>Dross Removal</h3>
              <p>Regular skimming of surface dross to prevent oxide inclusions in the final product.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Operational Steps</h2>
          <ol className="process-steps">
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Charging</h3>
                <p>Loading ingots and clean process scrap into the furnace.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Melting</h3>
                <p>Heating using gas-fired burners until complete liquefaction.</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Skimming</h3>
                <p>Removing the slag/dross layer from the surface.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+melting+furnace+operation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Melting Furnace Ops</h4>
                <p>Inside an aluminum melting furnace</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=dross+removal+aluminum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Dross Removal</h4>
                <p>Techniques for cleaning molten aluminum</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Melting;
