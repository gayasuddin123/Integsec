import React, { useEffect, useRef } from "react";

const Homepage = () => {
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Floating animation for logo
    let logoY = 0;
    let logoDirection = 1;
    const logoSpeed = 0.3;

    const animateLogo = () => {
      if (logoRef.current) {
        logoY += logoSpeed * logoDirection;
        if (logoY > 15 || logoY < -15) {
          logoDirection *= -1;
        }
        logoRef.current.style.transform = `translateY(${logoY}px)`;
      }
      requestAnimationFrame(animateLogo);
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
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background animated words */}
      <div
        ref={backgroundRef}
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15 pointer-events-none"
      ></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-lime-400 px-3 py-2 font-bold text-black text-xl">
                INTEGSEC
                <div className="text-xs tracking-wider">
                  ADAPTIVE CYBERSECURITY
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a
                href="#home"
                className="text-lime-400 hover:text-lime-300 transition-colors border-b-2 border-lime-400 pb-1"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Contact
              </a>

              {/* Login Button */}
              <button className="border-2 border-lime-400 text-lime-400 px-6 py-2 rounded-md hover:bg-lime-400 hover:text-black transition-all duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <button className="border-2 border-lime-400 text-lime-400 px-6 py-2 rounded-full text-sm hover:bg-lime-400 hover:text-black transition-all duration-300">
                Next Level Cyber Defense
              </button>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Advanced Cyber Security Solutions
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-lg max-w-xl">
                Protecting your digital world with next-gen defense systems.
                Stay secure with our cutting-edge cybersecurity solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-lime-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/50">
                  Get Started
                </button>
                <button className="border-2 border-gray-600 text-white px-8 py-3 rounded-md font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                  Contact Us
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-lime-400">
                    500+
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Clients Protected
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-lime-400">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Threat Prevention
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-lime-400">
                    24/7
                  </div>
                  <div className="text-gray-400 text-sm mt-1">Monitoring</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Logo Animation */}
            <div className="relative flex items-center justify-center">
              {/* Animated circles and dots container */}
              <div
                ref={logoRef}
                className="relative transition-transform duration-100"
              >
                {/* Outer glow circle */}
                <div className="absolute inset-0 rounded-full bg-lime-400/10 blur-3xl animate-pulse"></div>

                {/* Main circle with border */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-lime-400/30 flex items-center justify-center">
                  {/* Inner circles */}
                  <div className="absolute inset-8 rounded-full border border-lime-400/20"></div>
                  <div className="absolute inset-16 rounded-full border border-lime-400/10"></div>

                  {/* Animated dots */}
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite]"></div>
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] right-[15%] animate-[dotFloat_3s_ease-in-out_infinite_0.5s]"></div>
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] right-[10%] animate-[dotFloat_3s_ease-in-out_infinite_1s]"></div>
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[10%] left-1/2 -translate-x-1/2 animate-[dotFloat_3s_ease-in-out_infinite_1.5s]"></div>
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] bottom-[30%] left-[10%] animate-[dotFloat_3s_ease-in-out_infinite_2s]"></div>
                  <div className="absolute w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_15px_#84cc16] top-[30%] left-[15%] animate-[dotFloat_3s_ease-in-out_infinite_2.5s]"></div>

                  {/* Center logo */}
                  <div className="relative z-10 bg-gradient-to-br from-lime-400 to-lime-600 px-8 py-4 rounded-lg shadow-2xl shadow-lime-400/50">
                    <div className="font-bold text-black flex items-center gap-2">
                      <span className="text-4xl">I</span>
                      <div>
                        <div className="text-2xl">INTEGSEC</div>
                        <div className="text-[8px] tracking-widest -mt-1">
                          ADAPTIVE CYBERSECURITY
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vertical line top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-lime-400 to-transparent"></div>

                  {/* Vertical line bottom */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-lime-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your
              business from evolving threats.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Service Card 1 - Penetration Testing */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-lime-400"
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Penetration Testing
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Comprehensive security testing to identify vulnerabilities
                  before attackers do.
                </p>
              </div>
            </div>

            {/* Service Card 2 - Network Security */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-lime-400"
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

                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Network Security
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Advanced network protection and monitoring solutions for your
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Security Audits */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-lime-400"
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

                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Security Audits
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Thorough security assessments and compliance auditing
                  services.
                </p>
              </div>
            </div>

            {/* Service Card 4 - Threat Intelligence */}
            <div className="group relative bg-black border border-gray-800 rounded-2xl p-8 hover:border-lime-400 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-lime-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-lime-900/30 border-2 border-lime-400/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 group-hover:border-lime-400 transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-lime-400"
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

                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors duration-300">
                  Threat Intelligence
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
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
              className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 text-lg font-semibold transition-colors duration-300"
            >
              View All Services
              <svg
                className="w-5 h-5"
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
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-2xl p-8 overflow-hidden">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-bold text-lime-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-lg">Clients Protected</div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-2xl p-8 overflow-hidden">
              {/* Animated Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-bold text-lime-400 mb-2">
                  1000+
                </div>
                <div className="text-gray-300 text-lg">Threats Blocked</div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-2xl p-8 overflow-hidden">
              {/* Animated Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-bold text-lime-400 mb-2">
                  50+
                </div>
                <div className="text-gray-300 text-lg">Security Experts</div>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="relative bg-gradient-to-br from-lime-900/40 to-lime-950/20 border border-lime-400/30 rounded-2xl p-8 overflow-hidden">
              {/* Animated Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-600/20 to-transparent animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-bold text-lime-400 mb-2">
                  15+
                </div>
                <div className="text-gray-300 text-lg">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose INTEGSEC Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose INTEGSEC?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We provide enterprise-grade security solutions with cutting-edge
                technology and expert support.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    Advanced threat detection and prevention
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    24/7 security monitoring and support
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    Compliance with industry standards
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    Customized security solutions
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    Experienced cybersecurity professionals
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-lime-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-lime-400"
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
                  <span className="text-white text-lg">
                    Proven track record of success
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-900/50 to-teal-950/30 border-2 border-lime-400 rounded-3xl p-8 backdrop-blur-sm">
                {/* Dashboard Header - Icons */}
                <div className="flex justify-around mb-8">
                  {/* Security Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mb-2 transform rotate-12">
                        <svg
                          className="w-10 h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-teal-900">
                        <svg
                          className="w-3 h-3 text-white"
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
                    <div className="text-white text-sm font-semibold">
                      Security
                    </div>
                  </div>

                  {/* Privacy Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mb-2 transform -rotate-6">
                        <svg
                          className="w-10 h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-xs font-bold">
                        3
                      </div>
                    </div>
                    <div className="text-white text-sm font-semibold">
                      Privacy
                    </div>
                  </div>

                  {/* Performance Icon */}
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl flex items-center justify-center mb-2 transform rotate-6">
                        <svg
                          className="w-10 h-10 text-teal-900"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-teal-900 text-white text-xs font-bold">
                        2
                      </div>
                    </div>
                    <div className="text-white text-sm font-semibold">
                      Performance
                    </div>
                  </div>
                </div>

                {/* Status Items */}
                <div className="space-y-4 mb-6">
                  {/* Security Status */}
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg
                        className="w-4 h-4"
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
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg
                        className="w-4 h-4"
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
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg
                        className="w-4 h-4"
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
                      <span>Apps are up-to-date</span>
                    </div>
                  </div>

                  {/* Privacy Status */}
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>21 privacy settings to fix</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>32 browser cookies</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      <span>Email not monitored</span>
                    </div>
                  </div>

                  {/* Performance Status */}
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <svg
                        className="w-4 h-4"
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
                      <span>Startup is optimal</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>5.47 GB to free up</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span>99 registry entries</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Fix Issues
                  </button>
                  <button className="flex-1 bg-teal-700/50 hover:bg-teal-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by Industry Leaders Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Company Card 1 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                TechCorp
              </span>
            </div>

            {/* Company Card 2 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                SecureBank
              </span>
            </div>

            {/* Company Card 3 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                CloudNet
              </span>
            </div>

            {/* Company Card 4 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                DataVault
              </span>
            </div>

            {/* Company Card 5 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                CyberFirst
              </span>
            </div>

            {/* Company Card 6 */}
            <div className="group bg-black border border-gray-800 rounded-2xl px-8 py-6 flex items-center justify-center hover:border-lime-400 transition-all duration-300 cursor-pointer">
              <span className="text-gray-400 text-lg font-semibold group-hover:text-lime-400 transition-colors duration-300">
                ShieldTech
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* What Our Clients Say - Testimonial Section */}
      <div className="relative py-20 px-6" style={{ backgroundColor: "#111" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from businesses that trust us to protect their digital
              assets.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div
              className="relative rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px] border border-gray-800 hover:border-lime-400/50 transition-all duration-500 group"
              style={{ backgroundColor: "#181818" }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg
                  className="w-12 h-12 text-lime-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "INTEGSEC has been instrumental in securing our
                  infrastructure. Their expertise and proactive approach have
                  given us peace of mind."
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                {/* Profile Image with Neon Glow */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-lime-400 blur-md opacity-60 animate-pulse"></div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-lime-400 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    {/* Placeholder Icon - Replace with actual image */}
                    <svg
                      className="w-8 h-8 text-lime-400"
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
                    {/* Uncomment below and add your image URL
              <img 
                src="/path-to-sarah-image.jpg" 
                alt="Sarah Johnson"
                className="w-full h-full object-cover"
              />
              */}
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Sarah Johnson
                  </h4>
                  <p className="text-gray-500 text-sm">CTO, TechCorp</p>
                </div>
              </div>

              {/* Bottom Glow Effect on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>

            {/* Testimonial Card 2 */}
            <div
              className="relative rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px] border border-gray-800 hover:border-lime-400/50 transition-all duration-500 group"
              style={{ backgroundColor: "#181818" }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg
                  className="w-12 h-12 text-lime-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "Outstanding service and cutting-edge security solutions. The
                  team is highly professional and responsive."
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                {/* Profile Image with Neon Glow */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-lime-400 blur-md opacity-60 animate-pulse"></div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-lime-400 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    {/* Placeholder Icon - Replace with actual image */}
                    <svg
                      className="w-8 h-8 text-lime-400"
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
                    {/* Uncomment below and add your image URL
              <img 
                src="/path-to-michael-image.jpg" 
                alt="Michael Chen"
                className="w-full h-full object-cover"
              />
              */}
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <h4 className="text-white font-bold text-lg">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">
                    Security Director, FinanceHub
                  </p>
                </div>
              </div>

              {/* Bottom Glow Effect on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>

            {/* Testimonial Card 3 */}
            <div
              className="relative rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px] border border-gray-800 hover:border-lime-400/50 transition-all duration-500 group"
              style={{ backgroundColor: "#181818" }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <svg
                  className="w-12 h-12 text-lime-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  "The best cybersecurity partner we have worked with. Their
                  advanced threat detection saved us from multiple attacks."
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                {/* Profile Image with Neon Glow */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-lime-400 blur-md opacity-60 animate-pulse"></div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-lime-400 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    {/* Placeholder Icon - Replace with actual image */}
                    <svg
                      className="w-8 h-8 text-lime-400"
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
                    {/* Uncomment below and add your image URL
              <img 
                src="/path-to-emily-image.jpg" 
                alt="Emily Rodriguez"
                className="w-full h-full object-cover"
              />
              */}
                  </div>
                </div>

                {/* Client Info */}
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Emily Rodriguez
                  </h4>
                  <p className="text-gray-500 text-sm">CEO, DataSafe Inc</p>
                </div>
              </div>

              {/* Bottom Glow Effect on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Ready to Secure Your Business - CTA Section */}
      <div
        className="relative py-32 px-6 overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* Radial Grid Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Radar Rings */}
          <div className="absolute w-[200%] h-[200%] opacity-20">
            {/* Ring 1 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-lime-400/30"></div>
            {/* Ring 2 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-lime-400/20"></div>
            {/* Ring 3 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-lime-400/15"></div>
            {/* Ring 4 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-lime-400/10"></div>
            {/* Ring 5 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-lime-400/5"></div>
            {/* Ring 6 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] rounded-full border border-lime-400/5"></div>
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            {/* Vertical Lines */}
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-lime-400/50 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-lime-400/50 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-lime-400/50 to-transparent"></div>

            {/* Horizontal Lines */}
            <div className="absolute left-0 right-0 top-1/4 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
            <div className="absolute left-0 right-0 top-3/4 h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>
          </div>

          {/* Animated Radar Sweep */}
          <div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(132, 204, 22, 0.1) 30deg, transparent 60deg)",
              animation: "radarSweep 8s linear infinite",
            }}
          ></div>

          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 tracking-tight">
            Ready to Secure Your Business?
          </h2>

          {/* Subheading */}
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Get started with our advanced cybersecurity solutions today.
          </p>

          {/* CTA Button with Neon Glow */}
          <div className="relative inline-block group">
            {/* Outer Glow Layer 1 */}
            <div className="absolute -inset-2 bg-lime-400 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>

            {/* Outer Glow Layer 2 */}
            <div className="absolute -inset-1 bg-lime-400 rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Button */}
            <button className="relative bg-lime-400 hover:bg-lime-300 text-black font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.5)] hover:shadow-[0_0_50px_rgba(132,204,22,0.8)]">
              Get Free Consultation
            </button>
          </div>

          {/* Optional: Trust Badges Below Button */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-lime-400"
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
                className="w-5 h-5 text-lime-400"
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
                className="w-5 h-5 text-lime-400"
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

        {/* Corner Decorative Elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-lime-400/20 rounded-tl-lg"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-lime-400/20 rounded-tr-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-lime-400/20 rounded-bl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-lime-400/20 rounded-br-lg"></div>
      </div>
        {/* Footer Section */}
<footer className="relative pt-20 pb-8 px-6" style={{ backgroundColor: '#0d0d0d' }}>
  <div className="max-w-7xl mx-auto">
    
    {/* Main Footer Content - 4 Column Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
      
      {/* Column 1 - Brand Info */}
      <div className="lg:col-span-1">
        {/* Logo with Neon Glow */}
        <div className="relative inline-block mb-6">
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-lime-400/20 blur-xl rounded-lg"></div>
          
          {/* Logo */}
          <div className="relative bg-lime-400 px-4 py-3 rounded-lg">
            <div className="font-bold text-black">
              <div className="text-xl tracking-tight">INTEGSEC</div>
              <div className="text-[8px] tracking-widest -mt-1">ADAPTIVE CYBERSECURITY</div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Next level cybersecurity solutions protecting your digital world with advanced defense systems.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          {/* Twitter/X */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="#" 
            className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <a href="#about" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 - Services */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Penetration Testing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Network Security
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Security Audits
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="w-0 h-px bg-lime-400 group-hover:w-3 transition-all duration-300"></span>
              Cloud Security
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4 - Contact */}
      <div>
        <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
        <ul className="space-y-4">
          {/* Location */}
          <li className="flex items-start gap-3">
            <div className="w-5 h-5 mt-0.5 flex-shrink-0">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm leading-relaxed">
              123 Cyber Street, Tech City, TC 12345
            </span>
          </li>

          {/* Phone */}
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 flex-shrink-0">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a href="tel:+15551234567" className="text-gray-400 text-sm hover:text-lime-400 transition-colors duration-300">
              +1 (555) 123-4567
            </a>
          </li>

          {/* Email */}
          <li className="flex items-center gap-3">
            <div className="w-5 h-5 flex-shrink-0">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:info@integsec.com" className="text-gray-400 text-sm hover:text-lime-400 transition-colors duration-300">
              info@integsec.com
            </a>
          </li>
        </ul>

        {/* Newsletter Signup (Optional Enhancement) */}
        <div className="mt-8">
          <h5 className="text-white text-sm font-semibold mb-3">Stay Updated</h5>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 transition-colors duration-300"
            />
            <button className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-2 rounded-lg transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Divider Line */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

    {/* Bottom Footer Bar */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Copyright */}
      <div className="text-gray-500 text-sm">
        © 2025 <span className="text-lime-400">INTEGSEC</span>. All rights reserved.
      </div>

      {/* Footer Links */}
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-500 text-sm hover:text-lime-400 transition-colors duration-300">
          Privacy Policy
        </a>
        <span className="text-gray-700">|</span>
        <a href="#" className="text-gray-500 text-sm hover:text-lime-400 transition-colors duration-300">
          Terms of Service
        </a>
      </div>
    </div>
  </div>

  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"></div>
  
  {/* Corner Accents */}
  <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-lime-400/20"></div>
  <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-lime-400/20"></div>
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
