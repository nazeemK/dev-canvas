import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logo = (file: string) => `${import.meta.env.BASE_URL}company_logos/${file}`;

type Brand = {
  name: string;
  role: string;
  logo: string;
  logoBg?: string;
};

const brands: Brand[] = [
  {
    name: "Dragon Electronics",
    role: "Headless E-Commerce",
    logo: logo("logo_DE_72_white.png"),
  },
  {
    name: "Pam Golding Properties",
    role: "Real Estate Portal",
    logo: logo("PamGolding-logo_RGB_web-use.jpg"),
  },
  {
    name: "Rogers Hospitality",
    role: "Interactive Experience",
    logo: logo("rogershospitality_logo.webp"),
  },
  {
    name: "Impetus Digital",
    role: "Agency · Technical Lead",
    logo: logo("impetus_digital_logo.jpg"),
  },
  {
    name: "Patel Optics",
    role: "Optical Retail Platform",
    logo: logo("pateloptics_logo.jpg"),
  },
  {
    name: "DEV Groupe",
    role: "Brand Experience",
    logo: logo("GROUPDEV_LOGOTRANSPARENT.png"),
  },
  {
    name: "Sicorax - Uniconsults",
    role: "HR & Payroll Software",
    logo: logo("sicorax_logo.png"),
  },
  {
    name: "Harman House",
    role: "E-Commerce",
    logo: logo("harmanhouse_logo.png"),
  },
  {
    name: "iKeys Realty",
    role: "Real Estate Portal",
    logo: logo("Ikeys-300x300.webp"),
  },
  {
    name: "Blue Safari",
    role: "Brand Experience",
    logo: logo("BS-logo.svg"),
  },
];

const marqueeBrands = [...brands, ...brands];

interface BrandCardProps {
  brand: Brand;
  isActive: boolean;
  isMobile: boolean;
}

const BrandCard = ({ brand, isActive, isMobile }: BrandCardProps) => {
  const showColor = isActive || brand.logoBg != null;

  return (
    <div
      className={`group flex h-[148px] w-[210px] flex-shrink-0 flex-col items-center justify-center gap-3 rounded-xl border px-5 transition-all duration-500 sm:h-[156px] sm:w-[240px] sm:px-6 ${
        isActive
          ? "border-primary/50 bg-surface-1/90 brand-card-glow scale-[1.02]"
          : "border-border/40 bg-surface-1/60 md:hover:border-primary/40 md:hover:brand-card-glow"
      }`}
      data-cursor-hover
    >
      <div
        className="flex h-16 w-full max-w-[180px] items-center justify-center rounded-md px-3 py-2 sm:h-[4.5rem] sm:max-w-[200px]"
        style={brand.logoBg ? { backgroundColor: brand.logoBg } : undefined}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          loading="lazy"
          className={`h-11 w-auto max-w-[160px] object-contain transition-all duration-500 sm:h-12 sm:max-w-[180px] ${
            showColor
              ? "opacity-100 grayscale-0"
              : isMobile
                ? "opacity-45 grayscale"
                : "opacity-70 grayscale md:group-hover:opacity-100 md:group-hover:grayscale-0"
          }`}
        />
      </div>
      <div className="text-center">
        <p
          className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-300 ${
            isActive ? "text-primary" : "text-foreground/50 md:group-hover:text-primary"
          }`}
        >
          {brand.name}
        </p>
        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/70">
          {brand.role}
        </p>
      </div>
    </div>
  );
};

const BrandMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const updateLayout = () => setIsMobile(mq.matches);
    updateLayout();
    mq.addEventListener("change", updateLayout);

    return () => mq.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      activeIdRef.current = null;
      setActiveId(null);
      return;
    }

    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;

    const updateActiveCard = () => {
      const viewportRect = viewport.getBoundingClientRect();
      const centerX = viewportRect.left + viewportRect.width / 2;

      let bestId: string | null = null;
      let bestDistance = Infinity;

      viewport.querySelectorAll<HTMLElement>("[data-brand-card]").forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        if (rect.right < viewportRect.left || rect.left > viewportRect.right) return;

        const distance = Math.abs(rect.left + rect.width / 2 - centerX);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = wrapper.getAttribute("data-brand-card");
        }
      });

      if (activeIdRef.current !== bestId) {
        activeIdRef.current = bestId;
        setActiveId(bestId);
      }

      frame = requestAnimationFrame(updateActiveCard);
    };

    frame = requestAnimationFrame(updateActiveCard);

    return () => cancelAnimationFrame(frame);
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-24 md:py-32">
      <div className="section-padding pb-12">
        <h2
          ref={headingRef}
          className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          // brands that trusted the code
        </h2>
      </div>

      <div ref={viewportRef} className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <div className="marquee-track">
          {marqueeBrands.map((brand, i) => {
            const cardId = `${brand.name}-${i}`;

            return (
              <div
                key={cardId}
                data-brand-card={cardId}
                className="flex-shrink-0 px-3 py-4 sm:px-5"
              >
                <BrandCard
                  brand={brand}
                  isActive={activeId === cardId}
                  isMobile={isMobile}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
