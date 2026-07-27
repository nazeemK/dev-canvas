import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";
import { useLocale } from "@/i18n";

interface ContactStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const ContactStep = ({ data, onChange }: ContactStepProps) => {
  const { t } = useLocale();
  const fields = t.onboarding.contactFields;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-3">
        <label htmlFor="contactName" className="block font-mono text-sm text-foreground/80">
          {fields.nameLabel}
        </label>
        <Input
          id="contactName"
          value={data.contactName}
          onChange={(e) => onChange({ contactName: e.target.value })}
          placeholder={fields.namePlaceholder}
          className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="email" className="block font-mono text-sm text-foreground/80">
          {fields.emailLabel}
        </label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder={fields.emailPlaceholder}
          className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="phone" className="block font-mono text-sm text-foreground/80">
          {fields.phoneLabel}
        </label>
        <Input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder={fields.phonePlaceholder}
          className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="website" className="block font-mono text-sm text-foreground/80">
          {fields.websiteLabel}{" "}
          <span className="text-muted-foreground">{fields.websiteOptional}</span>
        </label>
        <Input
          id="website"
          type="url"
          value={data.website}
          onChange={(e) => onChange({ website: e.target.value })}
          placeholder={fields.websitePlaceholder}
          className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
        />
      </div>

      <p className="pt-2 text-center font-mono text-[11px] text-muted-foreground">
        {fields.consent}
      </p>
    </div>
  );
};

export default ContactStep;
