import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Utensils, ShoppingBag, Landmark, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jakartaImg from "@/assets/jakarta.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationJakarta = () => {
  useEffect(() => {
    document.title = "Hotel Merlin Jakarta — Best Hotels & Travel Guide 2026";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Find the best Hotel Merlin Jakarta options for 2026. Complete guide to luxury hotels, top attractions, dining, shopping, and nightlife in Indonesia's capital city.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px]">
        <img src={jakartaImg} alt="Hotel Merlin Jakarta — Jakarta skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Hotel Merlin Jakarta
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              Your complete guide to the best hotels, attractions, and experiences in Indonesia's dynamic capital.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">

        {/* Quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "Java, Indonesia" },
            { icon: Star, label: "Best For", value: "Culture & Business" },
            { icon: Utensils, label: "Cuisine", value: "World-Class" },
            { icon: ShoppingBag, label: "Shopping", value: "Luxury Malls" },
          ].map((fact) => (
            <div key={fact.label} className="bg-card border border-border rounded-lg p-4 text-center">
              <fact.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">{fact.label}</p>
              <p className="font-heading font-semibold text-foreground text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Why Stay at a Merlin Hotel in Jakarta?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jakarta is Indonesia's sprawling capital — a city of 11 million people where ancient Javanese culture collides with ultra-modern skyscrapers. Whether you're visiting for business or leisure, finding the right hotel is essential. The Merlin hotel brand has long been synonymous with quality hospitality in Jakarta, offering prime locations near key business districts, cultural landmarks, and entertainment hubs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            From the iconic <strong className="text-foreground">Merlynn Park Hotel</strong> in the heart of the city to boutique properties scattered across Jakarta's diverse neighborhoods, Merlin hotels deliver the perfect blend of comfort, convenience, and Indonesian warmth.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Hotels in Jakarta for 2026
          </h2>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
            1. Merlynn Park Hotel Jakarta
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Located on Jalan KH Hasyim Ashari in Central Jakarta, the Merlynn Park Hotel is a 4-star property that consistently ranks among the city's best mid-range luxury options. With 250+ rooms, a rooftop pool, multiple dining venues, and direct access to shopping centers, it's ideal for both business travelers and tourists.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Central Location", "Rooftop Pool", "Free WiFi", "Airport Shuttle", "Spa & Fitness"].map(tag => (
              <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
            2. Budget-Friendly Merlin Properties
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For budget-conscious travelers, several Merlin-affiliated guesthouses and 3-star hotels in South Jakarta and East Jakarta offer clean, comfortable rooms starting from $25–$40/night. These properties provide excellent value while maintaining the service standards the Merlin name is known for.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Attractions Near Merlin Hotels in Jakarta
          </h2>

          {[
            { name: "National Monument (Monas)", desc: "Jakarta's iconic 132-meter tower offering panoramic city views. Just 10 minutes from most central Merlin hotels." },
            { name: "Old Town (Kota Tua)", desc: "Dutch colonial architecture, museums, and vibrant street art. Perfect for a half-day cultural walk." },
            { name: "Grand Indonesia Mall", desc: "One of Southeast Asia's largest malls with luxury brands, gourmet dining, and entertainment." },
            { name: "Thousand Islands (Kepulauan Seribu)", desc: "A stunning archipelago just 1–2 hours by speedboat — ideal for day trips with snorkeling and beach relaxation." },
            { name: "Taman Mini Indonesia Indah", desc: "A cultural theme park showcasing architecture, costumes, and traditions from all 34 Indonesian provinces." },
          ].map((attraction) => (
            <div key={attraction.name} className="flex gap-3 mb-4 ml-1">
              <Landmark className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-heading font-semibold text-foreground">{attraction.name}</p>
                <p className="text-muted-foreground text-sm">{attraction.desc}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Jakarta Dining Guide
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jakarta is a food lover's paradise. From Michelin-quality restaurants to legendary street food stalls, the city offers flavors from every corner of the archipelago. Must-try dishes include:
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              { dish: "Nasi Goreng", desc: "Indonesia's signature fried rice — available everywhere from street carts to five-star hotels." },
              { dish: "Soto Betawi", desc: "A rich, creamy beef soup native to Jakarta's Betawi culture." },
              { dish: "Kerak Telor", desc: "A savory egg-and-rice snack — Jakarta's most iconic street food." },
              { dish: "Rendang", desc: "Slow-cooked spiced beef from Padang, voted the world's most delicious food by CNN." },
            ].map((item) => (
              <div key={item.dish} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{item.dish}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit Jakarta
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jakarta has a tropical monsoon climate with two distinct seasons. The <strong className="text-foreground">dry season (May–October)</strong> is the best time to visit, with less rainfall and more comfortable temperatures around 27–33°C. The wet season (November–April) brings heavy afternoon downpours, though mornings are usually clear.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hotel rates tend to be lower during the wet season, making it a great time for budget travelers. Business travelers should note that Jakarta hosts major conferences and trade shows year-round, so booking early is always recommended.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Getting Around Jakarta
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jakarta's transportation has improved dramatically with the MRT (Mass Rapid Transit) and LRT systems. The TransJakarta bus network covers the city extensively. For convenience, ride-hailing apps like Grab and Gojek are the most popular way to get around. Most Merlin hotels also offer airport transfer services from Soekarno-Hatta International Airport (CGK), which is approximately 30–60 minutes away depending on traffic.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Jakarta Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            Discover curated experiences in Jakarta — from cultural walking tours to island-hopping adventures.
          </p>
          <a
            href={`https://www.getyourguide.com/jakarta-l294/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Jakarta Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Related */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/hotel-merlin-batam" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Hotel Merlin Batam
          </Link>
          <Link to="/merlin-hotel-maumere" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Merlin Hotel Maumere
          </Link>
          <Link to="/#blog" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Travel Blog
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DestinationJakarta;
