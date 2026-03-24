import logo from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          <div className="footer-brand">
            <div className="brand-row">
                <div className="brand"><img src={logo} alt="Logo" /></div>
            </div>
            <p className="brand-desc">
              Thoughtfully curated everyday essentials designed for modern,
              simple living.
            </p>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="/shipping">Shipping & Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Everyday Co. All rights reserved.</p>
          <p className="footer-tagline">Made for everyday living</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
