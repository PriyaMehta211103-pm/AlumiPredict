import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCircleNotch, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const Recoiling = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?wire,coil,aluminum';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaCircleNotch />
        </div>
        <h1>Recoiling & Packaging</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Automated Coiling Technology</h2>
          <p>
            The final stage of production involves winding the finished wire rod into dense, uniform coils. 
            Our automated coilers maintain constant tension to prevent wire entanglement and ensure easy 
            pay-off for downstream customers. The system automatically straps and weighs each coil, applying 
            traceable tags for inventory management.
          </p>
          <div className="feature-image-container">
            <img 
              src="/recoiling.jpg" 
              alt="Wire Rod Coiling Machine" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Coil Specifications</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Standard Range</th>
                  <th>Tolerance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coil Weight</td>
                  <td>2000 kg</td>
                  <td>± 50 kg</td>
                </tr>
                <tr>
                  <td>Inner Diameter</td>
                  <td>550 mm</td>
                  <td>Standard</td>
                </tr>
                <tr>
                  <td>Outer Diameter</td>
                  <td>1400 mm</td>
                  <td>Max</td>
                </tr>
                <tr>
                  <td>Strapping</td>
                  <td>4 Steel/PET Straps</td>
                  <td>Automated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=wire+rod+coiler+machine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Wire Rod Coiling</h4>
                <p>Automated coiling and packaging systems in action</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+coil+strapping" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Coil Strapping</h4>
                <p>Industrial strapping solutions for heavy wire coils</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recoiling;
