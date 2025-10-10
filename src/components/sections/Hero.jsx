import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative text-white bg-dark">
    {/* Background Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 opacity-70"></div>
    
    {/* Particle-like background effect */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
        Build What's Next with Generative AI
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
        We partner with businesses to build custom AI models, automate complex workflows, and unlock transformative growth.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/ai-demos" className="btn-primary">
          Explore AI Demos
        </Link>
        <Link to="/contact" className="btn-secondary">
          Book a Consultation
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
