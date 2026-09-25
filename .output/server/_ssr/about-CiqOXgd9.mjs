import { r as SHOP, t as BARBERS } from "./shop-DPoJgazS.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CiqOXgd9.js
var import_jsx_runtime = require_jsx_runtime();
var PORTRAITS = {
	marcus: "/assets/barber-marcus-Cia1SG2o.jpg",
	dario: "/assets/barber-dario-EytXnFYY.jpg",
	elliot: "/assets/barber-elliot-CToarYrU.jpg"
};
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-12 gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.35em] text-brass",
				children: "Our story"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-serif font-medium text-5xl leading-tight text-balance",
				children: "A room that has done this since 1998"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7 space-y-5 text-cream/70 text-pretty",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Marcus Vale took the lease on a narrow shopfront at 24 Ironmonger Row with one chair, a secondhand mirror and a jar of pomade. The queue outside on Saturdays did the rest." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Almost three decades later there are three chairs, a hot-towel cabinet that has never been switched off, and the same rule pinned by the door: nobody leaves until the cut is right." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are a barber shop, not a salon. Booked appointments come first, walk-ins are welcome whenever a chair is free, and the coffee is on the house." })
			]
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line/70 bg-panel/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[40ch]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.35em] text-brass",
						children: "The Chair"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif font-medium text-4xl leading-tight text-balance",
						children: "Three barbers, one standard"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid sm:grid-cols-3 gap-6",
					children: BARBERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-ink rounded-xl ring-1 ring-line/60 p-6 hover:ring-brass/40 transition-colors duration-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: PORTRAITS[b.id],
								alt: `${b.name}, ${b.role}`,
								loading: "lazy",
								width: 736,
								height: 912,
								className: "w-full aspect-[4/5] rounded-lg object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-serif text-2xl text-cream",
								children: b.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-cream/50 mt-1",
								children: b.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-cream/60 mt-3",
								children: b.bio
							})
						]
					}, b.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						hash: "book",
						className: "inline-flex items-center rounded-full bg-brass text-ink text-sm font-medium py-3 px-5 ring-1 ring-brass-soft hover:bg-cream transition-colors duration-200",
						children: "Book with a barber"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-cream/50",
						children: SHOP.address
					})]
				})
			]
		})
	})] });
}
//#endregion
export { About as component };
