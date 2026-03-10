import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(badgeRef.current, { y: -20, opacity: 0, duration: 0.6, delay: 0.3 })
      .from(nameRef.current?.children || [], {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power4.out",
      }, "-=0.2")
      .from(taglineRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.3");
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden"
    >
      <ThreeScene />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary border border-primary/30 px-4 py-2 rounded-full mb-8 glow-box"
        >
          Full Stack Developer · 10+ Years
        </span>

        <h1 ref={nameRef} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8">
          <span className="block text-foreground">NAZEEM</span>
          <span className="block text-gradient glow-text">KHODABUX</span>
        </h1>

        <p ref={taglineRef} className="font-mono text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          I don't just write code — I architect experiences that make backends cry tears of joy 
          and frontends do backflips. Based in Mauritius, deployed globally.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="group font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)] transition-all duration-300"
            data-cursor-hover
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-widest border border-foreground/20 text-foreground px-8 py-4 rounded-full hover:border-primary/50 transition-all duration-300"
            data-cursor-hover
          >
            Let's Talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
};

export default Hero;
