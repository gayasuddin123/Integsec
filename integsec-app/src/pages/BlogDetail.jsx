// src/pages/BlogDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogSidebar from '../components/blog/BlogSidebar';
import { 
  getPostBySlug, 
  getRelatedPosts, 
  formatDate 
} from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = () => {
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost, 3));
      } else {
        navigate('/blog');
      }
      setIsLoading(false);
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 px-4 sm:px-6 z-10">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-500 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-bold rounded-full">
              {post.category}
            </span>
            {post.isFeatured && (
              <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 text-sm font-bold rounded-full border border-yellow-500/30">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{post.author.role}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {post.views.toLocaleString()} views
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={post.thumbnail || '/api/placeholder/1200/600'}
              alt={post.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Article Content */}
            <article className="flex-1 max-w-4xl">
              {/* Description */}
              <div className="bg-gray-900/50 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-8">
                <p className="text-gray-300 text-lg italic">
                  {post.shortDescription}
                </p>
              </div>

              {/* Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-cyan-400
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-300 prose-p:leading-relaxed
                  prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-ul:text-gray-300 prose-ol:text-gray-300
                  prose-li:marker:text-cyan-400
                  prose-code:text-cyan-400 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
                  prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h4 className="text-white font-semibold mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-white font-semibold mb-4">Share this article:</h4>
                <div className="flex gap-3">
                  {[
                    { name: 'Twitter', icon: '𝕏', color: 'hover:bg-gray-700' },
                    { name: 'LinkedIn', icon: 'in', color: 'hover:bg-blue-600' },
                    { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-500' },
                    { name: 'Copy Link', icon: '🔗', color: 'hover:bg-gray-700' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300`}
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{post.author.name}</h4>
                    <p className="text-cyan-400 text-sm mb-3">{post.author.role}</p>
                    <p className="text-gray-400">{post.author.bio}</p>
                    <div className="flex gap-3 mt-4">
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <div className="h-32 overflow-hidden">
                          <img
                            src={relatedPost.thumbnail || '/api/placeholder/300/150'}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-cyan-400 text-xs font-semibold">
                            {relatedPost.category}
                          </span>
                          <h4 className="text-white font-semibold mt-1 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-500 text-sm mt-2">
                            {formatDate(relatedPost.publishedAt)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 xl:w-96">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;