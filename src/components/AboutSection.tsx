import { useReveal } from "@/hooks/useReveal";
import GradientText from "./GradientText";
import { useLocale } from "@/i18n";

const AboutSection = () => {
  const { t } = useLocale();
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div ref={textRef} className="reveal">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {t.about.label}
          </h2>
          <p className="text-2xl md:text-4xl font-bold leading-snug mb-6">
            {t.about.headline} <GradientText>{t.about.headlineAccent}</GradientText>
            <span className="text-muted-foreground text-lg block mt-2 font-normal font-mono">
              {t.about.headlineSub}
            </span>
          </p>
          <p className="text-foreground/60 leading-relaxed mb-6">{t.about.p1}</p>
          <p className="text-foreground/60 leading-relaxed">{t.about.p2}</p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-6 content-start">
          {t.about.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-item stat-item bg-surface-1 border border-border/20 rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
              style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            >
              <GradientText as="p" className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </GradientText>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
