import { createFileRoute, Link } from "@tanstack/react-router";
import { BARBERS, SHOP } from "@/lib/shop";
import marcus from "@/assets/barber-marcus.jpg";
import dario from "@/assets/barber-dario.jpg";
import elliot from "@/assets/barber-elliot.jpg";

const PORTRAITS: Record<string, string> = { marcus, dario, elliot };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story & Barbers — Mercer Barbers" },
      {
        name: "description",
        content:
          "Three barbers, one standard. Meet Marcus, Dario and Elliot and read the story of Mercer Barbers on Ironmonger Row, Clerkenwell.",
      },
      { property: "og:title", content: "Our Story & Barbers — Mercer Barbers" },
      {
        property: "og:description",
        content: "Meet the three hands behind the chairs at Mercer Barbers, Clerkenwell.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">Our story</p>
            <h1 className="mt-4 font-serif font-medium text-5xl leading-tight text-balance">
              A room that has done this since 1998
            </h1>
          </div>
          <div className="lg:col-span-7 space-y-5 text-cream/70 text-pretty">
            <p>
              Marcus Vale took the lease on a narrow shopfront at 24 Ironmonger Row with one chair,
              a secondhand mirror and a jar of pomade. The queue outside on Saturdays did the rest.
            </p>
            <p>
              Almost three decades later there are three chairs, a hot-towel cabinet that has never
              been switched off, and the same rule pinned by the door: nobody leaves until the cut
              is right.
            </p>
            <p>
              We are a barber shop, not a salon. Booked appointments come first, walk-ins are
              welcome whenever a chair is free, and the coffee is on the house.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-panel/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-[40ch]">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">The Chair</p>
            <h2 className="mt-4 font-serif font-medium text-4xl leading-tight text-balance">
              Three barbers, one standard
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {BARBERS.map((b) => (
              <div
                key={b.id}
                className="bg-ink rounded-xl ring-1 ring-line/60 p-6 hover:ring-brass/40 transition-colors duration-200"
              >
                <img
                  src={PORTRAITS[b.id]}
                  alt={`${b.name}, ${b.role}`}
                  loading="lazy"
                  width={736}
                  height={912}
                  className="w-full aspect-[4/5] rounded-lg object-cover"
                />
                <p className="mt-5 font-serif text-2xl text-cream">{b.name}</p>
                <p className="text-sm text-cream/50 mt-1">{b.role}</p>
                <p className="text-sm text-cream/60 mt-3">{b.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              to="/contact"
              hash="book"
              className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Book with a barber
            </Link>
            <p className="mt-4 text-sm text-cream/50">{SHOP.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
