import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Check, ShieldCheck, RotateCcw, Truck, Lock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout · Trouble Makers Shop" },
      { name: "description", content: "Finaliza tu compra de forma segura. Pago en 3 pasos sin fricción." },
    ],
  }),
  component: Checkout,
});

const SHIPPING = 5;

function Checkout() {
  const { lines, subtotal, discount } = useCart();
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<"guest" | "login">("guest");

  const total = subtotal + SHIPPING;

  return (
    <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-16">
      <div>
        {/* STEP TRACKER */}
        <ol className="mb-12 flex items-center gap-2 text-xs">
          {["Información", "Envío", "Pago"].map((label, i) => {
            const n = i + 1;
            const done = step > n;
            const active = step === n;
            return (
              <li key={label} className="flex items-center gap-2">
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full font-mono text-[11px] font-semibold transition ${
                    done
                      ? "bg-primary text-primary-foreground"
                      : active
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="h-3.5 w-3.5" /> : n}
                </span>
                <span className={`uppercase tracking-widest ${active ? "text-foreground" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {n < 3 && <ChevronRight className="h-3 w-3 text-muted-foreground" />}
              </li>
            );
          })}
        </ol>

        {step === 1 && (
          <>
            {/* CERO FRICCIÓN — INVITADO PRINCIPAL */}
            <h1 className="font-display text-3xl">¿Cómo quieres comprar?</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                onClick={() => setMode("guest")}
                className={`group rounded-3xl border-2 p-6 text-left transition ${
                  mode === "guest"
                    ? "border-primary bg-primary-soft shadow-elegant"
                    : "border-border bg-background hover:border-foreground/30"
                }`}
              >
                <span className="inline-flex rounded-full bg-primary px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Recomendado · 30 segundos
                </span>
                <p className="mt-4 font-display text-2xl">Comprar como invitado</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sin registro. Solo necesitamos tu email para enviarte la confirmación y el seguimiento.
                </p>
              </button>
              <button
                onClick={() => setMode("login")}
                className={`rounded-3xl border-2 p-6 text-left transition ${
                  mode === "login" ? "border-foreground bg-cream" : "border-border bg-background hover:border-foreground/30"
                }`}
              >
                <span className="inline-flex rounded-full bg-muted px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Ya soy Trouble Family
                </span>
                <p className="mt-4 font-display text-2xl">Iniciar sesión</p>
                <p className="mt-2 text-sm text-muted-foreground">Recupera tus direcciones y métodos de pago guardados.</p>
              </button>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setStep(2); }}
              className="mt-10 space-y-6"
            >
              <h2 className="font-display text-2xl">Información de contacto</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" type="email" required placeholder="tu@email.com" />
                <Field label="Teléfono" type="tel" placeholder="+34 600 000 000" />
                <Field label="Nombre" required />
                <Field label="Apellidos" required />
                <Field label="Dirección" required className="sm:col-span-2" />
                <Field label="Ciudad" required />
                <Field label="Código postal" required />
              </div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" defaultChecked />
                Quiero recibir el 10% de descuento y novedades de la Trouble Family por email.
              </label>
              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-primary ease-organic"
              >
                Continuar al envío <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="font-display text-3xl">Método de envío</h1>
            <div className="mt-6 space-y-3">
              {[
                { name: "Envío estándar", desc: "1-3 días laborables", price: "5€", default: true },
                { name: "Envío express 24h", desc: "Pedido antes de las 16:00", price: "9€" },
                { name: "Recogida en Pozuelo", desc: "Tienda física Madrid", price: "Gratis" },
              ].map((opt, i) => (
                <label
                  key={opt.name}
                  className="flex cursor-pointer items-center gap-4 rounded-2xl border border-border p-4 transition hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary-soft/50"
                >
                  <input type="radio" name="ship" defaultChecked={opt.default} className="h-4 w-4 accent-[var(--primary)]" />
                  <div className="flex-1">
                    <p className="font-medium">{opt.name}</p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                  <span className="font-display text-lg">{opt.price}</span>
                </label>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={() => setStep(1)} className="h-12 flex-1 rounded-full border border-border text-sm font-semibold uppercase tracking-widest hover:border-foreground">
                Volver
              </button>
              <button onClick={() => setStep(3)} className="h-12 flex-1 rounded-full bg-foreground text-sm font-semibold uppercase tracking-widest text-background hover:bg-primary">
                Continuar al pago
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="font-display text-3xl">Pago seguro</h1>
            <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Conexión cifrada SSL · Tus datos están protegidos
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["💳 Tarjeta", " Pay", "PayPal"].map((m, i) => (
                <button
                  key={i}
                  className="rounded-2xl border-2 border-border p-4 text-sm font-semibold transition hover:border-primary has-[:checked]:border-primary"
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              <Field label="Número de tarjeta" placeholder="1234 5678 9012 3456" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Caducidad" placeholder="MM/AA" />
                <Field label="CVC" placeholder="123" />
              </div>
            </div>
            <button className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-primary-deep ease-organic">
              Pagar {total.toFixed(2)}€
            </button>
            <button onClick={() => setStep(2)} className="mt-3 h-10 w-full text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground">
              ← Volver al envío
            </button>
          </>
        )}
      </div>

      {/* RESUMEN LATERAL — TRANSPARENCIA TOTAL */}
      <aside className="lg:sticky lg:top-24 lg:h-max">
        <div className="rounded-3xl border border-border bg-cream p-6">
          <h2 className="font-display text-xl">Tu pedido</h2>
          <ul className="mt-4 space-y-4 border-y border-border py-4">
            {lines.length === 0 ? (
              <li className="text-sm text-muted-foreground">
                Tu cesta está vacía. <Link to="/" className="text-primary underline">Explorar tienda</Link>
              </li>
            ) : (
              lines.map((l) => (
                <li key={l.product.slug} className="flex gap-3">
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-muted">
                    <img src={l.product.images[0]} alt={l.product.name} className="h-full w-full object-cover" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-foreground text-[10px] font-bold text-background">
                      {l.qty}
                    </span>
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium leading-tight">{l.product.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {l.product.collection}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">{(l.product.price * l.qty).toFixed(2)}€</p>
                  </div>
                </li>
              ))
            )}
          </ul>

          <div className="mt-4 space-y-2 text-sm">
            <Row label="Subtotal" value={`${(subtotal + discount).toFixed(2)}€`} muted />
            {discount > 0 && <Row label="Descuento" value={`-${discount.toFixed(2)}€`} highlight />}
            <Row label="Envío estándar" value={`${SHIPPING.toFixed(2)}€`} muted />
            <Row label="Impuestos (incl.)" value="—" muted />
            <div className="my-3 border-t border-border" />
            <div className="flex items-baseline justify-between">
              <span className="font-display text-lg">Total</span>
              <span className="font-display text-3xl">{total.toFixed(2)}€</span>
            </div>
            <p className="text-[11px] text-muted-foreground">EUR · IVA incluido · sin sorpresas</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center text-[10px] text-muted-foreground">
            <span className="flex flex-col items-center gap-1"><ShieldCheck className="h-4 w-4 text-primary" /> Pago seguro</span>
            <span className="flex flex-col items-center gap-1"><RotateCcw className="h-4 w-4 text-primary" /> Devolución 14d</span>
            <span className="flex flex-col items-center gap-1"><Truck className="h-4 w-4 text-primary" /> Envío 1-3d</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1.5 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
      />
    </label>
  );
}

function Row({ label, value, muted, highlight }: { label: string; value: string; muted?: boolean; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className={highlight ? "font-semibold text-primary" : muted ? "text-foreground" : ""}>{value}</span>
    </div>
  );
}
