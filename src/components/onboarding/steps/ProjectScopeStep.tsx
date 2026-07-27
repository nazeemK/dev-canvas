import { Calendar, CircleDollarSign, Clock, Hourglass, Sparkles } from "lucide-react";
import { OnboardingData } from "@/types/onboarding";
import { useLocale } from "@/i18n";
import SelectionCard from "../SelectionCard";

const budgetIds = [
  { id: "under-1k", icon: CircleDollarSign },
  { id: "1k-3.5k", icon: CircleDollarSign },
  { id: "3.5k-12k", icon: CircleDollarSign },
  { id: "12k+", icon: CircleDollarSign },
  { id: "unsure", icon: Sparkles },
] as const;

const timelineIds = [
  { id: "asap", icon: Clock },
  { id: "1-3", icon: Calendar },
  { id: "3-6", icon: Calendar },
  { id: "6+", icon: Hourglass },
  { id: "flexible", icon: Sparkles },
] as const;

interface ProjectScopeStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const ProjectScopeStep = ({ data, onChange }: ProjectScopeStepProps) => {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="space-y-4">
        <p className="text-center font-mono text-sm text-foreground/80">
          {t.onboarding.scope.budget}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {budgetIds.map((budget) => (
            <SelectionCard
              key={budget.id}
              label={t.onboarding.budgets[budget.id]}
              icon={budget.icon}
              selected={data.budget === budget.id}
              onClick={() => onChange({ budget: budget.id })}
              compact
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-center font-mono text-sm text-foreground/80">
          {t.onboarding.scope.timeline}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {timelineIds.map((timeline) => (
            <SelectionCard
              key={timeline.id}
              label={t.onboarding.timelines[timeline.id]}
              icon={timeline.icon}
              selected={data.timeline === timeline.id}
              onClick={() => onChange({ timeline: timeline.id })}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScopeStep;
