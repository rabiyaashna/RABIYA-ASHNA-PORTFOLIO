import { useMemo } from "react";
import { usePointerParallax } from "@/hooks/use-portfolio-motion";

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 2 + ((i * 7) % 5),
  delay: (i % 9) * 0.9,
  duration: 16 + ((i * 3) % 14),
  depth: 8 + ((i * 5) % 26),
}));

export function Background() {
  const { x, y } = usePointerParallax();
  const shapes = useMemo(
    () => [
      { cls: "left-[6%] top-[18%] h-40 w-40 rounded-full", depth: 30, ring: true },
      { cls: "right-[9%] top-[26%] h-24 w-24 rounded-[30%]", depth: 46, ring: false },
      { cls: "left-[16%] bottom-[16%] h-28 w-28 rounded-3xl", depth: 22, ring: false },
      { cls: "right-[18%] bottom-[22%] h-56 w-56 rounded-full", depth: 38, ring: true },
      { cls: "left-[46%] top-[8%] h-16 w-16 rounded-2xl", depth: 56, ring: false },
    ],
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,oklch(0.98_0.02_260)_0%,oklch(0.96_0.03_290)_40%,oklch(0.93_0.05_310)_100%)]" />

      {/* glowing blobs */}
      <div className="animate-drift absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-neon-blue/25 blur-[120px]" />
      <div
        className="animate-drift absolute right-[-12%] top-[12%] h-[34rem] w-[34rem] rounded-full bg-neon-purple/25 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift absolute bottom-[-15%] left-[25%] h-[32rem] w-[32rem] rounded-full bg-neon-pink/20 blur-[130px]"
        style={{ animationDelay: "-16s" }}
      />

      {/* holographic grid */}
      <div
        className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(85%_70%_at_50%_35%,#000,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.6 0.2 285 / 45%) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.2 285 / 45%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: `perspective(700px) rotateX(56deg) translateY(${y * 24}px) translateX(${x * 24}px) scale(1.6)`,
          transformOrigin: "50% 20%",
        }}
      />

      {/* floating geometry */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`animate-float-slow absolute ${s.cls} ${
            s.ring
              ? "border-2 border-neon-purple/30 bg-transparent shadow-[0_0_60px_-10px_oklch(0.6_0.24_300/45%)]"
              : "glass"
          }`}
          style={{
            animationDelay: `${i * 1.4}s`,
            translate: `${x * s.depth}px ${y * s.depth}px`,
            transition: "translate 500ms cubic-bezier(0.2,0.8,0.2,1)",
          }}
        />
      ))}

      {/* particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="animate-float-slow absolute rounded-full bg-neon-blue/50"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            translate: `${x * p.depth}px ${y * p.depth}px`,
            transition: "translate 700ms cubic-bezier(0.2,0.8,0.2,1)",
          }}
        />
      ))}
    </div>
  );
}
