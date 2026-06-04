import React from 'react';
import { Link } from 'react-router-dom';
import { FaCube, FaArrowLeft, FaCheckCircle, FaClipboardList, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const IngotProcurement = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?aluminum,ingots,warehouse';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaCube />
        </div>
        <h1>Ingot Procurement</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Raw Material Quality Control</h2>
          <p>
            The foundation of high-quality aluminum wire rod lies in the procurement of premium raw materials. 
            We strictly source Primary Aluminum Ingots with 99.7% purity (P1020) and high-grade master alloys 
            to ensure the final product meets stringent electrical and mechanical standards.
          </p>
          <div className="feature-image-container">
            <img 
              src="/ingot-procurement.jpg" 
              alt="Aluminum Ingot Storage" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Procurement Standards</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Purity Specifications</h3>
              <p>Strict adherence to 99.7%+ Aluminum purity to guarantee high conductivity (min 61.5% IACS).</p>
            </div>
            <div className="benefit-card">
              <h3>Supplier Vetting</h3>
              <p>Rigorous qualification process for all vendors, ensuring consistent supply chain quality.</p>
            </div>
            <div className="benefit-card">
              <h3>Incoming Inspection</h3>
              <p>Every batch undergoes visual inspection and random spectroscopic verification before acceptance.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Material Types</h2>
          <ul className="specs-list">
            <li><strong>Primary Aluminum Ingots (99.7%):</strong> Base material for EC grade wire rods.</li>
            <li><strong>Master Alloys (Al-B, Al-Ti-B):</strong> Grain refiners added to improve mechanical properties.</li>
            <li><strong>Alloying Elements (Mg, Si):</strong> For producing alloy series wire rods (e.g., 6xxx series).</li>
          </ul>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+ingot+production+process" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Ingot Production</h4>
                <p>How aluminum ingots are made</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+recycling+and+ingot+casting" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Supply Chain & Logistics</h4>
                <p>From bauxite to aluminum ingot</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IngotProcurement;
