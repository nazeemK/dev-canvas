import { useReveal } from "@/hooks/useReveal";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Dragon Electronics Ltd",
    period: "Jun 2025 – Present",
    location: "Port-Louis, Mauritius",
    description:
      "Led the full migration of an 8-year-old legacy PHP e-commerce stack to a headless Vue/Nuxt architecture in under a year — GraphQL schema design, payment gateway integrations, and a custom 16KB search index that returns results in microseconds. Cut bounce rate from 40–50% to industry benchmark and slashed VPS costs by ~50% with CI/CD and a lightweight WooCommerce core. Built zero-downtime dual-server failover with automated replication — because downtime is not a deployment strategy.",
    tech: ["Nuxt 3", "Vue 3", "GraphQL", "WooCommerce", "MySQL", "Nitro", "Node.js", "Tailwind", "CI/CD"],
  },
  {
    role: "Full Stack Developer",
    company: "Uniconsults Ltd",
    period: "Sep 2024 – Jun 2025",
    location: "Curepipe, Mauritius",
    description:
      "Onboarded into a large-scale modular ERP (HR, payroll, accounting, reporting) and reached active feature contribution in 6 weeks — 3 weeks ahead of the standard ramp. Owned Leave Management, Payroll, and HR modules across a tightly interconnected multi-repo system. Wrote unit tests, improved CI/CD pipelines, and delivered weekly knowledge-sharing sessions to the broader dev team.",
    tech: ["Angular.js", "Node.js", "Express", "PHP", "MySQL", "Sequelize", "Docker", "REST APIs", "CI/CD"],
  },
  {
    role: "Full Stack Developer",
    company: "Impetus Digital Ltd",
    period: "May 2022 – May 2024",
    location: "London, UK (Remote)",
    description:
      "Technical lead across all client projects — selecting frameworks, delivering Three.js and GSAP interactive experiences for Porsche, Mont Choisy Le Parc, Rogers Hospitality, and DEV Groupe. Built automated health checks and performance optimisations across agency hosting infrastructure. Operated hybrid dev/account management, attending client meetings and owning delivery end-to-end.",
    tech: ["React", "Node.js", "PHP", "MySQL", "Three.js", "GSAP", "Bootstrap", "Git", "Zapier"],
  },
  {
    role: "Full Stack Developer",
    company: "Pam Golding Properties Ltd",
    period: "Mar 2020 – Mar 2022",
    location: "Pointe aux Cannoniers, Mauritius",
    description:
      "Architected middleware APIs bridging a 30-year-old legacy real estate system to a modern web frontend — live data access without touching the core. Built multi-currency daily price sync, query caching, and automated image compression from scratch. Designed the entire system architecture with no existing precedent.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "PWA", "API Services", "Zapier", "GA", "GSC"],
  },
  {
    role: "Full Stack Developer",
    company: "ARM Mauritius Ltd",
    period: "Mar 2017 – Jan 2020",
    location: "Albion, Mauritius",
    description:
      "Built full-stack real estate and e-commerce platforms from the ground up. Managed servers, DNS, Cloudflare, email systems, and deployments. Integrated third-party APIs, provided technical training for internal teams, and kept production systems alive — the origin story, and yes, I survived jQuery.",
    tech: ["WordPress", "PHP", "MySQL", "Apache", "Linux", "jQuery", "APIs", "CRON"],
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
