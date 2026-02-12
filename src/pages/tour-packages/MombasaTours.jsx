import Layout from '../../components/layouts/Layout';

const MombasaTours = () => {
  return (
    <Layout>
      <section className="tour-hero">
        <h1>Mombasa Tours</h1>
        <img src="/images/mombasa-hero-placeholder.jpg" alt="Mombasa Tours" />
      </section>
      
      <section className="tour-details">
        <h2>Experience Coastal Paradise</h2>
        <div className="tour-itineraries">
          <div className="itinerary-card">
            <img src="/images/fort-jesus-placeholder.jpg" alt="Fort Jesus" />
            <h3>Fort Jesus</h3>
            <p>Historic Portuguese fort</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/haller-park-placeholder.jpg" alt="Haller Park" />
            <h3>Haller Park</h3>
            <p>Nature trail and wildlife</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/wasini-placeholder.jpg" alt="Wasini Island" />
            <h3>Wasini Island & Dolphin Tour</h3>
            <p>Marine adventure</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MombasaTours;