import { IOILogo } from "../../../assets/logos/IOILogo";
import { scrollToId } from "../../../utils/helpers";

const COLUMNS = [
  {
    title: "Empresa",
    links: [
      { label: "Servicios", id: "services" },
      { label: "Portafolio", id: "portfolio" },
      { label: "Proceso", id: "process" },
      { label: "Fundadores", id: "founders" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", id: "blog" },
      { label: "Tecnologías", id: "technologies" },
      { label: "Preguntas frecuentes", id: "faq" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Solicitar cotización", id: "contact" },
      { label: "Hablar por WhatsApp", id: "contact" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-400/60 bg-ink-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 md:col-span-5">
              <IOILogo className="h-18 w-auto" />       
            <p className="max-w-sm text-[14px] leading-relaxed text-ink-700">
              Transformamos ideas en soluciones digitales. Software empresarial,
              automatización e inteligencia artificial para organizaciones que
              buscan escalar.
            </p>
            <div className="mt-2 flex items-center gap-3 text-[12px] text-ink-600">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              <span>Barranquilla, Colombia · LATAM</span>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-600">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <button
                        onClick={() => scrollToId(l.id)}
                        className="text-[14px] text-ink-800 transition-colors hover:text-white"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-400/60 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[12px] text-ink-600">
            © {year} IOI — Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3 text-[12px] text-ink-600">
            <span>Redes sociales próximamente</span>
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            <span>v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
