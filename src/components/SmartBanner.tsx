import { useState } from "react";
import { X } from "lucide-react";

export function SmartBanner() {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (!open) return null;

  return (
    <div className="relative bg-gradient-teal text-primary-foreground">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-5 py-2.5 text-sm sm:flex-row">
        <p className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-base">🎁</span>
          <span>
            <strong className="font-display italic">10% en tu primera compra</strong>
            <span className="ml-2 opacity-80">· Únete a la Trouble Family</span>
          </span>
        </p>
        {done ? (
          <p className="font-mono text-xs uppercase tracking-widest opacity-90">
            ✓ Revisa tu email
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="flex w-full items-center gap-2 sm:w-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="h-9 flex-1 rounded-full bg-background/95 px-4 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 sm:w-56"
            />
            <button
              type="submit"
              className="h-9 rounded-full bg-foreground px-4 text-[11px] font-semibold uppercase tracking-widest text-background transition hover:bg-foreground/90 ease-organic"
            >
              Desbloquear
            </button>
          </form>
        )}
        <button
          aria-label="Cerrar banner"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-2 rounded-full p-1 opacity-70 transition hover:bg-white/15 hover:opacity-100 sm:relative sm:right-0 sm:top-0"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
