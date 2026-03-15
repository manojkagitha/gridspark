import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft, FiClock, FiCalendar, FiTag, FiUser, FiShare2, FiLink, FiCheck } from "react-icons/fi";
import { FaXTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { getPostBySlug, getRelatedPosts } from "../../lib/blog-data";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(slug, 3) : [];
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollable = documentHeight - windowHeight;
      const progress = (scrollTop / scrollable) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title || '';

  const handleShare = (platform) => {
    const urls = {
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400,noopener,noreferrer');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-20 relative z-10">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-6">Could not find article: {slug}</p>
          <Link to="/blog" className="text-[var(--color-primary)] hover:underline">
            <FiArrowLeft className="inline mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-20 relative z-10">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mb-8 sm:mb-12 lg:mb-16">
        {post.image && (
          <>
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[var(--color-bg)]"></div>
          </>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full relative z-10">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors pt-6 sm:pt-8 group touch-manipulation"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Back to Blog</span>
          </Link>

          {/* Title and Meta */}
          <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-8 lg:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-4xl">
                {/* Category Badge */}
                <div className="mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
                    <FiTag className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1 max-w-4xl">
            <div
              className="article-content prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* References */}
            {post.references && post.references.length > 0 && (
              <div className="mt-16 p-8 bg-[var(--color-bg-alt)]/30 rounded-2xl border border-[var(--color-border)]">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="text-[var(--color-primary)]">📚</span>
                  References & Further Reading
                </h3>
                <ul className="space-y-4">
                  {post.references.map((ref, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 bg-[var(--color-bg)]/50 rounded-lg hover:bg-[var(--color-bg)] transition-colors">
                      <span className="text-[var(--color-primary)] font-bold mt-1">{index + 1}.</span>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[var(--color-primary)] transition-colors flex-1"
                      >
                        {ref.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Section - Bottom of Article */}
            {post.author && (
              <div className="mt-16 p-8 bg-gradient-to-br from-[var(--color-bg-alt)]/50 to-[var(--color-bg-alt)]/30 backdrop-blur-sm rounded-2xl border border-[var(--color-border)] shadow-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-[var(--color-primary)]/30 shadow-lg flex-shrink-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 mb-2 text-[var(--color-primary)] justify-center sm:justify-start">
                      <FiUser className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Written by</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-1">{post.author.name}</h4>
                    <p className="text-[var(--color-primary)] text-sm font-semibold mb-3">{post.author.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-6 sm:space-y-8">
            {/* Share Card */}
            <div className="bg-[var(--color-bg-alt)]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-[var(--color-border)] p-5 sm:p-6 shadow-xl sticky top-24">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 text-[var(--color-primary)]">
                <FiShare2 className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider">Share Article</h3>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                <button
                  onClick={() => handleShare('x')}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-xs sm:text-sm shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-black/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 touch-manipulation"
                >
                  <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share on X
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#0A66C2] hover:bg-[#095196] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#0A66C2]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#0A66C2]/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/50 touch-manipulation"
                >
                  <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share on LinkedIn
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#1877F2] hover:bg-[#165ec7] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#1877F2]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#1877F2]/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1877F2]/50 touch-manipulation"
                >
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share on Facebook
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#22c55e] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 touch-manipulation"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                  Share on WhatsApp
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[var(--color-bg-alt)] hover:bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] text-white font-bold text-xs sm:text-sm shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 touch-manipulation"
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="text-green-500">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-24">
          <div className="border-t border-[var(--color-border)] pt-16">
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <span className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"></span>
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  {relatedPost.image && (
                    <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div>
                    <div className="mb-2">
                      <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

