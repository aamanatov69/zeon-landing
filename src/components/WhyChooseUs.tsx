import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Peter M.",
    company: "Fintech Apps",
    avatar: "P",
    text: "Zeon Labs revolutionized our development process. Their tools are unmatched in performance.",
  },
  {
    name: "Sarah L.",
    company: "FAster Apps",
    avatar: "S",
    text: "The best platform for cross-platform development. Zeon Labs is reliable, efficient, and unique.",
  },
  {
    name: "Sarah L.",
    company: "FAster Apps",
    avatar: "S",
    text: "The best platform for cross-platform development. Zeon Labs is reliable, efficient, and unique.",
  },
  {
    name: "Sarah L.",
    company: "FAster Apps",
    avatar: "S",
    text: "The best platform for cross-platform development. Zeon Labs is reliable, efficient, and unique.",
  },
];

const AUTO_SCROLL_INTERVAL = 3000;

const WhyChooseUs = () => {
  const [index, setIndex] = useState(0);
  const glow = "#a21caf";
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        Why Choose <span className="text-gray-400">Zion Labs?</span>
      </h2>
      <div className="relative max-w-xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 flex"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name + i}
                className="min-w-full bg-[#23272f] rounded-2xl p-8 flex flex-col items-start mx-auto"
                style={{
                  border: `2px solid ${glow}`,
                  boxShadow: `0 0 30px ${glow}33`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-white font-bold text-lg"
                    style={{ border: `2px solid ${glow}` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.company}</div>
                  </div>
                </div>
                <div className="text-gray-300 text-left mb-2">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Навигация */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full font-bold transition"
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
            aria-label="Previous"
          >
            &#8592;
          </button>
          {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: i === index ? glow : "#444" }}
            />
          ))}
        </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full font-bold transition"
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
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
