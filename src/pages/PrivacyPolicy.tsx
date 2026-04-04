import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Hotel Merlin";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Hotel Merlin privacy policy. Learn how we collect, use, and protect your personal data when you use HotelMerlin.com.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Privacy Policy</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Last updated: April 4, 2026</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Introduction</h2>
            <p>HotelMerlin.com ("we", "us", "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent, referring URLs, browser type, device type, and IP address.</li>
              <li><strong className="text-foreground">Contact Data:</strong> Name and email address if you voluntarily submit a contact form.</li>
              <li><strong className="text-foreground">Cookies:</strong> Small files stored on your device to improve functionality and analytics (see our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our travel guides and hotel recommendations</li>
              <li>To analyze website traffic and user behavior through analytics tools</li>
              <li>To respond to your inquiries via our contact form</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Third-Party Services</h2>
            <p>We use third-party services that may collect data, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis</li>
              <li><strong className="text-foreground">GetYourGuide:</strong> For tour and activity bookings (affiliate partner)</li>
            </ul>
            <p className="mt-2">These services have their own privacy policies governing their use of your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy. Analytics data is retained in aggregated form. Contact form submissions are retained for up to 12 months.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">7. Children's Privacy</h2>
            <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children. See our <Link to="/parents-info" className="text-primary hover:underline">Parents Info</Link> page for more details.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">9. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/about" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ About Us</Link>
          <Link to="/terms-of-service" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Terms of Service</Link>
          <Link to="/cookie-policy" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Cookie Policy</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
