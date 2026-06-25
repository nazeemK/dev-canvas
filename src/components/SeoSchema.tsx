import { useEffect } from "react";
import { absoluteUrl, siteConfig } from "@/lib/seo";

const SCHEMA_ID = "seo-jsonld";

function buildSchemas() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceId = `${siteConfig.url}/#professional-service`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    givenName: "Nazeem",
    familyName: "Khodabux",
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.image,
    email: siteConfig.email,
    nationality: {
      "@type": "Country",
      name: siteConfig.location.country,
    },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressCountry: siteConfig.location.countryCode,
      },
    },
    knowsAbout: siteConfig.knowsAbout,
    sameAs: siteConfig.sameAs,
    hasOccupation: {
      "@type": "Occupation",
      name: siteConfig.jobTitle,
      occupationalCategory: "Software Development",
      skills: siteConfig.knowsAbout.join(", "),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "en",
    publisher: { "@id": personId },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#profile`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    mainEntity: { "@id": personId },
    isPartOf: { "@id": websiteId },
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: `${siteConfig.name} — Full-Stack Development`,
    description:
      "Freelance full-stack development services: legacy migrations, headless commerce, ERP modules, and AI/LLM integrations.",
    url: absoluteUrl("/start-project"),
    image: siteConfig.image,
    provider: { "@id": personId },
    areaServed: [
      { "@type": "Country", name: "Mauritius" },
      { "@type": "Place", name: "Worldwide" },
    ],
    serviceType: siteConfig.services,
    knowsAbout: siteConfig.knowsAbout,
    sameAs: siteConfig.sameAs,
  };

  const contactPage = {
    "@type": "ContactPage",
    "@id": absoluteUrl("/start-project"),
    url: absoluteUrl("/start-project"),
    name: `Start a Project with ${siteConfig.name}`,
    description: pageMetaDescription(),
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, professionalService, contactPage],
  };
}

function pageMetaDescription() {
  return "Project inquiry form for legacy migration, headless commerce, ERP, and AI integration work.";
}

export default function SeoSchema() {
  useEffect(() => {
    const existing = document.getElementById(SCHEMA_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCHEMA_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(buildSchemas());
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, []);

  return null;
}
