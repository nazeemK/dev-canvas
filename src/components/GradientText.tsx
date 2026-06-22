import { forwardRef } from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "span" | "p";
  brightRef?: React.Ref<HTMLSpanElement>;
}

const GradientText = forwardRef<HTMLElement, GradientTextProps>(
  ({ children, className = "", as: Tag = "span", brightRef, ...props }, ref) => {
    return (
      <Tag ref={ref} className={`text-reveal ${className}`} {...props}>
        <span className="text-reveal-dim" aria-hidden="true">
          {children}
        </span>
        <span ref={brightRef} className="text-reveal-bright">
          {children}
        </span>
      </Tag>
    );
  }
);

GradientText.displayName = "GradientText";

export default GradientText;
