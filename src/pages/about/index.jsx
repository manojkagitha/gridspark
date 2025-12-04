import React from "react";

const About = () => (
  <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6">
          About <span className="text-gradient-blue">Gridspark</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-4">
          Revolutionizing industries through artificial intelligence, intelligent automation, and scalable cloud infrastructure.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {/* Mission */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Our mission is to democratize advanced AI and cloud technologies, making them accessible, ethical, and actionable for businesses of all sizes—enabling measurable impact, sustainable innovation, and superior user experiences.
          </p>
        </div>

        {/* Why Choose Gridspark */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Why Choose Gridspark?</h2>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">▹</span>
              <span>Deep expertise in Large Language Models (LLMs), AI-driven automation, and multi-cloud architectures.</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">▹</span>
              <span>End-to-end project delivery: from strategic consulting and ML model development to cloud-native deployment.</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">▹</span>
              <span>Proven impact with enterprise-scale AI solutions spanning healthcare, finance, retail, and media sectors.</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">▹</span>
              <span>Commitment to transparency, data privacy, and inclusive innovation for our clients and partners.</span>
            </li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-primary)]">Integrity & Transparency</h3>
            <p className="text-sm sm:text-base text-gray-400">Client-first collaboration built on trust and honest communication.</p>
          </div>
          <div className="card">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-primary)]">Continuous Learning</h3>
            <p className="text-sm sm:text-base text-gray-400">Staying ahead of the curve with constant technological evolution.</p>
          </div>
          <div className="card">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-primary)]">Inclusive Innovation</h3>
            <p className="text-sm sm:text-base text-gray-400">Developing responsible AI that benefits everyone.</p>
          </div>
          <div className="card">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--color-primary)]">Measurable Impact</h3>
            <p className="text-sm sm:text-base text-gray-400">Delivering real business outcomes and ROI.</p>
          </div>
        </div>

        {/* Team & Innovation */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="400">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Our Team</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our diverse team unites software engineers, AI researchers, cloud architects, UX designers, and industry consultants. We cultivate a culture of curiosity and experimentation, fostering cross-functional collaboration.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Innovation & Impact</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                At Gridspark, we continuously pioneer solutions harnessing generative AI, real-time transcription, and advanced search analytics. Our products empower clients to accelerate digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
