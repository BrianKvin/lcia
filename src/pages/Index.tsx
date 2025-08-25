import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Welfare from "@/components/Welfare";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Header />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Community />
      <Welfare />
      <Footer />
    </div>
  );
};

export default Index;
