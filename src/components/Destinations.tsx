import { Link } from "react-router-dom";
import jakartaImg from "@/assets/jakarta.jpg";
import batamImg from "@/assets/batam.jpg";
import maumereImg from "@/assets/maumere.jpg";

const GYG_PARTNER = "0IQTGX8";

const destinations = [
  {
    name: "Jakarta",
    slug: "hotel-merlin-jakarta",
    image: jakartaImg,
    description:
      "Indonesia's vibrant capital — explore iconic landmarks, world-class shopping, and rich cultural heritage. Find the best Merlin hotels in Jakarta.",
    gygLink: `https://www.getyourguide.com/jakarta-l294/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
  {
    name: "Batam",
    slug: "hotel-merlin-batam",
    image: batamImg,
    description:
      "A tropical island paradise just a ferry ride from Singapore. Enjoy stunning beaches, resorts, and water sports at Hotel Merlin Batam.",
    gygLink: `https://www.getyourguide.com/batam-l4042/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
  {
    name: "Maumere",
    slug: "merlin-hotel-maumere",
    image: maumereImg,
    description:
      "A hidden gem on Flores Island — discover pristine diving spots, traditional villages, and breathtaking volcanic landscapes near Merlin Hotel Maumere.",
    gygLink: `https://www.getyourguide.com/flores-l32295/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
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
            From bustling cities to hidden island paradises, discover the best Merlin hotel locations across Indonesia.
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
