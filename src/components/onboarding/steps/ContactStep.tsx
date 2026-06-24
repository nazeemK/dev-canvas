import { Input } from "@/components/ui/input";
import { OnboardingData } from "@/types/onboarding";

interface ContactStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const ContactStep = ({ data, onChange }: ContactStepProps) => (
  <div className="mx-auto max-w-xl space-y-6">
    <div className="space-y-3">
      <label htmlFor="contactName" className="block font-mono text-sm text-foreground/80">
        Your name
      </label>
      <Input
        id="contactName"
        value={data.contactName}
        onChange={(e) => onChange({ contactName: e.target.value })}
        placeholder="Enter your name"
        className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
      />
    </div>

    <div className="space-y-3">
      <label htmlFor="email" className="block font-mono text-sm text-foreground/80">
        Email address
      </label>
      <Input
        id="email"
        type="email"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
        placeholder="you@company.com"
        className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
      />
    </div>

    <div className="space-y-3">
      <label htmlFor="phone" className="block font-mono text-sm text-foreground/80">
        Phone number
      </label>
      <Input
        id="phone"
        type="tel"
        value={data.phone}
        onChange={(e) => onChange({ phone: e.target.value })}
        placeholder="(+230)"
        className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
      />
    </div>

    <div className="space-y-3">
      <label htmlFor="website" className="block font-mono text-sm text-foreground/80">
        Website <span className="text-muted-foreground">(optional)</span>
      </label>
      <Input
        id="website"
        type="url"
        value={data.website}
        onChange={(e) => onChange({ website: e.target.value })}
        placeholder="https://yoursite.com"
        className="h-12 border-border/30 bg-surface-1 font-mono text-sm"
      />
    </div>

    <p className="pt-2 text-center font-mono text-[11px] text-muted-foreground">
      By submitting, you agree to be contacted about your project. I'll reply within 24 hours.
    </p>
  </div>
);

export default ContactStep;
