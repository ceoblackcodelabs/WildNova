import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const KenyaTanzaniaSafaris = () => {
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
      title: "Arrival in Nairobi",
      description: "Arrive at Jomo Kenyatta International Airport. Meet your guide and transfer to your hotel. Evening briefing about your upcoming adventure.",
      highlights: [
        "Airport pickup",
        "Hotel check-in",
        "Safari briefing"
      ],
      meals: ["D"],
      accommodation: "Sarova Stanley, Nairobi"
    },
    {
      day: 2,
      title: "Nairobi to Amboseli National Park",
      description: "Morning drive to Amboseli National Park, arriving in time for lunch. Afternoon game drive with spectacular views of Mount Kilimanjaro. Look for large elephant herds, lions, and buffalo.",
      highlights: [
        "Scenic drive",
        "Afternoon game drive",
        "Kilimanjaro views",
        "Elephant sightings"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Amboseli Serena Safari Lodge"
    },
    {
      day: 3,
      title: "Full Day in Amboseli",
      description: "Early morning game drive for best wildlife viewing and sunrise over Kilimanjaro. Return to lodge for breakfast. Mid-day relaxation. Afternoon game drive to explore different areas of the park.",
      highlights: [
        "Sunrise game drive",
        "Kilimanjaro photography",
        "Elephant research center",
        "Bird watching"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Amboseli Serena Safari Lodge"
    },
    {
      day: 4,
      title: "Amboseli to Nairobi (Fly to Kilimanjaro)",
      description: "Morning game drive, then drive back to Nairobi. Afternoon flight to Kilimanjaro Airport, Tanzania. Transfer to Arusha for overnight.",
      highlights: [
        "Final Amboseli game drive",
        "Scenic flight",
        "Cross border to Tanzania",
        "Arusha arrival"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Arusha Coffee Lodge"
    },
    {
      day: 5,
      title: "Arusha to Serengeti National Park",
      description: "Flight from Arusha to Serengeti. Afternoon game drive in the endless plains of the Serengeti, searching for the Great Migration herds.",
      highlights: [
        "Serengeti flight",
        "Afternoon game drive",
        "Great Migration spotting",
        "Sunset in Serengeti"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Serengeti Serena Safari Lodge"
    },
    {
      day: 6,
      title: "Full Day in Serengeti",
      description: "Full day exploring the Serengeti. Follow the migration patterns, search for predators, and witness the incredible wildlife drama. Picnic lunch in the bush.",
      highlights: [
        "Full day game drive",
        "Migration crossing (seasonal)",
        "Predator sightings",
        "Bush picnic"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Serengeti Serena Safari Lodge"
    },
    {
      day: 7,
      title: "Serengeti to Ngorongoro Crater",
      description: "Morning game drive, then drive to Ngorongoro Conservation Area. Descend into the crater for afternoon game drive in this UNESCO World Heritage site.",
      highlights: [
        "Crater descent",
        "Rhino sanctuary",
        "Lake Magadi",
        "Maasai visit (optional)"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Ngorongoro Serena Safari Lodge"
    },
    {
      day: 8,
      title: "Ngorongoro to Lake Manyara",
      description: "Morning crater exploration, then drive to Lake Manyara. Afternoon game drive to see tree-climbing lions and massive flocks of flamingos.",
      highlights: [
        "Tree-climbing lions",
        "Flamingo sightings",
        "Ground water forest",
        "Hippo pool"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Lake Manyara Serena Safari Lodge"
    },
    {
      day: 9,
      title: "Lake Manyara to Arusha & Departure",
      description: "Morning game drive, then drive to Arusha for lunch. Transfer to Kilimanjaro Airport for your departure flight.",
      highlights: [
        "Final game drive",
        "Arusha city tour",
        "Airport transfer"
      ],
      meals: ["B", "L"],
      accommodation: "Not included"
    }
  ];

  const includes = [
    "8 nights luxury lodge accommodation",
    "All meals as per itinerary",
    "Professional English-speaking guides in both countries",
    "Private 4x4 safari vehicles with pop-up roofs",
    "All park entrance fees",
    "Internal flights (Nairobi to Kilimanjaro)",
    "Bottled water during game drives",
    "Airport transfers"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Visa fees (Kenya & Tanzania)",
    "Optional hot air balloon safari"
  ];

  const tourHighlights = [
    "Elephants against Kilimanjaro in Amboseli",
    "Great Migration in Serengeti",
    "Ngorongoro Crater descent",
    "Tree-climbing lions of Lake Manyara",
    "Two countries, one incredible adventure"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Kenya - Tanzania Safaris"
          subtitle="The Ultimate East African Safari Experience"
          image="/images/kenya-tanzania-hero.jpg"
          duration="9 Days / 8 Nights"
          price="$3,200 - $4,500"
          maxGroup="6 people"
          bestTime="July - October (Migration), January - March"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">The Classic African Safari</h2>
                <p className="overview-text">
                  This is the safari of a lifetime – a journey through East Africa's most 
                  iconic landscapes. From the shadow of Kilimanjaro to the endless plains 
                  of the Serengeti, from the wildlife-rich Ngorongoro Crater to the 
                  tree-climbing lions of Lake Manyara.
                </p>
                <p className="overview-text">
                  Experience the best of both Kenya and Tanzania in one comprehensive 
                  itinerary. Witness the Great Migration, descend into a volcanic crater, 
                  and create memories that will last forever.
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
                <img src="/images/kenya-tanzania-gallery-1.jpg" alt="Amboseli Elephants" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/kenya-tanzania-gallery-2.jpg" alt="Serengeti Migration" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/kenya-tanzania-gallery-3.jpg" alt="Ngorongoro Crater" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/kenya-tanzania-gallery-4.jpg" alt="Lake Manyara Lions" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/kenya-tanzania-gallery-5.jpg" alt="Kilimanjaro View" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/kenya-tanzania-gallery-6.jpg" alt="Maasai Village" />
              </div>
            </div>
          </div>
        </section>

        <section className="accommodation-section">
          <div className="container">
            <h2 className="section-title reveal">Your Safari Lodges</h2>
            <div className="accommodation-grid">
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/amboseli-serenalodge.jpg" alt="Amboseli Serena" />
                </div>
                <div className="accommodation-details">
                  <h4>Amboseli Serena</h4>
                  <p>Kilimanjaro views</p>
                </div>
              </div>
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/serengeti-serenalodge.jpg" alt="Serengeti Serena" />
                </div>
                <div className="accommodation-details">
                  <h4>Serengeti Serena</h4>
                  <p>Heart of the plains</p>
                </div>
              </div>
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/ngorongoro-serenalodge.jpg" alt="Ngorongoro Serena" />
                </div>
                <div className="accommodation-details">
                  <h4>Ngorongoro Serena</h4>
                  <p>Crater rim</p>
                </div>
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

        <BookingCTA price="$3,200" />
      </div>
    </Layout>
  );
};

export default KenyaTanzaniaSafaris;