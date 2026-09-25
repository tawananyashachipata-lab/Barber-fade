import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Barbers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Mercer Barbers home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/70">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-cream font-medium" }}
              className="hover:text-cream transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            hash="book"
            className="hidden sm:inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2 px-4 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
          >
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-line text-cream"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line/70 bg-ink">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-cream" }}
                className="py-3 text-cream/70 border-b border-line/50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="book"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
