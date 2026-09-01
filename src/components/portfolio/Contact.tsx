import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Section } from "./Section";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "rabiyaashnab@gmail.com",
    href: "mailto:rabiyaashnab@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "7569124757", href: "tel:7569124757" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rabiyaashna",
    href: "https://github.com/rabiyaashna",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rabiya-ashna",
    href: "https://www.linkedin.com/in/rabiya-ashna-b01637427",
    external: true,
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.location.href = `mailto:rabiyaashnab@gmail.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-[0_0_0_3px_oklch(0.6_0.24_300/25%)]";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="holo-text">amazing.</span>
        </>
      }
      lead="Open to internships, collaborations and student projects — say hello."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {LINKS.map(({ icon: Icon, label, value, href, external }) => (
            <GlassCard key={label} className="p-5" strength={9}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="block"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[image:var(--gradient-holo)] text-primary-foreground">
                  <Icon size={18} />
                </span>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 break-words text-sm font-semibold">{value}</p>
              </a>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-6 sm:p-8" strength={4}>
          <h3 className="font-display text-xl font-bold">Send a message</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            This form opens your email app with the message ready to send.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-y`}
                placeholder="Tell me about your idea…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-holo)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-16px_oklch(0.6_0.24_300/90%)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Send size={16} /> Send message
            </button>
          </form>
        </GlassCard>
      </div>
    </Section>
  );
}
