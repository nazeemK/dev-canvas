import { LucideIcon } from "lucide-react";

interface SelectionCardProps {
  label: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
  compact?: boolean;
}

const SelectionCard = ({ label, icon: Icon, selected, onClick, compact }: SelectionCardProps) => (
    <button
      type="button"
      onClick={onClick}
      data-cursor-hover
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border bg-surface-1 p-4 text-center transition-all duration-300 sm:p-5 ${
      compact ? "min-h-[100px]" : "min-h-[120px] sm:min-h-[140px]"
    } ${
      selected
        ? "border-primary/60 bg-primary/5 brand-card-glow"
        : "border-border/30 hover:border-primary/30"
    }`}
  >
    <Icon
      className={`h-7 w-7 sm:h-8 sm:w-8 transition-colors duration-300 ${
        selected ? "text-primary" : "text-foreground/50"
      }`}
      strokeWidth={1.5}
    />
    <span
      className={`font-mono text-[10px] uppercase leading-snug tracking-wider sm:text-xs ${
        selected ? "text-primary" : "text-muted-foreground"
      }`}
    >
      {label}
    </span>
  </button>
);

export default SelectionCard;
