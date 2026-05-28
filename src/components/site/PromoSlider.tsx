import { useEffect, useState } from "react";
import cricketImg from "@/assets/bento-cricket.jpg";
import casinoImg from "@/assets/bento-casino.jpg";
import paymentsImg from "@/assets/bento-payments.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    img: cricketImg,
    eyebrow: "IPL 2026",
    title: "Bigger hits.\nBigger wins.",
    sub: "Sub-2-second odds on every match. Match winner, session runs, top batsman, fall of wicket — all live.",
    cta: "Play IPL 2026",
  },
  {
    img: casinoImg,
    eyebrow: "Live Casino",
    title: "Real dealers.\nReal tables.\nReal time.",
    sub: "Teen Patti, Andar Bahar, Roulette, Dragon Tiger — streamed in HD, dealt 24×7 by professional croupiers.",
    cta: "Enter the floor",
  },
  {
    img: paymentsImg,
    eyebrow: "WhatsApp Onboarding",
    title: "Your ID,\nin 60 seconds.",
    sub: "Skip the forms. Skip the queues. Message us once — we hand you a secure ID, ready to play in INR.",
    cta: "Message now",
  },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="promotions" className="py-16 md:py-24">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-elegant group">
          <div className="relative aspect-[16/10] md:aspect-[21/9]">
            {SLIDES.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={s.img}
                  alt={`${s.eyebrow} on Skyexchange7`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="max-w-xl animate-fade-up">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-4">
                        {s.eyebrow}
                      </div>
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-5 whitespace-pre-line leading-[1.05]">
                        <span className="text-shimmer">{s.title}</span>
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-7 font-light leading-relaxed max-w-md">
                        {s.sub}
                      </p>
                      <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold h-12 px-8 rounded-full font-semibold">
                        {s.cta}
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-card hover:bg-primary/80 text-primary hover:text-primary-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % SLIDES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-card hover:bg-primary/80 text-primary hover:text-primary-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "bg-primary w-10" : "bg-foreground/30 w-1.5"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
