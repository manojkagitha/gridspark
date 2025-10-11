import React, { useState } from "react";
import { Link } from "react-router-dom";

const demos = [
  {
    title: "AI Chatbot Suite",
    description: (
      <>
        Gridspark’s unified chatbot stack with live demos showcasing multi-model chat, customer support, workflow integration, and private hosted LLMs.<br />
        <strong>Recent Innovations:</strong> Multi-model routing, enterprise privacy, custom branding, advanced analytics, human hand-off, multilingual support.
        <br /><br />
        <Link to="/ai-demos/chatbot-details" className="text-yellow-400 underline">Learn more about Chatbot innovations &rarr;</Link>
      </>
    ),
    demoComponent: (
      <iframe
        title="AI Chatbot Demo"
        src="https://widgetbot.io/demo"
        className="w-full h-80 rounded-lg border"
      />
    ),
    details: (
      <>
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Chatbot Platform Deep Dive</h2>
        <ul className="list-disc pl-5 text-gray-200 mb-4">
          <li>Multi-model (Claude, GPT, Open-Source) chat switching</li>
          <li>Live enterprise deployments (Azure, AWS)</li>
          <li>Custom bot personalities for retail, fintech, IT</li>
          <li>End-to-end customer analytics & dashboards</li>
          <li>GDPR/HIPAA privacy, zero-retention backend</li>
        </ul>
        <p>
          <Link to="/contact" className="text-yellow-400 underline">Request a private chatbot demo</Link>
        </p>
      </>
    ),
    route: "/ai-demos/chatbot-details",
  },
  {
    title: "Generative Document AI",
    description: (
      <>
        Gridspark's proprietary pipeline for document parsing, summarization, search, and Q&A.<br />
        <strong>Recent Innovations:</strong> RAG pipelines, contract review, research Q&A, legal document automation, PDF ingestion, context-aware highlights.
        <br /><br />
        <Link to="/ai-demos/document-ai" className="text-yellow-400 underline">Full Document AI platform demo &rarr;</Link>
      </>
    ),
    demoComponent: (
      <div className="p-4 border rounded shadow bg-gray-900 text-gray-100">
        <span className="italic text-gray-400">Demo interactive preview: Upload, summarize, extract Q&A from docs with enterprise privacy.</span>
        {/* You can link this to your /ai-demos/document-ai page */}
      </div>
    ),
    details: (
      <>
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Document AI Achievements</h2>
        <ul className="list-disc pl-5 text-gray-200 mb-4">
          <li>Real-time PDF/Word ingestion & summary</li>
          <li>Contextual RAG (Retrieval Augmented Generation) pipelines</li>
          <li>Legal, research, contract review bots</li>
          <li>Custom branded portals for enterprise</li>
        </ul>
        <p>
          <Link to="/contact" className="text-yellow-400 underline">Book a detailed walkthrough</Link>
        </p>
      </>
    ),
    route: "/ai-demos/document-ai",
  },
  {
    title: "CRM Lead Scoring AI",
    description: (
      <>
        AI-driven CRM scoring for sales automation—see live scoring, data enrichment, auto-outreach, and dynamic reporting.<br />
        <strong>Recent Innovations:</strong> Multi-channel scoring agents, integrated pipeline with Hubspot/Salesforce APIs, adaptive segmentation, feedback loops for accuracy.
        <br /><br />
        <Link to="/ai-demos/crm-lead-ai" className="text-yellow-400 underline">Explore the CRM AI platform &rarr;</Link>
      </>
    ),
    demoComponent: (
      <table className="w-full bg-gray-800 rounded my-3 text-xs">
        <thead>
          <tr>
            <th className="p-2">Lead Name</th>
            <th className="p-2">2025 Score</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">Acme Corp</td><td className="p-2">92%</td><td className="p-2">Auto Email</td></tr>
          <tr><td className="p-2">Beta Co</td><td className="p-2">55%</td><td className="p-2">Manual Review</td></tr>
          <tr><td className="p-2">NextGen Ltd</td><td className="p-2">87%</td><td className="p-2">Auto Email</td></tr>
        </tbody>
      </table>
    ),
    details: (
      <>
        <h2 className="text-xl font-bold text-yellow-400 mb-2">CRM & Sales AI Details</h2>
        <ul className="list-disc pl-5 text-gray-200 mb-4">
          <li>API integrations for live enrichment</li>
          <li>Auto-outreach and follow-up automation</li>
          <li>Industry-specific lead bucketing</li>
          <li>Real-time performance dashboard</li>
        </ul>
        <p>
          <Link to="/contact" className="text-yellow-400 underline">Request a sales automation demo</Link>
        </p>
      </>
    ),
    route: "/ai-demos/crm-lead-ai",
  },
  {
    title: "Private LLM Deployments",
    description: (
      <>
        On-premises or cloud-hosted generative AI pipelines for high-security use cases.<br />
        <strong>Recent Innovations:</strong> Azure VM live deployments, ARM64 optimization, secure access tunnels for research labs, medical and financial compliance.
        <br /><br />
        <Link to="/ai-demos/private-llm" className="text-yellow-400 underline">More on Private LLM Deployments &rarr;</Link>
      </>
    ),
    demoComponent: (
      <div className="p-4 border rounded shadow bg-gray-900 text-gray-100">
        <span className="italic text-gray-400">Contact us for live LLM deployment demos—HIPAA, GDPR, SOC2 compliant options with full control.</span>
      </div>
    ),
    details: (
      <>
        <h2 className="text-xl font-bold text-yellow-400 mb-2">Deployment Pipelines</h2>
        <ul className="list-disc pl-5 text-gray-200 mb-4">
          <li>Private Azure cloud deployments & monitoring</li>
          <li>ARM64 and enterprise VM optimizations</li>
          <li>Secure channel integrations</li>
          <li>Industry compliance features</li>
        </ul>
        <p>
          <Link to="/contact" className="text-yellow-400 underline">Get private deployment access</Link>
        </p>
      </>
    ),
    route: "/ai-demos/private-llm",
  }
];

const AIDemos = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <div className="min-h-screen w-full py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">Gridspark AI Innovations & Demo Showcase</h1>
        <p className="mb-8 text-gray-300">
          Discover Gridspark’s AI engineering breakthroughs of 2025—from advanced chat to GenAI document automation,
          CRM scoring, private LLM deployments, and Retrieval Augmented Generation (RAG) pipelines.<br />
          <span className="text-sm text-gray-400">For custom demos or NDA engagements, <Link to="/contact" className="text-yellow-400 underline">contact us</Link>.</span>
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {demos.map((demo, idx) => (
            <button
              key={demo.title}
              onClick={() => setActiveDemo(idx)}
              className={`px-5 py-2 rounded-xl font-medium text-base transition ${
                activeDemo === idx
                  ? "bg-yellow-400 text-black shadow"
                  : "bg-gray-800 text-gray-300 hover:bg-purple-700"
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>
        <div className="w-full bg-gray-800/95 px-8 py-8 rounded-2xl shadow-xl border border-yellow-400/20 flex flex-col mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">{demos[activeDemo].title}</h2>
          <div className="mb-4 text-gray-300">{demos[activeDemo].description}</div>
          <div>{demos[activeDemo].demoComponent}</div>
          <hr className="my-6 border-yellow-400/20" />
          <div className="text-gray-100">
            {demos[activeDemo].details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemos;
