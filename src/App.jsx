import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Top-Level Pages (folders with index.jsx)
import Home from "./pages/home/index.jsx";
import Contact from "./pages/contact/index.jsx";
import About from "./pages/about/index.jsx";
import Careers from "./pages/about/Careers.jsx";
import Partner from "./pages/about/Partner.jsx";

import Expertise from "./pages/expertise/index.jsx";
import Industries from "./pages/industries/index.jsx";
import Products from "./pages/products/index.jsx";
import Resources from "./pages/resources/index.jsx";

// Solutions - import only index.jsx as the main route
import Solutions from "./pages/solutions/index.jsx";

// Auth Pages
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import Terms from "./pages/legal/Terms.jsx";
import CookiePolicy from "./pages/legal/CookiePolicy.jsx";

function App() {
  return (
    <Router>
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
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        {/* Fallback to Home for unknown routes */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
