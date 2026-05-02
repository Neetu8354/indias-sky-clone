import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { applySeo } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    applySeo({
      title: "Page Not Found | Skyexchlive",
      description:
        "The page you're looking for doesn't exist on Skyexchlive. Return home to get your online cricket & casino ID on WhatsApp.",
      canonical: `https://skyexchlive.live${location.pathname}`,
    });
    // Hint to crawlers that this page should not be indexed
    let robots = document.head.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    const previous = robots.getAttribute("content");
    robots.setAttribute("content", "noindex, follow");
    return () => {
      if (previous) robots!.setAttribute("content", previous);
      else robots!.setAttribute("content", "index, follow");
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-extrabold text-gradient-gold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! This page doesn't exist on Skyexchlive.</p>
        <a href="/" className="inline-block px-6 py-3 rounded-lg bg-gradient-gold text-primary-foreground font-semibold shadow-gold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
