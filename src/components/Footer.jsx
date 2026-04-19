import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer id="about" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">SIMBI<span>Collections</span></h2>
            <p className="footer-desc">
              Elevating modern streetwear through minimalist aesthetics and premium quality. Made for the culture.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Essentials</a></li>
              <li><a href="Navbar.jsx">Accessories</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Join the Club</h4>
            <p className="newsletter-text">Subscribe for exclusive drops and early access.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="btn btn-primary">→</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Simbi Collection. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
