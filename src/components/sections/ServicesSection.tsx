import { useEffect, useRef } from "react";
import ScrollLink from "@/components/ui/ScrollLink";

/**
 * Services section — layered card composition.
 * Sits below the Hero, above the next section on the landing page.
 *
 * Token mapping (spec → project):
 *   --accent (primary)   -> --accent-amber
 *   --accent (secondary) -> color-mix lighter tint of --accent-amber (no new tokens)
 *   --border             -> --border-soft
 *   --bg-*, --text-*     -> existing tokens, wrapped with hsl()
 *
 * No raw hex values are introduced. All color expressions reference existing
 * tokens, optionally varied via color-mix() / hsl(... / alpha).
 */
const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("in-view");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const card1Bullets = [
    "8 modules delivered hands-on across 7 working days.",
    "Your team ships 3 real automations by the end of the week.",
    "Your employees learn to design, deploy, and maintain future automations on their own.",
    "No retainer. No ongoing fees. You own everything we build.",
  ];

  const card2Bullets = [
    "We audit your operations and find the 3 workflows costing you the most money.",
    "We build, deploy, and test all 3 automations until they're proven to work.",
    "Full documentation handed over so your team can run them from day one.",
    "Delivered in 7 days. If we miss the deadline, you don't pay.",
  ];

  const trackClick = (label: string) => {
    try {
      type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };
      const w = window as DataLayerWindow;
      if (Array.isArray(w.dataLayer)) {
        w.dataLayer.push({
          event: "cta_click",
          cta_label: label,
          cta_destination: "/contact",
        });
      }
    } catch {
      /* noop */
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-headline"
      className="services-section"
    >
      <div className="services-container">
        <header className="services-header">
          <h2 id="services-headline" className="services-headline">
            <span className="services-headline__accent">Two</span> ways to work with us.
          </h2>
        </header>

        <div className="services-grid">
          {/* Card 1 — Workshop / primary CTA */}
          <article
            className="svc-card svc-card--1"
            aria-labelledby="svc-card-1-headline"
          >
            <div className="svc-surface">
              <span aria-hidden className="svc-orb svc-orb--1" />
              <span aria-hidden className="svc-orb svc-orb--2" />
              <span aria-hidden className="svc-dotgrid" />
              <span aria-hidden className="svc-shimmer" />
              <span aria-hidden className="svc-noise" />

              <div className="svc-content">
                <div className="svc-toprow">
                  <span className="svc-pill">Workshop</span>
                  <span className="svc-num" aria-hidden>1</span>
                </div>

                <h3 id="svc-card-1-headline" className="svc-headline">
                  We train your team to use AI.
                </h3>

                <ul className="svc-bullets">
                  {card1Bullets.map((b, i) => (
                    <li key={i} className="svc-bullet">
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="svc-bestif">
                  Best if you want your team to own this long after we leave.
                </p>

                <div className="svc-cta-wrap">
                  <ScrollLink
                    to="#contact"
                    onClick={() => trackClick("Start learning")}
                    data-cta="start-learning"
                    aria-label="Start learning — book a discovery call"
                    className="svc-btn svc-btn--primary"
                  >
                    <span aria-hidden className="svc-btn__shine" />
                    <span className="svc-btn__label">Start learning</span>
                    <span aria-hidden className="svc-btn__arrow">→</span>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 — Built Automations / secondary CTA */}
          <article
            className="svc-card svc-card--2"
            aria-labelledby="svc-card-2-headline"
          >
            <div className="svc-surface">
              <span aria-hidden className="svc-orb svc-orb--1" />
              <span aria-hidden className="svc-orb svc-orb--2" />
              <span aria-hidden className="svc-dotgrid" />
              <span aria-hidden className="svc-shimmer" />
              <span aria-hidden className="svc-noise" />

              <div className="svc-content">
                <div className="svc-toprow">
                  <span className="svc-pill">Built Automations</span>
                  <span className="svc-num" aria-hidden>2</span>
                </div>

                <h3 id="svc-card-2-headline" className="svc-headline">
                  We build the automations for you.
                </h3>

                <ul className="svc-bullets">
                  {card2Bullets.map((b, i) => (
                    <li key={i} className="svc-bullet">
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="svc-bestif">
                  Best if you need results now and don't have time to train anyone.
                </p>

                <div className="svc-cta-wrap">
                  <ScrollLink
                    to="#contact"
                    onClick={() => trackClick("Build my first automation")}
                    data-cta="build-first-automation"
                    aria-label="Build my first automation — book a discovery call"
                    className="svc-btn svc-btn--secondary"
                  >
                    <span aria-hidden className="svc-btn__shine" />
                    <span className="svc-btn__label">Build my first automation</span>
                    <span aria-hidden className="svc-btn__arrow">→</span>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style>{`
        /* ---------- Layout ---------- */
        .services-section {
          position: relative;
          width: 100%;
          padding: 80px 0;
          background-color: hsl(var(--bg-primary));
        }
        @media (min-width: 900px) {
          .services-section { padding: 120px 0; }
        }
        .services-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (min-width: 900px) {
          .services-container { padding: 0 48px; }
        }

        /* ---------- Header ---------- */
        .services-header {
          text-align: center;
          margin: 0 auto 56px;
          opacity: 0;
          transform: translateY(24px);
        }
        @media (min-width: 900px) {
          .services-header { margin-bottom: 80px; }
        }
        .services-section.in-view .services-header {
          animation: svc-fade-up 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          will-change: transform, opacity;
        }
        .services-headline {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: hsl(var(--text-primary));
          margin: 0;
        }
        .services-headline__accent { color: hsl(var(--accent-amber)); }

        /* ---------- Grid ---------- */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          align-items: stretch;
        }
        @media (min-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        /* ---------- Card outer wrapper ---------- */
        .svc-card {
          position: relative;
          border-radius: 24px;
          padding: 1px;
          overflow: hidden;
          isolation: isolate;
          min-height: 640px;
          height: 100%;
          display: flex;
          opacity: 0;
          transform: translateY(32px);
        }
        .services-section.in-view .svc-card--1 {
          animation: svc-fade-up-32 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 200ms forwards;
          will-change: transform, opacity;
        }
        .services-section.in-view .svc-card--2 {
          animation: svc-fade-up-32 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 350ms forwards;
          will-change: transform, opacity;
        }

        /* Animated conic gradient border */
        .svc-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            hsl(var(--accent-amber)) 60deg,
            transparent 120deg,
            transparent 240deg,
            color-mix(in oklab, hsl(var(--accent-amber)) 80%, white) 300deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: svc-border-rotate 8s linear infinite;
          z-index: 1;
          pointer-events: none;
        }
        /* Static base border underneath */
        .svc-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            hsl(var(--border-soft)) 0%,
            hsl(240 15% 22% / 0.25) 50%,
            hsl(var(--border-soft)) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          z-index: 0;
          pointer-events: none;
        }

        /* ---------- Inner surface ---------- */
        .svc-surface {
          position: relative;
          border-radius: 23px;
          padding: 32px;
          min-height: 640px;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 2;
        }
        @media (min-width: 900px) {
          .svc-surface { padding: 48px; }
        }

        /* Cards — brighter radial surface with stronger glow (unified for both cards) */
        .svc-card--1 .svc-surface,
        .svc-card--2 .svc-surface {
          background:
            radial-gradient(
              ellipse 80% 60% at 50% 0%,
              hsl(240 40% 22%) 0%,
              hsl(240 40% 10%) 55%,
              hsl(240 45% 6%) 100%
            );
          background-blend-mode: normal;
          box-shadow:
            inset 0 1px 0 hsl(var(--accent-amber) / 0.15),
            0 24px 80px -20px hsl(var(--accent-amber) / 0.18);
        }

        /* ---------- Floating orbs (hero-style soft drift) ---------- */
        .svc-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: svc-orb-float 20s ease-in-out infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .svc-orb { filter: blur(80px) !important; }
        }
        .svc-orb--1 {
          top: 8%;
          right: -12%;
          width: 320px;
          height: 320px;
          background: radial-gradient(
            circle,
            hsl(var(--accent-amber) / 0.40) 0%,
            transparent 70%
          );
          filter: blur(120px);
          opacity: 1;
          animation-delay: 0s;
        }
        .svc-orb--2 {
          bottom: -15%;
          left: 25%;
          width: 280px;
          height: 280px;
          background: radial-gradient(
            circle,
            hsl(195 100% 65% / 0.25) 0%,
            transparent 70%
          );
          filter: blur(140px);
          opacity: 1;
          animation-delay: -8s;
        }
        @media (max-width: 768px) {
          .svc-orb--1 { width: 210px; height: 210px; }
          .svc-orb--2 { width: 175px; height: 175px; }
        }

        /* ---------- Square grid (hero-style line grid, radial-masked) ---------- */
        .svc-dotgrid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, hsl(var(--accent-amber) / 0.30) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--accent-amber) / 0.30) 1px, transparent 1px);
          background-size: 60px 60px;
          background-position: 0 0;
          -webkit-mask-image: radial-gradient(
            ellipse 60% 55% at 50% 50%,
            transparent 0%,
            #000 70%,
            #000 100%
          );
                  mask-image: radial-gradient(
            ellipse 60% 55% at 50% 50%,
            transparent 0%,
            #000 70%,
            #000 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .svc-dotgrid { background-size: 48px 48px; }
        }

        /* ---------- Top shimmer line ---------- */
        .svc-shimmer {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            hsl(var(--accent-amber)),
            transparent
          );
          opacity: 0.95;
          z-index: 4;
          pointer-events: none;
        }

        /* ---------- Noise overlay ---------- */
        .svc-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px;
          opacity: 0.035;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 3;
        }

        /* ---------- Content ---------- */
        .svc-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Top row */
        .svc-toprow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 16px;
        }

        /* Tag pill */
        .svc-pill {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px 7px 10px;
          background: hsl(var(--accent-amber) / 0.08);
          border: 1px solid hsl(var(--accent-amber) / 0.35);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: hsl(var(--accent-amber));
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.06);
        }
        .svc-pill::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(var(--accent-amber));
          box-shadow:
            0 0 6px hsl(var(--accent-amber) / 0.9),
            0 0 14px hsl(var(--accent-amber) / 0.5);
          animation: svc-pulse 2s infinite;
        }

        /* Large card numeral */
        .svc-num {
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.03em;
          font-variant-numeric: tabular-nums;
          color: hsl(var(--accent-amber));
          opacity: 1;
        }
        @media (min-width: 900px) {
          .svc-num { font-size: 48px; }
        }
        .svc-card--2 .svc-num {
          color: hsl(var(--accent-amber));
        }

        /* Headline */
        .svc-headline {
          font-size: 26px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 32px 0;
          background: linear-gradient(
            180deg,
            hsl(0 0% 100%) 0%,
            hsl(var(--text-primary) / 0.90) 100%
          );
          -webkit-background-clip: text;
                  background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          text-shadow: 0 0 30px hsl(var(--accent-amber) / 0.15);
        }
        @media (min-width: 900px) {
          .svc-headline { font-size: 32px; }
        }

        /* Bullets */
        .svc-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .svc-bullet {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 16px;
          line-height: 1.6;
          color: hsl(var(--text-primary) / 0.95);
          text-shadow: 0 0 12px hsl(var(--accent-amber) / 0.08);
        }
        .svc-bullet::before {
          content: "";
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          margin-top: 9px;
          border-radius: 50%;
          background: hsl(var(--accent-amber));
          box-shadow:
            0 0 6px hsl(var(--accent-amber) / 1.0),
            0 0 16px hsl(var(--accent-amber) / 0.6);
        }

        /* Best-if callout */
        .svc-bestif {
          padding: 16px 20px;
          margin: 0 0 32px 0;
          background: linear-gradient(
            135deg,
            hsl(0 0% 100% / 0.08) 0%,
            hsl(0 0% 100% / 0.03) 100%
          );
          border: 1px solid hsl(0 0% 100% / 0.10);
          border-left: 2px solid hsl(var(--accent-amber));
          border-radius: 0 12px 12px 0;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          font-size: 14px;
          font-style: italic;
          line-height: 1.6;
          color: hsl(var(--text-primary) / 0.95);
        }

        /* CTA wrapper — pinned to bottom */
        .svc-cta-wrap {
          margin-top: auto;
        }

        /* ---------- Buttons ---------- */
        .svc-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          overflow: hidden;
          isolation: isolate;
          transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      background-color 250ms ease,
                      color 250ms ease,
                      border-color 250ms ease;
        }
        .svc-btn:focus-visible {
          outline: 2px solid hsl(var(--accent-amber));
          outline-offset: 4px;
        }
        .svc-btn__arrow {
          display: inline-block;
          transition: transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .svc-btn:hover .svc-btn__arrow { transform: translateX(4px); }

        /* Shine sweep */
        .svc-btn__shine {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -100%;
          width: 60%;
          background: linear-gradient(
            115deg,
            transparent 0%,
            hsl(0 0% 100% / 0.35) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
          pointer-events: none;
          transition: left 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }
        .svc-btn--secondary .svc-btn__shine {
          background: linear-gradient(
            115deg,
            transparent 0%,
            hsl(0 0% 100% / 0.15) 50%,
            transparent 100%
          );
        }
        .svc-btn:hover .svc-btn__shine { left: 120%; }

        /* Primary */
        .svc-btn--primary {
          background: hsl(var(--accent-amber));
          color: hsl(240 45% 6%);
          box-shadow:
            0 10px 30px -10px hsl(var(--accent-amber) / 0.55),
            inset 0 0 0 1px hsl(var(--accent-amber) / 0.4);
        }
        .svc-btn--primary:hover {
          transform: translateY(-1px);
          box-shadow:
            0 14px 36px -10px hsl(var(--accent-amber) / 0.65),
            inset 0 0 0 1px hsl(var(--accent-amber) / 0.5);
        }

        /* Secondary (glass) */
        .svc-btn--secondary {
          background: hsl(0 0% 100% / 0.04);
          color: hsl(var(--accent-amber));
          border: 1px solid hsl(var(--accent-amber) / 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: inset 0 0 0 1px hsl(0 0% 100% / 0.04);
        }
        .svc-btn--secondary:hover {
          transform: translateY(-1px);
          background: hsl(var(--accent-amber) / 0.1);
          border-color: hsl(var(--accent-amber));
        }

        /* ---------- Keyframes ---------- */
        @keyframes svc-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes svc-fade-up-32 {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes svc-border-rotate {
          to { transform: rotate(360deg); }
        }
        @keyframes svc-orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(20px, -15px) scale(1.05); }
          66%      { transform: translate(-15px, 20px) scale(0.95); }
        }
        @keyframes svc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(0.85); }
        }

        /* The conic ::before gets its rotation via background-position trick.
           Pseudo-elements can't have transform animations affect their painted
           gradient unless we rotate the element itself. We rotate it directly: */
        .svc-card::before {
          /* override: rotate the element, not its background */
          transform-origin: 50% 50%;
        }
        @keyframes svc-border-rotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ---------- Reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .services-header,
          .svc-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .svc-card::before { animation: none !important; }
          .svc-orb { animation: none !important; }
          .svc-pill::before { animation: none !important; }
          .svc-btn__shine { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
