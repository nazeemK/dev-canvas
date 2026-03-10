import { useReveal } from "@/hooks/useReveal";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Dragon Electronics Ltd",
    period: "Jun 2025 – Present",
    location: "Port-Louis, Mauritius",
    description: "Spearheaded a scalable e-commerce platform with Vue.js/Nuxt, WooCommerce, and custom GraphQL/REST APIs. Containerized everything in Docker because real devs don't say 'it works on my machine'.",
    tech: ["Vue.js", "Nuxt", "Node.js", "GraphQL", "Docker", "WooCommerce"],
  },
  {
    role: "Full Stack Developer",
    company: "Uniconsults Ltd",
    period: "Sep 2024 – Jun 2025",
    location: "Curepipe, Mauritius",
    description: "Built a large-scale modular ERP system handling HR, accounting, and payroll. Optimized SQL schemas so well the database sends thank-you notes.",
    tech: ["Angular", "Node.js", "Express", "MySQL", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "Impetus Digital Ltd",
    period: "May 2022 – May 2024",
    location: "London, UK (Remote)",
    description: "Led development of corporate websites using Webflow and modern web tech. Managed SEO for 20+ sites — Google's algorithm and I are on a first-name basis.",
    tech: ["React", "Three.js", "GSAP", "Node.js", "Webflow"],
  },
  {
    role: "Full Stack Developer",
    company: "Pam Golding Properties",
    period: "Mar 2020 – Mar 2022",
    location: "Mauritius",
    description: "Built custom middleware bridging a legacy real estate system with a modern web frontend. Implemented multi-currency price sync because luxury properties don't price themselves.",
    tech: ["PHP", "MySQL", "REST APIs", "PWA", "jQuery"],
  },
  {
    role: "Full Stack Developer",
    company: "ARM Mauritius Ltd",
    period: "Mar 2017 – Jan 2020",
    location: "Albion, Mauritius",
    description: "Custom WordPress and PHP builds for real estate and e-commerce. Where the journey started — and yes, I survived jQuery.",
    tech: ["WordPress", "PHP", "MySQL", "jQuery"],
  },
];

const ExperienceSection = () => {
  const titleRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="section-padding" id="work">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          // experience.log
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-3xl">
          Places where I committed <span className="text-gradient">more than just code</span>
        </p>
      </div>

      <div ref={listRef} className="space-y-1">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="reveal-item-left exp-card group border-t border-border/30 py-8 md:py-12 hover:bg-surface-1/50 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-lg"
            style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            data-cursor-hover
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-48 flex-shrink-0">
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-primary font-mono text-sm mt-1">{exp.company}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{exp.location}</p>

                <p className="text-foreground/60 mt-4 text-sm leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider bg-surface-2 text-muted-foreground px-3 py-1 rounded-full border border-border/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:block text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
