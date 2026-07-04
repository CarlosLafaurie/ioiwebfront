import { useEffect, useRef, useState } from "react";

/**
 * Return a translateY offset based on the element's position in the viewport.
 * Intended for subtle parallax (Apple-style).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  intensity = 0.15,
): { ref: React.RefObject<T | null>; offset: number } {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * intensity * -1);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return { ref, offset };
}
