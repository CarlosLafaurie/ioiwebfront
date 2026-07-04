import { cn } from "../../../utils/cn";

interface TechnologyCardProps {
  name: string;
  className?: string;
}

export function TechnologyCard({ name, className }: TechnologyCardProps) {
  return (
    <div
      className={cn(
        "group flex h-20 min-w-[180px] items-center justify-center gap-3 rounded-xl",
        "border border-ink-400/70 bg-ink-100/40 px-6",
        "transition-all duration-500 hover:border-ink-600/80 hover:bg-ink-200/60",
        className,
      )}
    >
      <span className="font-mono text-[11px] text-ink-600 transition-colors duration-300 group-hover:text-ink-700">
        ./
      </span>
      <span className="font-display text-base tracking-tight text-ink-800 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}
