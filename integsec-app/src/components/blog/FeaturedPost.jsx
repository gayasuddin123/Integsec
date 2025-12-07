// src/components/blog/FeaturedPost.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../data/blogData';

const FeaturedPost = ({ post }) => {
  // Early return if post is undefined or null
  if (!post) {
    return null;
  }

  return (
    <article className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={post.thumbnail || '/api/placeholder/600/400'}
          alt={post.title || 'Featured post'}
          className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            e.target.src = '/api/placeholder/600/400';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end min-h-[320px]">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.category && (
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold rounded-full">
              {post.category}
            </span>
          )}
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full border border-yellow-500/30">
            ⭐ Featured
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug || ''}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {post.title || 'Untitled Post'}
          </h2>
        </Link>

        {/* Description */}
        {post.shortDescription && (
          <p className="text-gray-300 mb-4 line-clamp-2">
            {post.shortDescription}
          </p>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {/* Author */}
          {post.author && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs">
                {post.author.name ? post.author.name.charAt(0) : '?'}
              </div>
              <span className="text-gray-300">{post.author.name || 'Anonymous'}</span>
            </div>
          )}

          {post.publishedAt && (
            <>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{formatDate(post.publishedAt)}</span>
            </>
          )}

          {post.readTime && (
            <>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">{post.readTime}</span>
            </>
          )}
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog/${post.slug || ''}`}
          className="inline-flex items-center gap-2 text-cyan-400 font-semibold mt-4 hover:text-cyan-300 transition-colors group/link"
        >
          <span>Read Article</span>
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
    </article>
  );
};

export default FeaturedPost;