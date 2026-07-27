import {
  Bot,
  Code2,
  Layers,
  RefreshCw,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { OnboardingData } from "@/types/onboarding";
import { useLocale } from "@/i18n";
import SelectionCard from "../SelectionCard";

const projectTypeIds = [
  { id: "web-ecommerce", icon: ShoppingCart },
  { id: "legacy", icon: RefreshCw },
  { id: "erp", icon: Layers },
  { id: "ai", icon: Bot },
  { id: "api", icon: Code2 },
  { id: "support", icon: Wrench },
] as const;

interface ProjectTypeStepProps {
  data: OnboardingData;
  onChange: (types: string[]) => void;
}

const ProjectTypeStep = ({ data, onChange }: ProjectTypeStepProps) => {
  const { t } = useLocale();

  const toggle = (id: string) => {
    onChange(
      data.projectTypes.includes(id)
        ? data.projectTypes.filter((type) => type !== id)
        : [...data.projectTypes, id],
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
      {projectTypeIds.map((type) => (
        <SelectionCard
          key={type.id}
          label={t.onboarding.projectTypes[type.id]}
          icon={type.icon}
          selected={data.projectTypes.includes(type.id)}
          onClick={() => toggle(type.id)}
        />
      ))}
    </div>
  );
};

export default ProjectTypeStep;
