import { Link } from "react-router-dom";
import jakartaImg from "@/assets/jakarta.jpg";
import batamImg from "@/assets/batam.jpg";
import maumereImg from "@/assets/maumere.jpg";
import baliImg from "@/assets/bali.jpg";
import yogyakartaImg from "@/assets/yogyakarta.jpg";
import lombokImg from "@/assets/lombok.jpg";

const GYG_PARTNER = "0IQTGX8";

const destinations = [
  {
    name: "Bali",
    slug: "best-hotels-bali",
    image: baliImg,
    description:
      "The Island of the Gods — luxury resorts, ancient temples, rice terraces, and world-famous beaches. Indonesia's #1 destination.",
  },
  {
    name: "Jakarta",
    slug: "hotel-merlin-jakarta",
    image: jakartaImg,
    description:
      "Indonesia's vibrant capital — explore iconic landmarks, world-class shopping, and rich cultural heritage. Find the best Merlin hotels in Jakarta.",
  },
  {
    name: "Yogyakarta",
    slug: "hotels-yogyakarta",
    image: yogyakartaImg,
    description:
      "Indonesia's cultural capital — home to Borobudur, Prambanan temples, batik workshops, and rich Javanese heritage.",
  },
  {
    name: "Batam",
    slug: "hotel-merlin-batam",
    image: batamImg,
    description:
      "A tropical island paradise just a ferry ride from Singapore. Enjoy stunning beaches, resorts, and water sports at Hotel Merlin Batam.",
  },
  {
    name: "Lombok",
    slug: "hotels-lombok",
    image: lombokImg,
    description:
      "Bali's unspoiled neighbor — Mount Rinjani, the Gili Islands, pristine beaches, and epic surf breaks await.",
  },
  {
    name: "Maumere",
    slug: "merlin-hotel-maumere",
    image: maumereImg,
    description:
      "A hidden gem on Flores Island — discover pristine diving spots, traditional villages, and breathtaking volcanic landscapes.",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Where We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Top Destinations
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From bustling cities to hidden island paradises, discover the best hotels and experiences across Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              to={`/${dest.slug}`}
              className="card-hover group rounded-2xl overflow-hidden bg-card border border-border block"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.name} - Hotel Merlin`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-bold text-primary-foreground">
                  {dest.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {dest.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-gold-dark transition-colors">
                  Explore {dest.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
