import React from "react";

const showcases = [
  {
    name: "Conversational AI Chatbot",
    stack: "OpenAI, Node.js, React",
    summary:
      "Delivers instant, natural conversations for helpdesk, onboarding, or lead qualification—fully integrated with web and mobile.",
    highlight: "Live intent recognition, context memory, API integrations.",
  },
  {
    name: "Real-Time AI Analytics Dashboard",
    stack: "Python, OpenSearch, Tailwind",
    summary:
      "Visualizes logs, error rates, and trend predictions from cloud platforms for rapid troubleshooting and business insight.",
    highlight: "Stream-processing, anomaly alerts, custom widgets.",
  },
  {
    name: "Document Summarizer",
    stack: "LLMs, Python, REST APIs",
    summary:
      "Summarizes incoming business docs and contracts on the fly—instantly send, parse, and receive key points for faster decisions.",
    highlight: "Process PDFs, emails, knowledge base articles.",
  },
  {
    name: "CRM Lead Score Predictor",
    stack: "Sklearn, Flask, React",
    summary:
      "Prioritize leads and automate outreach using AI model scoring—fully integrated with Salesforce pipelines.",
    highlight: "Auto-score, multi-channel triggers, customizable workflow.",
  },
];

const AIShowcase = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-accent mb-6">AI Solutions Showcase</h1>
    <p className="mb-8">
      Explore Gridspark’s most powerful AI tools, frameworks, and real integrations that deliver smarter automation for today's business needs.
    </p>
    <div className="grid gap-8">
      {showcases.map((item, idx) => (
        <div key={idx} className="border border-gray-700 bg-dark rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold text-secondary">{item.name}</h2>
          <div className="text-sm text-gray-400 mb-2">Tech Stack: <span className="text-accent">{item.stack}</span></div>
          <p className="mb-2 text-gray-200">{item.summary}</p>
          <div className="px-2 py-1 mt-2 bg-gray-900 rounded text-xs text-accent inline-block">{item.highlight}</div>
        </div>
      ))}
    </div>
    <p className="mt-10 text-sm text-gray-300">
      Interested in a custom AI solution or integration? <a href="/contact" className="text-accent underline">Contact our team</a> for a free consult!
    </p>
  </div>
);

export default AIShowcase;
