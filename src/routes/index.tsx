import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-shop.jpg";
import { SERVICES, SHOP } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mercer Barbers — Clerkenwell cuts, fades & hot-towel shaves" },
      {
        name: "description",
        content:
          "A heritage barber shop in Clerkenwell, London. Precise cuts, skin fades and straight-razor shaves. Book your chair online in under a minute.",
      },
      { property: "og:title", content: "Mercer Barbers — Clerkenwell barber shop" },
      {
        property: "og:description",
        content: "Precise cuts, skin fades and hot-towel shaves. Book your chair online.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={heroImage}
            alt=""
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="fade-up text-xs font-medium uppercase tracking-[0.35em] text-brass">
            {SHOP.established}
          </p>
          <h1 className="fade-up fade-up-1 mt-6 font-serif font-semibold leading-none text-5xl sm:text-7xl lg:text-8xl max-w-[20ch] text-balance">
            <span className="bg-gradient-to-b from-cream via-brass to-brass-soft bg-clip-text text-transparent">
              The clean snap of a straight razor
            </span>
          </h1>
          <p className="fade-up fade-up-2 mt-8 max-w-[48ch] text-pretty text-base sm:text-lg text-cream/70">
            {SHOP.tagline} Precise cuts, hot-towel shaves, and a chair you will not want to leave.
          </p>
          <div className="fade-up fade-up-3 mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors duration-200"
            >
              View the price list
              <span className="text-brass" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">The Menu</p>
              <h2 className="mt-4 font-serif font-medium text-4xl leading-tight text-balance">
                Services &amp; pricing
              </h2>
              <p className="mt-5 text-pretty text-sm text-cream/60 max-w-[30ch]">
                Every service ends with a hot towel and a finishing spray. Prices in pounds.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm text-brass hover:text-cream transition-colors duration-200"
              >
                Full price list
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {SERVICES.slice(0, 5).map((s, i, arr) => (
                  <div
                    key={s.id}
                    className={`flex items-baseline justify-between gap-6 py-4 transition-colors duration-200 ${
                      i === arr.length - 1 ? "" : "border-b border-line/60 hover:border-brass/50"
                    }`}
                  >
                    <div>
                      <p className="font-serif text-2xl text-cream">{s.name}</p>
                      <p className="text-sm text-cream/50 mt-1">{s.description}</p>
                    </div>
                    <p className="font-serif text-2xl text-brass whitespace-nowrap">£{s.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-panel/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">Visit us</p>
            <h2 className="mt-4 font-serif font-medium text-4xl leading-tight text-balance">
              Ironmonger Row, since 1998
            </h2>
            <p className="mt-5 text-sm text-cream/60 max-w-[38ch]">
              Three chairs, one standard. Walk in when a chair is free, or hold one for yourself.
            </p>
            <Link
              to="/contact"
              hash="book"
              className="mt-8 inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Reserve your chair
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl bg-ink ring-1 ring-line/60 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Hours</p>
              <ul className="mt-3 space-y-1 text-cream/70">
                {SHOP.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-ink ring-1 ring-line/60 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Find us</p>
              <p className="mt-3 text-cream/70">{SHOP.address}</p>
              <a
                href={SHOP.phoneHref}
                className="mt-2 block text-cream/70 hover:text-cream transition-colors"
              >
                {SHOP.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
