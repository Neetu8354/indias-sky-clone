import hero from "@/assets/hero-noir.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { Zap, ShieldCheck, Banknote, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Cinematic backdrop */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Skyexchange7 — premium online cricket and casino playground in India"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-noir opacity-60" />
      </div>

      <div className="relative container pt-20 pb-16 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase glass-card text-primary mb-6 md:mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            India's Premium Cricket & Casino Playground
          </span>

          <h1 className="text-[2.75rem] leading-[1.02] md:text-7xl lg:text-[5.5rem] font-semibold mb-6 md:mb-8">
            <span className="block text-foreground">Every ball.</span>
            <span className="block text-foreground">Every table.</span>
            <span className="block text-shimmer">Every rupee.</span>
          </h1>

          <p className="text-base md:text-xl text-foreground/75 mb-8 md:mb-10 max-w-2xl font-light leading-relaxed">
            Skyexchange7 pairs world-class odds on IPL, T20 and live casino with the fastest INR payouts in the market — your ID lands on WhatsApp in 60 seconds, backed by 24×7 human support.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
            <WhatsAppButton
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base h-14 px-10 w-full sm:w-auto rounded-full font-semibold"
            >
              Claim Your ID — 60 Seconds
            </WhatsAppButton>
            <WhatsAppButton
              size="lg"
              variant="outline"
              className="glass-card border-primary/30 text-primary hover:bg-primary/10 hover:text-primary text-base h-14 px-10 w-full sm:w-auto rounded-full"
            >
              Chat with a Specialist
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-2xl">
            {[
              { icon: Zap, label: "60-second ID", sub: "Straight on WhatsApp" },
              { icon: Banknote, label: "5-min payouts", sub: "Direct to your bank" },
              { icon: ShieldCheck, label: "Bank-grade", sub: "SSL + verified KYC" },
            ].map((f) => (
              <div
                key={f.label}
                className="glass-card rounded-2xl p-3 md:p-5 transition-all duration-300 hover:border-primary/50"
              >
                <f.icon className="h-5 w-5 md:h-6 md:w-6 text-primary mb-2 md:mb-3" />
                <div className="text-xs md:text-sm font-semibold text-foreground">{f.label}</div>
                <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hairline-gold" />
    </section>
  );
};
