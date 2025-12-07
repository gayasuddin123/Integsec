// src/pages/Blog.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import BlogCard from '../components/blog/BlogCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogHeader from '../components/blog/BlogHeader';
import NewsletterForm from '../components/blog/NewsletterForm';
import { 
  getPublishedPosts, 
  getPostsByCategory, 
  getFeaturedPosts,
  searchPosts,
  getCategoriesWithCount 
} from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = getCategoriesWithCount();
  const featuredPosts = getFeaturedPosts();

  // Filter posts based on category and search
  useEffect(() => {
    let posts = [];
    
    if (searchQuery) {
      posts = searchPosts(searchQuery);
    } else {
      posts = getPostsByCategory(activeCategory);
    }
    
    setFilteredPosts(posts || []);
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  return (
    <Layout>
      {/* Hero Header Section */}
      <BlogHeader 
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && !searchQuery && activeCategory === 'all' && (
        <section className="relative py-12 px-4 sm:px-6 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                Featured Articles
              </h2>
              <Link 
                to="/blog?filter=featured" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section className="relative py-8 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gray-800'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-12 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Posts Grid */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-400">
                  {searchQuery ? (
                    <>
                      Found <span className="text-cyan-400 font-semibold">{filteredPosts.length}</span> results for "{searchQuery}"
                    </>
                  ) : (
                    <>
                      Showing <span className="text-cyan-400 font-semibold">{currentPosts.length}</span> of {filteredPosts.length} articles
                    </>
                  )}
                </p>
                
                <select className="bg-gray-900 border border-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-cyan-500/50">
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              {/* Posts Grid */}
              {currentPosts.length > 0 ? (
                <div className="space-y-6">
                  {currentPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-900/50 border border-gray-800 rounded-2xl">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search or filter criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      currentPage === 1
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === index + 1
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      currentPage === totalPages
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 xl:w-96">
              <BlogSidebar />
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <NewsletterForm />
    </Layout>
  );
};

export default Blog;