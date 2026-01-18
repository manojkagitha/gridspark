import React, { useState } from 'react';

/**
 * Image component that handles load errors by:
 * 1. Trying to load the src
 * 2. If it fails, hiding the image or showing a fallback (if provided)
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} className - CSS classes
 * @param {React.ReactNode} fallback - Optional fallback content
 */
const ImageWithFallback = ({ src, alt, className, fallback, ...props }) => {
  const [error, setError] = useState(false);

  if (error) {
    if (fallback) return fallback;
    return null; // Render nothing if no fallback
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
