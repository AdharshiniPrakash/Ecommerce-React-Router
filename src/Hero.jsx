import React from 'react';
import banner from './assets/banner.png';

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-img"
        alt="promo"
        src={banner}
      />
      <div className="hero-overlay container">
        <div className="home-hero-text">
          <h1>
            Everyday essentials,<br /> thoughtfully curated.
          </h1>
          <p>
            Premium products designed for modern, everyday living — quality
            you’ll notice, simplicity you’ll love.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero;