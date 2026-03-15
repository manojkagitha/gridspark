import React from "react";

const useCases = [
  {
    title: "Predictive Lead Scoring",
    description:
      "Our AI analyzes your CRM and marketing data in real time, generating precise lead scores so your team can prioritize prospects that convert.",
  },
  {
    title: "Automated Outreach & Sequencing",
    description:
      "Smart workflows trigger emails, calls, and next actions based on lead intent and behavior—reducing chase time and increasing conversions.",
  },
  {
    title: "Integrated Data Enrichment",
    description:
      "Enrich leads automatically with social, company, and web activity signals. Close data gaps, flag buying intent, and let AI surface your best opportunities.",
  },
  {
    title: "Adaptive Segmentation & Reporting",
    description:
      "Dynamic AI segmentation groups leads by value, urgency, or vertical—feeding real-time dashboards and CRM fields ready for analysis.",
  },
];

const faqs = [
  {
    question: "How does Gridspark's CRM AI integrate with my stack?",
    answer:
      "Native API integrations with Salesforce, HubSpot, Zoho, and other CRMs. Secure OAuth access and custom connectors ensure zero vendor lock-in and full control.",
  },
  {
    question: "Is the lead scoring transparent and auditable?",
    answer:
      "Yes. Every data point, scoring rule, and model event is logged and explainable. Export detailed compliance-ready reports anytime.",
  },
  {
    question: "What industries benefit most?",
    answer:
      "Gridspark CRM AI powers sales success in SaaS, IT services, e-commerce, financial, and real estate industries—where high-value lead flow is critical.",
  },
  {
    question: "Can it automate multi-step campaigns?",
    answer:
      "Absolutely. Email drips, reminders, enrichment tasks, and follow-ups can be triggered instantly—aligned with your sales cadence.",
  },
  {
    question: "How secure is my lead data?",
    answer:
      "We encrypt all data during transit and at rest, offer regional hosting, and provide full GDPR compliance. Optional private cloud and on-prem deployments are available.",
  },
];

function CrmLeadAI() {
  return (
    <section className="min-h-screen w-full pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" data-aos="fade-up">
          Gridspark <span className="text-gradient-blue">AI CRM Lead Automation</span>
        </h1>

        <p className="mb-16 text-lg max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Drive pipeline growth with AI. Gridspark’s CRM AI platform leverages predictive and generative intelligence to score, segment, enrich, and automate outreach—making your entire funnel smarter and faster.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Capabilities */}
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
              Key Solution Capabilities
            </h2>
            <ul className="space-y-3">
              {[
                "Real-time AI scoring with rules feedback",
                "Automated lead enrichment and cleansing workflows",
                "Multi-channel email, meeting, and follow-up automation",
                "Custom segmentation and lifecycle analysis",
                "Native integrations across major CRM systems",
                "Transparent, auditable scoring and reporting"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-[var(--color-primary)] mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6 text-white text-center md:text-left">
              How Customers Use Gridspark CRM AI
            </h2>
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {faq.question}
                </div>
                <div className="text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel p-10 rounded-3xl text-center border border-[var(--color-border)] max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Unlock AI‑Driven CRM Growth
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience a live demo with your CRM data—Gridspark provides full proof‑of‑concepts, rapid integrations, and measurable ROI.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
            Contact Gridspark CRM AI Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CrmLeadAI;
