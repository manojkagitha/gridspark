import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const noUnderline = "hover:underline underline-offset-2 focus:outline-none transition text-[var(--color-primary)]";

const demos = [
  {
    title: "AI Chatbot Suite",
    description: (
      <>
        Gridspark’s unified chatbot stack with live demos showcasing multi-model chat, customer support, workflow integration, and private hosted LLMs.<br />
        <span className="opacity-90">
          Recent Innovations: Multi-model routing, enterprise privacy, custom branding, analytics, hand-off, and multilingual support.
        </span>
        <br />
        <br />
        <span className={noUnderline}>
          Learn more about Chatbot innovations →
        </span>
      </>
    ),
    route: "/solutions/chatbot-details",
    demoComponent: (
      <div className="flex flex-col items-center p-6 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl shadow w-full">
        <svg width="64" height="64" fill="none" viewBox="0 0 80 80">
          <rect width="80" height="80" rx="20" fill="#2563eb" opacity="0.10" />
          <path d="M40 21a19 19 0 1 1 0 38 19 19 0 0 1 0-38Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 13c-6.08 0-11 3.13-11 7v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-2c0-3.87-4.92-7-11-7Z" fill="#2563eb" />
        </svg>
        <div className="mt-3 text-center text-[var(--color-primary)] font-semibold">
          “Your enterprise chatbot, 24/7 secure and multilingual.”
        </div>
        <p className="text-center opacity-80 mt-2 max-w-lg">
          Now supporting context switching, language translation, zero data retention, and human handoff—all with vibrant live analytics. <br />
          <a href="/contact" className={noUnderline}>
            Request a private demo
          </a>
        </p>
      </div>
    ),
    details: (
      <>
        <h2 className="text-xl mb-2 text-[var(--color-primary)]">
          Chatbot Platform Deep Dive
        </h2>
        <ul className="list-disc pl-5 mb-4 opacity-90">
          <li>Multi-model (Claude, GPT, Open-Source) chat switching</li>
          <li>Enterprise deployments (Azure, AWS)</li>
          <li>Custom bot personalities for retail, fintech, IT</li>
          <li>End-to-end analytics & dashboards</li>
          <li>GDPR/HIPAA privacy, zero-retention backend</li>
        </ul>
        <p>
          <a href="/contact" className={noUnderline}>
            Request a private chatbot demo
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Generative Document AI",
    description: (
      <>
        Gridspark's proprietary pipeline for document parsing, summarization, search, and Q&amp;A.<br />
        <span className="opacity-90">
          Recent Innovations: RAG pipelines, contract review, context-aware summaries, and automation for legal and research workflows.
        </span>
        <br />
        <br />
        <span className={noUnderline}>
          Full Document AI platform demo →
        </span>
      </>
    ),
    route: "/solutions/document-ai",
    demoComponent: (
      <div className="p-4 border rounded shadow bg-[var(--color-card)] border-[var(--color-border)] opacity-90">
        <span className="italic opacity-75">
          Preview: Upload, summarize, and query docs. AI redacts PII, generates insights, and upholds data privacy.
        </span>
      </div>
    ),
    details: (
      <>
        <h2 className="text-xl mb-2 text-[var(--color-primary)]">
          Document AI Achievements
        </h2>
        <ul className="list-disc pl-5 mb-4 opacity-90">
          <li>Real-time PDF/Word ingestion & summary</li>
          <li>Contextual RAG (Retrieval-Augmented Generation)</li>
          <li>Legal & research contract review bots</li>
          <li>Custom-branded dashboards for enterprise</li>
        </ul>
        <p>
          <a href="/contact" className={noUnderline}>
            Book a detailed walkthrough
          </a>
        </p>
      </>
    ),
  },
  {
    title: "CRM Lead Scoring AI",
    description: (
      <>
        AI-driven CRM scoring for sales automation, data enrichment, and pipeline optimization.<br />
        <span className="opacity-90">
          Recent Innovations: Multi-channel agents, Salesforce API integrations, and adaptive segmentation for better accuracy.
        </span>
        <br />
        <br />
        <span className={noUnderline}>
          Explore the CRM AI platform →
        </span>
      </>
    ),
    route: "/solutions/crm-lead-ai",
    demoComponent: (
      <table className="w-full rounded my-3 text-xs bg-[var(--color-card)] border border-[var(--color-border)]">
        <thead>
          <tr>
            <th className="p-2">Lead Name</th>
            <th className="p-2">Score</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Acme Corp</td>
            <td className="p-2">92%</td>
            <td className="p-2">Auto Email</td>
          </tr>
          <tr>
            <td className="p-2">Beta Co</td>
            <td className="p-2">55%</td>
            <td className="p-2">Manual Review</td>
          </tr>
          <tr>
            <td className="p-2">NextGen Ltd</td>
            <td className="p-2">87%</td>
            <td className="p-2">Auto Email</td>
          </tr>
        </tbody>
      </table>
    ),
    details: (
      <>
        <h2 className="text-xl mb-2 text-[var(--color-primary)]">
          CRM & Sales AI Details
        </h2>
        <ul className="list-disc pl-5 mb-4 opacity-90">
          <li>API integrations for live enrichment</li>
          <li>Automated outreach and follow-up</li>
          <li>Industry-specific lead scoring clusters</li>
          <li>Real-time analytics dashboards</li>
        </ul>
        <p>
          <a href="/contact" className={noUnderline}>
            Request a sales automation demo
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Private LLM Deployments",
    description: (
      <>
        Secure cloud/on-premise generative AI pipelines for research and enterprise compliance.<br />
        <span className="opacity-90">
          Recent Innovations: Azure VM deployment, ARM64 optimization, and SOC2-ready secure tunnels.
        </span>
        <br />
        <br />
        <span className={noUnderline}>
          More on private deployments →
        </span>
      </>
    ),
    route: "/solutions/private-llm",
    demoComponent: (
      <div className="p-4 border rounded shadow bg-[var(--color-card)] border-[var(--color-border)] opacity-90">
        <span className="italic opacity-75">
          Contact us for private LLM deployment—HIPAA, GDPR, and SOC2-compliant pipeline, zero vendor lock.
        </span>
      </div>
    ),
    details: (
      <>
        <h2 className="text-xl mb-2 text-[var(--color-primary)]">
          Deployment Pipelines
        </h2>
        <ul className="list-disc pl-5 mb-4 opacity-90">
          <li>Private cloud monitoring and logging</li>
          <li>ARM64 enterprise optimization</li>
          <li>Secure channel integrations</li>
          <li>Compliance-ready infrastructure</li>
        </ul>
        <p>
          <a href="/contact" className={noUnderline}>
            Get private deployment access
          </a>
        </p>
      </>
    ),
  },
];

const AIDemos = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const navigate = useNavigate();

  const handleDescClick = () => navigate(demos[activeDemo].route);

  return (
    <section className="min-h-screen w-full pt-24 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Gridspark <span className="text-gradient-blue">AI Innovations</span> & Demo Showcase
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover Gridspark’s AI breakthroughs — conversational agents, document automation, CRM scoring, and secure LLM deployments. All features adapt to your industry’s security and data needs.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            For a custom demo, <a href="/contact" className="text-[var(--color-primary)] hover:underline">contact us</a>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {demos.map((demo, idx) => (
            <button
              key={demo.title}
              onClick={() => setActiveDemo(idx)}
              className={`
                px-6 py-3 rounded-full font-bold text-sm transition-all duration-300
                ${activeDemo === idx
                  ? "bg-[var(--color-primary)] text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] scale-105"
                  : "bg-[var(--color-card)] text-gray-400 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-white"}
              `}
            >
              {demo.title}
            </button>
          ))}
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--color-border)] shadow-2xl transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                {demos[activeDemo].title}
              </h2>

              <div
                className="mb-8 text-gray-300 leading-relaxed cursor-pointer hover:text-white transition-colors"
                onClick={handleDescClick}
              >
                {demos[activeDemo].description}
              </div>

              <div className="text-gray-400 text-sm">
                {demos[activeDemo].details}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-black/30 p-6 rounded-xl border border-[var(--color-border)] backdrop-blur-sm">
                {demos[activeDemo].demoComponent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemos;
