import React from 'react';

// Accent color from reference image/code
const accentClass = "text-[#FFB53A]";

// Using inline SVGs for icons
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-900/90 p-7 rounded-2xl shadow-2xl text-left border border-[#FFB53A]/20 hover:-translate-y-1 hover:shadow-accent/30 transition-transform duration-200">
    <div className="flex items-center justify-center h-14 w-14 rounded-md bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-900 text-white mb-3">
      {icon}
    </div>
    <h3 className={`text-xl font-extrabold mb-2 ${accentClass}`}>{title}</h3>
    <p className="text-gray-300 text-base">{description}</p>
  </div>
);

const featuresData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V4.5"/>
      </svg>
    ),
    title: "Cutting-edge LLM Research",
    description: "We design, fine-tune, and optimize large language models (LLMs) and multi-modal AIs, exploring prompt engineering, RAG, knowledge distillation, privacy, and robust application of foundation models."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M7.5 10.5a4.5 4.5 0 109 0 4.5 4.5 0 10-9 0z" stroke="currentColor" strokeWidth={2} />
        <path d="M12 7v2.5" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Deep Learning Vision Systems",
    description: "Build AI image and video analytics—object detection, OCR, semantic segmentation, facial analysis, and medical imaging with convolutional and transformer-based architectures."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-7a2 2 0 00-2-2h-2m-6 0H7a2 2 0 00-2 2v7a2 2 0 002 2h2m0 0v2m6-2v2" />
      </svg>
    ),
    title: "Autonomous AI Agents",
    description: "Build intelligent, autonomous agents for enterprise—AI systems that handle scheduling, decision optimization, workflow integrations, and advanced automation for IT, HR, finance, or operations."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v-3a4 4 0 014-4h8a4 4 0 014 4v3" />
        <path d="M12 3v6M9 6h6" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "Generative AI for Enterprise",
    description: "Automate text generation, content creation, documentation, summarization, and Q&A workflows with scalable, secure, and adaptable GenAI pipelines."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={2}/>
        <path d="M8 9h8M8 13h2.5" stroke="currentColor" strokeWidth={2}/>
      </svg>
    ),
    title: "Natural Language Search & RAG",
    description: "Leverage retrieval augmented generation (RAG), neural search, and semantic text embeddings to empower AI-powered support, discovery, and business intelligence over huge document and data lakes."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13.875A4.125 4.125 0 0021 10 4.125 4.125 0 0016.875 6 4.125 4.125 0 0013.75 10 4.125 4.125 0 0017 13.875z"/>
        <path d="M3.95 18.132A8.958 8.958 0 0012 21a8.958 8.958 0 008.05-2.868M12 3a8.958 8.958 0 018.05 2.868M3.95 5.868A8.958 8.958 0 0112 3" stroke="currentColor" strokeWidth={2}/>
      </svg>
    ),
    title: "Advanced Data Analytics",
    description: "Mine structured and unstructured data for predictive modeling, forecasting, anomaly detection, and AI-driven reporting—enabling proactive decisions and new business insights."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth={2} />
      </svg>
    ),
    title: "AI Security & Privacy",
    description: "Secure deployments with privacy-preserving ML, zero-retention pipelines, encrypted inference, access controls, audit trails, and full compliance with HIPAA/GDPR/SOC2 requirements."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17l3 3 3-3M9 7l3-3 3 3" />
      </svg>
    ),
    title: "MLOps & AI Infrastructure",
    description: "End-to-end support for model training, continuous integration, versioning, monitoring, and cost-efficient deployment of machine learning systems at scale in the cloud or on-prem."
  }
];

const Features = () => (
  <section id="features" className="pt-12 pb-24 px-4 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
    <div className="max-w-7xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-center ${accentClass}`}>Innovative AI & Deep Learning Features</h2>
      <p className="text-lg text-gray-300 mb-14 max-w-3xl mx-auto text-center">
        From foundational research to applied business impact—discover how our team pushes the boundaries of AI to deliver solutions in natural language, computer vision, automation, security, analytics, and more.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map(feature => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
