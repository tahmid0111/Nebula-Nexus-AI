import { useEffect } from "react";

const ContactSection = () => {
  // Ensure hash navigation lands at top of section
  useEffect(() => {
    if (window.location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "hsl(var(--bg-secondary))" }}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "hsl(var(--text-primary))" }}
          >
            Book your discovery call
          </h2>
          <p
            className="text-lg"
            style={{ color: "hsl(var(--text-secondary))" }}
          >
            30 minutes. We map your 3 automations. You decide what's next.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
          <iframe
            src="https://cal.com/nebulanexus.ai/30min"
            width="100%"
            height="700"
            frameBorder="0"
            className="w-full"
            title="Book a consultation with Nebula Nexus AI"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
