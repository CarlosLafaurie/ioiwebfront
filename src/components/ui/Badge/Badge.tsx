import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}

export function Badge({ children, className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-400/80 bg-ink-100/70",
        "px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-700",
        className,
      )}
    >
      {dot && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <span className="absolute inset-0 rounded-full bg-white/80" />
          <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
        </span>
      )}
      {children}
    </span>
  );
}
