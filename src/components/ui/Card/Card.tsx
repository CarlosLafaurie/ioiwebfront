import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

/**
 * Surface with subtle border, dark glassy background and optional hover lift.
 */
export function Card({ children, className, interactive = false, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-ink-400/70 bg-ink-100/60 backdrop-blur-sm",
        "transition-all duration-500 ease-out",
        interactive &&
          "hover:border-ink-600/80 hover:bg-ink-200/70 hover:-translate-y-0.5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
