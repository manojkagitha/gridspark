// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 9, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to Gridspark Solutions. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@gridspark.com.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
          <p className="text-gray-700">
            {/* REPLACE THIS: Add details about the data you collect, e.g., personal identification information (name, email address, phone number, etc.), derivative data (IP address, browser type), etc. */}
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700">
            {/* REPLACE THIS: Explain how you use the data. Examples: to facilitate account creation, to send marketing communications, to deliver services, etc. */}
            We use the information we collect or receive to provide, operate, and maintain our website, and for other business purposes.
          </p>
        </section>

        {/* Add more sections as needed (e.g., Will Your Information Be Shared?, How Long We Keep Your Information, Your Privacy Rights, Contact Us) */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;