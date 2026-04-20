const items = [
  { icon: "🚚", text: "Envío en 1-3 días · Gratis +80€" },
  { icon: "🔄", text: "Devolución gratuita 14 días" },
  { icon: "🔒", text: "Pago 100% seguro" },
  { icon: "✋", text: "Fabricación artesanal en Madrid" },
  { icon: "⭐", text: "+2.400 clientas satisfechas" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border/60 bg-cream/60 backdrop-blur">
      <div className="mx-auto hidden max-w-[1320px] items-center justify-between gap-6 px-6 py-3 lg:flex">
        {items.map((it) => (
          <div
            key={it.text}
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
          >
            <span className="text-base">{it.icon}</span>
            <span>{it.text}</span>
          </div>
        ))}
      </div>
      {/* Marquee móvil/tablet */}
      <div className="overflow-hidden lg:hidden">
        <div className="flex w-max animate-marquee gap-10 py-3 pl-10">
          {[...items, ...items, ...items].map((it, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="text-base">{it.icon}</span>
              <span>{it.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
