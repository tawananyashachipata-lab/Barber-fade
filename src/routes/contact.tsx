import { createFileRoute } from "@tanstack/react-router";
import { BookingWidget } from "@/components/BookingWidget";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Chair & Contact — Mercer Barbers" },
      {
        name: "description",
        content:
          "Book a cut, fade or shave at Mercer Barbers in Clerkenwell. Pick your service, barber, date and time, then add the appointment straight to your calendar.",
      },
      { property: "og:title", content: "Book a Chair & Contact — Mercer Barbers" },
      {
        property: "og:description",
        content: "Choose a service, barber, date and time — then add it to your calendar.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section id="book" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-brass">
              Book a Seat
            </p>
            <h1 className="mt-4 font-serif font-medium text-5xl leading-tight text-balance">
              Reserve your chair
            </h1>
            <p className="mt-5 text-pretty text-sm text-cream/60 max-w-[34ch]">
              Choose a service, a barber, and a time. Confirm and it lands in your calendar.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Visit</p>
                <p className="mt-2 text-cream/70">{SHOP.address}</p>
                <a
                  href={SHOP.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-1 inline-block text-brass hover:text-cream transition-colors duration-200"
                >
                  Open in Maps →
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Talk</p>
                <a
                  href={SHOP.phoneHref}
                  className="mt-2 block text-cream/70 hover:text-cream transition-colors"
                >
                  {SHOP.phone}
                </a>
                <a
                  href={`mailto:${SHOP.email}`}
                  className="block text-cream/70 hover:text-cream transition-colors"
                >
                  {SHOP.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">Hours</p>
                <ul className="mt-2 space-y-1 text-cream/70 max-w-[22rem]">
                  {SHOP.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
