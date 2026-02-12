import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import './AboutSection.css';

const AboutSection = () => {
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

  const coreValues = [
    {
      icon: '🌍',
      title: 'Sustainable Tourism',
      description: 'Committed to preserving Africa\'s natural heritage'
    },
    {
      icon: '🤝',
      title: 'Community First',
      description: 'Supporting local communities and economies'
    },
    {
      icon: '🦁',
      title: 'Wildlife Conservation',
      description: 'Active partners in conservation efforts'
    },
    {
      icon: '✨',
      title: 'Authentic Experiences',
      description: 'Genuine encounters with nature and culture'
    }
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-subtitle">Our Story</span>
            <h2>Creating Unforgettable <span className="gradient-text">African Adventures</span></h2>
            <p className="about-description">
              WildNova was born from a deep passion for Africa's wild landscapes and a desire to share 
              their magic with the world. For over 15 years, we've been crafting exceptional safari 
              experiences that go beyond the ordinary.
            </p>
            
            <div className="core-values">
              {coreValues.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button href="/about" variant="primary" className="about-btn">
              Discover Our Story
            </Button>
          </div>
          
          <div className="about-image reveal" style={{ animationDelay: '0.2s' }}>
            <div className="image-grid">
              <div className="image-main">
                <img src="/images/about-main.jpg" alt="African Safari" />
                <div className="image-overlay"></div>
              </div>
              <div className="image-secondary">
                <img src="/images/about-secondary-1.jpg" alt="Wildlife" />
                <img src="/images/about-secondary-2.jpg" alt="Landscape" />
              </div>
            </div>
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;