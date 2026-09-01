import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";

const TITLE = "Rabiya Ashna — B.Tech CSE (AI & ML) Portfolio";
const DESC =
  "Portfolio of Rabiya Ashna, a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, with frontend projects, internship work and certificates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <footer className="mx-auto w-full max-w-6xl px-5 pb-12 pt-4 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Rabiya Ashna · B.Tech CSE (AI &amp; ML)
      </footer>
    </main>
  );
}
