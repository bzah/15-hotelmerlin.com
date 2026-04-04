import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ParentsInfo = () => {
  useEffect(() => {
    document.title = "Parents Info — Hotel Merlin | Child Safety & Family Travel";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Parents' information for HotelMerlin.com. Learn about child safety online, our data practices for minors, and family travel tips across Indonesia.");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative pt-16">
        <div className="navy-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <Users className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-foreground">Parents Info</h1>
            <p className="text-secondary-foreground/70 mt-3 text-sm">Child Safety & Family Travel Guide</p>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose-custom space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Our Commitment to Child Safety</h2>
            <p>At HotelMerlin.com, the safety and privacy of children is extremely important to us. Our website is designed for adults planning travel to Indonesia, but we understand that children may access our site. This page explains our practices and provides guidance for parents and guardians.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Children's Privacy (COPPA Compliance)</h2>
            <p>HotelMerlin.com complies with the Children's Online Privacy Protection Act (COPPA) and similar international regulations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>We do <strong className="text-foreground">not</strong> knowingly collect personal information from children under 13</li>
              <li>We do <strong className="text-foreground">not</strong> require any personal information to browse our travel guides</li>
              <li>Our contact form is intended for adults only</li>
              <li>We do not use targeted advertising directed at children</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">If Your Child Has Provided Information</h2>
            <p>If you believe your child under 13 has submitted personal information through our contact form, please contact us immediately at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>. We will promptly delete any such information from our records.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Tips for Parents</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Supervise your children's online activities and discuss internet safety</li>
              <li>Use parental controls and content filters on browsers and devices</li>
              <li>Teach children never to share personal information online without your permission</li>
              <li>Review the sites your child visits and the apps they use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Family Travel in Indonesia</h2>
            <p>Indonesia is a wonderful destination for families. Here are our top tips:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-foreground">Best family destinations:</strong> Bali (Sanur, Nusa Dua), Yogyakarta, and Lombok</li>
              <li><strong className="text-foreground">Health:</strong> Consult a travel doctor 4-6 weeks before departure for recommended vaccinations</li>
              <li><strong className="text-foreground">Hotels:</strong> Many Indonesian resorts offer kids' clubs, family suites, and babysitting services</li>
              <li><strong className="text-foreground">Safety:</strong> Use reputable tour operators and always supervise children near water</li>
              <li><strong className="text-foreground">Food:</strong> Indonesian cuisine is generally mild and kid-friendly — try nasi goreng and chicken satay</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">Contact Us</h2>
            <p>If you have any concerns about child safety or privacy on our website, please contact us at <a href="mailto:info@hotelmerlin.com" className="text-primary hover:underline">info@hotelmerlin.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link to="/privacy-policy" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Privacy Policy</Link>
          <Link to="/about" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ About Us</Link>
          <Link to="/best-hotels-bali" className="text-primary hover:text-gold-dark font-medium text-sm transition-colors">→ Family Hotels in Bali</Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default ParentsInfo;
