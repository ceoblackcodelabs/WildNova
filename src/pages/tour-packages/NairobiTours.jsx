import Layout from '../../components/layouts/Layout';

const NairobiTours = () => {
  return (
    <Layout>
      <section className="tour-hero">
        <h1>Nairobi Tours</h1>
        <img src="/images/nairobi-hero-placeholder.jpg" alt="Nairobi Tours" />
      </section>
      
      <section className="tour-details">
        <h2>Discover Nairobi, The Green City in the Sun</h2>
        <div className="tour-itineraries">
          <div className="itinerary-card">
            <img src="/images/nairobi-national-park-placeholder.jpg" alt="Nairobi National Park" />
            <h3>Nairobi National Park</h3>
            <p>Wildlife safari with city skyline</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/david-sheldrick-placeholder.jpg" alt="David Sheldrick" />
            <h3>David Sheldrick Elephant Orphanage</h3>
            <p>Meet baby elephants</p>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/bomas-placeholder.jpg" alt="Bomas of Kenya" />
            <h3>Bomas of Kenya</h3>
            <p>Traditional dance and culture</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NairobiTours;