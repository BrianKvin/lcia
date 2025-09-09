import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Community from "@/components/Community";
import Leadership from "@/components/Leadership";
import Membership from "@/components/Membership";
import BusinessDirectory from "@/components/BusinessDirectory";
import Welfare from "@/components/Welfare";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Welfare />
      <Events />
      <Gallery />
      <Community />
      <Leadership />
      <Membership />
      <BusinessDirectory />
      <Footer />
    </div>
  );
};

export default Index;
