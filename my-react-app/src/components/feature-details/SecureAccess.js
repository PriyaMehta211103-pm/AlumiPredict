import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaArrowLeft, FaShieldAlt, FaUserLock, FaHistory, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const SecureAccess = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?cybersecurity,lock,shield';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaLock />
        </div>
        <h1>Secure Access</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Enterprise-Grade Security</h2>
          <p>
            Our Secure Access feature implements top-notch authentication and authorization systems 
            to ensure your production data remains protected at all times. With industry-standard 
            encryption and multi-factor authentication, you can trust that your valuable manufacturing 
            insights are safe from unauthorized access.
          </p>
          <div className="feature-image-container">
            <img 
              src="/secure-access.jpg" 
              alt="Security Dashboard" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Security Features</h2>
          <div className="security-features">
            <div className="security-feature">
              <div className="security-icon"><FaShieldAlt /></div>
              <h3>End-to-End Encryption</h3>
              <p>All data is encrypted in transit and at rest using AES-256 encryption.</p>
            </div>
            <div className="security-feature">
              <div className="security-icon"><FaUserLock /></div>
              <h3>Role-Based Access Control</h3>
              <p>Granular permissions ensure users only access data they're authorized to see.</p>
            </div>
            <div className="security-feature">
              <div className="security-icon"><FaHistory /></div>
              <h3>Comprehensive Audit Logs</h3>
              <p>Track all system access and changes with detailed audit trails.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Compliance & Standards</h2>
          <p>
            Our security infrastructure is designed to meet or exceed industry standards and compliance requirements:
          </p>
          <ul className="compliance-list">
            <li>ISO 27001 Information Security Management</li>
            <li>GDPR Compliance for European Data Protection</li>
            <li>Regular Security Audits and Penetration Testing</li>
            <li>99.9% Uptime SLA with Disaster Recovery</li>
          </ul>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=industrial+cybersecurity+manufacturing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Industrial Cybersecurity</h4>
                <p>Protecting manufacturing systems</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=role+based+access+control+explained" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>RBAC Explained</h4>
                <p>Understanding access control models</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecureAccess;
