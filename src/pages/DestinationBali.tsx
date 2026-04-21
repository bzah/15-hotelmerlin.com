import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Waves, Flower2, ArrowRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SEOHead from "@/components/SEOHead";
import baliImg from "@/assets/bali.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationBali = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Best Luxury Hotel Bali 2026 — Top Resorts in Ubud, Seminyak, Uluwatu & Canggu"
        description="The definitive 2026 guide to the best luxury hotels in Bali. Compare 5-star resorts in Ubud, beach villas in Seminyak, clifftop suites in Uluwatu, and surf retreats in Canggu — for every budget."
        path="/best-hotels-bali"
        image="/assets/bali.jpg"
        keywords="best luxury hotel bali 2026, best resorts in ubud, where to stay in seminyak, uluwatu clifftop villas, canggu surf hotels, nusa dua 5 star resorts, best honeymoon hotel bali, best beach club bali, bali villa with private pool, top boutique hotels bali"
      />
      <JsonLd
        type="destination"
        name="Best Hotels in Bali"
        description="Find the best hotels in Bali for 2026. Complete guide to luxury resorts, private villas, beach clubs, temples, rice terraces, and nightlife in Indonesia's island paradise."
        image="/assets/bali.jpg"
        url="/best-hotels-bali"
        geo={{ latitude: -8.3405, longitude: 115.092 }}
        priceRange="$-$$$$$"
        faqs={[
          { question: "What are the best areas to stay in Bali?", answer: "The best areas include Seminyak for beach clubs and nightlife, Ubud for culture and rice terraces, Canggu for surfing and digital nomads, Nusa Dua for luxury resorts, and Uluwatu for cliff-top views and world-class surf." },
          { question: "How much does a hotel in Bali cost per night?", answer: "Budget guesthouses start at $15-30/night, mid-range hotels run $50-150/night, and luxury resorts range from $200-1000+/night depending on the area and season." },
          { question: "When is the best time to visit Bali?", answer: "The dry season from April to October is ideal. July-August is peak season with higher prices. May-June and September offer great weather with fewer crowds." },
          { question: "Is Bali good for families?", answer: "Yes, Bali is excellent for families with kid-friendly beaches in Sanur and Nusa Dua, water parks, cultural activities, and many family resorts with children's programs." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Destinations", url: "/#destinations" },
          { name: "Best Hotels in Bali", url: "/best-hotels-bali" },
        ]}
      />
      <Navbar />

      <div className="relative h-[55vh] min-h-[400px]">
        <img src={baliImg} alt="Best Hotels in Bali — tropical paradise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Best Hotels in Bali
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              The Island of the Gods — where ancient temples meet world-class resorts, surf breaks, and unforgettable sunsets.
            </p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "Lesser Sunda Islands" },
            { icon: Star, label: "Best For", value: "Luxury & Culture" },
            { icon: Waves, label: "Beaches", value: "World-Famous" },
            { icon: Flower2, label: "Vibe", value: "Spiritual & Vibrant" },
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
            Why Bali Remains Indonesia's #1 Destination
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bali needs no introduction. This small island has captured the world's imagination with its unique blend of Hindu spirituality, jaw-dropping natural beauty, and a hospitality industry that ranges from $10/night guesthouses to $5,000/night clifftop villas. In 2026, Bali continues to evolve with new luxury openings, improved infrastructure, and a growing focus on sustainable tourism.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Whether you're seeking a <strong className="text-foreground">honeymoon retreat in Ubud</strong>, a <strong className="text-foreground">surf holiday in Canggu</strong>, or a <strong className="text-foreground">party weekend in Seminyak</strong>, the right hotel makes all the difference. Here's our definitive guide to Bali's best accommodation for every budget and travel style.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Areas to Stay in Bali
          </h2>

          {[
            { name: "Ubud — Cultural Heart", desc: "Rice terraces, art galleries, yoga retreats, and the Sacred Monkey Forest. Best for couples, wellness seekers, and culture lovers. Hotels from $30–$500/night." },
            { name: "Seminyak — Beach & Nightlife", desc: "Trendy beach clubs, boutique shopping, and Bali's best restaurants. The sunset strip along Double Six Beach is iconic. Hotels from $50–$800/night." },
            { name: "Canggu — Surf & Digital Nomads", desc: "Bali's coolest neighborhood with world-class surf breaks, coworking spaces, and a vibrant café scene. Hotels from $25–$300/night." },
            { name: "Nusa Dua — Luxury Resorts", desc: "Gated resort enclave with pristine beaches, championship golf courses, and international five-star brands. Hotels from $100–$1,500/night." },
            { name: "Uluwatu — Cliffs & Surf", desc: "Dramatic clifftop temples, legendary surf breaks (Padang Padang, Bingin), and some of Bali's most exclusive villas. Hotels from $40–$2,000/night." },
            { name: "Sanur — Relaxed & Family-Friendly", desc: "Calm waters, traditional charm, and a quieter alternative to the west coast. Perfect for families and older travelers. Hotels from $20–$200/night." },
          ].map((area) => (
            <div key={area.name} className="flex gap-3 mb-5 ml-1">
              <Compass className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-heading font-semibold text-foreground">{area.name}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Hotels & Resorts in Bali 2026
          </h2>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Luxury ($$$$)</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { name: "Four Seasons Sayan", area: "Ubud", highlight: "Iconic riverside resort, infinity pool above the jungle canopy" },
              { name: "Bulgari Resort", area: "Uluwatu", highlight: "Italian luxury on Bali's southern cliffs, private beach" },
              { name: "The Mulia", area: "Nusa Dua", highlight: "All-suite beachfront, 6 restaurants, world-class spa" },
              { name: "Capella Ubud", area: "Ubud", highlight: "Glamping-style luxury tents in the rainforest" },
            ].map((hotel) => (
              <div key={hotel.name} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{hotel.name}</p>
                <p className="text-primary text-xs font-medium">{hotel.area}</p>
                <p className="text-muted-foreground text-xs mt-1">{hotel.highlight}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Mid-Range ($$)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bali's mid-range scene ($50–$150/night) is exceptional. Boutique hotels in Ubud offer private pools for under $100, while Canggu's stylish guesthouses rival properties costing three times as much elsewhere in Asia. Look for properties with rice field views, included breakfast, and complimentary scooter rental.
          </p>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">Budget ($)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Budget travelers can find clean, comfortable rooms for $15–$40/night across Bali. Hostels in Canggu and Kuta start at $8/night for dorms. Many budget properties include breakfast, WiFi, and pool access — making Bali one of the world's best-value destinations.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Must-Do Experiences in Bali
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              { exp: "Tegallalang Rice Terraces", desc: "Iconic stepped rice paddies near Ubud — best at sunrise" },
              { exp: "Uluwatu Temple Sunset", desc: "Clifftop temple with kecak fire dance performances at dusk" },
              { exp: "Mount Batur Sunrise Trek", desc: "2-hour hike to watch sunrise over the volcanic caldera" },
              { exp: "Nusa Penida Day Trip", desc: "Kelingking Beach, Angel's Billabong, and manta ray snorkeling" },
              { exp: "Ubud Art & Craft Markets", desc: "Handmade textiles, jewelry, and paintings by local artisans" },
              { exp: "Seminyak Beach Clubs", desc: "Potato Head, Ku De Ta — sunset cocktails with ocean views" },
            ].map((item) => (
              <div key={item.exp} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{item.exp}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit Bali
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bali's dry season runs from <strong className="text-foreground">April to October</strong>, with July–August being peak season. The shoulder months of April–May and September–October offer the best combination of good weather and lower prices. The wet season (November–March) brings afternoon thunderstorms but mornings are usually sunny, and hotel rates drop 30–50%.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Getting to Bali
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ngurah Rai International Airport (DPS) receives direct flights from Singapore, Kuala Lumpur, Sydney, Tokyo, Seoul, and many other cities. From Jakarta, flights take approximately 2 hours with multiple daily departures on Garuda Indonesia, Lion Air, and AirAsia. Airport transfers to Ubud take about 90 minutes; Seminyak/Canggu are 30–45 minutes.
          </p>
        </div>

        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Bali Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            From temple tours to surf lessons — discover unforgettable Bali experiences.
          </p>
          <a
            href={`https://www.getyourguide.com/bali-l347/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Bali Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/hotels-lombok" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotels in Lombok</Link>
          <Link to="/hotels-yogyakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotels in Yogyakarta</Link>
          <Link to="/hotel-merlin-jakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotel Merlin Jakarta</Link>
          <Link to="/#blog" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Travel Blog</Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DestinationBali;
