import React from "react";

const useCases = [
  {
    title: "Automated Document Summarization",
    description:
      "Summarize long contracts, research papers, or regulatory filings instantly. Use multi-level summaries — from bullet points to detailed Q&A — to accelerate reviews.",
  },
  {
    title: "Contextual Search & Answer Extraction",
    description:
      "Ask natural language questions about your PDFs, scanned docs, or knowledge base. Get precise answers and context‑aware citations for every query.",
  },
  {
    title: "RAG Pipelines for Custom Workflows",
    description:
      "Combine Retrieval Augmented Generation with private corpora, legal documents, or knowledge bases to generate intelligent reports, forms, or narratives.",
  },
  {
    title: "Compliance‑Ready Audit Trails",
    description:
      "Track uploads, summaries, and all actions with metadata for legal, finance, and healthcare documentation standards.",
  },
];

const faqs = [
  {
    question: "What formats does Gridspark Document AI support?",
    answer:
      "We support PDF, DOCX, TXT, Excel, CSV, images (OCR) and more — retaining complex structures like tables, headers, and footnotes.",
  },
  {
    question: "Where is my data processed and stored?",
    answer:
      "You choose: Gridspark secure cloud, your own Azure/AWS tenancy, or fully on‑prem deployment. Processing zones are auditable and isolated for privacy.",
  },
  {
    question: "Is Document AI safe for regulated industries?",
    answer:
      "Yes. Fully HIPAA, GDPR, and SOC2 compliant. All actions are logged, exportable, and private deployments leave zero cloud footprint.",
  },
  {
    question: "Can you integrate with existing DMS or portals?",
    answer:
      "Absolutely. We provide ready APIs, SSO/SAML authentication, and webhooks for smooth embedding into enterprise and legal document systems.",
  },
  {
    question: "Do I need AI expertise to use or maintain it?",
    answer:
      "Not at all. Gridspark Document AI provides intuitive UIs, role‑based access, and no‑code configuration for even advanced extraction or analysis.",
  },
];

function DocumentAI() {
  return (
    <section className="min-h-screen w-full pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-7 md:mb-8 text-center" data-aos="fade-up">
          Gridspark <span className="text-gradient-blue">Document AI</span>
        </h1>

        <p className="mb-10 sm:mb-12 md:mb-16 text-base sm:text-lg max-w-3xl mx-auto text-center text-gray-400 leading-relaxed px-4" data-aos="fade-up" data-aos-delay="100">
          Transform static documents into searchable knowledge. Gridspark Document AI extracts insights, enables Q&A, and automates summaries to streamline enterprise data processing and compliance.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
          {/* Core Solution Highlights */}
          <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-border)]" data-aos="fade-right">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-white border-b border-[var(--color-border)] pb-3 sm:pb-4">
              Core Solution Highlights
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Enterprise‑scale ingestion for thousands of docs per day",
                "Automatic summarization and key‑point extraction",
                "Context‑aware semantic search and highlight responses",
                "RAG pipelines for insightful generation and synthesis",
                "Access control and detailed audit trails",
                "Secure deploys across cloud, hybrid, and on‑premise"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-gray-300 text-xs sm:text-sm md:text-base">
                  <span className="text-[var(--color-primary)] mr-2 sm:mr-3">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6" data-aos="fade-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-white text-center md:text-left">
              Document AI in Action
            </h2>
            {useCases.map((item, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-sm sm:text-base text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12 sm:mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-7 md:mb-8 text-center text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card group hover:border-[var(--color-primary)]"
              >
                <div className="font-bold mb-2 text-sm sm:text-base text-white group-hover:text-[var(--color-primary)] transition-colors">
                  {faq.question}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl text-center border border-[var(--color-border)] max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Ready for Document Intelligence?
          </h2>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            Evaluate Document AI with your own documents—request sandbox access or schedule a guided enterprise pilot with our AI team.
          </p>
          <a href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block touch-manipulation">
            Contact Gridspark Document AI
          </a>
        </div>
      </div>
    </section>
  );
}

export default DocumentAI;
