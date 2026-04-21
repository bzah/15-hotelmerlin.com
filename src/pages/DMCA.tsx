import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DMCA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="DMCA Takedown Policy — Hotel Merlin"
        description="DMCA copyright takedown policy for HotelMerlin.com. How to report copyright infringement and submit takedown requests."
        path="/dmca"
        keywords="hotel merlin dmca, copyright takedown indonesia"
      />
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">DMCA Policy</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Digital Millennium Copyright Act Notice</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Copyright Policy</h2>
            <p>HotelMerlin.com respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond to notices of alleged copyright infringement that comply with applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Reporting Copyright Infringement</h2>
            <p>If you believe that content on our website infringes your copyright, please send a written notification to our designated copyright agent with the following information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>A physical or electronic signature of the copyright owner or authorized agent</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing, with sufficient detail for us to locate it on our website</li>
              <li>Your contact information (name, address, telephone number, email address)</li>
              <li>A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner</li>
              <li>A statement, under penalty of perjury, that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. DMCA Agent</h2>
            <div className="bg-card border border-border rounded-lg p-5">
              <p><strong className="text-foreground">DMCA Agent</strong></p>
              <p className="mt-2">HotelMerlin.com</p>
              <p>Jl. Hayam Wuruk, Jakarta 10120, Indonesia</p>
              <p>Email: <a href="mailto:dmca@hotelmerlin.com" className="text-primary hover:underline">dmca@hotelmerlin.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Counter-Notification</h2>
            <p>If you believe your content was removed by mistake or misidentification, you may submit a counter-notification to our DMCA Agent containing:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your physical or electronic signature</li>
              <li>Identification of the removed material and its former location</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
              <li>Your name, address, phone number, and consent to jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">5. Repeat Infringers</h2>
            <p>We reserve the right to terminate access for users who are repeat infringers of copyrighted material.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/legal-notice" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Legal Notice</Link>
          <Link to="/terms-of-service" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Terms of Service</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default DMCA;
