import React from 'react';
import './Featured.css';
import jersey1 from '../assets/two-people.jpeg';
import jersey2 from '../assets/jersey-2.png';
import jersey3 from '../assets/mancity.jpg';
import jersey4 from '../assets/chelsea.jpg';

const featuredItems = [
  { id: 1, name: 'Umugani-collection', price: '$30', img: jersey1, category: 'Rwandan casuals' },
  { id: 2, name: 'simbi-collection', price: '$30', img: jersey2, category: 'Rwandan casuals' },
  { id: 3, name: 'Manchester United Home', price: '$40', img: jersey3, category: 'Premier League' },
  { id: 4, name: 'Chelsea Home', price: '$45', img: jersey4, category: 'Premier League' }
];

const Featured = () => {
  return (
    <section id="collection" className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest <span>Drops</span></h2>
          <button className="btn btn-outline" style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline-block' } }}>View All</button>
        </div>
        
        <div className="product-grid">
          {featuredItems.map((item, index) => (
            <div 
              className="product-card" 
              key={item.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="product-image-container">
                <img src={item.img} alt={item.name} className="product-image" />
                <div className="product-overlay">
                  <button className="btn btn-primary btn-sm block-btn">Quick Add</button>
                </div>
              </div>
              <div className="product-info">
                <p className="product-category">{item.category}</p>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mobile-view-all">
          <button className="btn btn-outline">View All Collection</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
