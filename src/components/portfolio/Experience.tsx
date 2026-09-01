import { Building2, Code2 } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Section } from "./Section";

const ITEMS = [
  {
    icon: Code2,
    org: "CodeAlpha",
    role: "Virtual Internship — Frontend Development",
    text: "Completed practical frontend projects during the virtual internship, building web interfaces with HTML, CSS and JavaScript.",
  },
  {
    icon: Building2,
    org: "Manac Infotech Private Limited",
    role: "Project — Prediction of Hepatitis Disease",
    text: "Completed a machine learning project on the prediction of hepatitis disease, working across frontend, backend and database technologies.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Internship &amp; <span className="holo-text">project work</span>
        </>
      }
      lead="Hands-on work completed outside the classroom."
    >
      <ol className="relative grid gap-6 border-l border-neon-purple/25 pl-6 sm:pl-10">
        {ITEMS.map(({ icon: Icon, org, role, text }) => (
          <li key={org} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.9rem] top-7 h-3 w-3 rounded-full bg-[image:var(--gradient-holo)] shadow-[0_0_0_5px_oklch(1_0_0/70%)] sm:-left-[2.9rem]"
            />
            <GlassCard className="p-6 sm:p-7" strength={6}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/75 text-neon-blue">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold sm:text-xl">{org}</h3>
                  <p className="text-sm font-semibold text-neon-purple">{role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </GlassCard>
          </li>
        ))}
      </ol>
    </Section>
  );
}
