import { en } from "@/i18n/en";
import type { OnboardingData } from "@/types/onboarding";

/** Email notification labels stay English so inbox stays consistent. */
const PROJECT_TYPE_LABELS = en.onboarding.projectTypes;
const TEAM_SIZE_LABELS = en.onboarding.teamSizes;
const ORG_TYPE_LABELS = en.onboarding.orgTypes;
const BUDGET_LABELS = en.onboarding.budgets;
const TIMELINE_LABELS = en.onboarding.timelines;

function label(map: Record<string, string>, id: string) {
  return map[id] ?? id;
}

export type InquiryErrorMessages = {
  formNotSetup: string;
  submitFailed: string;
};

let cachedAccessKey: string | null | undefined;

async function getAccessKey(): Promise<string | null> {
  if (cachedAccessKey !== undefined) return cachedAccessKey;

  const envKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (envKey && envKey !== "PASTE_YOUR_KEY_FROM_web3forms.com") {
    cachedAccessKey = envKey;
    return envKey;
  }

  try {
    const response = await fetch(`${import.meta.env.BASE_URL}form-config.json`);
    if (response.ok) {
      const config = (await response.json()) as { web3formsAccessKey?: string };
      const key = config.web3formsAccessKey?.trim();
      if (key && key !== "PASTE_YOUR_KEY_FROM_web3forms.com") {
        cachedAccessKey = key;
        return key;
      }
    }
  } catch {
    // fall through
  }

  cachedAccessKey = null;
  return null;
}

export async function submitProjectInquiry(
  data: OnboardingData,
  errors: InquiryErrorMessages = {
    formNotSetup: en.onboarding.formNotSetup,
    submitFailed: en.onboarding.submitFailedWhatsApp,
  },
) {
  const accessKey = await getAccessKey();

  if (!accessKey) {
    throw new Error(errors.formNotSetup);
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
    throw new Error(result.message ?? errors.submitFailed);
  }
}
