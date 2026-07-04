import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-ink-800 active:bg-ink-800 border border-transparent",
  secondary:
    "bg-transparent text-white border border-ink-500 hover:border-ink-700 hover:bg-ink-200/60",
  ghost:
    "bg-transparent text-ink-800 hover:text-white border border-transparent hover:bg-ink-200/60",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "tracking-tight transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {iconLeft && <span className="-ml-0.5 inline-flex">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="-mr-0.5 inline-flex transition-transform duration-300 group-hover:translate-x-0.5">
          {iconRight}
        </span>
      )}
    </button>
  );
}
