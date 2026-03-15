import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

export default function ArticleCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  slug,
  author,
  index = 0,
  featured = false
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  if (featured) {
    return (
      <Link
        to={`/blog/${slug}`}
        className={`group relative block overflow-hidden rounded-2xl lg:rounded-3xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 touch-manipulation ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 group-hover:opacity-0 transition-opacity duration-500"></div>
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider border border-[var(--color-primary)]/30">
                  {category}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {title}
              </h2>
              
              {/* Excerpt */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                {excerpt}
              </p>
            </div>
            
            {/* Bottom Section */}
            <div className="space-y-4 sm:space-y-6">
              {/* Author & Meta */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-[var(--color-border)]">
                {author && (
                  <div className="flex items-center gap-3">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-[var(--color-primary)]/30"
                    />
                    <div>
                      <p className="text-white text-sm font-bold">{author.name}</p>
                      <p className="text-gray-400 text-xs">{author.role}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-gray-400 text-sm sm:ml-auto">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">{readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 active:scale-95 group-hover:gap-3 touch-manipulation">
                <span>Read Full Article</span>
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Link to={`/blog/${slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider shadow-lg">
              {category}
            </span>
          </div>

          {/* Author on Hover */}
          {author && (
            <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="flex items-center gap-3">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-10 h-10 rounded-full ring-2 ring-white/50 shadow-lg"
                />
                <div>
                  <p className="text-white text-sm font-bold drop-shadow-lg">{author.name}</p>
                  <p className="text-white/90 text-xs drop-shadow-lg">{author.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-400 text-xs">
            <div className="flex items-center gap-1.5">
              <FiCalendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FiClock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Read More Link */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group-hover:gap-3">
              <span>Read Article</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

