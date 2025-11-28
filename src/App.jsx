import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/layout/ChatWidget";
import AnimatedBackground from "./components/layout/AnimatedBackground";

// Main Pages
import Home from "./pages/home/index.jsx";
import Contact from "./pages/contact/index.jsx";
import About from "./pages/about/index.jsx";
import Careers from "./pages/about/Careers.jsx";
import Partner from "./pages/about/Partner.jsx";
import Expertise from "./pages/expertise/index.jsx";
import Industries from "./pages/industries/index.jsx";
import Products from "./pages/products/index.jsx";
import Resources from "./pages/resources/index.jsx";

// Solutions
import Solutions from "./pages/solutions/index.jsx";
import AIDemos from "./pages/solutions/AI-Demos.jsx";
import CaseStudies from "./pages/solutions/CaseStudies.jsx";
import Services from "./pages/solutions/Services.jsx";
import Portfolio from "./pages/solutions/Portfolio.jsx";
import AIShowcase from "./components/sections/AIShowcase.jsx";

// AI Detail Pages - ADD THESE FOUR
import ChatbotDetails from "./pages/solutions/ChatbotDetails.jsx";
import DocumentAI from "./pages/solutions/DocumentAI.jsx";
import CrmLeadAI from "./pages/solutions/CrmLeadAI.jsx";
import PrivateLLM from "./pages/solutions/PrivateLLM.jsx";

// Auth Pages
import Register from "./pages/auth/Register.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import Terms from "./pages/legal/Terms.jsx";
import CookiePolicy from "./pages/legal/CookiePolicy.jsx";

// FAQ
import FAQ from "./components/sections/FAQ.jsx";

function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
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
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Decline"
        enableDeclineButton
        style={{
          background: "rgba(11, 13, 23, 0.98)",
          padding: "20px 40px",
          alignItems: "center",
          boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)"
        }}
        buttonStyle={{
          background: "var(--color-primary)",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "600",
          padding: "10px 24px",
          fontSize: "14px",
          border: "none",
          cursor: "pointer"
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#fff",
          borderRadius: "8px",
          fontWeight: "600",
          padding: "10px 24px",
          fontSize: "14px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          cursor: "pointer"
        }}
        contentStyle={{
          flex: "1 1 300px",
          margin: "0 20px 0 0"
        }}
        expires={365}
      >
        <span style={{ fontSize: "14px", lineHeight: "1.6" }}>
          We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
          By clicking "Accept All Cookies", you consent to our use of cookies.{" "}
          <a
            href="/cookie-policy"
            style={{
              color: "var(--color-primary)",
              textDecoration: "underline",
              fontWeight: "500"
            }}
          >
            Learn more
          </a>
        </span>
      </CookieConsent>
      <ChatWidget />
      <Footer />
    </Router>
  );
}

export default App;
