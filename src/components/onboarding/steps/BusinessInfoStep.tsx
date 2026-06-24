import { Building2, Rocket, Store, User, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";
import SelectionCard from "../SelectionCard";

const teamSizes = [
  { id: "solo", label: "Solo / Freelancer", icon: User },
  { id: "2-10", label: "2–10 people", icon: Users },
  { id: "11-50", label: "11–50 people", icon: Users },
  { id: "50+", label: "50+ people", icon: Building2 },
];

const organizationTypes = [
  { id: "independent", label: "Independent / Solo venture", icon: User },
  { id: "startup", label: "Startup", icon: Rocket },
  { id: "sme", label: "SME", icon: Store },
  { id: "enterprise", label: "Enterprise", icon: Building2 },
  { id: "agency", label: "Agency", icon: Users },
];

interface BusinessInfoStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const BusinessInfoStep = ({ data, onChange }: BusinessInfoStepProps) => (
  <div className="mx-auto max-w-2xl space-y-10">
    <div className="space-y-3">
      <label htmlFor="businessName" className="block font-mono text-sm text-foreground/80">
        Business or project name
      </label>
      <Input
        id="businessName"
        value={data.businessName}
        onChange={(e) => onChange({ businessName: e.target.value })}
        placeholder="Enter your business name"
        className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
      />
    </div>

    <div className="space-y-4">
      <p className="font-mono text-sm text-foreground/80">Team size</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {teamSizes.map((size) => (
          <SelectionCard
            key={size.id}
            label={size.label}
            icon={size.icon}
            selected={data.teamSize === size.id}
            onClick={() => onChange({ teamSize: size.id })}
            compact
          />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <p className="font-mono text-sm text-foreground/80">Organization type</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {organizationTypes.map((org) => (
          <SelectionCard
            key={org.id}
            label={org.label}
            icon={org.icon}
            selected={data.organizationType === org.id}
            onClick={() => onChange({ organizationType: org.id })}
            compact
          />
        ))}
      </div>
    </div>
  </div>
);

export default BusinessInfoStep;
