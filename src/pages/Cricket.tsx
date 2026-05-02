import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Trophy, Activity, Clock, TrendingUp } from "lucide-react";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";
import cricket from "@/assets/sport-cricket.jpg";
import hero from "@/assets/hero-cricket.jpg";

const Cricket = () => {
  useEffect(() => {
    applySeo({
      title: "Live Cricket Betting India 2026 | IPL, T20, ODI Markets | Skyexchlive",
      description:
        "Bet on live cricket online in India — IPL 2026, T20 World Cup, ODI & Test markets on Skyexchlive. Lowest commission, fastest odds, instant ₹ withdrawals.",
      canonical: "https://skyexchlive.live/cricket",
      keywords:
        "live cricket betting tips online, ipl 2026, how to bet on live cricket matches online, sports betting platform online, online sports gaming platform, skyexchlive online platform",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Live Cricket Betting on Skyexchlive",
          url: "https://skyexchlive.live/cricket",
          description: "Live cricket betting markets on Skyexchlive — IPL, T20 World Cup, ODI, Test cricket.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchlive.live/" },
            { "@type": "ListItem", position: 2, name: "Cricket", item: "https://skyexchlive.live/cricket" },
          ],
        },
      ],
    });
  }, []);

  const markets = [
    { t: "Match Winner", d: "Pick the winning team. Best for beginners learning how to bet on live cricket matches online." },
    { t: "Top Batsman", d: "Predict the highest run-scorer. Pays 3x–8x with live updates after every over." },
    { t: "Session Runs", d: "Bet runs in 6-over blocks. Settles fast — most pros' favourite live cricket betting market." },
    { t: "Total Fours / Sixes", d: "Bet on boundary count. Great for T20 and IPL 2026 high-scoring matches." },
    { t: "Toss Winner", d: "Simple 50/50 market — locks in before every match." },
    { t: "Man of the Match", d: "Long-shot market with big payouts (5x–15x)." },
  ];

  const leagues = [
    { t: "IPL 2026", d: "All 74 matches with sub-2-second odds refresh", img: cricket, tag: "LIVE" },
    { t: "T20 World Cup", d: "Every group & knockout match", img: cricket, tag: "HOT" },
    { t: "ODI Series", d: "India vs World — bilateral series", img: cricket },
    { t: "Test Cricket", d: "Session betting + lead at end of day", img: cricket },
    { t: "BBL Australia", d: "Big Bash live odds", img: cricket },
    { t: "PSL Pakistan", d: "Pakistan Super League markets", img: cricket },
    { t: "CPL Caribbean", d: "Caribbean Premier League", img: cricket },
    { t: "Domestic T20", d: "Ranji, Vijay Hazare, Mushtaq Ali", img: cricket },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={hero} alt="Live cricket betting on skyexchlive.live - bet on IPL T20 ODI online" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative container py-12 md:py-20">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">Cricket</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Live Cricket Betting India</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Bet on <span className="text-gradient-gold">live cricket</span> in ₹ — IPL, T20, ODI & more
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-7 max-w-2xl">
              Skyexchlive gives you the fastest live cricket odds in India, lowest commission, and instant ₹ withdrawals.
              Bet on every IPL 2026 match, T20 World Cup, ODI series and Test cricket — all from your phone.
            </p>
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8">
              Get Your Cricket ID
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Activity, l: "Sub-2s", s: "Live odds refresh" },
            { icon: Trophy, l: "8 leagues", s: "IPL, T20WC, ODI, Test, BBL+" },
            { icon: Clock, l: "5–10 min", s: "₹ withdrawals" },
            { icon: TrendingUp, l: "Lowest", s: "Commission in India" },
          ].map((x) => (
            <div key={x.l} className="text-center p-5 rounded-2xl bg-gradient-card border border-border">
              <x.icon className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-xl md:text-2xl font-extrabold text-gradient-gold">{x.l}</div>
              <div className="text-xs text-muted-foreground mt-1">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          Cricket markets <span className="text-gradient-gold">on Skyexchlive</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((m) => (
            <div key={m.t} className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/60 transition">
              <h3 className="font-bold text-lg mb-2 text-primary">{m.t}</h3>
              <p className="text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Leagues you can bet on</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {leagues.map((g) => (
            <div key={g.t} className="relative rounded-2xl overflow-hidden border border-border bg-gradient-card group">
              <div className="aspect-square overflow-hidden">
                <img src={g.img} alt={`Bet on ${g.t} live online at skyexchlive.live`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
            Ready to bet on <span className="text-gradient-gold">IPL 2026?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Get your Skyexchlive cricket ID in 60 seconds on WhatsApp. Play in ₹, win in ₹.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your Cricket ID Now
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Cricket;
