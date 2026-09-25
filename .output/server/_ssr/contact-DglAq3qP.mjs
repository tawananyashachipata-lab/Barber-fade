import { n as __toESM } from "../_runtime.mjs";
import { a as formatDateLong, c as upcomingDates, i as TIME_SLOTS, n as SERVICES, o as formatDateTile, r as SHOP, s as toDateKey, t as BARBERS } from "./shop-DPoJgazS.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DglAq3qP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pad(n) {
	return String(n).padStart(2, "0");
}
/** UTC timestamp in iCalendar basic format: 20260415T140000Z */
function toUtcStamp(d) {
	return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;
}
/** Combine a calendar date and an "HH:MM" string into a local Date. */
function combineDateTime(date, time) {
	const [h, m] = time.split(":").map(Number);
	const out = new Date(date);
	out.setHours(h ?? 0, m ?? 0, 0, 0);
	return out;
}
function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 6e4);
}
function escapeIcs(value) {
	return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}
/** Apple Calendar / Outlook compatible .ics file content. */
function buildIcs(event) {
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Mercer Barbers//Booking//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		"BEGIN:VEVENT",
		`UID:${`${Date.now()}-${Math.random().toString(36).slice(2)}@mercerbarbers.co.uk`}`,
		`DTSTAMP:${toUtcStamp(/* @__PURE__ */ new Date())}`,
		`DTSTART:${toUtcStamp(event.start)}`,
		`DTEND:${toUtcStamp(event.end)}`,
		`SUMMARY:${escapeIcs(event.title)}`,
		`DESCRIPTION:${escapeIcs(event.description)}`,
		`LOCATION:${escapeIcs(event.location)}`,
		"BEGIN:VALARM",
		"TRIGGER:-PT60M",
		"ACTION:DISPLAY",
		`DESCRIPTION:${escapeIcs(event.title)}`,
		"END:VALARM",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
}
function downloadIcs(event, filename = "mercer-barbers-appointment.ics") {
	const blob = new Blob([buildIcs(event)], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(() => URL.revokeObjectURL(url), 1e3);
}
function googleCalendarUrl(event) {
	return `https://calendar.google.com/calendar/render?${new URLSearchParams({
		action: "TEMPLATE",
		text: event.title,
		dates: `${toUtcStamp(event.start)}/${toUtcStamp(event.end)}`,
		details: event.description,
		location: event.location
	}).toString()}`;
}
var STEPS = [
	"Service",
	"Barber",
	"Date & time",
	"Your details"
];
var tileBase = "rounded-lg border px-3 py-2.5 text-sm transition-colors duration-200 cursor-pointer";
var tileOff = "border-line text-cream/70 hover:border-cream/40";
var tileOn = "border-brass bg-brass/10 text-cream";
function BookingWidget() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [service, setService] = (0, import_react.useState)(null);
	const [barber, setBarber] = (0, import_react.useState)(null);
	const [date, setDate] = (0, import_react.useState)(null);
	const [time, setTime] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	const dates = (0, import_react.useMemo)(() => upcomingDates(12), []);
	const event = (0, import_react.useMemo)(() => {
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
				`Questions? Call ${SHOP.phone}. Please arrive 5 minutes early.`
			].filter(Boolean).join("\n"),
			location: SHOP.address,
			start,
			end
		};
	}, [
		service,
		barber,
		date,
		time,
		name,
		email,
		phone,
		notes
	]);
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
	function submit(e) {
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
	if (confirmed && event && service && barber && date && time) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-panel rounded-2xl ring-1 ring-brass/30 p-6 lg:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.3em] text-brass",
				children: "Confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "mt-3 font-serif text-3xl leading-tight",
				children: [
					"You're booked, ",
					name.split(" ")[0],
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-cream/60",
				children: "A chair is held for you. Add it to your calendar so it doesn't slip."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-6 divide-y divide-line/60 text-sm",
				children: [
					["Service", `${service.name} · ${service.minutes} min · £${service.price}`],
					["Barber", barber.name],
					["Date", formatDateLong(date)],
					["Time", `${time} – ${addMinutes(combineDateTime(date, time), service.minutes).toLocaleTimeString("en-GB", {
						hour: "2-digit",
						minute: "2-digit"
					})}`],
					["Where", SHOP.address],
					["Contact", `${phone} · ${email}`],
					...notes ? [["Notes", notes]] : []
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between gap-6 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-cream/50",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-right text-cream",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: googleCalendarUrl(event),
						target: "_blank",
						rel: "noreferrer noopener",
						className: "inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
						children: "Add to Google Calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => downloadIcs(event),
						className: "inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200",
						children: "Apple / Outlook (.ics)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: reset,
						className: "inline-flex items-center rounded-full px-3 py-2.5 text-sm text-cream/50 hover:text-cream transition-colors duration-200",
						children: "Book another"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-panel rounded-2xl ring-1 ring-black/20 p-6 lg:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-2xl text-cream",
					children: [
						"Step ",
						step + 1,
						" · ",
						STEPS[step]
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-cream/40",
					children: [step + 1, " of 4"]
				})]
			}),
			step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 gap-3",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setService(s),
					className: `text-left ${tileBase} ${service?.id === s.id ? tileOn : tileOff}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-cream",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: service?.id === s.id ? "text-sm text-brass" : "text-sm text-cream/50",
						children: [
							"£",
							s.price,
							" · ",
							s.minutes,
							" min"
						]
					})]
				}, s.id))
			}),
			step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-3 gap-3",
				children: BARBERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setBarber(b),
					className: `text-left ${tileBase} ${barber?.id === b.id ? tileOn : tileOff}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium text-cream",
						children: b.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-cream/50",
						children: b.role
					})]
				}, b.id))
			}),
			step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-cream/50",
					children: "Date"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2",
					children: dates.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDate(d),
						className: `${tileBase} ${date && toDateKey(date) === toDateKey(d) ? tileOn : tileOff}`,
						children: formatDateTile(d)
					}, toDateKey(d)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-xs font-medium uppercase tracking-[0.2em] text-cream/50",
					children: "Time"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2",
					children: TIME_SLOTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTime(t),
						className: `${tileBase} ${time === t ? tileOn : tileOff}`,
						children: t
					}, t))
				})
			] }),
			step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "grid sm:grid-cols-2 gap-4",
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/50",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Your full name",
							className: "mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/50",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "you@example.com",
							className: "mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/50",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "tel",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "07000 000000",
							className: "mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/50",
							children: "Notes (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							placeholder: "Code FIRST15, parking, etc.",
							className: "mt-1 w-full rounded-lg bg-ink border border-line px-3 py-2.5 text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 rounded-lg border border-line/60 p-4 text-sm text-cream/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream",
								children: service?.name
							}),
							" with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream",
								children: barber?.name
							}),
							" ·",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream",
								children: date ? formatDateLong(date) : ""
							}),
							" at",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brass",
								children: time
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "sm:col-span-2 text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: back,
							className: "inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
							children: "Confirm booking"
						})]
					})
				]
			}),
			step < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-destructive",
				children: error
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: back,
					className: "inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 hover:border-cream/40 transition-colors duration-200",
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: next,
					className: "inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-2.5 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
					children: "Continue"
				})]
			})] })
		]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.35em] text-brass",
							children: "Book a Seat"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-serif font-medium text-5xl leading-tight text-balance",
							children: "Reserve your chair"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-pretty text-sm text-cream/60 max-w-[34ch]",
							children: "Choose a service, a barber, and a time. Confirm and it lands in your calendar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 space-y-6 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-[0.2em] text-brass",
										children: "Visit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-cream/70",
										children: SHOP.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SHOP.mapsUrl,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "mt-1 inline-block text-brass hover:text-cream transition-colors duration-200",
										children: "Open in Maps →"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-[0.2em] text-brass",
										children: "Talk"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SHOP.phoneHref,
										className: "mt-2 block text-cream/70 hover:text-cream transition-colors",
										children: SHOP.phone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${SHOP.email}`,
										className: "block text-cream/70 hover:text-cream transition-colors",
										children: SHOP.email
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-[0.2em] text-brass",
									children: "Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-cream/70 max-w-[22rem]",
									children: SHOP.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.time })]
									}, h.days))
								})] })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWidget, {})
				})]
			})
		})
	});
}
//#endregion
export { Contact as component };
