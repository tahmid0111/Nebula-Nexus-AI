import { motion } from "framer-motion";
import { Megaphone, Phone, Settings, UserCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const employees = [
  {
    number: 1,
    icon: Megaphone,
    titleKey: "employees.marketing.title",
    subtitleKey: "employees.marketing.subtitle",
    features: [
      "employees.marketing.f1",
      "employees.marketing.f2",
      "employees.marketing.f3",
    ],
  },
  {
    number: 2,
    icon: Phone,
    titleKey: "employees.sales.title",
    subtitleKey: "employees.sales.subtitle",
    features: [
      "employees.sales.f1",
      "employees.sales.f2",
      "employees.sales.f3",
      "employees.sales.f4",
    ],
  },
  {
    number: 3,
    icon: Settings,
    titleKey: "employees.operations.title",
    subtitleKey: "employees.operations.subtitle",
    features: [
      "employees.operations.f1",
      "employees.operations.f2",
      "employees.operations.f3",
      "employees.operations.f4",
    ],
  },
  {
    number: 4,
    icon: UserCheck,
    titleKey: "employees.chiefOfStaff.title",
    subtitleKey: "employees.chiefOfStaff.subtitle",
    features: [
      "employees.chiefOfStaff.f1",
      "employees.chiefOfStaff.f2",
    ],
  },
];

const ServicesOverview = () => {
  const { t } = useLanguage();

  return (
    <section
      className="section-padding relative overflow-hidden"
      id="services"
      style={{ backgroundColor: "hsl(var(--bg-primary))" }}
    >
      {/* Subtle ambient amber wash to tie back to hero */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.10]"
        style={{ background: "hsl(var(--accent-amber))" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-2 sm:px-4 lg:px-6">
        <SectionHeading
          badge={t("employees.badge")}
          title={t("employees.title")}
          subtitle={t("employees.trialNote")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {employees.map((emp, idx) => (
            <motion.div
              key={emp.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 md:p-8 lg:p-10 rounded-3xl border transition-all duration-500 ease-out overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "hsl(var(--bg-secondary))",
                borderColor: "hsl(var(--border-soft))",
              }}
            >
              {/* Shine sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              {/* Hover accent border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px hsl(var(--accent-amber) / 0.55), 0 18px 60px -20px hsl(var(--accent-amber) / 0.35)",
                }}
              />

              {/* Glow orb on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: "hsl(var(--accent-amber) / 0.35)" }}
              />

              {/* Header */}
              <div className="flex items-start gap-6 mb-8 relative">
                <div
                  className="w-18 h-18 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: "hsl(var(--bg-tertiary))",
                    border: "1px solid hsl(var(--border-soft))",
                  }}
                >
                  <emp.icon
                    className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "hsl(var(--accent-amber))" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-bold text-2xl md:text-3xl lg:text-4xl font-sketch transition-colors duration-300"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {t(emp.titleKey)}
                  </h3>
                  <p
                    className="text-lg md:text-xl italic mt-2 leading-relaxed"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    {t(emp.subtitleKey)}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-5 mt-8 relative">
                {emp.features.map((fKey, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-[22px] leading-relaxed"
                    style={{ color: "hsl(var(--text-secondary))" }}
                  >
                    <CheckCircle2
                      className="w-7 h-7 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "hsl(var(--accent-amber))" }}
                    />
                    <span>{t(fKey)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
