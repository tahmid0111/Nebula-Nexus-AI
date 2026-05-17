import ScrollLink from "@/components/ui/ScrollLink";
import { GraduationCap, Zap, ArrowRight } from "lucide-react";

/**
 * Global CTA System
 * ------------------------------------------------------------------
 * Two locked CTA buttons used everywhere across nebulanexus.ai.
 *
 *   PrimaryCta   -> "Start learning"
 *   SecondaryCta -> "Build my first automation"
 *
 * Both route to the same discovery booking page (/contact). The label
 * is the only differentiator; the destination is shared. Each button
 * fires a distinct analytics event so the entry-CTA can be attributed
 * later (window.dataLayer push if present, otherwise no-op).
 *
 * Use <CtaPair /> wherever a primary + secondary pair is needed.
 * Use <PrimaryCta /> alone wherever only one CTA appears.
 * ------------------------------------------------------------------
 */

const ACCENT = "hsl(var(--accent-amber))";
const ACCENT_RAW = "195 100% 55%";
const DESTINATION = "#contact";

type Size = "md" | "lg";

const trackClick = (label: string) => {
  try {
    type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };
    const w = window as DataLayerWindow;
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({
        event: "cta_click",
        cta_label: label,
        cta_destination: DESTINATION,
      });
    }
  } catch {
    /* noop */
  }
};

const sizeClasses = (size: Size) =>
  size === "lg"
    ? "px-7 py-4 md:px-9 md:py-5 text-base md:text-lg"
    : "px-6 py-3.5 text-base";

interface CtaProps {
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  pulse?: boolean;
}

export const PrimaryCta = ({
  size = "lg",
  fullWidth = false,
  className = "",
  pulse = false,
}: CtaProps) => {
  return (
    <ScrollLink
      to={DESTINATION}
      onClick={() => trackClick("Start learning")}
      data-cta="start-learning"
      aria-label="Start learning — book a discovery call"
      className={`group relative inline-block ${fullWidth ? "w-full" : "w-[80%] sm:w-auto"} ${className}`}
    >
      {pulse && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-xl blur-xl cta-pulse-bg"
          style={{ background: ACCENT, opacity: 0.45 }}
        />
      )}
      <button
        type="button"
        className={`relative w-full inline-flex items-center justify-center gap-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${sizeClasses(size)}`}
        style={{
          backgroundColor: ACCENT,
          color: "hsl(240 45% 6%)",
          boxShadow: `0 10px 30px -10px hsl(${ACCENT_RAW} / 0.55), 0 0 0 1px hsl(${ACCENT_RAW} / 0.4) inset`,
        }}
      >
        <GraduationCap className="w-5 h-5" />
        Start learning
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
      </button>

      <style>{`
        @keyframes cta-pulse {
          0%, 100% { opacity: 0.35; transform: scale(0.98); }
          50%      { opacity: 0.6;  transform: scale(1.04); }
        }
        .cta-pulse-bg { animation: cta-pulse 2.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cta-pulse-bg { animation: none !important; }
        }
      `}</style>
    </ScrollLink>
  );
};

export const SecondaryCta = ({
  size = "lg",
  fullWidth = false,
  className = "",
}: CtaProps) => {
  return (
    <ScrollLink
      to={DESTINATION}
      onClick={() => trackClick("Build my first automation")}
      data-cta="build-first-automation"
      aria-label="Build my first automation — book a discovery call"
      className={`group relative inline-block ${fullWidth ? "w-full" : "w-[80%] sm:w-auto"} ${className}`}
    >
      <button
        type="button"
        className={`relative w-full inline-flex items-center justify-center gap-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${sizeClasses(size)}`}
        style={{
          backgroundColor: "transparent",
          color: ACCENT,
          border: `1px solid ${ACCENT}`,
          boxShadow: `0 0 0 1px hsl(${ACCENT_RAW} / 0.15) inset`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = ACCENT;
          e.currentTarget.style.color = "hsl(240 45% 6%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = ACCENT;
        }}
      >
        <Zap className="w-5 h-5" />
        Build my first automation
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
      </button>
    </ScrollLink>
  );
};

/* ------------------------------------------------------------------
 * Text-link variant — used in dense layouts (e.g. Services section rows).
 * Same labels, same destination, same analytics events.
 * ------------------------------------------------------------------ */
interface CtaLinkProps {
  className?: string;
}

const ctaLinkBaseClass =
  "cta-text-link group inline-flex items-center gap-2 font-semibold no-underline";

export const PrimaryCtaLink = ({ className = "" }: CtaLinkProps) => (
  <ScrollLink
    to={DESTINATION}
    onClick={() => trackClick("Start learning")}
    data-cta="start-learning"
    aria-label="Start learning — book a discovery call"
    className={`${ctaLinkBaseClass} ${className}`}
    style={{ color: ACCENT, fontSize: 15, lineHeight: 1 }}
  >
    <span className="cta-text-link__label">Start learning</span>
    <span aria-hidden className="cta-text-link__arrow">→</span>
    <style>{`
      .cta-text-link {
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: border-color 200ms cubic-bezier(0.65, 0, 0.35, 1);
      }
      .cta-text-link__arrow {
        display: inline-block;
        transition: transform 200ms cubic-bezier(0.65, 0, 0.35, 1);
      }
      @media (hover: hover) and (pointer: fine) {
        .cta-text-link:hover { border-bottom-color: ${ACCENT}; }
        .cta-text-link:hover .cta-text-link__arrow { transform: translateX(4px); }
      }
      .cta-text-link:focus-visible {
        outline: 2px solid ${ACCENT};
        outline-offset: 4px;
        border-radius: 2px;
      }
      @media (prefers-reduced-motion: reduce) {
        .cta-text-link, .cta-text-link__arrow { transition: none !important; }
      }
    `}</style>
  </ScrollLink>
);

export const SecondaryCtaLink = ({ className = "" }: CtaLinkProps) => (
  <ScrollLink
    to={DESTINATION}
    onClick={() => trackClick("Build my first automation")}
    data-cta="build-first-automation"
    aria-label="Build my first automation — book a discovery call"
    className={`${ctaLinkBaseClass} ${className}`}
    style={{ color: ACCENT, fontSize: 15, lineHeight: 1 }}
  >
    <span className="cta-text-link__label">Build my first automation</span>
    <span aria-hidden className="cta-text-link__arrow">→</span>
  </ScrollLink>
);

interface CtaPairProps {
  size?: Size;
  align?: "center" | "start";
  className?: string;
  primaryPulse?: boolean;
}

export const CtaPair = ({
  size = "lg",
  align = "center",
  className = "",
  primaryPulse = false,
}: CtaPairProps) => {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div
      className={`flex flex-col sm:flex-row items-center ${justify} gap-4 sm:gap-5 ${className}`}
    >
      <PrimaryCta size={size} pulse={primaryPulse} />
      <SecondaryCta size={size} />
    </div>
  );
};

export default CtaPair;
