import { SectionTitle } from "../../ui/SectionTitle";
import { TestimonialCard } from "../../shared/TestimonialCard";
import { Reveal } from "../../animations/Reveal";
import { TESTIMONIALS } from "../../../data/testimonials";

export function Testimonials() {
  return (
    <section className="relative border-t border-ink-400/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Lo que dicen los clientes"
          title="Equipos que confían en IOI."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 0.06}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
