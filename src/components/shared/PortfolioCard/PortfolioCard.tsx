import { ArrowUpRight } from "lucide-react";
import { Card } from "../../ui/Card";
import type { PortfolioProject } from "../../../types/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

function ProjectVisual({ id }: { id: string }) {
  const seed = id.charCodeAt(0) + id.length;

  const bars = Array.from({ length: 24 }, (_, i) => {
    const h = 18 + ((seed * (i + 3)) % 65);
    return h;
  });

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-ink-400/60 bg-gradient-to-br from-ink-200 to-ink-100">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" />

      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-ink-400/50 bg-ink-200/80 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink-500" />
        <span className="h-2 w-2 rounded-full bg-ink-500" />
        <span className="h-2 w-2 rounded-full bg-ink-500" />
        <span className="ml-3 font-mono text-[10px] text-ink-600">
          ioi · {id}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[78%] items-end gap-1.5 px-6 pb-6">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-white/60 to-white/15"
            style={{
              height: `${h}%`,
              opacity: 0.25 + (i / bars.length) * 0.6,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
    </div>
  );
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const {
    id,
    name,
    category,
    description,
    technologies,
    year,
    metric,
    image,
  } = project;

  const API_URL = import.meta.env.VITE_API_URL;
  const BACKEND_URL = API_URL.replace("/api", "");

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BACKEND_URL}/storage/${image}`
    : null;

  return (
    <Card interactive className="group flex h-full flex-col gap-5 p-5">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="aspect-[16/10] w-full rounded-xl border border-ink-400/60 object-cover"
        />
      ) : (
        <ProjectVisual id={String(id)} />
      )}

      <div className="flex items-start justify-between gap-4 px-1">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-600">
            {category} · {year}
          </span>

          <h3 className="text-xl font-medium tracking-tight text-white">
            {name}
          </h3>
        </div>

        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-ink-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
          strokeWidth={1.5}
        />
      </div>

      <p className="px-1 text-[14px] leading-relaxed text-ink-700">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 px-1">
        {technologies?.map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink-400/70 px-2.5 py-1 font-mono text-[11px] text-ink-700"
          >
            {t}
          </span>
        ))}
      </div>

      {metric && (
        <div className="mt-auto flex items-center justify-between rounded-xl border border-ink-400/70 bg-ink-200/40 px-4 py-3">
          <span className="text-[12px] text-ink-700">
            {metric.label}
          </span>

          <span className="font-display text-lg tracking-tight text-white">
            {metric.value}
          </span>
        </div>
      )}
    </Card>
  );
}