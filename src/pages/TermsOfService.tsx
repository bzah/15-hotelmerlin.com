import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service — Hotel Merlin Indonesia Travel Guide 2026"
        description="Terms & conditions governing the use of HotelMerlin.com — Indonesia's hotel comparison and travel guide."
        path="/terms-of-service"
        keywords="hotel merlin terms of service, hotelmerlin.com terms"
      />
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Terms of Service</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Last updated: April 4, 2026</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using HotelMerlin.com, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Description of Service</h2>
            <p>HotelMerlin.com is a travel information and hotel comparison website covering Indonesian destinations. We provide editorial content, hotel guides, destination information, and links to third-party booking services. We do not directly operate hotels or process bookings.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. Affiliate Relationships</h2>
            <p>Our website contains affiliate links to third-party services, including GetYourGuide and hotel booking platforms. When you click these links and make a purchase, we may earn a commission at no additional cost to you. This does not influence our editorial recommendations.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Accuracy of Information</h2>
            <p>While we strive to keep all information current and accurate, hotel prices, availability, policies, and travel conditions change frequently. We make no guarantees about the accuracy, completeness, or timeliness of information on this site. Always verify details directly with hotels or booking platforms before making travel arrangements.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Intellectual Property</h2>
            <p>All content on HotelMerlin.com — including text, images, graphics, logos, and design — is the property of HotelMerlin.com or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">6. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or harvest content without permission</li>
              <li>Transmit malware or interfere with website functionality</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p>HotelMerlin.com and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the website, reliance on any information provided, or any transactions conducted through third-party links.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">8. Third-Party Links</h2>
            <p>Our website contains links to external sites that are not operated by us. We have no control over the content and practices of these sites and accept no responsibility for them. We encourage you to review the terms and privacy policies of any third-party site you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">9. Modifications</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia, without regard to conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">11. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/privacy-policy" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Privacy Policy</Link>
          <Link to="/about" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ About Us</Link>
          <Link to="/legal-notice" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Legal Notice</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default TermsOfService;
