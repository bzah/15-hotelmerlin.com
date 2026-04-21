import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/best-hotels-bali"). Used for canonical + OG URL. */
  path: string;
  /** Absolute URL OR site-relative path (e.g. "/og/bali.jpg" or "https://..."). */
  image?: string;
  /** Extra keyword targets — comma-separated, long-tail focused. */
  keywords?: string;
  /** "website" (default) or "article" for blog posts. */
  type?: "website" | "article";
  /** Article-only metadata. */
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  /** ISO 639-1, defaults to "en". */
  locale?: string;
  /** Set true on pages that should not be indexed (e.g. 404, thank-you). */
  noindex?: boolean;
}

const SITE_URL = "https://hotelmerlin.com";
const SITE_NAME = "Hotel Merlin";
const DEFAULT_IMAGE = "/favicon.png";

const absolute = (img: string) => (img.startsWith("http") ? img : `${SITE_URL}${img}`);

/**
 * Single source of truth for all SEO meta tags.
 * Manages: <title>, description, canonical, robots, keywords,
 * Open Graph, Twitter Cards, and article metadata.
 */
const SEOHead = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  keywords,
  type = "website",
  article,
  locale = "en_US",
  noindex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const imgUrl = absolute(image);

    // <title>
    document.title = title;

    // helper: upsert <meta> by name or property
    const upsert = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      } else {
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      }
    };

    upsert('meta[name="description"]', { name: "description", content: description });
    upsert('meta[name="robots"]', {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });
    if (keywords) upsert('meta[name="keywords"]', { name: "keywords", content: keywords });

    // canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Open Graph
    upsert('meta[property="og:title"]', { property: "og:title", content: title });
    upsert('meta[property="og:description"]', { property: "og:description", content: description });
    upsert('meta[property="og:type"]', { property: "og:type", content: type });
    upsert('meta[property="og:url"]', { property: "og:url", content: url });
    upsert('meta[property="og:image"]', { property: "og:image", content: imgUrl });
    upsert('meta[property="og:image:alt"]', { property: "og:image:alt", content: title });
    upsert('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    upsert('meta[property="og:locale"]', { property: "og:locale", content: locale });

    // Twitter Card
    upsert('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsert('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsert('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsert('meta[name="twitter:image"]', { name: "twitter:image", content: imgUrl });
    upsert('meta[name="twitter:image:alt"]', { name: "twitter:image:alt", content: title });

    // Article-specific tags
    const articleTagIds: string[] = [];
    const removeArticleTags = () => {
      document.head.querySelectorAll('meta[data-seo-article="1"]').forEach((n) => n.remove());
    };
    removeArticleTags();
    if (type === "article" && article) {
      const add = (property: string, content: string) => {
        const m = document.createElement("meta");
        m.setAttribute("property", property);
        m.setAttribute("content", content);
        m.setAttribute("data-seo-article", "1");
        document.head.appendChild(m);
        articleTagIds.push(property);
      };
      if (article.publishedTime) add("article:published_time", article.publishedTime);
      if (article.modifiedTime) add("article:modified_time", article.modifiedTime);
      if (article.section) add("article:section", article.section);
      article.tags?.forEach((t) => add("article:tag", t));
    }

    return () => {
      // Cleanup is intentionally minimal — next page's SEOHead will overwrite values.
      removeArticleTags();
    };
  }, [title, description, path, image, keywords, type, article, locale, noindex]);

  return null;
};

export default SEOHead;
