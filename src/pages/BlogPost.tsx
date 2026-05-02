import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getPostBySlug, BLOG_POSTS } from "@/data/blogPosts";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) return;
    const url = `https://skyexchlive.live/blog/${post.slug}`;
    applySeo({
      title: `${post.title} | Skyexchlive`,
      description: post.description,
      canonical: url,
      keywords: post.keywords,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: "Skyexchlive" },
          publisher: {
            "@type": "Organization",
            name: "Skyexchlive",
            logo: {
              "@type": "ImageObject",
              url: "https://skyexchlive.live/favicon.png",
            },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          image: "https://skyexchlive.live/og-image.jpg",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchlive.live/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://skyexchlive.live/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        },
      ],
    });
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <article className="container py-10 md:py-16 max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/70">{post.category}</span>
        </nav>

        <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
          {post.category} · {post.readTime}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
          {post.title}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8">{post.description}</p>

        <div className="rounded-2xl overflow-hidden border border-border mb-8 shadow-gold">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        <div className="space-y-5 text-foreground/90 leading-relaxed">
          {post.body.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-extrabold mt-8 mb-2">
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i} className="text-xl font-bold mt-6 mb-1 text-primary">
                    {block.text}
                  </h3>
                );
              case "p":
                return (
                  <p key={i} className="text-base text-foreground/85">
                    {block.text}
                  </p>
                );
              case "ul":
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 text-foreground/85">
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              case "ol":
                return (
                  <ol key={i} className="list-decimal pl-6 space-y-2 text-foreground/85">
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ol>
                );
              case "quote":
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary pl-4 italic text-foreground/90 bg-card/40 py-3 rounded-r-lg"
                  >
                    {block.text}
                  </blockquote>
                );
            }
          })}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl border border-primary/30 bg-gradient-card text-center shadow-gold">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">
            Ready to play on <span className="text-gradient-gold">Skyexchlive?</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            Get your free Skyexchlive ID on WhatsApp in under 60 seconds. Play live cricket & casino in ₹.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your ID Now
          </WhatsAppButton>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold mb-5">Related Skyexchlive guides</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="block p-5 rounded-xl border border-border bg-gradient-card hover:border-primary/60 transition"
                >
                  <div className="text-xs text-primary font-semibold mb-1">{r.category}</div>
                  <div className="font-bold mb-1">{r.title}</div>
                  <div className="text-sm text-muted-foreground">{r.excerpt}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default BlogPost;
