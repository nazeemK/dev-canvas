import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { name: "Dragon Electronics", role: "E-Commerce Platform" },
  { name: "Pam Golding Properties", role: "Real Estate Portal" },
  { name: "Impetus Digital", role: "Corporate Websites" },
  { name: "Uniconsults", role: "ERP System" },
  { name: "ARM Mauritius", role: "Web Solutions" },
  { name: "Groupe Dev", role: "Agency Site" },
];

const BrandMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="section-padding pb-12">
        <h2 ref={headingRef} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          // brands that trusted the code
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 md:px-12 py-6 group"
              data-cursor-hover
            >
              <div className="border border-border/40 rounded-lg px-8 py-6 hover:border-primary/40 transition-all duration-500 hover:glow-box">
                <p className="text-2xl md:text-3xl font-bold text-foreground/80 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {brand.name}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {brand.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 px-8 md:px-12 py-6">
              <div className="border border-border/20 rounded-lg px-8 py-6">
                <p className="text-xl md:text-2xl font-semibold text-foreground/40 whitespace-nowrap">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
