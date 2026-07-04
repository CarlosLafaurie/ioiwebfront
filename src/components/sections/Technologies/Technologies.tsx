import { SectionTitle } from "../../ui/SectionTitle";
import { TechnologyCard } from "../../shared/TechnologyCard";

const TECHNOLOGIES = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "TypeScript",
  "MySQL",
  "Docker",
  "AWS",
  "Python",
  "OpenAI",
] as const;

export function Technologies() {
  // Duplicate list for seamless marquee loop.
  const loop = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section
      id="technologies"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Stack tecnológico"
          title="Tecnologías que dominamos."
          description="Trabajamos con un conjunto deliberado de herramientas maduras y de alto rendimiento. Elegimos el stack según el problema, no según la moda."
        />
      </div>

      <div className="relative mt-16 overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />

        <div className="animate-marquee flex w-max gap-4">
          {loop.map((tech, idx) => (
            <TechnologyCard key={`${tech}-${idx}`} name={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
