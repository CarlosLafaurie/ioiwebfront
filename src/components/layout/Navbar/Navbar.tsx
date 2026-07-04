import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IOILogo } from "../../../assets/logos/IOILogo";
import { Button } from "../../ui/Button";
import { cn } from "../../../utils/cn";
import { scrollToId } from "../../../utils/helpers";

const NAV_LINKS = [
  { id: "services", label: "Servicios" },
  { id: "portfolio", label: "Portafolio" },
  { id: "process", label: "Proceso" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink-400/60 bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          onClick={() => scrollToId("hero")}
          className="text-white"
          aria-label="Ir al inicio"
        >
          <IOILogo className="h-16 w-auto" />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="rounded-full px-4 py-2 text-[13px] text-ink-800 transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => handleNav("contact")}>
            Solicitar cotización
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-400/70 text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-ink-400/40 bg-black/90 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="rounded-lg px-3 py-3 text-left text-[15px] text-ink-800 transition-colors hover:bg-ink-200/60 hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <div className="pt-2">
            <Button className="w-full" onClick={() => handleNav("contact")}>
              Solicitar cotización
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
