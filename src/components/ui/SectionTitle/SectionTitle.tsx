import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";
import { Reveal } from "../../animations/Reveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={cn("flex flex-col gap-5", alignment, className)}>
        {eyebrow && (
          <div className="flex items-center gap-3 text-ink-600">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
            <span className="h-px w-10 bg-ink-500" />
          </div>
        )}
        <h2 className="font-display max-w-4xl text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] tracking-[-0.035em] text-white">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-[15px] leading-relaxed text-ink-700 md:text-base",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
