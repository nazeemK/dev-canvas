import type { OnboardingData } from "@/types/onboarding";
import { siteConfig } from "@/lib/seo";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  "web-ecommerce": "Web App / E-Commerce",
  legacy: "Legacy Migration",
  erp: "ERP / Business Systems",
  ai: "AI / LLM Integration",
  api: "API & Integrations",
  support: "Ongoing Support",
};

const TEAM_SIZE_LABELS: Record<string, string> = {
  solo: "Solo / Freelancer",
  "2-10": "2–10 people",
  "11-50": "11–50 people",
  "50+": "50+ people",
};

const ORG_TYPE_LABELS: Record<string, string> = {
  independent: "Independent / Solo venture",
  startup: "Startup",
  sme: "SME",
  enterprise: "Enterprise",
  agency: "Agency",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-50k": "Under Rs 50k",
  "50k-150k": "Rs 50k – 150k",
  "150k-500k": "Rs 150k – 500k",
  "500k+": "Rs 500k+",
  unsure: "Not sure yet",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-3": "1–3 months",
  "3-6": "3–6 months",
  "6+": "6+ months",
  flexible: "Flexible",
};

function label(map: Record<string, string>, id: string) {
  return map[id] ?? id;
}

export async function submitProjectInquiry(data: OnboardingData) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `New project inquiry — ${data.contactName} (${data.businessName || "no business name"})`,
      _template: "table",
      _captcha: "false",
      name: data.contactName,
      email: data.email,
      phone: data.phone,
      project_types: data.projectTypes.map((id) => label(PROJECT_TYPE_LABELS, id)).join(", "),
      business_name: data.businessName,
      team_size: label(TEAM_SIZE_LABELS, data.teamSize),
      organization_type: label(ORG_TYPE_LABELS, data.organizationType),
      budget: label(BUDGET_LABELS, data.budget),
      timeline: label(TIMELINE_LABELS, data.timeline),
      website: data.website || "Not provided",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send inquiry. Please try again or contact me on WhatsApp.");
  }

  const result = (await response.json()) as { success?: string };

  if (result.success !== "true") {
    throw new Error("Failed to send inquiry. Please try again or contact me on WhatsApp.");
  }
}
