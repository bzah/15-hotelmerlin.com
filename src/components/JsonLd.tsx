import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface JsonLdProps {
  type: "destination" | "organization";
  name: string;
  description: string;
  image: string;
  url: string;
  breadcrumbs?: BreadcrumbItem[];
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
  faqs?: FaqItem[];
}

const JsonLd = ({ type, name, description, image, url, breadcrumbs, geo, priceRange, faqs }: JsonLdProps) => {
  useEffect(() => {
    const baseUrl = "https://hotelmerlin.com";

    const schemas: object[] = [];

    // BreadcrumbList
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      });
    }

    if (type === "organization") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        description,
        url: baseUrl,
        logo: `${baseUrl}/favicon.png`,
        image: `${baseUrl}${image}`,
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Indonesian"],
        },
      });
      // WebSite with SearchAction
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url: baseUrl,
        description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      });
    }

    if (type === "destination") {
      // LodgingBusiness
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name,
        description,
        image: `${baseUrl}${image}`,
        url: `${baseUrl}${url}`,
        ...(priceRange && { priceRange }),
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
        },
        ...(geo && {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        }),
      });
      // TravelAction
      schemas.push({
        "@context": "https://schema.org",
        "@type": "TravelAction",
        name: `Travel to ${name.replace(/^(Hotel Merlin |Merlin Hotel |Best Hotels in |Hotels in )/, "")}`,
        description,
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}${url}`,
        },
        result: {
          "@type": "LodgingReservation",
          name: `Book accommodation at ${name}`,
        },
      });
    }

    // FAQPage
    if (faqs && faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }

    const scriptId = `jsonld-${url.replace(/\//g, "-")}`;
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [type, name, description, image, url, breadcrumbs, geo, priceRange, faqs]);

  return null;
};

export default JsonLd;
