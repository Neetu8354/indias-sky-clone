import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Clock, ShieldCheck, Headphones } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { applySeo } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/site";

const Contact = () => {
  useEffect(() => {
    applySeo({
      title: "Contact Skyexchange7 | 24x7 WhatsApp Support for Sky Exchange Login",
      description:
        "Contact Skyexchange7 24x7 on WhatsApp for Sky Exchange Login help, ID creation, deposit & withdrawal support. Real human support, replies in under 60 seconds.",
      canonical: "https://www.skyexchange7.live/contact",
      keywords:
        "contact skyexchange7, skyexchange7 support, sky exchange login support, whatsapp cricket id, online betting website india",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Skyexchange7",
          url: "https://www.skyexchange7.live/contact",
          description: "Get 24x7 support for Skyexchange7 login, deposits, withdrawals and account help.",
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Skyexchange7",
          url: "https://www.skyexchange7.live/",
          logo: "https://www.skyexchange7.live/favicon.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              availableLanguage: ["English", "Hindi"],
              areaServed: "IN",
              hoursAvailable: "Mo-Su 00:00-23:59",
              url: WHATSAPP_URL,
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://skyexchange7.live/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://skyexchange7.live/contact" },
          ],
        },
      ],
    });
  }, []);

  const reasons = [
    { icon: MessageCircle, t: "New Skyexchange7 ID", d: "Get your username & password in 60 seconds." },
    { icon: ShieldCheck, t: "Login issues", d: "Forgot password, account locked, or 2FA help." },
    { icon: Clock, t: "Deposit / Withdrawal", d: "UPI not credited? Withdrawal stuck? We resolve in minutes." },
    { icon: Headphones, t: "General queries", d: "Markets, odds, promotions — ask anything 24x7." },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="container py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/70">Contact</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">Contact Skyexchange7</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            24x7 <span className="text-gradient-gold">WhatsApp support</span> — real humans, instant replies
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Skyexchange7 support is online round the clock. Whether you need a new Sky Exchange Login ID,
            help with a deposit, or guidance on placing your first bet — message us on WhatsApp and get a reply in under 60 seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          <div className="p-8 rounded-2xl border border-primary/30 bg-gradient-card shadow-gold">
            <div className="h-14 w-14 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4">
              <MessageCircle className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-extrabold mb-2">Message us on WhatsApp</h2>
            <p className="text-muted-foreground mb-6">
              The fastest way to reach Skyexchange7. Open WhatsApp, send a "Hi", and our team replies within 60 seconds — in Hindi or English.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85 mb-6">
              <li>✓ 24x7 availability — including weekends & holidays</li>
              <li>✓ Average reply time: under 60 seconds</li>
              <li>✓ Hindi & English support</li>
              <li>✓ Secure — no email or password required to chat</li>
            </ul>
            <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold w-full h-12">
              Open WhatsApp Chat
            </WhatsAppButton>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold mb-4">What can we help with?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div key={r.t} className="p-5 rounded-2xl bg-gradient-card border border-border">
                  <div className="h-10 w-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center mb-3">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-1 text-sm">{r.t}</h3>
                  <p className="text-xs text-muted-foreground">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10 rounded-2xl border border-border bg-gradient-card">
          <h2 className="text-2xl font-extrabold mb-4">Support hours & service area</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Hours</div>
              <div className="text-foreground/85">24 × 7, all year round</div>
            </div>
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Languages</div>
              <div className="text-foreground/85">Hindi · English</div>
            </div>
            <div>
              <div className="text-xs text-primary font-semibold uppercase mb-1">Service area</div>
              <div className="text-foreground/85">All of India · INR (₹) only</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contact;
