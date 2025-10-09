import React, { useState } from "react";

const demos = [
  {
    title: "AI Chatbot",
    description:
      "Natural language chatbot for customer support, FAQs, and instant help. Try asking something below!",
    demoComponent: (
      <iframe
        title="AI Chatbot Demo"
        src="https://widgetbot.io/demo"
        className="w-full h-80 rounded-lg border"
      />
    ), // Replace src with your widget or demo URL if available
  },
  {
    title: "Document Summarizer",
    description:
      "Upload a document and see instant AI-powered summary—great for legal docs, contracts, articles, and research.",
    demoComponent: (
      <div className="p-4 border rounded shadow bg-gray-900 text-gray-100">
        <span className="italic text-gray-400">Demo Coming Soon</span>
      </div>
    ),
  },
  {
    title: "CRM Lead Scoring & Automation",
    description:
      "See how AI scores your CRM leads and automates outreach for sales teams. Demo sample scores below:",
    demoComponent: (
      <table className="w-full bg-gray-800 rounded my-3 text-xs">
        <thead>
          <tr>
            <th className="p-2">Lead Name</th>
            <th className="p-2">Score</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">Acme Corp</td><td className="p-2">92%</td><td className="p-2">Auto Email</td></tr>
          <tr><td className="p-2">Beta Co</td><td className="p-2">55%</td><td className="p-2">Manual Review</td></tr>
        </tbody>
      </table>
    ),
  },
];

const AIDemos = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-accent mb-6">AI Demo Showcase</h1>
      <p className="mb-6">
        Explore Gridspark's live AI technologies—from chatbots to intelligent automation, document analysis, and more.<br />
        <span className="text-sm text-gray-400">For custom demos, <a href="/contact" className="text-accent underline">contact us</a>!</span>
      </p>
      <div className="flex space-x-3 mb-6">
        {demos.map((demo, idx) => (
          <button
            key={demo.title}
            onClick={() => setActiveDemo(idx)}
            className={`px-4 py-2 rounded ${
              activeDemo === idx
                ? "bg-accent text-white"
                : "bg-gray-800 text-gray-300 hover:bg-secondary"
            }`}
          >
            {demo.title}
          </button>
        ))}
      </div>
      <div className="border rounded p-6 bg-dark shadow-lg min-h-[350px]">
        <h2 className="text-xl font-semibold text-secondary mb-3">
          {demos[activeDemo].title}
        </h2>
        <p className="mb-5 text-gray-300">{demos[activeDemo].description}</p>
        <div>{demos[activeDemo].demoComponent}</div>
      </div>
    </div>
  );
};

export default AIDemos;
