const Logo = () => {
  return (
    <div
      className="flex items-center select-none"
      style={{ transform: "skewX(-18deg)" }}
    >
      <span
        className="text-gray-100 font-extrabold text-2xl sm:text-3xl tracking-tighter drop-shadow-[0_0_8px_#10b981]"
        style={{
          WebkitTextStroke: "2px #10b981",
          letterSpacing: "-0.15em",
          fontFamily: "Montserrat, Arial, sans-serif",
        }}
      >
        ZL
      </span>
    </div>
  );
};

export default Logo;
