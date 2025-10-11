import React from "react";
import { Link } from "react-router-dom";

// AI-focused components
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";

// Consistent accent color from your reference: text-accent = "text-[#FFB53A]"
const accentClass = "text-[#FFB53A]";

const Home = () => (
  <div className="relative text-white min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
    {/* Background overlays */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-70 pointer-events-none"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none"></div>

    <div className="relative z-10">
      {/* HERO section */}
      <Hero />

      {/* End-to-End Partner + Features Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className={`text-5xl font-extrabold mb-4 ${accentClass}`}>Your End-to-End AI Partner</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-2">
              Gridspark is with you at every step: from strategy and discovery—to design, implementation, and production scale. Our team ensures delivery of robust, future-ready AI solutions tailored to your industry.
            </p>
          </div>
          {/* Features Section (modern, innovative) */}
          <Features />
        </div>
      </section>

      {/* Why Gridspark AI + Newsletter seamlessly merged */}
      <section className="pt-16 pb-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${accentClass}`}>Why Gridspark AI?</h2>
          <p className="text-white font-medium mb-6 text-lg">
            We combine deep AI engineering with DevOps excellence to build intelligent, reliable, and scalable solutions.
            Unlock value from your data and new technology—without complexity.
          </p>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-semibold mb-10">
            <div className="flex items-center justify-center">
              <span className={`${accentClass} mr-2 text-2xl`}>✓</span>
              <span className="font-bold text-white">Expertise in Large Language Models (LLMs)</span>
            </div>
            <div className="flex items-center justify-center">
              <span className={`${accentClass} mr-2 text-2xl`}>✓</span>
              <span className="font-bold text-white">End-to-end AI project implementation</span>
            </div>
            <div className="flex items-center justify-center">
              <span className={`${accentClass} mr-2 text-2xl`}>✓</span>
              <span className="font-bold text-white">Rapid deployment and continuous improvement</span>
            </div>
            <div className="flex items-center justify-center">
              <span className={`${accentClass} mr-2 text-2xl`}>✓</span>
              <span className="font-bold text-white">Transparent process with measurable ROI</span>
            </div>
          </div>
          {/* Newsletter form with *no* additional square/outer box */}
          <div className="mt-2 mx-auto max-w-xl">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders - handled by Testimonials only once */}
      <section className="py-12 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
        <Testimonials />
      </section>
    </div>
  </div>
);

export default Home;
