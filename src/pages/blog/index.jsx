import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO";
import BlogHero from "../../components/blog/BlogHero";
import BlogList from "../../components/blog/BlogList";
import Newsletter from "../../components/sections/Newsletter";
import { BLOG_POSTS } from "../../lib/blog-data";
import { FiTrendingUp, FiBookmark, FiCode, FiCpu, FiCloud, FiShield, FiZap, FiDatabase, FiActivity, FiGitBranch, FiLock, FiBriefcase } from "react-icons/fi";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GridSpark Solutions Blog",
    "url": "https://www.gridsparksolutions.com/blog",
    "description": "Insights, tutorials, and expert perspectives on artificial intelligence, cloud computing, software development, and cutting-edge technology trends.",
    "blogPost": BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      image: p.image,
      url: `https://www.gridsparksolutions.com/blog/${p.slug}`,
      author: {
        "@type": "Person",
        name: p.author.name
      }
    })),
  };

  const categories = [
    { name: "Artificial Intelligence", icon: FiCpu, count: BLOG_POSTS.filter(p => p.category === "Artificial Intelligence").length, color: "from-blue-500 to-cyan-500", emoji: "🤖" },
    { name: "Machine Learning", icon: FiActivity, count: BLOG_POSTS.filter(p => p.category === "Machine Learning").length, color: "from-purple-500 to-pink-500", emoji: "🧠" },
    { name: "Cloud Computing", icon: FiCloud, count: BLOG_POSTS.filter(p => p.category === "Cloud Computing").length, color: "from-green-500 to-emerald-500", emoji: "☁️" },
    { name: "DevOps", icon: FiGitBranch, count: BLOG_POSTS.filter(p => p.category === "DevOps").length, color: "from-orange-500 to-red-500", emoji: "🔧" },
    { name: "Data Science", icon: FiDatabase, count: BLOG_POSTS.filter(p => p.category === "Data Science" || p.category === "Data Engineering").length, color: "from-indigo-500 to-blue-500", emoji: "📊" },
    { name: "Cybersecurity", icon: FiLock, count: BLOG_POSTS.filter(p => p.category === "Cybersecurity").length, color: "from-red-500 to-pink-500", emoji: "🔒" },
  ].filter(cat => cat.count > 0);

  const popularTags = [
    "Neural Networks", "Deep Learning", "API Development", "Kubernetes",
    "Generative AI", "LLMs", "Python", "Docker", "AWS", "Azure",
    "Microservices", "React", "Node.js", "MongoDB", "PostgreSQL"
  ];

  return (
    <>
      <SEO
        title="Tech Blog"
        description="Insights, tutorials, and expert perspectives on artificial intelligence, cloud computing, software development, and cutting-edge technology trends from GridSpark Solutions."
        keywords="AI, machine learning, cloud computing, software development, DevOps, technology blog, enterprise software, blockchain, cybersecurity"
        canonical="https://www.gridsparksolutions.com/blog"
        ogType="website"
        schema={jsonLd}
      />
      
      <div className="min-h-screen pt-20 relative z-10">
        {/* Hero Section */}
        <BlogHero onCategoryClick={handleCategoryClick} />

        {/* Latest Articles */}
        <section className="py-20 relative">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList initialCategory={selectedCategory} />
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-16 relative bg-gradient-to-b from-transparent to-[var(--color-bg-alt)]/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore by <span className="text-gradient-blue">Category</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Dive deep into specialized topics curated by our expert team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(({ name, icon: Icon, count, color, emoji }, idx) => (
                <button
                  key={name}
                  onClick={() => handleCategoryClick(name)}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-left hover:scale-105 touch-manipulation active:scale-95"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg relative overflow-hidden`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-white/10"></div>
                    {/* Emoji */}
                    <span className="text-3xl relative z-10">{emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {count} {count === 1 ? 'article' : 'articles'}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 relative">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Newsletter />
          </div>
        </section>

        {/* Popular Tags */}
        <section className="py-16 relative">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular <span className="text-gradient-blue">Topics</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Trending technologies and concepts our community is exploring
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {popularTags.map((tag, idx) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-[var(--color-primary)]/50 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 touch-manipulation active:scale-95"
                  data-aos="fade-up"
                  data-aos-delay={idx * 30}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Resources CTA */}
        <section className="py-20 relative">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-500/30 p-12 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need Expert Guidance?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Our team of AI specialists and cloud architects can help transform your business with cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 touch-manipulation active:scale-95 inline-block"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    to="/solutions"
                    className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 touch-manipulation active:scale-95 inline-block"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

