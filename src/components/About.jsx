import { useState } from "react";

const About = () => {

  const [showMore, setShowMore] = useState(false);

  return (

    <section
      id="about"
      className="px-8 py-28 bg-[#0f0a07] dark:bg-[#0f0a07] text-white dark:text-white bg-[#f5ebe0] text-black transition duration-500"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
            alt="Coffee"
            className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
            About Us
          </p>

          <h2 className="text-5xl font-black leading-tight mb-8">

            Crafted Coffee
            <br />
            Cozy Moments ✨

          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">

            At Coffee Crumbs, we believe every cup of coffee
            carries a story. Our café is designed to create
            warm experiences, meaningful conversations,
            and unforgettable moments.

          </p>

          {showMore && (

            <div className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">

              <p>
                We carefully select premium coffee beans
                and craft every beverage with passion and precision.
              </p>

              <p>
                Whether you're here to work, relax,
                or spend time with friends,
                Coffee Crumbs offers the perfect atmosphere.
              </p>

              <p>
                Our mission is simple —
                serve happiness one cup at a time ☕✨
              </p>

            </div>

          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-[#d4a373] text-black px-8 py-4 rounded-full font-bold hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-lg"
          >

            {showMore ? "Show Less" : "Learn More"}

          </button>

        </div>

      </div>

    </section>

  );
};

export default About;