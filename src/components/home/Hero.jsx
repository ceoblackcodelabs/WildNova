import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background" ref={heroRef}>
        <div className="hero-overlay"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-content container">
        <span className="hero-subtitle fade-in-up">Welcome to WildNova</span>
        <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
          Discover the <span className="gradient-text">Untamed Beauty</span>
          <br />of East Africa
        </h1>
        <p className="hero-description fade-in-up" style={{ animationDelay: '0.4s' }}>
          Embark on unforgettable safaris through Kenya and Tanzania. 
          Experience wildlife, culture, and landscapes that will take your breath away.
        </p>
        <div className="hero-buttons fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button href="/tour-packages" variant="primary" size="lg">
            Explore Tours
          </Button>
          <Button href="/about" variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Travelers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Custom Tours</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;