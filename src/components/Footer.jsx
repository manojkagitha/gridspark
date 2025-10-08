import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold">Gridspark Solutions</span>
        </div>
        <p className="text-gray-400 mb-4">Brighter Tech. Smarter Businesses.</p>
        <p className="text-sm text-gray-500">
          © 2025 Gridspark Solutions. All rights reserved.
        </p>
      </div>
      {/* ...other sections... */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
        <form className="mb-6">
          <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-secondary focus:outline-none mb-2" />
          <button type="submit" className="btn-secondary w-full">Subscribe</button>
        </form>
        <div className="flex space-x-4">
          <a href="https://facebook.com/gridsparksolutions" className="text-gray-400 hover:text-secondary transition text-xl" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/gridspark" className="text-gray-400 hover:text-secondary transition text-xl" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com/company/gridsparksolutions" className="text-gray-400 hover:text-secondary transition text-xl" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/gridsparksolutions" className="text-gray-400 hover:text-secondary transition text-xl" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/gridspark" className="text-gray-400 hover:text-secondary transition text-xl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
