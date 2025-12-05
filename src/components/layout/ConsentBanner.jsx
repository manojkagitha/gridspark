import React, { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentChoice = localStorage.getItem('gdpr-consent');
    if (!consentChoice) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    // Update Google Consent Mode
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted'
    });

    // Store user choice
    localStorage.setItem('gdpr-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectAllCookies = () => {
    // Keep denied state for non-essential cookies
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied'
    });

    // Store user choice
    localStorage.setItem('gdpr-consent', 'rejected');
    setShowBanner(false);
  };

  const acceptEssentialOnly = () => {
    // Grant only essential cookies
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'granted',
      'personalization_storage': 'denied'
    });

    // Store user choice
    localStorage.setItem('gdpr-consent', 'essential-only');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Cookie Preferences</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more
              about how we use cookies in our{' '}
              <a href="/legal/privacy-policy" className="text-[var(--color-primary)] hover:underline">
                Privacy Policy
              </a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
            <button
              onClick={acceptEssentialOnly}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={rejectAllCookies}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={acceptAllCookies}
              className="px-6 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;