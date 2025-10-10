import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 10, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Gridspark Solutions ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you do not agree with the terms, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
          <p className="text-gray-700 mb-2">
            We collect various types of information in order to provide and improve our services:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li><strong>Personal Data:</strong> Including your name, email address, phone number, billing information, and any information you provide when registering or contacting us.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website and services, such as IP address, browser type, operating system, pages visited, and referral URLs.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies and similar technologies to improve user experience, analytics, and targeted advertising. See our <a href="/cookie-policy" className="text-accent hover:underline">Cookie Policy</a> for details.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>To provide, operate, and maintain our services.</li>
            <li>To process your registration, orders, and payments.</li>
            <li>To communicate with you, including sending account updates, marketing materials, and customer support.</li>
            <li>To analyze and improve our website, products, and services.</li>
            <li>To comply with legal obligations and protect our rights and the rights of others.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Sharing and Disclosure of Information</h2>
          <p className="text-gray-700 mb-2">
            We do not sell your personal information. We may share your information in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>With trusted third-party service providers who help operate our business under strict confidentiality agreements.</li>
            <li>In response to legal processes, government requests, or enforcement of our terms and policies.</li>
            <li>To protect against fraud, security breaches, or illegal activity.</li>
            <li>In the event of a business transfer, merger, or acquisition.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Data Security</h2>
          <p className="text-gray-700">
            We implement administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Your Rights and Choices</h2>
          <p className="text-gray-700 mb-2">
            Depending on your jurisdiction, you may have rights related to your personal data, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>The right to access and receive a copy of your personal data.</li>
            <li>The right to correct or update inaccurate data.</li>
            <li>The right to request deletion or restrict processing.</li>
            <li>The right to object to processing for direct marketing purposes.</li>
            <li>The right to data portability and withdrawing consent.</li>
          </ul>
          <p className="text-gray-700">
            To exercise any of these rights, please contact us at the details below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. International Transfers</h2>
          <p className="text-gray-700">
            Your information may be transferred to and maintained on servers located outside your country. By using our services, you consent to this transfer unless prohibited by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Children's Privacy</h2>
          <p className="text-gray-700">
            Our services are not intended for individuals under 13 years old. We do not knowingly collect personal information from children under this age.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the date above.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: <a href="mailto:privacy@gridsparksolutions.com" className="text-accent hover:underline">privacy@gridsparksolutions.com</a></li>
            <li>Via our <Link to="/contact" className="text-accent hover:underline">Contact Page</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
