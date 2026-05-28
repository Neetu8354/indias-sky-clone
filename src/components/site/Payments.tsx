import { ShieldCheck } from "lucide-react";

const METHODS = ["UPI", "PhonePe", "Google Pay", "Paytm", "Net Banking", "Visa", "Mastercard", "Bank Transfer"];

export const Payments = () => (
  <section className="py-20 md:py-28 border-y border-border/60">
    <div className="container">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">Money, moved properly</div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05]">
          Every Indian rail. <span className="text-shimmer">Zero friction.</span>
        </h2>
        <p className="text-muted-foreground mt-5 font-light leading-relaxed">
          Deposit through the method you already trust. Withdraw to your bank in 5–10 minutes — every time.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2.5 md:gap-3 mb-10">
        {METHODS.map((m) => (
          <span
            key={m}
            className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-foreground/85 hover:border-primary/40 transition-colors"
          >
            {m}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2.5 text-xs tracking-wide text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-primary" />
        256-bit SSL · Segregated funds · PCI-compliant rails
      </div>
    </div>
  </section>
);
