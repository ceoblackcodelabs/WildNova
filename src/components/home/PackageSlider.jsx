import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PackageSlider.css';

const PackageSlider = () => {
  const sliderRef = useRef(null);
  
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

    const elements = sliderRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const packages = [
    {
      name: 'Day Trips',
      path: '/tour-packages/day-trips',
      image: '/images/package-daytrips.jpg',
      price: 'From $150',
      duration: '1 Day',
      description: 'Perfect for short adventures'
    },
    {
      name: 'Nairobi Tours',
      path: '/tour-packages/nairobi-tours',
      image: '/images/package-nairobi.jpg',
      price: 'From $200',
      duration: '2-3 Days',
      description: 'Explore the green city'
    },
    {
      name: 'Mombasa Tours',
      path: '/tour-packages/mombasa-tours',
      image: '/images/package-mombasa.jpg',
      price: 'From $350',
      duration: '3-4 Days',
      description: 'Coastal paradise'
    },
    {
      name: 'Kenya - Tanzania Safaris',
      path: '/tour-packages/kenya-tanzania-safaris',
      image: '/images/package-kenya-tanzania.jpg',
      price: 'From $1200',
      duration: '7-10 Days',
      description: 'Cross-border adventure'
    },
    {
      name: 'Tanzania Safaris',
      path: '/tour-packages/tanzania-safaris',
      image: '/images/package-tanzania.jpg',
      price: 'From $900',
      duration: '5-7 Days',
      description: 'Serengeti & Ngorongoro'
    }
  ];

  // Duplicate packages for infinite scroll effect
  const duplicatedPackages = [...packages, ...packages, ...packages];

  return (
    <section className="package-slider-section" ref={sliderRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Our Tours</span>
          <h2>Popular <span className="gradient-text">Packages</span></h2>
          <p className="section-description">
            Handcrafted itineraries designed to showcase the best of East Africa
          </p>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          {duplicatedPackages.map((pkg, index) => (
            <Link to={pkg.path} key={index} className="package-card">
              <div className="card-image">
                <img src={pkg.image} alt={pkg.name} />
                <div className="card-badge">
                  <span className="duration">{pkg.duration}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{pkg.name}</h3>
                <p>{pkg.description}</p>
                <div className="card-footer">
                  <span className="price">{pkg.price}</span>
                  <span className="explore-link">
                    Explore
                    <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageSlider;