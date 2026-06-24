import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ThreeScene from "./ThreeScene";
import GradientText from "./GradientText";

interface HeroProps {
  ready?: boolean;
}

const Hero = ({ ready = true }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nazeemRef = useRef<HTMLSpanElement>(null);
  const khodabuxRef = useRef<HTMLSpanElement>(null);
  const khodabuxBrightRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ready) return;

    const bright = khodabuxBrightRef.current;
    if (bright) {
      gsap.set(bright, { clipPath: "inset(0 100% 0 0)", transition: "none" });
    }

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.5 })
      .from(nazeemRef.current, { y: 80, opacity: 0, duration: 0.8 }, "-=0.25")
      .from(khodabuxRef.current, { y: 80, duration: 0.8 }, "-=0.8")
      .to(
        bright,
        { clipPath: "inset(0 0% 0 0)", duration: 0.8, ease: "power2.inOut" },
        "-=0.55"
      )
      .from(taglineRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.45")
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.35");

    return () => {
      tl.kill();
    };
  }, [ready]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden"
    >
      <ThreeScene />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-flex flex-col sm:flex-row sm:items-center sm:gap-x-2 font-mono text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 px-4 py-2 rounded-full mb-8 glow-box"
        >
          <span>Senior Full-Stack Developer</span>
          <span className="hidden sm:inline"> · </span>
          <span>10+ Years</span>
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8">
          <span ref={nazeemRef} className="block text-foreground">NAZEEM</span>
          <GradientText ref={khodabuxRef} brightRef={khodabuxBrightRef} className="block">
            KHODABUX
          </GradientText>
        </h1>

        <p ref={taglineRef} className="font-mono text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          I architect production systems across e-commerce, ERP, and legacy rescues - now with
          LLM integrations and agentic workflows in the mix. Based in Curepipe, shipped globally.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="group font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)] transition-all duration-300"
            data-cursor-hover
          >
            View Work →
          </a>
          <Link
            to="/start-project"
            className="font-mono text-sm uppercase tracking-widest border border-foreground/20 text-foreground px-8 py-4 rounded-full hover:border-primary/50 transition-all duration-300"
            data-cursor-hover
          >
            Let's Talk
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
};

export default Hero;
