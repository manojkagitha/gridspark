import React from "react";

const faqs = [
  {
    question: "What makes Gridspark AI chatbots unique?",
    answer:
      "Gridspark chatbots deliver enterprise-grade conversations with multi-model support (OpenAI, Claude, open-source LLMs), seamless analytics, advanced context recall, and 100% brand customization. Our bots integrate with your workflows, helping your staff deliver instant, consistent experiences—across web, mobile, internal and customer channels.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "We deploy on both secure cloud and on-prem infrastructures, ensuring no data is logged or persisted without your consent. All configurations support opt-in/opt-out for retention and can enforce GDPR, HIPAA, SOC2, and more. Our privacy-focused chat routing guarantees compliance for regulated industries.",
  },
  {
    question: "What customizations are possible?",
    answer:
      "Everything—from conversation personality and brand voice, to integrations (Zendesk, Slack, internal APIs), multi-language support, fallback escalation to humans, and completely custom logic. Gridspark empowers technical teams and non-developers alike, with a visual panel for live edits and flows.",
  },
  {
    question: "Can your chatbots handle voice and rich media?",
    answer:
      "Yes! Our chatbots natively support file upload, voice-to-text, in-chat snippets, media previews, and even schedule meetings or collect complex feedback—all in real time.",
  },
  {
    question: "What are common use cases?",
    answer:
      "Automated customer support, smart internal helpdesks, technical troubleshooting bots, onboarding assistants, retail shopping concierges, HR FAQs, event bots, and sales engagement agents.",
  },
];

function ChatbotDetails() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-white">
      <h1 className="text-3xl font-extrabold text-yellow-400 mb-2">Gridspark AI Chatbot Solutions</h1>
      <p className="mb-6 text-lg text-gray-200">
        Gridspark is reshaping conversational AI for enterprises. Our state-of-the-art chatbot platform blends the newest generative AI models with battle-tested deployment, compliance, and branded UX. From scalable customer-facing bots to advanced internal chat for IT and HR, every Gridspark implementation is unique—optimized for real business outcomes.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-1">Enterprise-Ready Features</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-100">
          <li>Multi-LLM architecture with smart fallback: ChatGPT, Claude, OSS, and custom models</li>
          <li>Persistent memory, analytics dashboard, and live session monitoring</li>
          <li>Omnichannel: Web chat, app embeds, Slack/MS Teams, WhatsApp</li>
          <li>Custom actions, CRM/API integration, workflow triggers</li>
          <li>White-label theming, voice & document inputs, multi-language flows</li>
          <li>Human agent takeover for escalation and triage</li>
          <li>No data retention by default; full compliance support</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-1">Recent Success Stories</h2>
        <ul className="list-[square] pl-6 space-y-1 text-gray-100">
          <li>
            Deployed a multi-brand chatbot suite for a retailer, driving 36% faster support resolution and 24/7 multilingual engagement in web and app.
          </li>
          <li>
            Rolled out a secured internal LLM assistant for a financial services provider—compliant with SOC2 and ISO, saving 2000+ analyst hours/year.
          </li>
          <li>
            Built a conversational onboarding assistant for enterprise HR, integrated into Microsoft Teams, with document ingest and Q&A.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-1">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <div className="font-bold text-yellow-200">{faq.question}</div>
              <div className="text-gray-200">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-900/10 border-t border-yellow-400/30 mt-10 pt-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Want a custom AI chatbot demo?</h2>
        <p className="mb-4 text-gray-200">
          We deliver tailored proof-of-concepts with your data, branding, and real workflow integrations. All projects include detailed onboarding, secure setup, and transparent pricing.
        </p>
        <a href="/contact" className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition">
          Contact Gridspark AI Team
        </a>
      </div>
    </div>
  );
}

export default ChatbotDetails;
