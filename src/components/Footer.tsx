import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 bg-foreground text-background">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 py-20 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold">
            Trouble<span className="italic text-primary">makers</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/65">
            Bisutería artesanal diseñada y fabricada en Madrid desde 2019. Joyas únicas para mujeres
            que rompen las reglas con estilo.
          </p>
          <div className="mt-6 flex gap-2">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition hover:bg-primary ease-organic"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Tienda", items: ["Nueva colección", "Pendientes", "Anillos", "Collares", "Packs regalo"] },
          { title: "Ayuda", items: ["Envíos", "Devoluciones", "Cuidado de joyas", "Tallas", "Contacto"] },
          { title: "Marca", items: ["Sobre nosotras", "#TravelWithTrouble", "Trouble Family", "Prensa", "Mayoristas"] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {c.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {c.items.map((it) => (
                <li key={it}>
                  <a className="text-sm text-background/65 transition hover:text-background" href="#">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-background/45 sm:flex-row">
          <span>© 2026 Trouble Makers Shop · Hecho a mano en Madrid</span>
          <div className="flex gap-2">
            {["VISA", "MC", "AMEX", "PAYPAL", "GPAY", "APAY"].map((p) => (
              <span
                key={p}
                className="rounded bg-background/10 px-2 py-1 font-mono text-[10px] font-semibold text-background/70"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
