import { MapPin, Star, Plane, Shield } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Hotels",
    description: "Curated selection of the finest Merlin hotels across Indonesia, from luxury resorts to boutique stays.",
  },
  {
    icon: MapPin,
    title: "Best Locations",
    description: "Strategic hotel locations in Jakarta, Batam, Maumere and more — close to top attractions and transport.",
  },
  {
    icon: Plane,
    title: "Seamless Booking",
    description: "Book tours, activities, and experiences directly through our trusted partners with instant confirmation.",
  },
  {
    icon: Shield,
    title: "Trusted Reviews",
    description: "All hotels and tours verified with genuine guest reviews and ratings for your peace of mind.",
  },
];

const WhyVisit = () => {
  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Your Trusted Hotel Partner
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">
            Hotel Merlin connects you with Indonesia's best hospitality — from city hotels to island retreats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <feat.icon size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{feat.title}</h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
