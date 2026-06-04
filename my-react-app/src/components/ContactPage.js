import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaClock,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './ContactPage.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Let's Build Something Together</h1>
          <p>Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-form-section">
            <div className="form-card">
              <h2>Send us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon"><FaPaperPlane /></div>
                  <h3>Thank you for your message!</h3>
                  <p>We've received your inquiry and will get back to you shortly.</p>
                  <button 
                    className="new-message-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {error && <div className="error-alert">{error}</div>}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <span>Send Message</span>
                    <FaPaperPlane className="btn-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="contact-info-section">
            <div className="info-cards-container">
              <div className="contact-info-card">
                <div className="card-icon"><FaEnvelope /></div>
                <div className="card-details">
                  <h3>Email Us</h3>
                  <p>aluipredict@alumi.com</p>
                  <span>We'll respond within 24 hours.</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="card-icon"><FaPhone /></div>
                <div className="card-details">
                  <h3>Call Us</h3>
                  <p>+91 99999 23456</p>
                  <span>Mon-Fri from 9am to 6pm.</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="card-icon"><FaMapMarkerAlt /></div>
                <div className="card-details">
                  <h3>Visit Us</h3>
                  <p>JMIT, Radaur</p>
                  <span>Haryana, India - 135133</span>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="card-icon"><FaClock /></div>
                <div className="card-details">
                  <h3>Working Hours</h3>
                  <p>9:00 AM - 6:00 PM</p>
                  <span>Monday to Saturday</span>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Connect with us</h3>
              <div className="social-links">
                <a href="#" className="social-link linkedin"><FaLinkedin /></a>
                <a href="#" className="social-link twitter"><FaTwitter /></a>
                <a href="#" className="social-link github"><FaGithub /></a>
                <a href="#" className="social-link facebook"><FaFacebook /></a>
                <a href="#" className="social-link instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <FAQItem 
              question="What is the response time?" 
              answer="We typically respond to all inquiries within 24 business hours. Our support team is available Monday through Friday." 
            />
            <FAQItem 
              question="Do you offer customized solutions?" 
              answer="Yes, we specialize in tailoring our metallurgy analytics and manufacturing process controls to meet specific industrial needs." 
            />
            <FAQItem 
              question="Can I request a live demo?" 
              answer="Absolutely! Use the contact form to request a demonstration, and our technical team will schedule a session with you." 
            />
            <FAQItem 
              question="Where are you located?" 
              answer="Our main office is located at JMIT, Radaur, but we serve clients and partners globally through our digital platform." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;