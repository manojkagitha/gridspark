import React from "react";

const faqs = [
  {
    question: "What makes Gridspark AI chatbots unique?",
    answer:
      "Gridspark chatbots deliver enterprise-grade conversations with multi-model support (OpenAI, Claude, open-source LLMs), seamless analytics, advanced context recall, and 100% brand customization. Our bots integrate with workflows, helping teams deliver instant, consistent experiences across digital and internal channels.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "We deploy on both secure cloud and on-prem infrastructures, ensuring no data is stored without consent. Configurations enforce GDPR, HIPAA, SOC2, and more. Our privacy-driven chat routing guarantees compliance for regulated industries.",
  },
  {
    question: "What customizations are possible?",
    answer:
      "Everything—from conversation personality and brand styling to integrations (Zendesk, Slack, APIs), multilingual support, human fallback, and workflow logic. Gridspark empowers developers and non-developers with a visual configuration dashboard.",
  },
  {
    question: "Can your chatbots handle voice and rich media?",
    answer:
      "Yes! Our chatbots support file uploads, voice input, code snippets, media previews, and scheduling—all in real time.",
  },
  {
    question: "What are common use cases?",
    answer:
      "Smart support portals, internal helpdesks, troubleshooting assistants, onboarding bots, retail concierges, HR FAQs, and sales engagement agents.",
  },
];

function ChatbotDetails() {
  return (
    <section className="min-h-screen w-full pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" data-aos="fade-up">
          Gridspark <span className="text-gradient-blue">AI Chatbot Solutions</span>
        </h1>

        <p className="mb-16 text-lg max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Gridspark is transforming conversational AI for enterprises. Our platform merges modern large language models with robust deployment, compliance, and branded UX. From scalable customer chatbots to secured internal systems, Gridspark solutions bring measurable outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Enterprise features */}
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
              Enterprise‑Ready Features
            </h2>
            <ul className="space-y-3">
              {[
                "Multi-LLM architecture: OpenAI, Claude, OSS & custom models",
                "Memory, analytics dashboard, and live monitoring",
                "Omnichannel: Web, app, Slack, WhatsApp, Teams",
                "Custom workflow triggers & backend integrations",
                "White-label branding, voice and document workflows",
                "Agent handoff, escalation, and moderation tools",
                "No data retention by default; full compliance features"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-[var(--color-primary)] mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Success Stories */}
          <div className="glass-panel p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-[var(--color-border)] pb-4">
              Recent Success Stories
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-300">
                <span className="text-[var(--color-primary)] mr-3">▹</span>
                <span>
                  <strong className="text-white">Retail chatbot suite</strong> — 36% faster support resolutions, 24/7 multilingual engagement across web and mobile apps.
                </span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-[var(--color-primary)] mr-3">▹</span>
                <span>
                  <strong className="text-white">Internal LLM assistant</strong> — SOC2-compliant, saving 2000+ analyst hours annually for a financial institution.
                </span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-[var(--color-primary)] mr-3">▹</span>
                <span>
                  <strong className="text-white">HR onboarding assistant</strong> — Deployed in Microsoft Teams with live document Q&A capabilities.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
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
                <h3 className="font-bold mb-3 text-lg text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="glass-panel p-10 rounded-3xl text-center border border-[var(--color-border)] max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Want a Custom AI Chatbot Demo?
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
            We deliver tailored proofs‑of‑concept using your data, branding, and integrations. Every project includes onboarding, secure setup, and transparent pricing.
          </p>

          <a href="/contact" className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
            Contact Gridspark AI Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default ChatbotDetails;
