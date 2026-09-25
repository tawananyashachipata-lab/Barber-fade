import { useMemo, useState } from "react";
import {
  BARBERS,
  SERVICES,
  SHOP,
  TIME_SLOTS,
  formatDateLong,
  formatDateTile,
  toDateKey,
  upcomingDates,
  type Barber,
  type Service,
} from "@/lib/shop";
import {
  addMinutes,
  combineDateTime,
  downloadIcs,
  googleCalendarUrl,
  type CalendarEvent,
} from "@/lib/calendar";

const STEPS = ["Service", "Barber", "Date & time", "Your details"];

const tileBase =
  "rounded-lg border px-3 py-2.5 text-sm transition-colors duration-200 cursor-pointer";
const tileOff = "border-line text-cream/70 hover:border-cream/40";
const tileOn = "border-brass bg-brass/10 text-cream";

export function BookingWidget() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<Service | null>(null);
  const [barber, setBarber] = useState<Barber | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const dates = useMemo(() => upcomingDates(12), []);

  const event: CalendarEvent | null = useMemo(() => {
    if (!service || !barber || !date || !time) return null;
    const start = combineDateTime(date, time);
    const end = addMinutes(start, service.minutes);
    return {
      title: `${service.name} at ${SHOP.name}`,
      description: [
        `${service.name} (${service.minutes} min) with ${barber.name} at ${SHOP.name}.`,
        `Price: £${service.price}.`,
        `Booked for: ${name || "Guest"}${phone ? ` · ${phone}` : ""}${email ? ` · ${email}` : ""}.`,
        notes ? `Notes: ${notes}` : "",
        `Questions? Call ${SHOP.phone}. Please arrive 5 minutes early.`,
      ]
        .filter(Boolean)
        .join("\n"),
      location: SHOP.address,
      start,
      end,
    };
  }, [service, barber, date, time, name, email, phone, notes]);

  function next() {
    setError(null);
    if (step === 0 && !service) return setError("Choose a service to continue.");
    if (step === 1 && !barber) return setError("Choose a barber to continue.");
    if (step === 2 && (!date || !time)) return setError("Pick both a date and a time.");
    setStep((s) => Math.min(s + 1, 3));
  }

  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");
    if (phone.replace(/\D/g, "").length < 7) return setError("Please enter a valid phone number.");
    if (!event) return setError("Something is missing from your booking.");
    setConfirmed(true);
  }

  function reset() {
    setConfirmed(false);
    setStep(0);
    setService(null);
    setBarber(null);
    setDate(null);
    setTime(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setError(null);
  }

  if (confirmed && event && service && barber && date && time) {
    return (
      <div className="bg-panel rounded-2xl ring-1 ring-brass/30 p-6 lg:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">Confirmed</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight">
          You're booked, {name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-sm text-cream/60">
          A chair is held for you. Add it to your calendar so it doesn't slip.
        </p>

        <dl className="mt-6 divide-y divide-line/60 text-sm">
          {[
            ["Service", `${service.name} · ${service.minutes} min · £${service.price}`],
            ["Barber", barber.name],
            ["Date", formatDateLong(date)],
            [
              "Time",
              `${time} – ${addMinutes(combineDateTime(date, time), service.minutes).toLocaleTimeString(
                "en-GB",
                { hour: "2-digit", minute: "2-digit" },
              )}`,
            ],
            ["Where", SHOP.address],
            ["Contact", `${phone} · ${email}`],
            ...(notes ? [["Notes", notes] as [string, string]] : []),
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 py-3">
              <dt className="text-cream/50">{k}</dt>
              <dd className="text-right text-cream">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={googleCalendarUrl(event)}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
          >
            Add to Google Calendar
          </a>
          <button
            type="button"
            onClick={() => downloadIcs(event)}
            className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200"
          >
            Apple / Outlook (.ics)
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-full px-3 py-2.5 text-sm text-cream/50 hover:text-cream transition-colors duration-200"
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-panel rounded-2xl ring-1 ring-black/20 p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="font-serif text-2xl text-cream">
          Step {step + 1} · {STEPS[step]}
        </p>
        <p className="text-xs text-cream/40">{step + 1} of 4</p>
      </div>

      {step === 0 && (
        <div className="grid sm:grid-cols-2 gap-3">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setService(s)}
              className={`text-left ${tileBase} ${service?.id === s.id ? tileOn : tileOff}`}
            >
              <span className="block font-medium text-cream">{s.name}</span>
              <span className={service?.id === s.id ? "text-sm text-brass" : "text-sm text-cream/50"}>
                £{s.price} · {s.minutes} min
              </span>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="grid sm:grid-cols-3 gap-3">
          {BARBERS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setBarber(b)}
              className={`text-left ${tileBase} ${barber?.id === b.id ? tileOn : tileOff}`}
            >
              <span className="block font-medium text-cream">{b.name}</span>
              <span className="text-sm text-cream/50">{b.role}</span>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/50">Date</p>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {dates.map((d) => (
              <button
                key={toDateKey(d)}
                type="button"
                onClick={() => setDate(d)}
                className={`${tileBase} ${date && toDateKey(date) === toDateKey(d) ? tileOn : tileOff}`}
              >
                {formatDateTile(d)}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-cream/50">Time</p>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTime(t)}
                className={`${tileBase} ${time === t ? tileOn : tileOff}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4" noValidate>
          <label className="text-sm">
            <span className="text-cream/50">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
            />
          </label>
          <label className="text-sm">
            <span className="text-cream/50">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
            />
          </label>
          <label className="text-sm">
            <span className="text-cream/50">Phone</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="07000 000000"
              className="mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
            />
          </label>
          <label className="text-sm">
            <span className="text-cream/50">Notes (optional)</span>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Code FIRST15, parking, etc."
              className="mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
            />
          </label>

          <div className="sm:col-span-2 rounded-lg border border-line/60 p-4 text-sm text-cream/60">
            <span className="text-cream">{service?.name}</span> with{" "}
            <span className="text-cream">{barber?.name}</span> ·{" "}
            <span className="text-cream">{date ? formatDateLong(date) : ""}</span> at{" "}
            <span className="text-brass">{time}</span>
          </div>

          {error && <p className="sm:col-span-2 text-sm text-destructive">{error}</p>}

          <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200"
            >
              Back
            </button>
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Confirm booking
            </button>
          </div>
        </form>
      )}

      {step < 3 && (
        <>
          {error && <p className="mt-5 text-sm text-destructive">{error}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200"
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function BookingSteps({ current = 0 }: { current?: number }) {
  return (
    <ol className="mt-10 space-y-4 text-sm">
      {STEPS.map((label, i) => (
        <li
          key={label}
          className={`flex items-center gap-3 ${i <= current ? "text-cream" : "text-cream/50"}`}
        >
          <span
            className={`size-6 shrink-0 grid place-items-center rounded-full font-medium ${
              i <= current ? "bg-brass text-ink" : "ring-1 ring-line text-cream/60"
            }`}
          >
            {i + 1}
          </span>
          {label}
        </li>
      ))}
    </ol>
  );
}
