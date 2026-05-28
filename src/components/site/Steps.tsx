import { WhatsAppButton } from "./WhatsAppButton";

const STEPS = [
  { n: "01", t: "Open WhatsApp", d: "Tap any green button. A real chat opens with our 24×7 onboarding team — no app, no forms." },
  { n: "02", t: "Receive your ID", d: "We hand you a secure username and password in under 60 seconds. Save them, log in, you're inside." },
  { n: "03", t: "Fund in ₹", d: "Top up via UPI, PhonePe, GPay, Paytm or Net Banking. Funds reflect instantly in your dashboard." },
  { n: "04", t: "Play. Withdraw. Repeat.", d: "Bet on live cricket or pull up a table. Cash out to your bank in 5–10 minutes — no questions, no fees." },
];

export const Steps = () => (
  <section className="py-20 md:py-32 border-y border-border/60 bg-gradient-noir">
    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-16">
        <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">The journey</div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05]">
          From "hi" to your first win — <span className="text-shimmer">under five minutes</span>.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden border border-border/50">
        {STEPS.map((s) => (
          <div key={s.n} className="bg-background p-8 md:p-10 transition-colors hover:bg-card group">
            <div className="text-xs tracking-[0.25em] text-primary mb-6">STEP {s.n}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{s.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-16 text-center">
        <WhatsAppButton size="lg" className="bg-gradient-gold text-primary-foreground shadow-gold h-14 px-10 rounded-full font-semibold">
          Start on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  </section>
);
