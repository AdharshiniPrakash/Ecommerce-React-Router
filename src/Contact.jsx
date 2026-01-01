const Contact = () => {
  return (
    <>

      <section className="bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 py-16">
         
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Get in touch
            </h1>
            <p className="mt-3 text-gray-600">
              Have a question about a product, order, or partnership? We’re here
              to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Email",
                desc: "support@everydayco.in",
                sub: "We usually respond within 24 hours."
              },
              {
                title: "Phone",
                desc: "+91 XXXXX XXXXX",
                sub: "Mon–Sat, 10 AM – 6 PM"
              },
              {
                title: "Location",
                desc: "Chennai, India",
                sub: "Serving customers across India"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-2">{item.desc}</p>
                <p className="mt-1 text-gray-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <form className="bg-white border rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-3"
              />
              <select className="w-full border rounded-lg px-4 py-3">
                <option>Subject</option>
                <option>Order Query</option>
                <option>Product Question</option>
                <option>Partnership</option>
              </select>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-3"
              ></textarea>

              <button className="bg-[#6E8B7D] text-white w-full py-3 rounded-lg hover:opacity-90">
                Send Message
              </button>
            </form>

            <div>
              <h3 className="text-xl font-semibold">
                We usually respond within one business day
              </h3>
              <p className="mt-3 text-gray-600">
                Your information is safe with us and will never be shared.
              </p>

              <div className="mt-6 rounded-xl overflow-hidden border">
                <img
                  src="/images/map-placeholder.png"
                  alt="Map"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
