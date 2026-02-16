import React from 'react';
import { Link } from 'react-router-dom';
import './BookingCTA.css';

const BookingCTA = ({ price }) => {
  return (
    <section className="booking-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-info">
            <h2>Ready for This Adventure?</h2>
            <p>Book now and secure your spot on this unforgettable journey</p>
            <div className="price-tag">
              <span className="price-label">Starting from</span>
              <span className="price-value">{price}</span>
              <span className="price-note">per person</span>
            </div>
          </div>
          
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Book Now
              <span className="arrow">→</span>
            </Link>
            <Link to="/tour-packages" className="btn-secondary">
              View All Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;