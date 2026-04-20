import { createFileRoute, Link } from "@tanstack/react-router";
import { products, ugcImages, lifestyleHeroes } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Quote, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trouble Makers Shop · Joyas artesanales de Madrid" },
      {
        name: "description",
        content:
          "Bisutería artesanal diseñada en Madrid. Cada pieza es única, hecha a mano para mujeres que rompen las reglas.",
      },
      { property: "og:image", content: lifestyleHeroes.primary },
    ],
  }),
  component: Home,
});

const reviews = [
  {
    text: "Llevaba meses buscando unos pendientes así. Llegaron en 2 días y son aún más bonitos en persona.",
    author: "Lucía M.",
    city: "Barcelona",
  },
  {
    text: "Mi anillo ola es mi pieza favorita. No se ha oscurecido nada después de 6 meses de uso diario.",
    author: "Carmen P.",
    city: "Madrid",
  },
  {
    text: "Me encantó el packaging. Compré para regalo y mi hermana flipó. Repetiré seguro.",
    author: "Ana R.",
    city: "Valencia",
  },
];

const ugc = ugcImages;

function Home() {
  const [hero1, hero2, hero3] = products;

  return (
    <>
      {/* HERO ASIMÉTRICO */}
      <section className="relative overflow-hidden bg-gradient-cream">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-6 lg:pt-24">
          <div className="lg:col-span-6 lg:pt-12">
            <p className="eyebrow animate-float-in">Nueva colección · Primavera 26</p>
            <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-tight animate-float-in">
              Joyas que <em className="italic text-primary">cuentan</em>
              <br /> tu historia.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground animate-float-in">
              Bisutería artesanal diseñada en Madrid. Cada pieza es única, hecha a mano por mujeres,
              para mujeres que rompen las reglas con estilo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-float-in">
              <Link
                to="/producto/$slug"
                params={{ slug: hero1.slug }}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-background transition hover:bg-primary ease-organic"
              >
                Ver nueva colección
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/" className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 underline-offset-4 hover:text-primary hover:underline">
                Conoce la marca
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {ugc.slice(0, 4).map((src) => (
                  <img key={src} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  <span className="ml-1 font-mono text-[11px] font-medium text-foreground">4.9/5</span>
                </div>
                <p className="text-[11px] text-muted-foreground">+2.400 clientas felices</p>
              </div>
            </div>
          </div>

          {/* Composición de tarjetas asimétrica */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 lg:pt-12">
                <Link
                  to="/producto/$slug"
                  params={{ slug: hero1.slug }}
                  className="group block overflow-hidden rounded-3xl bg-muted shadow-elegant"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={hero1.images[0]} alt={hero1.name} className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-background px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest">
                      Bestseller
                    </span>
                  </div>
                </Link>
                <div className="rounded-3xl bg-foreground p-6 text-background">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Hecho a mano</p>
                  <p className="mt-2 font-display text-2xl leading-tight">
                    Diseñado en <em className="italic">Madrid</em>.
                  </p>
                  <p className="mt-2 text-xs text-background/65">Cada pieza tarda 3 horas en pulirse.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-primary-soft p-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary-deep">Edición limitada</p>
                  <p className="mt-2 font-display text-2xl leading-tight text-foreground">
                    Solo <em className="italic text-primary">100</em> unidades.
                  </p>
                  <Link to="/producto/$slug" params={{ slug: hero3.slug }} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-primary-deep hover:underline">
                    Descubrir <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <Link
                  to="/producto/$slug"
                  params={{ slug: hero2.slug }}
                  className="group block overflow-hidden rounded-3xl bg-muted shadow-elegant"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img src={hero2.images[0]} alt={hero2.name} className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105" />
                  </div>
                </Link>
                <Link
                  to="/producto/$slug"
                  params={{ slug: hero3.slug }}
                  className="group block overflow-hidden rounded-3xl bg-muted shadow-elegant"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={hero3.images[0]} alt={hero3.name} className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="mx-auto max-w-[1320px] px-6 py-20">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Lo más deseado</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Nuestras joyas favoritas.</h2>
          </div>
          <Link to="/" className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline">
            Ver toda la colección →
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* PRUEBA SOCIAL EDITORIAL */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Trouble Family</p>
              <h2 className="mt-3 font-display text-5xl leading-tight">
                Las que ya<br />
                <em className="italic text-primary">han caído</em>.
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-background/15 pt-8">
                <div>
                  <p className="font-display text-5xl">4.9<span className="text-2xl text-primary">/5</span></p>
                  <p className="mt-1 text-xs text-background/60">Valoración media</p>
                </div>
                <div>
                  <p className="font-display text-5xl">2.4<span className="text-2xl text-primary">K+</span></p>
                  <p className="mt-1 text-xs text-background/60">Clientas felices</p>
                </div>
                <div>
                  <p className="font-display text-5xl">87<span className="text-2xl text-primary">%</span></p>
                  <p className="mt-1 text-xs text-background/60">Repiten compra</p>
                </div>
                <div>
                  <p className="font-display text-5xl">14<span className="text-2xl text-primary">d</span></p>
                  <p className="mt-1 text-xs text-background/60">Devolución gratis</p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((r, i) => (
                <figure
                  key={i}
                  className={`flex flex-col justify-between rounded-3xl border border-background/10 bg-background/5 p-6 backdrop-blur ${
                    i === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <Quote className="h-5 w-5 text-primary" />
                  <blockquote className="mt-4 font-display text-lg italic leading-snug">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="flex items-center gap-1 text-gold">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-3 w-3 fill-current" />)}
                    </div>
                    <p className="mt-2 text-sm font-medium">{r.author}</p>
                    <p className="text-xs text-background/55">{r.city}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UGC #TravelWithTrouble */}
      <section className="py-24">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Comunidad</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">
                #TravelWith<em className="italic text-primary">Trouble</em>
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Nuestras joyas viajan por el mundo. Etiquétanos en Instagram para aparecer aquí.
              </p>
            </div>
            <a href="#" className="text-xs font-semibold uppercase tracking-widest text-primary hover:underline">
              Síguenos @troublemakers.shop →
            </a>
          </div>
        </div>
        <div className="mt-10 overflow-x-auto px-6 scroll-clean">
          <div className="mx-auto flex max-w-[1320px] gap-4">
            {ugc.map((src, i) => (
              <a
                key={i}
                href="#"
                className={`group relative block shrink-0 overflow-hidden rounded-3xl bg-muted ${
                  i % 3 === 0 ? "h-[420px] w-[300px]" : i % 3 === 1 ? "h-[420px] w-[340px] lg:translate-y-8" : "h-[420px] w-[280px]"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-organic group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/70 to-transparent p-4 text-background">
                  <span className="font-mono text-[11px]">@trouble_lover_{i + 1}</span>
                  <span className="text-xs">♡ {120 + i * 33}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
