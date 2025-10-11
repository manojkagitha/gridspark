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
  <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-accent mb-8 text-center">Industries We Serve</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
        Gridspark Solutions partners with innovative companies from healthcare to finance, retail, and creative media. Our team understands sector-specific regulations, workflows, and business priorities, delivering scalable solutions tailored to each domain.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {industries.map(({ name, description, solutions }) => (
          <div
            key={name}
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-accent/10 flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold text-accent mb-3">{name}</h2>
            <p className="mb-5 text-gray-400">{description}</p>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
