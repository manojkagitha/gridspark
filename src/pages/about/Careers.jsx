import React, { useState } from "react";

const openings = [
  {
    title: "Cloud DevOps Engineer",
    type: "Full-time · Remote",
    description: "Design and implement scalable Azure/AWS infrastructure, build automation pipelines, and support our global clients. Strong scripting and CI/CD experience required."
  },
  {
    title: "AI/ML Developer",
    type: "Full-time · Remote/Hybrid",
    description: "Develop and deploy advanced AI/ML models and services, work with NLP and cloud APIs, and partner with clients to deliver innovative automation."
  },
  {
    title: "Frontend React Engineer",
    type: "Full-time · Remote",
    description: "Craft beautiful, performant UIs using React, Tailwind, and modern web tooling. Collaborate with design/product teams on next-gen SaaS platforms."
  },
  {
    title: "Backend Node.js Engineer",
    type: "Full-time · Remote/Hybrid",
    description: "Build scalable server-side services, APIs, and event-driven architectures using Node.js and cloud native tools."
  },
  {
    title: "Data Engineer",
    type: "Full-time · Remote",
    description: "Design robust ETL pipelines, data lakes, and real-time streaming solutions supporting analytics and monitoring."
  },
  {
    title: "AI Solutions Architect",
    type: "Consultant · Remote",
    description: "Lead AI strategy and architecture across projects, translating business needs into scalable AI system designs."
  }
];

const API_ENDPOINT = "https://api.gridsparksolutions.com/careers/apply";

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    about: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    if (!formData.position) {
      setError("Please select a position.");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to submit application.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-accent mb-6">Careers at Gridspark</h1>
      <p className="mb-8">
        Join our talented and diverse team. At Gridspark Solutions, you’ll shape the future of AI, automation, and cloud technology in a collaborative, innovative environment.
      </p>
      <div className="mb-10">
        {openings.map((job, idx) => (
          <div key={idx} className="mb-6 border-b border-gray-700 pb-4">
            <h2 className="text-xl font-semibold text-secondary">{job.title}</h2>
            <p className="text-xs mb-1 text-gray-400">{job.type}</p>
            <p className="text-gray-200">{job.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-3 text-secondary">Apply Now</h2>
        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="position"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={formData.position}
              onChange={handleChange}
            >
              <option value="">Position Applying For</option>
              {openings.map((job, idx) => (
                <option key={idx} value={job.title}>
                  {job.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            <textarea
              name="about"
              required
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={formData.about}
              onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn-secondary w-full py-2 font-semibold rounded"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        ) : (
          <div className="p-4 bg-green-900 border-green-400 border text-green-100 rounded">
            Thank you! Your application has been received. Our team will contact you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
