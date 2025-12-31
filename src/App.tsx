import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <AnimatedBackground />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-10 xl:px-12">
        <Header />
        <Hero />
        <Products />
        <WhyChooseUs />
        <Footer />
      </div>
    </main>
  );
}

export default App;
