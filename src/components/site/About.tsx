import { ShieldCheck, Sparkles } from "lucide-react";

export const About = () => (
  <section id="about" className="py-20 md:py-32">
    <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-7">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-4">
          About Skyexchange7
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.05]">
          Built for Indian players who <span className="text-shimmer">expect more</span>.
        </h2>
        <p className="text-base md:text-lg text-foreground/75 mb-5 font-light leading-relaxed">
          Since 2017, Skyexchange7 has been the home of serious cricket and casino play in India — engineered around the things that actually matter: faster odds, faster payouts, and support staffed by real humans.
        </p>
        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          No forms. No verification queues. No hold music. Just a WhatsApp message, an ID in your hand, and a platform built to keep up with how India plays.
        </p>
        <div className="flex items-center gap-3 mt-8 text-sm text-primary">
          <ShieldCheck className="h-5 w-5" />
          <span className="tracking-wide">Bank-grade SSL · Verified KYC · Funds in segregated accounts</span>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="relative rounded-3xl overflow-hidden glass-card p-8 md:p-10 shadow-elegant">
          <div className="absolute top-6 right-6 text-primary/40">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="grid grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
            {[
              { v: "2017", l: "Founded" },
              { v: "10L+", l: "Players" },
              { v: "1,000+", l: "Markets" },
              { v: "₹500Cr+", l: "Paid out" },
            ].map((s) => (
              <div key={s.l} className="bg-card/60 p-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold text-shimmer">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1.5 tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border/40 text-xs text-muted-foreground text-center tracking-wide">
            Trusted by Indian cricket fans across every state.
          </div>
        </div>
      </div>
    </div>
  </section>
);
