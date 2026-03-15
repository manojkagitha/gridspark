import React, { useState, useEffect } from 'react';

const ConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const checkConsent = () => {
      const consentChoice = localStorage.getItem('gdpr-consent');
      console.log('Checking consent choice from localStorage:', consentChoice);

      if (consentChoice) {
        console.log('Consent choice found, hiding banner');
        setShowBanner(false);
      } else {
        console.log('No consent choice found, showing banner');
        setShowBanner(true);
      }
      setIsInitialized(true);
    };

    // Small delay to ensure gtag is loaded
    const timer = setTimeout(checkConsent, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Accept All button clicked');
    
    try {
      // Update Google Consent Mode
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted',
          'functionality_storage': 'granted',
          'personalization_storage': 'granted'
        });
        console.log('✅ Consent updated: Accept All');
      } else {
        console.warn('⚠️ gtag not available');
      }

      // Store user choice
      localStorage.setItem('gdpr-consent', 'accepted');
      console.log('✅ Stored in localStorage: accepted');
      setShowBanner(false);
      console.log('✅ Banner hidden');
    } catch (error) {
      console.error('Error accepting all cookies:', error);
      // Still hide banner and store choice even if gtag fails
      localStorage.setItem('gdpr-consent', 'accepted');
      setShowBanner(false);
    }
  };

  const handleRejectAll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Reject All button clicked');
    
    try {
      // Keep denied state for non-essential cookies
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied'
        });
        console.log('✅ Consent updated: Reject All');
      } else {
        console.warn('⚠️ gtag not available');
      }

      // Store user choice
      localStorage.setItem('gdpr-consent', 'rejected');
      console.log('✅ Stored in localStorage: rejected');
      setShowBanner(false);
      console.log('✅ Banner hidden');
    } catch (error) {
      console.error('Error rejecting cookies:', error);
      // Still hide banner and store choice even if gtag fails
      localStorage.setItem('gdpr-consent', 'rejected');
      setShowBanner(false);
    }
  };

  const handleEssentialOnly = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Essential Only button clicked');
    
    try {
      // Grant only essential cookies
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'granted',
          'personalization_storage': 'denied'
        });
        console.log('✅ Consent updated: Essential Only');
      } else {
        console.warn('⚠️ gtag not available');
      }

      // Store user choice
      localStorage.setItem('gdpr-consent', 'essential-only');
      console.log('✅ Stored in localStorage: essential-only');
      setShowBanner(false);
      console.log('✅ Banner hidden');
    } catch (error) {
      console.error('Error accepting essential cookies:', error);
      // Still hide banner and store choice even if gtag fails
      localStorage.setItem('gdpr-consent', 'essential-only');
      setShowBanner(false);
    }
  };

  if (!showBanner || !isInitialized) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-bg)] border-t border-[var(--color-border)] shadow-lg" role="dialog" aria-label="Cookie Preferences">
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

          <div className="flex flex-col sm:flex-row gap-3 lg:ml-6 whitespace-nowrap">
            <button
              type="button"
              onClick={handleEssentialOnly}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-colors cursor-pointer"
              aria-label="Accept only essential cookies"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleRejectAll}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition-colors cursor-pointer"
              aria-label="Reject all optional cookies"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-6 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors cursor-pointer"
              aria-label="Accept all cookies"
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