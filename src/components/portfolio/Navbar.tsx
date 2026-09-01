import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-portfolio-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const IDS = LINKS.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav
        aria-label="Primary"
        className="glass-strong mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6"
      >
        <a
          href="#home"
          className="holo-text font-display text-base font-bold tracking-tight sm:text-lg"
        >
          Rabiya Ashna
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-300",
                  "hover:-translate-y-0.5 hover:text-primary",
                  active === link.id &&
                    "bg-white/70 text-primary shadow-[0_6px_24px_-10px_oklch(0.6_0.24_300/70%)]",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-[image:var(--gradient-holo)] px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.6_0.24_300/85%)] transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="glass grid h-10 w-10 shrink-0 place-items-center rounded-full text-primary lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="glass-strong mx-auto mt-2 max-w-5xl rounded-3xl p-3 lg:hidden"
      >
        <ul className="grid gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors",
                  active === link.id && "bg-white/70 text-primary",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
