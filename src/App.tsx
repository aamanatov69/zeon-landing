import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <div className="bg-[#02050A]/80 text-white mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
      <Header />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
