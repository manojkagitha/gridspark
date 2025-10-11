import React from "react";
import { Link } from "react-router-dom";

// AI-focused components
import Hero from "../../components/sections/Hero";
import TechStackBanner from "../../components/sections/TechStackBanner";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";

// AI feature cards
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
  <div className="relative text-white">
    {/* --- Full-page HERO gradient and SVG striped overlay, matches Hero.jsx --- */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 opacity-70 pointer-events-none"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>

    <div className="relative z-10">
      <Hero />
      <TechStackBanner />
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

      {/* --- Why GridSpark section --- */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-blue-400 md:text-blue-300 mb-4">
          Why Gridspark for AI?
        </h2>
        <p className="text-white font-medium mb-6 text-lg">
          We combine deep AI engineering with DevOps excellence to build intelligent, reliable, and scalable solutions. We help you unlock value from your data and new technology—without the complexity.
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
      </section>

      <Newsletter />
      <Testimonials />
    </div>
  </div>
);

export default Home;
