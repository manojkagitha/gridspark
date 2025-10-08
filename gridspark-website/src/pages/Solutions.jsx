import React from "react";
import { FaUtensils, FaRunning, FaDesktop, FaCode } from "react-icons/fa";

const solutions = [
  {
    icon: <FaUtensils className="text-3xl text-secondary" />,
    title: "Restaurant Technology",
    desc: "POS, online ordering, kitchen automation, customer analytics",
  },
  {
    icon: <FaRunning className="text-3xl text-accent" />,
    title: "Sports Platforms",
    desc: "Athlete tracking, fan engagement, tournament management, live scoring",
  },
  {
    icon: <FaDesktop className="text-3xl text-primary" />,
    title: "Web Design & Development",
    desc: "Responsive websites, e-commerce, UI/UX consulting, branding",
  },
  {
    icon: <FaCode className="text-3xl text-dark" />,
    title: "Custom Software",
    desc: "Enterprise apps, API dev, cloud migration, mobile apps",
  },
];

const Solutions = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-12">Our Solutions</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {solutions.map(({ icon, title, desc }) => (
        <div key={title} className="card flex flex-col items-center text-center">
          {icon}
          <h2 className="mt-4 mb-2 text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Solutions;
