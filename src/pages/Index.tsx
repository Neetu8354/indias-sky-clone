import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Steps } from "@/components/site/Steps";
import { GameSections } from "@/components/site/GameSections";
import { Features } from "@/components/site/Features";
import { MultiDevice } from "@/components/site/MultiDevice";
import { Gameplay } from "@/components/site/Gameplay";
import { Payments } from "@/components/site/Payments";
import { PromoSlider } from "@/components/site/PromoSlider";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Responsible } from "@/components/site/Responsible";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Skyexchlive Login | Online Cricket & Casino ID | Play Fast in ₹";
    const ensure = (sel: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(sel) as HTMLElement | null;
      if (!el) {
        el = document.createElement(sel.startsWith("link") ? "link" : "meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };
    ensure('meta[name="description"]', { name: "description", content: "Skyexchlive — India's trusted online sports & casino platform. Get your Sky Exchange Login ID on WhatsApp, bet on IPL & live cricket, fast withdrawal, 24x7 support." });
    ensure('link[rel="canonical"]', { rel: "canonical", href: "https://skyexchlive.live/" });
    ensure('meta[property="og:title"]', { property: "og:title", content: "Skyexchlive Login | Online Cricket & Casino ID | Play Fast in ₹" });
    ensure('meta[property="og:description"]', { property: "og:description", content: "Get your Skyexchlive ID instantly on WhatsApp. Live cricket betting, casino games, INR deposits & instant withdrawal. 24x7 support." });
    ensure('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensure('meta[property="og:url"]', { property: "og:url", content: "https://skyexchlive.live/" });
    ensure('meta[property="og:image"]', { property: "og:image", content: "https://skyexchlive.live/og-image.jpg" });
    ensure('meta[name="twitter:image"]', { name: "twitter:image", content: "https://skyexchlive.live/og-image.jpg" });
    ensure('meta[name="twitter:title"]', { name: "twitter:title", content: "Skyexchlive Login | Online Cricket & Casino ID | Play Fast in ₹" });
    ensure('meta[name="twitter:description"]', { name: "twitter:description", content: "Skyexchlive — Sky Exchange Login for online cricket betting & live casino. Instant ID on WhatsApp." });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <WhyChoose />
      <Steps />
      <GameSections />
      <Features />
      <MultiDevice />
      <Gameplay />
      <Payments />
      <PromoSlider />
      <Stats />
      <Testimonials />
      <FAQ />
      <Responsible />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
