import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Bento } from "@/components/site/Bento";
import { About } from "@/components/site/About";
import { Steps } from "@/components/site/Steps";
import { Stats } from "@/components/site/Stats";
import { PromoSlider } from "@/components/site/PromoSlider";
import { Testimonials } from "@/components/site/Testimonials";
import { Payments } from "@/components/site/Payments";
import { FAQ } from "@/components/site/FAQ";
import { Responsible } from "@/components/site/Responsible";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Skyexchange7 — Cricket & Casino in ₹ | India 2026";
    const ensure = (sel: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) {
        el = document.createElement(sel.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };
    ensure('meta[name="description"]', { name: "description", content: "Skyexchange7: India's premium cricket & casino site. WhatsApp ID in 60s, live IPL odds, UPI deposits & 5-min INR payouts. 24×7 support." });
    ensure('link[rel="canonical"]', { rel: "canonical", href: "https://skyexchange7.live/" });
    ensure('meta[property="og:title"]', { property: "og:title", content: "Skyexchange7 — Cricket & Casino in ₹ | India 2026" });
    ensure('meta[property="og:description"]', { property: "og:description", content: "WhatsApp ID in 60 seconds. Sub-2-second IPL odds. 5-minute INR withdrawals. Built for serious Indian players." });
    ensure('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensure('meta[property="og:url"]', { property: "og:url", content: "https://skyexchange7.live/" });
    ensure('meta[property="og:image"]', { property: "og:image", content: "https://skyexchange7.live/og-image.jpg" });
    ensure('meta[name="twitter:image"]', { name: "twitter:image", content: "https://skyexchange7.live/og-image.jpg" });
    ensure('meta[name="twitter:title"]', { name: "twitter:title", content: "Skyexchange7 — Cricket & Casino in ₹ | India 2026" });
    ensure('meta[name="twitter:description"]', { name: "twitter:description", content: "Premium cricket & casino in INR. 60-second WhatsApp onboarding, 5-minute payouts, sub-2-second live odds." });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <Bento />
      <About />
      <Steps />
      <Stats />
      <PromoSlider />
      <Testimonials />
      <Payments />
      <FAQ />
      <Responsible />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
