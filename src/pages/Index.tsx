import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import WhyVisit from "@/components/WhyVisit";
import Tours from "@/components/Tours";
import GYGWidget from "@/components/GYGWidget";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <WhyVisit />
      <Tours />
      <GYGWidget />
      <Footer />
    </div>
  );
};

export default Index;
