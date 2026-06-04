import React, { useState } from 'react';
import { 
  FaRobot, 
  FaMagic, 
  FaLock, 
  FaChartLine, 
  FaSearch, 
  FaCube, 
  FaFire, 
  FaThermometerHalf, 
  FaFlask, 
  FaIndustry, 
  FaCogs, 
  FaTools, 
  FaBolt, 
  FaCircleNotch, 
  FaClipboardCheck, 
  FaTruck,
  FaArrowRight,
  FaSignInAlt,
  FaPlay,
  FaYoutube
} from 'react-icons/fa';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './FeaturesPage.css';

const coreFeatures = [
  {
    id: 'ai-analysis',
    icon: <FaRobot />,
    title: 'AI-Based Analysis',
    desc: 'Utilizes advanced Neural Networks to predict mechanical properties (UTS, Elongation) based on casting parameters.',
    specs: ['98% Prediction Accuracy', 'Real-time Inference', 'Historical Data Training'],
    path: '/features/ai-analysis',
    category: 'Technology',
    videoUrl: 'https://www.youtube.com/results?search_query=ai+in+metallurgy+analysis'
  },
  {
    id: 'smart-rec',
    icon: <FaMagic />,
    title: 'Smart Recommendations',
    desc: 'Auto-adjusts cooling rates and rolling speeds to maintain optimal alloy microstructure.',
    specs: ['Automated Setpoints', 'Energy Efficiency', 'Defect Minimization'],
    path: '/features/smart-recommendations',
    category: 'Technology',
    videoUrl: 'https://www.youtube.com/results?search_query=smart+manufacturing+process+control'
  },
  {
    id: 'secure-access',
    icon: <FaLock />,
    title: 'Secure Access',
    desc: 'Role-based access control (RBAC) ensuring only authorized metallurgists can alter process parameters.',
    specs: ['2FA Support', 'Audit Logs', 'Encrypted Data'],
    path: '/features/secure-access',
    category: 'Security'
  },
  {
    id: 'live-monitoring',
    icon: <FaChartLine />,
    title: 'Live Monitoring',
    desc: 'Dashboard for tracking furnace temperatures, mill load, and quenching flow rates in real-time.',
    specs: ['IoT Integration', 'Alert System', 'Visual Graphs'],
    path: '/features/live-monitoring',
    category: 'Operations',
    videoUrl: 'https://www.youtube.com/results?search_query=industrial+iot+dashboard+monitoring'
  },
  {
    id: 'precision-mfg',
    icon: <MdPrecisionManufacturing />,
    title: 'Precision Manufacturing',
    desc: 'Closed-loop control systems ensuring wire rod diameter consistency within ±0.05mm.',
    specs: ['Laser Gauging', 'Feedback Loops', 'Statistical Process Control'],
    path: '/features/precision-manufacturing',
    category: 'Operations',
    videoUrl: 'https://www.youtube.com/results?search_query=laser+gauge+wire+diameter+control'
  },
];

const processSteps = [
  {
    id: 'ingot-procurement',
    icon: <FaCube />,
    title: 'Ingot Procurement',
    desc: 'Sourcing high-purity Aluminum (99.7%+) and master alloys (Al-Mg, Al-Si) for production.',
    specs: ['Purity Check: 99.7%+', 'Spectroscopy Verified', 'Inventory Management'],
    path: '/process/ingot-procurement',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+ingot+production'
  },
  {
    id: 'melting',
    icon: <FaFire />,
    title: 'Melting Process',
    desc: 'Melting aluminum ingots in reverberatory furnaces at 700-750°C with fluxing agents.',
    specs: ['Temp: 720°C ± 10°C', 'Gas Fired / Induction', 'Dross Removal'],
    path: '/process/melting',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+melting+furnace+operation'
  },
  {
    id: 'holding',
    icon: <FaThermometerHalf />,
    title: 'Holding Furnace',
    desc: 'Maintaining molten metal temperature and allowing inclusions to settle before casting.',
    specs: ['Capacity: 20T', 'Homogenization', 'Temp Stability'],
    path: '/process/holding',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+holding+furnace'
  },
  {
    id: 'chemical-analysis',
    icon: <FaFlask />,
    title: 'Chemical Analysis',
    desc: 'OES (Optical Emission Spectroscopy) to ensure alloy composition meets AA standards.',
    specs: ['Fe: 0.15-0.25%', 'Si: 0.06-0.10%', 'Ti/V/Ga Trace Analysis'],
    path: '/process/chemical-analysis',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=optical+emission+spectroscopy+aluminum'
  },
  {
    id: 'casting',
    icon: <FaIndustry />,
    title: 'Continuous Casting',
    desc: 'Properzi casting wheel solidifies molten metal into a trapezoidal bar at rapid cooling rates.',
    specs: ['Wheel Speed: 12m/min', 'Water Cooling', 'Grain Structure Control'],
    path: '/process/casting',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=properzi+continuous+casting+aluminum'
  },
  {
    id: 'cast-bar-entry',
    icon: <FaSignInAlt />,
    title: 'Cast Bar Entry',
    desc: 'Guiding the hot cast bar (approx 500°C) into the rolling mill without tension or kinks.',
    specs: ['Shear Cutting', 'Temp Check', 'Guide Rollers'],
    path: '/process/cast-bar-entry',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=continuous+casting+rolling+mill+entry'
  },
  {
    id: 'rolling-mill',
    icon: <FaCogs />,
    title: 'Rolling Mill',
    desc: '13-stand continuous rolling mill reduces bar cross-section to 9.5mm wire rod.',
    specs: ['Reduction Ratio: 85%', 'Emulsion Cooling', 'Exit Temp: 150°C'],
    path: '/process/three-roll-mill',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+wire+rod+rolling+mill'
  },
  {
    id: 'mechanical-analysis',
    icon: <FaTools />,
    title: 'Mechanical Analysis',
    desc: 'Tensile testing to determine Ultimate Tensile Strength (UTS) and % Elongation.',
    specs: ['UTS: 110-130 MPa', 'Elongation: >10%', 'Universal Testing Machine'],
    path: '/process/mechanical-analysis',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=tensile+testing+aluminum+wire'
  },
  {
    id: 'electrical-analysis',
    icon: <FaBolt />,
    title: 'Electrical Analysis',
    desc: 'Measuring electrical conductivity (% IACS) using Kelvin bridge method.',
    specs: ['Conductivity: >61.5%', 'Resistivity Check', 'Bridge Method'],
    path: '/process/electrical-analysis',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=conductivity+testing+aluminum'
  },
  {
    id: 'recoiling',
    icon: <FaCircleNotch />,
    title: 'Recoiling',
    desc: 'Automatic coilers wind the finished wire rod into dense, shippable coils.',
    specs: ['Coil Weight: 2T', 'Strapping', 'Tagging'],
    path: '/process/recoiling',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=wire+rod+coiler+machine'
  },
  {
    id: 'quality-assurance',
    icon: <FaClipboardCheck />,
    title: 'Quality Assurance',
    desc: 'Final visual inspection and certification generation for the batch.',
    specs: ['Surface Finish', 'Diameter Check', 'ISO Certification'],
    path: '/process/quality-assurance',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+wire+rod+quality+control'
  },
  {
    id: 'shipping',
    icon: <FaTruck />,
    title: 'Shipping',
    desc: 'Logistics management for delivering aluminum wire rod coils to downstream manufacturers.',
    specs: ['Barcode Tracking', 'Truck Loading', 'Dispatch'],
    path: '/process/shipping',
    category: 'Process',
    videoUrl: 'https://www.youtube.com/results?search_query=aluminum+wire+coil+logistics'
  }
];

const allItems = [...coreFeatures, ...processSteps];

const FeatureCard = ({ feature, onClick, style }) => (
  <div className="feature-card" onClick={onClick} style={style}>
    <div className="feature-card-header">
      <div className={`feature-icon ${feature.category === 'Process' ? 'process-icon' : 'tech-icon'}`}>
        {feature.icon}
      </div>
      <span className={`feature-category-tag ${feature.category.toLowerCase()}`}>{feature.category}</span>
    </div>
    
    <div className="feature-content">
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.desc}</p>
      
      {feature.specs && (
        <ul className="feature-specs">
          {feature.specs.map((spec, idx) => (
            <li key={idx}>{spec}</li>
          ))}
        </ul>
      )}
    </div>

    <div className="feature-card-footer">
      <button className="action-button learn-more">
        <span>Details</span> <FaArrowRight />
      </button>
      {feature.videoUrl && (
        <button 
          className="action-button watch-video"
          onClick={(e) => {
            e.stopPropagation();
            window.open(feature.videoUrl, '_blank');
          }}
        >
          <FaYoutube className="youtube-icon" /> <span>Watch</span>
        </button>
      )}
    </div>
  </div>
);

const Features = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const handleCardClick = (path) => {
    navigate(path);
  };

  const filterItems = (items) => {
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderContent = () => {
    // If search is active, show flat list
    if (searchTerm) {
      const filtered = filterItems(allItems);
      return (
        <div className="features-grid">
          {filtered.length > 0 ? (
            filtered.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                onClick={() => handleCardClick(feature.path)} 
                style={{ animationDelay: `${index * 0.05}s` }}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No features found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      );
    }

    // If specific tab is active
    if (activeTab === 'core') {
      return (
        <div className="features-grid">
          {coreFeatures.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              onClick={() => handleCardClick(feature.path)} 
            />
          ))}
        </div>
      );
    }

    if (activeTab === 'process') {
      return (
        <div className="features-grid">
          {processSteps.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              onClick={() => handleCardClick(feature.path)} 
            />
          ))}
        </div>
      );
    }

    // Default 'All' view with sections
    return (
      <div className="features-sections">
        <section className="feature-section">
          <h3 className="section-title"><FaRobot /> Smart Technologies</h3>
          <div className="features-grid">
            {coreFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                onClick={() => handleCardClick(feature.path)} 
              />
            ))}
          </div>
        </section>

        <section className="feature-section">
          <h3 className="section-title"><FaIndustry /> Manufacturing Lifecycle</h3>
          <div className="features-grid">
            {processSteps.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                onClick={() => handleCardClick(feature.path)} 
              />
            ))}
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="features-container">
      <div className="features-header">
        <h2 className="features-title">System Capabilities</h2>
        <p className="features-subtitle">
          Advanced metallurgy analytics and end-to-end manufacturing process control.
        </p>
        
        <div className="features-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search features, specs, or process steps..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="tabs-container">
            <button 
              className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              Technology Stack
            </button>
            <button 
              className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
              onClick={() => setActiveTab('process')}
            >
              Manufacturing Process
            </button>
          </div>
        </div>
      </div>

      <div className="features-content-wrapper">
        {renderContent()}
      </div>
    </div>
  );
};

export default Features;
