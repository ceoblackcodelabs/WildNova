import React from 'react';
import './TourHeader.css';

const TourHeader = ({ title, subtitle, image, duration, price, maxGroup, bestTime }) => {
  return (
    <section className="tour-header">
      <div className="header-image">
        <img src={image} alt={title} />
        <div className="header-overlay"></div>
      </div>
      
      <div className="header-content container">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        
        <div className="tour-meta">
          <div className="meta-item">
            <span className="meta-icon">⏱️</span>
            <div className="meta-text">
              <span className="meta-label">Duration</span>
              <span className="meta-value">{duration}</span>
            </div>
          </div>
          
          <div className="meta-item">
            <span className="meta-icon">💰</span>
            <div className="meta-text">
              <span className="meta-label">Price</span>
              <span className="meta-value">{price}</span>
            </div>
          </div>
          
          <div className="meta-item">
            <span className="meta-icon">👥</span>
            <div className="meta-text">
              <span className="meta-label">Group Size</span>
              <span className="meta-value">{maxGroup}</span>
            </div>
          </div>
          
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <div className="meta-text">
              <span className="meta-label">Best Time</span>
              <span className="meta-value">{bestTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourHeader;