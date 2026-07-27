import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoMark from "./LogoMark";
import { useLocale } from "@/i18n";

interface NavbarProps {
  ready?: boolean;
}

const Navbar = ({ ready = true }: NavbarProps) => {
  const { t } = useLocale();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!ready || !navRef.current) return;

    const tween = gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    return () => {
      tween.kill();
    };
  }, [ready]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-border/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-6 md:px-12 lg:px-24 py-4 md:py-5">
        <a href="#" className="group shrink-0" data-cursor-hover>
          <LogoMark className="group-hover:border-primary/70" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-foreground/60 hover:text-foreground transition-colors duration-300"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <LanguageSwitcher />
          <Link
            to="/start-project"
            className="font-mono text-xs uppercase tracking-wider border border-primary/40 text-primary px-3 py-2 sm:px-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-cursor-hover
          >
            {t.nav.startProject}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
