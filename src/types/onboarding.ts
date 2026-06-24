export interface OnboardingData {
  projectTypes: string[];
  businessName: string;
  teamSize: string;
  organizationType: string;
  budget: string;
  timeline: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
}

export const initialOnboardingData: OnboardingData = {
  projectTypes: [],
  businessName: "",
  teamSize: "",
  organizationType: "",
  budget: "",
  timeline: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
};

export const ONBOARDING_STEPS = [
  { id: "project-type", label: "Type of Project" },
  { id: "business", label: "Your Business" },
  { id: "scope", label: "Project Scope" },
  { id: "contact", label: "Contact Details" },
] as const;
