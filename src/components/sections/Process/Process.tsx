import { SectionTitle } from "../../ui/SectionTitle";
import { Reveal } from "../../animations/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Análisis",
    text: "Entendemos tu operación, identificamos cuellos de botella y definimos métricas de éxito antes de escribir una línea de código.",
  },
  {
    n: "02",
    title: "Diseño",
    text: "Arquitectura técnica, prototipos de interfaz y plan de entrega validado contigo paso a paso.",
  },
  {
    n: "03",
    title: "Desarrollo",
    text: "Ciclos cortos con entregas semanales, revisiones de código y QA continuo.",
  },
  {
    n: "04",
    title: "Implementación",
    text: "Despliegue controlado en infraestructura cloud, migración de datos y capacitación del equipo.",
  },
  {
    n: "05",
    title: "Soporte",
    text: "Monitoreo proactivo, evolución continua y mejoras según el comportamiento real de los usuarios.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          title="Un proceso medible, sin sorpresas."
          description="Cinco fases con entregables claros. Cada etapa termina con un artefacto verificable y validación del cliente."
        />

        <div className="relative mt-20">
          {/* Vertical line on mobile / horizontal on desktop */}
          <div
            aria-hidden
            className="absolute left-5 top-0 hidden h-full w-px bg-ink-400/70 md:block md:left-0 md:right-0 md:top-12 md:h-px md:w-full"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.07}>
                <div className="relative flex flex-col gap-4 pl-14 md:pl-0 md:pt-16">
                  {/* Dot */}
                  <span className="absolute left-0 top-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-400/70 bg-black font-mono text-[11px] text-ink-700 md:left-0 md:top-0 md:h-6 md:w-6 md:text-[10px]">
                    {step.n}
                  </span>
                  <h3 className="font-display text-xl tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-700">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
