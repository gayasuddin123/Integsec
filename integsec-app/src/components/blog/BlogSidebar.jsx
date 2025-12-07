// src/components/blog/BlogSidebar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  getCategoriesWithCount, 
  getPopularPosts, 
  getAllTags,
  formatDate 
} from '../../data/blogData';

const BlogSidebar = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = getCategoriesWithCount();
  const popularPosts = getPopularPosts(5);
  const allTags = getAllTags();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing:', email);
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="space-y-8 lg:sticky lg:top-24">
      {/* Newsletter Subscription */}
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

          {subscribed ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
              <span className="text-green-400 font-semibold">✓ Subscribed successfully!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300"
              >
                Subscribe Now
              </button>
            </form>
          )}

          <p className="text-gray-500 text-xs mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📁</span>
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/blog?category=${category.id}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <span className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
                <span className="bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full text-xs group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">🔥</span>
          Popular Posts
        </h3>
        
        {popularPosts.length > 0 ? (
          <ul className="space-y-4">
            {popularPosts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex gap-4 group"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                    <img
                      src={post.thumbnail || '/api/placeholder/80/64'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/api/placeholder/80/64';
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-500 text-xs">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-500 text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {(post.views || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm text-center py-4">No popular posts yet</p>
        )}
      </div>

      {/* Tags Cloud */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">🏷️</span>
          Tags
        </h3>
        {allTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {allTags.slice(0, 15).map((tag, index) => (
              <Link
                key={index}
                to={`/blog?tag=${tag}`}
                className="px-3 py-1.5 bg-gray-800/50 text-gray-400 text-xs rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 border border-transparent hover:border-cyan-500/30 transition-all duration-300"
              >
                #{tag}
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm text-center py-4">No tags available</p>
        )}
      </div>

      {/* Social Links */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">🌐</span>
          Follow Us
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: 'Twitter', icon: '𝕏', color: 'hover:bg-gray-700', href: '#' },
            { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-600', href: '#' },
            { name: 'YouTube', icon: '▶', color: 'hover:bg-red-600', href: '#' },
            { name: 'Discord', icon: '💬', color: 'hover:bg-indigo-600', href: '#' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300`}
              title={social.name}
            >
              <span className="text-lg">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-500/30 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-3">🎓</div>
        <h3 className="text-white font-bold mb-2">Learn Cybersecurity</h3>
        <p className="text-gray-400 text-sm mb-4">
          Start your journey with our industry-ready courses
        </p>
        <Link
          to="/courses"
          className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all duration-300"
        >
          View Courses
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;