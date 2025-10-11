import React from "react";

const products = [
  {
    name: "AI Chat Assistant",
    description: "A customizable chatbot that integrates into your platform, handling live Q&A, customer support, and automated scheduling."
  },
  {
    name: "GenAI Transcription Suite",
    description: "Real-time meeting and interview transcription tool powered by large language models, compatible with Zoom, Teams, and web calls."
  },
  {
    name: "OpenSearch Monitoring Dashboard",
    description: "Enterprise dashboard for scalable log analytics, search events, and real-time metrics, built for OpenSearch clusters."
  },
  {
    name: "Cloud Cost Analyzer",
    description: "Smart Azure and AWS cost tracking and alerting engine, helping teams optimize resources and spot budget issues early."
  }
];

const Products = () => (
  <section className="py-20 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-accent mb-8">Our Products</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl">
        Explore Gridspark Solutions’ suite of scalable products designed for enterprise automation, AI insight, and cloud optimization. Each product can be deployed, customized, and supported by our expert team.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map(({ name, description }) => (
          <div
            key={name}
            className="bg-gray-900 rounded-xl shadow-lg p-8 border border-accent/10 flex flex-col hover:shadow-2xl transition-shadow hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-accent mb-2">{name}</h2>
            <p className="mb-2 text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
