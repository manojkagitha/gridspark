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
      "Monitoring & Cost Optimization",
    ],
  },
  {
    title: "Data Engineering & OpenSearch",
    description:
      "Advanced data pipelines and scalable search solutions for enterprise analytics. Experience in OpenSearch hosting, migration, and visualization dashboards.",
    features: [
      "OpenSearch Design & Management",
      "Log & Event Analytics",
      "ETL/ELT Automation",
      "Custom Dashboarding",
    ],
  },
  {
    title: "AI & Live Transcription Systems",
    description:
      "Integrated AI solutions: speech-to-text, automated transcription, and real-time meeting assistants leveraging LLMs for actionable intelligence.",
    features: [
      "Zoom/Call Live Transcription",
      "Ollama & LLaMA Integration",
      "Custom NLP Agents",
      "Real-time Monitoring",
    ],
  },
  {
    title: "Web Development & Automation",
    description:
      "Robust, user-focused applications—React, Next.js, and cross-platform automation for web, desktop, and business workflows.",
    features: [
      "Frontend & Backend Engineering",
      "Flutter Windows Apps",
      "API Automation",
      "Secure User Management",
    ],
  },
];

const Expertise = () => (
  <section className="min-h-screen w-full pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-7 md:mb-8 text-center" data-aos="fade-up">
        Our <span className="text-gradient-blue">Expertise</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto text-center text-gray-400 leading-relaxed px-4" data-aos="fade-up" data-aos-delay="100">
        Gridspark Solutions brings deep experience across cloud, DevOps, advanced data engineering, scalable search, and AI-powered analytics. Our specialists enable digital transformation for leading brands.
      </p>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {expertiseList.map(({ title, description, features }, idx) => (
          <div
            key={title}
            className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">
              {title}
            </h2>
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {description}
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start text-gray-300">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-primary)] flex-shrink-0 mr-2 sm:mr-3 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm opacity-90 group-hover:text-white transition-colors">{item}</span>
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
