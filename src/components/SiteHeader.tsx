import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-base text-navy-deep">Tanishk Logistics</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Transport &amp; Container</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm font-medium text-navy-deep/80 hover:text-orange-brand transition-colors"
              activeProps={{ className: "text-orange-brand" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+919825031792"
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-navy-deep shadow-[var(--shadow-glow)] hover:brightness-105 transition"
        >
          <Phone className="h-4 w-4" /> +91 98250 31792
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-navy-deep"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-navy-deep"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+919825031792"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-accent px-4 py-3 text-sm font-semibold text-navy-deep"
            >
              <Phone className="h-4 w-4" /> Call +91 98250 31792
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
