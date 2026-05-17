import { createContext, useContext, ReactNode } from "react";

interface LanguageContextType {
  language: "en";
  setLanguage: (lang: "en") => void;
  t: (key: string) => string;
  isRTL: false;
}

const translations: Record<string, string> = {
  // Header
  "nav.home": "Home",
  "nav.services": "How it works",
  "nav.pricing": "Pricing",
  "nav.bookConsultation": "Book a discovery call",

  // Hero Section
  "hero.trustedBy": "Trusted by 20+ Companies",
  "hero.title1": "You Know AI Is the",
  "hero.title2": "Future",
  "hero.title3": "We Give You the Roadmap",
  "hero.subtitle": "Get a <strong>Free AI strategy</strong> made for you today, that shows exactly how to set up AI in your company.",
  "hero.ctaLabel": "Get Free AI Roadmap",
  "hero.videoText": "2 minute video to understand everything",

  // Services Section
  // Employees Section
  "employees.badge": "The 4 Employees",
  "employees.title": "Hire One. Or Hire All Four.",
  "employees.subtitle": "Each employee works on its own. Start with the one that fixes your biggest headache — add the others when you're ready.",
  "employees.trialNote": "Every employee comes with a 14-day free trial. If they don't pull their weight, you don't pay.",

  // Marketing Employee
  "employees.marketing.title": "The Marketing Employee",
  "employees.marketing.subtitle": "Brings new customers to your business — every single day.",
  "employees.marketing.f1": "Runs your marketing campaigns: Facebook ads, SEO, and email",
  "employees.marketing.f2": "Runs lead reactivation campaigns that wake up old leads and turn them into paying customers",
  "employees.marketing.f3": "Reaches out to interested people and books them straight into your sales team's calendar",

  // Sales Employee
  "employees.sales.title": "The Sales Employee",
  "employees.sales.subtitle": "Answers every call. Talks to every lead. Books every appointment. 24/7.",
  "employees.sales.f1": "AI receptionist that picks up every phone call, even at 2am",
  "employees.sales.f2": "Knows everything about your company and answers any detailed question — and transfers to a human whenever the caller asks or the situation needs it",
  "employees.sales.f3": "The second someone fills out your form or shows interest, reaches out before they cool off",
  "employees.sales.f4": "Books appointments straight into your calendar",

  // Operations Employee
  "employees.operations.title": "The Operations Employee",
  "employees.operations.subtitle": "Handles all the boring, repetitive work that eats your team's day.",
  "employees.operations.f1": "Onboards new clients automatically — welcome email, contract, payment link, kickoff details, all done",
  "employees.operations.f2": "Sends invoices the moment a job is done and chases unpaid ones politely until the money lands in your account",
  "employees.operations.f3": "Generates contracts, quotes, and proposals in minutes instead of hours",
  "employees.operations.f4": "Follows up with every customer after a job to collect a review",

  // Chief of Staff
  "employees.chiefOfStaff.title": "The Chief of Staff",
  "employees.chiefOfStaff.subtitle": "Built for business owners and managers. Your personal right hand.",
  "employees.chiefOfStaff.f1": "Helps you manage all your employees — even if you run multiple companies at once",
  "employees.chiefOfStaff.f2": "Personally trained on how you work, and takes over every manual and boring task you do every day",

  // Legacy niche keys (for niche pages)
  "niches.backToAll": "Back to all industries",
  "niches.freeTrial": "Start Free 7-Day Trial",
  "niches.tryRealTime": "Try It Live Now",

  // Real Estate
  "niches.realEstate.title": "Real Estate",
  "niches.realEstate.desc": "Close more deals with AI that never sleeps — from lead capture to CRM automation.",
  "niches.realEstate.s1.title": "AI Receptionist",
  "niches.realEstate.s1.desc": "A human-grade AI voice agent that answers every call instantly, qualifies leads, and books showings 24/7. Never miss a buyer or seller inquiry again.",
  "niches.realEstate.s1.f1": "Answers calls in under 2 seconds, day or night",
  "niches.realEstate.s1.f2": "Books property showings directly into your calendar",
  "niches.realEstate.s1.f3": "Sounds indistinguishable from a real receptionist",
  "niches.realEstate.s2.title": "Lead Qualification System",
  "niches.realEstate.s2.desc": "Automatically scores and qualifies every incoming lead based on budget, timeline, and buying intent — so your agents only focus on hot prospects.",
  "niches.realEstate.s2.f1": "Scores leads by budget, timeline, and intent",
  "niches.realEstate.s2.f2": "Routes qualified leads to the right agent instantly",
  "niches.realEstate.s2.f3": "Eliminates time wasted on unqualified prospects",
  "niches.realEstate.s3.title": "Cold Caller Voice Agent",
  "niches.realEstate.s3.desc": "An AI-powered outbound calling agent that reaches out to expired listings, FSBOs, and cold leads — having natural conversations that book appointments.",
  "niches.realEstate.s3.f1": "Makes hundreds of outbound calls daily on autopilot",
  "niches.realEstate.s3.f2": "Handles objections with natural conversation flow",
  "niches.realEstate.s3.f3": "Books listing appointments directly in your calendar",
  "niches.realEstate.s4.title": "AI-Powered CRM",
  "niches.realEstate.s4.desc": "A smart CRM that auto-updates records, triggers follow-ups, and gives you a real-time pipeline view — no manual data entry required.",
  "niches.realEstate.s4.f1": "Auto-logs calls, texts, and emails to contact records",
  "niches.realEstate.s4.f2": "Triggers smart follow-up sequences automatically",
  "niches.realEstate.s4.f3": "Real-time pipeline dashboard with AI insights",

  // Coaches
  "niches.coaches.title": "Coaches",
  "niches.coaches.desc": "Scale your coaching business with AI that handles leads, bookings, and content creation.",
  "niches.coaches.s1.title": "AI Receptionist",
  "niches.coaches.s1.desc": "Never miss a potential client. Our AI receptionist answers calls, qualifies coaching leads, and books discovery sessions automatically.",
  "niches.coaches.s1.f1": "Professional greeting customized to your brand voice",
  "niches.coaches.s1.f2": "Qualifies leads based on your ideal client criteria",
  "niches.coaches.s1.f3": "Books discovery calls directly into your schedule",
  "niches.coaches.s2.title": "Lead Qualification System",
  "niches.coaches.s2.desc": "Automatically filter and prioritize leads so you only spend time with people who are ready to invest in coaching.",
  "niches.coaches.s2.f1": "Customizable qualification criteria for your niche",
  "niches.coaches.s2.f2": "Automated nurture sequences for cold leads",
  "niches.coaches.s2.f3": "Priority alerts for high-value prospects",
  "niches.coaches.s3.title": "AI Avatar",
  "niches.coaches.s3.desc": "Create a digital version of yourself that can deliver personalized video content, welcome messages, and training previews at scale.",
  "niches.coaches.s3.f1": "Personalized video messages for each prospect",
  "niches.coaches.s3.f2": "Scales your personal brand without your time",
  "niches.coaches.s3.f3": "Increases engagement and conversion rates by 3x",

  // Marketing Agencies
  "niches.agencies.title": "Marketing Agencies",
  "niches.agencies.desc": "Partner with us to offer AI services to your clients and unlock a new revenue stream.",
  "niches.agencies.s1.title": "Partnership Program",
  "niches.agencies.s1.desc": "White-label our AI solutions under your brand. Offer cutting-edge AI automation to your clients while we handle all the technical implementation.",
  "niches.agencies.s1.f1": "White-label AI solutions under your agency brand",
  "niches.agencies.s1.f2": "Revenue share on every client you bring",
  "niches.agencies.s1.f3": "Full technical support and implementation handled by us",

  // Clinics
  "niches.clinics.title": "Clinics",
  "niches.clinics.desc": "Reduce no-shows, automate scheduling, and keep patients engaged with AI-powered systems.",
  "niches.clinics.s1.title": "Appointment Setter Receptionist",
  "niches.clinics.s1.desc": "An AI receptionist built for healthcare. It answers patient calls, checks availability, and books appointments — all while maintaining HIPAA-friendly protocols.",
  "niches.clinics.s1.f1": "Handles patient inquiries with empathy and accuracy",
  "niches.clinics.s1.f2": "Real-time calendar integration for instant booking",
  "niches.clinics.s1.f3": "Manages new patient intake information",
  "niches.clinics.s2.title": "Appointment Reminder",
  "niches.clinics.s2.desc": "Automated voice and text reminders that dramatically reduce no-shows. Patients can confirm, reschedule, or cancel with a simple response.",
  "niches.clinics.s2.f1": "Reduces no-show rates by up to 60%",
  "niches.clinics.s2.f2": "Multi-channel: voice calls, SMS, and email",
  "niches.clinics.s2.f3": "Easy one-tap confirm or reschedule for patients",
  "niches.clinics.s3.title": "Follow-Up System",
  "niches.clinics.s3.desc": "Automated post-visit follow-ups that check on patient recovery, gather feedback, and prompt rebooking — building long-term patient loyalty.",
  "niches.clinics.s3.f1": "Personalized post-visit check-in calls and messages",
  "niches.clinics.s3.f2": "Collects patient satisfaction feedback automatically",
  "niches.clinics.s3.f3": "Prompts rebooking for recurring treatments",

  // Law Firms
  "niches.law.title": "Law Firms",
  "niches.law.desc": "Capture every potential client call and qualify cases automatically with AI.",
  "niches.law.s1.title": "AI Receptionist",
  "niches.law.s1.desc": "A professional AI receptionist trained for legal intake. It answers calls, gathers case details, and schedules consultations — even after business hours.",
  "niches.law.s1.f1": "Professional legal intake on every call",
  "niches.law.s1.f2": "Captures critical case details and contact information",
  "niches.law.s1.f3": "Available 24/7 including weekends and holidays",
  "niches.law.s2.title": "Lead Qualification System",
  "niches.law.s2.desc": "Automatically assess case viability and client fit before they ever reach an attorney — saving billable hours and improving case quality.",
  "niches.law.s2.f1": "Pre-screens cases based on your practice area criteria",
  "niches.law.s2.f2": "Prioritizes high-value cases for immediate attorney review",
  "niches.law.s2.f3": "Reduces time spent on non-viable consultations",

  // Local Businesses
  "niches.local.title": "Local Businesses",
  "niches.local.desc": "Dominate your local market with AI-powered websites, after-hours support, and reputation management.",
  "niches.local.s1.title": "AI Website",
  "niches.local.s1.desc": "A conversion-optimized website with built-in AI chatbot that engages visitors, answers questions, and captures leads — turning browsers into customers.",
  "niches.local.s1.f1": "AI chatbot trained on your business information",
  "niches.local.s1.f2": "Converts website visitors into booked appointments",
  "niches.local.s1.f3": "SEO-optimized to rank higher in local searches",
  "niches.local.s2.title": "After Hours Agent",
  "niches.local.s2.desc": "Never lose a customer to a missed call again. Our AI agent handles calls outside business hours, takes messages, and books appointments for the next day.",
  "niches.local.s2.f1": "Captures leads that would otherwise go to competitors",
  "niches.local.s2.f2": "Professional call handling matching your brand",
  "niches.local.s2.f3": "Morning summary of all after-hours interactions",
  "niches.local.s3.title": "Reputation Manager",
  "niches.local.s3.desc": "Automatically request reviews from happy customers, monitor online reputation, and respond to reviews — building the 5-star presence that drives local traffic.",
  "niches.local.s3.f1": "Automated review requests after positive interactions",
  "niches.local.s3.f2": "AI-powered responses to online reviews",
  "niches.local.s3.f3": "Real-time reputation monitoring and alerts",

  // Testimonials Section
  "testimonials.badge": "Proof",
  "testimonials.title": "Real teams. 7 days. Live automations.",
  "testimonials.subtitle": "What founders say after their team ships 3 automations in a week.",
  "testimonials.trustedBy": "Teams who shipped 3 automations in 7 days",
  "testimonials.1.content": "Day 7, my team had 3 automations live and knew how to build the next ten themselves. No retainer, no dependency. Best $997 I've ever spent.",
  "testimonials.2.content": "We picked Built Automations. They audited the company, shipped 3 automations in a week, and the deadline held. The savings started the same month.",
  "testimonials.3.content": "I expected a workshop. I got a team that suddenly writes production-grade prompts and ships real work. The 7-day promise is real.",

  // Pricing Section
  "pricing.badge": "Simple pricing",
  "pricing.title": "Two paths. 7-day delivery.",
  "pricing.subtitle": "Pick the path that fits your team. Both ship live automations in 7 days.",
  "pricing.plan1.name": "Workshop",
  "pricing.plan1.price": "$997",
  "pricing.plan1.period": "one-time",
  "pricing.plan1.description": "We train your team to build AI automations themselves — in 7 days.",
  "pricing.plan1.feature1": "8 hands-on modules across 7 working days",
  "pricing.plan1.feature2": "Full prompt engineering curriculum",
  "pricing.plan1.feature3": "Your team ships 3 real automations by Day 7",
  "pricing.plan1.feature4": "No retainer, no ongoing fees — you own everything",
  "pricing.plan1.feature5": "Internal capability that compounds long after we leave",
  "pricing.plan2.name": "Built Automations",
  "pricing.plan2.price": "Get a quote",
  "pricing.plan2.description": "We audit, build, and deploy 3 automations end-to-end — in 7 days.",
  "pricing.plan2.feature1": "Full audit of your operations",
  "pricing.plan2.feature2": "3 automations built, deployed, and tested against live data",
  "pricing.plan2.feature3": "Integrated with your existing tools",
  "pricing.plan2.feature4": "Complete documentation handed over",
  "pricing.plan2.feature5": "30 days of post-launch support",
  "pricing.plan2.feature6": "If we miss the 7-day deadline, you don't pay",
  "pricing.startHere": "Most popular",
  "pricing.promise": "Our promise:",
  "pricing.promiseText": "The free consultation provides complete value on its own. You'll walk away with a clear roadmap and deep understanding of AI opportunities for your business—whether or not you choose to work with us further.",

  // CTA Section
  "cta.title1": "Ship 3 automations.",
  "cta.title2": "In 7 days.",
  "cta.subtitle": "Or you don't pay.",
  "cta.description": "Book a 30-minute discovery call. We'll map your highest-ROI automations and tell you straight up which path fits — Workshop or Built.",
  "cta.benefit1": "3 live automations by Day 7",
  "cta.benefit2": "Fixed scope, fixed deadline",
  "cta.benefit3": "Miss the date — you don't pay",

  // Footer
  "footer.description": "We train your team — or build it ourselves. Either way, 3 automations live in 7 days. Or you don't pay.",
  "footer.quickLinks": "Navigate",
  "footer.ourServices": "Two ways to work",
  "footer.service1": "Workshop — train your team in 7 days",
  "footer.service2": "Built Automations — we ship in 7 days",
  "footer.service3": "Prompt engineering curriculum",
  "footer.service4": "30 days post-launch support",
  "footer.copyright": "© 2025 Nebula Nexus AI. All rights reserved.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms & Conditions",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: "en", setLanguage: () => {}, t, isRTL: false }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
