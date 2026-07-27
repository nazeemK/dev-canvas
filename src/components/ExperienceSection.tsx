import { useReveal } from "@/hooks/useReveal";
import GradientText from "./GradientText";
import { useLocale } from "@/i18n";

const experienceTech = [
  ["Nuxt 3", "Vue 3", "GraphQL", "WooCommerce", "MySQL", "Nitro", "Node.js", "Tailwind", "CI/CD"],
  ["Angular.js", "Node.js", "Express", "PHP", "MySQL", "Sequelize", "Docker", "REST APIs", "CI/CD"],
  ["React", "Node.js", "PHP", "MySQL", "Three.js", "GSAP", "Bootstrap", "Git", "Zapier"],
  ["PHP", "MySQL", "Bootstrap", "jQuery", "PWA", "API Services", "Zapier", "GA", "GSC"],
  ["WordPress", "PHP", "MySQL", "Apache", "Linux", "jQuery", "APIs", "CRON"],
];

const ExperienceSection = () => {
  const { t } = useLocale();
  const titleRef = useReveal();
  const listRef = useReveal();

  const experiences = t.experience.items.map((item, i) => ({
    ...item,
    tech: experienceTech[i],
  }));

  return (
    <section className="section-padding" id="work">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {t.experience.label}
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-3xl">
          {t.experience.headline} <GradientText>{t.experience.headlineAccent}</GradientText>
        </p>
      </div>

      <div ref={listRef} className="space-y-1">
        {experiences.map((exp, i) => (
          <div
            key={`${exp.company}-${exp.period}`}
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
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider bg-surface-2 text-muted-foreground px-3 py-1 rounded-full border border-border/20"
                    >
                      {tech}
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
