import React from "react";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    description:
      "Secure cloud infrastructure, data engineering and real-time analytics for hospitals, clinics, and medical research teams.",
    solutions: [
      "HIPAA-Compliant Infrastructure",
      "Real-time Patient Data Dashboards",
      "Medical NLP for Insights"
    ]
  },
  {
    name: "E-Commerce & Retail",
    description:
      "Automation, marketplaces, and personalized experiences using robust web frameworks and cloud tools.",
    solutions: [
      "Scalable Product Search",
      "Automated Inventory & Pricing",
      "Customer Behavior Analytics"
    ]
  },
  {
    name: "Financial Services",
    description:
      "End-to-end DevOps, log analysis, and fraud detection for banks, fintech, and insurance companies.",
    solutions: [
      "Regulatory-Compliant Deployment",
      "Log Retrieval & Fraud Detection",
      "Data Security Architecture"
    ]
  },
  {
    name: "Media & Content",
    description:
      "Solutions for media houses: from AI-powered transcription and video analytics to scalable delivery.",
    solutions: [
      "AI Live Transcription Systems",
      "Video Platform Automation",
      "Content Recommendation Engines"
    ]
  }
];

const Industries = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-accent mb-8">Industries We Serve</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl">
        Gridspark Solutions partners with innovative companies from healthcare to finance, retail, and creative media. Our team understands sector-specific regulations, workflows, and business priorities, delivering scalable solutions tailored to each domain.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {industries.map(({ name, description, solutions }) => (
          <div key={name} className="bg-gray-800 rounded-xl shadow-xl p-8 border border-accent/10 flex flex-col">
            <h2 className="text-2xl font-bold text-accent mb-2">{name}</h2>
            <p className="mb-4 text-gray-400">{description}</p>
            <ul className="list-disc list-inside text-gray-300">
              {solutions.map((item) => (
                <li key={item} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
