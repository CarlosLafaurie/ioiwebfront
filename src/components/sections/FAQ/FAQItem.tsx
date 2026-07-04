import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "../../../utils/cn";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-ink-400/60">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "font-display text-[18px] tracking-[-0.015em] transition-colors duration-300 md:text-[20px]",
            isOpen ? "text-white" : "text-ink-800 group-hover:text-white",
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-400/70 text-ink-800 transition-all duration-500",
            isOpen ? "rotate-45 border-white/60 text-white" : "group-hover:border-ink-600",
          )}
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-10 text-[14.5px] leading-relaxed text-ink-700">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
