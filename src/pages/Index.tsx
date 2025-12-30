import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section Home */}
      <section id="home" className="pt-24">
        <HeroSection imageScale={1.3} />
      </section>

      {/* Section About */}
      <section id="about" className="pt-24">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
