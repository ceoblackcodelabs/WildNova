import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const MombasaTours = () => {
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
      title: "Arrival & Mombasa City Tour",
      description: "Arrive at Moi International Airport. Transfer to your beach resort. Afternoon orientation tour of historic Mombasa, visiting Fort Jesus and exploring the narrow streets of Old Town.",
      highlights: [
        "Airport pickup",
        "Fort Jesus visit",
        "Old Town exploration",
        "Beach resort check-in"
      ],
      meals: ["D"],
      accommodation: "Sarova Whitesands Beach Resort"
    },
    {
      day: 2,
      title: "Haller Park & Bamburi Nature Trail",
      description: "Visit Haller Park, a remarkable conservation success story where a quarry was transformed into a wildlife sanctuary. See hippos, giraffes, and giant tortoises. Afternoon at leisure on beautiful Bamburi Beach.",
      highlights: [
        "Haller Park nature walk",
        "Hippo feeding",
        "Giraffe encounter",
        "Beach relaxation"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Sarova Whitesands Beach Resort"
    },
    {
      day: 3,
      title: "Wasini Island & Dolphin Tour",
      description: "Full-day marine adventure. Cruise to Wasini Island, spot dolphins in their natural habitat, snorkel in crystal-clear waters, and enjoy fresh seafood lunch on the island.",
      highlights: [
        "Dolphin watching",
        "Snorkeling",
        "Fresh seafood lunch",
        "Wasini Island exploration"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Sarova Whitesands Beach Resort"
    },
    {
      day: 4,
      title: "Departure",
      description: "Breakfast at the resort. Leisure morning on the beach before transfer to Moi International Airport for your departure flight.",
      highlights: [
        "Breakfast with ocean view",
        "Last-minute beach walk",
        "Airport transfer"
      ],
      meals: ["B"],
      accommodation: "Not included"
    }
  ];

  const includes = [
    "3 nights beach resort accommodation",
    "All meals as per itinerary",
    "Professional English-speaking guide",
    "Private transport",
    "All entrance fees",
    "Dolphin tour & snorkeling",
    "Airport transfers"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Optional water sports"
  ];

  const tourHighlights = [
    "Explore historic Fort Jesus",
    "Spot dolphins in the wild",
    "Snorkel in Indian Ocean",
    "Visit Haller Park wildlife",
    "Relax on pristine beaches"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Mombasa Tours"
          subtitle="Experience Kenya's Coastal Paradise"
          image="/images/mombasa-hero.jpg"
          duration="4 Days / 3 Nights"
          price="$650 - $850"
          maxGroup="8 people"
          bestTime="December - March, July - October"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">The Ultimate Coastal Escape</h2>
                <p className="overview-text">
                  Discover the magic of Kenya's coastline - where ancient Swahili culture meets 
                  turquoise waters and powder-white beaches. Mombasa offers a perfect blend of 
                  history, wildlife, and marine adventures.
                </p>
                <p className="overview-text">
                  From exploring the historic Fort Jesus to swimming with dolphins in the 
                  Indian Ocean, from relaxing on pristine beaches to discovering unique 
                  wildlife at Haller Park, this tour captures the essence of the Swahili coast.
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
                <img src="/images/mombasa-gallery-1.jpg" alt="Fort Jesus" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/mombasa-gallery-2.jpg" alt="Dolphin Tour" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/mombasa-gallery-3.jpg" alt="Wasini Island" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/mombasa-gallery-4.jpg" alt="Haller Park" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/mombasa-gallery-5.jpg" alt="Mombasa Beach" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/mombasa-gallery-6.jpg" alt="Old Town" />
              </div>
            </div>
          </div>
        </section>

        <section className="accommodation-section">
          <div className="container">
            <h2 className="section-title reveal">Your Beach Resort</h2>
            <div className="accommodation-card reveal">
              <div className="accommodation-image">
                <img src="/images/sarova-whitesands.jpg" alt="Sarova Whitesands Beach Resort" />
              </div>
              <div className="accommodation-details">
                <h3>Sarova Whitesands Beach Resort</h3>
                <p className="accommodation-location">Bamburi Beach, Mombasa</p>
                <div className="accommodation-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="rating-text">5-Star Luxury</span>
                </div>
                <p className="accommodation-description">
                  A premier beachfront resort on Kenya's coast, featuring expansive gardens, 
                  multiple swimming pools, and direct access to pristine Bamburi Beach. 
                  Experience Swahili hospitality at its finest.
                </p>
                <ul className="accommodation-amenities">
                  <li>✓ Private beach access</li>
                  <li>✓ 3 swimming pools</li>
                  <li>✓ Spa & wellness center</li>
                  <li>✓ Water sports center</li>
                  <li>✓ 6 restaurants & bars</li>
                  <li>✓ Kids club</li>
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

        <BookingCTA price="$650" />
      </div>
    </Layout>
  );
};

export default MombasaTours;