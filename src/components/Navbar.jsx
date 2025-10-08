import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/logo.svg'; // Optional: Use your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/solutions", label: "Solutions" },
    { path: "/partner", label: "Partner With Us" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="bg-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2 text-white font-extrabold text-2xl font-sans drop-shadow-lg">
          {/* <img src={logo} alt="Logo" className="h-8 mr-2" /> */}
          <span>Gridspark Solutions</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={
                location.pathname === item.path
                  ? "text-accent font-bold"
                  : "text-white hover:text-accent"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/login" className={`btn-secondary ml-4 ${location.pathname === "/login" ? "ring-2 ring-accent" : ""}`}>Login</Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-white"
        >
          {isOpen ? "✕" : "≡"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-dark">
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-2 text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/login" className="block py-2 text-white" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
