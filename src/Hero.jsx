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
            <br />
              <button className="primary-btn">Shop Now</button>

            <div className="home-hero-actions">
            </div>
          </div>
      </div>
    </section>

    // <section className="home-hero">
    //     <div className="home-hero-container">
    //       <div className="home-hero-text">
    //         <h1>
    //           Everyday essentials,<br /> thoughtfully curated.
    //         </h1>
    //         <p>
    //           Premium products designed for modern, everyday living — quality
    //           you’ll notice, simplicity you’ll love.
    //         </p>

    //         <div className="home-hero-actions">
    //           <button className="primary-btn">Shop Now</button>
    //           <a href="/products" className="text-link">
    //             Explore New Arrivals →
    //           </a>
    //         </div>
    //       </div>

    //       <div className="home-hero-image">
    //         <img src={banner} alt="Everyday products" />
    //       </div>
    //     </div>
    //   </section>
  )
}

export default Hero;