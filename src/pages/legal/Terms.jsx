import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: October 10, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Agreement to Terms</h2>
          <p className="text-gray-700">
            By accessing or using Gridspark Solutions’ services, website, or products, you agree to be bound by these Terms and Conditions and all applicable laws. If you disagree with any part of the terms, please refrain from using our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Intellectual Property Rights</h2>
          <p className="text-gray-700">
            All content on this site, including text, graphics, logos, images, and software, is the property of Gridspark Solutions or its licensors and protected by intellectual property laws. You agree not to reproduce, distribute, modify, or create derivative works without express written permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. User Responsibilities</h2>
          <p className="text-gray-700">
            You agree to use our services only for lawful purposes and in a way that does not infringe on the rights of others or restrict or inhibit anyone else's use and enjoyment of the services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Prohibited Activities</h2>
          <p className="text-gray-700">
            Users must not engage in any activities including but not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Unauthorized access or use of data or systems.</li>
            <li>Transmission of harmful or unlawful material.</li>
            <li>Interference with service integrity or security measures.</li>
            <li>Impersonation or misleading others about your identity.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Disclaimer of Warranties</h2>
          <p className="text-gray-700">
            Our services are provided “as is” without warranties of any kind, either express or implied. We disclaim all warranties including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            Gridspark Solutions will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of such possibilities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Governing Law</h2>
          <p className="text-gray-700">
            These terms shall be governed and construed in accordance with the laws of the jurisdiction where Gridspark Solutions is headquartered, without regard to conflict of law provisions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Dispute Resolution</h2>
          <p className="text-gray-700">
            Any disputes arising from these terms or your use of our services will be resolved through binding arbitration or mediation prior to seeking legal recourse.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Modifications to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to modify these Terms and Conditions at any time. Your continued use of our services after changes constitute your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">10. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: <a href="mailto:legal@gridsparksolutions.com" className="text-accent hover:underline">legal@gridsparksolutions.com</a></li>
            <li>Visit our <a href="/contact" className="text-accent hover:underline">Contact Page</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;
