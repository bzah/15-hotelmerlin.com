import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: `https://hotelmerlin.com${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Hotel Merlin Editorial Team" },
      publisher: {
        "@type": "Organization",
        name: "Hotel Merlin",
        logo: { "@type": "ImageObject", url: "https://hotelmerlin.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://hotelmerlin.com/blog/${post.slug}` },
      articleSection: post.category,
    };
    const id = "jsonld-blogpost";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | Hotel Merlin Indonesia Blog 2026`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        article={{
          publishedTime: post.date,
          modifiedTime: post.date,
          section: post.category,
          tags: [post.category, "Indonesia Travel", "Hotels 2026"],
        }}
        keywords={`${post.title.toLowerCase()}, ${post.category.toLowerCase()} indonesia 2026, indonesia travel blog`}
      />
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-10">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-1 text-secondary-foreground/70 hover:text-primary transition-colors text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground max-w-3xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-secondary-foreground/60 mt-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary hover:prose-a:text-gold-dark">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;

            // Helper to parse inline **bold** within text
            const renderInline = (text: string) => {
              const parts = text.split(/(\*\*.*?\*\*)/g);
              return parts.map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={j} className="text-foreground">{part.slice(2, -2)}</strong>;
                }
                return part;
              });
            };

            if (trimmed.startsWith("## "))
              return <h2 key={i} className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
            if (trimmed.startsWith("### "))
              return <h3 key={i} className="text-xl md:text-2xl font-heading font-semibold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
            if (trimmed.startsWith("**") && trimmed.endsWith("**"))
              return <p key={i} className="font-bold text-foreground mt-4 mb-1">{trimmed.slice(2, -2)}</p>;
            if (trimmed.startsWith("- **")) {
              const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]?\s*(.*)$/);
              if (match) return <div key={i} className="flex gap-2 text-muted-foreground mb-1 ml-4"><span className="text-primary">•</span><span><strong className="text-foreground">{match[1]}</strong> — {renderInline(match[2])}</span></div>;
            }
            if (trimmed.startsWith("- "))
              return <div key={i} className="flex gap-2 text-muted-foreground mb-1 ml-4"><span className="text-primary">•</span><span>{renderInline(trimmed.slice(2))}</span></div>;
            if (/^\d+\.\s/.test(trimmed)) {
              const match = trimmed.match(/^(\d+)\.\s\*\*(.+?)\*\*\s*[—–-]?\s*(.*)$/);
              if (match) return <div key={i} className="flex gap-2 text-muted-foreground mb-1 ml-4"><span className="text-primary font-bold">{match[1]}.</span><span><strong className="text-foreground">{match[2]}</strong> — {renderInline(match[3])}</span></div>;
              return <div key={i} className="flex gap-2 text-muted-foreground mb-1 ml-4"><span className="text-primary font-bold">{trimmed.match(/^\d+/)?.[0]}.</span><span>{renderInline(trimmed.replace(/^\d+\.\s*/, ""))}</span></div>;
            }
            if (trimmed.startsWith("[") && trimmed.includes("](")) {
              const linkMatch = trimmed.match(/\[(.+?)\]\((.+?)\)/);
              if (linkMatch) return <p key={i} className="mt-6"><Link to={linkMatch[2]} className="inline-flex items-center gap-2 text-primary hover:text-gold-dark font-medium transition-colors">{linkMatch[1]}</Link></p>;
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-3">{renderInline(trimmed)}</p>;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-lg navy-gradient text-center">
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-3">
            Ready to Explore?
          </h3>
          <p className="text-secondary-foreground/70 mb-6">
            Browse curated tours and activities across Indonesia with our trusted partners.
          </p>
          <Link
            to="/#tours"
            className="inline-block gold-gradient text-secondary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Tours & Activities
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
