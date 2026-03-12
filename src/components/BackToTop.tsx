import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)] backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_28px_hsl(var(--primary)/0.35)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label="Back to top"
    >
      <span className="text-primary/90">↑</span>
      back to top
    </button>
  );
};

export default BackToTop;
