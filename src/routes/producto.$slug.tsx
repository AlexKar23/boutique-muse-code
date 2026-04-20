import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { ChevronDown, Heart, RotateCcw, ShieldCheck, Truck, Star, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} · Trouble Makers Shop` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.images[0] },
          { name: "twitter:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Producto no encontrado</h1>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-widest text-background">
        Volver
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-md px-6 py-32 text-center">
      <h1 className="font-display text-2xl">Error</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: ReturnType<typeof getProduct> & object };
  const { add } = useCart();
  const [active, setActive] = useState(0);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  // Galería intercalando producto + lifestyle
  const gallery = product.images.flatMap((img, i) =>
    product.lifestyle[i] ? [img, product.lifestyle[i]] : [img],
  );

  return (
    <>
      <div className="mx-auto max-w-[1320px] px-6 pt-8">
        <nav className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-primary">Inicio</Link> ·{" "}
          <span>{product.collection}</span> · <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1fr_480px] lg:gap-16">
        {/* GALERÍA EDITORIAL */}
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-2xl bg-muted ${
                  i === 0 ? "sm:col-span-2 sm:aspect-[16/11]" : "aspect-[4/5]"
                } ${active === i ? "ring-2 ring-primary ring-offset-4 ring-offset-background" : ""}`}
              >
                <img src={src} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 ease-organic hover:scale-105" />
                {i % 2 === 1 && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                    Lifestyle
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* INFO + COMPRA */}
        <aside className="lg:sticky lg:top-24 lg:h-max">
          {product.badge && (
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-deep">
              {product.badge}
            </span>
          )}
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {product.collection}
          </p>
          <h1 className="mt-2 font-display text-4xl leading-tight">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-gold">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
            </div>
            <span className="text-xs text-muted-foreground">4.9 (218 reseñas)</span>
          </div>

          <div className="mt-6 flex items-end gap-4">
            <p className="font-display text-4xl text-primary">{product.price}€</p>
            {product.oldPrice && (
              <p className="font-mono text-base text-muted-foreground line-through">{product.oldPrice}€</p>
            )}
            {product.stock <= 5 && (
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive">
                🔥 Solo quedan {product.stock} unidades
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-[11px] text-muted-foreground">IVA incl. · 4 plazos sin intereses con Klarna</p>

          <p className="mt-6 text-sm leading-relaxed text-foreground/80">{product.description}</p>

          {/* Botones */}
          <div className="mt-8 space-y-3">
            <button
              onClick={() => add(product)}
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-foreground text-sm font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-primary ease-organic"
            >
              <Sparkles className="h-4 w-4" />
              Añadir a la cesta
            </button>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background text-sm font-semibold transition hover:border-foreground hover:bg-foreground hover:text-background ease-organic">
              <span className="font-display italic">G</span>Pay · Comprar al instante
            </button>
            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-full text-xs font-medium text-muted-foreground hover:text-primary">
              <Heart className="h-4 w-4" /> Añadir a favoritos
            </button>
          </div>

          {/* Confianza inline */}
          <ul className="mt-6 space-y-2 rounded-2xl bg-cream p-4 text-sm">
            <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Envío estándar: <strong>1-3 días laborables</strong></li>
            <li className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-primary" /> Devolución gratuita en 14 días</li>
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Pago 100% seguro · SSL</li>
          </ul>

          {/* Acordeones nativos */}
          <div className="mt-6 divide-y divide-border border-y border-border">
            {[
              { t: "Materiales y cuidado", c: product.materials + " Evita el contacto con perfumes y agua salada para conservar el brillo." },
              { t: "Medidas", c: product.measurements },
              { t: "Envío y devoluciones", c: "Envío gratis a partir de 80€. Devoluciones gratuitas durante 14 días desde la recepción." },
              { t: "Garantía artesanal", c: "Reparamos cualquier defecto de fabricación durante 1 año sin coste." },
            ].map((it) => (
              <details key={it.t} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium">
                  {it.t}
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.c}</p>
              </details>
            ))}
          </div>
        </aside>
      </section>

      {/* RELACIONADOS */}
      <section className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-4xl">También te puede gustar</h2>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
