import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blogPosts";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background">
    <div className="container py-16 md:py-20 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 mb-5">
          <img
            src={logo}
            alt="Skyexchange7 logo"
            className="h-10 w-10"
            width={40}
            height={40}
          />
          <span className="text-xl font-semibold tracking-tight text-shimmer">SKYEXCHANGE</span>
        </div>
        <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
          India's premium cricket and casino playground. Built around faster odds, faster payouts and human support — every hour, every day.
        </p>
        <div className="mt-8 hairline-gold" />
        <p className="text-xs text-muted-foreground mt-4 tracking-wide">
          skyexchange7.live · INR only · Made for India
        </p>
      </div>

      {[
        { t: "Cricket", l: ["IPL 2026", "T20 World Cup", "ODI Series", "Test Cricket", "BBL · PSL · CPL"] },
        { t: "Casino", l: ["Live Roulette", "Andar Bahar", "Teen Patti", "Aviator", "Dragon Tiger"] },
      ].map((s) => (
        <div key={s.t} className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">{s.t}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {s.l.map((x) => (
              <li key={x}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {x}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="md:col-span-2">
        <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">Company</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link to="/cricket" className="hover:text-primary transition-colors">Cricket</Link></li>
          <li><Link to="/casino" className="hover:text-primary transition-colors">Casino</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div className="md:col-span-2">
        <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary font-semibold mb-5">Journal</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/blog" className="hover:text-primary transition-colors">All articles</Link></li>
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="hover:text-primary transition-colors">
                {p.title.split(" — ")[0].split(" (")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-border/60">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Skyexchange7. All rights reserved.</p>
        <p className="tracking-wide">18+ only · Play responsibly · Gambling can be addictive</p>
      </div>
    </div>
  </footer>
);
