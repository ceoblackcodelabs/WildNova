import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const NairobiTours = () => {
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

  const days = [
    {
      day: 1,
      title: "Arrival & Nairobi City Tour",
      description: "Arrive at Jomo Kenyatta International Airport. Meet your guide and transfer to your hotel. Afternoon city tour visiting the Karen Blixen Museum, Kazuri Beads workshop, and the Bomas of Kenya for traditional dance performances.",
      highlights: [
        "Airport pickup",
        "Karen Blixen Museum",
        "Kazuri Beads workshop",
        "Bomas cultural performance"
      ],
      meals: ["D"],
      accommodation: "Sarova Stanley or similar (4-star)"
    },
    {
      day: 2,
      title: "Nairobi National Park & Elephant Orphanage",
      description: "Early morning game drive in Nairobi National Park. Witness lions, rhinos, and giraffes with the city skyline backdrop. Afternoon visit to the David Sheldrick Elephant Orphanage to see baby elephants feeding and playing.",
      highlights: [
        "Morning game drive",
        "Rhino sanctuary visit",
        "Elephant orphanage",
        "Lunch at Karen Blixen Coffee Garden"
      ],
      meals: ["B", "L"],
      accommodation: "Sarova Stanley or similar (4-star)"
    },
    {
      day: 3,
      title: "Giraffe Center & Departure",
      description: "Visit the Giraffe Center for an up-close encounter with endangered Rothschild giraffes. Optional visit to the Nairobi Railway Museum before airport transfer for departure.",
      highlights: [
        "Giraffe feeding",
        "Nature trail walk",
        "Souvenir shopping",
        "Airport transfer"
      ],
      meals: ["B"],
      accommodation: "Not included"
    }
  ];

  const includes = [
    "2 nights accommodation in 4-star hotel",
    "All meals as per itinerary (B=Breakfast, L=Lunch, D=Dinner)",
    "Professional English-speaking guide",
    "Private safari vehicle with pop-up roof",
    "All park entrance fees",
    "Bottled water during tours",
    "Airport transfers"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Optional activities not mentioned"
  ];

  const tourHighlights = [
    "Game drive in Nairobi National Park",
    "Visit David Sheldrick Elephant Orphanage",
    "Feed giraffes at Giraffe Center",
    "Experience traditional dances at Bomas",
    "Explore Karen Blixen's legacy"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Nairobi Tours"
          subtitle="Discover the Green City in the Sun"
          image="/images/package-nairobi.jpg"
          duration="3 Days / 2 Nights"
          price="$450 - $650"
          maxGroup="6 people"
          bestTime="June - October, January - March"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">The Complete Nairobi Experience</h2>
                <p className="overview-text">
                  Nairobi is Africa's most exciting capital - a unique blend of urban energy 
                  and wild beauty. This comprehensive tour showcases the best of Nairobi: 
                  world-class wildlife experiences, rich cultural heritage, colonial history, 
                  and warm Kenyan hospitality.
                </p>
                <p className="overview-text">
                  From the only national park within a city to the heartwarming elephant 
                  orphanage, from traditional dance performances to the legacy of Karen Blixen, 
                  you'll discover why Nairobi is called the "Green City in the Sun."
                </p>
              </div>
              <div className="overview-highlights reveal">
                <h3>Tour Highlights</h3>
                <ul>
                  {tourHighlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="itinerary-section">
          <div className="container">
            <h2 className="section-title reveal">Your Day-by-Day Itinerary</h2>
            <div className="reveal">
              <ItineraryTimeline days={days} />
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <h2 className="section-title reveal">Experience Gallery</h2>
            <div className="gallery-grid">
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-1.jpg" alt="Nairobi National Park" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-2.jpg" alt="Elephant Orphanage" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-3.jpg" alt="Giraffe Center" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-4.jpg" alt="Bomas of Kenya" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-5.jpg" alt="Karen Blixen Museum" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/nairobi-gallery-6.jpg" alt="Nairobi City" />
              </div>
            </div>
          </div>
        </section>

        <section className="accommodation-section">
          <div className="container">
            <h2 className="section-title reveal">Your Accommodation</h2>
            <div className="accommodation-card reveal">
              <div className="accommodation-image">
                <img src="/images/sarova-stanley.jpg" alt="Sarova Stanley Hotel" />
              </div>
              <div className="accommodation-details">
                <h3>Sarova Stanley Hotel</h3>
                <p className="accommodation-location">Nairobi City Center</p>
                <div className="accommodation-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="rating-text">5-Star Luxury</span>
                </div>
                <p className="accommodation-description">
                  Nairobi's oldest and most iconic hotel, blending colonial charm with modern luxury. 
                  Centrally located with elegant rooms, fine dining, and exceptional service.
                </p>
                <ul className="accommodation-amenities">
                  <li>✓ Swimming pool</li>
                  <li>✓ Spa & wellness center</li>
                  <li>✓ Multiple restaurants</li>
                  <li>✓ Free Wi-Fi</li>
                  <li>✓ 24-hour room service</li>
                  <li>✓ Fitness center</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="inclusion-section">
          <div className="container">
            <h2 className="section-title reveal">What's Included</h2>
            <div className="reveal">
              <InclusionCard includes={includes} excludes={excludes} />
            </div>
          </div>
        </section>

        <BookingCTA price="$450" />
      </div>
    </Layout>
  );
};

export default NairobiTours;