import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import { Menu, X, LogIn } from "lucide-react";
import { LOGIN_URL } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Cricket", href: "/cricket" },
  { label: "Casino", href: "/casino" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navHref = (href: string) => {
    if (href.startsWith("#")) return onHome ? href : `/${href}`;
    return href;
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const NavLink = ({
    href,
    children,
    className,
    onClick,
    active,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    active?: boolean;
  }) => {
    const target = navHref(href);
    const content = (
      <span className="relative inline-block">
        {children}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] bg-gradient-gold transition-all duration-300",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </span>
    );
    if (target.startsWith("/") && !target.startsWith("//")) {
      return (
        <Link to={target} className={cn("group", className)} onClick={onClick}>
          {content}
        </Link>
      );
    }
    return (
      <a href={target} className={cn("group", className)} onClick={onClick}>
        {content}
      </a>
    );
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-border/80 shadow-[0_4px_24px_-12px_hsl(var(--primary)/0.35)]"
          : "backdrop-blur-md bg-background/60 border-transparent"
      )}
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="Skyexchhub home - Sky Exchange Login online cricket platform"
        >
          <span className="relative">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src={logo}
              alt="Skyexchhub official logo - online cricket and casino platform"
              width={42}
              height={42}
              className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg md:text-2xl font-extrabold tracking-tight text-gradient-gold">
              SKYEXCHANGE
            </span>
            <span className="hidden md:inline text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase mt-0.5">
              Cricket • Casino • Live
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((n) => (
            <NavLink
              key={n.label}
              href={n.href}
              active={isActive(n.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(n.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
              )}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary/60"
          >
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" aria-label="Login to Sky Exchange">
              <LogIn className="h-4 w-4" />
              Login
            </a>
          </Button>
          <WhatsAppButton
            variant="default"
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold"
          >
            Get Your Online ID
          </WhatsAppButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-primary rounded-md hover:bg-primary/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.label}
                href={n.href}
                active={isActive(n.href)}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 px-3 rounded-md text-base font-medium transition-colors",
                  isActive(n.href)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/90 hover:bg-primary/5 hover:text-primary"
                )}
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary/40 text-primary hover:bg-primary/10"
              >
                <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  <LogIn className="h-4 w-4" />
                  Login to Sky Exchange
                </a>
              </Button>
              <WhatsAppButton className="bg-gradient-gold text-primary-foreground w-full">
                Get Your Online ID
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
