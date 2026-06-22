import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const set = () => setIsPointerFine(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseEnter = () => {
      gsap.to(follower, { scale: 2, opacity: 0.85, duration: 0.3 });
      gsap.to(cursor, { scale: 1.4, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, { scale: 1, opacity: 0.75, duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] shadow-[0_0_12px_hsl(var(--primary)/0.9),0_0_24px_hsl(var(--primary)/0.5)]"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary/80 bg-primary/10 pointer-events-none z-[9998] opacity-75 shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
      />
    </>
  );
};

export default CustomCursor;
