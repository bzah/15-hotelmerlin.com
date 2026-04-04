import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found — Hotel Merlin";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The page you're looking for doesn't exist. Browse our Indonesia hotel guides and travel tips.");
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-4">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="mb-2 text-7xl font-bold text-primary font-playfair">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            Sorry, the page <code className="rounded bg-muted px-2 py-1 text-sm">{location.pathname}</code> doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-12 text-left">
            <p className="mb-3 text-sm font-medium text-foreground">Popular destinations:</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li><Link to="/best-hotels-bali" className="text-primary hover:underline">Hotels in Bali</Link></li>
              <li><Link to="/hotel-merlin-jakarta" className="text-primary hover:underline">Hotel Merlin Jakarta</Link></li>
              <li><Link to="/hotels-yogyakarta" className="text-primary hover:underline">Hotels in Yogyakarta</Link></li>
              <li><Link to="/hotels-lombok" className="text-primary hover:underline">Hotels in Lombok</Link></li>
              <li><Link to="/hotel-merlin-batam" className="text-primary hover:underline">Hotel Merlin Batam</Link></li>
              <li><Link to="/merlin-hotel-maumere" className="text-primary hover:underline">Merlin Hotel Maumere</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
