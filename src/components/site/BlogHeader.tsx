import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

export const BlogHeader = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
    <div className="container flex items-center justify-between h-16 md:h-20">
      <Link to="/" className="flex items-center gap-2" aria-label="Skyexchange1 home">
        <img
          src={logo}
          alt="Skyexchange1 official logo - online cricket and casino platform"
          width={42}
          height={42}
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gradient-gold">
          SKYEXCHANGE
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary">
          Home
        </Link>
        <Link to="/blog" className="text-sm font-medium text-foreground/80 hover:text-primary">
          Blog
        </Link>
      </nav>
      <WhatsAppButton className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
        Get Your Online ID
      </WhatsAppButton>
    </div>
  </header>
);
