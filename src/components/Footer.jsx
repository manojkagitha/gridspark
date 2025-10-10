// src/components/Footer.jsx

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Branding & Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gridspark Solutions</h2>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            Brighter Tech. Smarter Businesses. Empowering innovation with AI & Cloud solutions.
          </p>
          <div className="text-sm text-gray-400 space-y-2">
            <p>info@gridspark.com</p>
            <p>+1 (555) 234-5678</p>
          </div>
          <div className="flex space-x-4 items-center mt-6">
            <a href="https://linkedin.com/company/gridspark" aria-label="LinkedIn" className="text-gray-400 hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/gridspark" aria-label="GitHub" className="text-gray-400 hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/gridspark" aria-label="Twitter" className="text-gray-400 hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com/gridsparksolutions" aria-label="Facebook" className="text-gray-400 hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/gridsparksolutions" aria-label="Instagram" className="text-gray-400 hover:text-white text-xl" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/ai-demos" className="hover:text-white">AI Demos</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Section 3: Legal & Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wider">Legal</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Section 4: Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wider">Stay Connected</h3>
          <p className="text-gray-400 mb-4 text-sm">Get the latest news and updates from our team.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none mb-3"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="text-center py-4 px-4 text-xs text-gray-500 border-t border-gray-800">
        <p>&copy; {currentYear} Gridspark Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;