import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-page animate-fade-in">
      <div className="container about-container">
        <h1 className="page-title">About <span>Simbi Collections</span></h1>
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              We are defining the future of premium streetwear. Uncompromising design meeting unparalleled comfort.
            </p>
            <p>
              Simbi Collections was founded on the idea that aesthetic shouldn't come at the cost of expression. 
              Our pieces are curated and crafted for the modern culture, ensuring that every drop resonates with the energy of the streets.
            </p>
            <p>
              From our signature jerseys to our minimalist outerwear, we prioritize rich aesthetics, dark tones, and silhouettes that stand out in any environment. 
            </p>
            <div className="mission-box">
              <h3>Our Mission</h3>
              <p>To redefine urban aesthetics globally through high-quality, culturally relevant clothing.</p>
            </div>
          </div>
          <div className="about-image-wrapper">
             <div className="about-image-placeholder">
               <div className="overlay-text">Simbi.</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
