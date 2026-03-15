import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

export default function FeaturedArticle({ article, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  if (!article) return null;

  return (
    <div
      className={`overflow-hidden rounded-2xl md:rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <Link to={`/blog/${article.slug}`} className="relative group overflow-hidden">
          <div className="relative aspect-[16/9] md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px] lg:min-h-[450px]">
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/60" />
            <div className="absolute top-4 right-4 md:top-6 md:right-6">
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/90 backdrop-blur-sm px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-lg ring-2 ring-blue-500/30">
                Featured
              </span>
            </div>
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                {article.category}
              </span>
            </div>
          </div>
        </Link>

        {/* Content Section */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400 mb-4 font-medium">
            <div className="flex items-center gap-2">
              <FiCalendar className="h-4 w-4 text-[var(--color-primary)]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="h-4 w-4 text-[var(--color-primary)]" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <Link to={`/blog/${article.slug}`} className="group/title mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-white group-hover/title:text-[var(--color-primary)] transition-colors duration-300 mb-4">
              {article.title}
            </h2>
          </Link>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
            {article.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-[var(--color-primary)]/30">
              <img src={article.author.image} alt={article.author.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{article.author.name}</span>
              <span className="text-xs text-gray-400">{article.author.role}</span>
            </div>
          </div>

          <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 group/btn">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:from-[var(--color-primary-hover)] hover:to-[var(--color-secondary)] text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group-hover/btn:gap-3">
              Read Full Article
              <FiArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

