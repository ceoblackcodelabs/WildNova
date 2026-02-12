import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';

const TourPackage = () => {
  const tours = [
    { name: 'Day Trips', path: '/tour-packages/day-trips', image: '/images/daytrips-placeholder.jpg', desc: 'Perfect for short adventures' },
    { name: 'Nairobi Tours', path: '/tour-packages/nairobi-tours', image: '/images/nairobi-placeholder.jpg', desc: 'Explore the green city' },
    { name: 'Mombasa Tours', path: '/tour-packages/mombasa-tours', image: '/images/mombasa-placeholder.jpg', desc: 'Coastal paradise' },
    { name: 'Kenya - Tanzania Safaris', path: '/tour-packages/kenya-tanzania-safaris', image: '/images/kenya-tanzania-placeholder.jpg', desc: 'Cross-border adventure' },
    { name: 'Tanzania Safaris', path: '/tour-packages/tanzania-safaris', image: '/images/tanzania-placeholder.jpg', desc: 'Serengeti & Ngorongoro' }
  ];

  return (
    <Layout>
      <section className="tour-packages-hero">
        <h1>Tour Packages</h1>
        <img src="/images/tours-placeholder.jpg" alt="Tour Packages" />
      </section>
      
      <section className="tours-grid">
        {tours.map((tour, index) => (
          <Link to={tour.path} key={index} className="tour-package-card">
            <img src={tour.image} alt={tour.name} />
            <h3>{tour.name}</h3>
            <p>{tour.desc}</p>
          </Link>
        ))}
      </section>
    </Layout>
  );
};

export default TourPackage;