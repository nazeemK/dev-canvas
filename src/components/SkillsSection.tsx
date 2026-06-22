import { useReveal } from "@/hooks/useReveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js / Nuxt", level: 95 },
      { name: "React", level: 90 },
      { name: "Angular (1 & 16+)", level: 88 },
      { name: "Tailwind / Bootstrap", level: 95 },
      { name: "GSAP / Three.js", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "PHP / WordPress", level: 90 },
      { name: "Python / FastAPI", level: 80 },
      { name: "GraphQL / REST", level: 92 },
      { name: "MySQL / MongoDB / Redis", level: 88 },
    ],
  },
  {
    title: "DevOps & AI",
    skills: [
      { name: "Docker / CI/CD", level: 88 },
      { name: "AWS / DigitalOcean / Cloudflare", level: 82 },
      { name: "Claude / OpenAI APIs", level: 85 },
      { name: "MCP / A2A / Prompt Engineering", level: 80 },
      { name: "Git / Playwright", level: 90 },
    ],
  },
];

const EqualizerBar = ({ level, delay }: { level: number; delay: number }) => {
  const bars = 8;

  return (
    <div className="flex items-end gap-[2px] h-8">
      {Array.from({ length: bars }).map((_, i) => {
        const barActive = (i / bars) * 100 < level;
        const maxH = 60 + Math.random() * 40;
        return (
          <div
            key={i}
            className="equaliser-bar w-1"
            style={{
              "--max-height": `${maxH}%`,
              "--duration": `${0.4 + Math.random() * 0.6}s`,
              height: barActive ? "20%" : "5%",
              opacity: barActive ? 1 : 0.15,
              animationDelay: `${delay + i * 0.05}s`,
              animationPlayState: barActive ? "running" : "paused",
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

const SkillsSection = () => {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="section-padding" id="skills">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          // tech stack
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-2xl">
          Tools I use to turn <span className="text-gradient">coffee into code</span>
          <span className="text-muted-foreground text-lg block mt-2 font-normal font-mono">
            (and increasingly, prompts into production)
          </span>
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, ci) => (
          <div
            key={cat.title}
            className="reveal-item skill-card bg-surface-1 border border-border/30 rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:glow-box"
            style={{ "--reveal-delay": `${ci * 0.15}s` } as React.CSSProperties}
          >
            <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-8">
              {`<${cat.title} />`}
            </h3>

            <div className="space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={skill.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm text-foreground/80 flex-1">{skill.name}</span>
                  <EqualizerBar level={skill.level} delay={ci * 0.3 + si * 0.1} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
