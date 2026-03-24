const Contact = () => {
  return (
    <>

      <section className="contact-page">
        <div className="contact-container">
          <header className="contact-header">
            <h1>Get in touch</h1>
            <p>
              Have a question about a product, order, or partnership?
              We’re here to help.
            </p>
          </header>

          <div className="contact-cards">
            <div className="contact-card">
              <h3>Email</h3>
              <p>support@everydayco.in</p>
              <span>We usually respond within 24 hours</span>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+91 XXXXX XXXXX</p>
              <span>Mon–Sat, 10 AM – 6 PM</span>
            </div>
            <div className="contact-card">
              <h3>Location</h3>
              <p>Chennai, India</p>
              <span>Serving customers across India</span>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <select>
                <option>Subject</option>
                <option>Order Query</option>
                <option>Product Question</option>
              </select>
              <textarea placeholder="Message" rows="4" />
              <button className="primary-btn">Send Message</button>
            </form>

            <div className="contact-side">
              <h3>We usually respond within one business day</h3>
              <p>Your information is safe and will never be shared.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564999589107!2d80.22835410759328!3d13.04259364646764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1767626294666!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
