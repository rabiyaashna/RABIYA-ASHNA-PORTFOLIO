import { Brain, Code2, Lightbulb, Palette, Puzzle, Rocket } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Section } from "./Section";

const CARDS = [
  { icon: Brain, title: "AI / ML", text: "Exploring intelligent systems and how models learn from data." },
  { icon: Code2, title: "Frontend Development", text: "Building responsive interfaces with HTML, CSS and JavaScript." },
  { icon: Puzzle, title: "Problem Solving", text: "Breaking problems down and reasoning through them with code." },
  { icon: Palette, title: "Creative UI", text: "Designing interfaces that feel modern, clear and expressive." },
  { icon: Rocket, title: "Project Building", text: "Turning ideas into practical, working projects." },
  { icon: Lightbulb, title: "Continuous Learning", text: "Picking up new tools and technologies as I go." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Who I Am</>}
      lead="I'm a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy the space where programming, AI, creativity and design meet — building interfaces that look good and systems that think."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlassCard className="p-7" strength={5}>
          <h3 className="font-display text-xl font-bold">A student who builds things</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            My focus is on learning by doing: writing code, studying how machine learning models
            behave, and shaping the experience around them. Frontend and web development give me a
            way to make that work visible and usable.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            I like clean structure, thoughtful interaction and interfaces that feel considered — and
            I keep adding new technologies to that toolkit as my degree progresses.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white/60 p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Degree</dt>
              <dd className="mt-1 font-semibold">B.Tech CSE</dd>
            </div>
            <div className="rounded-2xl bg-white/60 p-4">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Specialization
              </dt>
              <dd className="mt-1 font-semibold">AI &amp; ML</dd>
            </div>
          </dl>
        </GlassCard>

        <ul className="grid gap-4 sm:grid-cols-2">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <GlassCard as="li" key={title} className="p-5" strength={10}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-holo)] text-primary-foreground shadow-[0_10px_28px_-12px_oklch(0.6_0.24_300/90%)]">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </GlassCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
