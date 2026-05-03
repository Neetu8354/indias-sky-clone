import { useEffect, useState } from "react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  { img: promo1, title: "IPL 2026 — Bigger Hits, Bigger Wins", cta: "Play IPL Now" },
  { img: promo2, title: "Live Casino — Roulette, Cards & More", cta: "Enter Casino" },
  { img: promo3, title: "WhatsApp Instant ID in Seconds", cta: "Message Now" },
];

export const PromoSlider = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="promotions" className="py-10 md:py-14">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-gold group">
          <div className="relative aspect-[21/9] md:aspect-[24/9]">
            {SLIDES.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
              >
                <img src={s.img} alt={`${s.title} - play now and get rewards with skyexchange7.live`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container">
                    <div className="max-w-md">
                      <h3 className="text-2xl md:text-4xl font-extrabold mb-4 text-gradient-gold">{s.title}</h3>
                      <WhatsAppButton className="bg-gradient-gold text-primary-foreground shadow-gold">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-primary/80 text-primary hover:text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setI((p) => (p + 1) % SLIDES.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-primary/80 text-primary hover:text-primary-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "bg-primary w-8" : "bg-foreground/40 w-2"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
