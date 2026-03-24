import ProductPreview from "./ProductPreview";
import { Link } from "react-router";
import Story from "./assets/section.png";

function Home({ productsData }) {

  return (
    <>

      <section className="home-values">
        <div className="home-values-grid">
          <div className="value-card">
            <h3>Curated Quality</h3>
            <p>
              Every product is selected for durability, design, and daily use.
            </p>
          </div>
          <div className="value-card">
            <h3>Honest Pricing</h3>
            <p>
              No inflated markups. Just fair prices for premium essentials.
            </p>
          </div>
          <div className="value-card">
            <h3>Fast & Reliable Delivery</h3>
            <p>
              Carefully packed and delivered right to your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="home-featured">
        <div className="home-section-header">
          <h2>Featured Picks</h2>
          <Link
            aria-label="View all"
            to={"/products"}
          >
            View All Products →
          </Link>
        </div>

        <div className="home-featured-grid">
          {productsData.map((item) => (
            <ProductPreview key={item.id} data={item} />
          ))}
        </div>
      </section>

      <section className="home-story">
        <div className="home-story-text">
          <h2>Designed for everyday life</h2>
          <p>
            At Everyday Co., we believe the products you use daily should be
            simple, functional, and beautifully made. From workdays to weekends,
            our collection fits seamlessly into your lifestyle.
          </p>
          <a href="/about" className="text-link">
            Learn more about us →
          </a>
        </div>

        <div className="home-story-image">
          <img src={Story} alt="Brand story" />
        </div>
      </section>

      <section className="home-trust">
        <div className="home-trust-grid">
          <div>
            <strong>⭐ 4.6+</strong>
            <span>Average customer rating</span>
          </div>
          <div>
            <strong>📦 10,000+</strong>
            <span>Orders delivered</span>
          </div>
          <div>
            <strong>🔁 Easy Returns</strong>
            <span>Hassle-free support</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
