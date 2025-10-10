import React from "react";
import { Link } from "react-router-dom";

// --- UPDATED IMPORTS ---
// All component paths now point to the new "sections" subfolder.
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import PricingPlans from "../components/sections/PricingPlans";
import Newsletter from "../components/sections/Newsletter";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";

const features = [
  {
    title: "AI Demo Showcase",
    description: "Interact with live chatbots, document summarizer, and CRM automation.",
    to: "/ai-demos",
    accent: "bg-gradient-to-r from-blue-500 to-purple-600",
  },
  {
    title: "Services",
    description: "Automation, cloud migration, and custom software for scalable growth.",
    to: "/services",
    accent: "bg-gradient-to-r from-green-500 to-teal-600",
  },
  {
    title: "Case Studies",
    description: "See real-world impact—restaurant tech, enterprise automation, more.",
    to: "/case-studies",
    accent: "bg-gradient-to-r from-pink-600 to-red-500",
  },
  {
    title: "Careers",
    description: "Join the team building tomorrow's tech. See open roles.",
    to: "/careers",
    accent: "bg-gradient-to-r from-yellow-500 to-orange-600",
  },
  {
    title: "Meet the Team",
    description: "Our experts drive your business forward.",
    to: "/about",
    accent: "bg-gradient-to-r from-gray-600 to-blue-700",
  },
];

const Home = () => (
  <div>
    <Hero />
    <Features />
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feat) => (
          <Link
            key={feat.to}
            to={feat.to}
            className={`hover:scale-105 transition block rounded-xl p-6 shadow-lg text-left ${feat.accent}`}
          >
            <h3 className="text-2xl text-white font-semibold mb-2">{feat.title}</h3>
            <p className="text-white text-md">{feat.description}</p>
          </Link>
        ))}
      </div>
    </section>
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-secondary mb-4">Why Gridspark?</h2>
      <p className="text-gray-100 mb-4 text-lg">
        We combine AI engineering, DevOps excellence, and business consulting to build smarter, safer, and more reliable digital solutions. Helping you unlock value from data, automation, and new technology—without complexity.
      </p>
      <ul className="grid md:grid-cols-2 gap-4 text-gray-200 mb-8">
        <li>✓ Tailored solutions—not one-size-fits-all</li>
        <li>✓ End-to-end project support</li>
        <li>✓ Fast deployment and continuous improvement</li>
        <li>✓ Transparent process, measurable results</li>
      </ul>
    </section>
    <PricingPlans preview />
    <Newsletter />
    <section className="bg-gray-900 py-8">
      <Team />
    </section>
    <section>
      <Testimonials />
    </section>
  </div>
);

export default Home;
