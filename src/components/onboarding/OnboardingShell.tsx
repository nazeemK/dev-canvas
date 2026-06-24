import { ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { X } from "lucide-react";

interface OnboardingShellProps {
  stepLabel: string;
  stepIndex: number;
  totalSteps: number;
  title: string;
  description: string;
  children: ReactNode;
  onPrevious?: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  showPrevious?: boolean;
}

const OnboardingShell = ({
  stepLabel,
  stepIndex,
  totalSteps,
  title,
  description,
  children,
  onPrevious,
  onNext,
  nextLabel = "Next step",
  nextDisabled = false,
  showPrevious = true,
}: OnboardingShellProps) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const hasEnteredRef = useRef(false);

  useEffect(() => {
    const page = pageRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const footer = footerRef.current;
    if (!page || !header || !title || !content || !footer) return;

    if (!hasEnteredRef.current) {
      hasEnteredRef.current = true;
      gsap.set(page, { opacity: 0 });
      gsap.set([header, title, content, footer], { opacity: 0, y: 28 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(page, { opacity: 1, duration: 0.35 })
        .to(header, { opacity: 1, y: 0, duration: 0.7 }, "-=0.15")
        .to(title, { opacity: 1, y: 0, duration: 0.85 }, "-=0.45")
        .to(content, { opacity: 1, y: 0, duration: 1 }, "-=0.65")
        .to(footer, { opacity: 1, y: 0, duration: 0.7 }, "-=0.75");

      return;
    }

    gsap.fromTo(
      [title, content],
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.08 },
    );
  }, [stepIndex]);

  return (
    <div ref={pageRef} className="flex min-h-screen flex-col bg-background">
      <header
        ref={headerRef}
        className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-24"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-primary">{stepLabel}</p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-muted-foreground">
            {stepIndex + 1} / {totalSteps}
          </span>
          <Link
            to="/"
            className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label="Close and return home"
            data-cursor-hover
          >
            <X className="h-5 w-5" />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col px-6 pb-8 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-5xl flex-1">
          <div ref={titleRef} className="mb-10 text-center md:mb-14">
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h1>
            <p className="mx-auto max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div ref={contentRef}>{children}</div>
        </div>
      </main>

      <footer
        ref={footerRef}
        className="border-t border-border/20 px-6 py-6 md:px-12 lg:px-24"
      >
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          {showPrevious && onPrevious ? (
            <button
              type="button"
              onClick={onPrevious}
              data-cursor-hover
              className="font-mono text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Previous
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            data-cursor-hover
            className="font-mono text-sm uppercase tracking-widest rounded-full bg-primary px-8 py-3.5 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(68,100%,50%,0.3)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {nextLabel}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingShell;
