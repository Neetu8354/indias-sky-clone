import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Trophy, Users, Wallet, Headphones, Zap } from "lucide-react";
import { BlogHeader } from "@/components/site/BlogHeader";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";

const About = () => {
  useEffect(() => {
    applySeo({
      title: "About Skyexchlive | India's Trusted Online Sports Gaming Platform 2026",
      description:
        "About Skyexchlive (Sky Exchange Login) — India's leading online sports gaming platform since 2017. 10L+ players, 1000+ games, instant ₹ withdrawals, 24x7 WhatsApp support.",
      canonical: "https://skyexchlive.live/about",
      keywords:
        "about skyexchlive, sky exchange login, online sports gaming platform, sports betting platform online, skyexchlive online platform",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Skyexchlive",
          url: "https://skyexchlive.live/about",
          description:
            "Learn about Skyexchlive — India's trusted online cricket and casino gaming platform.",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchlive.live/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://skyexchlive.live/about" },
          ],
        },
      ],
    });
  }, []);

  const stats = [
    { v: "2017", l: "Launched" },
    { v: "10L+", l: "Active Players" },
    { v: "1000+", l: "Games" },
    { v: "₹500Cr+", l: "Paid out in ₹" },
  ];

  const values = [
    { icon: ShieldCheck, t: "Bank-grade security", d: "SSL encryption, PCI-compliant payments, and verified WhatsApp-only onboarding." },
    { icon: Zap, t: "Instant everything", d: "60-second ID creation, 5-minute UPI deposits, and 5–10 minute withdrawals." },
    { icon: Headphones, t: "Real human support", d: "24x7 WhatsApp team — replies in under a minute, in Hindi or English." },
    { icon: Trophy, t: "Best odds in India", d: "Lowest commission rates and fastest live odds refresh among Indian online betting websites." },
    { icon: Users, t: "10 lakh+ players", d: "Trusted by Indian cricket fans since 2017 — across every state." },
    { icon: Wallet, t: "INR-first", d: "Deposit and withdraw in ₹ — UPI, PhonePe, GPay, Paytm, Net Banking." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />

      <section className="container py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/70">About</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">About Skyexchlive</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            India's most trusted <span className="text-gradient-gold">online sports gaming platform</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Skyexchlive (Sky Exchange Login) has been India's leading online cricket & casino platform since 2017.
            Get your ID on WhatsApp in 60 seconds, play in ₹, and withdraw winnings instantly to any Indian bank account.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.l} className="text-center p-5 md:p-6 rounded-2xl bg-gradient-card border border-border shadow-gold">
              <div className="text-2xl md:text-4xl font-extrabold text-gradient-gold">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Our story</h2>
            <p className="text-muted-foreground mb-4">
              Skyexchlive was founded in 2017 with one mission — make online sports gaming in India simple, safe and lightning fast. No long signup forms, no email verification delays, no hidden fees.
            </p>
            <p className="text-muted-foreground mb-4">
              Today, Skyexchlive serves over 10 lakh active players across India, processing more than ₹500 crore in payouts. We power live cricket betting on IPL, T20 World Cup, ODI and Test cricket — plus 1000+ casino games including Andar Bahar, Teen Patti, Aviator and live dealer roulette.
            </p>
            <p className="text-muted-foreground">
              Every Skyexchlive account is created on WhatsApp, secured with bank-grade SSL, and supported 24x7 by real humans — not chatbots.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.t} className="p-5 rounded-2xl bg-gradient-card border border-border">
                <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-3">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold mb-1 text-sm">{v.t}</h3>
                <p className="text-xs text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 md:p-10 rounded-2xl border border-primary/30 bg-gradient-card text-center shadow-gold">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Ready to join <span className="text-gradient-gold">10 lakh+ Indian players?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Get your free Skyexchlive ID on WhatsApp in under 60 seconds.
          </p>
          <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
            Get Your Online ID
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default About;
