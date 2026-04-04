import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNotice = () => {
  useEffect(() => {
    document.title = "Legal Notice (Impressum) — Hotel Merlin";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Legal notice and impressum for HotelMerlin.com. Site operator information, affiliate disclosure, editorial independence, and liability disclaimer.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <Scale className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Legal Notice</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Impressum — Legal Disclosure</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Site Operator</h2>
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-heading font-semibold text-foreground text-base">HotelMerlin.com</p>
              <p className="mt-2">Jl. Hayam Wuruk</p>
              <p>Jakarta 10120, DKI Jakarta</p>
              <p>Republic of Indonesia</p>
              <p className="mt-2">Email: <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a></p>
              <p>Phone: +62-21-0000000</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Responsible for Content</h2>
            <p>The content of this website is created and managed by the editorial team at HotelMerlin.com. Responsible for content pursuant to applicable media law: HotelMerlin.com, at the address above.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Affiliate Disclosure</h2>
            <p>HotelMerlin.com is a participant in affiliate programs, including the GetYourGuide partner program (Partner ID: 0IQTGX8). This means we may earn a commission when you book tours, activities, or accommodations through links on our site — at no extra cost to you. These commissions help us maintain and improve our free travel guides.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Editorial Independence</h2>
            <p>Our hotel recommendations and destination guides are based on independent research. Affiliate partnerships do not influence our editorial content, rankings, or recommendations. We recommend only properties and experiences we believe offer genuine value to travelers.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Liability for Content</h2>
            <p>The contents of our pages were created with great care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages under general law. However, we are not obligated to monitor transmitted or stored third-party information.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Liability for Links</h2>
            <p>Our website contains links to external third-party websites. We have no influence on the content of these sites. We cannot accept any liability for external content. The respective provider or operator is always responsible for the content of linked pages.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Copyright</h2>
            <p>© {new Date().getFullYear()} HotelMerlin.com. All content, including text, images, and design, is protected by copyright law. Any use beyond the scope of copyright law requires prior written permission. Unauthorized reproduction or distribution is prohibited and may result in legal action.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Dispute Resolution</h2>
            <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. For any legal disputes, the courts of Jakarta, Indonesia shall have jurisdiction.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/about" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ About Us</Link>
          <Link to="/privacy-policy" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Terms of Service</Link>
          <Link to="/dmca" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ DMCA Policy</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default LegalNotice;
