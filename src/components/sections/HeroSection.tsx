import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CtaPair } from "@/components/ui/CtaButtons";

const ACCENT = "hsl(195 100% 55%)";
const ACCENT_GLOW = "hsl(195 100% 55% / 0.45)";

/* ---------- Traveling-letter title text ----------
 * Renders `text` with one character highlighted in `color` at any given moment.
 * The highlight starts on the LAST visible (non-space) character, then advances
 * one step every `stepMs` toward the FIRST character, pauses for `pauseMs`,
 * and loops forever. Spaces are skipped so the highlight is always on a glyph.
 */
const TravelingLetterText = ({
  text,
  color,
  stepMs = 120,
  pauseMs = 500,
  disabled = false,
}: {
  text: string;
  color: string;
  stepMs?: number;
  pauseMs?: number;
  disabled?: boolean;
}) => {
  // Indices of non-space characters, in right-to-left order (last char first).
  const visibleIdx: number[] = [];
  for (let i = text.length - 1; i >= 0; i--) {
    if (text[i] !== " ") visibleIdx.push(i);
  }

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (disabled || visibleIdx.length === 0) return;
    let cancelled = false;
    let timer: number | undefined;

    const tick = () => {
      if (cancelled) return;
      setStep((s) => {
        const next = s + 1;
        // After completing a full pass (going past the first char), pause.
        if (next >= visibleIdx.length) {
          timer = window.setTimeout(() => {
            if (!cancelled) setStep(0);
          }, pauseMs);
          return s; // hold on last position briefly
        }
        timer = window.setTimeout(tick, stepMs);
        return next;
      });
    };

    timer = window.setTimeout(tick, stepMs);
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled, text, stepMs, pauseMs]);

  const activeIdx = disabled ? -1 : visibleIdx[Math.min(step, visibleIdx.length - 1)];

  return (
    <>
      {text.split("").map((ch, i) => {
        const isSpace = ch === " ";
        const isActive = i === activeIdx;
        return (
          <span
            key={i}
            style={{
              color: isActive ? color : undefined,
              textShadow: isActive ? `0 0 18px ${color}` : undefined,
              transition: "color 120ms linear, text-shadow 120ms linear",
              whiteSpace: isSpace ? "pre" : undefined,
            }}
          >
            {ch}
          </span>
        );
      })}
    </>
  );
};

/* ---------- Hero Square-Grid Background ----------
 * A static grid of perfect 150×150 squares formed by vertical + horizontal
 * lines. The grid:
 *   - Fades to transparent in the center (radial mask) so text stays clean.
 *   - Fades in once on initial load (CSS keyframe), then stays static forever.
 *   - Has zero hover, parallax, or scroll behavior.
 * Lines use `var(--accent-muted)` only — no hardcoded colors.
 */
const CELL = 150;

const SquareGridBackground = ({ reduced }: { reduced: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // Track real section pixel size so the 150px squares stay perfectly square
  // regardless of viewport. Using actual pixel dimensions for the SVG viewBox
  // means `preserveAspectRatio` doesn't distort the grid.
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.max(320, Math.round(r.width)), h: Math.max(320, Math.round(r.height)) });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Build vertical and horizontal line coordinates at exact 150px intervals.
  const verticals: number[] = [];
  const horizontals: number[] = [];
  if (size) {
    for (let x = 0; x <= size.w; x += CELL) verticals.push(x);
    // Always cap a line on the right/bottom edges so corners are never empty.
    if (verticals[verticals.length - 1] !== size.w) verticals.push(size.w);

    for (let y = 0; y <= size.h; y += CELL) horizontals.push(y);
    if (horizontals[horizontals.length - 1] !== size.h) horizontals.push(size.h);
  }

  return (
    <div
      ref={containerRef}
      className="hero-grid-layer"
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {size && (
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="xMidYMid slice"
          style={{
            display: "block",
            opacity: reduced ? 1 : 0,
            animation: reduced
              ? undefined
              : "hero-grid-fadein 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
          }}
        >
          <defs>
            {/* Radial mask: center transparent (lines invisible), edges opaque */}
            <radialGradient id="hero-grid-mask-grad" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="25%" stopColor="#000" stopOpacity="1" />
              <stop offset="55%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="1" />
            </radialGradient>
            <mask id="hero-grid-mask" maskUnits="userSpaceOnUse">
              <rect width={size.w} height={size.h} fill="url(#hero-grid-mask-grad)" />
            </mask>
          </defs>

          {/* All lines share one <g> so stroke/opacity are set once */}
          <g
            className="hero-grid-lines"
            stroke="var(--accent-muted)"
            strokeWidth={1}
            strokeLinecap="butt"
            mask="url(#hero-grid-mask)"
            shapeRendering="crispEdges"
          >
            {verticals.map((x) => (
              <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={size.h} />
            ))}
            {horizontals.map((y) => (
              <line key={`h-${y}`} x1={0} y1={y} x2={size.w} y2={y} />
            ))}
          </g>
        </svg>
      )}

      {/* Local styles: opacity (with mobile reduction), one-shot fade, reduced-motion */}
      <style>{`
        .hero-grid-layer .hero-grid-lines { opacity: 0.30; }
        @media (max-width: 767px) {
          .hero-grid-layer .hero-grid-lines { opacity: 0.22; }
        }
        @keyframes hero-grid-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-grid-layer svg { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
};

/* ---------- Hero Section ---------- */
const HeroSection = () => {
  const prefersReduced = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
    return () => mql.removeEventListener("change", sync);
  }, []);

  void isMobile;
  void isTouch;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(240 40% 14%) 0%, hsl(240 40% 6%) 55%, hsl(240 45% 4%) 100%)",
      }}
    >
      {/* Square-grid SVG background — first child, behind text */}
      <SquareGridBackground reduced={!!prefersReduced} />


      {/* Subtle noise / grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          zIndex: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Drifting ambient orbs (desktop/tablet only) */}
      {!prefersReduced && !isMobile && (
        <>
          <div
            className="pointer-events-none absolute rounded-full blur-[140px] opacity-[0.18]"
            style={{
              zIndex: 0,
              background: ACCENT,
              width: 560,
              height: 560,
              top: "10%",
              left: "8%",
              animation: "hero-orb-a 55s ease-in-out infinite",
            }}
          />
          <div
            className="pointer-events-none absolute rounded-full blur-[160px] opacity-[0.14]"
            style={{
              zIndex: 0,
              background: ACCENT,
              width: 620,
              height: 620,
              top: "30%",
              right: "5%",
              animation: "hero-orb-b 68s ease-in-out infinite",
            }}
          />
          <div
            className="pointer-events-none absolute rounded-full blur-[180px] opacity-[0.10]"
            style={{
              zIndex: 0,
              background: "hsl(195 100% 65%)",
              width: 500,
              height: 500,
              bottom: "5%",
              left: "35%",
              animation: "hero-orb-c 48s ease-in-out infinite",
            }}
          />
        </>
      )}

      {/* Foreground content */}
      <div className="relative z-10 pt-32 pb-20 w-full px-4 sm:px-6">
        <div className="relative mx-auto text-center w-full max-w-[92vw] lg:max-w-[1400px]">
          {/* Title Line 1 — with a single amber letter that travels right→left, looping */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-bold leading-[1.05] text-white text-balance"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="lg:whitespace-nowrap inline-block">
              <TravelingLetterText
                text="We train your employees into AI experts."
                color={ACCENT}
                stepMs={120}
                pauseMs={500}
                disabled={!!prefersReduced}
              />
            </span>
          </motion.h1>


          {/* Title Line 2 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-3 font-bold leading-[1.05] text-white text-balance"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="lg:whitespace-nowrap inline-block">
              Or we build the automations for you.
            </span>
          </motion.h2>

          {/* Title Line 3 — punchline stamp */}
          <div className="mt-5 md:mt-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.95,
                type: "spring",
                stiffness: 240,
                damping: 14,
              }}
              className="relative inline-block"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full blur-2xl"
                style={{
                  background: ACCENT_GLOW,
                  animation: prefersReduced ? undefined : "hero-stamp-glow 3s ease-in-out infinite",
                }}
              />
              <span
                className="inline-block font-extrabold"
                style={{
                  color: ACCENT,
                  fontSize: "clamp(1.4rem, 3.2vw, 3rem)",
                  letterSpacing: "-0.01em",
                  textShadow: "0 0 24px hsl(195 100% 55% / 0.5)",
                  animation: prefersReduced ? undefined : "hero-stamp-scale 3s ease-in-out infinite",
                }}
              >
                In 7 days.
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.55, ease: "easeOut" }}
            className="mx-auto mt-8 md:mt-10 text-center text-white/70 leading-relaxed"
            style={{
              maxWidth: 720,
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
            }}
          >
            An <span className="text-white/90 font-medium">8-module workshop</span> that turns your
            employees into working AI experts — and ships{" "}
            <span className="text-white/90 font-medium">3 automations</span> for your company before
            they graduate, or you don't pay.
          </motion.p>

          {/* CTAs — Global CTA System */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0, ease: "easeOut" }}
            className="mt-10 md:mt-12"
          >
            <CtaPair size="lg" align="center" primaryPulse={!prefersReduced} />
          </motion.div>
        </div>
      </div>

      {/* Local keyframes */}
      <style>{`
        @keyframes hero-stamp-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.08); }
        }
        @keyframes hero-stamp-scale {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.02); }
        }
        @keyframes hero-cta-pulse {
          0%, 100% { opacity: 0.35; transform: scale(0.98); }
          50%      { opacity: 0.6;  transform: scale(1.04); }
        }
        @keyframes hero-orb-a {
          0%, 100% { transform: translate(0, 0); }
          25%      { transform: translate(80px, 60px); }
          50%      { transform: translate(40px, 120px); }
          75%      { transform: translate(-60px, 40px); }
        }
        @keyframes hero-orb-b {
          0%, 100% { transform: translate(0, 0); }
          33%      { transform: translate(-90px, 70px); }
          66%      { transform: translate(50px, -60px); }
        }
        @keyframes hero-orb-c {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(70px, -80px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hero-orb-"], [style*="hero-stamp-"], [style*="hero-cta-pulse"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
