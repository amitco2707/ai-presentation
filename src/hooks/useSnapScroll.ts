import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Snap-scroll controller. Tracks the currently-visible slide index and exposes
 * keyboard + programmatic navigation. Assumes each slide is a direct child with
 * `data-slide-index` attribute and full viewport height.
 */
export function useSnapScroll(slideCount: number) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(slideCount - 1, index));
      const container = containerRef.current;
      if (!container) return;
      const target = container.querySelector<HTMLElement>(
        `[data-slide-index="${clamped}"]`
      );
      if (!target) return;
      isAnimatingRef.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveIndex(clamped);
      window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, 650);
    },
    [slideCount]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(slideCount - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, goTo, slideCount]);

  // Track active slide via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const slides = container.querySelectorAll<HTMLElement>("[data-slide-index]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = Number(entry.target.getAttribute("data-slide-index"));
            setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: [0.5, 0.75] }
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [slideCount]);

  return { containerRef, activeIndex, goTo, next, prev };
}
