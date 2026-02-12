import Layout from '../../components/layouts/Layout';

const KenyaTanzaniaSafaris = () => {
  return (
    <Layout>
      <section className="tour-hero">
        <h1>Kenya - Tanzania Safaris</h1>
        <img src="/images/kenya-tanzania-hero-placeholder.jpg" alt="Kenya Tanzania Safaris" />
      </section>
      
      <section className="tour-details">
        <h2>The Ultimate East African Safari Experience</h2>
        <div className="tour-itineraries">
          <div className="itinerary-card">
            <img src="/images/amboseli-placeholder.jpg" alt="Amboseli" />
            <h3>Amboseli - Kilimanjaro View</h3>
            <p>Elephants with Mount Kilimanjaro backdrop</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/serengeti-placeholder.jpg" alt="Serengeti" />
            <h3>Serengeti National Park</h3>
            <p>Endless plains, great migration</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/ngorongoro-placeholder.jpg" alt="Ngorongoro" />
            <h3>Ngorongoro Crater</h3>
            <p>UNESCO World Heritage site</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KenyaTanzaniaSafaris;