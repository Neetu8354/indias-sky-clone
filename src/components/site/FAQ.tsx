import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is Skyexchange1 and how does Sky Exchange Login work?",
    a: "Skyexchange1 (Sky Exchange Login) is India's trusted online sports gaming platform for live cricket betting and casino games. Just message us on WhatsApp, get your Skyexchange1 ID in under a minute, log in, deposit in ₹, and start playing on skyexchange1.live.",
  },
  {
    q: "How to login Skyexchange1 with username — step by step guide?",
    a: "Open skyexchange1.live, click the Login button, enter the username and password we send you on WhatsApp, then tap Sign In. You'll land on the dashboard where you can pick any cricket match or casino game and place a bet instantly.",
  },
  {
    q: "How do I get my Skyexchange1 online cricket ID?",
    a: "Click any WhatsApp button on skyexchange1.live. Our 24x7 support team will share your Skyexchange1 login ID and password within 1 minute — no forms, no KYC delays.",
  },
  {
    q: "How to place a bet on Skyexchange1 online site?",
    a: "After Skyexchange1 login, choose a live cricket match (IPL, T20, ODI) or a casino table, select your market, enter your stake in ₹, and confirm. Live odds update in real time and winnings are credited instantly.",
  },
  {
    q: "Is Skyexchange1 a safe online sports betting website in 2026?",
    a: "Yes. Skyexchange1 uses bank-grade SSL encryption, secure UPI / PhonePe / GPay / Paytm / Net Banking deposits, and verified WhatsApp-only support — making it one of the safest online sports betting platforms for Indian users in 2026.",
  },
  {
    q: "Which cricket leagues can I bet on at Skyexchange1?",
    a: "Skyexchange1 offers live cricket betting on IPL 2026, T20 World Cup, ODI series, Test cricket, BBL, PSL, CPL and many more — with live odds, session markets, and instant result updates.",
  },
  {
    q: "What casino games are available on the Skyexchange1 online platform?",
    a: "1000+ titles including Live Roulette, Andar Bahar, Teen Patti, Dragon Tiger, Aviator, Lucky 7, Mega Slots 777 and live dealer poker — all playable in ₹ from your Skyexchange1 account.",
  },
  {
    q: "How fast are withdrawals on Skyexchange1?",
    a: "Most withdrawals are processed within 5–10 minutes directly to your Indian bank account via UPI or Net Banking. No hidden fees, no waiting periods.",
  },
  {
    q: "Is Skyexchange1 a mobile friendly sports betting platform?",
    a: "Yes. Skyexchange1.live is fully responsive — play live cricket and casino games on any Android phone, iPhone, tablet, or desktop browser. No app download required.",
  },
  {
    q: "Does Skyexchange1 offer 24x7 support?",
    a: "Yes — our WhatsApp support team is online 24×7 to help with login issues, deposits, withdrawals, or any question about the Skyexchange1 online platform.",
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
    <section id="faq" className="py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Skyexchange1 — Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">
            Everything you need to know about Sky Exchange Login, online cricket betting & casino on skyexchange1.live
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="rounded-xl border border-border bg-gradient-card px-5">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
