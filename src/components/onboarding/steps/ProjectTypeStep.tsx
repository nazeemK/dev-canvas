import {
  Bot,
  Code2,
  Layers,
  RefreshCw,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { OnboardingData } from "@/types/onboarding";
import SelectionCard from "../SelectionCard";

const projectTypes = [
  { id: "web-ecommerce", label: "Web App / E-Commerce", icon: ShoppingCart },
  { id: "legacy", label: "Legacy Migration", icon: RefreshCw },
  { id: "erp", label: "ERP / Business Systems", icon: Layers },
  { id: "ai", label: "AI / LLM Integration", icon: Bot },
  { id: "api", label: "API & Integrations", icon: Code2 },
  { id: "support", label: "Ongoing Support", icon: Wrench },
];

interface ProjectTypeStepProps {
  data: OnboardingData;
  onChange: (types: string[]) => void;
}

const ProjectTypeStep = ({ data, onChange }: ProjectTypeStepProps) => {
  const toggle = (id: string) => {
    onChange(
      data.projectTypes.includes(id)
        ? data.projectTypes.filter((t) => t !== id)
        : [...data.projectTypes, id],
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
      {projectTypes.map((type) => (
        <SelectionCard
          key={type.id}
          label={type.label}
          icon={type.icon}
          selected={data.projectTypes.includes(type.id)}
          onClick={() => toggle(type.id)}
        />
      ))}
    </div>
  );
};

export default ProjectTypeStep;
