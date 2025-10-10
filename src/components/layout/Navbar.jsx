import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    {
      label: "Solutions",
      subMenu: [
        { path: "/services", label: "Services" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/case-studies", label: "Case Studies" },
        { path: "/ai-demos", label: "AI Demos" },
      ],
    },
    {
      label: "About",
      subMenu: [
        { path: "/about", label: "About Us" },
        { path: "/partner", label: "Partner With Us" },
        { path: "/careers", label: "Careers" },
      ],
    },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];
  
  return (
    <nav className="bg-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex-shrink-0 flex items-center space-x-2 text-white font-extrabold text-2xl font-sans drop-shadow-lg">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span>Gridspark Solutions</span>
        </Link>
        
        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-8 items-center h-full">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.subMenu ? (
                <button className="text-white hover:text-accent focus:outline-none flex items-center">
                  {item.label}
                  <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
              ) : (
                <Link to={item.path} className={location.pathname === item.path ? "text-accent font-bold" : "text-white hover:text-accent"}>
                  {item.label}
                </Link>
              )}
              {item.subMenu && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2">
                    <div className="bg-dark rounded-md shadow-lg py-1">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block whitespace-nowrap px-4 py-2 text-sm text-white hover:bg-gray-700 w-full text-left"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex items-center">
          <Link to="/login" className={`btn-secondary ml-4 ${location.pathname === "/login" ? "ring-2 ring-accent" : ""}`}>
            Login
          </Link>
        </div>
        
        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-white">
          {isMobileMenuOpen ? "✕" : "≡"}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-dark">
          {menuItems.map((item) => (
            item.subMenu ? (
              <div key={item.label}>
                <h3 className="py-2 text-gray-400 font-bold">{item.label}</h3>
                {item.subMenu.map(subItem => (
                   <Link key={subItem.path} to={subItem.path} className="block py-2 pl-4 text-white" onClick={() => setMobileMenuOpen(false)}>
                     {subItem.label}
                   </Link>
                ))}
              </div>
            ) : (
              <Link key={item.path} to={item.path} className="block py-2 text-white" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            )
          ))}
          <Link to="/login" className="block py-2 text-white border-t border-gray-700 mt-2" onClick={() => setMobileMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

