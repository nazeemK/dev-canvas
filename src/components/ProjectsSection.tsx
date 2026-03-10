import { useReveal } from "@/hooks/useReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dragon Electronics",
    subtitle: "E-Commerce Platform",
    description:
      "A scalable e-commerce powerhouse for one of Mauritius' leading electronics retailers. Custom GraphQL APIs, headless WooCommerce, and a frontend so smooth it makes shopping feel like scrolling TikTok.",
    tech: ["Vue.js", "Nuxt", "WooCommerce", "GraphQL", "Docker", "Node.js"],
    url: null,
    comingSoon: true,
    gradient: "from-amber-500/20 to-orange-600/20",
    accentColor: "text-amber-400",
  },
  {
    title: "Pam Golding Properties",
    subtitle: "Real Estate Portal",
    description:
      "Luxury real estate deserves a luxury web experience. Built custom middleware to bridge legacy systems with a modern PWA frontend. Multi-currency pricing, because mansions cost different amounts depending on where you're standing.",
    tech: ["PHP", "MySQL", "REST APIs", "PWA", "jQuery", "Custom Middleware"],
    url: "https://www.pamgolding.mu",
    comingSoon: false,
    gradient: "from-emerald-500/20 to-teal-600/20",
    accentColor: "text-emerald-400",
  },
  {
    title: "Patel Optics",
    subtitle: "Optical Retail Platform",
    description:
      "A crystal-clear web experience for Mauritius' trusted optician. Product catalogue, appointment booking, and a UI so polished you'll need sunglasses to browse it.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    url: "https://www.pateloptics.mu",
    comingSoon: false,
    gradient: "from-sky-500/20 to-blue-600/20",
    accentColor: "text-sky-400",
  },
  {
    title: "Impetus Digital",
    subtitle: "Digital Agency Portfolio",
    description:
      "Led development of 20+ corporate websites with Webflow and custom code. SEO optimization that made Google actually recommend these sites — not just index them.",
    tech: ["React", "Three.js", "GSAP", "Webflow", "Node.js", "SEO"],
    url: "https://www.impetusdigital.com",
    comingSoon: false,
    gradient: "from-violet-500/20 to-purple-600/20",
    accentColor: "text-violet-400",
  },
];

const ProjectsSection = () => {
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="section-padding" id="projects">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          // projects.showcase()
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-3xl">
          Pixels I've pushed into{" "}
          <span className="text-gradient">production</span>
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`reveal-item project-card group relative rounded-2xl border border-border/20 bg-gradient-to-br ${project.gradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(var(--glow)/0.1)]`}
            style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            data-cursor-hover
          >
            {/* Mock browser frame */}
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

            {/* Content area simulating a site preview */}
            <div className="p-6 md:p-8 min-h-[220px] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className={`text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>
                    <p className={`font-mono text-xs mt-1 ${project.accentColor}`}>
                      {project.subtitle}
                    </p>
                  </div>
                  {project.comingSoon && (
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 animate-pulse-glow whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>

                <p className="text-foreground/50 text-sm leading-relaxed mb-6 max-w-md">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider bg-surface-2/80 text-muted-foreground px-3 py-1 rounded-full border border-border/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
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
                      Visit Live Site
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Hover glow overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
