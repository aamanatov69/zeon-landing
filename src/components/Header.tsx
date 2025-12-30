import { useState } from "react";
import Logo from "./Logo";

const menuItems = [
  { label: "About", href: "#" },
  { label: "Products", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-6 bg-black/40 backdrop-blur-md rounded-b-xl z-20 relative">
      <Logo />
      <nav className="hidden md:flex flex-1 justify-center gap-8 text-[15px] text-gray-200 font-medium">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-[#10b981] transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button className="ml-4 px-5 py-2 border border-[#10b981] rounded-lg text-[#10b981] font-semibold shadow-[0_0_10px_#10b981] hover:bg-[#10b981] hover:text-white transition">
        Get Started
      </button>
      {/* Mobile burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-2 p-2 text-[#10b981] hover:text-white transition z-40"
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
        <nav className="absolute top-full left-0 right-0 mt-2 md:hidden bg-black/90 border border-[#10b981]/20 rounded-lg backdrop-blur-lg shadow z-30">
          <div className="flex flex-col p-4 gap-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm text-gray-200 hover:text-[#10b981] hover:bg-[#10b981]/10 rounded-lg transition border border-transparent hover:border-[#10b981]/30"
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
