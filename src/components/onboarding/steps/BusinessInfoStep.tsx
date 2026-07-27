import { Building2, Rocket, Store, User, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";
import { useLocale } from "@/i18n";
import SelectionCard from "../SelectionCard";

const teamSizeIds = [
  { id: "solo", icon: User },
  { id: "2-10", icon: Users },
  { id: "11-50", icon: Users },
  { id: "50+", icon: Building2 },
] as const;

const organizationTypeIds = [
  { id: "independent", icon: User },
  { id: "startup", icon: Rocket },
  { id: "sme", icon: Store },
  { id: "enterprise", icon: Building2 },
  { id: "agency", icon: Users },
] as const;

interface BusinessInfoStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const BusinessInfoStep = ({ data, onChange }: BusinessInfoStepProps) => {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-2xl space-y-10">
      <div className="space-y-3">
        <label htmlFor="businessName" className="block font-mono text-sm text-foreground/80">
          {t.onboarding.business.nameLabel}
        </label>
        <Input
          id="businessName"
          value={data.businessName}
          onChange={(e) => onChange({ businessName: e.target.value })}
          placeholder={t.onboarding.business.namePlaceholder}
          className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
        />
      </div>

      <div className="space-y-4">
        <p className="font-mono text-sm text-foreground/80">{t.onboarding.business.teamSize}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {teamSizeIds.map((size) => (
            <SelectionCard
              key={size.id}
              label={t.onboarding.teamSizes[size.id]}
              icon={size.icon}
              selected={data.teamSize === size.id}
              onClick={() => onChange({ teamSize: size.id })}
              compact
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-mono text-sm text-foreground/80">{t.onboarding.business.orgType}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {organizationTypeIds.map((org) => (
            <SelectionCard
              key={org.id}
              label={t.onboarding.orgTypes[org.id]}
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
};

export default BusinessInfoStep;
