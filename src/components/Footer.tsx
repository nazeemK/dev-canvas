const Footer = () => (
  <footer className="border-t border-border/10 py-8 section-padding !py-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nazeem Khodabux. Built with caffeine and questionable commit messages.
      </p>
      <p className="font-mono text-xs text-dim">
        Made in 🇲🇺 Mauritius
      </p>
    </div>
  </footer>
);

export default Footer;
