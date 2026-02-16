import { useEffect, useRef } from 'react';
import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';
import './TourPackage.css';

const TourPackage = () => {
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

  const tours = [
    { 
      name: 'Day Trips', 
      path: '/tour-packages/day-trips', 
      image: '/images/package-daytrips.jpg', 
      desc: 'Perfect for short adventures',
      duration: '1 Day',
      price: 'From $150',
      highlights: ['Nairobi National Park', 'Giraffe Center', 'Karen Blixen'],
      color: '#C6A43F'
    },
    { 
      name: 'Nairobi Tours', 
      path: '/tour-packages/nairobi-tours', 
      image: '/images/package-nairobi.jpg', 
      desc: 'Explore the green city',
      duration: '2-3 Days',
      price: 'From $200',
      highlights: ['Elephant Orphanage', 'Bomas of Kenya', 'City Tour'],
      color: '#B75D4A'
    },
    { 
      name: 'Mombasa Tours', 
      path: '/tour-packages/mombasa-tours', 
      image: '/images/package-mombasa.jpg', 
      desc: 'Coastal paradise',
      duration: '3-4 Days',
      price: 'From $350',
      highlights: ['Fort Jesus', 'Haller Park', 'Wasini Island'],
      color: '#2C5530'
    },
    { 
      name: 'Kenya - Tanzania Safaris', 
      path: '/tour-packages/kenya-tanzania-safaris', 
      image: '/images/package-kenya-tanzania.jpg', 
      desc: 'Cross-border adventure',
      duration: '7-10 Days',
      price: 'From $1200',
      highlights: ['Amboseli', 'Serengeti', 'Ngorongoro'],
      color: '#8B7355'
    },
    { 
      name: 'Tanzania Safaris', 
      path: '/tour-packages/tanzania-safaris', 
      image: '/images/package-tanzania.jpg', 
      desc: 'Serengeti & Ngorongoro',
      duration: '5-7 Days',
      price: 'From $900',
      highlights: ['Serengeti', 'Ngorongoro', 'Lake Manyara'],
      color: '#4A6FA5'
    }
  ];

  const categories = [
    { name: 'All Tours', active: true },
    { name: 'Day Trips', active: false },
    { name: 'Kenya', active: false },
    { name: 'Tanzania', active: false },
    { name: 'Beach', active: false }
  ];

  return (
    <Layout>
      <div className="tour-packages-page" ref={sectionRef}>
        {/* Hero Section */}
        <section className="packages-hero">
          <div className="hero-image">
            <img src="/images/tours-hero.jpg" alt="Safari Tours" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content container">
            <h1 className="reveal">Our <span>Safari Packages</span></h1>
            <p className="reveal" style={{ animationDelay: '0.2s' }}>
              Curated journeys through East Africa's most spectacular landscapes
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="filter-section">
          <div className="container">
            <div className="categories reveal">
              {categories.map((cat, index) => (
                <button 
                  key={index} 
                  className={`category-btn ${cat.active ? 'active' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="tours-section">
          <div className="container">
            <div className="tours-grid">
              {tours.map((tour, index) => (
                <Link 
                  to={tour.path} 
                  key={index} 
                  className="tour-card reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <img src={tour.image} alt={tour.name} />
                    <div className="card-badge" style={{ background: tour.color }}>
                      {tour.duration}
                    </div>
                    <div className="card-overlay"></div>
                  </div>
                  
                  <div className="card-content">
                    <h3>{tour.name}</h3>
                    <p className="card-description">{tour.desc}</p>
                    
                    <div className="card-highlights">
                      {tour.highlights.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="highlight">
                          <span className="dot" style={{ background: tour.color }}></span>
                          {item}
                        </span>
                      ))}
                    </div>
                    
                    <div className="card-footer">
                      <span className="price">{tour.price}</span>
                      <span className="view-details" style={{ color: tour.color }}>
                        View Details 
                        <span className="arrow">→</span>
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Elements */}
                  <div className="card-shine"></div>
                  <div className="card-border" style={{ borderColor: tour.color }}></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="why-book">
          <div className="container">
            <h2 className="section-title reveal">Why Book With Us</h2>
            
            <div className="benefits-grid">
              <div className="benefit reveal">
                <div className="benefit-icon">🔒</div>
                <h4>Best Price Guarantee</h4>
                <p>We match any legitimate price</p>
              </div>
              <div className="benefit reveal" style={{ animationDelay: '0.1s' }}>
                <div className="benefit-icon">🔄</div>
                <h4>Free Cancellation</h4>
                <p>Up to 30 days before safari</p>
              </div>
              <div className="benefit reveal" style={{ animationDelay: '0.2s' }}>
                <div className="benefit-icon">💳</div>
                <h4>Secure Payments</h4>
                <p>Multiple payment options</p>
              </div>
              <div className="benefit reveal" style={{ animationDelay: '0.3s' }}>
                <div className="benefit-icon">🌟</div>
                <h4>24/7 Support</h4>
                <p>Always here to help</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="packages-cta">
          <div className="container">
            <div className="cta-content reveal">
              <h2>Can't Decide Which Package?</h2>
              <p>Let our safari experts help you choose the perfect adventure</p>
              <Link to="/contact" className="cta-btn">
                Talk to an Expert
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TourPackage;