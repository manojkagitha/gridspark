import React from "react";

const resources = [
  {
    type: "Blog",
    title: "Latest Trends in Cloud Automation",
    description: "Discover how multi-cloud strategies and automation frameworks are reshaping enterprise IT.",
    link: "/resources/blog/cloud-automation-trends"
  },
  {
    type: "Whitepaper",
    title: "Scaling OpenSearch for Global Enterprises",
    description: "In-depth analysis of OpenSearch cluster management and best practices for large installations.",
    link: "/resources/whitepapers/opensearch-scaling"
  },
  {
    type: "Webinar",
    title: "AI-Driven Transcription Systems Explained",
    description: "Join our expert webinar covering architecture and deployment strategies for real-time transcription.",
    link: "/resources/webinars/ai-transcription"
  },
  {
    type: "Case Study",
    title: "Cost Optimization for Azure Cloud",
    description: "How a leading retailer saved 30% annually through cloud cost monitoring and automation.",
    link: "/resources/case-studies/azure-cost-optimization"
  }
];

const Resources = () => (
  <section className="py-20 bg-gradient-to-br from-light via-secondary/10 to-primary/10">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-primary mb-8">Resources & Insights</h1>
      <p className="text-xl text-dark mb-12 max-w-3xl">
        Explore our collection of authoritative resources, including blogs, whitepapers, webinars, and case studies designed to help you make informed decisions around cloud, AI, and data analytics.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {resources.map(({ type, title, description, link }) => (
          <a href={link} key={title} className="bg-white rounded-xl shadow-lg p-8 border border-primary/10 flex flex-col hover:shadow-xl transition-shadow">
            <span className="text-sm font-semibold text-secondary mb-2">{type}</span>
            <h2 className="text-2xl font-bold text-primary mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Resources;
