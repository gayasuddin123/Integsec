import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation Links Data
  const navLinks = [
    { id: 1, name: "Home", path: "/", hasDropdown: false },
    { id: 2, name: "Course", path: "/course", hasDropdown: false },
    { id: 3, name: "Our Free Courses", path: "/free-courses", hasDropdown: false },
    {
      id: 4,
      name: "Training & Placement",
      path: "/training",
      hasDropdown: true,
      subLinks: [
        { id: 41, name: "Training & Placement", path: "/training-placement" },
        { id: 42, name: "Certificate", path: "/training/certificate" },
        { id: 43, name: "Verify Certification", path: "/training/verify" },
      ],
    },
    { id: 5, name: "Blog", path: "/blog", hasDropdown: false },
    { id: 6, name: "Contact Us", path: "/contact", hasDropdown: false },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Toggle functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileDropdownOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = (e) => {
    e.preventDefault();
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Check if link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Social Links Data
  const socialLinks = [
    {
      id: 1,
      name: "Twitter",
      href: "https://twitter.com",
      icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      id: 3,
      name: "GitHub",
      href: "https://github.com",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
  ];

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-lime-400/5'
            : 'bg-black/90 backdrop-blur-md'
        } border-b border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 z-50">
              <div className="px-2 py-1 sm:px-3 sm:py-2">
                <img
                  src={logo}
                  className="w-12 sm:w-14 md:w-16 rounded-md"
                  alt="Logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <div key={link.id} className="relative group">
                  {link.hasDropdown ? (
                    // Dropdown Menu Item
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm xl:text-base ${
                          isActiveLink(link.path)
                            ? 'text-lime-400 bg-lime-400/10'
                            : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                        }`}
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Panel */}
                      <div
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className={`absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl shadow-black/50 overflow-hidden transition-all duration-300 ${
                          isDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {/* Dropdown Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 to-transparent pointer-events-none" />

                        <div className="relative py-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.id}
                              to={subLink.path}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                                location.pathname === subLink.path
                                  ? 'text-lime-400 bg-lime-400/10'
                                  : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                              }`}
                            >
                              {/* Icon */}
                              <div className="w-8 h-8 rounded-lg bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                                {subLink.name === 'Certificate' ? (
                                  <svg
                                    className="w-4 h-4 text-lime-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-4 h-4 text-lime-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                  </svg>
                                )}
                              </div>

                              <div>
                                <div className="font-medium">{subLink.name}</div>
                                <div className="text-xs text-gray-500">
                                  {subLink.name === 'Certificate'
                                    ? 'Get your certificate'
                                    : 'Verify authenticity'}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Bottom Border Glow */}
                        <div className="h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
                      </div>
                    </>
                  ) : (
                    // Regular Menu Item
                    <Link
                      to={link.path}
                      className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 text-sm xl:text-base ${
                        isActiveLink(link.path)
                          ? 'text-lime-400 bg-lime-400/10'
                          : 'text-gray-300 hover:text-lime-400 hover:bg-gray-800/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Login/Sign Up Button */}
              <div className="flex items-center gap-2 ml-4">
                <Link
                  to="/login"
                  className="px-4 xl:px-5 py-2 text-gray-300 hover:text-lime-400 transition-all duration-300 text-sm xl:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-lime-400 text-black px-4 xl:px-6 py-2 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 text-sm xl:text-base shadow-lg shadow-lime-400/25"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-lime-400 focus:outline-none z-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== MOBILE MENU OVERLAY ==================== */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/98 backdrop-blur-xl"
          onClick={handleNavClick}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center pt-16 pb-8 overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full px-8">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className={`w-full max-w-sm transform transition-all duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : '0ms',
                }}
              >
                {link.hasDropdown ? (
                  // Mobile Dropdown
                  <div className="w-full">
                    <button
                      onClick={toggleMobileDropdown}
                      className={`w-full flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold transition-all duration-300 py-2 ${
                        isActiveLink(link.path)
                          ? 'text-lime-400'
                          : 'text-gray-300'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isMobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Links */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileDropdownOpen ? 'max-h-40 mt-2' : 'max-h-0'
                      }`}
                    >
                      <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.id}
                            to={subLink.path}
                            onClick={handleNavClick}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                              location.pathname === subLink.path
                                ? 'text-lime-400 bg-lime-400/10'
                                : 'text-gray-400 hover:text-lime-400'
                            }`}
                          >
                            <div className="w-6 h-6 rounded-md bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                              {subLink.name === 'Certificate' ? (
                                <svg
                                  className="w-3 h-3 text-lime-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  className="w-3 h-3 text-lime-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-base font-medium">
                              {subLink.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Mobile Link
                  <Link
                    to={link.path}
                    onClick={handleNavClick}
                    className={`block text-center text-xl sm:text-2xl font-bold transition-all duration-300 py-2 ${
                      isActiveLink(link.path)
                        ? 'text-lime-400'
                        : 'text-gray-300 hover:text-lime-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 mt-8 transform transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 75}ms`
                : '0ms',
            }}
          >
            <Link
              to="/login"
              onClick={handleNavClick}
              className="px-8 py-3 text-gray-300 hover:text-lime-400 transition-all duration-300 text-lg font-semibold"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={handleNavClick}
              className="bg-lime-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-lime-300 transition-all duration-300 text-lg shadow-lg shadow-lime-400/25"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Social Links */}
          <div
            className={`flex items-center gap-4 mt-8 transform transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${(navLinks.length + 1) * 75}ms`
                : '0ms',
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          {/* Brand Name */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-sm transform transition-all duration-500 ${
              isMobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${(navLinks.length + 2) * 75}ms`
                : '0ms',
            }}
          >
            <span className="text-lime-400">●</span> HackPro Academy
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;