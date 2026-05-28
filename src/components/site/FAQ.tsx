import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is Skyexchange7?",
    a: "Skyexchange7 is a premium online cricket and casino platform built for Indian players. We hand you a secure ID on WhatsApp in 60 seconds, accept INR deposits via UPI, and process withdrawals to your Indian bank in 5–10 minutes — all on skyexchange7.live.",
  },
  {
    q: "How do I log in to Skyexchange7?",
    a: "Open skyexchange7.live, click Login at the top right, and enter the username and password our team sent you on WhatsApp. You'll land in the dashboard with live cricket matches, casino tables, and your balance — ready to play.",
  },
  {
    q: "How do I get my Skyexchange7 ID?",
    a: "Tap any green WhatsApp button on this site. A real onboarding specialist will send your username and password within 60 seconds — no signup forms, no email loops, no KYC queues.",
  },
  {
    q: "How do I place my first bet?",
    a: "After logging in, pick a live cricket match (IPL, T20, ODI) or a casino table, choose your market, enter your stake in ₹, and confirm. Odds refresh in under two seconds and winnings are credited the moment the market settles.",
  },
  {
    q: "Is Skyexchange7 safe in 2026?",
    a: "Absolutely. We run bank-grade SSL, encrypted UPI rails, a verified KYC layer, and segregated player funds. Every withdrawal is processed in under ten minutes — making Skyexchange7 one of the safest platforms Indian players can choose this year.",
  },
  {
    q: "Which cricket leagues are covered?",
    a: "IPL 2026, T20 World Cup, ODI bilaterals, Test cricket, BBL, PSL, CPL, county cricket and domestic Indian competitions (Ranji, Vijay Hazare, Mushtaq Ali) — with live odds, session markets, and instant result updates.",
  },
  {
    q: "Which casino games can I play?",
    a: "Over 1,000 titles — Live Roulette, Andar Bahar, Teen Patti, Dragon Tiger, Aviator, Lucky 7, Mega Slots 777, live poker tournaments and progressive jackpots. All streamed in HD, all playable in ₹, all from a single account.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Most withdrawals land in your Indian bank account within 5–10 minutes via UPI or Net Banking. No hidden fees, no minimum wait periods, no questions asked.",
  },
  {
    q: "Does Skyexchange7 work on mobile?",
    a: "Beautifully. Skyexchange7.live is fully responsive across Android, iPhone, tablet and desktop — no app to download, no Play Store hoops, no compromise on speed or experience.",
  },
  {
    q: "Is support actually 24×7?",
    a: "Yes — real humans, every hour of every day, in Hindi and English. Average reply time on WhatsApp is under a minute, whether it's 3 PM on IPL final day or 4 AM mid-week.",
  },
];

export const FAQ = () => {
  useEffect(() => {
    const id = "faq-jsonld";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    return () => {
      script?.remove();
    };
  }, []);

  return (
    <section id="faq" className="py-20 md:py-32 border-t border-border/60">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] mb-6">
            Everything you'd want to <span className="text-shimmer">ask first</span>.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Honest answers on logging in, depositing, playing and cashing out. Anything missing? Our WhatsApp team is one tap away.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`i-${i}`}
                className="rounded-2xl border border-border/60 bg-card/40 px-6 transition-colors hover:border-primary/40 data-[state=open]:border-primary/50 data-[state=open]:bg-card/80"
              >
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
