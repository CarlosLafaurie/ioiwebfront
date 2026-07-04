import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
}

const buildVariants = (y: number, duration: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: [0.22, 1, 0.36, 1] },
  },
});

/**
 * Fade and lift element on mount. Apple-style easing.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 14,
  className,
  as = "div",
}: FadeInProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      variants={buildVariants(y, duration)}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
