// src/components/blog/BlogCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../data/blogData';

const BlogCard = ({ post }) => {
  // Early return if post is undefined or null
  if (!post) {
    return null;
  }

  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      'Security': 'from-cyan-500 to-blue-500',
      'Network': 'from-teal-500 to-green-500',
      'Threats': 'from-red-500 to-orange-500',
      'Updates': 'from-purple-500 to-pink-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <article className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="md:w-72 lg:w-80 relative overflow-hidden">
          <Link to={`/blog/${post.slug || ''}`}>
            <img
              src={post.thumbnail || '/api/placeholder/320/200'}
              alt={post.title || 'Blog post'}
              className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = '/api/placeholder/320/200';
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent md:bg-gradient-to-r" />
            
            {/* Category Badge on Image */}
            {post.category && (
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(post.category)} text-white`}>
                  {post.category}
                </span>
              </div>
            )}

            {/* Popular/Featured Badge */}
            {(post.isPopular || post.isFeatured) && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  {post.isFeatured ? '⭐ Featured' : '🔥 Popular'}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
            {/* Date */}
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            )}

            {/* Read Time */}
            {post.readTime && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
              </div>
            )}

            {/* Views */}
            {typeof post.views === 'number' && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{post.views.toLocaleString()}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <Link to={`/blog/${post.slug || ''}`}>
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
              {post.title || 'Untitled Post'}
            </h2>
          </Link>

          {/* Description */}
          {post.shortDescription && (
            <p className="text-gray-400 mb-4 line-clamp-2">
              {post.shortDescription}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-full hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                >
                  #{tag}
                </Link>
              ))}
              {post.tags.length > 3 && (
                <span className="px-3 py-1 text-gray-500 text-xs">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            {/* Author */}
            {post.author && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold">
                  {post.author.name ? post.author.name.charAt(0) : '?'}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{post.author.name || 'Anonymous'}</p>
                  <p className="text-gray-500 text-xs">{post.author.role || 'Author'}</p>
                </div>
              </div>
            )}

            {/* Read More */}
            <Link
              to={`/blog/${post.slug || ''}`}
              className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
            >
              <span>Read More</span>
              <svg 
                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;