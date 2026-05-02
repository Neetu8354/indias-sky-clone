import cricket from "@/assets/sport-cricket.jpg";
import casino from "@/assets/sport-casino.jpg";
import andar from "@/assets/sport-andarbahar.jpg";
import teen from "@/assets/sport-teenpatti.jpg";
import aviator from "@/assets/sport-aviator.jpg";
import slots from "@/assets/sport-slots.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

type Game = { img: string; title: string; subtitle: string; tag?: string };

const Card = ({ g }: { g: Game }) => (
  <a
    href="https://wa.link/reddyanna_"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-2xl overflow-hidden border border-border bg-gradient-card shadow-lg hover:shadow-gold hover:border-primary/60 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="aspect-square overflow-hidden">
      <img src={g.img} alt={`${g.title} - bet on ${g.title} live online at skyexchlive.live`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    {g.tag && (
      <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-bold bg-destructive text-destructive-foreground">
        {g.tag}
      </span>
    )}
    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
      <h3 className="font-bold text-base md:text-lg">{g.title}</h3>
      <p className="text-xs text-muted-foreground">{g.subtitle}</p>
    </div>
  </a>
);

const Section = ({ id, eyebrow, title, items }: { id: string; eyebrow: string; title: string; items: Game[] }) => (
  <section id={id} className="py-12 md:py-16">
    <div className="container">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">{eyebrow}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-gradient-gold">{title}</span>
          </h2>
        </div>
        <WhatsAppButton variant="outline" className="hidden sm:inline-flex border-primary/60 text-primary hover:bg-primary/10">
          Play Now
        </WhatsAppButton>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((g) => <Card key={g.title} g={g} />)}
      </div>
    </div>
  </section>
);

export const GameSections = () => {
  return (
    <>
      <Section
        id="cricket"
        eyebrow="Most Popular"
        title="Cricket Betting"
        items={[
          { img: cricket, title: "IPL 2026", subtitle: "Live odds in ₹", tag: "LIVE" },
          { img: cricket, title: "T20 World Cup", subtitle: "All matches" },
          { img: cricket, title: "ODI Series", subtitle: "India vs World" },
          { img: cricket, title: "Test Cricket", subtitle: "Session betting", tag: "HOT" },
        ]}
      />

      <Section
        id="casino"
        eyebrow="Live Dealers"
        title="Casino Games"
        items={[
          { img: casino, title: "Live Roulette", subtitle: "European & Auto", tag: "LIVE" },
          { img: andar, title: "Andar Bahar", subtitle: "Indian classic" },
          { img: teen, title: "Teen Patti", subtitle: "3 Patti live", tag: "HOT" },
          { img: casino, title: "Dragon Tiger", subtitle: "Fast rounds" },
        ]}
      />

      <Section
        id="more-games"
        eyebrow="More Games"
        title="Slots, Aviator & More"
        items={[
          { img: aviator, title: "Aviator", subtitle: "Crash multiplier", tag: "NEW" },
          { img: slots, title: "Mega Slots 777", subtitle: "Jackpot ₹1 Cr+" },
          { img: andar, title: "Lucky 7", subtitle: "Quick win" },
          { img: teen, title: "Poker", subtitle: "Tournaments" },
        ]}
      />
    </>
  );
};
