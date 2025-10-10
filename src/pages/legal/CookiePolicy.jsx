import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="bg-dark text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-white mb-6">Cookie Policy for Gridspark Solutions</h1>
        <p className="text-gray-400 mb-8">Last updated: October 10, 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They help websites function efficiently and provide useful information to the site owners. Cookies remember your preferences, improve user experience, and enable certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
            <p className="mb-4">
              We use several categories of cookies to enhance your experience:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential to operate our website and provide secure access to personalized features, including login and account settings. These cannot be disabled.
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> Collect anonymized data on website usage and traffic patterns to help us understand how our users interact with the site and to improve performance.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences such as language settings, theme selections, or login state, to provide a tailored browsing experience.
              </li>
              <li>
                <strong>Advertising and Targeting Cookies:</strong> Used to deliver relevant advertisements and measure the effectiveness of marketing campaigns. These may be set by us or third-party partners.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
            <p>
              Cookies allow us to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Keep you signed in and secure your account</li>
              <li>Understand how you use our website to improve it</li>
              <li>Personalize your experience and remember choices</li>
              <li>Analyze aggregated user behavior for research and development</li>
              <li>Deliver relevant advertising and promotions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
            <p>
              We may also use cookies from trusted third-party services such as:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Google Analytics:</strong> Gathers insights on visitor behavior with strict privacy and anonymity protections.</li>
              <li><strong>Advertising Partners:</strong> Help target and measure ads delivered across the internet.</li>
              <li><strong>Social Media Platforms:</strong> Enable sharing and integration features on our site.</li>
            </ul>
            <p>
              These providers have their own privacy policies and cookie management controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
            <p>
              You have options to manage and control cookies:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Most browsers allow you to block or delete cookies via settings or preferences.</li>
              <li>You can visit <a href="https://www.youronlinechoices.com/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a> to manage advertising preferences.</li>
              <li>Note that disabling cookies may limit your ability to use certain features of our site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights related to your personal data, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The right to access and correct your data</li>
              <li>The right to withdraw consent to data processing</li>
              <li>The right to request deletion of your data</li>
              <li>The right to object to certain data processing activities</li>
            </ul>
            <p>
              For any such requests, please contact us as detailed below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <p>
              We may update this Cookie Policy occasionally to reflect changes in law or operations. Updates will be posted here with the revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>If you have questions about this Cookie Policy or data practices, you can reach us:</p>
            <ul className="list-disc list-inside mt-2">
              <li>By email: <a href="mailto:reachus@gridsparksolutions.com" className="text-accent hover:underline">reachus@gridsparksolutions.com</a></li>
              <li>Via our <Link to="/contact" className="text-accent hover:underline">Contact Page</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
