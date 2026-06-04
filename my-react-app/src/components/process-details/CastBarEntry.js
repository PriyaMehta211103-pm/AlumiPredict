import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaArrowLeft, FaCut, FaExpandArrowsAlt, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const CastBarEntry = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?rolling,mill,metal';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaSignInAlt />
        </div>
        <h1>Cast Bar Entry</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Transition to Rolling</h2>
          <p>
            The Cast Bar Entry stage manages the critical transition of the hot aluminum bar from the 
            casting machine to the rolling mill. This involves synchronizing speeds, guiding the bar, 
            and ensuring the material is at the correct temperature for plastic deformation.
          </p>
          <div className="feature-image-container">
            <img 
              src="/cast-bar-entry.jpg" 
              alt="Bar Entry System" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Entry Components</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Automatic Shear</h3>
              <p>Hydraulic cutter chops the bar during startup or emergencies to prevent mill jams.</p>
            </div>
            <div className="benefit-card">
              <h3>Pinch Roll</h3>
              <p>Feeds the bar into the first stand of the rolling mill with precise tension control.</p>
            </div>
            <div className="benefit-card">
              <h3>Loop Control</h3>
              <p>Maintains a small slack loop to ensure zero tension between casting and rolling stages.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Operational Safety</h2>
          <ul className="specs-list">
            <li><strong>Temperature Check:</strong> Pyrometers verify bar temp is >480°C.</li>
            <li><strong>Alignment:</strong> Guide rollers prevent the bar from twisting before entry.</li>
            <li><strong>Emergency Stop:</strong> Instant shear activation if downstream issues are detected.</li>
          </ul>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=continuous+casting+rolling+mill+entry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Mill Entry Ops</h4>
                <p>Managing the cast bar transition</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=flying+shear+metal+rolling" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Shearing Systems</h4>
                <p>How automatic shears work</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CastBarEntry;
