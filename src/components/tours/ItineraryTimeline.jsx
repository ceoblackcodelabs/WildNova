import React from 'react';
import './ItineraryTimeline.css';

const ItineraryTimeline = ({ days }) => {
  return (
    <div className="itinerary-timeline">
      {days.map((day, index) => (
        <div key={index} className="timeline-day">
          <div className="day-marker">
            <span className="day-number">Day {day.day}</span>
            <div className="marker-dot"></div>
          </div>
          <div className="day-content">
            <div className="day-header">
              <h3>{day.title}</h3>
              {day.meals && (
                <div className="day-meals">
                  {day.meals.includes('B') && <span className="meal breakfast">B</span>}
                  {day.meals.includes('L') && <span className="meal lunch">L</span>}
                  {day.meals.includes('D') && <span className="meal dinner">D</span>}
                </div>
              )}
            </div>
            <p className="day-description">{day.description}</p>
            
            {day.highlights && (
              <div className="day-highlights">
                <h4>Highlights:</h4>
                <ul>
                  {day.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {day.accommodation && (
              <div className="day-accommodation">
                <span className="accommodation-label">Accommodation:</span>
                <span className="accommodation-name">{day.accommodation}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItineraryTimeline;