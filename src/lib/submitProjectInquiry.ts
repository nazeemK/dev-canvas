import type { OnboardingData } from "@/types/onboarding";

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
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Form is not configured yet. Please contact me directly via WhatsApp or LinkedIn.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New project inquiry — ${data.contactName} (${data.businessName || "no business name"})`,
      from_name: data.contactName,
      email: data.email,
      phone: data.phone,
      botcheck: "",
      project_types: data.projectTypes.map((id) => label(PROJECT_TYPE_LABELS, id)).join(", "),
      business_name: data.businessName,
      team_size: label(TEAM_SIZE_LABELS, data.teamSize),
      organization_type: label(ORG_TYPE_LABELS, data.organizationType),
      budget: label(BUDGET_LABELS, data.budget),
      timeline: label(TIMELINE_LABELS, data.timeline),
      website: data.website || "Not provided",
    }),
  });

  const result = (await response.json()) as { success: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Failed to send inquiry. Please try again.");
  }
}
