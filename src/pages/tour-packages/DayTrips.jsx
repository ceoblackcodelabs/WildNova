import Layout from "../../components/layouts/Layout";

const DayTrips = () => {
  return (
    <Layout>
      <section className="tour-hero">
        <h1>Day Trips</h1>
        <img src="/images/daytrips-hero-placeholder.jpg" alt="Day Trips" />
      </section>
      
      <section className="tour-details">
        <h2>Perfect Day Adventures</h2>
        <div className="tour-itineraries">
          <div className="itinerary-card">
            <img src="/images/nairobi-national-park-placeholder.jpg" alt="Nairobi National Park" />
            <h3>Nairobi National Park</h3>
            <p>Half-day safari, just 15 mins from city</p>
            <ul>
              <li>Lions, rhinos, giraffes</li>
              <li>Picnic lunch</li>
              <li>Professional guide</li>
            </ul>
          </div>
          
          <div className="itinerary-card">
            <img src="/images/giraffe-center-placeholder.jpg" alt="Giraffe Center" />
            <h3>Giraffe Center & Karen Blixen</h3>
            <p>Cultural and wildlife experience</p>
            <ul>
              <li>Feed giraffes</li>
              <li>Visit Karen Blixen Museum</li>
              <li>Beads workshop</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayTrips;