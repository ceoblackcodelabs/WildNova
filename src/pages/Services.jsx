import Layout from '../components/layouts/Layout';

const Services = () => {
  return (
    <Layout>
      <section className="services-hero">
        <h1>Our Services</h1>
        <img src="/images/services-placeholder.jpg" alt="Our Services" />
      </section>
      
      <section className="services-grid">
        <div className="service-card">
          <img src="/images/tour-guide-placeholder.jpg" alt="Tour Guide" />
          <h3>Professional Tour Guides</h3>
          <p>Experienced and certified guides</p>
        </div>
        
        <div className="service-card">
          <img src="/images/transport-placeholder.jpg" alt="Transport" />
          <h3>Luxury Transport</h3>
          <p>Comfortable 4x4 safari vehicles</p>
        </div>
        
        <div className="service-card">
          <img src="/images/accommodation-placeholder.jpg" alt="Accommodation" />
          <h3>Premium Accommodation</h3>
          <p>Curated lodges and camps</p>
        </div>
        
        <div className="service-card">
          <img src="/images/custom-placeholder.jpg" alt="Custom Tours" />
          <h3>Custom Tours</h3>
          <p>Tailor-made itineraries</p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;