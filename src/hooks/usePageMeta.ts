import { useEffect } from "react";
import type { PageMeta } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { useLocale } from "@/i18n";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function setRobots(content: string) {
  setMeta("name", "robots", content);
}

export function usePageMeta(meta: PageMeta) {
  const { locale, t } = useLocale();
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";

  useEffect(() => {
    document.title = meta.title;

    setMeta("name", "description", meta.description);
    setMeta("name", "author", siteConfig.name);
    setMeta("name", "keywords", t.seo.keywords.join(", "));

    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", siteConfig.name);
    setMeta("property", "og:locale", ogLocale);
    setMeta("property", "og:image", siteConfig.image);
    setMeta("property", "og:image:alt", `${siteConfig.name} — ${t.seo.jobTitle}`);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", siteConfig.image);

    if (meta.path) {
      const url = absoluteUrl(meta.path);
      setMeta("property", "og:url", url);
      setCanonical(url);
    }

    setRobots(meta.noIndex ? "noindex, nofollow" : "index, follow");

    if (typeof window.gtag === "function") {
      window.gtag("config", "G-L4671XD0BC", {
        page_path: meta.path || window.location.pathname,
        page_title: meta.title,
      });
    }
  }, [
    meta.title,
    meta.description,
    meta.path,
    meta.noIndex,
    ogLocale,
    t.seo.keywords,
    t.seo.jobTitle,
  ]);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
