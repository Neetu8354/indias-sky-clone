import hero from "@/assets/hero-cricket.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Desktop background image */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src={hero}
          alt="Play online cricket betting on skyexchange7.live - get your free cricket ID instantly"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Mobile solid backdrop */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-background via-background to-background/95" />

      <div className="relative container py-10 md:py-32 lg:py-40">
        <div className="grid md:block grid-cols-1 gap-6">
          {/* Text content */}
          <div className="max-w-2xl order-1">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold bg-primary/15 text-primary border border-primary/30 mb-4 md:mb-5">
              🏏 INDIA'S #1 CRICKET ID PROVIDER
            </span>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6">
              <span className="text-foreground">Play Cricket.</span>
              <br />
              <span className="text-gradient-gold">Win Big in ₹.</span>
            </h1>

            {/* Mobile: image between heading and paragraph */}
            <div className="md:hidden -mx-4 my-5 relative">
              <div className="relative h-56 sm:h-64 overflow-hidden rounded-2xl mx-4 border border-primary/20 shadow-gold">
                <img
                  src={hero}
                  alt="Get your ID and play live cricket now at skyexchange7.live"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
            </div>

            <p className="text-sm md:text-lg text-foreground/85 mb-6 md:mb-8 max-w-xl">
              Get your trusted online cricket & casino ID instantly on WhatsApp. Bet on IPL, T20, ODI, Andar Bahar, Teen Patti and 1000+ live casino games — all in INR.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-10">
              <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base h-12 px-8 w-full sm:w-auto">
                Get Your ID Now
              </WhatsAppButton>
              <WhatsAppButton size="lg" variant="outline" className="border-primary/60 text-primary hover:bg-primary/10 text-base h-12 px-8 w-full sm:w-auto">
                Chat on WhatsApp
              </WhatsAppButton>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-lg">
              {[
                { icon: Zap, label: "Instant ID", sub: "in 1 min" },
                { icon: ShieldCheck, label: "100% Safe", sub: "& Secure" },
                { icon: Headphones, label: "24×7", sub: "Support" },
              ].map((f) => (
                <div key={f.label} className="flex flex-col items-center text-center p-2.5 md:p-3 rounded-xl bg-card/60 border border-border backdrop-blur">
                  <f.icon className="h-5 w-5 md:h-6 md:w-6 text-primary mb-1.5 md:mb-2" />
                  <div className="text-xs md:text-sm font-semibold">{f.label}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
