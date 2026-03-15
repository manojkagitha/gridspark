import React, { useState } from "react";

const Partner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Simulated submission
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-16 items-center justify-between relative z-10">
        {/* Left: Headline/Intro */}
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            Discover the power of <span className="text-gradient-blue">meaningful partnership</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Join our network of forward-thinking organizations. Share your vision, explore new opportunities, and let’s build lasting impact together.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="h-px bg-gray-700 w-12"></div>
            <p className="text-sm mb-4">
              Fill out the form to start a conversation.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                <a href="mailto:hello@gridsparksolutions.com" className="text-[var(--color-primary)] hover:underline">
                  hello@gridsparksolutions.com
                </a>
              </p>
              <p>
                <span className="font-bold text-white">Phone:</span>{" "}
                <span className="text-gray-300">+1 (945) 998-5494</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 w-full max-w-lg" data-aos="fade-left">
          <div className="glass-panel p-8 rounded-2xl shadow-2xl border border-[var(--color-border)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-gray-400">
                  Thank you! We’ve received your partnership request and will contact you soon.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-white mb-6">Partner With Us</h3>

                {/* Organization */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Organization Name <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="organization"
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Company Ltd."
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Contact Person <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="contact"
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Email <span className="text-[var(--color-primary)]">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">
                    How can we collaborate?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us your idea or partnership goal..."
                    className="w-full p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="btn-primary w-full mt-4"
                >
                  Request Partnership
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
