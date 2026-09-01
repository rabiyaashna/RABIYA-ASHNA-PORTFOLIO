import { Github, Sparkles } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Section } from "./Section";

type Project = {
  no: string;
  category: string;
  title: string;
  text: string;
  tags: string[];
  github?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    no: "04",
    category: "Artificial Intelligence / Machine Learning",
    title: "Hepatitis Disease Prediction",
    text: "A machine learning project on the prediction of hepatitis disease, completed with Manac Infotech Private Limited. The work covered frontend, backend and database aspects of building the prediction application.",
    tags: ["Python", "Machine Learning", "AI"],
    featured: true,
  },
  {
    no: "01",
    category: "Frontend",
    title: "Image Gallery",
    text: "An interactive image gallery built during my frontend development work.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rabiyaashna/CodeAlpha_ImageGallery",
  },
  {
    no: "02",
    category: "Frontend",
    title: "Portfolio Website",
    text: "A personal portfolio website project built with core web technologies.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rabiyaashna/CodeAlpha_Portfolio",
  },
  {
    no: "03",
    category: "Frontend",
    title: "Calculator",
    text: "A functional calculator web app handling user input and live calculations.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rabiyaashna/CodeAlpha_Calculator",
  },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-primary"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const featured = PROJECTS[0]!;
  const rest = PROJECTS.slice(1);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I've <span className="holo-text">built</span>
        </>
      }
      lead="A mix of frontend builds and applied AI/ML work."
    >
      <div className="grid gap-6">
        <GlassCard className="p-7 sm:p-10" strength={5}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[image:var(--gradient-holo)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
              <Sparkles size={12} /> Featured
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {featured.category}
            </span>
          </div>
          <div className="mt-5 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
            <span className="holo-text font-display text-6xl font-bold leading-none sm:text-8xl">
              {featured.no}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-4xl">{featured.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.text}
              </p>
              <Tags tags={featured.tags} />
              <p className="mt-5 text-xs text-muted-foreground">
                Completed with Manac Infotech Private Limited.
              </p>
            </div>
          </div>
        </GlassCard>

        <ul className="grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <GlassCard as="li" key={p.title} className="flex flex-col p-6" strength={9}>
              <div className="flex items-baseline justify-between">
                <span className="holo-text font-display text-4xl font-bold">{p.no}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              <Tags tags={p.tags} />
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white/75 px-5 py-2.5 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Github size={16} /> View on GitHub
                </a>
              ) : null}
            </GlassCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
