import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaClipboardCheck, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const ProductQualityAssurance = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?quality,inspection,laboratory';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaClipboardCheck />
        </div>
        <h1>Quality Assurance</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Zero-Defect Commitment</h2>
          <p>
            Our Quality Assurance process integrates data from every stage of production—from ingot melting 
            to final recoiling. We conduct a final visual inspection and verify all automated test results 
            before generating the Quality Certificate. This ensures that only products meeting international 
            standards (ASTM, IEC, EN) leave our facility.
          </p>
          <div className="feature-image-container">
            <img 
              src="/qa-lab.jpg" 
              alt="Quality Assurance Laboratory" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Inspection Points</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Surface Quality</h3>
              <p>100% visual check for scratches, inclusions, or oxidation.</p>
            </div>
            <div className="benefit-card">
              <h3>Dimensional Accuracy</h3>
              <p>Laser gauge verification of diameter and ovality.</p>
            </div>
            <div className="benefit-card">
              <h3>Mechanical Properties</h3>
              <p>Confirmation of UTS and Elongation test results.</p>
            </div>
            <div className="benefit-card">
              <h3>Traceability</h3>
              <p>QR code generation linking coil to specific melt batch.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=aluminum+wire+rod+quality+control" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>QA Procedures</h4>
                <p>Quality control standards in aluminum manufacturing</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=industrial+quality+inspection" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Industrial Inspection</h4>
                <p>Modern techniques for defect detection</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductQualityAssurance;
