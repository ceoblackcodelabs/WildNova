import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tourPackages = [
    { name: 'Day Trips', path: '/tour-packages/day-trips' },
    { name: 'Nairobi Tours', path: '/tour-packages/nairobi-tours' },
    { name: 'Mombasa Tours', path: '/tour-packages/mombasa-tours' },
    { name: 'Kenya - Tanzania Safaris', path: '/tour-packages/kenya-tanzania-safaris' },
    { name: 'Tanzania Safaris', path: '/tour-packages/tanzania-safaris' }
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo with Image */}
          <Link to="/" className="logo">
            <img src="/images/wildnova-logo.png" alt="WildNova" className="logo-image" />
            {/* <span className="logo-text">WildNova</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            
            {/* Dropdown */}
            <div className="dropdown">
              <button 
                className="dropdown-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Tour Packages <span className="arrow">▼</span>
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                {tourPackages.map((item, index) => (
                  <Link key={index} to={item.path} onClick={() => setIsDropdownOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Contact Button */}
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          
          <div className="mobile-dropdown">
            <div className="mobile-dropdown-title">Tour Packages ▼</div>
            <div className="mobile-dropdown-links">
              {tourPackages.map((item, index) => (
                <Link key={index} to={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/contact" className="mobile-contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
};

export default Header;