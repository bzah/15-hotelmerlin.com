import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Mountain, Waves, ArrowRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import lombokImg from "@/assets/lombok.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationLombok = () => {
  useEffect(() => {
    document.title = "Hotels in Lombok 2026 — Beaches, Rinjani & Gili Islands Guide";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Find the best hotels in Lombok for 2026. Complete guide to pristine beaches, Mount Rinjani trekking, Gili Islands, surfing, and luxury resorts. Bali's unspoiled neighbor.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative h-[55vh] min-h-[400px]">
        <img src={lombokImg} alt="Hotels in Lombok — Mount Rinjani crater lake" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Hotels in Lombok
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              Bali's unspoiled neighbor — pristine beaches, the mighty Mount Rinjani, and the paradise Gili Islands.
            </p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "West Nusa Tenggara" },
            { icon: Star, label: "Best For", value: "Beaches & Trekking" },
            { icon: Mountain, label: "Highlight", value: "Mount Rinjani" },
            { icon: Waves, label: "Surfing", value: "World-Class Breaks" },
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
            Why Choose Lombok Over Bali?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Lombok is what Bali was 20 years ago — stunning natural beauty without the crowds. While Bali has become increasingly developed, Lombok retains an authentic, untouched quality that adventurous travelers crave. The beaches are emptier, the prices are lower, and the landscapes are arguably even more dramatic thanks to the towering presence of <strong className="text-foreground">Mount Rinjani</strong>, Indonesia's second-highest volcano.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Add the nearby <strong className="text-foreground">Gili Islands</strong> — three car-free coral islands with crystal-clear water, sea turtles, and a laid-back vibe — and Lombok becomes one of Indonesia's most compelling destinations for 2026.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Areas to Stay in Lombok
          </h2>
          {[
            { name: "Senggigi — West Coast Hub", desc: "Lombok's most developed tourist area with sunset views, beachfront hotels, and easy access to the Gili Islands. Hotels from $20–$200/night." },
            { name: "Kuta Lombok — South Coast Paradise", desc: "Not to be confused with Bali's Kuta — this is wild, pristine coastline with turquoise bays, epic surf, and the new Mandalika resort zone. Hotels from $15–$300/night." },
            { name: "Gili Trawangan — Party Island", desc: "The liveliest Gili with bars, diving, and a stunning sunset side. No cars or motorbikes — just bicycles and horse carts. Hotels from $15–$250/night." },
            { name: "Gili Air — Best of Both", desc: "The perfect middle ground — lively enough for socializing, quiet enough for relaxation. Best snorkeling of the three Gilis. Hotels from $20–$200/night." },
            { name: "Gili Meno — Honeymoon Island", desc: "The quietest and most romantic Gili. Famous for its underwater statues (Nest sculpture) and nesting sea turtles. Hotels from $25–$350/night." },
            { name: "Tetebatu — Mountain Village", desc: "A cool highland village on Rinjani's slopes with rice terraces, waterfalls, and authentic Sasak culture. Homestays from $10–$40/night." },
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
            Top Experiences in Lombok
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              { exp: "Mount Rinjani Trek", desc: "2–3 day trek to the crater rim (3,726m). Stunning crater lake, sunrise above the clouds. Permits required." },
              { exp: "Gili Islands Hopping", desc: "Snorkel with sea turtles, dive pristine reefs, and island-hop between all three Gilis by boat." },
              { exp: "Tanjung Aan Beach", desc: "A crescent bay with unique pepper-grain sand and turquoise water. Often called Lombok's most beautiful beach." },
              { exp: "Surfing at Desert Point", desc: "One of the world's best left-hand barrels. Also great waves at Gerupuk and Selong Belanak for beginners." },
              { exp: "Sendang Gile Waterfall", desc: "A spectacular twin waterfall near Senaru village — the gateway to Mount Rinjani treks." },
              { exp: "Sasak Village Visit", desc: "Explore traditional Sasak villages like Sade and Ende, where centuries-old customs and weaving traditions are preserved." },
            ].map((item) => (
              <div key={item.exp} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{item.exp}</p>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Lombok Budget Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { tier: "Budget", daily: "$25–$50/day", includes: "Guesthouse, local food, scooter rental" },
              { tier: "Mid-Range", daily: "$60–$150/day", includes: "Boutique hotel, restaurants, guided tours" },
              { tier: "Luxury", daily: "$150–$500/day", includes: "Beachfront resort, private transfers, diving" },
            ].map((b) => (
              <div key={b.tier} className="bg-card border border-border rounded-lg p-5 text-center">
                <p className="font-heading font-bold text-primary text-lg">{b.tier}</p>
                <p className="font-heading font-semibold text-foreground mt-1">{b.daily}</p>
                <p className="text-muted-foreground text-xs mt-2">{b.includes}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit & Getting There
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The dry season (<strong className="text-foreground">May–October</strong>) is best for beaches, diving, and Rinjani trekking. Lombok International Airport (LOP) has direct flights from Jakarta, Bali, Singapore, and Kuala Lumpur. Fast boats from Bali to the Gili Islands take 1.5–2.5 hours. Public ferries from Padang Bai (Bali) to Lembar (Lombok) take 4–5 hours and cost just $3.
          </p>
        </div>

        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Lombok Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            From Rinjani treks to Gili Island adventures — discover Lombok's natural wonders.
          </p>
          <a
            href={`https://www.getyourguide.com/lombok-l1044/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Lombok Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/best-hotels-bali" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Best Hotels in Bali</Link>
          <Link to="/hotels-yogyakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotels in Yogyakarta</Link>
          <Link to="/hotel-merlin-batam" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotel Merlin Batam</Link>
          <Link to="/#blog" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Travel Blog</Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DestinationLombok;
