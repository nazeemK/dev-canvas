import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  ready?: boolean;
}

const Navbar = ({ ready = true }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

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
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 md:py-5">
        <a href="#" className="font-mono text-sm text-primary font-bold tracking-wider" data-cursor-hover>
          NK
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-foreground/60 hover:text-foreground transition-colors duration-300"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          className="font-mono text-xs uppercase tracking-wider border border-primary/40 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          data-cursor-hover
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
