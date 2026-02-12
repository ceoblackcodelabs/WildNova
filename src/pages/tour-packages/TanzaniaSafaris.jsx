import Layout from '../../components/layouts/Layout';

const TanzaniaSafaris = () => {
  return (
    <Layout>
      <section className="tour-hero">
        <h1>Tanzania Safaris</h1>
        <img src="/images/tanzania-hero-placeholder.jpg" alt="Tanzania Safaris" />
      </section>
      
      <section className="tour-details">
        <h2>Discover the Wonders of Tanzania</h2>
        <div className="tour-itineraries">
          <div className="itinerary-card">
            <img src="/images/serengeti-placeholder.jpg" alt="Serengeti" />
            <h3>Serengeti Safari</h3>
            <p>The great migration experience</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/ngorongoro-placeholder.jpg" alt="Ngorongoro" />
            <h3>Ngorongoro Crater</h3>
            <p>Africa's Garden of Eden</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/zanzibar-placeholder.jpg" alt="Zanzibar" />
            <h3>Zanzibar Extension</h3>
            <p>Spice islands and white beaches</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/tarangire-placeholder.jpg" alt="Tarangire" />
            <h3>Tarangire National Park</h3>
            <p>Famous for baobabs and elephants</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TanzaniaSafaris;