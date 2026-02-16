import { useEffect, useRef } from 'react';
import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
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

  const mainServices = [
    {
      icon: '🚙',
      title: 'Professional Tour Guides',
      description: 'Our certified guides are master naturalists with decades of experience. Fluent in multiple languages and passionate about sharing their knowledge of wildlife, culture, and conservation.',
      features: ['Certified by KPSGA', 'First-aid trained', 'Local experts', 'Multi-lingual'],
      image: '/images/tour-guide-service.jpg',
      color: '#C6A43F'
    },
    {
      icon: '🚗',
      title: 'Luxury Safari Transport',
      description: 'Travel in comfort and style with our fleet of custom 4x4 safari vehicles. Designed for optimal game viewing with pop-up roofs, window seats for everyone, and refreshments on board.',
      features: ['Pop-up roofs', 'AC & Wi-Fi', 'Window seats', 'Refreshments'],
      image: '/images/transport-service.jpg',
      color: '#B75D4A'
    },
    {
      icon: '🏕️',
      title: 'Premium Accommodation',
      description: 'We partner with the finest lodges and tented camps in East Africa. Each property is carefully selected for its location, service, and commitment to sustainable tourism.',
      features: ['Hand-picked lodges', 'Eco-certified', 'Prime locations', 'Luxury amenities'],
      image: '/images/accommodation-service.jpg',
      color: '#2C5530'
    },
    {
      icon: '✈️',
      title: 'Custom Tour Planning',
      description: 'Every traveler is unique, and so should be their safari. Our experts work with you to create a personalized itinerary that matches your interests, budget, and schedule.',
      features: ['Personalized', 'Flexible dates', 'Budget options', '24/7 support'],
      image: '/images/custom-service.jpg',
      color: '#8B7355'
    }
  ];

  const additionalServices = [
    {
      icon: '📸',
      title: 'Photography Safaris',
      description: 'Specialized tours for photography enthusiasts with expert guidance'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Adventures',
      description: 'Kid-friendly activities and itineraries for unforgettable family safaris'
    },
    {
      icon: '💒',
      title: 'Honeymoon Packages',
      description: 'Romantic getaways with luxury accommodations and special touches'
    },
    {
      icon: '🦓',
      title: 'Migration Tracking',
      description: 'Follow the Great Migration with expert predictions and prime positioning'
    },
    {
      icon: '🌿',
      title: 'Conservation Tours',
      description: 'Behind-the-scenes experiences with conservation projects'
    },
    {
      icon: '🏃',
      title: 'Walking Safaris',
      description: 'Guided bush walks with experienced rangers for a ground-level perspective'
    }
  ];

  return (
    <Layout>
      <div className="services-page" ref={sectionRef}>
        {/* Hero Section with Image */}
        <section className="services-hero">
          <div className="hero-image">
            <img src="/images/services-hero.jpg" alt="Safari Services" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content container">
            <h1 className="reveal">Our <span>Services</span></h1>
            <p className="reveal" style={{ animationDelay: '0.2s' }}>
              Comprehensive safari solutions designed for an unforgettable African experience
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="main-services">
          <div className="container">
            <h2 className="section-title reveal">What We Offer</h2>
            <p className="section-subtitle reveal">
              Every detail carefully crafted to exceed your expectations
            </p>

            <div className="services-list">
              {mainServices.map((service, index) => (
                <div key={index} className={`service-item reveal ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <div className="service-content">
                    <span className="service-icon" style={{ background: `${service.color}20` }}>
                      {service.icon}
                    </span>
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="image-overlay" style={{ background: `linear-gradient(135deg, ${service.color}40, transparent)` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="why-services">
          <div className="container">
            <h2 className="section-title reveal">The WildNova Difference</h2>
            
            <div className="benefits-grid">
              <div className="benefit-card reveal">
                <div className="benefit-icon">⭐</div>
                <h4>15+ Years Experience</h4>
                <p>Decades of expertise in East African safaris</p>
              </div>
              <div className="benefit-card reveal" style={{ animationDelay: '0.1s' }}>
                <div className="benefit-icon">🦁</div>
                <h4>100% Wildlife Sightings</h4>
                <p>Guaranteed Big Five encounters</p>
              </div>
              <div className="benefit-card reveal" style={{ animationDelay: '0.2s' }}>
                <div className="benefit-icon">🌍</div>
                <h4>Sustainable Tourism</h4>
                <p>Eco-certified operations</p>
              </div>
              <div className="benefit-card reveal" style={{ animationDelay: '0.3s' }}>
                <div className="benefit-icon">👥</div>
                <h4>Small Groups</h4>
                <p>Intimate experiences, max 6 per vehicle</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="additional-services">
          <div className="container">
            <h2 className="section-title reveal">Specialized Experiences</h2>
            <p className="section-subtitle reveal">
              Tailored options to make your safari truly unique
            </p>

            <div className="services-grid">
              {additionalServices.map((service, index) => (
                <div key={index} className="service-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/contact" className="card-link">
                    Inquire <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title reveal">How It Works</h2>
            
            <div className="process-steps">
              <div className="step reveal">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Consultation</h3>
                  <p>Tell us your dreams, budget, and schedule</p>
                </div>
              </div>
              <div className="step reveal" style={{ animationDelay: '0.1s' }}>
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Custom Design</h3>
                  <p>We craft your perfect itinerary</p>
                </div>
              </div>
              <div className="step reveal" style={{ animationDelay: '0.2s' }}>
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Booking</h3>
                  <p>Secure your dates and accommodations</p>
                </div>
              </div>
              <div className="step reveal" style={{ animationDelay: '0.3s' }}>
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Safari</h3>
                  <p>Experience the adventure of a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <div className="cta-content reveal">
              <h2>Ready to Start Your Journey?</h2>
              <p>Let our experts design the perfect safari for you</p>
              <div className="cta-buttons">
                <Link to="/tour-packages" className="cta-btn primary">View Packages</Link>
                <Link to="/contact" className="cta-btn secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;