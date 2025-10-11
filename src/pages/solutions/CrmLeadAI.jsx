import React from "react";

const useCases = [
  {
    title: "Predictive Lead Scoring",
    description:
      "Our AI analyzes your CRM and marketing data in real time, resulting in highly accurate scoring for every lead—so your team focuses on prospects that actually convert.",
  },
  {
    title: "Automated Outreach & Sequencing",
    description:
      "Smart workflows trigger emails, calls, and next actions based on lead intent and history, reducing chase times and lifting conversion rates.",
  },
  {
    title: "Integrated Data Enrichment",
    description:
      "Enrich leads with social, company, news, and web signals automatically. Fill data gaps, flag high-value contacts, and surface buying intent—without agents lifting a finger.",
  },
  {
    title: "Adaptive Segmentation & Reporting",
    description:
      "Dynamic AI-driven segments group leads by predicted value, industry, or urgency. All results flow into live dashboards and custom CRM fields, ready for deeper analysis.",
  }
];

const faqs = [
  {
    question: "How does Gridspark's CRM AI integrate with my stack?",
    answer:
      "Our platform natively connects via API to Salesforce, HubSpot, Zoho, Pipedrive, and any RESTful system. No vendor lock-in, with secure OAuth and granular permissions. Custom connectors available for legacy or proprietary databases.",
  },
  {
    question: "Is the lead scoring transparent and auditable?",
    answer:
      "Yes. Every scoring rule, data point, and event is explainable. Review scoring logic in your dashboard; export detailed reports to meet compliance and review cycles.",
  },
  {
    question: "What industries benefit most?",
    answer:
      "Gridspark CRM AI is proven in SaaS, IT services, e-commerce, real estate, financial services, education, and healthcare—wherever high-volume, high-value leads are critical.",
  },
  {
    question: "Can it automate multi-step campaigns?",
    answer:
      "Absolutely. Our system recommends and launches follow-up emails, reminders, nurture drips, and task assignments in sync with your CRM and sales cadence.",
  },
  {
    question: "How secure is my lead data?",
    answer:
      "All data is encrypted in transit and at rest, with regional hosting, full GDPR compliance, and zero third-party data sales. Opt for on-prem or private cloud for maximum control.",
  },
];

function CrmLeadAI() {
  return (
    <section className="min-h-screen w-full py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-8">
          Gridspark AI CRM Lead Scoring & Automation
        </h1>
        <p className="mb-12 text-lg text-gray-300 max-w-3xl">
          Drive sales with machine intelligence. Gridspark’s CRM AI platform automatically scores, segments, enriches, and pursues leads using the latest advances in generative and predictive AI, cutting through noise and accelerating your revenue pipeline.
        </p>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">
            Key Solution Capabilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-100">
            <li>Real-time AI scoring with configurable rules and feedback</li>
            <li>Fully automated lead enrichment and data cleansing</li>
            <li>Multi-step email, call, and meeting automations</li>
            <li>Custom segments, intent detection, and lifecycle analytics</li>
            <li>Native integrations with major CRM and marketing platforms</li>
            <li>Transparent, explainable results for compliance and trust</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">
            How Customers Use Gridspark CRM AI
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl border border-purple-400/20 px-6 py-5 shadow-md"
              >
                <div className="font-bold text-purple-200 mb-2">
                  {item.title}
                </div>
                <div className="text-gray-100">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-purple-300 mb-2">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-900/80 rounded-xl border border-purple-400/20 px-6 py-4 shadow-md"
              >
                <div className="font-bold text-purple-200 mb-2">
                  {faq.question}
                </div>
                <div className="text-gray-200">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-purple-900/40 border-t border-purple-400/30 mt-12 pt-8 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Unlock AI-Driven CRM Growth
          </h2>
          <p className="mb-4 text-gray-100">
            Experience a live demo or start a pilot with your own data—Gridspark provides full POC support, rapid integrations, and performance guarantees.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
          >
            Contact Gridspark CRM AI Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default CrmLeadAI;
