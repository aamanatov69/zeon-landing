import desktop from "../assets/icons/desktop.svg";
import mobile from "../assets/icons/mobile.svg";
import web from "../assets/icons/web.svg";

const products = [
  {
    icon: web,
    title: "Web App Platform",
    text: "Build and develop fast, scalable web applications.",
  },
  {
    icon: mobile,
    title: "Mobile App Framework",
    text: "Create high performance cross-platform mobile apps.",
  },
  {
    icon: desktop,
    title: "Desktop Developer Kit",
    text: "Develop powerful cross-platform desktop applications.",
  },
];

const Products = () => {
  return (
    <section className="py-12 sm:py-24 text-center px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-16 text-white">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl mx-auto px-2 sm:px-4">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-[#23272f] border-2 border-[#a21caf] rounded-2xl p-10 shadow-[0_0_30px_#a21caf33] flex flex-col items-center transition hover:shadow-[0_0_40px_#a21caf99]"
          >
            <img
              src={p.icon}
              className="h-25 mb-9 drop-shadow-[0_0_5px_#a21caf]"
              alt={p.title}
            />
            <h3 className="text-xl font-semibold mb-3 text-white">{p.title}</h3>
            <p className="text-gray-300 mb-8 text-base">{p.text}</p>
            <button className="mt-auto border border-[#a21caf] px-6 py-2 rounded text-[#a21caf] font-semibold shadow-[0_0_10px_#a21caf] hover:bg-[#a21caf] hover:text-white transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
