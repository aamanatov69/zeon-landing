const Logo = () => {
  const glow = "#a21caf";
  return (
    <div
      className="flex items-center select-none"
      style={{ transform: "skewX(-18deg)" }}
    >
      <span
        className="text-gray-100 font-extrabold text-2xl sm:text-3xl tracking-tighter"
        style={{
          WebkitTextStroke: `2px ${glow}`,
          letterSpacing: "-0.15em",
          fontFamily: "Montserrat, Arial, sans-serif",
          filter: `drop-shadow(0 0 8px ${glow})`,
          transition: "filter 0.5s, WebkitTextStroke 0.5s",
        }}
      >
        ZL
      </span>
    </div>
  );
};

export default Logo;
