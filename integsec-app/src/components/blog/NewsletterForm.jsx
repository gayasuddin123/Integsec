// src/components/blog/NewsletterForm.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsletterForm = ({ 
  variant = 'default', // 'default', 'inline', 'card'
  title = "Stay Updated with Latest Security Insights",
  subtitle = "Subscribe to our newsletter and get weekly cybersecurity updates, threat alerts, and exclusive content delivered to your inbox.",
  showPrivacyLink = true
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would integrate with your newsletter service
      console.log('Subscribing email:', email);
      
      setStatus('success');
      setMessage('Successfully subscribed! Check your inbox.');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  // Inline variant
  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Subscribing...</span>
            </>
          ) : (
            'Subscribe'
          )}
        </button>
        {message && (
          <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  // Card variant (for sidebar)
  if (variant === 'card') {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold">Subscribe</h3>
              <p className="text-gray-400 text-sm">Get weekly updates</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
              <span className="text-green-400 font-semibold">✓ {message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 text-sm disabled:opacity-50"
              />
              {status === 'error' && (
                <p className="text-red-400 text-xs">{message}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
          )}

          <p className="text-gray-500 text-xs mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  // Default full-width variant
  return (
    <section className="relative py-16 px-4 sm:px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {title.split(' ').map((word, index) => {
                if (word.toLowerCase() === 'security' || word.toLowerCase() === 'insights') {
                  return (
                    <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                      {word}{' '}
                    </span>
                  );
                }
                return word + ' ';
              })}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>

            {status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 max-w-md mx-auto">
                <div className="text-4xl mb-2">🎉</div>
                <span className="text-green-400 font-semibold text-lg">{message}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                  />
                  {status === 'error' && (
                    <p className="text-red-400 text-sm mt-2 text-left">{message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
            )}

            {showPrivacyLink && (
              <p className="text-gray-500 text-sm mt-4">
                No spam, unsubscribe anytime. Read our{' '}
                <Link to="/privacy" className="text-cyan-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;