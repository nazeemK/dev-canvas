import { useLocale, type Locale } from "@/i18n";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: LanguageSwitcherProps) => {
  const { locale, setLocale, t } = useLocale();

  const options: Locale[] = ["en", "fr"];

  return (
    <div
      className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest ${className}`}
      role="group"
      aria-label={t.language.switchTo}
    >
      {options.map((code, i) => (
        <span key={code} className="inline-flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground/40" aria-hidden>|</span>}
          <button
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            data-cursor-hover
            className={`px-1 transition-colors duration-200 ${
              locale === code
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.language[code]}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
