import { SectionTitle } from "../../ui/SectionTitle";
import { PortfolioCard } from "../../shared/PortfolioCard";
import { Reveal } from "../../animations/Reveal";
import { useProjects } from "../../../hooks/useProjects";

export function Portfolio() {
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <section
        id="portfolio"
        className="relative border-t border-ink-400/40 py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-ink-700">Cargando proyectos...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="portfolio"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Trabajo seleccionado"
            title={
              <>
                Proyectos construidos
                <br className="hidden md:block" /> para operar en producción.
              </>
            }
            description="Una muestra del tipo de plataformas que diseñamos: confiables, mantenibles y enfocadas en resultados medibles."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.06}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}