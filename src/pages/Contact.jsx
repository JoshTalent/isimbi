import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page animate-fade-in">
      <div className="container">
        <h1 className="page-title">Get in <span>Touch</span></h1>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>Customer Support</h3>
              <p>Email: support@simbicollections.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon - Fri, 9am - 6pm EST</p>
            </div>
            <div className="info-card">
              <h3>Headquarters</h3>
              <p>123 Aesthetic Avenue</p>
              <p>Creative District, NY 10001</p>
              <p>United States</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your email address" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
