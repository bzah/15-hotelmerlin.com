import { useEffect } from "react";

const GYG_PARTNER = "0IQTGX8";

const GYGWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";
    script.async = true;
    script.dataset.gyg_partner_id = GYG_PARTNER;
    script.dataset.gyg_number_of_items = "8";
    script.dataset.gyg_locale_code = "en-US";
    script.dataset.gyg_currency = "USD";
    script.dataset.gyg_q = "Indonesia";
    script.dataset.gyg_widget = "activities";
    document.getElementById("gyg-widget-container")?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="activities" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.25em] uppercase font-medium mb-3">
            Book With Confidence
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            🎫 Book Indonesia Adventures
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse and book top-rated tours and activities across Indonesia — powered by GetYourGuide.
          </p>
        </div>

        <div id="gyg-widget-container" className="max-w-5xl mx-auto">
          <div data-gyg-href="https://widget.getyourguide.com/default/activities.frame" data-gyg-locale-code="en-US" data-gyg-widget="activities" data-gyg-number-of-items="8" data-gyg-partner-id={GYG_PARTNER} data-gyg-q="Indonesia" data-gyg-currency="USD"></div>
        </div>
      </div>
    </section>
  );
};

export default GYGWidget;
