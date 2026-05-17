import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollLink, { scrollToHash } from "@/components/ui/ScrollLink";
import nebulaLogo from "@/assets/nebulalogo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), to: "#top" },
    { name: t("nav.services"), to: "#services" },
    { name: t("nav.pricing"), to: "#pricing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["pricing", "services"];
      let current = "#top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = `#${id}`;
          break;
        }
      }
      setActiveHash(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNav = (to: string) => {
    // If we're not on the home route, navigate there first, then scroll.
    if (location.pathname !== "/") {
      const hash = to === "#top" ? "" : to;
      navigate("/" + hash);
      // After navigation, scroll to the section (or top) on next tick
      setTimeout(() => {
        if (to === "#top" || !hash) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToHash(to);
        }
      }, 50);
      return;
    }
    if (to === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "/");
    } else {
      scrollToHash(to);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#top");
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src={nebulaLogo}
                alt="Nebula Nexus AI"
                className="w-10 h-10 rounded-xl shadow-md"
              />
              <span className="text-2xl font-bold">
                Nebula<span className="gradient-text">Nexus</span>
              </span>
            </a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = activeHash === link.to;
                return (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.to);
                    }}
                    className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-200 relative group ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-muted rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-bg group-hover:w-3/4 transition-all duration-300" />
                  </a>
                );
              })}
            </nav>

            {/* Right Side - CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ScrollLink to="#contact">
                <Button className="gradient-bg hover-glow text-white font-semibold px-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t("nav.bookConsultation")}
                </Button>
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border/50 p-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.to);
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-3 rounded-lg text-lg font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  >
                    {link.name}
                  </a>
                ))}
                <ScrollLink
                  to="#contact"
                  className="mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full gradient-bg hover-glow text-white font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t("nav.bookConsultation")}
                  </Button>
                </ScrollLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
