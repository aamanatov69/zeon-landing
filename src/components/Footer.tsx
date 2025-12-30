const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 bg-black/60 text-center text-gray-400 text-sm border-t border-[#10b981]/20 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-gray-300">
          © {new Date().getFullYear()} Zeon Labs. All rights reserved.
        </span>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-[#10b981] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#10b981] transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
