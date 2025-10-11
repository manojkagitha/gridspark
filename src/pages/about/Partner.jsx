import React, { useState } from "react";

const Partner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true); // Simulate submission. Replace with your backend/handler logic as needed.
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex flex-col justify-center text-white py-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Left: Headline/Intro */}
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold text-accent mb-8 leading-tight">
            Discover the power <br />
            of meaningful partnership
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our network of forward-thinking organizations.<br/>
            Share your vision, explore new opportunities, and let’s build lasting impact together.
          </p>
          <p className="text-base text-gray-400">
            Fill out the partnership interest form and our team will reach out for a personalized conversation.
          </p>
        </div>
        {/* Right: Form */}
        <div className="flex-1 bg-gray-950/80 p-8 rounded-lg shadow-2xl max-w-lg w-full border border-accent/10">
          {submitted ? (
            <div className="bg-green-900 border-green-400 border text-green-100 rounded-lg p-8 text-center shadow">
              Thank you! We’ve received your partnership request and will contact you soon.
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-200">
                  Organization Name<span className="text-accent">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="organization"
                  className="w-full p-3 border rounded bg-gray-800 text-white focus:border-accent outline-none"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-200">
                  Contact Person<span className="text-accent">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="contact"
                  className="w-full p-3 border rounded bg-gray-800 text-white focus:border-accent outline-none"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-200">
                  Email<span className="text-accent">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full p-3 border rounded bg-gray-800 text-white focus:border-accent outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-200">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-3 border rounded bg-gray-800 text-white focus:border-accent outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-200">
                  How can we collaborate?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full p-3 border rounded bg-gray-800 text-white focus:border-accent outline-none"
                  placeholder="Tell us your idea or partnership goal..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn-primary w-full mt-2 text-lg py-3" type="submit">
                Request Partnership
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Partner;
