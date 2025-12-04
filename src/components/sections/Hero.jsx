import React from "react";
import { Link } from "react-router-dom";
import Sparkle from "react-sparkle";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Badge */}
      <div className="inline-block mb-4 sm:mb-6 animate-fade-down">
        <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide uppercase backdrop-blur-md">
          Next-Gen Software Engineering
        </span>
      </div>

      {/* Headline */}
      <div className="relative inline-block mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight text-white animate-fade-up delay-100">
          Building the Future <br />
          with <span className="text-gradient-blue">Intelligent AI</span>
        </h1>
        <div className="absolute inset-0 pointer-events-none">
          <Sparkle
            color="#3B82F6"
            count={20}
            minSize={5}
            maxSize={15}
            fadeOutSpeed={15}
            newSparkleOnFadeOut
          />
        </div>
      </div>

      {/* Subheadline */}
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-gray-400 font-light leading-relaxed animate-fade-up delay-200 px-2">
        We engineer scalable AI solutions that automate workflows,
        unlock data insights, and drive measurable business growth.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-up delay-300 px-4">
        <Link
          to="/solutions/ai-demos"
          className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 touch-manipulation active:scale-95"
        >
          View Solutions
        </Link>
        <Link
          to="/contact"
          className="btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 touch-manipulation active:scale-95"
        >
          Book Consultation
        </Link>
      </div>

      {/* Stats/Trust Indicators (Optional) */}
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 border-t border-white/5 pt-8 sm:pt-10 animate-fade-in delay-300">
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white">98%</h4>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Client Retention</p>
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white">50+</h4>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Enterprise Projects</p>
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white">24/7</h4>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Global Support</p>
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-bold text-white">100%</h4>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">On-Time Delivery</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
