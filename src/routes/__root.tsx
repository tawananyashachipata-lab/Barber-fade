import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PromoModal } from "@/components/PromoModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-cream">404</h1>
        <h2 className="mt-4 font-serif text-xl text-cream">Page not found</h2>
        <p className="mt-2 text-sm text-cream/60">
          That page has been swept up. Try the menu, or book a chair.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-brass-soft transition-colors hover:bg-cream"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-ink px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl text-cream">This page didn't load</h1>
        <p className="mt-2 text-sm text-cream/60">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-brass-soft transition-colors hover:bg-cream"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-cream/70 transition-colors hover:border-cream/40"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mercer Barbers — Heritage barber shop in Clerkenwell" },
      {
        name: "description",
        content:
          "Mercer Barbers: precise cuts, skin fades and hot-towel shaves in Clerkenwell, London. Book your chair online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-ink text-cream font-body antialiased flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <PromoModal />
      </div>
    </QueryClientProvider>
  );
}
