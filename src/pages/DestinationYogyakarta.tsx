import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Landmark, Drama, ArrowRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import yogyakartaImg from "@/assets/yogyakarta.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationYogyakarta = () => {
  useEffect(() => {
    document.title = "Hotels in Yogyakarta 2026 — Borobudur, Prambanan & Travel Guide";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Discover the best hotels in Yogyakarta for 2026. Visit Borobudur and Prambanan temples, explore batik workshops, Javanese cuisine, and the Sultan's Palace. Complete travel guide.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        type="destination"
        name="Hotels in Yogyakarta"
        description="Discover the best hotels in Yogyakarta for 2026. Visit Borobudur and Prambanan temples, explore batik workshops, Javanese cuisine, and the Sultan's Palace."
        image="/assets/yogyakarta.jpg"
        url="/hotels-yogyakarta"
        geo={{ latitude: -7.7956, longitude: 110.3695 }}
        priceRange="$-$$$"
        faqs={[
          { question: "How far is Borobudur from Yogyakarta?", answer: "Borobudur temple is about 40 km northwest of Yogyakarta city, approximately a 1-hour drive. Sunrise tours depart around 4 AM and are highly recommended." },
          { question: "What is the best area to stay in Yogyakarta?", answer: "Malioboro Street is the most popular area for tourists with easy access to shopping, street food, and the Sultan's Palace. Prawirotaman is great for boutique hotels and a more local vibe." },
          { question: "How many days do you need in Yogyakarta?", answer: "3-4 days is ideal: one day for Borobudur, one for Prambanan, one for the city (Kraton, Malioboro, batik workshops), and an optional day for Jomblang Cave or Mount Merapi." },
          { question: "Is Yogyakarta cheaper than Bali?", answer: "Yes, significantly. Budget accommodation starts at $8-15/night, meals cost $1-5, and entrance fees to temples are $15-25 for foreigners. It's one of Indonesia's most affordable destinations." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Destinations", url: "/#destinations" },
          { name: "Hotels in Yogyakarta", url: "/hotels-yogyakarta" },
        ]}
      />
      <Navbar />

      <div className="relative h-[55vh] min-h-[400px]">
        <img src={yogyakartaImg} alt="Hotels in Yogyakarta — Borobudur temple" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Hotels in Yogyakarta
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              Indonesia's cultural capital — home to Borobudur, Prambanan, royal heritage, and the soul of Java.
            </p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "Central Java" },
            { icon: Star, label: "Best For", value: "Temples & History" },
            { icon: Landmark, label: "UNESCO Sites", value: "Borobudur & Prambanan" },
            { icon: Drama, label: "Culture", value: "Javanese Heritage" },
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
            Why Visit Yogyakarta?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yogyakarta (often called "Jogja") is the cultural heartbeat of Indonesia. While Jakarta is the political capital and Bali the tourist capital, Yogyakarta holds the nation's soul. This is where Javanese art, philosophy, and tradition are kept alive — in the shadow of two UNESCO World Heritage temples that rank among humanity's greatest architectural achievements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yogyakarta is also one of Indonesia's most <strong className="text-foreground">affordable destinations</strong>. A comfortable mid-range hotel costs $25–$60/night, a full meal at a local warung is $1–$3, and a guided tour of Borobudur at sunrise runs about $30. For cultural depth per dollar, nowhere in Southeast Asia competes.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Hotels in Yogyakarta 2026
          </h2>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Luxury & Heritage Hotels</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { name: "The Phoenix Hotel", highlight: "Colonial-era luxury, stunning pool garden, central Malioboro location" },
              { name: "Hyatt Regency Yogyakarta", highlight: "Resort-style with golf course, near Prambanan temple" },
              { name: "Plataran Heritage Borobudur", highlight: "Boutique hotel with direct Borobudur views from private terraces" },
              { name: "Tentrem Hotel", highlight: "Modern 5-star with Javanese aesthetics, rooftop infinity pool" },
            ].map((hotel) => (
              <div key={hotel.name} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{hotel.name}</p>
                <p className="text-muted-foreground text-xs mt-1">{hotel.highlight}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Mid-Range & Budget</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yogyakarta's Prawirotaman district is the backpacker and boutique hotel hub — dozens of charming guesthouses with gardens, pools, and breakfast included for $15–$45/night. The Malioboro area offers easy access to shopping and street food. For Borobudur proximity, stay in Magelang (30 minutes away) where resorts offer temple-view rooms from $40/night.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Experiences in Yogyakarta
          </h2>
          {[
            { name: "Borobudur Sunrise", desc: "The world's largest Buddhist temple at dawn — watch the sun rise over 72 stupas and volcanic peaks. Book the 4:30 AM entry for the full experience. A bucket-list moment." },
            { name: "Prambanan Temple Complex", desc: "A stunning 9th-century Hindu temple compound with soaring spires. The Ramayana Ballet performed here at full moon is one of Java's most magical experiences." },
            { name: "Kraton (Sultan's Palace)", desc: "The active royal court of Yogyakarta's Sultan. Tour the grounds, watch traditional gamelan performances, and learn about Javanese royal culture." },
            { name: "Batik Workshops", desc: "Yogyakarta is Indonesia's batik capital. Take a hands-on workshop to learn the wax-resist dyeing technique — you'll create your own fabric to take home." },
            { name: "Jomblang Cave", desc: "A vertical cave with a stunning 'heavenly light' beam that illuminates the underground river. One of Java's most photographed natural wonders." },
            { name: "Mount Merapi Jeep Tour", desc: "Explore the slopes of Indonesia's most active volcano by 4x4 jeep. Visit the destroyed villages from the 2010 eruption and enjoy panoramic volcanic views." },
          ].map((item) => (
            <div key={item.name} className="flex gap-3 mb-5 ml-1">
              <Compass className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-heading font-semibold text-foreground">{item.name}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Yogyakarta Food Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              { dish: "Gudeg", desc: "Yogyakarta's signature dish — young jackfruit slow-cooked in coconut milk with palm sugar. Sweet, savory, and totally unique." },
              { dish: "Bakpia Pathok", desc: "Flaky pastry filled with mung bean paste — the city's most famous souvenir snack." },
              { dish: "Sate Klathak", desc: "Lamb satay grilled on iron rods instead of bamboo skewers — a Jogja specialty." },
              { dish: "Nasi Kucing", desc: "Tiny portions of rice with various toppings, sold from street carts at night. Order 3–4 for a full meal." },
            ].map((item) => (
              <div key={item.dish} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{item.dish}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit & Getting There
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The dry season (<strong className="text-foreground">May–October</strong>) is ideal, with clear skies for temple visits and volcano treks. Yogyakarta's Adisucipto International Airport (JOG) has direct flights from Jakarta (70 min), Bali (90 min), Singapore, and Kuala Lumpur. The luxury Tugu train from Jakarta takes 7–8 hours and is an experience in itself.
          </p>
        </div>

        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Yogyakarta Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            From Borobudur sunrise to batik workshops — discover Java's cultural treasures.
          </p>
          <a
            href={`https://www.getyourguide.com/yogyakarta-l296/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Yogyakarta Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/best-hotels-bali" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Best Hotels in Bali</Link>
          <Link to="/hotels-lombok" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotels in Lombok</Link>
          <Link to="/hotel-merlin-jakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotel Merlin Jakarta</Link>
          <Link to="/#blog" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Travel Blog</Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DestinationYogyakarta;
