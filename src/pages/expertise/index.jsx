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
  <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold text-accent mb-8 text-center">Our Expertise</h1>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-center">
        Gridspark Solutions brings deep experience across cloud, DevOps, advanced data engineering, scalable search, and AI-powered analytics. Our specialists enable digital transformation for leading brands.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        {expertiseList.map(({ title, description, features }) => (
          <div
            key={title}
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-accent/10 flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            <h2 className="text-2xl font-bold text-accent mb-3">{title}</h2>
            <p className="mb-5 text-gray-400">{description}</p>
            <ul className="space-y-3">
              {features.map((item) => (
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

export default Expertise;
