import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";

export interface RelatedLink {
  /** Long-tail anchor text — keyword-rich, descriptive */
  anchor: string;
  /** Internal route, e.g. "/best-hotels-bali" or "/blog/slug" */
  to: string;
  /** Short supporting line for users (and crawlers) */
  blurb: string;
  kind: "destination" | "blog";
}

interface RelatedReadsProps {
  title?: string;
  intro?: string;
  links: RelatedLink[];
}

/**
 * Internal linking module — uses descriptive long-tail anchor text
 * (not "click here") to pass topical relevance between destination
 * guides and blog posts. Improves crawlability + user navigation.
 */
const RelatedReads = ({
  title = "Related Reads",
  intro,
  links,
}: RelatedReadsProps) => {
  if (!links.length) return null;

  return (
    <aside
      aria-labelledby="related-reads-heading"
      className="mt-16 border-t border-border pt-10"
    >
      <h2
        id="related-reads-heading"
        className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2"
      >
        {title}
      </h2>
      {intro && (
        <p className="text-muted-foreground mb-6 max-w-2xl">{intro}</p>
      )}
      <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
        {links.map((link) => {
          const Icon = link.kind === "blog" ? BookOpen : MapPin;
          return (
            <li key={link.to} className="m-0">
              <Link
                to={link.to}
                className="group block bg-card border border-border rounded-lg p-5 hover:border-primary/60 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {link.anchor}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                      {link.blurb}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-3 uppercase tracking-wide">
                      {link.kind === "blog" ? "Read guide" : "Explore destination"}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default RelatedReads;
