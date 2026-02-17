import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="contact-info">
          <a href="tel:+254700000000" className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+254 700 000 000</span>
          </a>
          <a href="mailto:info@wildnova.com" className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>info@wildnova.com</span>
          </a>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <span>📘</span>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <span>📷</span>
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <span>🐦</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;