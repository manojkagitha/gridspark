import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import logo from '../../assets/logo.png'; // Update to your new transparent HD logo if needed

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <p className="text-gray-400">Brighter Tech. Smarter Businesses.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-accent focus:outline-none mb-2"
            />
            <button type="submit" className="btn-primary w-full">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-500 text-center sm:text-left mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://facebook.com/gridsparksolutions" className="text-gray-400 hover:text-accent transition text-xl" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/gridspark" className="text-gray-400 hover:text-accent transition text-xl" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com/company/gridsparksolutions" className="text-gray-400 hover:text-accent transition text-xl" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com/gridsparksolutions" className="text-gray-400 hover:text-accent transition text-xl" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://github.com/gridspark" className="text-gray-400 hover:text-accent transition text-xl" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
