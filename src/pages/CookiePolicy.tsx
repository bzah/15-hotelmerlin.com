import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Cookie Policy — Hotel Merlin"
        description="Cookie Policy for HotelMerlin.com — what cookies we use, why, and how to manage your preferences."
        path="/cookie-policy"
        keywords="hotel merlin cookie policy, gdpr cookies"
      />
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Cookie Policy</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Last updated: April 4, 2026</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, analyze traffic, and provide a better user experience. Cookies can be "session" (deleted when you close your browser) or "persistent" (remain until they expire or you delete them).</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Cookies We Use</h2>
            <div className="overflow-x-auto mt-3">
              <table className="w-full border border-border rounded-lg text-xs">
                <thead>
                  <tr className="bg-card">
                    <th className="text-left p-3 font-heading font-semibold text-foreground">Cookie</th>
                    <th className="text-left p-3 font-heading font-semibold text-foreground">Purpose</th>
                    <th className="text-left p-3 font-heading font-semibold text-foreground">Duration</th>
                    <th className="text-left p-3 font-heading font-semibold text-foreground">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="p-3">_ga</td><td className="p-3">Google Analytics — distinguishes users</td><td className="p-3">2 years</td><td className="p-3">Analytics</td></tr>
                  <tr><td className="p-3">_gid</td><td className="p-3">Google Analytics — distinguishes users</td><td className="p-3">24 hours</td><td className="p-3">Analytics</td></tr>
                  <tr><td className="p-3">_gat</td><td className="p-3">Google Analytics — throttle request rate</td><td className="p-3">1 minute</td><td className="p-3">Analytics</td></tr>
                  <tr><td className="p-3">gyg_*</td><td className="p-3">GetYourGuide — affiliate tracking</td><td className="p-3">30 days</td><td className="p-3">Affiliate</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. Essential Cookies</h2>
            <p>Some cookies are strictly necessary for the website to function. These cannot be disabled as they are essential for security, network management, and accessibility.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from all or specific sites</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-2">Note: Blocking cookies may affect your experience on our website and limit certain functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Third-Party Cookies</h2>
            <p>Some cookies are set by third-party services that appear on our pages, such as Google Analytics and GetYourGuide. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">6. Contact</h2>
            <p>For questions about our cookie policy, contact us at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/privacy-policy" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Terms of Service</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
