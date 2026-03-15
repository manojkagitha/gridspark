// Blog post data structure for GridSpark Solutions
// Tech and AI focused articles
// Organized by category for easy access and maintenance

import { aiArticles } from './articles/ai';
import { cloudArticles } from './articles/cloud';
import { mlArticles } from './articles/ml';
import { securityArticles } from './articles/security';
import { devopsArticles } from './articles/devops';
import { frontendArticles } from './articles/frontend';
import { dataArticles } from './articles/data';
import { backendArticles } from './articles/backend';
import { blockchainArticles } from './articles/blockchain';
import { testingArticles } from './articles/testing';

// Combine all articles from all categories
export const BLOG_POSTS = [
  ...aiArticles,
  ...cloudArticles,
  ...mlArticles,
  ...securityArticles,
  ...devopsArticles,
  ...frontendArticles,
  ...dataArticles,
  ...backendArticles,
  ...blockchainArticles,
  ...testingArticles
].sort((a, b) => b.id - a.id); // Sort by ID descending (newest first)

// Helper functions
export function getPostBySlug(slug) {
  return BLOG_POSTS.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug, limit = 3) {
  return BLOG_POSTS
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}

export function getPostsByCategory(category) {
  return BLOG_POSTS.filter(post => post.category === category);
}
