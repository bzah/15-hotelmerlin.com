import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Hotel Merlin - Luxury Hotels in Indonesia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Your Gateway to Indonesia's Finest Hotels
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Hotel Merlin
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover the best hotels, tours, and experiences across Jakarta, Batam, Maumere, and beyond.
          Book unforgettable adventures with world-class hospitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="gold-gradient px-8 py-4 rounded-lg text-secondary font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Explore Destinations
          </a>
          <a
            href="#tours"
            className="border border-primary-foreground/30 px-8 py-4 rounded-lg text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
          >
            Find Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
