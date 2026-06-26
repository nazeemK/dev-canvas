const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://nazeemkhodabux.com";

export const siteConfig = {
  name: "Nazeem Khodabux",
  title: "Nazeem Khodabux | Senior Full-Stack Developer",
  tagline: "Senior Full-Stack Developer · Mauritius",
  description:
    "Senior full-stack developer in Mauritius with 10+ years building e-commerce, ERP, legacy migrations, headless commerce, and LLM integrations. Available for freelance and contract projects worldwide.",
  url: SITE_URL.replace(/\/$/, ""),
  locale: "en_US",
  email: "khodabux.n@gmail.com",
  location: {
    city: "Curepipe",
    country: "Mauritius",
    countryCode: "MU",
  },
  jobTitle: "Senior Full-Stack Developer",
  image: `${SITE_URL.replace(/\/$/, "")}/og-image.png`,
  sameAs: [
    "https://github.com/nazeemK",
    "https://linkedin.com/in/nazeemkhodabux",
    "https://www.facebook.com/khodabuxnazeem/",
    "https://www.instagram.com/zeem.k",
    "https://wa.me/23059719445",
  ],
  keywords: [
    "full stack developer Mauritius",
    "senior developer Mauritius",
    "freelance developer Mauritius",
    "legacy PHP migration",
    "headless commerce developer",
    "ERP developer",
    "e-commerce developer",
    "Vue Nuxt developer",
    "React developer",
    "LLM integration developer",
    "AI workflow developer",
    "remote full stack developer",
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "Vue.js",
    "Nuxt",
    "React",
    "Angular",
    "Node.js",
    "PHP",
    "GraphQL",
    "E-commerce",
    "ERP Systems",
    "Legacy System Migration",
    "Headless Commerce",
    "LLM Integrations",
    "AI Workflows",
    "Docker",
    "CI/CD",
    "WordPress",
    "Three.js",
  ],
  services: [
    "Legacy system migration",
    "Headless e-commerce development",
    "ERP module development",
    "Full-stack web applications",
    "LLM and AI workflow integration",
    "API architecture and middleware",
  ],
} as const;

export type PageMeta = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
};

export const pageMeta = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
  },
  startProject: {
    title: `Start a Project | ${siteConfig.name}`,
    description:
      "Tell me about your project — legacy migration, headless commerce, ERP, or AI integration. Multi-step inquiry form with a response within 24 hours.",
    path: "/start-project",
  },
  notFound: {
    title: `Page Not Found | ${siteConfig.name}`,
    description: "The page you're looking for doesn't exist. Return to the portfolio homepage.",
    path: "",
    noIndex: true,
  },
} satisfies Record<string, PageMeta>;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
