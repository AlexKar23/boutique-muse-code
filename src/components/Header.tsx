import { Link, useLocation } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "Nueva colección", to: "/" },
  { label: "Pendientes", to: "/" },
  { label: "Anillos", to: "/" },
  { label: "Collares", to: "/" },
  { label: "#TravelWithTrouble", to: "/" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.slice(0, 3).map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className="group relative text-[13px] font-medium text-foreground/75 transition hover:text-primary ease-organic"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-organic group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link to="/" className="flex items-center justify-center" aria-label="Inicio">
          <span className="font-display text-2xl font-bold tracking-tight">
            Trouble<span className="italic text-primary">makers</span>
          </span>
        </Link>

        <div className="flex items-center justify-end gap-1">
          <nav className="mr-2 hidden items-center gap-7 lg:flex">
            {nav.slice(3).map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="group relative text-[13px] font-medium text-foreground/75 transition hover:text-primary ease-organic"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-organic group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
          <button className="rounded-full p-2 text-foreground/70 transition hover:bg-accent hover:text-primary" aria-label="Buscar">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button className="hidden rounded-full p-2 text-foreground/70 transition hover:bg-accent hover:text-primary sm:block" aria-label="Favoritos">
            <Heart className="h-[18px] w-[18px]" />
          </button>
          <button className="hidden rounded-full p-2 text-foreground/70 transition hover:bg-accent hover:text-primary sm:block" aria-label="Cuenta">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="relative rounded-full p-2 text-foreground/70 transition hover:bg-accent hover:text-primary"
            aria-label="Carrito"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Mobile route hint */}
      {loc.pathname !== "/" && (
        <div className="border-t border-border/40 bg-cream/40 px-6 py-2 text-[11px] text-muted-foreground lg:hidden">
          <Link to="/" className="hover:text-primary">← Inicio</Link>
        </div>
      )}
    </header>
  );
}
