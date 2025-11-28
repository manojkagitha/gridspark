import React from "react";

const products = [
  {
    name: "TinyKola – Restaurant AI RMS",
    description:
      "AI-powered Restaurant Management Suite for Indian eateries, combining fast billing, digital menus, role-based staff access, and real-time sales analytics to boost margins and simplify daily ops.",
  },
  {
    name: "ChecKaro Home Inspection",
    description:
      "Hyderabad’s trusted home inspection service using advanced German and US tech to detect civil, electrical, and plumbing issues, delivering detailed digital reports and actionable fixes before you move in.",
  },
  {
    name: "AI Chat Assistant",
    description:
      "A customizable chatbot that integrates into your platform, handling live Q&A, customer support, and automated scheduling.",
  },
  {
    name: "GenAI Transcription Suite",
    description:
      "Real-time meeting and interview transcription tool powered by large language models, compatible with Zoom, Teams, and web calls.",
  },
  {
    name: "OpenSearch Monitoring Dashboard",
    description:
      "Enterprise dashboard for scalable log analytics, search events, and real-time metrics, built for OpenSearch clusters.",
  },
  {
    name: "Cloud Cost Analyzer",
    description:
      "Smart Azure and AWS cost tracking and alerting engine, helping teams optimize resources and spot budget issues early.",
  },
];

const Products = () => (
  <section className="min-h-screen w-full pt-24 pb-20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center" data-aos="fade-up">
        Our <span className="text-gradient-blue">Products</span>
      </h1>
      <p className="text-xl mb-16 max-w-3xl mx-auto text-center text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
        Explore Gridspark Solutions’ suite of scalable products designed for enterprise automation, AI insight, and cloud optimization. Each product can be deployed, customized, and supported by our expert team.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(({ name, description }, idx) => (
          <div
            key={name}
            className="glass-panel p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">
              {name}
            </h2>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
