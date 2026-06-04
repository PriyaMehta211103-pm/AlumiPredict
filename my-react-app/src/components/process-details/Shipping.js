import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTruck, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const Shipping = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?logistics,shipping,warehouse';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaTruck />
        </div>
        <h1>Shipping & Logistics</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Global Delivery Network</h2>
          <p>
            Our logistics team ensures that finished aluminum wire rod coils reach customers safely and on time. 
            We utilize specialized pallets and moisture-proof wrapping to protect the metal from environmental 
            factors during transit. Our real-time tracking system allows customers to monitor their shipment 
            status from dispatch to delivery.
          </p>
          <div className="feature-image-container">
            <img 
              src="/shipping-loading.jpg" 
              alt="Loading Dock Operations" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Transport Standards</h2>
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Requirement</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Packaging</td>
                  <td>Wooden Pallet + HDPE Wrap</td>
                  <td>Moisture & Impact Protection</td>
                </tr>
                <tr>
                  <td>Container Stacking</td>
                  <td>Eye-to-Sky or Eye-to-Wall</td>
                  <td>Stability during transport</td>
                </tr>
                <tr>
                  <td>Documentation</td>
                  <td>Packing List + Mill Cert</td>
                  <td>Customs & Quality Compliance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+wire+coil+logistics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Coil Logistics</h4>
                <p>Handling and shipping large aluminum coils</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=warehouse+management+system" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Warehouse Management</h4>
                <p>Systems for tracking inventory and dispatch</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
