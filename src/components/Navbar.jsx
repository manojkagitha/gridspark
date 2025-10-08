import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#101525] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center space-x-2 text-white font-extrabold text-2xl font-sans drop-shadow-lg">
          {/* Replace icon with logo image as needed */}
          <span className="font-bold text-white tracking-wide">Gridspark Solutions</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-secondary">Home</Link>
          <Link to="/solutions" className="text-white hover:text-secondary">Solutions</Link>
          <Link to="/portfolio" className="text-white hover:text-secondary">Portfolio</Link>
          <Link to="/pricing" className="text-white hover:text-secondary">Pricing</Link>
          <Link to="/contact" className="text-white hover:text-secondary">Contact</Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/login" className="btn-primary">Login</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-white">
          {isOpen ? "✕" : "≡"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#101525]">
          <Link to="/" className="block py-2 text-white">Home</Link>
          <Link to="/solutions" className="block py-2 text-white">Solutions</Link>
          <Link to="/portfolio" className="block py-2 text-white">Portfolio</Link>
          <Link to="/pricing" className="block py-2 text-white">Pricing</Link>
          <Link to="/contact" className="block py-2 text-white">Contact</Link>
          <Link to="/login" className="block py-2 text-white">Login</Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
