const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>WildNova</h3>
          <p>Your trusted partner in African adventures</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/tour-packages">Tour Packages</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>✉️ info@wildnova.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WildNova. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;