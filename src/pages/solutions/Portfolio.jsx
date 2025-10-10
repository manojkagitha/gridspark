import React from "react";

const portfolioStats = [
  { label: "Clients Served", value: 86 },
  { label: "AI Deployments", value: 34 },
  { label: "100% Success Rate", value: "Yes" },
  { label: "Industries Impacted", value: 11 },
];

const projects = [
  {
    name: "OrderlyAI",
    sector: "Hospitality",
    desc: "Automated POS and customer engagement platform for restaurants, driving a 25% boost in customer retention and a 2X improvement in order accuracy.",
    highlights: [
      "Live table-side AI recommendations",
      "Integration with delivery apps and inventory"
    ]
  },
  {
    name: "SmartCricket",
    sector: "Sports/AI Analytics",
    desc: "Real-time athlete biometrics and fan engagement portal. Doubled user retention and reduced manual data entry by 70%.",
    highlights: [
      "Live match dashboard with generative summaries",
      "Player merchandise AI recommendation engine"
    ]
  },
  {
    name: "InnoCRM",
    sector: "Enterprise SaaS",
    desc: "Custom CRM solution for B2B SaaS improving lead conversion with GPT-based email automation and smart qualification scoring.",
    highlights: [
      "Auto-prioritized sales pipeline",
      "Conversational UI with custom LLM"
    ]
  },
];

const testimonials = [
  {
    quote: "Gridspark transformed our analytics and reduced onboarding time for franchisees. We gained deep customer insights within weeks.",
    by: "S. James, CEO, Tinykola Restaurants"
  },
  {
    quote: "Their AI pipeline for our cricket platform was a game changer -- players and fans love the live summaries and engagement tools.",
    by: "M. Singh, CTO, SmartCricket"
  },
];

const industries = [
  "Hospitality",
  "Retail",
  "Sports Tech",
  "SaaS Platforms",
  "Consulting",
  "Healthcare",
  "eCommerce",
  "Logistics",
  "EdTech",
  "FinTech",
  "Media & Marketing"
];

const Portfolio = () => (
  <div className="min-h-screen py-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-4">
    {/* Hero Section */}
    <section className="max-w-3xl mx-auto text-center py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
        Refining Success, Project by Project
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        Gridspark’s portfolio spans AI, automation, and digital platforms for ambitious clients across the globe.
      </p>
    </section>

    {/* Stats Section */}
    <section className="flex flex-wrap justify-center gap-8 mb-10">
      {portfolioStats.map(stat => (
        <div key={stat.label} className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 w-52 text-center text-white">
          <div className="text-3xl font-bold mb-1 animate-bounce">{stat.value}</div>
          <div className="uppercase tracking-wider text-md">{stat.label}</div>
        </div>
      ))}
    </section>

    {/* Projects Section */}
    <section className="max-w-5xl mx-auto mb-14">
      <h2 className="text-2xl md:text-3xl text-accent font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div key={proj.name} className="bg-gray-800 rounded-lg shadow-md p-6 text-white">
            <div className="text-primary text-lg font-semibold mb-2">{proj.name}</div>
            <div className="text-sm text-gray-400 mb-2">{proj.sector}</div>
            <div className="mb-3 text-gray-200">{proj.desc}</div>
            <ul className="list-disc ml-5 text-gray-300 text-sm mb-2">
              {proj.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="max-w-2xl mx-auto mt-8 mb-12">
      <h2 className="text-xl font-bold text-accent mb-4 text-center">Client Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-700 rounded-lg px-6 py-4 italic text-gray-200 shadow">
            “{t.quote}”
            <div className="text-accent font-medium mt-2 not-italic">- {t.by}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Industry Highlights */}
    <section className="max-w-3xl mx-auto pb-10">
      <h2 className="text-xl font-bold text-accent mb-4 text-center">Industries We Transform</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((industry) => (
          <span key={industry} className="bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm">
            {industry}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default Portfolio;
