import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dice5, Spade, Plane, Crown } from "lucide-react";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";
import casino from "@/assets/sport-casino.jpg";
import andar from "@/assets/sport-andarbahar.jpg";
import teen from "@/assets/sport-teenpatti.jpg";
import aviator from "@/assets/sport-aviator.jpg";
import slots from "@/assets/sport-slots.jpg";

const Casino = () => {
  useEffect(() => {
    applySeo({
      title: "Live Casino India 2026 | Andar Bahar, Teen Patti, Aviator | Skyexchange1",
      description:
        "Play live casino games in India on Skyexchange1 — Andar Bahar, Teen Patti, Aviator, Roulette, Dragon Tiger and 1000+ titles. INR deposits, instant withdrawal, 24x7 support.",
      canonical: "https://skyexchange1.live/casino",
      keywords:
        "live casino india, andar bahar online, teen patti, aviator game, dragon tiger, online sports gaming platform, skyexchange1 online platform, mobile friendly sports betting platforms",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Live Casino on Skyexchange1",
          url: "https://skyexchange1.live/casino",
          description: "1000+ live casino games on the Skyexchange1 online platform — playable in INR.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchange1.live/" },
            { "@type": "ListItem", position: 2, name: "Casino", item: "https://skyexchange1.live/casino" },
          ],
        },
      ],
    });
  }, []);

  const games = [
    { img: andar, t: "Andar Bahar", d: "Indian classic · 2.15% house edge", tag: "LIVE" },
    { img: teen, t: "Teen Patti", d: "3 Patti live · up to 1000x payouts", tag: "HOT" },
    { img: aviator, t: "Aviator", d: "Crash multiplier · 10x+ wins" },
    { img: casino, t: "Live Roulette", d: "European & Auto · 24x7 dealers" },
    { img: casino, t: "Dragon Tiger", d: "Fast 30-second rounds" },
    { img: slots, t: "Mega Slots 777", d: "Jackpot ₹1 Cr+" },
    { img: andar, t: "Lucky 7", d: "Quick-win card game" },
    { img: teen, t: "Live Poker", d: "Tournaments & cash tables" },
  ];

  const categories = [
    { icon: Spade, t: "Indian Card Games", d: "Andar Bahar, Teen Patti, Lucky 7 — the classics every Indian player loves." },
    { icon: Plane, t: "Crash Games", d: "Aviator and instant-win games with auto cash-out and 1000x potential." },
    { icon: Crown, t: "Live Dealer", d: "Roulette, Baccarat, Blackjack, Dragon Tiger — streamed in HD 24x7." },
    { icon: Dice5, t: "Slots & Jackpots", d: "1000+ slot titles — from ₹10 spins to ₹1 Cr+ progressive jackpots." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="relative border-b border-border">
        <div className="container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Casino</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Live Casino India</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              1000+ <span className="text-gradient-gold">live casino games</span> in ₹
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Play Andar Bahar, Teen Patti, Aviator, Roulette and 1000+ live dealer games on the Skyexchange1 online platform.
              All in INR, mobile friendly, with instant deposits via UPI and withdrawals in 5–10 minutes.
            </p>
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">
              Get Your Casino ID
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <div key={c.t} className="p-6 rounded-2xl bg-gradient-card border border-border text-center">
              <div className="h-12 w-12 mx-auto rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3">
                <c.icon />
              </div>
              <h3 className="font-bold mb-1">{c.t}</h3>
              <p className="text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Most popular <span className="text-gradient-gold">casino games</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group hover:border-primary/60 transition">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Play ${g.t} live online at skyexchange1.live - online sports gaming platform`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              {g.tag && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold bg-destructive text-destructive-foreground">
                  {g.tag}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-bold text-base">{g.t}</h3>
                <p className="text-xs text-muted-foreground">{g.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <div className="p-6 md:p-10 rounded-2xl border border-primary/30 bg-gradient-card text-center shadow-gold">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Play live casino in <span className="text-gradient-gold">₹ today</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Instant ID on WhatsApp. UPI deposits. 5-minute withdrawals. 24x7 live dealers.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your Casino ID Now
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Casino;
