import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TourPackage from './pages/TourPackage';
import DayTrips from './pages/tour-packages/DayTrips';
import NairobiTours from './pages/tour-packages/NairobiTours';
import MombasaTours from './pages/tour-packages/MombasaTours';
import KenyaTanzaniaSafaris from './pages/tour-packages/KenyaTanzaniaSafaris';
import TanzaniaSafaris from './pages/tour-packages/TanzaniaSafaris';
import './App.css';

function App() {
  // Smooth scroll initialization
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const hash = target.hash;
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tour-packages" element={<TourPackage />} />
        <Route path="/tour-packages/day-trips" element={<DayTrips />} />
        <Route path="/tour-packages/nairobi-tours" element={<NairobiTours />} />
        <Route path="/tour-packages/mombasa-tours" element={<MombasaTours />} />
        <Route path="/tour-packages/kenya-tanzania-safaris" element={<KenyaTanzaniaSafaris />} />
        <Route path="/tour-packages/tanzania-safaris" element={<TanzaniaSafaris />} />
      </Routes>
    </Router>
  );
}

export default App;