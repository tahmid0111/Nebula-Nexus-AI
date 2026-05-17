import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium gradient-bg-subtle border border-primary/20 text-primary mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
