import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorks from "@/components/sections/HowItWorks";

import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="landing-dark min-h-screen bg-background">
      <div className="noise-overlay" />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorks />

        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
