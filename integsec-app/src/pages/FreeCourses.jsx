// src/pages/FreeCourses.jsx

import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import CourseCard from '../components/courses/CourseCard';
import { getAllCourses, getFreeCourses } from '../data/coursesData';

const FreeCourses = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const freeCourses = getFreeCourses();

  // Filter courses based on selected filter and search query
  const filteredCourses = freeCourses.filter((course) => {
    const matchesFilter =
      filter === 'all'
        ? true
        : filter === 'popular'
        ? course.isPopular
        : filter === 'new'
        ? course.isNew
        : course.category?.toLowerCase() === filter.toLowerCase() ||
          course.level?.toLowerCase().includes(filter);

    const matchesSearch =
      searchQuery === ''
        ? true
        : course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const filters = [
    { id: 'all', label: 'All Free Courses' },
    { id: 'popular', label: '🔥 Popular' },
    { id: 'new', label: '✨ New' },
    { id: 'beginner', label: '🌱 Beginner' },
    { id: 'web development', label: '💻 Web Dev' },
    { id: 'programming', label: '🔧 Programming' },
  ];

  const features = [
    {
      icon: '🎯',
      title: 'No Cost, Ever',
      description: 'All courses are 100% free with no hidden charges',
    },
    {
      icon: '📜',
      title: 'Free Certificate',
      description: 'Get certified upon completion at no extra cost',
    },
    {
      icon: '🔓',
      title: 'Lifetime Access',
      description: 'Access course content anytime, anywhere, forever',
    },
    {
      icon: '👨‍💻',
      title: 'Hands-on Projects',
      description: 'Build real projects to enhance your portfolio',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 z-10">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400/20 to-emerald-400/20 border border-lime-400/50 text-lime-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 animate-bounce">
              🎁 100% Free • No Credit Card Required
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Learn For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400">
                Free
              </span>{' '}
              <br className="hidden sm:block" />
              Start Your Journey Today
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8">
              Access premium-quality courses absolutely free. No subscriptions, no hidden fees. 
              Just pure learning to kickstart your tech career.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search free courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/80 border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-lime-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lime-400 font-bold">{freeCourses.length}+</span>
                <span>Free Courses</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lime-400 font-bold">50K+</span>
                <span>Students Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-lime-400 font-bold">4.8</span>
                <span>Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-lime-400/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative py-8 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-gradient-to-r from-lime-400 to-green-400 text-black shadow-lg shadow-lime-400/25'
                    : 'bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-lime-400/50 hover:text-lime-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-400">
              Showing{' '}
              <span className="text-lime-400 font-semibold">
                {filteredCourses.length}
              </span>{' '}
              free courses
            </p>
            <select className="bg-gray-900 border border-gray-800 text-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-lime-400/50">
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <FreeCourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No courses found
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="bg-lime-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-lime-300 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Learning Path
            </h2>
            <p className="text-gray-400 text-lg">
              Follow our structured path to go from beginner to job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Pick a Course',
                description:
                  'Choose from our curated collection of free courses based on your interests',
                icon: '🎯',
              },
              {
                step: '02',
                title: 'Learn & Practice',
                description:
                  'Watch video lessons, complete exercises, and build real projects',
                icon: '💻',
              },
              {
                step: '03',
                title: 'Get Certified',
                description:
                  'Complete the course and earn a certificate to showcase your skills',
                icon: '🏆',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-lime-400/50 transition-all duration-300"
              >
                <span className="absolute -top-4 left-8 bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Step {item.step}
                </span>
                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10 bg-gradient-to-r from-lime-400/10 via-green-400/10 to-emerald-400/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '50,000+', label: 'Students Learning', icon: '👨‍🎓' },
              { value: `${freeCourses.length}+`, label: 'Free Courses', icon: '📚' },
              { value: '100+', label: 'Hours of Content', icon: '⏱️' },
              { value: '4.8/5', label: 'Student Satisfaction', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-400">
              Join thousands of satisfied learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Kumar',
                role: 'Frontend Developer',
                image: '👨‍💻',
                quote:
                  'The free courses here are better than many paid ones! I learned React and landed my first job.',
                rating: 5,
              },
              {
                name: 'Priya Singh',
                role: 'Full Stack Developer',
                image: '👩‍💻',
                quote:
                  "Can't believe this quality content is free. The projects helped me build an amazing portfolio.",
                rating: 5,
              },
              {
                name: 'Amit Sharma',
                role: 'Software Engineer',
                image: '🧑‍💻',
                quote:
                  'From zero coding knowledge to getting placed at a tech company. Thank you for the free courses!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block bg-lime-400/20 text-lime-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🚀 Ready for More?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Upgrade to Premium Courses
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get access to advanced courses, 1-on-1 mentorship, placement assistance, 
                and exclusive projects to fast-track your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-lime-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25">
                  Explore Premium Courses
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
                  Talk to Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Are these courses really free?',
                answer:
                  'Yes! All courses listed on this page are 100% free. No credit card required, no hidden fees.',
              },
              {
                question: 'Do I get a certificate after completion?',
                answer:
                  'Absolutely! You will receive a verified certificate upon successful completion of any free course.',
              },
              {
                question: 'How long do I have access to the courses?',
                answer:
                  'You get lifetime access to all free courses. Learn at your own pace, anytime, anywhere.',
              },
              {
                question: 'Can I get a job after completing free courses?',
                answer:
                  'Many of our students have successfully landed jobs after completing our free courses. The skills you learn are industry-relevant.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold hover:text-lime-400 transition-colors">
                  {faq.question}
                  <span className="text-lime-400 group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Free Course Card Component
const FreeCourseCard = ({ course }) => {
  return (
    <div className="group bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/10 hover:-translate-y-2">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image || course.thumbnail || '/api/placeholder/400/250'}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Free Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            FREE
          </span>
        </div>
        {/* Popular/New Badge */}
        {course.isPopular && (
          <div className="absolute top-4 right-4">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              🔥 Popular
            </span>
          </div>
        )}
        {course.isNew && !course.isPopular && (
          <div className="absolute top-4 right-4">
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              ✨ New
            </span>
          </div>
        )}
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-lime-400 rounded-full p-4">
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category & Level */}
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs">
            {course.category || 'Development'}
          </span>
          <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs">
            {course.level || 'Beginner'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-lime-400 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.description || course.shortDescription}
        </p>

        {/* Course Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <span>📚</span>
            <span>{course.lessons || course.totalLessons || 10} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{course.duration || course.totalDuration || '5 hours'}</span>
          </div>
        </div>

        {/* Rating & Students */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-white font-semibold">
              {course.rating || 4.8}
            </span>
            <span className="text-gray-500">
              ({course.reviewCount || course.reviews || '1.2k'})
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            {course.enrollmentCount || course.students || '5k'}+ enrolled
          </div>
        </div>

        {/* Instructor */}
        {course.instructor && (
          <div className="flex items-center gap-3 mb-4 pt-4 border-t border-gray-800">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm">
              👨‍🏫
            </div>
            <span className="text-gray-400 text-sm">
              {typeof course.instructor === 'object'
                ? `${course.instructor.firstName} ${course.instructor.lastName}`
                : course.instructor}
            </span>
          </div>
        )}

        {/* CTA Button */}
        <a
          href={`/courses/${course.slug || course.id}`}
          className="block w-full bg-gradient-to-r from-lime-400 to-green-400 text-black py-3 rounded-xl font-bold text-center hover:from-lime-300 hover:to-green-300 transition-all duration-300"
        >
          Start Learning Free →
        </a>
      </div>
    </div>
  );
};

export default FreeCourses;