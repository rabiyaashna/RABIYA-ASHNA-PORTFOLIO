import { useCallback, useEffect, useRef, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

/** Tilts an element toward the cursor and exposes --mx/--my for lighting. */
export function useTilt<T extends HTMLElement>(strength = 9) {
  const ref = useRef<T | null>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const active = fine && !reduced;

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el || !active) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      el.style.transform = `perspective(1100px) rotateY(${(px - 0.5) * strength * 2}deg) rotateX(${(0.5 - py) * strength * 2}deg) translateZ(0)`;
    },
    [active, strength],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1100px) rotateY(0deg) rotateX(0deg)";
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  }, []);

  return { ref, onMouseMove: onMove, onMouseLeave: onLeave, active };
}

/** Normalized pointer position for the whole viewport (-0.5 .. 0.5). */
export function usePointerParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!fine || reduced) return;
    let frame = 0;
    const handler = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setPos({
          x: e.clientX / window.innerWidth - 0.5,
          y: e.clientY / window.innerHeight - 0.5,
        }),
      );
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(frame);
    };
  }, [fine, reduced]);

  return pos;
}

/** Adds data-visible="true" once the element scrolls into view. */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-visible", "true");
            io.unobserve(el);
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
