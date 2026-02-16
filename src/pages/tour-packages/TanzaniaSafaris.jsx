import { useEffect, useRef } from 'react';
import Layout from '../../components/layouts/Layout';
import TourHeader from '../../components/tours/TourHeader';
import ItineraryTimeline from '../../components/tours/ItineraryTimeline';
import InclusionCard from '../../components/tours/InclusionCard';
import BookingCTA from '../../components/tours/BookingCTA';
import './TourPackages.css';

const TanzaniaSafaris = () => {
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
      title: "Arrival in Arusha",
      description: "Arrive at Kilimanjaro International Airport. Meet your guide and transfer to your hotel in Arusha. Evening safari briefing and welcome dinner.",
      highlights: [
        "Airport pickup",
        "Hotel check-in",
        "Welcome dinner",
        "Safari briefing"
      ],
      meals: ["D"],
      accommodation: "Arusha Coffee Lodge"
    },
    {
      day: 2,
      title: "Arusha to Tarangire National Park",
      description: "Drive to Tarangire National Park, famous for its massive baobab trees and large elephant herds. Afternoon game drive in this beautiful park.",
      highlights: [
        "Baobab trees",
        "Elephant sightings",
        "Bird watching",
        "Afternoon game drive"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Tarangire Safari Lodge"
    },
    {
      day: 3,
      title: "Tarangire to Lake Manyara",
      description: "Morning game drive in Tarangire, then drive to Lake Manyara. Afternoon game drive to see tree-climbing lions, hippos, and thousands of flamingos.",
      highlights: [
        "Tree-climbing lions",
        "Flamingo flocks",
        "Ground water forest",
        "Hippo pool"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Lake Manyara Serena Safari Lodge"
    },
    {
      day: 4,
      title: "Lake Manyara to Serengeti National Park",
      description: "Drive to the Serengeti via the Ngorongoro Conservation Area. Arrive in time for an afternoon game drive in the endless plains.",
      highlights: [
        "Scenic drive",
        "Serengeti arrival",
        "Afternoon game drive",
        "Sunset photography"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Serengeti Serena Safari Lodge"
    },
    {
      day: 5,
      title: "Full Day in Serengeti",
      description: "Full day exploring the Serengeti. Follow the Great Migration, search for predators, and witness the incredible wildlife drama. Picnic lunch in the bush.",
      highlights: [
        "Great Migration",
        "Predator search",
        "Bush picnic",
        "Wildlife photography"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Serengeti Serena Safari Lodge"
    },
    {
      day: 6,
      title: "Serengeti to Ngorongoro Crater",
      description: "Morning game drive, then drive to Ngorongoro Conservation Area. Descend into the crater for an unforgettable game drive in this natural wonder.",
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
      day: 7,
      title: "Ngorongoro Crater Exploration",
      description: "Full morning exploring different areas of the crater. Afternoon visit to a Maasai village to learn about their traditional culture.",
      highlights: [
        "Crater exploration",
        "Wildlife viewing",
        "Maasai village visit",
        "Cultural experience"
      ],
      meals: ["B", "L", "D"],
      accommodation: "Ngorongoro Serena Safari Lodge"
    },
    {
      day: 8,
      title: "Ngorongoro to Arusha & Zanzibar",
      description: "Drive back to Arusha. Afternoon flight to Zanzibar. Transfer to your beach resort in Stone Town or Nungwi.",
      highlights: [
        "Scenic drive",
        "Flight to Zanzibar",
        "Beach resort check-in",
        "Sunset on the beach"
      ],
      meals: ["B", "L"],
      accommodation: "Zanzibar Serena Hotel"
    },
    {
      day: 9,
      title: "Zanzibar Beach Relaxation",
      description: "Full day at leisure on Zanzibar's pristine beaches. Optional activities include snorkeling, spice tour, or Stone Town exploration.",
      highlights: [
        "Beach relaxation",
        "Optional snorkeling",
        "Spice tour option",
        "Sunset dhow cruise"
      ],
      meals: ["B"],
      accommodation: "Zanzibar Serena Hotel"
    },
    {
      day: 10,
      title: "Departure from Zanzibar",
      description: "Breakfast at the resort. Transfer to Zanzibar International Airport for your departure flight.",
      highlights: [
        "Breakfast with ocean view",
        "Last-minute souvenir shopping",
        "Airport transfer"
      ],
      meals: ["B"],
      accommodation: "Not included"
    }
  ];

  const includes = [
    "9 nights luxury accommodation (safari lodges + beach resort)",
    "All meals as per itinerary",
    "Professional English-speaking guide",
    "Private 4x4 safari vehicle with pop-up roof",
    "All park entrance fees",
    "Internal flight to Zanzibar",
    "Bottled water during game drives",
    "Airport transfers"
  ];

  const excludes = [
    "International flights",
    "Travel insurance",
    "Tips and gratuities",
    "Personal expenses",
    "Alcoholic beverages",
    "Visa fees",
    "Optional hot air balloon safari",
    "Optional Zanzibar activities"
  ];

  const tourHighlights = [
    "Endless plains of the Serengeti",
    "Ngorongoro Crater descent",
    "Tree-climbing lions of Lake Manyara",
    "Baobabs of Tarangire",
    "Zanzibar beach extension"
  ];

  return (
    <Layout>
      <div className="tour-page" ref={sectionRef}>
        <TourHeader 
          title="Tanzania Safaris"
          subtitle="Discover the Wonders of Tanzania"
          image="/images/tanzania-hero.jpg"
          duration="10 Days / 9 Nights"
          price="$3,500 - $4,800"
          maxGroup="6 people"
          bestTime="June - October, December - March"
        />

        <section className="tour-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content reveal">
                <h2 className="section-title">The Complete Tanzania Experience</h2>
                <p className="overview-text">
                  Tanzania is the epitome of African safari – from the wildlife-rich plains 
                  of the Serengeti to the stunning Ngorongoro Crater, from the baobab-dotted 
                  landscapes of Tarangire to the pristine beaches of Zanzibar.
                </p>
                <p className="overview-text">
                  This comprehensive tour combines the best of Tanzania's national parks 
                  with a relaxing beach extension on the spice island of Zanzibar. Experience 
                  the Great Migration, descend into a volcanic crater, and unwind on 
                  powder-white beaches.
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
                <img src="/images/tanzania-gallery-1.jpg" alt="Serengeti Plains" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/tanzania-gallery-2.jpg" alt="Ngorongoro Crater" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/tanzania-gallery-3.jpg" alt="Tarangire Baobabs" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/tanzania-gallery-4.jpg" alt="Lake Manyara" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/tanzania-gallery-5.jpg" alt="Zanzibar Beach" />
              </div>
              <div className="gallery-item reveal">
                <img src="/images/tanzania-gallery-6.jpg" alt="Stone Town" />
              </div>
            </div>
          </div>
        </section>

        <section className="accommodation-section">
          <div className="container">
            <h2 className="section-title reveal">Your Accommodations</h2>
            <div className="accommodation-grid">
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/arusha-coffee-lodge.jpg" alt="Arusha Coffee Lodge" />
                </div>
                <div className="accommodation-details">
                  <h4>Arusha Coffee Lodge</h4>
                  <p>Luxury coffee plantation</p>
                </div>
              </div>
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/serengeti-serenalodge.jpg" alt="Serengeti Serena" />
                </div>
                <div className="accommodation-details">
                  <h4>Serengeti Serena</h4>
                  <p>Heart of the wilderness</p>
                </div>
              </div>
              <div className="accommodation-card reveal">
                <div className="accommodation-image">
                  <img src="/images/zanzibar-serenahotel.jpg" alt="Zanzibar Serena" />
                </div>
                <div className="accommodation-details">
                  <h4>Zanzibar Serena</h4>
                  <p>Beachfront paradise</p>
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

        <BookingCTA price="$3,500" />
      </div>
    </Layout>
  );
};

export default TanzaniaSafaris;