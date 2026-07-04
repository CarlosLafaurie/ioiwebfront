import type { ReactNode } from "react";
import { useParallax } from "../../../hooks/useParallax";

interface ParallaxProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

/**
 * Apply subtle translateY based on scroll position.
 */
export function Parallax({ children, intensity = 0.08, className }: ParallaxProps) {
  const { ref, offset } = useParallax<HTMLDivElement>(intensity);
  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}
    >
      {children}
    </div>
  );
}
