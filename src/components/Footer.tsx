import { useLocale } from "@/i18n";

const MauritiusFlag = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 16"
    aria-hidden
    className={`inline-block h-3 w-[18px] rounded-[2px] border border-border/20 ${className}`}
  >
    <rect width="24" height="4" y="0" fill="#EA2839" />
    <rect width="24" height="4" y="4" fill="#1A206D" />
    <rect width="24" height="4" y="8" fill="#FFD500" />
    <rect width="24" height="4" y="12" fill="#00A551" />
  </svg>
);

const Footer = () => {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/10 section-padding !py-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          {t.footer.copyright.replace("{year}", String(year))}
        </p>
        <p className="flex items-center gap-1.5 font-mono text-xs text-dim">
          {t.footer.madeIn} <MauritiusFlag /> {t.footer.mauritius}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
