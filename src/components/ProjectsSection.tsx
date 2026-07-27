import { useReveal } from "@/hooks/useReveal";
import GradientText from "./GradientText";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n";

const projectMeta = [
  {
    tech: ["Nuxt 3", "Vue 3", "GraphQL", "WooCommerce", "MySQL", "CI/CD", "Tailwind"],
    url: "https://www.dragonelectronics.mu",
    comingSoon: false,
    gradient: "from-amber-500/20 to-orange-600/20",
    accentColor: "text-amber-400",
  },
  {
    tech: ["PHP", "MySQL", "REST APIs", "PWA", "Zapier", "GA", "GSC"],
    url: "https://www.pamgolding.mu",
    comingSoon: false,
    gradient: "from-emerald-500/20 to-teal-600/20",
    accentColor: "text-emerald-400",
  },
  {
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    url: "https://www.pateloptics.mu",
    comingSoon: false,
    gradient: "from-sky-500/20 to-blue-600/20",
    accentColor: "text-sky-400",
  },
  {
    tech: ["React", "Three.js", "GSAP", "Node.js", "PHP", "MySQL", "Zapier"],
    url: "https://www.impetusdigital.io",
    comingSoon: false,
    gradient: "from-violet-500/20 to-purple-600/20",
    accentColor: "text-violet-400",
  },
];

const ProjectsSection = () => {
  const { t } = useLocale();
  const titleRef = useReveal();
  const cardsRef = useReveal();

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectMeta[i],
  }));

  return (
    <section className="section-padding" id="projects">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {t.projects.label}
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-3xl">
          {t.projects.headline}{" "}
          <GradientText>{t.projects.headlineAccent}</GradientText>
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`reveal-item project-card group relative rounded-2xl border border-border/20 bg-gradient-to-br ${project.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--glow)/0.1)]`}
            style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            data-cursor-hover
          >
            <div className="bg-surface-1/80 border-b border-border/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-surface-3/60 rounded-md px-3 py-1 font-mono text-[10px] text-muted-foreground text-center truncate">
                  {project.url || "coming-soon.dev"}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className={`font-mono text-xs mt-1 ${project.accentColor}`}>
                      {project.subtitle}
                    </p>
                  </div>
                  {project.comingSoon && (
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 animate-pulse-glow whitespace-nowrap">
                      {t.projects.comingSoon}
                    </span>
                  )}
                </div>

                <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider bg-surface-2/80 text-muted-foreground px-3 py-1 rounded-full border border-border/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/40 hover:text-primary transition-colors duration-300 group/link"
                    data-cursor-hover
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="border-b border-transparent group-hover/link:border-primary transition-colors duration-300">
                      {t.projects.visitLive}
                    </span>
                  </a>
                )}
              </div>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
