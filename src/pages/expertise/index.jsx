import React from "react";

const expertiseList = [
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Architecture and automation on Azure, AWS, and multi-cloud. Accelerate delivery, secure deployments, and optimize resource usage across your platforms.",
    features: [
      "CI/CD Pipeline Implementation",
      "Infrastructure as Code (IaC)",
      "Multi-cloud Strategy",
      "Monitoring & Cost Optimization"
    ]
  },
  {
    title: "Data Engineering & OpenSearch",
    description:
      "Advanced data pipelines and scalable search solutions for enterprise analytics. Experience in OpenSearch hosting, migration, and visualization dashboards.",
    features: [
      "OpenSearch Design & Management",
      "Log & Event Analytics",
      "ETL/ELT Automation",
      "Custom Dashboarding"
    ]
  },
  {
    title: "AI & Live Transcription Systems",
    description:
      "Integrated AI solutions: speech-to-text, automated transcription, and real-time meeting assistants leveraging LLMs for actionable intelligence.",
    features: [
      "Zoom/Call Live Transcription",
      "Ollama & LLaMA Integration",
      "Custom NLP Agents",
      "Real-time Monitoring"
    ]
  },
  {
    title: "Web Development & Automation",
    description:
      "Robust, user-focused applications—React, Next.js, and cross-platform automation for web, desktop, and business workflows.",
    features: [
      "Frontend & Backend Engineering",
      "Flutter Windows Apps",
      "API Automation",
      "Secure User Management"
    ]
  }
];

const Expertise = () => (
  <section className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-accent mb-8">Our Expertise</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl">
        Gridspark Solutions brings deep experience across cloud, DevOps, advanced data engineering, scalable search, and AI-powered analytics. Our specialists enable digital transformation for leading brands.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {expertiseList.map(({ title, description, features }) => (
          <div key={title} className="bg-gray-800 rounded-xl shadow-xl p-8 border border-accent/10 flex flex-col">
            <h2 className="text-2xl font-bold text-accent mb-2">{title}</h2>
            <p className="mb-4 text-gray-400">{description}</p>
            <ul className="list-disc list-inside text-gray-300">
              {features.map((item) => (
                <li key={item} className="mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
