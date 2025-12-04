import React from "react";

const products = [
  {
    name: "TinyKola – Restaurant AI RMS",
    description:
      "AI-powered Restaurant Management Suite for Indian eateries, combining fast billing, digital menus, role-based staff access, and real-time sales analytics to boost margins and simplify daily ops.",
    url: "https://www.tinykola.com/",
    logo: "/tinykola-logo.svg",
    external: true
  },
  {
    name: "ChecKaro Home Inspection",
    description:
      "Hyderabad's trusted home inspection service using advanced German and US tech to detect civil, electrical, and plumbing issues, delivering detailed digital reports and actionable fixes before you move in.",
    url: "https://checkaro.in/",
    logo: "https://checkaro.in/favicon.ico",
    external: true
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
        {products.map(({ name, description, url, logo, external }, idx) => {
          const CardContent = (
            <>
              {/* Logo Section */}
              {logo && (
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-2 shadow-lg">
                    <img 
                      src={logo} 
                      alt={`${name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {external && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-xs font-bold shadow-lg">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      External
                    </span>
                  )}
                </div>
              )}
              
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[var(--color-primary)] transition-colors">
                {name}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {description}
              </p>
              
              {/* Visit Link for external products */}
              {external && url && (
                <div className="flex items-center gap-2 text-[var(--color-primary)] group-hover:gap-3 transition-all mt-4 pt-4 border-t border-white/10">
                  <span className="text-sm font-semibold">Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              )}
            </>
          );

          return external && url ? (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group hover:scale-105 touch-manipulation active:scale-95 block"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {CardContent}
            </a>
          ) : (
            <div
              key={name}
              className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Products;
