import React from 'react';
import { Link } from 'react-router-dom';
import { FaIndustry, FaArrowLeft, FaSnowflake, FaClock, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const Casting = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?continuous,casting,aluminum';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaIndustry />
        </div>
        <h1>Continuous Casting</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Properzi Casting Technology</h2>
          <p>
            The heart of the manufacturing line is the Properzi Continuous Casting Machine. Molten aluminum 
            is poured into the groove of a rotating copper casting wheel, enclosed by a steel belt. 
            Intensive water cooling solidifies the metal into a continuous trapezoidal bar.
          </p>
          <div className="feature-image-container">
            <img 
              src="/casting-wheel.jpg" 
              alt="Properzi Casting Wheel" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Solidification Control</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Water Cooling Zones</h3>
              <p>Multiple cooling zones spray water on the inner wheel, outer belt, and side rims to control heat extraction.</p>
            </div>
            <div className="benefit-card">
              <h3>Grain Structure</h3>
              <p>Rapid solidification ensures a fine, equiaxed grain structure essential for good mechanical properties.</p>
            </div>
            <div className="benefit-card">
              <h3>Casting Speed</h3>
              <p>Synchronized speed (typically 10-12 m/min) matches the rolling mill's intake requirement.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Process Parameters</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Typical Value</th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pouring Temp</td>
                  <td>700°C - 710°C</td>
                  <td>Ensures proper filling</td>
                </tr>
                <tr>
                  <td>Bar Exit Temp</td>
                  <td>480°C - 520°C</td>
                  <td>Ready for hot rolling</td>
                </tr>
                <tr>
                  <td>Cooling Water Pressure</td>
                  <td>3-5 Bar</td>
                  <td>Efficient heat removal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=properzi+continuous+casting+aluminum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Continuous Casting</h4>
                <p>See the Properzi wheel in action</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+solidification+process" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Solidification Science</h4>
                <p>Understanding metal crystallization</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Casting;
