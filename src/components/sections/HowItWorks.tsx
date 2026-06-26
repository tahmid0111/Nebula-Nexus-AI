import { useEffect, useRef, useState } from "react";

type Step = {
  number: string;
  day: string;
  headline: string;
  description: string;
  deliverable: string;
};

type SectionData = {
  id: string;
  tag: string;
  headlinePrefix: string;
  headlineSuffix: string;
  steps: Step[];
};

const sections: SectionData[] = [
  {
    id: "how-it-works-workshop",
    tag: "Workshop process",
    headlinePrefix: "How we train your team in ",
    headlineSuffix: ".",
    steps: [
      {
        number: "01",
        day: "Day 1",
        headline: "We teach all the basic concepts of AI.",
        description:
          "We walk your employees through the full landscape of what AI can automate inside your business, then give them the foundational training they need before the real work begins.",
        deliverable:
          "A clear picture of what's possible, plus the foundational skills to start building.",
      },
      {
        number: "02",
        day: "Days 2\u20135",
        headline: "We teach them prompt engineering, end to end.",
        description:
          "Your employees go through a full prompt engineering curriculum, learning how to design, test, and refine prompts that produce reliable outputs in real business workflows.",
        deliverable:
          "Your team can write production-grade prompts for any workflow you throw at them.",
      },
      {
        number: "03",
        day: "Days 6\u20137",
        headline: "They build 3 assistants and graduate.",
        description:
          "Your employees build 3 real assistants inside your business under our supervision. By the end of Day 7, the assistants are live and your team has graduated.",
        deliverable:
          "3 live assistants and a trained team who can keep building on their own.",
      },
    ],
  },
  {
    id: "how-it-works-built",
    tag: "Built Automations process",
    headlinePrefix: "How we build your automations in ",
    headlineSuffix: ".",
    steps: [
      {
        number: "01",
        day: "Day 1",
        headline: "We audit your full company.",
        description:
          "We audit your operations and document the 3 processes costing you the most money every month.",
        deliverable:
          "A documented audit and build plan, with your sign-off on which 3 we'll automate.",
      },
      {
        number: "02",
        day: "Days 2\u20135",
        headline: "We build and deploy all 3 automations.",
        description:
          "We build every automation end-to-end, integrate with your tools, and test against live data until each is verified.",
        deliverable:
          "All 3 automations built, deployed, and proven against your real data.",
      },
      {
        number: "03",
        day: "Days 6\u20137",
        headline: "We hand over and your team takes over.",
        description:
          "Full documentation, team training, and 30 days of post-launch support. The savings start compounding immediately.",
        deliverable:
          "3 live automations, complete ownership docs, and a 30-day support window.",
      },
    ],
  },
];

const HowItWorksSection = ({ data }: { data: SectionData }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const headlineId = `${data.id}-headline`;

  return (
    <section
      ref={ref}
      aria-labelledby={headlineId}
      className={`hiw-section ${visible ? "is-visible" : ""}`}
    >
      <div className="hiw-container">
        <header className="hiw-header">
          <div className="hiw-tag" aria-hidden="false">
            {data.tag}
          </div>
          <h2 id={headlineId} className="hiw-headline">
            {data.headlinePrefix}
            <span className="hiw-headline-accent">7 days</span>
            {data.headlineSuffix}
          </h2>
        </header>

        <ol className="hiw-steps" role="list">
          <span className="hiw-connector" aria-hidden="true" />
          <span className="hiw-pulse-dot" aria-hidden="true" />
          {data.steps.map((step, i) => (
            <li
              key={step.number}
              className="hiw-step"
              style={{ ["--step-index" as any]: i }}
            >
              <div className="hiw-circle" aria-hidden="true">
                <span className="hiw-number">{step.number}</span>
              </div>
              <span className="hiw-day">{step.day}</span>
              <h3 className="hiw-step-headline">{step.headline}</h3>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .hiw-section {
          background: hsl(var(--bg-primary));
          padding: 120px 0;
        }
        .hiw-section + .hiw-section {
          padding-top: 0;
          margin-top: 40px;
        }
        .hiw-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .hiw-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 80px;
        }
        .hiw-tag {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px 7px 28px;
          background: hsl(var(--accent-amber) / 0.12);
          border: 1px solid hsl(var(--accent-amber) / 0.45);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: hsl(var(--accent-amber));
          backdrop-filter: blur(8px);
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(16px);
        }
        .hiw-tag::before {
          content: "";
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(var(--accent-amber));
          box-shadow:
            0 0 8px hsl(var(--accent-amber) / 1.0),
            0 0 18px hsl(var(--accent-amber) / 0.6);
          animation: hiw-pulse 2s ease-in-out infinite;
        }
        @keyframes hiw-pulse {
          0%, 100% { opacity: 1; transform: translateY(-50%) scale(1); }
          50%      { opacity: 0.6; transform: translateY(-50%) scale(0.85); }
        }
        .hiw-headline {
          font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: hsl(var(--text-primary));
          margin: 0;
          opacity: 0;
          transform: translateY(24px);
          max-width: none;
          white-space: nowrap;
        }
        .hiw-headline-accent {
          color: hsl(var(--accent-amber));
        }

        .hiw-steps {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0;
          padding: 40px 0;
          list-style: none;
          margin: 0;
        }
        .hiw-connector {
          position: absolute;
          top: 90px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            hsl(var(--accent-amber) / 0.55) 15%,
            hsl(var(--accent-amber)) 50%,
            hsl(var(--accent-amber) / 0.55) 85%,
            transparent 100%
          );
          box-shadow: 0 0 16px hsl(var(--accent-amber) / 0.4);
          z-index: 0;
          transform: scaleX(0);
          transform-origin: left center;
        }
        .hiw-pulse-dot {
          position: absolute;
          top: 86px;
          left: 12%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: hsl(var(--accent-amber));
          box-shadow:
            0 0 12px hsl(var(--accent-amber) / 1.0),
            0 0 28px hsl(var(--accent-amber) / 0.65);
          z-index: 1;
          opacity: 0;
          animation: hiw-travel 6s ease-in-out infinite;
          will-change: left, opacity;
        }
        @keyframes hiw-travel {
          0%   { left: 12%;  opacity: 0; }
          10%  {              opacity: 1; }
          90%  {              opacity: 1; }
          100% { left: calc(88% - 10px); opacity: 0; }
        }

        .hiw-step {
          position: relative;
          z-index: 2;
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(32px);
        }

        .hiw-circle {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(180deg, hsl(var(--bg-tertiary)) 0%, hsl(var(--bg-primary)) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          isolation: isolate;
        }
        .hiw-circle::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            hsl(var(--accent-amber)) 0deg,
            hsl(195 100% 75%) 120deg,
            transparent 180deg,
            transparent 270deg,
            hsl(var(--accent-amber)) 360deg
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: hiw-spin 6s linear infinite;
          z-index: 0;
        }
        @keyframes hiw-spin {
          to { transform: rotate(360deg); }
        }
        .hiw-circle::after {
          content: "";
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, hsl(var(--accent-amber) / 0.50) 0%, transparent 70%);
          opacity: 0.85;
          filter: blur(10px);
          z-index: -1;
        }
        .hiw-number {
          position: relative;
          z-index: 2;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
          background: linear-gradient(180deg,
            hsl(0 0% 100%) 0%,
            hsl(var(--accent-amber)) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hiw-day {
          display: inline-block;
          padding: 4px 12px;
          background: hsl(var(--accent-amber) / 0.12);
          border: 1px solid hsl(var(--accent-amber) / 0.55);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: hsl(var(--accent-amber));
          margin-bottom: 12px;
        }
        .hiw-step-headline {
          font-size: 22px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: hsl(var(--text-primary));
          text-shadow: 0 0 20px hsl(var(--accent-amber) / 0.12);
          max-width: 300px;
          margin: 0 0 16px;
        }
        .hiw-step-desc {
          font-size: 16px;
          line-height: 1.6;
          color: hsl(var(--text-secondary));
          max-width: 320px;
          margin: 0 0 20px;
        }
        .hiw-deliverable {
          padding: 14px 18px;
          background: hsl(0 0% 100% / 0.02);
          border: 1px solid hsl(var(--border-soft));
          border-left: 2px solid hsl(var(--accent-amber));
          border-radius: 0 8px 8px 0;
          max-width: 320px;
          text-align: left;
        }
        .hiw-deliverable-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--text-secondary));
          margin-bottom: 6px;
        }
        .hiw-deliverable-text {
          font-size: 14px;
          line-height: 1.55;
          font-style: italic;
          color: hsl(var(--text-primary));
        }

        /* Entry animation */
        .hiw-section.is-visible .hiw-tag {
          animation: hiw-fade-up 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .hiw-section.is-visible .hiw-headline {
          animation: hiw-fade-up 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms forwards;
        }
        .hiw-section.is-visible .hiw-connector {
          animation: hiw-grow 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 450ms forwards;
        }
        .hiw-section.is-visible .hiw-step {
          animation: hiw-fade-up 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .hiw-section.is-visible .hiw-step:nth-child(3) { animation-delay: 650ms; }
        .hiw-section.is-visible .hiw-step:nth-child(4) { animation-delay: 800ms; }
        .hiw-section.is-visible .hiw-step:nth-child(5) { animation-delay: 950ms; }

        @keyframes hiw-fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hiw-grow {
          to { transform: scaleX(1); }
        }

        @media (max-width: 900px) {
          .hiw-steps {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 32px 0;
          }
          .hiw-connector {
            top: 12%;
            bottom: 12%;
            left: 50%;
            right: auto;
            height: auto;
            width: 2px;
            transform: translateX(-50%) scaleY(0);
            transform-origin: top center;
            background: linear-gradient(
              180deg,
              transparent 0%,
              hsl(var(--accent-amber) / 0.55) 15%,
              hsl(var(--accent-amber)) 50%,
              hsl(var(--accent-amber) / 0.55) 85%,
              transparent 100%
            );
          }
          .hiw-pulse-dot {
            top: 12%;
            left: 50%;
            transform: translateX(-50%);
            animation: hiw-travel-vertical 6s ease-in-out infinite;
          }
          @keyframes hiw-travel-vertical {
            0%   { top: 12%; opacity: 0; }
            10%  {           opacity: 1; }
            90%  {           opacity: 1; }
            100% { top: calc(88% - 10px); opacity: 0; }
          }
          .hiw-section.is-visible .hiw-connector {
            animation: hiw-grow-y 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 450ms forwards;
          }
          @keyframes hiw-grow-y {
            to { transform: translateX(-50%) scaleY(1); }
          }
          .hiw-step {
            padding: 0 16px;
          }
          .hiw-step-headline,
          .hiw-step-desc,
          .hiw-deliverable {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hiw-section { padding: 60px 0; }
          .hiw-section + .hiw-section { padding-top: 0; }
          .hiw-container { padding: 0 24px; }
          .hiw-header { margin-bottom: 56px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hiw-tag::before,
          .hiw-circle::before,
          .hiw-pulse-dot {
            animation: none !important;
          }
          .hiw-pulse-dot { display: none; }
          .hiw-tag,
          .hiw-headline,
          .hiw-step {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .hiw-connector {
            transform: scaleX(1) !important;
            animation: none !important;
          }
          @media (max-width: 900px) {
            .hiw-connector {
              transform: translateX(-50%) scaleY(1) !important;
            }
          }
        }
      `}</style>
    </section>
  );
};

const HowItWorks = () => (
  <>
    {sections.map((s) => (
      <HowItWorksSection key={s.id} data={s} />
    ))}
  </>
);

export default HowItWorks;
