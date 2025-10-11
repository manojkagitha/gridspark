import React from "react";
import { Link } from "react-router-dom";

// AI-focused components
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";

// AI feature cards
const featureCards = [
  {
    title: "AI Demo Showcase",
    description: "Interact with live chatbots, document summarizers, and CRM automation."
  },
  {
    title: "Our AI Services",
    description: "Explore our expertise in automation, cloud migration, and custom AI software."
  },
  {
    title: "AI Case Studies",
    description: "See real-world impact—from enterprise automation to generative AI solutions."
  },
];

const Home = () => (
  <div className="relative text-white">
    {/* Full-page HERO gradient and SVG striped overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-70 pointer-events-none"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>

    <div className="relative z-10">
      {/* HERO section comes first */}
      <Hero />

      {/* Features section */}
      <section className="py-20 min-h-[480px] bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-accent mb-8">Features</h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Discover how Gridspark accelerates your AI and automation journey.
            We offer best-in-class models, integrations, and developer tools for enterprise use cases.
          </p>
          <Features />
        </div>
      </section>

      {/* AI Feature Cards */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-accent mb-8">AI Feature Showcase</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map(({ title, description }) => (
              <div
                key={title}
                className="bg-gray-900 rounded-xl shadow-lg p-8 border border-accent/10 flex flex-col hover:shadow-2xl transition-shadow hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-accent mb-2">{title}</h3>
                <p className="mb-2 text-gray-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GridSpark Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-accent mb-4">
            Why Gridspark for AI?
          </h2>
          <p className="text-white font-medium mb-6 text-lg">
            We combine deep AI engineering with DevOps excellence to build intelligent, reliable, and scalable solutions.
            We help you unlock value from your data and new technology—without the complexity.
          </p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-white text-lg font-semibold">
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span> Expertise in Large Language Models (LLMs)
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span> End-to-end AI project implementation
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span> Rapid deployment and continuous improvement
            </li>
            <li className="flex items-center">
              <span className="text-accent mr-2">✓</span> Transparent process with measurable ROI
            </li>
          </ul>
        </div>
      </section>

      <Newsletter />
      <Testimonials />
    </div>
  </div>
);

export default Home;
