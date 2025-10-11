import React from "react";

const useCases = [
  {
    title: "Automated Document Summarization",
    description:
      "Summarize long contracts, research papers, or regulatory filings instantly. Use multi-level summaries—from bullet points to detailed Q&A—to accelerate reviews.",
  },
  {
    title: "Contextual Search & Answer Extraction",
    description:
      "Ask natural language questions about your PDFs, scanned docs, or knowledge base. Get precise answers and smart citations with every query.",
  },
  {
    title: "RAG Pipelines for Custom Workflows",
    description:
      "Combine Retrieval Augmented Generation with your private content, regulatory docs, or team knowledge to generate reports, fill forms, or draft custom narratives.",
  },
  {
    title: "Compliance-Ready Audit Trails",
    description:
      "Track every action—upload, extract, transform, summarize—with full metadata for legal, finance, and healthcare documentation standards.",
  }
];

const faqs = [
  {
    question: "What formats does Gridspark Document AI support?",
    answer:
      "Natively handles PDF, DOCX, TXT, Excel, CSV, scanned images (OCR), and more. We ensure fidelity for data tables, footnotes, and complex formatting.",
  },
  {
    question: "Where is my data processed and stored?",
    answer:
      "You choose—run on Gridspark’s secure cloud, your own Azure/AWS tenancy, or strictly on-prem. All processing zones are auditable and fully isolated for privacy.",
  },
  {
    question: "Is Document AI safe for regulated industries?",
    answer:
      "Compliant with HIPAA, GDPR, SOC2. All actions are logged and exportable. Private deployments leave no data in the cloud.",
  },
  {
    question: "Can you integrate with existing DMS or portals?",
    answer:
      "Yes. We provide out-of-the-box API integrations, SSO/SAML authentication, and webhooks for seamless embedding into legal or enterprise document management stacks.",
  },
  {
    question: "Do I need AI expertise to use or maintain it?",
    answer:
      "No. Gridspark Document AI offers intuitive UIs, role-based access, and no-code configuration—even for complex extraction or custom reporting.",
  },
];

function DocumentAI() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-white">
      <h1 className="text-3xl font-extrabold text-yellow-400 mb-2">Gridspark Document AI</h1>
      <p className="mb-6 text-lg text-gray-200">
        Turn static documents into dynamic, searchable assets. Gridspark Document AI extracts knowledge, enables natural language Q&A, and automates report generation—streamlining how enterprises handle contracts, policies, and discovery at scale.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-1">Core Solution Highlights</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-100">
          <li>Enterprise-scale ingestion for thousands of docs per day</li>
          <li>Smart summarization and bullet point extraction</li>
          <li>Context-aware search with answer highlighting</li>
          <li>Robust RAG pipelines for deep synthesis and drafting</li>
          <li>Role-based permission controls and audit trails</li>
          <li>Secure, configurable deployments: cloud, hybrid, or on-prem</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-1">How Gridspark Customers Use Document AI</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((item, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-5 border border-gray-700">
              <div className="font-bold text-yellow-200 mb-1">{item.title}</div>
              <div className="text-gray-100">{item.description}</div>
            </div>
          ))}
        </div>
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
        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Ready for Document Intelligence?</h2>
        <p className="mb-4 text-gray-200">
          Experience Document AI on your own corpus—request a sandbox, run a compliance workshop, or launch an enterprise pilot with Gridspark’s support.
        </p>
        <a href="/contact" className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded shadow hover:bg-yellow-300 transition">
          Contact Gridspark Document AI
        </a>
      </div>
    </div>
  );
}

export default DocumentAI;