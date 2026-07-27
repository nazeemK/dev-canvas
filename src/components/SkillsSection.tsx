import { useReveal } from "@/hooks/useReveal";
import GradientText from "./GradientText";
import { useLocale } from "@/i18n";

const SkillsSection = () => {
  const { t } = useLocale();
  const titleRef = useReveal();
  const cardsRef = useReveal();

  return (
    <section className="section-padding" id="skills">
      <div ref={titleRef} className="reveal mb-16 md:mb-24">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {t.skills.label}
        </h2>
        <p className="text-3xl md:text-5xl font-bold max-w-2xl">
          {t.skills.headline} <GradientText>{t.skills.headlineAccent}</GradientText>
          <span className="text-muted-foreground text-lg block mt-2 font-normal font-mono">
            {t.skills.headlineSub}
          </span>
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {t.skills.categories.map((cat, ci) => (
          <div
            key={cat.title}
            className="reveal-item group rounded-2xl border border-border/20 bg-surface-1 p-6 md:p-8 transition-all duration-500 hover:border-primary/30 hover:glow-box"
            style={{ "--reveal-delay": `${ci * 0.15}s` } as React.CSSProperties}
          >
            <h3 className="mb-6 border-b border-border/20 pb-4 font-mono text-sm uppercase tracking-wider text-primary">
              {`<${cat.title} />`}
            </h3>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-border/20 bg-surface-2/60 px-3 py-1.5 text-foreground/70 transition-all duration-300 group-hover:border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  data-cursor-hover
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
