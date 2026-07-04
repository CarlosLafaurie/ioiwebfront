import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className, id, ...rest }, ref) => {
    const fieldId = id ?? rest.name;
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={fieldId}
            className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-600"
          >
            {label}
          </label>
        )}
        <textarea
          id={fieldId}
          ref={ref}
          className={cn(
            "min-h-[140px] w-full resize-none rounded-xl border border-ink-400/70 bg-ink-100/40 px-4 py-3",
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
Textarea.displayName = "Textarea";
