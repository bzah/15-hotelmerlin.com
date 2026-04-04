import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface JsonLdProps {
  type: "destination";
  name: string;
  description: string;
  image: string;
  url: string;
  breadcrumbs: BreadcrumbItem[];
  geo?: { latitude: number; longitude: number };
  priceRange?: string;
}

const JsonLd = ({ type, name, description, image, url, breadcrumbs, geo, priceRange }: JsonLdProps) => {
  useEffect(() => {
    const baseUrl = "https://hotelmerlin.com";

    const schemas = [
      // BreadcrumbList
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${baseUrl}${item.url}`,
        })),
      },
      // Hotel (LodgingBusiness)
      {
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
      },
      // TravelAction
      {
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
      },
    ];

    const scriptId = `jsonld-${url.replace(/\//g, "-")}`;
    // Remove existing
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [name, description, image, url, breadcrumbs, geo, priceRange]);

  return null;
};

export default JsonLd;
