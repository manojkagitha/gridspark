import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaBolt } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <FaBolt className="text-3xl text-secondary" />
          <span className="text-2xl font-bold">Gridspark</span>
        </div>
        <p className="text-gray-400 mb-4">Brighter Tech. Smarter Businesses.</p>
        <p className="text-sm text-gray-500">
          © 2025 Gridspark Solutions. All rights reserved.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Solutions</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/solutions#restaurant" className="hover:text-secondary transition">Restaurant Tech</a></li>
          <li><a href="/solutions#sports" className="hover:text-secondary transition">Sports Platforms</a></li>
          <li><a href="/solutions#web" className="hover:text-secondary transition">Web Design</a></li>
          <li><a href="/solutions#custom" className="hover:text-secondary transition">Custom Software</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/portfolio" className="hover:text-secondary transition">Portfolio</a></li>
          <li><a href="/pricing" className="hover:text-secondary transition">Pricing</a></li>
          <li><a href="/contact" className="hover:text-secondary transition">Contact</a></li>
          <li><a href="/dashboard" className="hover:text-secondary transition">Client Login</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
        <p className="text-gray-400 mb-4">Subscribe to our newsletter</p>
        <form className="mb-6">
          <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-secondary focus:outline-none mb-2" />
          <button type="submit" className="btn-secondary w-full">Subscribe</button>
        </form>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-secondary transition text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-secondary transition text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-secondary transition text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-secondary transition text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-secondary transition text-xl"><FaGithub /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
