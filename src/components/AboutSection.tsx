import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "10+", label: "Years shipping code" },
  { value: "20+", label: "Websites maintained" },
  { value: "5+", label: "Frameworks mastered" },
  { value: "∞", label: "Cups of coffee consumed" },
];

const AboutSection = () => {
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div ref={textRef} className="reveal">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            // about.tsx
          </h2>
          <p className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            I write code that works <span className="text-gradient">on the first deploy</span>
            <span className="text-muted-foreground text-lg block mt-2 font-normal font-mono">
              (okay, maybe the second)
            </span>
          </p>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Full stack developer based in Mauritius with a decade of experience turning business problems 
            into elegant digital solutions. From legacy system rescues to greenfield e-commerce platforms, 
            I've seen more codebases than a GitHub bot.
          </p>
          <p className="text-foreground/60 leading-relaxed">
            Fluent in JavaScript, TypeScript, PHP, Python, and sarcasm. When I'm not refactoring someone's 
            spaghetti code, I'm architecting Docker containers, optimizing database queries, or convincing 
            clients that "it works on my machine" is not a deployment strategy.
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-6 content-start">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-item stat-item bg-surface-1 border border-border/20 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            >
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
