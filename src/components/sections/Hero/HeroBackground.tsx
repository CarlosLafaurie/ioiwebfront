import { useMemo } from "react";

/**
 * Decorative background for the hero: grid, soft radial glow and a few subtle particles.
 * Particles are deterministic to avoid layout shifts on re-render.
 */
export function HeroBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        top: (i * 37) % 100,
        left: (i * 53) % 100,
        size: (i % 3) + 1,
        delay: (i % 7) * 0.6,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />

      {/* Grid */}
      <div className="bg-grid bg-grid-fade absolute inset-0" />

      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-ioi-pulse absolute rounded-full bg-white"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
