import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: '🚙',
      title: 'Luxury Safari Vehicles',
      description: 'Custom 4x4 Land Cruisers with pop-up roofs, Wi-Fi, and refreshments',
      color: 'var(--color-gold)'
    },
    {
      icon: '🏕️',
      title: 'Premium Accommodation',
      description: 'Hand-picked lodges and tented camps in prime wildlife locations',
      color: 'var(--color-terracotta)'
    },
    {
      icon: '👨‍🦰',
      title: 'Expert Safari Guides',
      description: 'Master naturalists and local experts with decades of experience',
      color: 'var(--color-savanna)'
    },
    {
      icon: '🎯',
      title: 'Tailor-Made Itineraries',
      description: 'Fully customizable tours designed around your preferences',
      color: 'var(--color-forest)'
    }
  ];

  return (
    <section className="why-choose-us" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Why Choose Us</span>
          <h2>The WildNova <span className="gradient-text">Difference</span></h2>
          <p className="section-description">
            We don't just show you Africa – we help you experience it. Every detail is crafted 
            to create memories that last a lifetime.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="reason-icon" style={{ background: `linear-gradient(135deg, ${reason.color}20, transparent)` }}>
                <span>{reason.icon}</span>
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        <div className="trust-badges reveal">
          <div className="badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">TripAdvisor Excellence</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🔒</span>
            <span className="badge-text">100% Bonded</span>
          </div>
          <div className="badge">
            <span className="badge-icon">🌿</span>
            <span className="badge-text">Eco-Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;