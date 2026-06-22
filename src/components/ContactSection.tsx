import { useReveal } from "@/hooks/useReveal";

const ContactSection = () => {
  const contentRef = useReveal();

  return (
    <section className="section-padding min-h-[80vh] flex items-center" id="contact">
      <div ref={contentRef} className="reveal max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          // init contact
        </h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Got a project that needs
          <br />
          <span className="text-gradient">someone who ships?</span>
        </p>
        <p className="font-mono text-muted-foreground text-sm max-w-lg mx-auto mb-12">
          Legacy migration, headless commerce, ERP modules, or LLM integrations — if it needs
          someone who owns the stack end to end, let's talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="mailto:khodabux.n@gmail.com"
            className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)] transition-all duration-300"
            data-cursor-hover
          >
            khodabux.n@gmail.com
          </a>
          <a
            href="tel:+23059719445"
            className="font-mono text-sm uppercase tracking-widest border border-foreground/20 text-foreground px-8 py-4 rounded-full hover:border-primary/50 transition-all duration-300"
            data-cursor-hover
          >
            +230 5971 9445
          </a>
        </div>

        <div className="flex justify-center gap-8">
          {[
            { label: "GitHub", url: "https://github.com/nazeemK" },
            { label: "LinkedIn", url: "https://linkedin.com/in/nazeemkhodabux" },
            { label: "Cursor", url: "https://cursor.com/@nazeemk" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-muted-foreground hover:text-primary transition-colors duration-300"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
