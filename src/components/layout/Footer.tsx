import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollLink from "@/components/ui/ScrollLink";
import nebulaLogo from "@/assets/nebulalogo.jpeg";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.home"), to: "#top" },
    { name: t("nav.services"), to: "#services" },
    { name: t("nav.pricing"), to: "#pricing" },
  ];

  const services = [
    t("footer.service1"),
    t("footer.service2"),
    t("footer.service3"),
    t("footer.service4"),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <ScrollLink to="#top" className="flex items-center gap-3 group mb-6">
              <img
                src={nebulaLogo}
                alt="Nebula Nexus AI"
                className="w-12 h-12 rounded-xl shadow-md"
              />
              <span className="text-2xl font-bold">
                Nebula<span className="gradient-text">Nexus</span>
              </span>
            </ScrollLink>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/laith-h7771-nn/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.ourServices")}</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to="#services"
                    className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-t border-border/50 flex flex-wrap gap-6 justify-center text-base text-muted-foreground">
          <a href="mailto:laith@nebulanexus.ai" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            laith@nebulanexus.ai
          </a>
          <a href="tel:+18147770159" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +1 (814) 777-0159
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            NYC, US
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-muted-foreground">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terms-conditions" className="hover:text-foreground transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
