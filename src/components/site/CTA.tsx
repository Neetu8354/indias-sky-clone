import { WhatsAppButton } from "./WhatsAppButton";
import textureBg from "@/assets/texture-noir.jpg";

export const CTA = () => (
  <section className="py-20 md:py-32">
    <div className="container">
      <div className="relative rounded-[2rem] overflow-hidden p-10 md:p-20 text-center shadow-elegant border border-primary/20">
        <img
          src={textureBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">
            Ready when you are
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.02] max-w-3xl mx-auto">
            Your seat at the table — <span className="text-shimmer">one message away.</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/75 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Join 10 lakh+ Indian players. Your ID lands on WhatsApp in 60 seconds — and your first match could too.
          </p>
          <WhatsAppButton
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 px-10 text-base rounded-full font-semibold"
          >
            Claim Your ID Now
          </WhatsAppButton>
        </div>
      </div>
    </div>
  </section>
);
