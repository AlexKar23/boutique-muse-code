import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { SmartBanner } from "@/components/SmartBanner";
import { Header } from "@/components/Header";
import { TrustBar } from "@/components/TrustBar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Link } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold">404</h1>
        <h2 className="mt-4 font-display text-xl">Esta joya no existe</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas se ha extraviado en algún viaje. Vuelve al inicio.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background hover:bg-primary"
        >
          Ir a inicio
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Trouble Makers Shop · Joyas que cuentan tu historia" },
      {
        name: "description",
        content:
          "Bisutería artesanal diseñada en Madrid. Pendientes, anillos y collares únicos. Envío en 1-3 días, devolución gratuita 14 días.",
      },
      { property: "og:title", content: "Trouble Makers Shop" },
      { property: "og:description", content: "Joyas artesanales de Madrid para mujeres que rompen las reglas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
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
  return (
    <CartProvider>
      <SmartBanner />
      <Header />
      <TrustBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
