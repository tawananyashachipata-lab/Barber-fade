import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/shop";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Mercer Barbers" },
      {
        name: "description",
        content:
          "Cuts from £45, skin fades, straight-razor shaves, beard sculpting, kids' cuts and the Full Works package at Mercer Barbers, Clerkenwell.",
      },
      { property: "og:title", content: "Services & Pricing — Mercer Barbers" },
      {
        property: "og:description",
        content: "Cuts, fades, shaves, beard work and packages. Clear prices, no surprises.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">The Menu</p>
            <h1 className="mt-4 font-serif font-medium text-5xl leading-tight text-balance">
              Services &amp; pricing
            </h1>
            <p className="mt-5 text-pretty text-sm text-cream/60 max-w-[32ch]">
              Every service ends with a hot towel and a finishing spray. Prices in pounds, no card
              surcharge, tips never expected.
            </p>
            <Link
              to="/contact"
              hash="book"
              className="mt-8 inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Book a service
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3">
              {SERVICES.map((s, i, arr) => (
                <div
                  key={s.id}
                  className={`flex items-baseline justify-between gap-6 py-5 transition-colors duration-200 ${
                    i === arr.length - 1 ? "" : "border-b border-line/60 hover:border-brass/50"
                  }`}
                >
                  <div>
                    <p className="font-serif text-2xl text-cream">{s.name}</p>
                    <p className="text-sm text-cream/50 mt-1">{s.description}</p>
                    <p className="text-xs text-cream/40 mt-2 uppercase tracking-[0.2em]">
                      {s.minutes} minutes
                    </p>
                  </div>
                  <p className="font-serif text-2xl text-brass whitespace-nowrap">£{s.price}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-cream/50 max-w-[60ch]">
              Prices are per person and include consultation. Appointments run to time — if you are
              more than 10 minutes late we may need to shorten or move your service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
