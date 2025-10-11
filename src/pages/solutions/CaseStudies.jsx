import React from "react";

const studies = [
  {
    client: "Nova Restaurant Group",
    challenge: "Manual billing, slow feedback and poor reservation analytics.",
    solution:
      "Gridspark Solutions implemented a cloud-based AI POS: auto-insights, text/speech sentiment analysis, real-time reservation analytics.",
    outcome:
      "40% faster billing, 25% increase in customer retention, instant analytics dashboard enabled smarter pricing decisions.",
  },
  {
    client: "FinEdge Insurance",
    challenge: "Handling thousands of client queries and policy updates weekly.",
    solution:
      "Deployed AI chatbot and workflow automation—integrated with client's CRM, able to answer queries and update policies autonomously.",
    outcome:
      "Reduced support tickets by 70%, 2x faster claims processing, improved customer satisfaction across all digital channels.",
  },
  {
    client: "OpenSearch Ops Team",
    challenge: "No centralized log analysis; critical outages went undetected.",
    solution:
      "Engineered log pipeline using OpenSearch, Fluent Bit, and custom dashboards for real-time detection and clustering.",
    outcome:
      "Immediate visibility, actionable diagnostic alerts, and improved uptime for mission critical cloud infrastructure.",
  },
];

const CaseStudyCard = ({ client, challenge, solution, outcome }) => (
  <div className="w-full bg-gray-800/95 px-8 py-8 rounded-2xl shadow-xl border border-yellow-400/20 flex flex-col md:flex-row items-start mb-10 space-y-4 md:space-y-0 md:space-x-10">
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-yellow-400 mb-3">{client}</h2>
      <div className="mb-4">
        <span className="font-semibold text-yellow-400">Challenge:</span>{" "}
        <span className="text-gray-300">{challenge}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-blue-400">Solution:</span>{" "}
        <span className="text-gray-200">{solution}</span>
      </div>
      <div>
        <span className="font-semibold text-purple-400">Outcome:</span>{" "}
        <span className="text-gray-200">{outcome}</span>
      </div>
    </div>
  </div>
);

const CaseStudies = () => (
  <div className="min-h-screen w-full py-16 px-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-yellow-400">Case Studies</h1>
      <p className="mb-8 text-gray-300">
        See how Gridspark Solutions helps clients from startups to enterprises realize real business impact with cloud and AI innovation.
      </p>
      <div className="flex flex-col gap-6">
        {studies.map((study, idx) => (
          <CaseStudyCard key={idx} {...study} />
        ))}
      </div>
      <p className="mt-10 text-sm text-gray-400">
        Want to see what we can do for your business?{" "}
        <a href="/contact" className="text-yellow-400 underline">
          Contact us today
        </a>
        !
      </p>
    </div>
  </div>
);

export default CaseStudies;
