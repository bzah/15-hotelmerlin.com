import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, Fish, Mountain, ArrowRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import SEOHead from "@/components/SEOHead";
import maumereImg from "@/assets/maumere.jpg";

const GYG_PARTNER = "0IQTGX8";

const DestinationMaumere = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Merlin Hotel Maumere 2026 — Flores Diving, Kelimutu Volcano & Beach Resort Guide"
        description="Merlin Hotel Maumere — your 2026 guide to Flores Island. Best dive resorts in Maumere Bay, Kelimutu sunrise tours, Sikka villages & where to stay in eastern Indonesia."
        path="/merlin-hotel-maumere"
        image="/assets/maumere.jpg"
        keywords="merlin hotel maumere, flores island hotels, best dive resort maumere, kelimutu volcano tour from maumere, where to stay maumere flores, sea world club maumere alternative, maumere bay diving, sikka village flores, hotels near frans seda airport, eastern indonesia travel guide 2026"
      />
      <JsonLd
        type="destination"
        name="Merlin Hotel Maumere"
        description="Discover Merlin Hotel Maumere on Flores Island. Complete guide to diving, Kelimutu volcano, traditional villages, and the best places to stay in eastern Indonesia."
        image="/assets/maumere.jpg"
        url="/merlin-hotel-maumere"
        geo={{ latitude: -8.6195, longitude: 122.2121 }}
        priceRange="$-$$"
        faqs={[
          { question: "How do I get to Maumere in Flores?", answer: "Fly to Frans Seda Airport (MOF) in Maumere with connections from Bali, Jakarta, or Kupang via Lion Air and Wings Air. Alternatively, take the scenic overland route from Labuan Bajo (8-10 hours)." },
          { question: "What is Merlin Hotel Maumere?", answer: "Merlin Hotel Maumere is a comfortable hotel on Flores Island, ideally located for exploring Kelimutu volcano, world-class diving spots, traditional villages, and the stunning eastern Indonesian coastline." },
          { question: "What is there to do in Maumere?", answer: "Top activities include diving and snorkeling in the Maumere Bay marine reserve, visiting Kelimutu's tri-colored crater lakes, exploring traditional Sikka weaving villages, and beach hopping along the north coast." },
          { question: "Is Maumere safe for tourists?", answer: "Yes, Maumere and Flores Island are very safe for tourists. The local Sikkanese people are known for their warm hospitality. Standard travel precautions apply as with any destination." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Destinations", url: "/#destinations" },
          { name: "Merlin Hotel Maumere", url: "/merlin-hotel-maumere" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px]">
        <img src={maumereImg} alt="Merlin Hotel Maumere — Flores Island" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Destination Guide</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              Merlin Hotel Maumere
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl text-lg">
              Indonesia's hidden gem — where world-class diving meets volcanic landscapes and ancient traditions on Flores Island.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-4xl">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: MapPin, label: "Location", value: "Flores, NTT" },
            { icon: Star, label: "Best For", value: "Diving & Culture" },
            { icon: Fish, label: "Marine Life", value: "World-Class" },
            { icon: Mountain, label: "Landscape", value: "Volcanic" },
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
            Why Visit Maumere?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Maumere is the largest town on Flores Island in East Nusa Tenggara — one of Indonesia's least-visited yet most spectacular regions. While Bali and Jakarta draw millions, Maumere remains blissfully uncrowded, offering authentic cultural experiences, some of the planet's best coral reefs, and landscapes shaped by active volcanoes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The <strong className="text-foreground">Merlin Hotel Maumere</strong> serves as the perfect base for exploring Flores Island. From here, travelers can arrange diving excursions, visit the tri-colored Kelimutu crater lakes, and experience traditional Ngada and Sikka village life — all within a day's reach.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Where to Stay in Maumere
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Maumere's accommodation ranges from simple guesthouses to comfortable mid-range hotels. The Merlin Hotel offers air-conditioned rooms, on-site dining, and tour arrangement services. For dive-focused travelers, several beachfront dive resorts along the coast between Maumere and Larantuka provide all-inclusive packages.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hotel rates in Maumere are remarkably affordable — expect to pay <strong className="text-foreground">$20–$60/night</strong> for a clean, comfortable room. Premium dive resorts with full board run $80–$150/night.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Top Experiences Near Maumere
          </h2>
          {[
            { name: "Maumere Bay Diving", desc: "The Maumere Bay marine reserve is legendary among divers. Expect pristine coral walls, pygmy seahorses, whale sharks (seasonal), and near-zero crowds. Visibility often exceeds 30 meters." },
            { name: "Kelimutu Crater Lakes", desc: "Three volcanic crater lakes that change color — from turquoise to red to black — due to mineral reactions. A 3-hour drive from Maumere followed by a sunrise hike. Absolutely unmissable." },
            { name: "Traditional Ikat Weaving Villages", desc: "Sikka and Watublapi villages are renowned for hand-woven ikat textiles. Watch artisans create intricate patterns using techniques passed down for generations." },
            { name: "Wuring Fishing Village", desc: "A stilted Bajau fishing village built entirely over the sea. Visit the morning fish market for an authentic glimpse into maritime Indonesian life." },
            { name: "Blue Stone Beach (Pantai Koka)", desc: "A dramatic double-cove beach with striking blue stones, framed by green hills. One of Flores' most photogenic spots — and usually deserted." },
            { name: "Lela & Sikka Historical Sites", desc: "Portuguese colonial ruins and ancient Catholic churches dating back to the 16th century, reflecting Flores' unique blend of European and Austronesian heritage." },
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
            Maumere Diving Guide
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Maumere was Indonesia's diving secret long before Raja Ampat gained fame. The bay's coral reefs were damaged by a 1992 earthquake but have made a remarkable recovery, and today the biodiversity rivals anywhere in the Coral Triangle.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { site: "Tanjung Pombo", depth: "5–30m", highlight: "Macro paradise — nudibranch, frogfish, octopus" },
              { site: "Babi Island", depth: "8–25m", highlight: "Pristine hard coral gardens, schooling fish" },
              { site: "Pangabatang", depth: "5–20m", highlight: "Sea snakes, reef sharks, and stunning coral" },
              { site: "Don Bosco Reef", depth: "10–35m", highlight: "Dramatic wall dive, pelagics, barracuda" },
            ].map((site) => (
              <div key={site.site} className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading font-semibold text-foreground text-sm">{site.site}</p>
                <p className="text-muted-foreground text-xs mt-1">Depth: {site.depth}</p>
                <p className="text-muted-foreground text-xs">{site.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dive costs average <strong className="text-foreground">$30–$50 per dive</strong> including equipment rental. Multi-day packages with accommodation are available from $200–$400. The best diving season runs from <strong className="text-foreground">April through November</strong>.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Getting to Maumere
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Maumere's Frans Seda Airport (MOF) has daily flights from Bali (Denpasar) and Kupang via Wings Air and NAM Air. Flight time from Bali is approximately 1.5 hours. From Maumere, it's also possible to drive the Trans-Flores Highway to Ende, Bajawa, and eventually Labuan Bajo — one of Indonesia's most epic road trips.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
            Best Time to Visit Maumere
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The dry season from <strong className="text-foreground">April to October</strong> offers the best weather and diving conditions. The Kelimutu sunrise hike is best in the dry season when skies are clear. The wet season (November–March) brings lush green landscapes and fewer tourists, but some roads may be challenging.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Explore Flores Tours & Activities
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            From Kelimutu sunrise treks to world-class diving — discover the magic of Flores Island.
          </p>
          <a
            href={`https://www.getyourguide.com/flores-l32295/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Flores Tours <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/hotel-merlin-jakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Hotel Merlin Jakarta
          </Link>
          <Link to="/hotel-merlin-batam" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">
            → Hotel Merlin Batam
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

export default DestinationMaumere;
