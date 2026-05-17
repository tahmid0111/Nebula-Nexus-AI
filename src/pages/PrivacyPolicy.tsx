import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise-overlay" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Privacy Policy</h1>
          <p className="text-xl text-muted-foreground mb-2">Privacy Policy — Nebula Nexus AI</p>
          <p className="text-muted-foreground mb-12">Last Updated: December 27, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground leading-relaxed">
              Nebula Nexus AI ("Nebula Nexus AI," "we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website or interact with our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you do not agree with this Privacy Policy, please do not use our website or services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1) Who We Are (Contact Info)</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1">
                <p><strong>Nebula Nexus AI</strong></p>
                <p>NYC, US</p>
                <p>Phone: +1 (814) 777-0159</p>
                <p>Email: Laith@nebulanexus.ai</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2) Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>
              
              <h3 className="text-xl font-medium mb-3">A) Information You Provide to Us</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Contact details (name, email, phone number, company name)</li>
                <li>Inquiry details (messages you submit, project details, service requests)</li>
                <li>Scheduling details (if you book a call/appointment)</li>
                <li>Billing and transaction data (if you purchase services; note: payment details are typically handled by third-party payment processors)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">B) Information Collected Automatically</h3>
              <p className="text-muted-foreground mb-2">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Device and browser data (IP address, browser type, device type, operating system)</li>
                <li>Usage data (pages visited, time on site, clicks, referring/exit pages)</li>
                <li>Cookies and similar technologies (see Section 6)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">C) Information from Third Parties</h3>
              <p className="text-muted-foreground mb-2">We may receive information from:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Analytics providers (e.g., website traffic measurement)</li>
                <li>Advertising platforms (if used)</li>
                <li>CRM, scheduling, or communication providers (if you submit data through those tools)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3) How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We use information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and operate our website and services</li>
                <li>Respond to messages, requests, or support inquiries</li>
                <li>Schedule and manage calls/appointments</li>
                <li>Deliver services (including automation setup, AI workflows, integrations)</li>
                <li>Improve our website, offers, and user experience</li>
                <li>Send service updates, administrative messages, and (where permitted) marketing communications</li>
                <li>Prevent fraud, abuse, or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4) How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information in the traditional sense. We may share information in these cases:
              </p>

              <h3 className="text-xl font-medium mb-3">A) Service Providers</h3>
              <p className="text-muted-foreground mb-2">We may share information with vendors that help us operate, such as:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Website hosting</li>
                <li>Analytics tools</li>
                <li>CRM systems</li>
                <li>Scheduling tools</li>
                <li>Email/SMS/communications platforms</li>
                <li>Payment processors</li>
              </ul>
              <p className="text-muted-foreground mb-4">These providers are permitted to use your information only to perform services for us.</p>

              <h3 className="text-xl font-medium mb-3">B) Legal and Safety</h3>
              <p className="text-muted-foreground mb-2">We may disclose information if required by law, court order, or if we believe disclosure is necessary to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Comply with legal process</li>
                <li>Enforce our policies</li>
                <li>Protect our rights, safety, or property</li>
                <li>Protect users or the public</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">C) Business Transfers</h3>
              <p className="text-muted-foreground">
                If we are involved in a merger, acquisition, financing, or sale of all or part of the business, information may be transferred as part of that transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5) Client Data (If You Hire Us)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you become a customer, you may provide data that belongs to you or your customers/leads ("Client Data") for the purpose of delivering services (e.g., CRM records, customer contact lists, call transcripts, chat logs, automation workflow data).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In that context, Nebula Nexus AI generally acts as a service provider/processor for Client Data.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>We use Client Data only to provide the services you request and as directed by your agreement with us.</li>
                <li>You are responsible for ensuring you have the legal right to share Client Data with us and that you provide any required notices/consents to your customers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6) Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-2">We may use cookies and similar technologies (like pixels or local storage) to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Remember preferences</li>
                <li>Understand how visitors use the site</li>
                <li>Improve performance and user experience</li>
                <li>Measure marketing effectiveness (if applicable)</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Disabling cookies may impact how the website functions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7) Your Choices</h2>
              <p className="text-muted-foreground mb-2">Depending on your location and applicable law, you may have rights to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Request access to personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (with certain legal/contractual exceptions)</li>
                <li>Opt out of marketing emails (use the "unsubscribe" link if provided, or email us)</li>
              </ul>
              <p className="text-muted-foreground">
                To make a request, contact us at Laith@nebulanexus.ai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8) Data Retention</h2>
              <p className="text-muted-foreground mb-2">We keep personal information only as long as necessary for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The purposes described in this policy</li>
                <li>Providing services</li>
                <li>Legal, accounting, or reporting requirements</li>
                <li>Resolving disputes and enforcing agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9) Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards to protect information. However, no system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10) Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services are not intended for children under 13, and we do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11) International Visitors</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you access our website from outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12) Do Not Track Signals</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some browsers offer "Do Not Track" ("DNT") settings. At this time, our site may not respond to DNT signals in a uniform way because there is no consistent industry standard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13) Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites. Review their policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14) Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15) Contact Us</h2>
              <p className="text-muted-foreground mb-4">If you have questions or requests about this Privacy Policy, contact:</p>
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

export default PrivacyPolicy;
