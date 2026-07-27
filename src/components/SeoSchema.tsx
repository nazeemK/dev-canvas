import { useEffect } from "react";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { useLocale } from "@/i18n";

const SCHEMA_ID = "seo-jsonld";

export default function SeoSchema() {
  const { locale, t } = useLocale();

  useEffect(() => {
    const personId = `${siteConfig.url}/#person`;
    const websiteId = `${siteConfig.url}/#website`;
    const serviceId = `${siteConfig.url}/#professional-service`;

    const person = {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.name,
      givenName: "Nazeem",
      familyName: "Khodabux",
      jobTitle: t.seo.jobTitle,
      description: t.seo.home.description,
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
        name: t.seo.jobTitle,
        occupationalCategory: t.seo.schemaServiceType,
        skills: siteConfig.knowsAbout.join(", "),
      },
    };

    const website = {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.name,
      description: t.seo.home.description,
      url: siteConfig.url,
      inLanguage: locale,
      publisher: { "@id": personId },
    };

    const profilePage = {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: t.seo.home.title,
      description: t.seo.home.description,
      mainEntity: { "@id": personId },
      isPartOf: { "@id": websiteId },
    };

    const professionalService = {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: t.seo.professionalServiceName,
      description: t.seo.professionalServiceDescription,
      url: absoluteUrl("/start-project"),
      image: siteConfig.image,
      provider: { "@id": personId },
      areaServed: [
        { "@type": "Country", name: siteConfig.location.country },
        { "@type": "Place", name: t.seo.worldwide },
      ],
      serviceType: t.seo.services,
      knowsAbout: siteConfig.knowsAbout,
      sameAs: siteConfig.sameAs,
    };

    const contactPage = {
      "@type": "ContactPage",
      "@id": absoluteUrl("/start-project"),
      url: absoluteUrl("/start-project"),
      name: t.seo.contactPageName,
      description: t.seo.contactPageDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
    };

    const schemas = {
      "@context": "https://schema.org",
      "@graph": [person, website, profilePage, professionalService, contactPage],
    };

    const existing = document.getElementById(SCHEMA_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = SCHEMA_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCHEMA_ID)?.remove();
    };
  }, [locale, t]);

  return null;
}
