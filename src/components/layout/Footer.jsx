import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import logo from "../../assets/logo.png"; // Replace with your transparent HD logo path

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("form_for", "newsletter"); // For filtering in Formspree

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
    <footer
      className="
        bg-[var(--color-footer-header-bg)]
        text-[var(--color-footer-header-text)]
        border-t border-[var(--color-footer-header-border)]
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="Gridspark Logo" className="h-8" />
            </Link>
            <p className="opacity-80">Brighter Tech. Smarter Businesses.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="
                text-lg font-semibold mb-4
                text-[var(--color-primary)]
              "
            >
              Quick Links
            </h3>
            <ul className="space-y-2 opacity-85">
              <li>
                <Link to="/about" className="hover:text-[var(--color-primary)] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[var(--color-primary)] transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[var(--color-primary)] transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--color-primary)] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="
                text-lg font-semibold mb-4
                text-[var(--color-primary)]
              "
            >
              Legal
            </h3>
            <ul className="space-y-2 opacity-85">
              <li>
                <Link to="/privacy-policy" className="hover:text-[var(--color-primary)] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[var(--color-primary)] transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-[var(--color-primary)] transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="
                text-lg font-semibold mb-4
                text-[var(--color-primary)]
              "
            >
              Stay Connected
            </h3>
            {success ? (
              <div className="p-4 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)] text-[var(--color-footer-header-text)] text-center">
                Thank you for joining Gridspark Vanguard!<br />
                Check your inbox for exclusive breakthroughs and future-of-tech news.
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="transition-colors duration-300"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="
                    w-full px-4 py-2 rounded-lg mb-2
                    bg-[var(--color-bg)]
                    border border-[var(--color-footer-header-border)]
                    text-[var(--color-footer-header-text)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--color-primary)]
                  "
                  disabled={loading}
                />
                <button type="submit" className="btn-primary w-full" disabled={loading}>
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="
            mt-12 pt-8 flex flex-col sm:flex-row
            justify-between items-center
            border-t border-[var(--color-footer-header-border)]
          "
        >
          <p className="text-sm text-center sm:text-left opacity-70 mb-4 sm:mb-0">
            © {new Date().getFullYear()} Gridspark Solutions. All rights reserved.
          </p>
          {/* Social Links */}
          <div className="flex space-x-5 text-xl">
            <a
              href="https://facebook.com"
              className="hover:text-[var(--color-primary)] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/GridsparkS"
              className="hover:text-[var(--color-primary)] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/gridsparksolutions/"
              className="hover:text-[var(--color-primary)] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/gridsparksolutions/"
              className="hover:text-[var(--color-primary)] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/GridsparkSolutions"
              className="hover:text-[var(--color-primary)] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
