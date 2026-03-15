import React, { useEffect, useState, useMemo } from "react";

export default function BlogHero({ onCategoryClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate fixed particle positions to avoid re-rendering issues
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3
    }));
  }, []);

  const handleCategoryClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category);
    }
    // Scroll to articles section
    const articlesSection = document.getElementById('articles');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const popularCategories = [
    { label: "AI & Machine Learning", category: "Artificial Intelligence" },
    { label: "Cloud Computing", category: "Cloud Computing" },
    { label: "DevOps", category: "DevOps" },
    { label: "Cybersecurity", category: "Cybersecurity" }
  ];

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3)",
            transform: "scale(1.1)",
            willChange: "transform",
            backgroundAttachment: "fixed"
          }}
        />
        {/* Fallback solid color if image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-bg)] to-[var(--color-secondary)]/20" />
        {/* Multi-layer Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/95 to-[var(--color-bg)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--color-bg)_100%)]" />
        {/* Animated Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1.5 h-1.5 bg-[var(--color-primary)]/40 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full backdrop-blur-sm transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
              Technology Insights
            </span>
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-white via-[var(--color-primary)] to-white bg-clip-text text-transparent leading-tight transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            GridSpark Tech Blog
          </h1>
          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2 sm:px-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Insights, tutorials, and expert perspectives on artificial intelligence, cloud computing, 
            software development, and cutting-edge technology trends.
          </p>

          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {popularCategories.map((item, index) => (
              <button
                key={item.category}
                onClick={() => handleCategoryClick(item.category)}
                style={{ animationDelay: `${800 + index * 100}ms` }}
                className="px-4 sm:px-5 md:px-6 py-2.5 md:py-3 bg-[var(--color-bg-alt)]/80 backdrop-blur-md border border-[var(--color-border)] rounded-xl text-xs sm:text-sm md:text-base text-gray-300 hover:text-white hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 transition-all duration-300 cursor-pointer active:scale-95 touch-manipulation transform hover:scale-105"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-[5]" />
    </section>
  );
}

