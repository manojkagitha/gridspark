import React from "react";
import TechStackBanner from "../../components/sections/TechStackBanner.jsx";

const resources = [
  {
    type: "Blog",
    title: "Latest Trends in Cloud Automation",
    description:
      "Discover how multi-cloud strategies and automation frameworks are reshaping enterprise IT.",
    link: "/resources/blog/cloud-automation-trends",
  },
  {
    type: "Whitepaper",
    title: "Scaling OpenSearch for Global Enterprises",
    description:
      "In-depth analysis of OpenSearch cluster management and best practices for large installations.",
    link: "/resources/whitepapers/opensearch-scaling",
  },
  {
    type: "Webinar",
    title: "AI-Driven Transcription Systems Explained",
    description:
      "Join our expert webinar covering architecture and deployment strategies for real-time transcription.",
    link: "/resources/webinars/ai-transcription",
  },
  {
    type: "Case Study",
    title: "Cost Optimization for Azure Cloud",
    description:
      "How a leading retailer saved 30% annually through cloud cost monitoring and automation.",
    link: "/resources/case-studies/azure-cost-optimization",
  },
];

const Resources = () => (
  <div className="min-h-screen flex flex-col relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
    </div>

    <section className="pt-24 pb-20 flex-shrink-0 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" data-aos="fade-up">
          Resources & <span className="text-gradient-blue">Insights</span>
        </h1>
        <p className="text-xl mb-16 max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Explore our collection of authoritative resources, including blogs, whitepapers, webinars, and case studies designed to help you make informed decisions around cloud, AI, and data analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map(({ type, title, description, link }, idx) => (
            <a
              href={link}
              key={title}
              className="glass-panel p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <span className="text-sm font-bold mb-3 text-[var(--color-secondary)] uppercase tracking-wider">
                {type}
              </span>
              <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">
                {title}
              </h2>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* TechStackBanner: Full width, seamless into footer */}
    <div className="w-full flex-shrink-0 border-t border-[var(--color-border)] bg-black/20 backdrop-blur-sm">
      <TechStackBanner />
    </div>
  </div>
);

export default Resources;
