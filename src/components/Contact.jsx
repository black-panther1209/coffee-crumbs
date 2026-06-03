const Contact = () => {
  return (
    <section id="contact" className="px-8 py-28">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>

          <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl font-black mb-8 leading-tight">

            Let’s Share
            <br />
            A Cup Together ☕✨

          </h2>

        </div>

        <div className="bg-[#1c120d] border border-white/10 rounded-3xl p-10">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#140d09] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-[#140d09] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#140d09] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <button className="w-full bg-[#d4a373] text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition">

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;