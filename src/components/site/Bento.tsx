import { ArrowUpRight, Trophy, Spade, Banknote, MessageCircle, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/site";
import cricketImg from "@/assets/bento-cricket.jpg";
import casinoImg from "@/assets/bento-casino.jpg";
import liveImg from "@/assets/bento-live.jpg";
import paymentsImg from "@/assets/bento-payments.jpg";

type TileProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
};

const Tile = ({ children, className = "", href, external }: TileProps) => {
  const base =
    "group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-gold " +
    className;
  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={base}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
};

const Arrow = () => (
  <div className="absolute top-5 right-5 h-9 w-9 rounded-full glass-card flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
    <ArrowUpRight className="h-4 w-4" />
  </div>
);

export const Bento = () => (
  <section id="explore" className="py-20 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 max-w-5xl">
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-3">
            Explore the floor
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl">
            One ID. <span className="text-shimmer">Every market</span> India wants to play.
          </h2>
        </div>
        <p className="text-muted-foreground md:max-w-sm">
          From IPL Mondays to midnight Andar Bahar — sportsbook, live tables and instant payouts in a single account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-5">
        {/* Cricket — large feature */}
        <Tile href="/cricket" className="md:col-span-4 md:row-span-2">
          <img
            src={cricketImg}
            alt="Live cricket betting on Skyexchange7"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <Arrow />
          <div className="relative h-full flex flex-col justify-end p-6 md:p-10">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-3">
              <Trophy className="h-3.5 w-3.5" /> Cricket
            </div>
            <h3 className="text-2xl md:text-4xl font-semibold mb-3 leading-tight max-w-md">
              IPL 2026 odds that refresh before your stream does.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-md">
              Every ball, every market — match winner, session runs, top batsman, fall of wicket. Sub-2-second refresh, lowest commission in India.
            </p>
          </div>
        </Tile>

        {/* Casino */}
        <Tile href="/casino" className="md:col-span-2 md:row-span-2">
          <img
            src={casinoImg}
            alt="Live casino on Skyexchange7"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <Arrow />
          <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-3">
              <Spade className="h-3.5 w-3.5" /> Casino
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 leading-tight">
              1,000+ live tables, one floor.
            </h3>
            <p className="text-sm text-muted-foreground">
              Roulette, Baccarat, Dragon Tiger, slots and progressives — streamed 24×7 in HD.
            </p>
          </div>
        </Tile>

        {/* Live Dealer */}
        <Tile className="md:col-span-3">
          <img
            src={liveImg}
            alt="Live Indian card games"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="relative h-full flex flex-col justify-center p-6 md:p-8 max-w-sm">
            <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-2">Indian Classics</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-1.5">Andar Bahar · Teen Patti · Lucky 7</h3>
            <p className="text-sm text-muted-foreground">Hindi-speaking dealers. The games you grew up with — done right.</p>
          </div>
        </Tile>

        {/* Payments */}
        <Tile className="md:col-span-3">
          <img
            src={paymentsImg}
            alt="Fast INR payouts on Skyexchange7"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/75 to-background/40" />
          <div className="relative h-full flex flex-col justify-center items-end text-right p-6 md:p-8 max-w-sm ml-auto">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-2">
              <Banknote className="h-3.5 w-3.5" /> INR-first
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-1.5">5-minute withdrawals.</h3>
            <p className="text-sm text-muted-foreground">UPI · PhonePe · GPay · Paytm · Net Banking — straight to your bank.</p>
          </div>
        </Tile>

        {/* Live odds counter */}
        <Tile className="md:col-span-2">
          <div className="relative h-full flex flex-col justify-center p-6 md:p-8">
            <Activity className="h-6 w-6 text-primary mb-3 animate-pulse" />
            <div className="text-4xl md:text-5xl font-semibold text-shimmer mb-1">&lt;2s</div>
            <div className="text-sm text-muted-foreground">Live odds refresh — every market, every stream.</div>
          </div>
        </Tile>

        {/* Trust */}
        <Tile className="md:col-span-2">
          <div className="relative h-full flex flex-col justify-center p-6 md:p-8">
            <div className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold mb-3">Since 2017</div>
            <div className="text-4xl md:text-5xl font-semibold text-shimmer mb-1">10 Lakh+</div>
            <div className="text-sm text-muted-foreground">Indian players, settled and supported every day.</div>
          </div>
        </Tile>

        {/* WhatsApp CTA */}
        <Tile href={WHATSAPP_URL} external className="md:col-span-2 bg-gradient-gold">
          <Arrow />
          <div className="relative h-full flex flex-col justify-center p-6 md:p-8 text-primary-foreground">
            <MessageCircle className="h-6 w-6 mb-3" />
            <div className="text-xl md:text-2xl font-semibold leading-tight mb-1">
              Get your ID on WhatsApp.
            </div>
            <div className="text-sm opacity-85">60 seconds. No forms. No KYC delays.</div>
          </div>
        </Tile>
      </div>
    </div>
  </section>
);