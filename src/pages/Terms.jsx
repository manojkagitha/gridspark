// src/pages/Terms.jsx
import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 9, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Agreement to Terms</h2>
          <p className="text-gray-700">
            By using our services, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Intellectual Property Rights</h2>
          <p className="text-gray-700">
            {/* REPLACE THIS: Describe ownership of the site content. */}
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us or licensed to us.
          </p>
        </section>

        {/* Add more sections: User Representations, Prohibited Activities, Governing Law, Dispute Resolution, Contact Us */}
      </div>
    </div>
  );
};

export default Terms;