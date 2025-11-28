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
    desc: "Automated POS and customer engagement platform for restaurants, boosting retention by 25% and doubling order accuracy.",
    highlights: [
      "Live table-side AI recommendations",
      "Integration with delivery apps and inventory systems",
    ],
  },
  {
    name: "SmartCricket",
    sector: "Sports/AI Analytics",
    desc: "Real-time athlete performance and fan engagement hub—doubling retention and eliminating 70% of manual reporting.",
    highlights: [
      "Live match dashboard with AI summaries",
      "Player merchandise recommendation engine",
    ],
  },
  {
    name: "InnoCRM",
    sector: "Enterprise SaaS",
    desc: "Custom CRM solution improving B2B conversions via AI-driven email automation and predictive scoring.",
    highlights: ["Smart lead qualification", "Conversational AI sales cockpit"],
  },
];

const testimonials = [
  {
    quote:
      "Gridspark transformed our analytics and reduced onboarding time for franchisees. We gained actionable insights within weeks.",
    by: "S. James, CEO, Tinykola Restaurants",
  },
  {
    quote:
      "Their AI pipeline for our cricket platform was a game changer—users love the live summaries and integrated fan engagement.",
    by: "M. Singh, CTO, SmartCricket",
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
  "Media & Marketing",
];

const Portfolio = () => (
  <div className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
    </div>

    {/* Hero Section */}
    <section className="max-w-4xl mx-auto text-center py-12 relative z-10" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Refining Success, <span className="text-gradient-blue">Project by Project</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
        Gridspark’s portfolio spans AI, automation, and digital innovation for global enterprises.
      </p>
    </section>

    {/* Stats Section */}
    <section className="flex flex-wrap justify-center gap-8 mb-16 relative z-10" data-aos="fade-up" data-aos-delay="100">
      {portfolioStats.map((stat) => (
        <div
          key={stat.label}
          className="glass-panel rounded-xl p-6 w-52 text-center hover:border-[var(--color-primary)] transition-colors"
        >
          <div className="text-4xl font-bold mb-2 text-[var(--color-primary)]">
            {stat.value}
          </div>
          <div className="uppercase tracking-wide text-xs font-bold text-gray-500">
            {stat.label}
          </div>
        </div>
      ))}
    </section>

    {/* Projects Section */}
    <section className="max-w-6xl mx-auto mb-20 relative z-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-white" data-aos="fade-up">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={proj.name}
            className="card group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="text-xl font-bold mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">
              {proj.name}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] mb-3">
              {proj.sector}
            </div>
            <p className="mb-4 text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
            <ul className="space-y-2">
              {proj.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start text-xs text-gray-500">
                  <span className="text-[var(--color-primary)] mr-2">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="max-w-4xl mx-auto mt-8 mb-20 relative z-10" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Client Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glass-panel rounded-xl p-8 relative">
            <div className="text-4xl text-[var(--color-primary)] opacity-20 absolute top-4 left-4">“</div>
            <p className="italic text-gray-300 mb-6 relative z-10 pt-2 text-center leading-relaxed">
              {t.quote}
            </p>
            <div className="font-bold text-center text-[var(--color-primary)] text-sm">
              — {t.by}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Industry Highlights */}
    <section className="max-w-4xl mx-auto pb-10 relative z-10" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-400">
        Industries We Transform
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {industries.map((industry) => (
          <span
            key={industry}
            className="
              px-5 py-2 rounded-full text-sm font-medium
              glass-panel text-gray-300 hover:text-white
              hover:border-[var(--color-primary)] transition-all cursor-default
            "
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  </div>
);

export default Portfolio;
