import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Existing pages
import Home from "./pages/Home.jsx";
import Solutions from "./pages/Solutions.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Partner from "./pages/Partner.jsx";
import Login from "./pages/Login.jsx";

// New suggested pages
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import AIDemos from "./pages/AI-Demos.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Careers from "./pages/Careers.jsx";

// Import the new legal pages
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import CookiePolicy from './pages/CookiePolicy.jsx';

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
        {/* Main and legacy routes */}
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* Enhanced pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ai-demos" element={<AIDemos />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        {/* Legal/policy pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
