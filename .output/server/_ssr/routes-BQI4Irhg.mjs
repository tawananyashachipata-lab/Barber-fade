import { n as SERVICES, r as SHOP } from "./shop-DPoJgazS.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQI4Irhg.js
var import_jsx_runtime = require_jsx_runtime();
var hero_shop_default = "/assets/hero-shop-YO_06YeT.jpg";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_shop_default,
						alt: "",
						width: 1920,
						height: 1088,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fade-up text-xs font-medium uppercase tracking-[0.35em] text-brass",
						children: SHOP.established
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "fade-up fade-up-1 mt-6 font-serif font-semibold leading-none text-5xl sm:text-7xl lg:text-8xl max-w-[20ch] text-balance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gradient-to-b from-cream via-brass to-brass-soft bg-clip-text text-transparent",
							children: "The clean snap of a straight razor"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "fade-up fade-up-2 mt-8 max-w-[48ch] text-pretty text-base sm:text-lg text-cream/70",
						children: [SHOP.tagline, " Precise cuts, hot-towel shaves, and a chair you will not want to leave."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fade-up fade-up-3 mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "book",
							className: "inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
							children: "Book Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors duration-200",
							children: ["View the price list", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brass",
								"aria-hidden": "true",
								children: "→"
							})]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line/70",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-12 gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.35em] text-brass",
								children: "The Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-serif font-medium text-4xl leading-tight text-balance",
								children: "Services & pricing"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-pretty text-sm text-cream/60 max-w-[30ch]",
								children: "Every service ends with a hot towel and a finishing spray. Prices in pounds."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services",
								className: "mt-6 inline-flex items-center gap-2 text-sm text-brass hover:text-cream transition-colors duration-200",
								children: ["Full price list", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "→"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: SERVICES.slice(0, 5).map((s, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-baseline justify-between gap-6 py-4 transition-colors duration-200 ${i === arr.length - 1 ? "" : "border-b border-line/60 hover:border-brass/50"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl text-cream",
									children: s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-cream/50 mt-1",
									children: s.description
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-serif text-2xl text-brass whitespace-nowrap",
									children: ["£", s.price]
								})]
							}, s.id))
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line/70 bg-panel/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.35em] text-brass",
							children: "Visit us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif font-medium text-4xl leading-tight text-balance",
							children: "Ironmonger Row, since 1998"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-cream/60 max-w-[38ch]",
							children: "Three chairs, one standard. Walk in when a chair is free, or hold one for yourself."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							hash: "book",
							className: "mt-8 inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
							children: "Reserve your chair"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 grid sm:grid-cols-2 gap-6 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-ink ring-1 ring-line/60 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.2em] text-brass",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-cream/70",
							children: SHOP.hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.days }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.time })]
							}, h.days))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-ink ring-1 ring-line/60 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.2em] text-brass",
								children: "Find us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-cream/70",
								children: SHOP.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SHOP.phoneHref,
								className: "mt-2 block text-cream/70 hover:text-cream transition-colors",
								children: SHOP.phone
							})
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
