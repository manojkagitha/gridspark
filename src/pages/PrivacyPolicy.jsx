import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy</h1>
    <p className="mb-4">Gridspark Solutions is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Contact info when you fill forms or subscribe (name, email).</li>
      <li>Basic analytics via cookies and similar tools.</li>
      <li>Any content you send via customer support, demos, or chatbots.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>To respond to inquiries, operate and improve services.</li>
      <li>To provide AI demos and enhance user experience.</li>
      <li>For legal compliance and data protection requirements.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>You may request to access or delete your data any time.</li>
      <li>Contact <a href="mailto:info@gridspark.com" className="text-accent">info@gridspark.com</a> for requests.</li>
    </ul>
    <p className="text-xs mt-6 text-gray-500">This policy may update periodically. Check back for changes.</p>
  </div>
);

export default PrivacyPolicy;
