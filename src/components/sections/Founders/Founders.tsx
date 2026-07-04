import { SectionTitle } from "../../ui/SectionTitle";
import { Card } from "../../ui/Card";
import { Reveal } from "../../animations/Reveal";
import { useFounders } from "../../../hooks/useFounders";

export function Founders() {
  const { founders, loading } = useFounders();

  if (loading) {
    return (
      <section
        id="founders"
        className="relative border-t border-ink-400/40 py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-ink-700">Cargando fundadores...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="founders"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Equipo fundador"
          title="Conoce a los fundadores."
          description="Ingenieros con experiencia construyendo producto para empresas reales."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {founders.map((founder, idx) => (
            <Reveal key={founder.id} delay={idx * 0.08}>
              <Card className="flex h-full flex-col gap-8 p-8 md:p-10">

                <div className="flex items-center gap-5">

                   {/* 
                  <div className="h-24 w-24 overflow-hidden rounded-2xl border border-ink-400/70">
                    {founder.photo ? (
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-zinc-800 text-white">
                        ?
                      </div>
                    )}
                  </div>
                  */}

                  <div>
                    <h3 className="font-display text-2xl text-white">
                      {founder.name}
                    </h3>

                    <p className="mt-1 text-sm text-ink-700">
                      {founder.position}
                    </p>
                  </div>

                </div>

                <p className="text-[15px] leading-relaxed text-ink-800">
                  {founder.bio}
                </p>

                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    Ver LinkedIn
                  </a>
                )}

              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}