import { useState } from "react";
import Logo from "./Logo";

const menuItems = [
  // { label: "About", href: "#" },
  { label: "Products", href: "#" },
  // { label: "Solutions", href: "#" },
  // { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const glow = "#a21caf";

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-8 flex items-center justify-between py-4 sm:py-6 bg-black/40 backdrop-blur-md rounded-b-xl z-20 relative">
      <Logo />
      <nav className="hidden md:flex flex-1 justify-center gap-4 sm:gap-8 text-[15px] text-gray-200 font-medium">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition"
            style={{ color: undefined, textShadow: `0 0 8px ${glow}66` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = glow)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className="ml-4 px-5 py-2 rounded-lg font-semibold transition"
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
      {/* Mobile burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-2 p-2 transition z-40"
        style={{ color: glow }}
        aria-label="Toggle menu"
      >
        <div className="w-7 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>
      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="absolute top-full left-0 right-0 mt-2 md:hidden bg-black/90 rounded-lg backdrop-blur-lg shadow z-30"
          style={{ border: `2px solid ${glow}33` }}
        >
          <div className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-gray-200 rounded-lg transition border border-transparent"
                style={{
                  boxShadow: `0 0 8px ${glow}33`,
                  border: `2px solid transparent`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = glow;
                  e.currentTarget.style.background = glow + "22";
                  e.currentTarget.style.border = `2px solid ${glow}66`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.border = `2px solid transparent`;
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
