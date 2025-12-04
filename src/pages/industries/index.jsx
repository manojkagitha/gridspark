import React from "react";

const industries = [
  {
    name: "Healthcare & Life Sciences",
    description:
      "Secure cloud infrastructure, data engineering and real-time analytics for hospitals, clinics, and medical research teams.",
    solutions: [
      "HIPAA-Compliant Infrastructure",
      "Real-time Patient Data Dashboards",
      "Medical NLP for Insights",
    ],
  },
  {
    name: "E-Commerce & Retail",
    description:
      "Automation, marketplaces, and personalized experiences using robust web frameworks and cloud tools.",
    solutions: [
      "Scalable Product Search",
      "Automated Inventory & Pricing",
      "Customer Behavior Analytics",
    ],
  },
  {
    name: "Financial Services",
    description:
      "End-to-end DevOps, log analysis, and fraud detection for banks, fintech, and insurance companies.",
    solutions: [
      "Regulatory-Compliant Deployment",
      "Log Retrieval & Fraud Detection",
      "Data Security Architecture",
    ],
  },
  {
    name: "Media & Content",
    description:
      "Solutions for media houses: from AI-powered transcription and video analytics to scalable delivery.",
    solutions: [
      "AI Live Transcription Systems",
      "Video Platform Automation",
      "Content Recommendation Engines",
    ],
  },
];

const Industries = () => (
  <section className="min-h-screen w-full pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[20%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
    </div>

    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-7 md:mb-8 text-center" data-aos="fade-up">
        Industries <span className="text-gradient-blue">We Serve</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto text-center text-gray-400 leading-relaxed px-4" data-aos="fade-up" data-aos-delay="100">
        Gridspark Solutions partners with innovative companies from healthcare to finance, retail, and creative media. Our team understands sector-specific regulations, workflows, and business priorities, delivering scalable solutions tailored to each domain.
      </p>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {industries.map(({ name, description, solutions }, idx) => (
          <div
            key={name}
            className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">
              {name}
            </h2>
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {description}
            </p>

            <ul className="space-y-2 sm:space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start text-gray-300">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mr-2 sm:mr-3 mt-1 text-[var(--color-primary)]"
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

export default Industries;
