import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { applySeo } from "@/lib/seo";

const Blog = () => {
  useEffect(() => {
    applySeo({
      title: "Skyexchange7 Blog | Cricket Tips, Login Guides & Online Betting Insights",
      description:
        "Skyexchange7 blog — live cricket betting tips online, Sky Exchange Login guides step by step, and safe online sports betting platform reviews for India 2026.",
      canonical: "https://skyexchange7.live/blog",
      keywords:
        "skyexchange7 blog, live cricket betting tips online, sky exchange login guide, safe online sports betting websites 2026, online sports gaming platform",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Skyexchange7 Blog",
        url: "https://skyexchange7.live/blog",
        description:
          "Cricket betting tips, Sky Exchange Login guides and online sports gaming platform insights for Indian players.",
        blogPost: BLOG_POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          datePublished: p.date,
          url: `https://skyexchange7.live/blog/${p.slug}`,
          description: p.description,
        })),
      },
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="container py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
            Skyexchange7 Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Cricket Tips, <span className="text-gradient-gold">Login Guides</span> & Betting Insights
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Practical guides for Indian players — from how to login Skyexchange7 step by step to live
            cricket betting tips online and reviews of safe online sports betting websites in 2026.
          </p>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-border bg-gradient-card hover:border-primary/60 hover:shadow-gold transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-2">
                  <span>{post.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground flex-1">{post.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-primary">Read article →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Blog;
