import { n as SERVICES } from "./shop-DPoJgazS.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-TGhfUwKG.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif font-medium text-5xl leading-tight text-balance",
						children: "Services & pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-pretty text-sm text-cream/60 max-w-[32ch]",
						children: "Every service ends with a hot towel and a finishing spray. Prices in pounds, no card surcharge, tips never expected."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						hash: "book",
						className: "mt-8 inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
						children: "Book a service"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: SERVICES.map((s, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-baseline justify-between gap-6 py-5 transition-colors duration-200 ${i === arr.length - 1 ? "" : "border-b border-line/60 hover:border-brass/50"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl text-cream",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-cream/50 mt-1",
								children: s.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-cream/40 mt-2 uppercase tracking-[0.2em]",
								children: [s.minutes, " minutes"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-2xl text-brass whitespace-nowrap",
							children: ["£", s.price]
						})]
					}, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-cream/50 max-w-[60ch]",
					children: "Prices are per person and include consultation. Appointments run to time — if you are more than 10 minutes late we may need to shorten or move your service."
				})]
			})]
		})
	}) });
}
//#endregion
export { Services as component };
