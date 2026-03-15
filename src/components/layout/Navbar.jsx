import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/gridspark-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    {
      label: "Solutions",
      subMenu: [
        { path: "/solutions/services", label: "Services" },
        { path: "/solutions/portfolio", label: "Portfolio" },
        { path: "/solutions/case-studies", label: "Case Studies" },
        { path: "/solutions/ai-demos", label: "AI Demos" },
        { path: "/solutions/ai-showcase", label: "AI Showcase" },
      ],
    },
    { path: "/resources", label: "Resources" },
    { path: "/blog", label: "Blog" },
    {
      label: "Company",
      subMenu: [
        { path: "/about", label: "About Us" },
        { path: "/expertise", label: "Expertise" },
        { path: "/industries", label: "Industries" },
        { path: "/partner", label: "Partner With Us" },
        { path: "/careers", label: "Careers" },
      ],
    },
  ];

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-3" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0 touch-manipulation">
          <img src={logo} alt="Gridspark Logo" className="h-10 sm:h-12 w-auto brand-logo" />
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group h-full flex items-center"
            >
              {item.subMenu ? (
                <>
                  <button
                    className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 text-gray-300 group-hover:text-white"
                  >
                    {item.label}
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-4 w-64 dropdown-menu-wrapper">
                    <div className="dropdown-menu">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-400 dropdown-item font-medium"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`
                    text-sm font-medium transition-colors duration-200
                    ${location.pathname === item.path ? "text-[var(--color-primary)]" : "text-gray-300 hover:text-white"}
                  `}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* --- CONTACT BUTTON (Desktop) --- */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="btn-primary text-sm px-6 py-2"
          >
            Contact Us
          </Link>
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white bg-[var(--color-bg)] hover:bg-[var(--color-bg-secondary)] focus:outline-none p-2.5 rounded-lg touch-manipulation active:scale-95 transition-all border border-[var(--color-border)]"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-[var(--color-border)] absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
          <div className="px-4 pt-4 pb-6 space-y-2 safe-area-bottom">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.subMenu ? (
                  <>
                    <div className="px-3 py-2.5 text-base font-bold text-white touch-manipulation">{item.label}</div>
                    <div className="pl-4 sm:pl-6 space-y-1 border-l-2 border-gray-700 ml-3">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors touch-manipulation"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6 pb-2">
              <Link
                to="/contact"
                className="block w-full text-center btn-primary touch-manipulation active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
