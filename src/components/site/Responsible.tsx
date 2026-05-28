import { Heart, Timer, TrendingDown } from "lucide-react";

const TIPS = [
  { icon: Heart, t: "Play for fun, not pressure", d: "Enjoy the game — never play under stress." },
  { icon: Timer, t: "Set your limits", d: "Fix deposit and stake limits before you start." },
  { icon: TrendingDown, t: "Don't chase losses", d: "If a loss happens, don't take extra risk to recover." },
];

export const Responsible = () => (
  <section className="py-16 md:py-20">
    <div className="container">
      <div className="rounded-3xl glass-card p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">Responsible play</div>
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            A game should always feel like <span className="text-shimmer">a game</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {TIPS.map((x) => (
            <div key={x.t} className="text-center">
              <div className="h-12 w-12 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 border border-primary/20">
                <x.icon />
              </div>
              <h3 className="font-semibold mb-1.5">{x.t}</h3>
              <p className="text-sm text-muted-foreground font-light">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10 tracking-wide">
          18+ only · Gambling involves financial risk and can be addictive · Please play responsibly
        </p>
      </div>
    </div>
  </section>
);
