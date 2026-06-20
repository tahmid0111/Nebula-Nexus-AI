import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PrimaryCta, SecondaryCta } from "@/components/ui/CtaButtons";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.plan1.name"),
      price: t("pricing.plan1.price"),
      period: t("pricing.plan1.period"),
      description: t("pricing.plan1.description"),
      features: [
        t("pricing.plan1.feature1"),
        t("pricing.plan1.feature2"),
        t("pricing.plan1.feature3"),
        t("pricing.plan1.feature4"),
        t("pricing.plan1.feature5"),
      ],
      popular: true,
    },
    {
      name: t("pricing.plan2.name"),
      price: t("pricing.plan2.price"),
      period: "",
      description: t("pricing.plan2.description"),
      features: [
        t("pricing.plan2.feature1"),
        t("pricing.plan2.feature2"),
        t("pricing.plan2.feature3"),
        t("pricing.plan2.feature4"),
        t("pricing.plan2.feature5"),
        t("pricing.plan2.feature6"),
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: "hsl(var(--bg-primary))" }}
    >
      <div className="container-custom relative z-10">
        <SectionHeading
          badge={t("pricing.badge")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="relative pt-5"
            >
              {plan.popular && (
                <>
                  {/* Pulsing accent glow behind recommended tier */}
                  <div
                    className="landing-pulse pointer-events-none absolute inset-0 -z-10 rounded-3xl blur-2xl"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, hsl(var(--accent-amber) / 0.55), transparent 70%)",
                    }}
                  />
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg"
                    style={{
                      backgroundColor: "hsl(var(--accent-amber))",
                      color: "hsl(240 45% 6%)",
                    }}
                  >
                    <ShieldCheck className="w-3 h-3 shrink-0" />
                    {t("pricing.startHere")}
                  </span>
                </>
              )}

              <div
                className="group relative h-full rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: "hsl(var(--bg-secondary))",
                  border: plan.popular
                    ? "1px solid hsl(var(--accent-amber) / 0.85)"
                    : "1px solid hsl(var(--border-soft))",
                  boxShadow: plan.popular
                    ? "0 24px 80px -25px hsl(var(--accent-amber) / 0.55), inset 0 1px 0 hsl(var(--accent-amber) / 0.15)"
                    : "0 8px 40px -15px hsl(var(--accent-amber) / 0.12)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "hsl(var(--text-primary))" }}
                >
                  {plan.name}
                </h3>

                {plan.price && (
                  <div className="mb-4">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "hsl(var(--accent-amber))" }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className="ml-2 rtl:mr-2 rtl:ml-0"
                        style={{ color: "hsl(var(--text-tertiary))" }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>
                )}

                <p
                  className="mb-6"
                  style={{ color: "hsl(var(--text-secondary))" }}
                >
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "hsl(var(--text-primary) / 0.92)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: "hsl(var(--accent-amber) / 0.22)",
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{ color: "hsl(var(--accent-amber))" }}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center">
                  {plan.popular ? (
                    <PrimaryCta size="md" fullWidth />
                  ) : (
                    <SecondaryCta size="md" fullWidth />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
