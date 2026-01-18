import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/layout/ChatWidget";
import AnimatedBackground from "./components/layout/AnimatedBackground";
import ConsentBanner from "./components/layout/ConsentBanner";
import LoadingSpinner from "./components/common/LoadingSpinner";

// Lazy Load Pages
const Home = lazy(() => import("./pages/home/index.jsx"));
const About = lazy(() => import("./pages/about/index.jsx"));
const Careers = lazy(() => import("./pages/about/Careers.jsx"));
const Partner = lazy(() => import("./pages/about/Partner.jsx"));
const Expertise = lazy(() => import("./pages/expertise/index.jsx"));
const Industries = lazy(() => import("./pages/industries/index.jsx"));
const Products = lazy(() => import("./pages/products/index.jsx"));
const Resources = lazy(() => import("./pages/resources/index.jsx"));

// Lazy Load Blog
const Blog = lazy(() => import("./pages/blog/index.jsx"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost.jsx"));

// Lazy Load Solutions
const Solutions = lazy(() => import("./pages/solutions/index.jsx"));
const AIDemos = lazy(() => import("./pages/solutions/AI-Demos.jsx"));
const CaseStudies = lazy(() => import("./pages/solutions/CaseStudies.jsx"));
const Services = lazy(() => import("./pages/solutions/Services.jsx"));
const Portfolio = lazy(() => import("./pages/solutions/Portfolio.jsx"));
const AIShowcase = lazy(() => import("./components/sections/AIShowcase.jsx"));

// Lazy Load AI Details
const ChatbotDetails = lazy(() => import("./pages/solutions/ChatbotDetails.jsx"));
const DocumentAI = lazy(() => import("./pages/solutions/DocumentAI.jsx"));
const CrmLeadAI = lazy(() => import("./pages/solutions/CrmLeadAI.jsx"));
const PrivateLLM = lazy(() => import("./pages/solutions/PrivateLLM.jsx"));

// Lazy Load Auth & Contact
const Contact = lazy(() => import("./pages/contact/index.jsx"));
const Register = lazy(() => import("./pages/auth/Register.jsx"));
const Dashboard = lazy(() => import("./pages/auth/Dashboard.jsx"));

// Lazy Load Legal & FAQ
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy.jsx"));
const Terms = lazy(() => import("./pages/legal/Terms.jsx"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy.jsx"));
const FAQ = lazy(() => import("./components/sections/FAQ.jsx"));

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resources" element={<Resources />} />

          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Solutions main and subpages */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/ai-demos" element={<AIDemos />} />
          <Route path="/solutions/case-studies" element={<CaseStudies />} />
          <Route path="/solutions/services" element={<Services />} />
          <Route path="/solutions/portfolio" element={<Portfolio />} />
          <Route path="/solutions/ai-showcase" element={<AIShowcase />} />

          {/* AI Detail Routes */}
          <Route path="/solutions/chatbot-details" element={<ChatbotDetails />} />
          <Route path="/solutions/document-ai" element={<DocumentAI />} />
          <Route path="/solutions/crm-lead-ai" element={<CrmLeadAI />} />
          <Route path="/solutions/private-llm" element={<PrivateLLM />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Fallback to Home for unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>

      <ChatWidget />
      <Footer />
      <ConsentBanner />
    </Router>
  );
}

export default App;
