import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // For actual projects, add API logic here to send email/message
  };

  return (
    <div className="bg-dark rounded-lg p-8 shadow max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-accent mb-4">Contact Us</h2>
      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="btn-secondary w-full py-2 font-semibold rounded"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="p-4 bg-green-900 border-green-400 border text-green-100 rounded">
          Thank you! Your message has been sent. We will respond soon.
        </div>
      )}
      <div className="text-xs text-gray-400 mt-4">
        Or email us at <a href="mailto:info@gridspark.com" className="text-accent underline">info@gridspark.com</a>
      </div>
    </div>
  );
};

export default ContactForm;
