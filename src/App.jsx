import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Top-Level Pages
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";

// Grouped Pages
import About from "./pages/about/index.jsx";
import Careers from "./pages/about/Careers.jsx";
import Partner from "./pages/about/Partner.jsx";

import Solutions from "./pages/solutions/index.jsx";
import Services from "./pages/solutions/Services.jsx";
import Portfolio from "./pages/solutions/Portfolio.jsx";
import AIDemos from "./pages/solutions/AI-Demos.jsx";
import CaseStudies from "./pages/solutions/CaseStudies.jsx";

// --- IMPORT YOUR REGISTER COMPONENT ---
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx"; // Assuming it's in the same folder as Login

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';
import Terms from './pages/legal/Terms.jsx';
import CookiePolicy from './pages/legal/CookiePolicy.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        
        {/* --- ADD THE ROUTE FOR YOUR REGISTER PAGE --- */}
        <Route path="/register" element={<Register />} />

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
