import type { Dictionary } from "./en";

export const fr = {
  nav: {
    skills: "Compétences",
    projects: "Projets",
    work: "Expérience",
    contact: "Contact",
    startProject: "Démarrer un projet",
  },
  language: {
    switchTo: "Changer de langue",
    en: "EN",
    fr: "FR",
  },
  loading: {
    lines: [
      "$ initialisation du portfolio...",
      "$ chargement de 10+ années d'expérience...",
      "$ compilation de punchlines...",
      "$ déploiement de l'excellence...",
      "> prêt.",
    ],
  },
  hero: {
    badgeRole: "Développeur Full-Stack Senior",
    badgeYears: "10+ ans",
    tagline:
      "J'architecte des systèmes de production pour l'e-commerce, l'ERP et les sauvetages de legacy - désormais avec des intégrations LLM et des workflows agentiques. Basé à Curepipe, livré dans le monde entier.",
    viewWork: "Voir mon travail →",
    letsTalk: "Discutons",
  },
  about: {
    label: "// about.tsx",
    headline: "Je maîtrise les systèmes",
    headlineAccent: "de bout en bout",
    headlineSub: "(de l'architecture au déploiement, pas seulement les parties amusantes)",
    p1: "Développeur full stack senior basé à Curepipe, Maurice - plus d'une décennie à architecturer indépendamment des systèmes de production pour l'e-commerce, l'ERP, l'immobilier et les agences. Migrations PHP legacy, storefronts headless, ponts middleware vers des backends de 30 ans - j'ai fait les projets difficiles.",
    p2: "Pratique sur Vue/Nuxt, React, Angular, Node et PHP, avec une profondeur croissante dans les workflows IA - intégrations LLM, MCP et prompt engineering inclus. Attiré par les projets qui récompensent l'ownership et la profondeur technique, pas le mode maintenance au ticket.",
    stats: [
      { value: "10+", label: "Années d'expérience" },
      { value: "30+", label: "Projets livrés" },
      { value: "5+", label: "Frameworks maîtrisés" },
      { value: "∞", label: "Cafés consommés" },
    ],
  },
  brands: {
    label: "// des marques qui ont fait confiance au code",
    roles: {
      "Dragon Electronics": "E-commerce headless",
      "Pam Golding Properties": "Portail immobilier",
      "Rogers Hospitality": "Expérience interactive",
      "Impetus Digital": "Agence · Lead technique",
      "Patel Optics": "Plateforme optique",
      "DEV Groupe": "Expérience de marque",
      "Sicorax - Uniconsults": "Logiciel RH & paie",
      "Harman House": "E-commerce",
      "iKeys Realty": "Portail immobilier",
      "Blue Safari": "Expérience de marque",
    },
  },
  skills: {
    label: "// tech stack",
    headline: "Les outils pour transformer",
    headlineAccent: "le café en code",
    headlineSub: "(et de plus en plus, les prompts en production)",
    categories: [
      {
        title: "Frontend",
        skills: [
          "Vue.js / Nuxt",
          "React",
          "Angular (1 & 16+)",
          "Tailwind / Bootstrap",
          "GSAP / Three.js",
        ],
      },
      {
        title: "Backend",
        skills: [
          "Node.js / Express",
          "PHP / WordPress",
          "Python / FastAPI",
          "GraphQL / REST",
          "MySQL / MongoDB / Redis",
        ],
      },
      {
        title: "DevOps & IA",
        skills: [
          "Docker / CI/CD",
          "AWS / DigitalOcean / Cloudflare",
          "Claude / OpenAI APIs",
          "MCP / A2A / Prompt Engineering",
          "Git / Playwright",
        ],
      },
    ],
  },
  projects: {
    label: "// projects.recent()",
    headline: "Des pixels poussés en",
    headlineAccent: "production",
    visitLive: "Voir le site",
    comingSoon: "Bientôt",
    items: [
      {
        title: "Dragon Electronics",
        subtitle: "Migration e-commerce headless",
        description:
          "Migration d'une boutique PHP de 8 ans vers une architecture headless Vue/Nuxt en moins d'un an. APIs GraphQL custom, recherche en microsecondes, intégrations de paiement, et failover zéro downtime - taux de rebond en baisse, vitesse de page +500%, facture VPS divisée par deux.",
      },
      {
        title: "Pam Golding Properties",
        subtitle: "Portail immobilier",
        description:
          "APIs middleware reliant un système legacy de 30 ans à un frontend PWA moderne - données immobilières en direct sans toucher au cœur. Sync multi-devises quotidienne, cache de requêtes, et compression d'images automatisée construits from scratch.",
      },
      {
        title: "Patel Optics",
        subtitle: "Plateforme optique",
        description:
          "Une expérience web cristalline pour l'opticien de confiance de Maurice. Catalogue produits, prise de rendez-vous, et une UI si soignée qu'il vous faudra des lunettes de soleil pour naviguer.",
      },
      {
        title: "Impetus Digital",
        subtitle: "Expériences de marque premium",
        description:
          "Lead technique sur des expériences interactives Three.js et GSAP pour Porsche, Rogers Hospitality, Mont Choisy Le Parc et DEV Groupe. Health checks automatisés et optimisations de performance sur toute la flotte d'hébergement de l'agence.",
      },
    ],
  },
  experience: {
    label: "// experience.log",
    headline: "Là où j'ai commité",
    headlineAccent: "plus que du code",
    items: [
      {
        role: "Développeur Full Stack Senior",
        company: "Dragon Electronics Ltd",
        period: "Juin 2025 – Présent",
        location: "Port-Louis, Maurice",
        description:
          "Piloté la migration complète d'un stack e-commerce PHP de 8 ans vers une architecture headless Vue/Nuxt en moins d'un an - conception de schéma GraphQL, intégrations de paiement, et un index de recherche custom de 16 Ko qui répond en microsecondes. Taux de rebond ramené de 40–50% au benchmark industrie, coûts VPS réduits d'~50% avec CI/CD et un cœur WooCommerce allégé. Failover dual-serveur zéro downtime avec réplication automatisée - parce que le downtime n'est pas une stratégie de déploiement.",
      },
      {
        role: "Développeur d'applications web",
        company: "Uniconsults Ltd - SICORAX",
        period: "Sep 2024 – Juin 2025",
        location: "Curepipe, Maurice",
        description:
          "Intégré un ERP modulaire à grande échelle (RH, paie, comptabilité, reporting) et atteint une contribution active en 6 semaines - 3 semaines avant le ramp standard. Ownership des modules Congés, Paie et RH sur un système multi-repo étroitement interconnecté. Tests unitaires, pipelines CI/CD améliorés, et sessions hebdomadaires de partage de connaissances avec l'équipe.",
      },
      {
        role: "Développeur Full Stack",
        company: "Impetus Digital Ltd",
        period: "Mai 2022 – Mai 2024",
        location: "Londres, UK (Remote)",
        description:
          "Lead technique sur tous les projets clients - choix de frameworks, expériences interactives Three.js et GSAP pour Porsche, Mont Choisy Le Parc, Rogers Hospitality et DEV Groupe. Health checks automatisés et optimisations de performance sur l'infra d'hébergement de l'agence. Rôle hybride dev/gestion de compte, réunions clients et livraison de bout en bout.",
      },
      {
        role: "Développeur Full Stack",
        company: "Pam Golding Properties Ltd",
        period: "Mar 2020 – Mar 2022",
        location: "Pointe aux Cannoniers, Maurice",
        description:
          "Architecturé des APIs middleware reliant un système immobilier legacy de 30 ans à un frontend web moderne - accès data en direct sans toucher au cœur. Sync multi-devises quotidienne, cache de requêtes, et compression d'images automatisée from scratch. Conception de toute l'architecture système sans précédent existant.",
      },
      {
        role: "Développeur Full Stack",
        company: "ARM Mauritius Ltd",
        period: "Mar 2017 – Jan 2020",
        location: "Albion, Maurice",
        description:
          "Construit des plateformes immobilières et e-commerce full-stack from scratch. Gestion serveurs, DNS, Cloudflare, e-mails et déploiements. Intégration d'APIs tierces, formation technique des équipes internes, et maintien des systèmes en production - l'origine de l'histoire, et oui, j'ai survécu à jQuery.",
      },
    ],
  },
  contact: {
    label: "// init contact",
    headline: "Un projet qui a besoin",
    headlineAccent: "de quelqu'un qui livre ?",
    blurb:
      "Migration legacy, commerce headless, modules ERP ou intégrations LLM - si ça demande quelqu'un qui maîtrise le stack de bout en bout, discutons.",
    cta: "Démarrer un projet →",
  },
  footer: {
    copyright:
      "© {year} Nazeem Khodabux. Construit avec de la caféine et des commits douteux.",
    madeIn: "Fait à",
    mauritius: "Maurice",
  },
  backToTop: {
    label: "haut de page",
    aria: "Retour en haut",
  },
  notFound: {
    message: "Oups ! Page introuvable",
    returnHome: "Retour à l'accueil",
  },
  onboarding: {
    steps: [
      { id: "project-type", label: "Type de projet" },
      { id: "business", label: "Votre activité" },
      { id: "scope", label: "Périmètre" },
      { id: "contact", label: "Coordonnées" },
    ],
    stepCopy: [
      {
        title: "Que souhaitez-vous construire ?",
        description:
          "Sélectionnez une ou plusieurs options. Cela m'aide à comprendre le périmètre avant d'échanger.",
      },
      {
        title: "Parlez-moi de votre activité",
        description:
          "Quelques détails sur qui vous êtes et comment votre équipe est organisée - fondateur solo ou entreprise, tout compte.",
      },
      {
        title: "Quel est le périmètre ?",
        description:
          "Budget et délai approximatifs m'aident à évaluer l'adéquation et prioriser la bonne approche.",
      },
      {
        title: "Presque fini - comment vous joindre ?",
        description:
          "Laissez vos coordonnées et je vous répondrai sous 24 heures avec les prochaines étapes.",
      },
    ],
    previous: "Précédent",
    next: "Étape suivante",
    submit: "Envoyer le projet",
    sending: "Envoi…",
    closeAria: "Fermer et retourner à l'accueil",
    successLabel: "// soumission reçue",
    successTitle: "Merci - je vous recontacte.",
    successBlurb: "Vos détails sont bien reçus. Réponse sous 24 heures.",
    backToSite: "Retour au site",
    submitFailed: "Échec de l'envoi. Veuillez réessayer.",
    formNotSetup:
      "Le formulaire n'est pas encore configuré. Contactez-moi sur WhatsApp ou LinkedIn en attendant.",
    submitFailedWhatsApp:
      "Échec de l'envoi. Réessayez ou contactez-moi sur WhatsApp.",
    projectTypes: {
      "web-ecommerce": "Web App / E-commerce",
      legacy: "Migration legacy",
      erp: "ERP / Systèmes métier",
      ai: "Intégration IA / LLM",
      api: "API & intégrations",
      support: "Support continu",
    },
    teamSizes: {
      solo: "Solo / Freelance",
      "2-10": "2–10 personnes",
      "11-50": "11–50 personnes",
      "50+": "50+ personnes",
    },
    orgTypes: {
      independent: "Indépendant / Solo",
      startup: "Startup",
      sme: "PME",
      enterprise: "Grande entreprise",
      agency: "Agence",
    },
    budgets: {
      "under-1k": "Moins de $1k",
      "1k-3.5k": "$1k – $3.5k",
      "3.5k-12k": "$3.5k – $12k",
      "12k+": "$12k+",
      unsure: "Pas encore sûr",
    },
    timelines: {
      asap: "Dès que possible",
      "1-3": "1–3 mois",
      "3-6": "3–6 mois",
      "6+": "6+ mois",
      flexible: "Flexible",
    },
    business: {
      nameLabel: "Nom de l'entreprise ou du projet",
      namePlaceholder: "Entrez le nom de votre entreprise",
      teamSize: "Taille de l'équipe",
      orgType: "Type d'organisation",
    },
    scope: {
      budget: "Budget estimé du projet",
      timeline: "Délai souhaité",
    },
    contactFields: {
      nameLabel: "Votre nom",
      namePlaceholder: "Entrez votre nom",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "vous@entreprise.com",
      phoneLabel: "Numéro de téléphone",
      phonePlaceholder: "(+230)",
      websiteLabel: "Site web",
      websiteOptional: "(optionnel)",
      websitePlaceholder: "https://votresite.com",
      consent:
        "En soumettant, vous acceptez d'être contacté au sujet de votre projet. Je réponds sous 24 heures.",
    },
  },
  seo: {
    jobTitle: "Développeur Full-Stack Senior",
    tagline: "Développeur Full-Stack Senior · Maurice",
    home: {
      title: "Nazeem Khodabux | Développeur Full-Stack Senior",
      description:
        "Développeur full-stack senior à Maurice avec 10+ ans d'expérience en e-commerce, ERP, migrations legacy, commerce headless et intégrations LLM. Disponible pour projets freelance et contrats dans le monde entier.",
    },
    startProject: {
      title: "Démarrer un projet | Nazeem Khodabux",
      description:
        "Parlez-moi de votre projet — migration legacy, commerce headless, ERP ou intégration IA. Formulaire multi-étapes avec réponse sous 24 heures.",
    },
    notFound: {
      title: "Page introuvable | Nazeem Khodabux",
      description: "La page que vous cherchez n'existe pas. Retournez à l'accueil du portfolio.",
    },
    keywords: [
      "développeur full stack Maurice",
      "développeur senior Maurice",
      "développeur freelance Maurice",
      "migration PHP legacy",
      "développeur commerce headless",
      "développeur ERP",
      "développeur e-commerce",
      "développeur Vue Nuxt",
      "développeur React",
      "intégration LLM",
      "workflows IA",
      "développeur full stack remote",
    ],
    services: [
      "Migration de systèmes legacy",
      "Développement e-commerce headless",
      "Développement de modules ERP",
      "Applications web full-stack",
      "Intégration LLM et workflows IA",
      "Architecture API et middleware",
    ],
    professionalServiceName: "Nazeem Khodabux — Développement Full-Stack",
    professionalServiceDescription:
      "Services freelance de développement full-stack : migrations legacy, commerce headless, modules ERP et intégrations IA/LLM.",
    contactPageName: "Démarrer un projet avec Nazeem Khodabux",
    contactPageDescription:
      "Formulaire de demande pour migrations legacy, commerce headless, ERP et intégrations IA.",
    schemaServiceType: "Développement Full-Stack",
    worldwide: "Monde entier",
  },
} satisfies Dictionary;
