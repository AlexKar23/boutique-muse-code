import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { X, Plus, Minus, ShieldCheck, RotateCcw, Truck } from "lucide-react";

const FREE_THRESHOLD = 80;

export function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, subtotal, applyCode, discount } = useCart();
  const [code, setCode] = useState("");
  const [codeMsg, setCodeMsg] = useState<string | null>(null);

  const remaining = Math.max(0, FREE_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_THRESHOLD) * 100);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity duration-500 ease-organic ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-float transition-transform duration-500 ease-organic ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="eyebrow">Tu cesta</p>
            <h2 className="font-display text-2xl">{lines.length} {lines.length === 1 ? "pieza" : "piezas"}</h2>
          </div>
          <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-accent" aria-label="Cerrar">
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Barra de envío */}
        <div className="border-b border-border bg-cream px-6 py-4">
          {remaining > 0 ? (
            <p className="text-sm">
              Te faltan <strong className="text-primary">{remaining.toFixed(2)}€</strong> para conseguir{" "}
              <strong>envío gratis</strong> 🎁
            </p>
          ) : (
            <p className="text-sm font-medium text-primary">✓ ¡Tienes envío gratis!</p>
          )}
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-gradient-teal transition-[width] duration-700 ease-organic"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Líneas */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft">
                <span className="text-3xl">🛍️</span>
              </div>
              <p className="mt-4 font-display text-xl">Tu cesta está vacía</p>
              <p className="mt-1 text-sm text-muted-foreground">Encuentra tu próxima joya favorita.</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background hover:bg-foreground/90"
              >
                Explorar tienda
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((l) => (
                <li key={l.product.slug} className="flex gap-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img src={l.product.images[0]} alt={l.product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {l.product.collection}
                      </p>
                      <p className="text-sm font-medium">{l.product.name}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          onClick={() => setQty(l.product.slug, l.qty - 1)}
                          className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-primary"
                          aria-label="Restar"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.product.slug, l.qty + 1)}
                          className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-primary"
                          aria-label="Sumar"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-primary">
                        {(l.product.price * l.qty).toFixed(2)}€
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(l.product.slug)}
                    className="self-start text-muted-foreground hover:text-destructive"
                    aria-label="Eliminar"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-border bg-cream/50 px-6 py-5">
            {/* Código de descuento */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const ok = applyCode(code);
                setCodeMsg(ok ? "✓ Código TROUBLE10 aplicado" : "Código no válido");
              }}
              className="flex gap-2"
            >
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Código de descuento"
                className="h-10 flex-1 rounded-full border border-border bg-background px-4 text-xs uppercase tracking-wider focus:border-primary focus:outline-none"
              />
              <button className="rounded-full border border-foreground px-4 text-[11px] font-semibold uppercase tracking-widest hover:bg-foreground hover:text-background">
                Aplicar
              </button>
            </form>
            {codeMsg && <p className="mt-2 text-[11px] text-muted-foreground">{codeMsg}</p>}

            <div className="mt-5 space-y-1.5 text-sm">
              {discount > 0 && (
                <div className="flex justify-between text-primary">
                  <span>Descuento</span>
                  <span>-{discount.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-2xl">{subtotal.toFixed(2)}€</span>
              </div>
              <p className="text-[11px] text-muted-foreground">Envío e impuestos calculados al finalizar.</p>
            </div>

            <Link
              to="/checkout"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold uppercase tracking-widest text-background transition hover:bg-primary ease-organic"
            >
              Finalizar compra
            </Link>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-muted-foreground">
              <span className="flex flex-col items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Pago seguro
              </span>
              <span className="flex flex-col items-center gap-1">
                <RotateCcw className="h-4 w-4 text-primary" />
                Devolución 14 días
              </span>
              <span className="flex flex-col items-center gap-1">
                <Truck className="h-4 w-4 text-primary" />
                Envío 1-3 días
              </span>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
}
