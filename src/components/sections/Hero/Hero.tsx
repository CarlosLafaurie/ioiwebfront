import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";
import { FadeIn } from "../../animations/FadeIn";
import { HeroBackground } from "./HeroBackground";
import { scrollToId } from "../../../utils/helpers";

const STATS = [
  { value: "40+", label: "Proyectos entregados" },
  { value: "8", label: "Años de experiencia combinada" },
  { value: "100%", label: "Código propietario del cliente" },
  { value: "24/7", label: "Monitoreo de infraestructura" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <HeroBackground />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-10">
          <FadeIn delay={0.05}>
            <Badge dot>
              <Sparkles className="h-3 w-3" strokeWidth={1.6} />
              Disponibilidad limitada · 2026
            </Badge>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <h1 className="font-display max-w-5xl text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] tracking-[-0.045em] text-white">
              Construimos software
              <br />
              que <span className="text-ink-700">impulsa</span> empresas
              <span className="ml-2 inline-block h-[0.85em] w-[3px] translate-y-1 bg-white align-middle animate-caret" />
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="max-w-2xl text-[17px] leading-relaxed text-ink-700 md:text-lg">
              Desarrollamos software empresarial, automatizaciones e
              inteligencia artificial para organizaciones que buscan escalar
              con tecnología hecha a la medida de su operación.
            </p>
          </FadeIn>

          <FadeIn delay={0.42}>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => scrollToId("contact")}
                iconRight={<ArrowRight className="h-4 w-4" strokeWidth={1.7} />}
              >
                Solicitar cotización
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToId("services")}
              >
                Explorar servicios
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.6} y={24}>
            <div className="mt-12 grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-400/60 bg-ink-400/60 md:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-ink-100/70 px-6 py-7 backdrop-blur-sm"
                >
                  <div className="font-display text-3xl tracking-[-0.03em] text-white">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[12px] uppercase tracking-[0.14em] text-ink-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-ink-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
