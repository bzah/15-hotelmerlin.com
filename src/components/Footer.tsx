import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-gold-light mb-4">
              Hotel<span className="text-secondary-foreground">Merlin</span>
            </h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Your trusted gateway to Indonesia's finest hotels, tours, and unforgettable travel experiences.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Destinations
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><Link to="/best-hotels-bali" className="hover:text-gold transition-colors">Best Hotels in Bali</Link></li>
              <li><Link to="/hotel-merlin-jakarta" className="hover:text-gold transition-colors">Hotel Merlin Jakarta</Link></li>
              <li><Link to="/hotels-yogyakarta" className="hover:text-gold transition-colors">Hotels in Yogyakarta</Link></li>
              <li><Link to="/hotel-merlin-batam" className="hover:text-gold transition-colors">Hotel Merlin Batam</Link></li>
              <li><Link to="/hotels-lombok" className="hover:text-gold transition-colors">Hotels in Lombok</Link></li>
              <li><Link to="/merlin-hotel-maumere" className="hover:text-gold transition-colors">Merlin Hotel Maumere</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="#tours" className="hover:text-gold transition-colors">Tours & Activities</a></li>
              <li><a href="#activities" className="hover:text-gold transition-colors">Book Adventures</a></li>
              <li><a href="#destinations" className="hover:text-gold transition-colors">All Destinations</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">About Hotel Merlin</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-gold mb-4 text-sm uppercase tracking-wider">
              Indonesia Travel
            </h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              <li><a href="#" className="hover:text-gold transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Best Time to Visit</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Visa Information</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} HotelMerlin.com — All rights reserved. Find the best Merlin hotels across Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
