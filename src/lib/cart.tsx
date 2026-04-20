import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  qty: number;
};

type CartCtx = {
  lines: CartLine[];
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  subtotal: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  discount: number;
  applyCode: (code: string) => boolean;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [discount, setDiscount] = useState(0);

  const value = useMemo<CartCtx>(() => {
    const subtotalRaw = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    return {
      lines,
      open,
      setOpen,
      discount,
      add: (p, qty = 1) => {
        setLines((prev) => {
          const i = prev.findIndex((l) => l.product.slug === p.slug);
          if (i >= 0) {
            const next = [...prev];
            next[i] = { ...next[i], qty: next[i].qty + qty };
            return next;
          }
          return [...prev, { product: p, qty }];
        });
        setOpen(true);
      },
      remove: (slug) => setLines((prev) => prev.filter((l) => l.product.slug !== slug)),
      setQty: (slug, qty) =>
        setLines((prev) =>
          prev
            .map((l) => (l.product.slug === slug ? { ...l, qty: Math.max(0, qty) } : l))
            .filter((l) => l.qty > 0),
        ),
      subtotal: Math.max(0, subtotalRaw - discount),
      count: lines.reduce((s, l) => s + l.qty, 0),
      applyCode: (code) => {
        const ok = code.trim().toUpperCase() === "TROUBLE10";
        if (ok) setDiscount(Math.round(subtotalRaw * 0.1 * 100) / 100);
        return ok;
      },
    };
  }, [lines, open, discount]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
}
