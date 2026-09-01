import { ArrowRight, Award, Github, Linkedin, Mail } from "lucide-react";
import photo from "@/assets/photo-output.jpeg.asset.json";
import { usePointerParallax, useTilt } from "@/hooks/use-portfolio-motion";

const CHIPS = [
  { label: "AI / ML", cls: "-left-4 top-8 sm:-left-10", delay: "0s", depth: 34 },
  { label: "Developer", cls: "-right-3 top-24 sm:-right-12", delay: "1.2s", depth: 26 },
  { label: "Creative", cls: "-left-2 bottom-24 sm:-left-12", delay: "2.1s", depth: 30 },
  { label: "Learning", cls: "-right-2 bottom-10 sm:-right-10", delay: "3s", depth: 22 },
];

export function Hero() {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(8);
  const { x, y } = usePointerParallax();

  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-pink" />
            Portfolio 2026
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.03] tracking-tight sm:text-7xl">
            <span className="holo-text">Rabiya Ashna</span>
          </h1>

          <p className="mt-4 font-display text-base font-semibold text-secondary-foreground sm:text-xl">
            B.Tech CSE <span className="text-neon-purple">|</span> Artificial Intelligence &amp;
            Machine Learning
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science student exploring Artificial Intelligence, Machine Learning and
            creative digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-holo)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-14px_oklch(0.6_0.24_300/90%)] transition-transform duration-300 hover:-translate-y-1"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#certificates"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <Award size={16} /> View Certificates
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/rabiyaashna"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="glass grid h-11 w-11 place-items-center rounded-2xl text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rabiya-ashna-b01637427"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="glass grid h-11 w-11 place-items-center rounded-2xl text-primary transition-transform duration-300 hover:-translate-y-1"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* profile presentation */}
        <div className="relative mx-auto w-full max-w-sm [perspective:1400px]">
          <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="glass-strong tilt-3d holo-border relative overflow-hidden rounded-[2.5rem] p-3"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={photo.url}
                alt="Rabiya Ashna"
                width={699}
                height={961}
                loading="eager"
                className="h-auto w-full object-cover"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(1 0 0 / 30%), transparent 60%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon-blue/15 via-transparent to-neon-pink/20"
              />
              <span
                aria-hidden
                className="animate-[sheen_6s_ease-in-out_infinite] pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <div>
                <p className="font-display text-sm font-bold">Rabiya Ashna</p>
                <p className="text-xs text-muted-foreground">CSE · AI &amp; ML Student</p>
              </div>
              <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-primary">
                Open to learn
              </span>
            </div>
          </div>

          {/* reflection */}
          <div
            aria-hidden
            className="mx-6 mt-2 h-16 rounded-[2rem] bg-gradient-to-b from-neon-purple/25 to-transparent blur-xl"
          />

          {CHIPS.map((chip) => (
            <span
              key={chip.label}
              aria-hidden
              className={`animate-float-slow glass absolute hidden rounded-2xl px-4 py-2 text-xs font-semibold text-primary sm:block ${chip.cls}`}
              style={{
                animationDelay: chip.delay,
                translate: `${x * chip.depth}px ${y * chip.depth}px`,
                transition: "translate 500ms cubic-bezier(0.2,0.8,0.2,1)",
              }}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
