import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "mercer-promo-dismissed";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div className="absolute inset-0 bg-ink/70" onClick={close} />
      <div className="relative w-full max-w-md bg-panel rounded-2xl ring-1 ring-brass/30 p-6 lg:p-8 fade-up">
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 text-cream/50 hover:text-cream transition-colors duration-200 text-xl leading-none"
          aria-label="Close offer"
        >
          ×
        </button>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">First visit</p>
        <h3
          id="promo-title"
          className="mt-3 font-serif font-medium text-3xl leading-tight text-balance"
        >
          15% off your first cut
        </h3>
        <p className="mt-3 text-pretty text-sm text-cream/60">
          Use code <span className="text-brass font-medium">FIRST15</span> at the desk. Mention it in
          your booking notes.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            hash="book"
            onClick={close}
            className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
          >
            Book with the code
          </Link>
          <button
            type="button"
            onClick={close}
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
