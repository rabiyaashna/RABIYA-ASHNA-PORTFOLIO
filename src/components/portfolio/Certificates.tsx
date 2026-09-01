import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, X, ZoomIn, ZoomOut } from "lucide-react";
import codeAlpha from "@/assets/code-alpha.jpeg.asset.json";
import mahendra from "@/assets/mahendra.jpeg.asset.json";
import manac from "@/assets/manac.jpeg.asset.json";
import nauMentis from "@/assets/nau-mentis.jpeg.asset.json";
import { Section } from "./Section";
import { GlassCard } from "./GlassCard";

const CERTIFICATES = [
  {
    title: "MENTIS — Mental Health Innovation Sprint",
    subtitle: "Certificate of Participation · nau.vaagdevi student chapter",
    category: "Hackathon",
    src: nauMentis.url,
  },
  {
    title: "CodeAlpha Virtual Internship",
    subtitle: "Certificate of Completion · Frontend Development Internship",
    category: "Internship",
    src: codeAlpha.url,
  },
  {
    title: "Manac Infotech Pvt. Ltd. — Project Completion Certificate",
    subtitle: "Prediction of Hepatitis Disease Using Machine Learning Technique",
    category: "AI / ML Project",
    src: manac.url,
  },
  {
    title: "Mahindra Pride Classroom — Certificate of Completion",
    subtitle: "Employability Skill Training Programme · Naandi Foundation",
    category: "Training",
    src: mahendra.url,
  },
];

const ACHIEVEMENTS = [
  "NAU Mentis Hackathon",
  "AI Verse 4.0",
  "CodeAlpha Virtual Internship",
  "Manac Infotech Project",
  "Mahindra Pride Employability Skills Training",
  "CodeAlpha Frontend Developer",
];

export function Certificates() {
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: number) => {
    setZoom(1);
    setIndex((i) => (i === null ? i : (i + dir + CERTIFICATES.length) % CERTIFICATES.length));
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index === null ? null : CERTIFICATES[index];

  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title={
        <>
          Verified <span className="holo-text">credentials</span>
        </>
      }
      lead="Select a certificate to open it in the full-screen viewer."
    >
      <GlassCard className="p-3 sm:p-5" strength={3}>
        <ul className="grid gap-2">
          {CERTIFICATES.map((c, i) => (
            <li key={c.title}>
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-4 transition-colors duration-300 hover:bg-white/60 sm:gap-5 sm:px-5">
                <span className="holo-text font-display text-lg font-bold sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate font-display text-sm font-bold sm:text-base">
                    {c.title}
                  </h3>
                  <p className="truncate text-xs text-muted-foreground">{c.subtitle}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-white/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {c.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setZoom(1);
                    setIndex(i);
                  }}
                  aria-label={`View certificate: ${c.title}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[image:var(--gradient-holo)] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_12px_30px_-14px_oklch(0.6_0.24_300/90%)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-5"
                >
                  <Eye size={14} /> View
                </button>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="mt-10">
        <h3 className="font-display text-lg font-bold">Achievements &amp; credentials</h3>
        <ul className="mt-4 flex flex-wrap gap-3">
          {ACHIEVEMENTS.map((a) => (
            <li
              key={a}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-secondary-foreground"
            >
              {a}
            </li>
          ))}
        </ul>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
        >
          <button
            type="button"
            aria-label="Close certificate viewer"
            onClick={close}
            className="absolute inset-0 cursor-default bg-[oklch(0.35_0.08_290/45%)] backdrop-blur-xl"
          />
          <div className="glass-strong animate-rise relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-white/60 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-bold sm:text-base">
                  {current.title}
                </h3>
                <p className="truncate text-xs text-muted-foreground">{current.subtitle}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-primary"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-primary"
                >
                  <ZoomIn size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Close certificate viewer"
                  onClick={close}
                  className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-holo)] text-primary-foreground"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-auto bg-white/40 p-3 sm:p-6">
              <img
                src={current.src}
                alt={current.title}
                className="mx-auto h-auto w-full max-w-3xl rounded-2xl shadow-[0_30px_70px_-30px_oklch(0.5_0.2_285/60%)] transition-transform duration-300"
                style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/60 px-4 py-3 sm:px-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-primary transition-transform hover:-translate-x-0.5"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <span className="text-xs font-semibold text-muted-foreground">
                {(index ?? 0) + 1} / {CERTIFICATES.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
