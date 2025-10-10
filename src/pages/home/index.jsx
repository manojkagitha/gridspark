import React from "react";
import { Link } from "react-router-dom";

// Import your revamped, AI-focused components
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

// Other components remain except PricingPlans and Team removed
import Newsletter from "../components/sections/Newsletter";
import Testimonials from "../components/sections/Testimonials";

// Updated feature cards to align with the AI theme
const featureCards = [
  {
    title: "AI Demo Showcase",
    description: "Interact with live chatbots, document summarizers, and CRM automation.",
    to: "/ai-demos",
    accent: "bg-gradient-to-r from-blue-500 to-purple-600",
  },
  {
    title: "Our AI Services",
    description: "Explore our expertise in automation, cloud migration, and custom AI software.",
    to: "/services",
    accent: "bg-gradient-to-r from-green-500 to-teal-600",
  },
  {
    title: "AI Case Studies",
    description: "See real-world impact—from enterprise automation to generative AI solutions.",
    to: "/case-studies",
    accent: "bg-gradient-to-r from-pink-600 to-red-500",
  },
];

const Home = () => (
  <div>
    {/* --- NEW AI-FOCUSED HERO & FEATURES --- */}
    <Hero />
    <Features />

    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {featureCards.map((feat) => (
          <Link
            key={feat.to}
            to={feat.to}
            className="hover:scale-105 transition block rounded-xl p-6 shadow-lg text-left text-white transform hover:-translate-y-1"
            style={{ background: feat.accent }}
          >
            <h3 className="text-2xl font-semibold mb-2">{feat.title}</h3>
            <p className="text-md">{feat.description}</p>
          </Link>
        ))}
      </div>
    </section>

    {/* --- REWRITTEN "WHY GRIDSPARK" SECTION --- */}
    <section className="max-w-4xl mx-auto px-4 pb-12">
      <h2 className="text-3xl font-bold text-secondary mb-4">Why Gridspark for AI?</h2>
      <p className="text-gray-100 mb-6 text-lg">
        We combine deep AI engineering with DevOps excellence to build intelligent, reliable, and scalable solutions. We help you unlock value from your data and new technology—without the complexity.
      </p>
      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-gray-200 text-lg">
        <li className="flex items-center"><span className="text-accent mr-2">✓</span> Expertise in Large Language Models (LLMs)</li>
        <li className="flex items-center"><span className="text-accent mr-2">✓</span> End-to-end AI project implementation</li>
        <li className="flex items-center"><span className="text-accent mr-2">✓</span> Rapid deployment and continuous improvement</li>
        <li className="flex items-center"><span className="text-accent mr-2">✓</span> Transparent process with measurable ROI</li>
      </ul>
    </section>

    <Newsletter />
    <Testimonials />
  </div>
);

export default Home;
