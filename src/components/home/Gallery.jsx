import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
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

  const galleryImages = [
    {
      url: '/images/gallery-1.jpg',
      title: 'Elephants at Amboseli',
      location: 'Amboseli, Kenya'
    },
    {
      url: '/images/gallery-2.jpg',
      title: 'Masai Mara Sunset',
      location: 'Masai Mara, Kenya'
    },
    {
      url: '/images/gallery-3.jpg',
      title: 'Zebras Migration',
      location: 'Serengeti, Tanzania'
    },
    {
      url: '/images/gallery-4.jpg',
      title: 'Mount Kilimanjaro',
      location: 'Tanzania'
    },
    {
      url: '/images/gallery-5.jpg',
      title: 'Coastal Paradise',
      location: 'Mombasa, Kenya'
    },
    {
      url: '/images/gallery-6.jpg',
      title: 'Leopard Sightings',
      location: 'Maasai Mara, Kenya'
    }
  ];

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Our Gallery</span>
          <h2>Moments <span className="gradient-text">Captured</span></h2>
          <p className="section-description">
            Glimpses of the extraordinary moments and breathtaking landscapes that await you
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.url} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{image.title}</h3>
                    <p>{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;