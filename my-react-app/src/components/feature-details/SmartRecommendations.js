import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagic, FaArrowLeft, FaYoutube } from 'react-icons/fa';
import '../FeaturesPage.css';

const SmartRecommendations = () => {
  const fallbackImg = 'https://source.unsplash.com/featured/1200x600?analytics,dashboard,manufacturing';
  return (
    <div className="feature-detail-container">
      <div className="feature-detail-header">
        <Link to="/features" className="back-button">
          <FaArrowLeft /> Back to Features
        </Link>
        <div className="feature-detail-icon">
          <FaMagic />
        </div>
        <h1>Smart Recommendations</h1>
      </div>
      
      <div className="feature-detail-content">
        <section className="feature-detail-section">
          <h2>Data-Driven Suggestions</h2>
          <p>
            Our Smart Recommendations system analyzes your production history and current parameters 
            to provide instant, actionable suggestions that enhance your manufacturing process. 
            By leveraging advanced algorithms, we identify optimal parameter combinations that 
            lead to superior wire rod properties.
          </p>
          <div className="feature-image-container">
            <img 
              src="/smart-recommendations.jpg" 
              alt="Smart Recommendations Dashboard" 
              className="feature-image"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackImg; }}
            />
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Efficiency Boost</h3>
              <p>Reduce trial-and-error cycles by up to 70% with intelligent parameter suggestions.</p>
            </div>
            <div className="benefit-card">
              <h3>Quality Improvement</h3>
              <p>Achieve consistent product quality with optimized production settings.</p>
            </div>
            <div className="benefit-card">
              <h3>Cost Reduction</h3>
              <p>Minimize material waste and energy consumption through optimized processes.</p>
            </div>
          </div>
        </section>
        
        <section className="feature-detail-section">
          <h2>Recommendation Types</h2>
          <div className="recommendation-types">
            <div className="recommendation-type">
              <h3>Parameter Adjustments</h3>
              <p>Fine-tune your casting parameters for optimal results based on historical success patterns.</p>
            </div>
            <div className="recommendation-type">
              <h3>Process Optimizations</h3>
              <p>Receive suggestions for workflow improvements that enhance efficiency and quality.</p>
            </div>
            <div className="recommendation-type">
              <h3>Predictive Maintenance</h3>
              <p>Get alerts about potential issues before they affect production quality.</p>
            </div>
          </div>
        </section>

        <section className="feature-detail-section">
          <h2>Video Resources</h2>
          <div className="video-resources-container">
            <a 
              href="https://www.youtube.com/results?search_query=smart+manufacturing+process+control" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Smart Manufacturing Control</h4>
                <p>Watch videos on process control systems</p>
              </div>
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=predictive+maintenance+manufacturing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-resource-card"
            >
              <div className="video-icon-large">
                <FaYoutube />
              </div>
              <div className="video-info">
                <h4>Predictive Maintenance</h4>
                <p>Learn about AI-driven maintenance</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmartRecommendations;
