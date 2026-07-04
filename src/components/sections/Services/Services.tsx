import { SectionTitle } from "../../ui/SectionTitle";
import { ServiceCard } from "../../shared/ServiceCard";
import { Reveal } from "../../animations/Reveal";
import { useServices } from "../../../hooks/useServices";

export function Services() {
  const { services, loading } = useServices();

  if (loading) {
    return (
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          Cargando servicios...
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Servicios"
          title="Capacidades integrales para operaciones modernas."
          description="Diseñamos, construimos y operamos software que se integra con la realidad de tu empresa."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-400/60 bg-ink-400/60 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal
              key={service.id}
              delay={idx * 0.04}
              className="h-full bg-ink-50"
            >
              <ServiceCard
                service={service}
                index={idx}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}