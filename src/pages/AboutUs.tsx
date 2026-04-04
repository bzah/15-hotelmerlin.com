import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Globe, Users, Award, MapPin, Mail, Phone, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Hotel Merlin — Indonesia Hotel Guide & Legal Notice";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Learn about Hotel Merlin — Indonesia's trusted hotel comparison and travel guide. Legal notice, editorial policy, affiliate disclosure, and contact information.");
    window.scrollTo(0, 0);

    // LocalBusiness + Organization schema
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://hotelmerlin.com/#business",
        name: "Hotel Merlin",
        alternateName: "HotelMerlin.com",
        description: "Indonesia's trusted hotel comparison and travel guide covering Jakarta, Bali, Batam, Yogyakarta, Lombok, and Maumere.",
        url: "https://hotelmerlin.com",
        logo: "https://hotelmerlin.com/favicon.png",
        image: "https://hotelmerlin.com/favicon.png",
        telephone: "+62-21-0000000",
        email: "info@hotelmerlin.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Hayam Wuruk",
          addressLocality: "Jakarta",
          addressRegion: "DKI Jakarta",
          postalCode: "10120",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2088,
          longitude: 106.8456,
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        priceRange: "$-$$$$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        sameAs: [],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://hotelmerlin.com/" },
          { "@type": "ListItem", position: 2, name: "About Us", item: "https://hotelmerlin.com/about" },
        ],
      },
    ];

    const script = document.createElement("script");
    script.id = "jsonld-about";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById("jsonld-about")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-16">
        <div className="navy-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground max-w-3xl mx-auto leading-tight">
              Hotel Merlin
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
              Indonesia's trusted hotel comparison and travel guide — helping travelers find the perfect stay since 2024.
            </p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hotel Merlin was created to solve a simple problem: finding the right hotel in Indonesia shouldn't be overwhelming. With thousands of islands and countless accommodation options, travelers need a trusted guide that cuts through the noise.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We provide <strong className="text-foreground">honest, detailed guides</strong> for Indonesia's top destinations — from the luxury resorts of Bali to the hidden gems of Maumere. Every recommendation is based on real research, local knowledge, and a commitment to helping you make the best choice for your budget and travel style.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Trusted Recommendations", desc: "Every hotel and tour we feature is vetted for quality, safety, and value. We never promote properties we wouldn't stay in ourselves." },
              { icon: Globe, title: "Local Expertise", desc: "Our guides are built with deep knowledge of Indonesian culture, geography, and travel logistics — not just generic tourist information." },
              { icon: Users, title: "Traveler-First Approach", desc: "Budget backpacker or luxury honeymooner — we tailor recommendations for every type of traveler with transparent pricing information." },
              { icon: Award, title: "Up-to-Date Content", desc: "Our destination guides are continuously updated with the latest hotel openings, price changes, and travel advisories for 2026." },
            ].map((value) => (
              <div key={value.title} className="bg-card border border-border rounded-lg p-6">
                <value.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations covered */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Destinations We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "Jakarta", link: "/hotel-merlin-jakarta" },
              { name: "Bali", link: "/best-hotels-bali" },
              { name: "Batam", link: "/hotel-merlin-batam" },
              { name: "Yogyakarta", link: "/hotels-yogyakarta" },
              { name: "Lombok", link: "/hotels-lombok" },
              { name: "Maumere, Flores", link: "/merlin-hotel-maumere" },
            ].map((dest) => (
              <Link
                key={dest.name}
                to={dest.link}
                className="flex items-center gap-2 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors group"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-heading font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{dest.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Contact Us</h2>
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:info@hotelmerlin.com" className="text-foreground font-medium hover:text-primary transition-colors">info@hotelmerlin.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+62-21-0000000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <p className="text-foreground font-medium">Jl. Hayam Wuruk, Jakarta 10120, Indonesia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="mb-16" id="legal">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-7 h-7 text-primary" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Legal Notice</h2>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Site Operator</h3>
              <p>HotelMerlin.com<br />Jl. Hayam Wuruk<br />Jakarta 10120, DKI Jakarta<br />Republic of Indonesia</p>
              <p className="mt-2">Email: info@hotelmerlin.com</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Affiliate Disclosure</h3>
              <p>
                HotelMerlin.com is a participant in affiliate programs, including the GetYourGuide partner program. This means we may earn a commission when you book tours, activities, or accommodations through links on our site — at no extra cost to you. These commissions help us maintain and improve our free travel guides.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Editorial Independence</h3>
              <p>
                Our hotel recommendations and destination guides are based on independent research. Affiliate partnerships do not influence our editorial content, rankings, or recommendations. We recommend only properties and experiences we believe offer genuine value to travelers.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Disclaimer</h3>
              <p>
                The information on this website is provided for general informational purposes only. While we strive to keep content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information. Hotel prices, availability, and conditions are subject to change. Always verify details directly with the hotel or booking platform before making reservations.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Copyright</h3>
              <p>
                © {new Date().getFullYear()} HotelMerlin.com. All content, including text, images, and design, is protected by copyright law. Reproduction, distribution, or transmission of any material from this site without prior written permission is prohibited.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-base">Privacy</h3>
              <p>
                This website uses cookies and similar technologies for analytics and to improve your browsing experience. By continuing to use this site, you consent to the use of cookies. We do not sell personal data to third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Back links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Home</Link>
          <Link to="/best-hotels-bali" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Best Hotels in Bali</Link>
          <Link to="/hotel-merlin-jakarta" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Hotel Merlin Jakarta</Link>
          <Link to="/#blog" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Travel Blog</Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AboutUs;
