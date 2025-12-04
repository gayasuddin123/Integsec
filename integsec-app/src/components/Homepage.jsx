import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.jpeg"

const Homepage = () => {
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Floating animation for logo
    let logoY = 0;
    let logoDirection = 1;
    const logoSpeed = 0.3;
    let animationId;

    const animateLogo = () => {
      if (logoRef.current) {
        logoY += logoSpeed * logoDirection;
        if (logoY > 15 || logoY < -15) {
          logoDirection *= -1;
        }
        logoRef.current.style.transform = `translateY(${logoY}px)`;
      }
      animationId = requestAnimationFrame(animateLogo);
    };

    animateLogo();

    // Background words animation
    const words = [
      "5cr6e",
      "Sorge",
      "b2c6gt",
      "FLG83a",
      "brZ6eT",
      "sFJsgm",
      "cnEqsVP",
      "64763xn",
      "us6aC4",
      "rEEe61a",
      "n90Y6",
      "64763xn",
    ];

    if (backgroundRef.current) {
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.position = "absolute";
        span.style.color = "#84cc16";
        span.style.fontFamily = "monospace";
        span.style.fontWeight = "600";
        span.style.left = `${Math.random() * 100}%`;
        span.style.fontSize = `${Math.random() * 20 + 30}px`;
        span.style.textShadow = "0 0 10px rgba(132, 204, 22, 0.5)";
        span.style.animation = `scrollDown 15s linear infinite ${index * 0.5}s`;
        backgroundRef.current.appendChild(span);
      });
    }

    // Add keyframe animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scrollDown {
        0% {
          transform: translateY(-100px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(100vh);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      cancelAnimationFrame(animationId);
      document.head.removeChild(style);
    };
  }, []);

  // Navigation links data
  const navLinks = [
    { href: "#home", label: "Home", active: true },
    { href: "#about", label: "About", active: false },
    { href: "#services", label: "Courses", active: false },
    { href: "#portfolio", label: "Portfolio", active: false },
    { href: "#pricing", label: "Pricing", active: false },
    { href: "#blog", label: "Blog", active: false },
    { href: "#contact", label: "Contact", active: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background animated words */}
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15 pointer-events-none"
      ></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="px-2 py-1 sm:px-3 sm:py-2">
                <img
                  src={logo}
                  className="w-12 sm:w-14 md:w-16 lg:w-18 rounded-md"
                  alt="INTEGSEC Logo"
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${
                    link.active
                      ? "text-lime-400 border-b-2 border-lime-400 pb-1"
                      : "text-gray-300 hover:text-lime-400"
                  } transition-colors text-sm xl:text-base`}
                >
                  {link.label}
                </a>
              ))}

              {/* Login Button */}
              <button className="border-2 border-lime-400 text-lime-400 px-4 xl:px-6 py-2 rounded-md hover:bg-lime-400 hover:text-black transition-all duration-300 text-sm xl:text-base">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-lime-400 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-lime-400 rounded-full transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: "60px" }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 pb-20">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl sm:text-3xl font-semibold transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                } ${
                  link.active
                    ? "text-lime-400"
                    : "text-gray-300 hover:text-lime-400"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Login Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`mt-4 border-2 border-lime-400 text-lime-400 px-8 py-3 rounded-md hover:bg-lime-400 hover:text-black transition-all duration-300 text-lg transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 50}ms` }}
            >
              Login
            </button>

            {/* Mobile Social Links */}
            <div
              className={`flex items-center gap-4 mt-8 transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(navLinks.length + 1) * 50}ms` }}
            >
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <button className="border-2 border-lime-400 text-lime-400 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm hover:bg-lime-400 hover:text-black transition-all duration-300">
                Next Level Cyber Defense
              </button>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Advanced Cyber Security Solutions
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Protecting your digital world with next-gen defense systems.
                Stay secure with our cutting-edge cybersecurity solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/50 text-sm sm:text-base">
                  Get Started
                </button>
                <button className="border-2 border-gray-600 text-white px-6 sm:px-8 py-3 rounded-md font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-sm sm:text-base">
                  Contact Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-400">
                    500+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Clients Protected
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-400">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Threat Prevention
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-400">
                    24/7
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm mt-1">
                    Monitoring
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Logo Animation */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              {/* Animated circles and dots container */}
              <div
                ref={logoRef}
                className="relative transition-transform duration-100"
              >
                {/* Outer glow circle */}
                <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-3xl animate-pulse"></div>

                {/* Main circle with border */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-lime-400/30 flex items-center justify-center">
                  {/* Inner circles */}
                  <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-lime-400/20"></div>
                  <div className="absolute inset-8 sm:inset-12 md:inset-16 rounded-full border border-lime-400/10"></div>

                  {/* Animated dots - hidden on very small screens */}
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite]"></div>
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] right-[15%] animate-[dotFloat_3s_ease-in-out_infinite_0.5s]"></div>
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] right-[10%] animate-[dotFloat_3s_ease-in-out_infinite_1s]"></div>
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite_1.5s]"></div>
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] left-[10%] animate-[dotFloat_3s_ease-in-out_infinite_2s]"></div>
                  <div className="hidden sm:block absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] left-[15%] animate-[dotFloat_3s_ease-in-out_infinite_2.5s]"></div>

                  {/* Center logo */}
                  <div className="relative z-10 w-1/2 ">
                    <div className="font-bold text-black flex items-center gap-1 sm:gap-2 rounded-lg border-lime=300 shadow-2xl
                    ">
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl flex items-center justify-center rounded-lg border-lime=300 shadow-2xl
                        ">
                          <img src={logo} className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-2xl shadow-lime-400/50 rounded-lg border-lime=300 
                          " alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vertical line top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-lime-400 to-transparent"></div>

                  {/* Vertical line bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 sm:h-12 md:h-16 bg-gradient-to-t from-lime-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
              Comprehensive cybersecurity solutions tailored to protect your
              business from evolving threats.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Service Card 1 - Penetration Testing */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lime-400"
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
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Penetration Testing
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                  Comprehensive security testing to identify vulnerabilities
                  before attackers do.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Network Security */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Network Security
                </h3>

                <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                  Advanced network protection and monitoring solutions for your
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Security Audits */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Security Audits
                </h3>

                <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                  Thorough security assessments and compliance auditing
                  services.
                </p>
              </div>
            </div>

            {/* Service Card 4 - Threat Intelligence */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Threat Intelligence
                </h3>

                <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                  Real-time threat detection and analysis to stay ahead of cyber
                  attacks.
                </p>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 text-base sm:text-lg font-semibold transition-colors duration-300"
            >
              View All Services
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat Card 1 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"></div>

              <div className="relative z-10 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-400 mb-1 sm:mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                  Clients Protected
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-400 mb-1 sm:mb-2">
                  1000+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                  Threats Blocked
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-400 mb-1 sm:mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                  Security Experts
                </div>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-lime-400 mb-1 sm:mb-2">
                  15+
                </div>
                <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose INTEGSEC Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose INTEGSEC?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                We provide enterprise-grade security solutions with cutting-edge
                technology and expert support.
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Advanced threat detection and prevention",
                  "24/7 security monitoring and support",
                  "Compliance with industry standards",
                  "Customized security solutions",
                  "Experienced cybersecurity professionals",
                  "Proven track record of success",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 justify-center lg:justify-start"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 sm:w-5 sm:h-5 text-lime-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-sm sm:text-base md:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-teal-900/50 to-teal-950/30 border-2 border-lime-400 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                {/* Dashboard Header - Icons */}
                <div className="flex justify-around mb-4 sm:mb-6 md:mb-8">
                  {/* Security Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform rotate-12">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-teal-900">
                        <svg
                          className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Security
                    </div>
                  </div>

                  {/* Privacy Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform -rotate-6">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-[8px] sm:text-xs font-bold">
                        3
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Privacy
                    </div>
                  </div>

                  {/* Performance Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-1 sm:mb-2 transform rotate-6">
                        <svg
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-[8px] sm:text-xs font-bold">
                        2
                      </div>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-semibold">
                      Performance
                    </div>
                  </div>
                </div>

                {/* Status Items - Simplified for mobile */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6">
                  {/* Security Status */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Networks are safe</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-xs sm:text-sm">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Virus free</span>
                    </div>
                  </div>

                  {/* Privacy Status */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-yellow-400 text-xs sm:text-sm">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>21 privacy settings to fix</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400 text-xs sm:text-sm">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      <span>Email not monitored</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-4">
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base">
                    Fix Issues
                  </button>
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Industry Leaders Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {[
              "TechCorp",
              "SecureBank",
              "CloudNet",
              "DataVault",
              "CyberFirst",
              "ShieldTech",
            ].map((company, index) => (
              <div
                key={index}
                className="group bg-black border border-gray-800 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer"
              >
                <span className="text-gray-400 text-sm sm:text-base md:text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Our Clients Say - Testimonial Section */}
      <div
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ backgroundColor: "#111" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Hear from businesses that trust us to protect their digital
              assets.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Testimonial Cards */}
            {[
              {
                quote:
                  "INTEGSEC has been instrumental in securing our infrastructure. Their expertise and proactive approach have given us peace of mind.",
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
              },
              {
                quote:
                  "Outstanding service and cutting-edge security solutions. The team is highly professional and responsive.",
                name: "Michael Chen",
                role: "Security Director, FinanceHub",
              },
              {
                quote:
                  "The best cybersecurity partner we have worked with. Their advanced threat detection saved us from multiple attacks.",
                name: "Emily Rodriguez",
                role: "CEO, DataSafe Inc",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] border border-gray-800 hover:border-lime-400/50 transition-all duration-500 group"
                style={{ backgroundColor: "#181818" }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-lime-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Profile Image with Neon Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-lime-400 blur-md opacity-60 animate-pulse"></div>
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 border-lime-400 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-lime-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base md:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Glow Effect on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Secure Your Business - CTA Section */}
      <div
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Radial Grid Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Radar Rings - Scaled for mobile */}
          <div className="absolute w-[200%] h-[200%] opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full border border-lime-400/30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full border border-lime-400/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full border border-lime-400/15"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[900px] h-[450px] sm:h-[900px] rounded-full border border-lime-400/10"></div>
          </div>

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-100 mb-4 sm:mb-6 tracking-tight">
            Ready to Secure Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            Get started with our advanced cybersecurity solutions today.
          </p>

          {/* CTA Button with Neon Glow */}
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-lime-400 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-lime-400 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <button className="relative bg-lime-400 hover:bg-lime-300 text-black font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:shadow-[0_0_50px_rgba(132,204,22,0.8)]">
              Get Free Consultation
            </button>
          </div>

          {/* Trust Badges Below Button */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free Security Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>24/7 Expert Support</span>
            </div>
          </div>
        </div>

        {/* Corner Decorative Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l-2 border-t-2 border-lime-400/20 rounded-tl-lg"></div>
        <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r-2 border-t-2 border-lime-400/20 rounded-tr-lg"></div>
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l-2 border-b-2 border-lime-400/20 rounded-bl-lg"></div>
        <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r-2 border-b-2 border-lime-400/20 rounded-br-lg"></div>
      </div>

      {/* Footer Section */}
      <footer
        className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 px-4 sm:px-6"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content - 4 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12 md:mb-16">
            {/* Column 1 - Brand Info */}
            <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
              {/* Logo with Neon Glow */}
              <div className="relative inline-block mb-4 sm:mb-6  w-1/2 lg:w-full">
                <div className="absolute -inset-2  blur-xl rounded-lg"></div>
                <div className="relative px-3 sm:px-4 py-2 sm:py-3 rounded-lg  ">
                  <div className="font-bold text-black">
                    <div className="text-lg sm:text-xl tracking-tight rounded-lg">
                      <img src={logo} className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-2xl shadow-lime-400/50 border-2 border-lime-300 shadow-2xl
                      " alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Next level cybersecurity solutions protecting your digital world
                with advanced defense systems.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                {[
                  {
                    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    label: "Twitter",
                  },
                  {
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    label: "LinkedIn",
                  },
                  {
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    label: "GitHub",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {["About Us", "Services", "Portfolio", "Pricing"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-sm sm:text-base"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  "Penetration Testing",
                  "Network Security",
                  "Security Audits",
                  "Cloud Security",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-300 text-sm sm:text-base"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Contact
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {/* Location */}
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    A76 CHANDGANJ GARDEN KAPOORTHALA LUCKNOW 226024
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-400 text-xs sm:text-sm hover:text-lime-400 transition-colors"
                  >
                    +919026764985 
                  </a>
                </li>

                {/* Email */}
                <li className="flex items-center gap-3 justify-center sm:justify-start">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-lime-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@integsec.com"
                    className="text-gray-400 text-xs sm:text-sm hover:text-lime-400 transition-colors"
                  >
                    INFO@CODEVIRUSSEC.IN
                  </a>
                </li>
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-6 sm:mt-8">
                <h5 className="text-white text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                  Stay Updated
                </h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 min-w-0 bg-gray-900 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors"
                  />
                  <button className="bg-lime-400 hover:bg-lime-300 text-black px-3 sm:px-4 py-2 rounded-lg transition-colors flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 sm:mb-8"></div>

          {/* Bottom Footer Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © 2025 <span className="text-lime-400">HackPro Academy</span>. All rights
              reserved.
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-gray-500 text-xs sm:text-sm hover:text-lime-400 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 text-xs sm:text-sm hover:text-lime-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"></div>
      </footer>

      <style jsx>{`
        @keyframes dotFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes radarSweep {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;
