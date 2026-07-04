import {
  Boxes,
  Cpu,
  Layers,
  LifeBuoy,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionTitle } from "../../ui/SectionTitle";
import { Reveal } from "../../animations/Reveal";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Desarrollo 100% personalizado",
    text: "Sin plantillas, sin código genérico. Cada decisión técnica responde a tu modelo de negocio.",
  },
  {
    icon: Layers,
    title: "Soluciones escalables",
    text: "Arquitecturas pensadas para crecer de 10 a 10.000 usuarios sin reescrituras costosas.",
  },
  {
    icon: Cpu,
    title: "Integración de IA",
    text: "Agentes y modelos LLM aplicados a procesos reales, con métricas claras de retorno.",
  },
  {
    icon: Boxes,
    title: "Arquitecturas modernas",
    text: "Stacks productivos, contenedores, infraestructura como código y despliegues continuos.",
  },
  {
    icon: Workflow,
    title: "Automatización empresarial",
    text: "Eliminamos trabajo manual repetitivo con flujos confiables conectados a tu operación.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte especializado",
    text: "Equipo dedicado tras el lanzamiento. Monitoreo, evolución y mejoras continuas.",
  },
];

export function WhyIOI() {
  return (
    <section className="relative border-t border-ink-400/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="¿Por qué IOI?"
              title={
                <>
                  No vendemos horas.
                  <br />
                  Entregamos producto.
                </>
              }
              description="Operamos con la disciplina de un equipo de producto internacional: entregas predecibles, documentación clara y código que tu equipo puede mantener."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-400/60 bg-ink-400/60 sm:grid-cols-2">
              {REASONS.map((r, i) => {
                const Icon = r.icon;
                return (
                  <Reveal
                    key={r.title}
                    delay={i * 0.05}
                    className="bg-ink-50 transition-colors duration-500 hover:bg-ink-100/70"
                  >
                    <div className="flex h-full flex-col gap-4 p-7">
                      <Icon
                        className="h-5 w-5 text-ink-800"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-[15px] font-medium tracking-tight text-white">
                        {r.title}
                      </h3>
                      <p className="text-[13.5px] leading-relaxed text-ink-700">
                        {r.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
