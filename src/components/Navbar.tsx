import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { y: -40, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/20" : ""
      }`}
    >
      <div className="flex items-center justify-between section-padding !py-5">
        <a href="#" className="font-mono text-sm text-primary font-bold tracking-wider" data-cursor-hover>
          NK.dev
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
