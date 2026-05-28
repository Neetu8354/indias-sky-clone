const STATS = [
  { v: "10L+", l: "Active players", s: "Across every Indian state" },
  { v: "₹500Cr+", l: "Paid in winnings", s: "Settled to Indian banks" },
  { v: "<2s", l: "Live odds refresh", s: "Faster than your stream" },
  { v: "24×7", l: "Human support", s: "Hindi · English on WhatsApp" },
];

export const Stats = () => (
  <section className="py-20 md:py-28 border-y border-border/60">
    <div className="container">
      <div className="text-center mb-12 md:mb-16">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">By the numbers</div>
        <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl mx-auto">
          A platform <span className="text-shimmer">millions trust</span> with their game.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
        {STATS.map((s) => (
          <div key={s.l} className="bg-background p-6 md:p-10 text-center">
            <div className="text-4xl md:text-6xl font-semibold text-shimmer mb-3">{s.v}</div>
            <div className="text-sm md:text-base font-semibold text-foreground">{s.l}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.s}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
