import toursBg from "@/assets/tours-bg.jpg";

const GYG_PARTNER = "0IQTGX8";

const tours = [
  {
    title: "Jakarta City Tour & Old Town",
    description: "Explore Jakarta's historic old town, Kota Tua, with its Dutch colonial architecture, vibrant street art, and local cuisine.",
    duration: "6 hours",
    link: `https://www.getyourguide.com/jakarta-l294/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
  {
    title: "Batam Island Beach & Snorkeling",
    description: "Discover Batam's crystal-clear waters with a full-day snorkeling adventure and beach relaxation at pristine island spots.",
    duration: "Full day",
    link: `https://www.getyourguide.com/batam-l4042/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
  {
    title: "Flores & Komodo Dragon Adventure",
    description: "From Maumere, embark on an unforgettable journey to see the legendary Komodo dragons and dive world-class reef sites.",
    duration: "2-3 days",
    link: `https://www.getyourguide.com/flores-l32295/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
  {
    title: "Borobudur Temple Sunrise Tour",
    description: "Witness the magical sunrise over the ancient Borobudur temple, a UNESCO World Heritage Site and one of the world's greatest Buddhist monuments.",
    duration: "8 hours",
    link: `https://www.getyourguide.com/yogyakarta-l297/?partner_id=${GYG_PARTNER}&utm_medium=online_publisher`,
  },
];

const Tours = () => {
  return (
    <section id="tours" className="relative py-24">
      <img
        src={toursBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Unforgettable Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Popular Tours & Activities
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Book top-rated tours and activities across Indonesia with instant confirmation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tours.map((tour) => (
            <a
              key={tour.title}
              href={tour.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-secondary/90 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading text-lg font-semibold text-secondary-foreground group-hover:text-gold transition-colors">
                  {tour.title}
                </h3>
                <span className="text-xs text-gold bg-gold/10 px-3 py-1 rounded-full whitespace-nowrap ml-3">
                  {tour.duration}
                </span>
              </div>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                {tour.description}
              </p>
              <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
                Book Now →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
