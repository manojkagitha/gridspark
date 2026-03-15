import React from "react";
import { FaBrain, FaEye, FaRobot, FaMagic, FaSearch, FaChartLine, FaShieldAlt, FaCogs } from "react-icons/fa";

const FeatureCard = ({ icon, title, description }) => (
  <div className="card group flex flex-col items-center text-center hover:bg-white/5 hover:border-blue-500/50 transition-all cursor-default">
    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2 text-white group-hover:text-[var(--color-primary)] transition-colors">{title}</h3>
    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
  </div>
);

const featuresData = [
  {
    icon: <FaBrain className="text-blue-400 text-2xl" />,
    title: "Large Language Models",
    description: "Design, fine-tune, and optimize LLMs with prompt engineering, RAG, and knowledge distillation.",
  },
  {
    icon: <FaEye className="text-blue-400 text-2xl" />,
    title: "Computer Vision",
    description: "Build AI image and video analytics, object detection, OCR, segmentation, and facial analysis.",
  },
  {
    icon: <FaRobot className="text-blue-400 text-2xl" />,
    title: "Autonomous AI Agents",
    description: "Develop intelligent agents that optimize workflows, scheduling, and decision-making across enterprise.",
  },
  {
    icon: <FaMagic className="text-blue-400 text-2xl" />,
    title: "Generative AI",
    description: "Automate content creation, documentation, and summarization with secure GenAI workflows.",
  },
  {
    icon: <FaSearch className="text-blue-400 text-2xl" />,
    title: "Semantic Search",
    description: "Enable enterprise search and RAG-powered systems to transform knowledge into intelligent Q&A platforms.",
  },
  {
    icon: <FaChartLine className="text-blue-400 text-2xl" />,
    title: "Predictive Analytics",
    description: "Unlock insights with AI-driven forecasting, anomaly detection, and data reporting aligned to KPIs.",
  },
  {
    icon: <FaShieldAlt className="text-blue-400 text-2xl" />,
    title: "AI Security",
    description: "Build privacy-preserving ML with encrypted inference and full compliance (HIPAA, GDPR, SOC2).",
  },
  {
    icon: <FaCogs className="text-blue-400 text-2xl" />,
    title: "MLOps Infrastructure",
    description: "Streamline deployment and monitoring of ML systems with versioning, optimization, and automation.",
  },
];

const Features = () => (
  <section id="features" className="transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
