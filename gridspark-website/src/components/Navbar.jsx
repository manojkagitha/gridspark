import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBolt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center space-x-2">
          <FaBolt className="text-3xl text-secondary" />
          <span className="text-2xl font-bold text-primary">Gridspark</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/">Home</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/dashboard" className="btn-primary">Login</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-dark">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/solutions" className="block py-2">Solutions</Link>
          <Link to="/portfolio" className="block py-2">Portfolio</Link>
          <Link to="/pricing" className="block py-2">Pricing</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
          <Link to="/dashboard" className="block py-2">Login</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
