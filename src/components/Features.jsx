import React from "react";
import { FaBolt, FaShieldAlt, FaRocket, FaCogs } from "react-icons/fa";

const features = [
  { icon: <FaRocket className="text-2xl text-primary" />, title: "Fast Delivery", desc: "Agile team, rapid sprints, on-time results." },
  { icon: <FaShieldAlt className="text-2xl text-secondary" />, title: "Secure and Scalable", desc: "Enterprise security and robust systems." },
  { icon: <FaBolt className="text-2xl text-accent" />, title: "Innovative Tech", desc: "Latest frameworks, modern architectures." },
  { icon: <FaCogs className="text-2xl text-dark" />, title: "Custom Solutions", desc: "Tailored projects for every business." },
];

const Features = () => (
  <section className="section-padding max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Gridspark?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map(({ icon, title, desc }) => (
        <div key={title} className="card text-center">
          <div className="mb-3">{icon}</div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
