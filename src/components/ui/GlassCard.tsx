import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "animated";
  hover?: boolean;
  children: React.ReactNode;
}

const GlassCard = ({ className, variant = "default", hover = true, children, ...props }: GlassCardProps) => {
  const variantClasses = {
    default: "glass-card",
    glow: "glass-card glow-border",
    animated: "glass-card animated-border",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variantClasses[variant],
        hover && "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
