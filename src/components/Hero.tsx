const Hero = () => {
  return (
    <section className="text-center pt-28 pb-32">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug text-white">
        Building the Future of <br />
        <span className="text-gray-200 drop-shadow-[0_0_12px_#10b981]">
          Web, Mobile & Desktop Applications
        </span>
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto mt-6 text-lg sm:text-xl">
        Zeon Labs creates powerful, scalable, and sleek applications for modern
        businesses and developers.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
        <button className="px-7 py-3 border border-[#10b981] rounded-md text-[#10b981] font-semibold shadow-[0_0_10px_#10b981] hover:bg-[#10b981] hover:text-white transition">
          Explore Products
        </button>
        <button className="px-7 py-3 border border-[#10b981] bg-[#10b981] text-white rounded-md font-semibold shadow-[0_0_10px_#10b981] hover:bg-white hover:text-[#10b981] transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
