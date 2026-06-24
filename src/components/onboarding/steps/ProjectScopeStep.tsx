import { Calendar, CircleDollarSign, Clock, Hourglass, Sparkles } from "lucide-react";
import { OnboardingData } from "@/types/onboarding";
import SelectionCard from "../SelectionCard";

const budgets = [
  { id: "under-50k", label: "Under Rs 50k", icon: CircleDollarSign },
  { id: "50k-150k", label: "Rs 50k – 150k", icon: CircleDollarSign },
  { id: "150k-500k", label: "Rs 150k – 500k", icon: CircleDollarSign },
  { id: "500k+", label: "Rs 500k+", icon: CircleDollarSign },
  { id: "unsure", label: "Not sure yet", icon: Sparkles },
];

const timelines = [
  { id: "asap", label: "ASAP", icon: Clock },
  { id: "1-3", label: "1–3 months", icon: Calendar },
  { id: "3-6", label: "3–6 months", icon: Calendar },
  { id: "6+", label: "6+ months", icon: Hourglass },
  { id: "flexible", label: "Flexible", icon: Sparkles },
];

interface ProjectScopeStepProps {
  data: OnboardingData;
  onChange: (patch: Partial<OnboardingData>) => void;
}

const ProjectScopeStep = ({ data, onChange }: ProjectScopeStepProps) => (
  <div className="mx-auto max-w-4xl space-y-12">
    <div className="space-y-4">
      <p className="text-center font-mono text-sm text-foreground/80">
        Estimated project budget
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {budgets.map((budget) => (
          <SelectionCard
            key={budget.id}
            label={budget.label}
            icon={budget.icon}
            selected={data.budget === budget.id}
            onClick={() => onChange({ budget: budget.id })}
            compact
          />
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <p className="text-center font-mono text-sm text-foreground/80">Preferred timeline</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {timelines.map((timeline) => (
          <SelectionCard
            key={timeline.id}
            label={timeline.label}
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

export default ProjectScopeStep;
