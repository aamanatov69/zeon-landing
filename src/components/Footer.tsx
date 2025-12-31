const Footer = () => {
  const glow = "#a21caf";
  return (
    <footer
      className="w-full py-6 sm:py-8 px-2 sm:px-4 bg-black/60 text-center text-gray-400 text-xs sm:text-sm mt-8 sm:mt-12"
      style={{ borderTop: `2px solid ${glow}33` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        <span className="text-gray-300">
          © {new Date().getFullYear()} Zion Labs. All rights reserved.
        </span>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="transition"
            style={{ color: undefined }}
            onMouseEnter={(e) => (e.currentTarget.style.color = glow)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="transition"
            style={{ color: undefined }}
            onMouseEnter={(e) => (e.currentTarget.style.color = glow)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
