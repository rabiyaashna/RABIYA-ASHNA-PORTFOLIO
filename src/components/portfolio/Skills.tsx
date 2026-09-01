import {
  Braces,
  Brain,
  Cpu,
  FileCode2,
  Github,
  Layout,
  Paintbrush,
  Puzzle,
  Terminal,
} from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Section } from "./Section";

const SKILLS = [
  { icon: FileCode2, name: "HTML", text: "Semantic structure for accessible web pages." },
  { icon: Paintbrush, name: "CSS", text: "Layout, responsive design and modern styling." },
  { icon: Braces, name: "JavaScript", text: "Interactivity and logic in the browser." },
  { icon: Terminal, name: "Python", text: "Scripting and the language behind my ML work." },
  { icon: Brain, name: "Artificial Intelligence", text: "Core AI concepts from my specialization." },
  { icon: Cpu, name: "Machine Learning", text: "Training and evaluating predictive models." },
  { icon: Layout, name: "Frontend Development", text: "Building interfaces that work on any screen." },
  { icon: Github, name: "GitHub", text: "Version control and sharing project work." },
  { icon: Puzzle, name: "Problem Solving", text: "Structured thinking applied to real problems." },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The <span className="holo-text">toolkit</span> I work with
        </>
      }
      lead="Technologies and abilities I use across my coursework, internship work and personal projects."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map(({ icon: Icon, name, text }) => (
          <GlassCard as="li" key={name} className="p-6" strength={9}>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/75 text-neon-purple shadow-[inset_0_1px_0_oklch(1_0_0/90%)] transition-transform duration-500 group-hover:-translate-y-1">
              <Icon size={20} />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold">{name}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
          </GlassCard>
        ))}
      </ul>
    </Section>
  );
}
