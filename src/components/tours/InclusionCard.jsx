import React from 'react';
import './InclusionCard.css';

const InclusionCard = ({ includes, excludes }) => {
  return (
    <div className="inclusion-card">
      <div className="inclusion-section">
        <h3>
          <span className="icon">✅</span>
          What's Included
        </h3>
        <ul>
          {includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="inclusion-section excluded">
        <h3>
          <span className="icon">❌</span>
          What's Not Included
        </h3>
        <ul>
          {excludes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InclusionCard;