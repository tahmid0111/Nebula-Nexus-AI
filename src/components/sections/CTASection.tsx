import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CtaPair } from "@/components/ui/CtaButtons";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  const benefits = [
    t("cta.benefit1"),
    t("cta.benefit2"),
    t("cta.benefit3"),
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--bg-primary))" }}
    >
      {/* Ambient drifting orbs — reduced intensity vs hero */}
      <div
        className="landing-orb pointer-events-none absolute -top-32 left-[10%] w-[420px] h-[420px] rounded-full blur-[140px]"
        style={{ background: "hsl(var(--accent-amber) / 0.18)" }}
      />
      <div
        className="landing-orb pointer-events-none absolute bottom-[-120px] right-[8%] w-[360px] h-[360px] rounded-full blur-[140px]"
        style={{
          background: "hsl(var(--accent-amber) / 0.12)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[150px] opacity-30"
        style={{ background: "hsl(var(--accent-amber) / 0.15)" }}
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "hsl(var(--text-primary))" }}
          >
            {t("cta.title1")}{" "}
            <span style={{ color: "hsl(var(--accent-amber))" }}>
              {t("cta.title2")}
            </span>
          </h2>

          {/* Subheading */}
          <p
            className="font-sketch text-2xl md:text-3xl mb-6"
            style={{ color: "hsl(var(--accent-amber))" }}
          >
            {t("cta.subtitle")}
          </p>

          <p
            className="text-lg mb-8 max-w-3xl mx-auto"
            style={{ color: "hsl(var(--text-secondary))" }}
          >
            {t("cta.description")}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "hsl(var(--bg-secondary))",
                  border: "1px solid hsl(var(--border-soft))",
                  color: "hsl(var(--text-secondary))",
                }}
              >
                <CheckCircle2
                  className="w-4 h-4"
                  style={{ color: "hsl(var(--accent-amber))" }}
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Single CTA — Global CTA System (PrimaryCta only) */}
          <div className="flex justify-center">
            <CtaPair size="lg" align="center" primaryPulse />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
