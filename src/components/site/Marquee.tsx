const ITEMS = [
  "IPL 2026 — live",
  "Sub-2-second odds",
  "1,000+ casino tables",
  "UPI · PhonePe · GPay · Paytm",
  "5-minute INR withdrawals",
  "Andar Bahar · Teen Patti · Aviator",
  "T20 World Cup markets",
  "24×7 human support",
  "Welcome bonus up to ₹10,000",
];

export const Marquee = () => (
  <div className="bg-background border-y border-border/60 overflow-hidden py-3">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="mx-8 text-xs tracking-[0.22em] uppercase text-muted-foreground font-medium">
          <span className="text-primary mr-3">◆</span>
          {t}
        </span>
      ))}
    </div>
  </div>
);
