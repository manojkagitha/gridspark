import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-24 px-4 text-center">
    <h1 className="text-5xl font-extrabold mb-4">Brighter Tech. Smarter Businesses.</h1>
    <p className="text-lg mb-8">Innovation for Restaurants, Sports, and Web—power your future with Gridspark.</p>
    <Link to="/solutions" className="btn-primary mr-4">Explore Solutions</Link>
    <Link to="/contact" className="btn-secondary">Contact Us</Link>
  </section>
);

export default Hero;
