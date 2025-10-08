import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-gradient-to-br from-primary via-accent to-secondary text-white py-24 px-4 text-center min-h-[400px] flex flex-col justify-center items-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-sans drop-shadow">Brighter Tech. Smarter Businesses.</h1>
    <p className="text-xl md:text-2xl mb-8 font-light max-w-xl mx-auto">
      Transform your workflow with Gridspark Solutions – sleek platforms for restaurants, sports & web.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link to="/contact" className="btn-primary text-lg font-semibold px-8 py-4 rounded-xl">Contact Us</Link>
      <Link to="/contact" className="btn-secondary text-lg font-semibold px-8 py-4 rounded-xl">Get Started</Link>
    </div>
  </section>
);

export default Hero;
