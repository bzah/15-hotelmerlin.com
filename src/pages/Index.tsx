import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import WhyVisit from "@/components/WhyVisit";
import Tours from "@/components/Tours";
import GYGWidget from "@/components/GYGWidget";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Hotel Merlin — Best Hotels in Indonesia 2026 | Bali, Jakarta, Lombok & Yogyakarta Guide"
        description="Hotel Merlin — the complete 2026 guide to the best luxury hotels, beach resorts & boutique stays in Indonesia. Expert reviews for Bali, Jakarta, Batam, Yogyakarta, Lombok & Maumere."
        path="/"
        keywords="best hotels in indonesia 2026, best luxury hotel bali 2026, where to stay in bali for honeymoon, hotel merlin jakarta, merlynn park hotel jakarta, best beach resorts indonesia, gili islands hotels, hotels near borobudur, top boutique hotels yogyakarta, indonesia travel guide 2026"
      />
      <JsonLd
        type="organization"
        name="Hotel Merlin"
        description="Hotel Merlin — your complete guide to the best hotels in Indonesia. Find luxury resorts, budget stays, and curated tours across Jakarta, Bali, Batam, Yogyakarta, Lombok, and Maumere."
        image="/favicon.png"
        url="/"
        faqs={[
          { question: "What is Hotel Merlin?", answer: "Hotel Merlin is a comprehensive travel guide helping you find the best hotels across Indonesia, including Jakarta, Bali, Batam, Yogyakarta, Lombok, and Maumere." },
          { question: "Which Indonesian destinations does Hotel Merlin cover?", answer: "We cover six top destinations: Jakarta (capital city), Bali (island paradise), Batam (Singapore gateway), Yogyakarta (cultural heart), Lombok (unspoiled beaches), and Maumere on Flores Island." },
          { question: "How do I book hotels through Hotel Merlin?", answer: "Hotel Merlin provides curated guides and links to trusted booking partners. Browse our destination pages for hotel recommendations and book directly through our partner links." },
          { question: "What is the best time to visit Indonesia?", answer: "The dry season from May to October is ideal for most destinations. Bali, Lombok, and Yogyakarta are best visited during these months for outdoor activities and sightseeing." },
        ]}
      />
      <Navbar />
      <Hero />
      <Destinations />
      <WhyVisit />
      <Tours />
      <GYGWidget />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
