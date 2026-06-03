const Gallery = () => {
  return (
    <section 
    id="gallery"
    className="px-8 py-28">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
            Gallery
          </p>

          <h2 className="text-5xl font-black mb-6">
            Moments Brewed To Perfection ☕✨
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 hover:-translate-y-2 transition duration-300"
          />

        </div>

      </div>

    </section>
  );
};

export default Gallery;