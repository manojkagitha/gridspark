import React, { useState } from "react";

const openings = [
  {
    title: "Cloud DevOps Engineer",
    type: "Full-time · Remote",
    description: "Design and implement scalable Azure/AWS infrastructure, build automation pipelines, and support our global clients. Strong scripting and CI/CD experience required.",
  },
  {
    title: "AI/ML Developer",
    type: "Full-time · Remote/Hybrid",
    description: "Develop and deploy advanced AI/ML models and services, work with NLP and cloud APIs, and partner with clients to deliver innovative automation.",
  },
  {
    title: "Frontend React Engineer",
    type: "Full-time · Remote",
    description: "Craft beautiful, performant UIs using React, Tailwind, and modern web tooling. Collaborate with design/product teams on next-gen SaaS platforms.",
  },
];

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
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
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <select
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            >
              <option value="">Position Applying For</option>
              {openings.map((job, idx) => (
                <option key={idx} value={job.title}>{job.title}</option>
              ))}
              <option value="Other">Other</option>
            </select>
            <textarea
              required
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="btn-secondary w-full py-2 font-semibold rounded"
            >
              Submit Application
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
