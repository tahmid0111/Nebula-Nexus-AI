import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground mb-2">Terms of Service — Nebula Nexus AI</p>
          <p className="text-muted-foreground mb-12">Last Updated: December 27, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the Nebula Nexus AI website and any related services, content, and offerings (collectively, the "Services"). By accessing or using our Services, you agree to these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you do not agree, do not use the Services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1) Company Information</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Nebula Nexus AI</strong></p>
                <p>NYC, US</p>
                <p>Phone: +1 (814) 777-0159</p>
                <p>Email: Laith@nebulanexus.ai</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2) Who These Terms Apply To</h2>
              <p className="text-muted-foreground mb-2">These Terms apply to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Visitors to our website</li>
                <li>Anyone requesting information or booking a call</li>
                <li>Customers purchasing or using our services</li>
                <li>Anyone using deliverables, content, or tools provided by Nebula Nexus AI</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3) Services Overview</h2>
              <p className="text-muted-foreground mb-2">Nebula Nexus AI provides services including (but not limited to):</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>AI automations and workflow design</li>
                <li>AI agents (chat/voice) and integrations</li>
                <li>Websites and related marketing/operations automation</li>
                <li>Consulting, audits, strategy, and implementation support</li>
              </ul>
              <p className="text-muted-foreground">
                Some services may be subject to additional terms in a proposal, statement of work ("SOW"), or service agreement. If there's a conflict, the signed SOW/service agreement controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4) Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old (or the age of majority where you live) to use the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5) No Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed">
                Information on our website is for general informational purposes and does not constitute legal, tax, medical, or financial advice. You are responsible for getting professional advice where needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6) Quotes, Proposals, and Scope</h2>
              <p className="text-muted-foreground mb-2">Any quote, proposal, or estimate:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Is based on the information you provide</li>
                <li>May change if project requirements change</li>
                <li>May require a deposit or milestone payments (as stated in the proposal/SOW)</li>
              </ul>
              <p className="text-muted-foreground">
                Scope changes (extra features, new integrations, additional pages, new workflows, etc.) may require additional fees and/or timeline adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7) Client Responsibilities</h2>
              <p className="text-muted-foreground mb-2">To deliver Services successfully, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for approvals, content, and access (logins/API keys) in a timely way</li>
                <li>Ensure you have the legal right to share any data, leads, customer lists, recordings, or other materials you provide</li>
                <li>Use the deliverables responsibly and in compliance with applicable laws</li>
              </ul>
              <p className="text-muted-foreground">
                Delays in your responses can delay delivery timelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8) Payments and Billing</h2>
              <p className="text-muted-foreground mb-2">Unless otherwise stated in a signed agreement:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Fees are due according to the invoice terms (often upfront, milestone-based, or net terms)</li>
                <li>Late payments may pause work until the account is current</li>
                <li>You are responsible for third-party costs (e.g., software subscriptions, hosting, phone/SMS usage, API fees) unless explicitly included</li>
              </ul>
              <p className="text-muted-foreground">
                All sales are final once work has started, except where a written agreement states otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9) Refunds</h2>
              <p className="text-muted-foreground mb-2">Because our work is custom and time-based:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Deposits and completed work are generally non-refundable</li>
                <li>If a refund policy is offered for a specific service, it will be written in the proposal/SOW and will override this section</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10) Third-Party Tools and Platforms</h2>
              <p className="text-muted-foreground mb-4">
                Our Services may use third-party platforms (example: hosting providers, CRMs, automation tools, AI model providers, scheduling tools, email/SMS services).
              </p>
              <p className="text-muted-foreground mb-2">You understand that:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Third-party services have their own terms and privacy policies</li>
                <li>We are not responsible for outages, changes, suspensions, or failures of third-party services</li>
                <li>You may need your own accounts and subscriptions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11) AI Outputs and Limitations</h2>
              <p className="text-muted-foreground mb-2">If we provide AI-based features or content:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Outputs may be inaccurate, incomplete, or require human review</li>
                <li>You are responsible for verifying outputs before using them in business decisions, customer communications, compliance, or legal/medical/financial contexts</li>
                <li>We do not guarantee specific results (e.g., revenue, lead volume, conversions)</li>
              </ul>
              <p className="text-muted-foreground italic">
                AI is powerful. It's not magic. Treat it like a fast intern, not a licensed professional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12) Compliance and Acceptable Use</h2>
              <p className="text-muted-foreground mb-2">You agree not to use our Services to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Break any laws or regulations (including privacy, consumer protection, and marketing laws)</li>
                <li>Send unlawful spam or run illegal robocalling/texting campaigns</li>
                <li>Infringe intellectual property rights</li>
                <li>Distribute malware or attempt unauthorized access</li>
                <li>Harass, exploit, or harm others</li>
              </ul>
              <p className="text-muted-foreground">
                We may refuse service or suspend access if we believe your use violates this section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13) Intellectual Property</h2>
              
              <h3 className="text-xl font-medium mb-3">A) Our Website Content</h3>
              <p className="text-muted-foreground mb-4">
                All website content (text, branding, logos, graphics, and designs) is owned by Nebula Nexus AI or licensed to us and is protected by applicable laws. You may not copy or reuse it without written permission.
              </p>

              <h3 className="text-xl font-medium mb-3">B) Project Deliverables</h3>
              <p className="text-muted-foreground mb-2">Unless otherwise agreed in writing:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Upon full payment, you receive a license to use the deliverables created for you for your internal business purposes</li>
                <li>We retain ownership of our pre-existing materials, templates, libraries, frameworks, and know-how</li>
                <li>We may reuse general, non-confidential knowledge and techniques learned from the project</li>
              </ul>
              <p className="text-muted-foreground">
                If you need full ownership/assignment, that must be explicitly stated in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14) Confidentiality</h2>
              <p className="text-muted-foreground mb-2">
                If you share confidential information with us, we will use reasonable efforts to keep it confidential and only use it to provide the Services, unless:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>You give permission</li>
                <li>Disclosure is required by law</li>
                <li>The information becomes public through no fault of ours</li>
              </ul>
              <p className="text-muted-foreground">
                A separate NDA can be used if needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15) Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Services are provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-muted-foreground">
                We do not guarantee that the Services will be uninterrupted, error-free, or perfectly secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">16) Limitation of Liability</h2>
              <p className="text-muted-foreground mb-2">To the fullest extent permitted by law:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Nebula Nexus AI will not be liable for indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability for any claim relating to the Services will not exceed the amount you paid us for the specific service giving rise to the claim in the 3 months prior to the event</li>
              </ul>
              <p className="text-muted-foreground">
                Some jurisdictions do not allow certain limitations, so this may not apply fully to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">17) Indemnification</h2>
              <p className="text-muted-foreground mb-2">
                You agree to indemnify and hold harmless Nebula Nexus AI from claims, damages, liabilities, costs, and expenses (including attorneys' fees) arising out of:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your misuse of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law or third-party rights (including data/privacy and marketing compliance)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">18) Termination</h2>
              <p className="text-muted-foreground mb-2">We may suspend or terminate access to the Services if:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>You violate these Terms</li>
                <li>Required payments are not made</li>
                <li>Continuing the project becomes unlawful or unsafe</li>
              </ul>
              <p className="text-muted-foreground">
                You may stop using the Services at any time. If you terminate a project early, you remain responsible for fees for work performed and any non-cancellable expenses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">19) Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by the laws of the State of New Jersey, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">20) Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms occasionally. The updated Terms will be posted with a new "Last Updated" date. Continued use of the Services after changes means you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">21) Contact</h2>
              <p className="text-muted-foreground mb-4">Questions about these Terms? Contact:</p>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Nebula Nexus AI</strong></p>
                <p>NYC, US</p>
                <p>Phone: +1 (814) 777-0159</p>
                <p>Email: Laith@nebulanexus.ai</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
