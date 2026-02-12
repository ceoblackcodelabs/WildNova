import { useEffect, useRef } from 'react';
import Layout from '../components/layouts/Layout';
import Button from '../components/ui/Button';
import './About.css';

const About = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2008',
      title: 'The Beginning',
      description: 'WildNova was founded by passionate safari guides with a vision to share Africa\'s wild beauty.',
      icon: '🌱'
    },
    {
      year: '2012',
      title: 'Conservation Commitment',
      description: 'Launched our wildlife conservation fund, supporting anti-poaching efforts across Kenya.',
      icon: '🦁'
    },
    {
      year: '2015',
      title: 'Regional Expansion',
      description: 'Extended operations to Tanzania, offering Serengeti and Ngorongoro safaris.',
      icon: '🗺️'
    },
    {
      year: '2018',
      title: 'Eco-Certification',
      description: 'Became the first East African operator to achieve Gold Eco-Rating.',
      icon: '🌿'
    },
    {
      year: '2021',
      title: 'Community Impact',
      description: 'Empowered 500+ local families through our community tourism initiative.',
      icon: '🤝'
    },
    {
      year: '2024',
      title: 'Premium Excellence',
      description: 'Celebrating 16 years of unforgettable safari experiences.',
      icon: '✨'
    }
  ];

  const team = [
    {
      name: 'Joseph Ole Tumpes',
      role: 'Founder & Lead Guide',
      bio: 'Maasai warrior turned master naturalist with 25+ years of safari experience.',
      image: '/images/team-joseph.jpg',
      expertise: 'Big Cat Behavior'
    },
    {
      name: 'Sarah Mwikali',
      role: 'Conservation Director',
      bio: 'Wildlife biologist leading our conservation partnerships across East Africa.',
      image: '/images/team-sarah.jpg',
      expertise: 'Ecosystem Management'
    },
    {
      name: 'David Kimani',
      role: 'Operations Manager',
      bio: 'Logistics expert ensuring every safari runs flawlessly from start to finish.',
      image: '/images/team-david.jpg',
      expertise: 'Safari Logistics'
    },
    {
      name: 'Elizabeth Wanjiku',
      role: 'Cultural Experience Curator',
      bio: 'Connecting travelers with authentic Maasai and Swahili cultural experiences.',
      image: '/images/team-elizabeth.jpg',
      expertise: 'Cultural Tourism'
    }
  ];

  const impact = [
    {
      stat: '15,000+',
      label: 'Happy Travelers',
      icon: '🧭'
    },
    {
      stat: '5,000+',
      label: 'Wildlife Sightings',
      icon: '🦒'
    },
    {
      stat: '500+',
      label: 'Local Jobs Created',
      icon: '👥'
    },
    {
      stat: '50,000+',
      label: 'Acres Protected',
      icon: '🌳'
    }
  ];

  const partners = [
    { name: 'Kenya Wildlife Service', logo: '/images/partner-kws.png' },
    { name: 'Tanzania National Parks', logo: '/images/partner-tanapa.png' },
    { name: 'WWF', logo: '/images/partner-wwf.png' },
    { name: 'EcoTourism Kenya', logo: '/images/partner-ecotourism.png' },
    { name: 'The Safari Guide Association', logo: '/images/partner-saga.png' },
    { name: 'Sustainable Travel International', logo: '/images/partner-sti.png' }
  ];

  return (
    <Layout>
      <div className="about-page" ref={sectionRef}>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-background">
            <div className="about-hero-overlay"></div>
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
          <div className="container">
            <div className="about-hero-content">
              <span className="hero-badge reveal">Our Story</span>
              <h1 className="reveal" style={{ animationDelay: '0.2s' }}>
                We Don't Just Show You Africa,
                <br />
                <span className="gradient-text">We Share Our Home</span>
              </h1>
              <p className="hero-description reveal" style={{ animationDelay: '0.4s' }}>
                For 16 years, WildNova has been crafting authentic safari experiences 
                that connect travelers with the soul of East Africa. Led by local experts, 
                rooted in conservation, and driven by passion.
              </p>
              <div className="hero-stats reveal" style={{ animationDelay: '0.6s' }}>
                {impact.map((item, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{item.stat}</span>
                    <span className="stat-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Discover Our Journey</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="philosophy-section">
          <div className="container">
            <div className="philosophy-grid">
              <div className="philosophy-content reveal">
                <span className="section-subtitle">Our Philosophy</span>
                <h2>Beyond <span className="gradient-text">Safari</span></h2>
                <p className="philosophy-text">
                  At WildNova, we believe true safari isn't just about ticking animals off a checklist. 
                  It's about feeling the red dust of the Maasai Mara on your skin, hearing the crackle 
                  of a campfire under a blanket of stars, and understanding the intricate dance of 
                  predator and prey that plays out across the savanna.
                </p>
                <p className="philosophy-text">
                  We create experiences that linger in your memory long after you've returned home. 
                  Every itinerary is a carefully crafted narrative, blending thrilling wildlife encounters 
                  with moments of quiet reflection, cultural connection, and genuine hospitality.
                </p>
                <div className="philosophy-quote">
                  <div className="quote-icon">"</div>
                  <p>The wild is not a place to be conquered, but a story to be listened to.</p>
                  <span className="quote-author">— Joseph Ole Tumpes, Founder</span>
                </div>
              </div>
              <div className="philosophy-image reveal" style={{ animationDelay: '0.2s' }}>
                <div className="image-frame">
                  <img src="/images/philosophy-safari.jpg" alt="Safari experience" />
                  <div className="frame-overlay"></div>
                </div>
                <div className="image-accent">
                  <img src="/images/philosophy-accent.jpg" alt="African sunset" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-subtitle">Our Journey</span>
              <h2>16 Years of <span className="gradient-text">Adventure</span></h2>
              <p className="section-description">
                From a dream shared by two guides to East Africa's premier safari company
              </p>
            </div>

            <div className="timeline">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item reveal ${index % 2 === 0 ? 'left' : 'right'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-dot">
                    <span className="timeline-icon">{item.icon}</span>
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-subtitle">What Drives Us</span>
              <h2>Our Core <span className="gradient-text">Values</span></h2>
            </div>

            <div className="values-grid">
              <div className="value-card reveal" style={{ animationDelay: '0.1s' }}>
                <div className="value-card-icon">
                  <span>🦏</span>
                </div>
                <h3>Conservation First</h3>
                <p>We donate 5% of every safari to wildlife protection and habitat preservation initiatives across Kenya and Tanzania.</p>
                <div className="value-stat">
                  <span className="stat-highlight">$500K+</span>
                  <span>contributed since 2012</span>
                </div>
              </div>

              <div className="value-card reveal" style={{ animationDelay: '0.2s' }}>
                <div className="value-card-icon">
                  <span>🤝</span>
                </div>
                <h3>Community Partnership</h3>
                <p>We employ local guides, source from community enterprises, and invest in education and healthcare projects.</p>
                <div className="value-stat">
                  <span className="stat-highlight">500+</span>
                  <span>local families supported</span>
                </div>
              </div>

              <div className="value-card reveal" style={{ animationDelay: '0.3s' }}>
                <div className="value-card-icon">
                  <span>✨</span>
                </div>
                <h3>Authentic Experiences</h3>
                <p>No scripted performances or tourist traps. Just genuine encounters with people, wildlife, and landscapes.</p>
                <div className="value-stat">
                  <span className="stat-highlight">100%</span>
                  <span>authentic cultural experiences</span>
                </div>
              </div>

              <div className="value-card reveal" style={{ animationDelay: '0.4s' }}>
                <div className="value-card-icon">
                  <span>🌿</span>
                </div>
                <h3>Sustainable Tourism</h3>
                <p>Carbon-neutral operations, eco-certified lodges, and low-impact safari practices throughout our supply chain.</p>
                <div className="value-stat">
                  <span className="stat-highlight">Gold Rated</span>
                  <span>EcoTourism Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-subtitle">The Faces Behind WildNova</span>
              <h2>Meet Our <span className="gradient-text">Experts</span></h2>
              <p className="section-description">
                Your safari is in the hands of passionate professionals who call Africa home
              </p>
            </div>

            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-overlay">
                      <div className="team-expertise">
                        <span>Expertise:</span>
                        <strong>{member.expertise}</strong>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="impact-section">
          <div className="container">
            <div className="impact-grid">
              <div className="impact-stats reveal">
                <span className="section-subtitle light">Our Impact</span>
                <h2>Creating Positive <span className="gradient-text">Change</span></h2>
                <p className="impact-description">
                  Every WildNova safari contributes to a larger purpose. We measure our success 
                  not just in smiles and memories, but in acres protected, communities empowered, 
                  and wildlife preserved for future generations.
                </p>
                
                <div className="stats-container">
                  <div className="stat-block">
                    <div className="stat-icon">🌍</div>
                    <div className="stat-content">
                      <span className="stat-number">50,000+</span>
                      <span className="stat-label">Acres of habitat protected</span>
                    </div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-icon">👥</div>
                    <div className="stat-content">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Local jobs created</span>
                    </div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-icon">🏫</div>
                    <div className="stat-content">
                      <span className="stat-number">12</span>
                      <span className="stat-label">Schools supported</span>
                    </div>
                  </div>
                  <div className="stat-block">
                    <div className="stat-icon">💧</div>
                    <div className="stat-content">
                      <span className="stat-number">8</span>
                      <span className="stat-label">Community water projects</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="impact-image reveal" style={{ animationDelay: '0.2s' }}>
                <img src="/images/impact-conservation.jpg" alt="Conservation impact" />
                <div className="impact-badge">
                  <span className="badge-year">Since 2008</span>
                  <span className="badge-text">Committed to Conservation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-subtitle">Our Partners</span>
              <h2>Trusted <span className="gradient-text">Alliances</span></h2>
              <p className="section-description">
                Collaborating with leading organizations to deliver exceptional safaris
              </p>
            </div>

            <div className="partners-grid reveal">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-logo">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
                  <p className="partner-name">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-content reveal">
              <h2>Ready to Begin Your <span className="gradient-text">African Journey?</span></h2>
              <p>
                Let our experts craft a personalized safari experience that exceeds your expectations.
              </p>
              <div className="cta-buttons">
                <Button href="/tour-packages" variant="primary" size="lg">
                  Explore Safaris
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="cta-pattern"></div>
        </section>
      </div>
    </Layout>
  );
};

export default About;