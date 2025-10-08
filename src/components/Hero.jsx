import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-gradient-to-r from-[#0F1629] via-[#1C2539] to-[#253250] text-white py-28 px-4 text-center min-h-[500px] flex flex-col justify-center items-center">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-sans drop-shadow">Brighter Tech. Smarter Businesses.</h1>
    <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
      Welcome to Gridspark Solutions – transforming restaurants and sports businesses with seamless RMS platforms and live engagement tools. 
      <br /><br />
      We design powerful apps and websites, elevate daily operations, drive revenue, and create stunning user experiences – just like Apple.
      <br /><br />
      Discover intelligent tech, sleek interfaces, and reliable support for all your business goals.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Link to="/contact" className="btn-primary text-lg font-semibold px-8 py-4 rounded-xl bg-primary">Contact Us</Link>
      <Link to="/contact" className="btn-secondary text-lg font-semibold px-8 py-4 rounded-xl bg-secondary">Get Started</Link>
    </div>
  </section>
);

export default Hero;
