import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in your name, email, and message.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", { body: form });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      toast({ title: "Message sent!", description: "Thank you — we'll get back to you within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast({ title: "Failed to send", description: err.message || "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const baseUrl = "https://hotelmerlin.com";
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Hotel Merlin — Indonesia Hotel & Travel Booking Help",
        url: `${baseUrl}/contact`,
        description:
          "Get in touch with Hotel Merlin's Indonesia travel team for hotel recommendations, booking support, partnership inquiries and concierge help across Bali, Jakarta, Lombok, Yogyakarta, Batam and Maumere.",
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "Hotel Merlin", url: baseUrl },
        mainEntity: {
          "@type": "TravelAgency",
          "@id": `${baseUrl}/#organization`,
          name: "Hotel Merlin",
          url: baseUrl,
          logo: `${baseUrl}/favicon.png`,
          image: `${baseUrl}/favicon.png`,
          email: "contact@hotelmerlin.com",
          telephone: "+62-21-0000000",
          priceRange: "$-$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Hayam Wuruk",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            postalCode: "10120",
            addressCountry: "ID",
          },
          geo: { "@type": "GeoCoordinates", latitude: -6.1499, longitude: 106.8204 },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          areaServed: [
            { "@type": "Country", name: "Indonesia" },
            { "@type": "AdministrativeArea", name: "Bali" },
            { "@type": "AdministrativeArea", name: "Jakarta" },
            { "@type": "AdministrativeArea", name: "Yogyakarta" },
            { "@type": "AdministrativeArea", name: "Lombok" },
            { "@type": "AdministrativeArea", name: "Batam" },
            { "@type": "AdministrativeArea", name: "Maumere (Flores)" },
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contact@hotelmerlin.com",
              telephone: "+62-21-0000000",
              areaServed: "ID",
              availableLanguage: ["English", "Indonesian"],
              hoursAvailable: "Mo-Fr 09:00-18:00",
            },
            {
              "@type": "ContactPoint",
              contactType: "reservations",
              email: "contact@hotelmerlin.com",
              areaServed: ["ID", "SG", "MY", "AU", "US", "GB"],
              availableLanguage: ["English", "Indonesian"],
            },
            {
              "@type": "ContactPoint",
              contactType: "partnerships",
              email: "contact@hotelmerlin.com",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          ],
          knowsLanguage: ["en", "id"],
          sameAs: [],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I book a hotel through Hotel Merlin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Browse our destination guides for Bali, Jakarta, Lombok, Yogyakarta, Batam and Maumere, then use the contact form on this page or email contact@hotelmerlin.com — our team replies within 24 business hours with curated hotel recommendations and trusted booking links.",
            },
          },
          {
            "@type": "Question",
            name: "How long does Hotel Merlin take to respond to inquiries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We respond to all hotel booking inquiries, partnership requests and concierge questions within 24 hours on business days (Monday–Friday, 09:00–18:00 WIB).",
            },
          },
          {
            "@type": "Question",
            name: "Can Hotel Merlin help with multi-city Indonesia itineraries?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our Indonesia travel team specialises in multi-stop trips combining Bali, Lombok, Yogyakarta, Jakarta, Batam and Flores (Maumere). Send your dates and preferences via the contact form for a personalised itinerary.",
            },
          },
          {
            "@type": "Question",
            name: "Does Hotel Merlin work with hotel partners and travel agencies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hotels, DMCs and travel agencies in Indonesia can partner with Hotel Merlin for editorial features and distribution. Email contact@hotelmerlin.com with subject 'Partnership' to start the conversation.",
            },
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Contact Hotel Merlin", item: `${baseUrl}/contact` },
        ],
      },
    ];

    const id = "jsonld-contact";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Hotel Merlin Indonesia — Hotel Booking Help, Concierge & Partnerships 2026"
        description="Talk to Hotel Merlin's Indonesia travel team. Free help booking the best hotels in Bali, Jakarta, Lombok, Yogyakarta, Batam & Maumere. Reply within 24 hours — email contact@hotelmerlin.com."
        path="/contact"
        keywords="contact hotel merlin indonesia, indonesia hotel booking concierge, best hotels in bali booking help, jakarta hotel inquiry, lombok travel agent contact, yogyakarta hotel partnership, batam hotel booking support, hotel merlin email, indonesia trip planner contact"
      />
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary font-body text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">
              Contact Hotel Merlin Indonesia
            </h1>
            <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
              Free hotel booking help and concierge support across Bali, Jakarta, Lombok, Yogyakarta, Batam & Maumere — replies within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { icon: Mail, label: "Email", value: "contact@hotelmerlin.com", href: "mailto:contact@hotelmerlin.com" },
            { icon: Phone, label: "Phone", value: "+62-21-0000000", href: "tel:+622100000000" },
            { icon: MapPin, label: "Address", value: "Jl. Hayam Wuruk, Jakarta 10120, Indonesia", href: undefined },
            { icon: Clock, label: "Response Time", value: "Within 24 hours, Mon–Fri 09:00–18:00 WIB", href: undefined },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
              <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-primary" /> Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">Full Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5">Email Address</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-muted-foreground mb-1.5">Subject</label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none" placeholder="Tell us more..." />
            </div>
            <button type="submit" disabled={loading} className="gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>) : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Home</Link>
          <Link to="/about" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ About Us</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
