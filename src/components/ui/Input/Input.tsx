import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, id, ...rest }, ref) => {
    const inputId = id ?? rest.name;
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "h-12 w-full rounded-xl border border-ink-400/70 bg-ink-100/40 px-4",
            "text-[15px] text-white placeholder:text-ink-600",
            "transition-colors duration-300",
            "focus:border-white/70 focus:bg-ink-200/60 focus:outline-none",
            className,
          )}
          {...rest}
        />
      </div>
    );
  },
);
Input.displayName = "Input";
