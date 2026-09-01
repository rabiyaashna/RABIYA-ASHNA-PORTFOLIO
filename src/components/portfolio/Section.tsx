import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-portfolio-motion";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("reveal mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28", className)}
    >
      <div className="mb-12 max-w-2xl">
        <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
        {lead ? <p className="mt-4 text-base text-muted-foreground sm:text-lg">{lead}</p> : null}
      </div>
      {children}
    </section>
  );
}
