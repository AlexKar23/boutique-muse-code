import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { Heart } from "lucide-react";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, span = "regular" }: { product: Product; span?: "regular" | "tall" }) {
  const { add } = useCart();
  return (
    <article
      className={`group relative flex flex-col ${
        span === "tall" ? "row-span-2" : ""
      }`}
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden rounded-2xl bg-muted"
      >
        <div className={`${span === "tall" ? "aspect-[3/4]" : "aspect-square"} overflow-hidden`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105"
            loading="lazy"
          />
        </div>
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest ${
              product.badge === "Sale"
                ? "bg-destructive text-destructive-foreground"
                : product.badge === "Edición limitada"
                ? "bg-foreground text-background"
                : "bg-background text-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
        <button
          aria-label="Favorito"
          onClick={(e) => e.preventDefault()}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 opacity-0 shadow-soft transition-all duration-500 ease-organic group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            add(product);
          }}
          className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-foreground py-3 text-xs font-semibold uppercase tracking-widest text-background opacity-0 transition-all duration-500 ease-organic group-hover:translate-y-0 group-hover:opacity-100"
        >
          + Añadir
        </button>
      </Link>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {product.collection}
          </p>
          <Link
            to="/producto/$slug"
            params={{ slug: product.slug }}
            className="block truncate text-sm font-medium hover:text-primary"
          >
            {product.name}
          </Link>
        </div>
        <div className="text-right">
          <p className="font-display text-lg">{product.price}€</p>
          {product.oldPrice && (
            <p className="font-mono text-[11px] text-muted-foreground line-through">
              {product.oldPrice}€
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
