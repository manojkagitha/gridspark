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

const CaseStudies = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-accent">Case Studies</h1>
    <p className="mb-8 text-gray-200">
      See how Gridspark Solutions helps clients from startups to enterprises realize real business impact with cloud and AI innovation.
    </p>
    <div className="grid gap-8">
      {studies.map((study, idx) => (
        <div key={idx} className="border border-gray-700 bg-dark rounded-lg p-6 shadow">
          <h2 className="text-lg font-semibold text-secondary">{study.client}</h2>
          <hr className="my-3 border-accent" />
          <p><span className="font-semibold text-accent">Challenge:</span> {study.challenge}</p>
          <p className="mt-2"><span className="font-semibold text-secondary">Solution:</span> {study.solution}</p>
          <p className="mt-2"><span className="font-semibold text-primary">Outcome:</span> {study.outcome}</p>
        </div>
      ))}
    </div>
    <p className="mt-8 text-sm text-gray-400">
      Want to see what we can do for your business? <a href="/contact" className="text-accent underline">Contact us today</a>!
    </p>
  </div>
);

export default CaseStudies;
