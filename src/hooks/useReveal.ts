import { useEffect, useRef } from "react";

/**
 * Observes an element via IntersectionObserver and adds the "revealed"
 * class once it enters the viewport. Fires once, then disconnects.
 *
 * Attach the returned ref to the element you want to reveal.
 * Pair with the `.reveal` / `.reveal-item` CSS classes in index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
