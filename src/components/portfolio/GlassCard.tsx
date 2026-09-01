import type { ReactNode } from "react";
import { useTilt } from "@/hooks/use-portfolio-motion";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  strength = 7,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "article" | "li";
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(strength);

  return (
    <Tag
      ref={ref as never}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "glass tilt-3d holo-border group relative overflow-hidden rounded-3xl p-6",
        "hover:shadow-[0_36px_80px_-30px_oklch(0.55_0.22_290/55%)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), oklch(1 0 0 / 55%), transparent 65%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
