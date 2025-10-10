// src/pages/CookiePolicy.jsx
import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 9, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What Are Cookies?</h2>
          <p className="text-gray-700">
            As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Cookies</h2>
          <p className="text-gray-700">
            {/* REPLACE THIS: Explain what you use cookies for. Example: analytics, user preferences, authentication. */}
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Disabling Cookies</h2>
          <p className="text-gray-700">
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;