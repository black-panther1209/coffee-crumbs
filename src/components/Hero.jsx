import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 py-32 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#d4a373]/20 blur-[120px] rounded-full" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        <p className="uppercase tracking-[8px] text-[#d4a373] mb-6">
          Premium Coffee Experience
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-tight">

          Every Crumb
          <br />
          Tells a Story ☕

        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mt-8 leading-relaxed">

          Freshly brewed coffee, warm conversations,
          and moments worth remembering.

        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mt-12">

          <a href="#menu">

            <button className="bg-[#d4a373] text-black px-8 py-4 rounded-full font-bold hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-lg">

              Explore Menu

            </button>

          </a>

          <a href="#contact">

            <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black hover:scale-105 transition duration-300">

              Visit Us

            </button>

          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;