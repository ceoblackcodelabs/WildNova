import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United Kingdom',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'The safari of a lifetime! WildNova took care of every detail. We saw the Big Five and stayed in incredible lodges. Our guide Joseph was knowledgeable and passionate about conservation.',
      tour: 'Kenya - Tanzania Safari'
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'From the moment we landed to our departure, everything was perfect. The migration crossing in Masai Mara was the highlight. I cannot recommend WildNova enough!',
      tour: 'Kenya Safari'
    },
    {
      name: 'Emma Williams',
      location: 'Australia',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'Our family trip to Mombasa was magical. The beach resort was beautiful and the safari day trip was perfectly organized. The kids still talk about feeding the giraffes!',
      tour: 'Mombasa Tours'
    }
  ];

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Testimonials</span>
          <h2>What Our <span className="gradient-text">Travelers Say</span></h2>
        </div>

        <div className="testimonials-grid reveal">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-icon">"</div>
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-meta">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.location}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <span className="tour-name">{testimonial.tour}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;