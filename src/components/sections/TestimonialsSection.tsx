import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      content: t("testimonials.1.content"),
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "Growth Labs",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: t("testimonials.2.content"),
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "ScaleUp Co",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: t("testimonials.3.content"),
      rating: 5,
    },
  ];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--bg-secondary))" }}
    >
      {/* Soft accent wash */}
      <div
        className="pointer-events-none absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.08]"
        style={{ background: "hsl(var(--accent-amber))" }}
      />

      <div className="container-custom relative">
        <SectionHeading
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-full rounded-2xl p-6 transition-all duration-300"
              style={{
                backgroundColor: "hsl(var(--bg-tertiary))",
                border: "1px solid hsl(var(--border-soft))",
              }}
            >
              {/* Hover accent border + glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px hsl(var(--accent-amber) / 0.55), 0 14px 40px -18px hsl(var(--accent-amber) / 0.35)",
                }}
              />

              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 w-8 h-8"
                style={{ color: "hsl(var(--accent-amber) / 0.35)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    style={{
                      color: "hsl(var(--accent-amber))",
                      fill: "hsl(var(--accent-amber))",
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className="mb-6 italic relative"
                style={{ color: "hsl(var(--text-secondary))" }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: "2px solid hsl(var(--accent-amber) / 0.4)" }}
                />
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: "hsl(var(--text-primary))" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "hsl(var(--text-tertiary))" }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p
            className="mb-6"
            style={{ color: "hsl(var(--text-tertiary))" }}
          >
            {t("testimonials.trustedBy")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["TechStart", "Growth Labs", "ScaleUp", "InnovateCo", "FutureTech"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-bold"
                  style={{ color: "hsl(var(--text-tertiary) / 0.7)" }}
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
