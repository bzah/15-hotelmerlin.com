import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Waves, Ship, ArrowRight, TreePalm } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import batamImg from "@/assets/batam.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationBatam = () => {
  useEffect(() => {
    document.title = "Hotel Merlin Batam — Best Hotels, Beaches & Guide 2026";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Discover Hotel Merlin Batam — your guide to the best hotels, beaches, seafood, shopping, and ferry connections from Singapore. Plan your 2026 Batam getaway.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px]">
        <img src={batamImg} alt="Hotel Merlin Batam — tropical beach" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Hotel Merlin Batam
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              Your island escape just one hour from Singapore — beaches, seafood, spas, and unforgettable sunsets.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "Riau Islands" },
            { icon: Star, label: "Best For", value: "Weekend Getaways" },
            { icon: Ship, label: "From Singapore", value: "~60 min ferry" },
            { icon: Waves, label: "Beaches", value: "Pristine & Quiet" },
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
            Why Choose Hotel Merlin Batam?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Batam Island is one of Indonesia's most accessible tropical destinations, sitting just across the strait from Singapore. With duty-free shopping, world-class seafood, beautiful beaches, and hotel rates a fraction of Singapore's, Batam has become the go-to weekend escape for millions of travelers each year.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hotel Merlin Batam properties offer the ideal combination of <strong className="text-foreground">beachfront relaxation</strong> and <strong className="text-foreground">urban convenience</strong>. Whether you want a luxury resort experience or a comfortable city hotel near Nagoya Hill, there's a Merlin property for every budget.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Hotels in Batam for 2026
          </h2>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
            Beachfront Resorts
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Batam's best beach resorts are clustered along Nongsa and Waterfront City. These properties offer private beaches, infinity pools, water sports, and spa facilities. Expect rates from $60–$150/night — a steal compared to similar resorts in Bali or Phuket.
          </p>

          <h3 className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
            Nagoya City Hotels
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nagoya is Batam's commercial heart, packed with shopping malls, restaurants, and nightlife. Hotels here range from $25–$70/night and provide easy access to Nagoya Hill Shopping Mall, A2 Food Court, and the bustling night markets.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Getting to Batam from Singapore
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Three ferry terminals serve the Singapore–Batam route:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { route: "HarbourFront → Batam Centre", time: "60 min", freq: "Every 30 min" },
              { route: "HarbourFront → Sekupang", time: "45 min", freq: "Every hour" },
              { route: "Tanah Merah → Nongsapura", time: "30 min", freq: "5x daily" },
            ].map((ferry) => (
              <div key={ferry.route} className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                <Ship className="w-5 h-5 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="font-heading font-semibold text-foreground text-sm">{ferry.route}</p>
                  <p className="text-muted-foreground text-xs">{ferry.time} · {ferry.freq}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ferry tickets cost approximately <strong className="text-foreground">SGD $20–$30</strong> one-way. Book in advance during weekends and public holidays as ferries fill up quickly. Most Merlin hotels offer complimentary ferry terminal pickup.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Things to Do in Batam
          </h2>
          {[
            { name: "Nongsa Beach", desc: "Pristine white sand with views across to Singapore's skyline. Several beach clubs offer day passes." },
            { name: "Barelang Bridge", desc: "Six iconic bridges connecting Batam, Rempang, and Galang islands. A must-see for photography enthusiasts." },
            { name: "Seafood at Golden Prawn", desc: "Batam is famous for ultra-fresh seafood at prices 50–70% cheaper than Singapore. The Golden Prawn restaurants are legendary." },
            { name: "Nagoya Hill Shopping", desc: "Duty-free electronics, clothing, and souvenirs. Great for bargain hunters." },
            { name: "Spa & Massage", desc: "Batam's spas offer 90-minute full-body massages from just $15–$25 — one of the island's biggest draws." },
            { name: "Mangrove Eco-Tours", desc: "Explore Batam's mangrove forests by kayak or boat. Spot wildlife and enjoy the serene natural landscape." },
          ].map((item) => (
            <div key={item.name} className="flex gap-3 mb-4 ml-1">
              <TreePalm className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-heading font-semibold text-foreground">{item.name}</p>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit Batam
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Batam enjoys a tropical climate year-round with temperatures averaging 26–32°C. The driest months are <strong className="text-foreground">May through September</strong>, making this the ideal window for beach activities. The wet season (November–February) brings afternoon showers but rarely disrupts plans entirely. Hotel rates drop 20–30% during the wet season.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Batam Budget Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { tier: "Budget", daily: "$40–$70/day", includes: "3-star hotel, local food, ferry" },
              { tier: "Mid-Range", daily: "$80–$150/day", includes: "4-star resort, seafood dinners, spa" },
              { tier: "Luxury", daily: "$150–$300/day", includes: "5-star beach resort, water sports, fine dining" },
            ].map((b) => (
              <div key={b.tier} className="bg-card border border-border rounded-lg p-5 text-center">
                <p className="font-heading font-bold text-primary text-lg">{b.tier}</p>
                <p className="font-heading font-semibold text-foreground mt-1">{b.daily}</p>
                <p className="text-muted-foreground text-xs mt-2">{b.includes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Batam Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            From island-hopping to spa retreats — find your perfect Batam experience.
          </p>
          <a
            href={`https://www.getyourguide.com/batam-l4042/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Batam Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/hotel-merlin-jakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Hotel Merlin Jakarta
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

export default DestinationBatam;
