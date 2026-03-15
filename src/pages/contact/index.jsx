import React, { useState } from "react";
import SEO from "../../components/common/SEO";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwpwzlng", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Something went wrong. Please try again or email us directly.");
      }
    } catch (error) {
      alert("Unable to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Structured data for contact page
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact GridSpark Solutions",
    "description": "Get in touch with GridSpark Solutions for AI-powered business solutions. Contact us for custom chatbots, document intelligence, and private LLM deployment services.",
    "url": "https://www.gridsparksolutions.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "GridSpark Solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "contactOption": "TollFree"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with GridSpark Solutions for AI-powered business solutions. Contact us for custom chatbots, document intelligence, and private LLM deployment services."
        keywords="contact GridSpark, AI solutions contact, business inquiry, custom AI development, chatbot consultation, document AI contact"
        canonical="https://www.gridsparksolutions.com/contact"
        ogType="website"
        schema={contactPageSchema}
      />

      <section className="min-h-screen w-full pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center w-full relative z-10">
        {/* Left info section */}
        <div data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-white">
            Let's Build <span className="text-gradient-blue">Together</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg text-gray-400 leading-relaxed">
            Have a project in mind or a question? Fill out the form or connect with us directly—one of our team members will reach out within 24 hours.
          </p>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] mb-6 sm:mb-7">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[var(--color-primary)] border-b border-[var(--color-border)] pb-2">Contact Details</h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                <span className="w-full sm:w-20 text-gray-500 uppercase text-xs font-bold tracking-wider">Email</span>
                <a
                  href="mailto:hello@gridsparksolutions.com"
                  className="text-white font-semibold hover:text-[var(--color-primary)] transition-colors break-all"
                >
                  hello@gridsparksolutions.com
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-300 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                <span className="w-full sm:w-20 text-gray-500 uppercase text-xs font-bold tracking-wider">Phone</span>
                <span className="text-white font-semibold">
                  +1 (945) 998-5494
                </span>
              </p>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[var(--color-border)]">
              <div className="text-xs text-gray-500 mb-1">
                Corporate, privacy, and legal inquiries welcomed.
              </div>
              <div className="text-xs text-[var(--color-primary)] font-medium">
                Response guaranteed within 1 business day.
              </div>
            </div>
          </div>
        </div>

        {/* Right form section */}
        <div data-aos="fade-left">
          {success ? (
            <div className="glass-panel p-8 sm:p-10 rounded-2xl text-center border border-[var(--color-primary)] shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="text-4xl sm:text-5xl mb-4">🎉</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-sm sm:text-base text-gray-300">
                Thank you for reaching out.<br />
                Our team will contact you within 24 business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-4 sm:gap-6 border border-[var(--color-border)]"
            >
              <div>
                <label htmlFor="name" className="block mb-2 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Full Name <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-sm sm:text-base touch-manipulation"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Work Email <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-sm sm:text-base touch-manipulation"
                  placeholder="john@company.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Phone <span className="text-[var(--color-primary)]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-sm sm:text-base touch-manipulation"
                  placeholder="+1 (555) 000-0000"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-sm sm:text-base touch-manipulation"
                  placeholder="Company Name"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  How can we help? <span className="text-[var(--color-primary)]">*</span>
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none text-sm sm:text-base touch-manipulation"
                  placeholder="Tell us about your project..."
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 sm:py-4 text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
