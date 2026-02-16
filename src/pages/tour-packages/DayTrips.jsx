import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const DayTrips = () => {
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
      title: "Nairobi National Park Safari",
      description: "Start your day with an early morning game drive through Nairobi National Park - the world's only wildlife capital within a city. Spot lions, rhinos, giraffes, zebras, and over 400 bird species against the backdrop of the city skyline.",
      highlights: [
        "Early morning game drive",
        "Big Five sightings",
        "City skyline views",
        "Photography opportunities"
      ],
      meals: ["B", "L"],
      accommodation: "Not included - return to Nairobi"
    },
    {
      day: 2,
      title: "Giraffe Center & Karen Blixen Museum",
      description: "Visit the famous Giraffe Center to feed and learn about endangered Rothschild giraffes. Then explore the Karen Blixen Museum, home of the 'Out of Africa' author. End with a cultural workshop learning traditional beadwork.",
      highlights: [
        "Feed giraffes at eye level",
        "Karen Blixen Museum tour",
        "Traditional bead workshop",
        "Swahili lunch"
      ],
      meals: ["L"],
      accommodation: "Optional: Book a night at a Nairobi hotel"
    }
  ];

  const includes = [
    "Professional English-speaking guide",
    "Transport in safari vehicle",
    "All park entrance fees",
    "Bottled water during tours",
    "Pickup and drop-off from Nairobi hotels",
    "Lunch at local restaurants"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Accommodation (can be arranged separately)"
  ];

  const tourHighlights = [
    "Safari in the world's only urban national park",
    "Feed giraffes at the Giraffe Center",
    "Visit the famous Karen Blixen Museum",
    "Learn traditional Maasai beadwork",
    "See the Big Five against Nairobi's skyline"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Day Trips"
          subtitle="Perfect short adventures from Nairobi"
          image="/images/package-daytrips.jpg"
          duration="1-2 Days"
          price="$150 - $250"
          maxGroup="6 people"
          bestTime="Year-round"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">Adventure in a Day</h2>
                <p className="overview-text">
                  Perfect for travelers with limited time or those wanting to experience 
                  Kenya's highlights without committing to a multi-day safari. Our day trips 
                  are designed to give you a taste of Kenya's incredible wildlife, culture, 
                  and history - all within easy reach of Nairobi.
                </p>
                <p className="overview-text">
                  Whether you're on a layover, business trip, or just want to maximize your 
                  time, these carefully curated excursions deliver unforgettable experiences 
                  in compact, well-organized packages.
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
            <p className="section-subtitle reveal">
              Choose your adventure - each day trip can be booked separately or combined
            </p>
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
                <img src="/images/daytrip-gallery-1.jpg" alt="Nairobi National Park" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/daytrip-gallery-2.jpg" alt="Giraffe Center" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/daytrip-gallery-3.jpg" alt="Karen Blixen Museum" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/daytrip-gallery-4.jpg" alt="Bead Workshop" />
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

        <section className="faq-section">
          <div className="container">
            <h2 className="section-title reveal">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item reveal">
                <h4>Can I combine multiple day trips?</h4>
                <p>Yes! We can arrange consecutive days or spread them out according to your schedule. Ask about our multi-day packages.</p>
              </div>
              <div className="faq-item reveal">
                <h4>What should I bring?</h4>
                <p>Comfortable clothes, sunscreen, camera, binoculars, and a sense of adventure!</p>
              </div>
              <div className="faq-item reveal">
                <h4>Is pickup included?</h4>
                <p>Yes, we pick up from all major Nairobi hotels and provide drop-off after the tour.</p>
              </div>
            </div>
          </div>
        </section>

        <BookingCTA price="$150" />
      </div>
    </Layout>
  );
};

export default DayTrips;