import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <>

      <section className="bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Everyday essentials,
              <br /> thoughtfully curated.
            </h1>
            <p className="mt-4 text-gray-600 max-w-md">
              Premium products designed for modern, everyday living — quality
              you’ll notice, simplicity you’ll love.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button className="bg-[#6E8B7D] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Shop Now
              </button>
              <a
                href="/products"
                className="text-gray-700 underline underline-offset-4"
              >
                Explore New Arrivals →
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/images/hero.jpg"
              alt="Everyday products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Curated Quality",
              desc: "Every product is selected for durability, design, and daily use."
            },
            {
              title: "Honest Pricing",
              desc: "No inflated markups. Just fair prices for premium essentials."
            },
            {
              title: "Fast & Reliable Delivery",
              desc: "Carefully packed and delivered right to your doorstep."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Picks</h2>
            <a href="/products" className="text-gray-600 hover:underline">
              View All →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <ProductCard key={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold">
            Designed for everyday life
          </h2>
          <p className="mt-4 text-gray-600">
            At Everyday Co., we believe the products you use daily should be
            simple, functional, and beautifully made. From workdays to weekends,
            our collection fits seamlessly into your lifestyle.
          </p>
          <a
            href="/about"
            className="inline-block mt-4 text-gray-800 underline"
          >
            Learn more about us →
          </a>
        </div>

        <div className="rounded-xl overflow-hidden">
          <img
            src="/images/story.jpg"
            alt="Brand story"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-semibold">⭐ 4.6+</p>
            <p className="text-gray-600 text-sm">Average customer rating</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">📦 10,000+</p>
            <p className="text-gray-600 text-sm">Orders delivered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">🔁 Easy Returns</p>
            <p className="text-gray-600 text-sm">Hassle-free support</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
