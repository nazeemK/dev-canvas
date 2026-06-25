import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

const LogoMark = ({ className }: LogoMarkProps) => (
  <span
    className={cn(
      "inline-flex items-center justify-center font-mono text-sm font-bold tracking-wider",
      "text-primary border border-primary/40 rounded-md px-2.5 py-1",
      "transition-colors duration-300",
      className,
    )}
  >
    NK
  </span>
);

export default LogoMark;
