import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WHATSAPP_URL } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blogPosts";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="container py-12 grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="Skyexchhub - Sky Exchange Login online cricket and casino platform" className="h-10 w-10" width={40} height={40} />
          <span className="text-xl font-extrabold text-gradient-gold">SKYEXCHANGE</span>
        </div>
        <p className="text-sm text-muted-foreground">Skyexchhub (Sky Exchange Login) — India's most trusted online cricket & casino platform. Play live cricket betting in ₹, win big with fast withdrawal & 24x7 support.</p>
      </div>
      {[
        { t: "Sports", l: ["Cricket", "IPL 2026", "T20 World Cup", "ODI"] },
        { t: "Casino", l: ["Live Roulette", "Andar Bahar", "Teen Patti", "Aviator"] },
      ].map((s) => (
        <div key={s.t}>
          <h4 className="font-bold mb-3">{s.t}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {s.l.map((x) => (
              <li key={x}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">{x}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h4 className="font-bold mb-3">Skyexchhub Blog</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <Link to="/blog" className="hover:text-primary">All articles</Link>
          </li>
          {BLOG_POSTS.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="hover:text-primary">
                {p.title.split(" — ")[0].split(" (")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Skyexchhub. All rights reserved.</p>
        <p>18+ only · Play responsibly · Gambling can be addictive</p>
      </div>
    </div>
  </footer>
);
