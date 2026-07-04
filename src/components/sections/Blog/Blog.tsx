import { SectionTitle } from "../../ui/SectionTitle";
import { BlogCard } from "../../shared/BlogCard";
import { Reveal } from "../../animations/Reveal";
import { usePosts } from "../../../hooks/usePosts";

export function Blog() {
  const { posts, loading } = usePosts();

  if (loading) {
    return (
      <section
        id="blog"
        className="relative border-t border-ink-400/40 py-28 lg:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-ink-700">Cargando artículos...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      className="relative border-t border-ink-400/40 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Perspectivas"
          title="Ideas, lecciones y aprendizajes."
          description="Escribimos sobre los temas que nos importan: arquitectura, IA aplicada, automatización y software empresarial."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-400/60 bg-ink-400/60 md:grid-cols-2">
          {posts.map((post, idx) => (
            <Reveal
              key={post.id}
              delay={idx * 0.05}
              className="h-full bg-ink-50"
            >
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}