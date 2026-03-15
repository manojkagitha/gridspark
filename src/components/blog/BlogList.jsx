import React, { useState, useMemo, useEffect } from "react";
import { BLOG_POSTS } from "../../lib/blog-data";
import ArticleCard from "./ArticleCard";
import { FiSearch, FiChevronDown } from "react-icons/fi";

export default function BlogList({ initialCategory = null }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory || "All");
  const [displayCount, setDisplayCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
      setDisplayCount(6);
    }
  }, [initialCategory]);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    BLOG_POSTS.forEach((p) => set.add(p.category));
    return Array.from(set).sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return a.localeCompare(b);
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const displayedArticles = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  useEffect(() => {
    setDisplayCount(6);
  }, [query, category]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 6);
      setIsLoading(false);
    }, 500);
  };

  const featuredArticle = displayedArticles[0];
  const regularArticles = displayedArticles.slice(1);

  return (
    <div>
      {/* Featured Article - Hero Style */}
      {featuredArticle && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            Featured Story
          </h2>
          <ArticleCard {...featuredArticle} featured={true} index={0} />
        </div>
      )}

      {/* Search and Filter Bar - Apple Style */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-[var(--color-primary)]/50 transition-all text-sm"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative sm:w-56">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white appearance-none cursor-pointer focus:outline-none focus:bg-white/10 focus:border-[var(--color-primary)]/50 transition-all text-sm font-medium"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[var(--color-bg)] text-white">
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-400">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} found
            </span>
          </div>
        </div>
      </div>

      {/* Regular Articles Grid */}
      {regularArticles.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {regularArticles.map((post, index) => (
              <ArticleCard key={post.id} {...post} index={index + 1} />
            ))}
          </div>
        </>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-16">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Loading...
              </>
            ) : (
              <>
                Load More Articles
                <FiChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      )}

      {/* No Results */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-bg-alt)] flex items-center justify-center">
            <FiSearch className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">No articles found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

