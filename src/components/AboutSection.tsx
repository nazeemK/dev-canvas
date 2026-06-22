import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "10+", label: "Years in production" },
  { value: "500%+", label: "Page-load gains delivered" },
  { value: "50%", label: "Infra costs cut (one project)" },
  { value: "3", label: "Languages spoken natively" },
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
            I own systems <span className="text-gradient">end to end</span>
            <span className="text-muted-foreground text-lg block mt-2 font-normal font-mono">
              (architecture through deployment, not just the fun parts)
            </span>
          </p>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Senior full stack developer based in Curepipe, Mauritius — over a decade independently
            architecting production systems across e-commerce, ERP, real estate, and agency environments.
            Legacy PHP migrations, headless storefronts, middleware bridges to 30-year-old backends — I've done the hard ones.
          </p>
          <p className="text-foreground/60 leading-relaxed">
            Hands-on across Vue/Nuxt, React, Angular, Node, and PHP, with growing depth in AI-driven
            workflows — LLM integrations, MCP, and prompt engineering included. Drawn to projects that
            reward ownership and technical depth, not ticket-churn maintenance mode.
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
