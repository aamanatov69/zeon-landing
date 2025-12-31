const Hero = () => {
  const glow = "#a21caf";
  return (
    <section className="text-center pt-16 sm:pt-28 pb-16 sm:pb-32 px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug text-white">
        Building the Future of <br />
        <span className="text-gray-200">
          Web, Mobile & Desktop Applications
        </span>
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
        Zion Labs creates powerful, scalable, and sleek applications for modern
        businesses and developers.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-10">
        <button
          className="px-7 py-3 rounded-md font-semibold transition"
          style={{
            border: `2px solid ${glow}`,
            color: glow,
            boxShadow: `0 0 10px ${glow}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = glow;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "";
            e.currentTarget.style.color = glow;
          }}
        >
          Explore Products
        </button>
        <button
          className="px-7 py-3 rounded-md font-semibold transition"
          style={{
            border: `2px solid ${glow}`,
            color: glow,
            boxShadow: `0 0 10px ${glow}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = glow;
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "";
            e.currentTarget.style.color = glow;
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
