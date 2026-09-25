import { Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-cream/50 max-w-[28ch]">{SHOP.address}.</p>
            <div className="mt-4 flex gap-4 text-sm text-cream/60">
              {SHOP.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-cream transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Explore</p>
            <ul className="mt-3 text-sm text-cream/70 space-y-2">
              <li>
                <Link to="/" className="hover:text-cream transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cream transition-colors duration-200">
                  Services &amp; pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cream transition-colors duration-200">
                  Our barbers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  hash="book"
                  className="text-brass hover:text-cream transition-colors duration-200"
                >
                  Book an appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Hours</p>
            <ul className="mt-3 text-sm text-cream/70 space-y-1">
              {SHOP.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Contact</p>
            <ul className="mt-3 text-sm text-cream/70 space-y-2">
              <li>
                <a
                  href={SHOP.phoneHref}
                  className="hover:text-cream transition-colors duration-200"
                >
                  {SHOP.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SHOP.email}`}
                  className="hover:text-cream transition-colors duration-200"
                >
                  {SHOP.email}
                </a>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cream transition-colors duration-200">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line/60 flex flex-col sm:flex-row gap-2 justify-between text-xs text-cream/40">
          <span>© {new Date().getFullYear()} Mercer Barbers. All rights reserved.</span>
          <span>Walk-ins welcome when the chair is free.</span>
        </div>
      </div>
    </footer>
  );
}
