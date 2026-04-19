import React from 'react';
import './Hero.css';
import heroImg from '../assets/two-people.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">Redefine Your<br /><span>Aesthetic</span>.</h1>
          <p className="hero-subtitle">
            Discover the latest collection of premium jerseys designed for modern culture.
            Embrace the bold, minimalistic, and uncompromising identity.
          </p>
          <div className="hero-actions">
            <a href="https://take.app/isimbi" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Explore Collection</a>
            <a href="https://www.instagram.com/p/DVLLBHKiEuw/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>Watch Video</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">50+</span>
              <span className="stat-label">New Items</span>
            </div>
            <div className="stat">
              <span className="stat-num">24h</span>
              <span className="stat-label">Fast Delivery</span>
            </div>
            <div className="stat">
              <span className="stat-num">10k</span>
              <span className="stat-label">Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-backdrop"></div>
          <img src={heroImg} alt="Simbi Collection Premium Urban Wear" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
