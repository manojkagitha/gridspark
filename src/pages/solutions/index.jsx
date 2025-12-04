import React from "react";
import { FaUtensils, FaRunning, FaDesktop, FaCode } from "react-icons/fa";

const solutions = [
  {
    icon: <FaUtensils className="text-3xl text-[var(--color-primary)]" />,
    title: "Restaurant Technology",
    desc: "POS, online ordering, kitchen automation, customer analytics",
  },
  {
    icon: <FaRunning className="text-3xl text-[var(--color-primary)]" />,
    title: "Sports Platforms",
    desc: "Athlete tracking, fan engagement, tournament management, live scoring",
  },
  {
    icon: <FaDesktop className="text-3xl text-[var(--color-primary)]" />,
    title: "Web Design & Development",
    desc: "Responsive websites, e-commerce, UI/UX consulting, brand identity",
  },
  {
    icon: <FaCode className="text-3xl text-[var(--color-primary)]" />,
    title: "Custom Software",
    desc: "Enterprise apps, API development, cloud migration, mobile applications",
  },
];

const Solutions = () => (
  <section className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center" data-aos="fade-up">
        Our <span className="text-gradient-blue">Solutions</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
        {solutions.map(({ icon, title, desc }, idx) => (
          <div
            key={title}
            className="card flex flex-col items-center text-center group"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl text-[var(--color-primary)]">
                {React.cloneElement(icon, { className: 'text-2xl sm:text-3xl text-[var(--color-primary)]' })}
              </div>
            </div>
            <h2 className="mt-3 sm:mt-4 mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
              {title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
