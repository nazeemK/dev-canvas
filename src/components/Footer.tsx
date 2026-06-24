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

const Footer = () => (
  <footer className="border-t border-border/10 section-padding !py-6">
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nazeem Khodabux. Built with caffeine and questionable commit messages.
      </p>
      <p className="flex items-center gap-1.5 font-mono text-xs text-dim">
        Made in <MauritiusFlag /> Mauritius
      </p>
    </div>
  </footer>
);

export default Footer;
