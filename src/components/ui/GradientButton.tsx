import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const GradientButton = ({ className, variant = "primary", size = "md", children, ...props }: GradientButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "gradient-bg text-white hover-glow",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
  };

  return (
    <button
      className={cn(
        "relative font-semibold rounded-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] active:scale-[0.98]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
