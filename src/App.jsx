import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- CORRECTED IMPORTS ---

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Top-Level Pages
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";

// Grouped Pages (from new subfolders with correct paths)
import About from "./pages/about/index.jsx"; // Correct path
import Careers from "./pages/about/Careers.jsx";
import Partner from "./pages/about/Partner.jsx";

import Solutions from "./pages/solutions/index.jsx"; // Correct path
import Services from "./pages/solutions/Services.jsx";
import Portfolio from "./pages/solutions/Portfolio.jsx";
import AIDemos from "./pages/solutions/AI-Demos.jsx";
import CaseStudies from "./pages/solutions/CaseStudies.jsx";

import Login from "./pages/auth/Login.jsx";

import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';
import Terms from './pages/legal/Terms.jsx';
import CookiePolicy from './pages/legal/CookiePolicy.jsx';

function App() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    fetch('http://135.235.136.94:3000/')
      .then(response => response.text())
      .then(data => setBackendMessage(data))
      .catch(error => {
        console.error('API call error:', error);
        setBackendMessage('Failed to fetch backend message');
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <div style={{ background: "#f6f6f6", padding: "10px", textAlign: "center" }}>
        <strong>Backend message:</strong> {backendMessage}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-demos" element={<AIDemos />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
