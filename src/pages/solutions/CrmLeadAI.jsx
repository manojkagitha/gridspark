import React from "react";

const useCases = [
  {
    title: "Autonomous Sales Agent",
    description:
      "AI that researches prospects, drafts personalized outreach, schedules meetings, and follows up — all without human intervention. Save 8+ hours per rep per week.",
  },
  {
    title: "Meeting Prep Agent",
    description:
      "Auto-briefs sales reps before every call using CRM history, LinkedIn intel, company news, and past interactions. Walk into every meeting ready.",
  },
  {
    title: "Pipeline Intelligence",
    description:
      "AI monitors deal health in real time, flags at-risk opportunities, suggests next-best actions, and forecasts revenue with 95%+ accuracy.",
  },
  {
    title: "Auto-Enrichment Agent",
    description:
      "Continuously enriches contacts from LinkedIn, web signals, news, and intent data. Close data gaps automatically and surface buying signals.",
  },
  {
    title: "Predictive Lead Scoring",
    description:
      "AI analyzes CRM and marketing data in real time, generating precise lead scores so your team can prioritize prospects that convert.",
  },
  {
    title: "Automated Outreach & Sequencing",
    description:
      "Smart workflows trigger emails, calls, and next actions based on lead intent and behavior — reducing chase time and increasing conversions by 3x.",
  },
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
          Gridspark <span className="text-gradient-blue">AI Sales Agent & CRM Intelligence</span>
        </h1>

        <p className="mb-16 text-lg max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Turn your CRM into an intelligent, agentic system. Gridspark's AI Sales Agents autonomously research leads, draft outreach,
          schedule meetings, monitor pipeline health, and enrich contacts — making your entire sales engine smarter and faster.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Capabilities */}
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
              AI Sales Agent Capabilities
            </h2>
            <ul className="space-y-3">
              {[
                "Autonomous lead research, outreach, and follow-up",
                "Real-time AI scoring with explainable rules feedback",
                "Meeting prep agent — auto-briefs before every call",
                "Pipeline health monitoring with at-risk deal alerts",
                "Auto-enrichment from LinkedIn, web, and intent signals",
                "Multi-channel email, meeting, and follow-up automation",
                "Native integrations: Salesforce, HubSpot, Zoho, Pipedrive",
                "Transparent, auditable scoring and compliance reporting",
                "Save 8+ hours/week per sales rep, 3x faster lead response"
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
              How AI Sales Agents Transform Your Pipeline
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
            Deploy Your AI Sales Agent
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience a live demo with your CRM data — Gridspark builds autonomous sales agents that deliver measurable ROI from week one.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
            Contact Gridspark AI Sales Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CrmLeadAI;
