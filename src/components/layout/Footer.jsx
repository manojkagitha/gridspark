import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import logo from "../../assets/gridspark-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("form_for", "newsletter");

    try {
      const response = await fetch("https://formspree.io/f/mwpwzlng", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        alert("Subscription failed. Please try again or contact support.");
      }
    } catch {
      alert("Error sending. Try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[var(--color-bg-alt)] text-gray-300 border-t border-[var(--color-border)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center touch-manipulation">
              <img src={logo} alt="Gridspark Logo" className="h-8 sm:h-10 w-auto brand-logo" />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              Empowering businesses with world-class engineering, AI innovation, and scalable cloud solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Contact Us</Link></li>
              <li><Link to="/partner" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Partner Program</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Discover</h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><Link to="/solutions/services" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Services</Link></li>
              <li><Link to="/industries" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Industries</Link></li>
              <li><Link to="/expertise" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Expertise</Link></li>
              <li><Link to="/products" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Products</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Blog</Link></li>
              <li><Link to="/solutions/portfolio" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">Portfolio</Link></li>
              <li><Link to="/solutions/ai-demos" className="hover:text-[var(--color-primary)] transition-colors touch-manipulation block py-1">AI Demos</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Stay Connected</h3>
            {success ? (
              <div className="p-3 sm:p-4 rounded-lg bg-green-900/20 border border-green-800 text-green-400 text-xs sm:text-sm">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2 sm:space-y-3">
                <p className="text-gray-400 text-xs sm:text-sm">Get the latest tech insights.</p>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent text-xs sm:text-sm touch-manipulation"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-md bg-[var(--color-primary)] text-white font-semibold text-xs sm:text-sm hover:bg-[var(--color-primary-hover)] transition-colors disabled:opacity-50 touch-manipulation active:scale-95"
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-8 text-center md:text-left">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Gridspark Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link to="/legal/privacy-policy" className="hover:text-white transition-colors touch-manipulation">Privacy Policy</Link>
              <Link to="/legal/terms" className="hover:text-white transition-colors touch-manipulation">Terms of Service</Link>
              <Link to="/legal/cookie-policy" className="hover:text-white transition-colors touch-manipulation">Cookie Policy</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://x.com/GridsparkS" className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/gridsparksolutions/" className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.instagram.com/gridsparksolutions/" className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://github.com/GridsparkSolutions" className="text-gray-400 hover:text-white transition-colors p-2 touch-manipulation active:scale-95" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
