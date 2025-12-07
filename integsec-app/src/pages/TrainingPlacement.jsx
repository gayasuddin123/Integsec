// src/pages/TrainingPlacement.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const TrainingPlacement = () => {
  const [activeTab, setActiveTab] = useState('internship');

  // Internship Support Data
  const internshipFeatures = [
    {
      icon: '🔒',
      title: 'Real Time Cybersecurity Task',
      description: 'Work on actual security scenarios and threats faced by organizations in real-world environments.',
      highlights: ['Live threat analysis', 'Incident response drills', 'Security tool implementation']
    },
    {
      icon: '🖥️',
      title: 'SOC Monitoring Assignments',
      description: 'Get hands-on experience with Security Operations Center workflows and monitoring tools.',
      highlights: ['SIEM dashboard monitoring', 'Alert triage & escalation', 'Log analysis practice']
    },
    {
      icon: '🌐',
      title: 'Web App PT Task',
      description: 'Conduct penetration testing on web applications to identify vulnerabilities and security flaws.',
      highlights: ['OWASP Top 10 testing', 'Vulnerability assessment', 'Report writing']
    },
    {
      icon: '🐛',
      title: 'Bug Bounty Recon',
      description: 'Learn reconnaissance techniques used in bug bounty hunting and vulnerability research.',
      highlights: ['Asset discovery', 'Subdomain enumeration', 'Information gathering']
    },
    {
      icon: '👨‍🏫',
      title: 'Weekly Mentor Review',
      description: 'Get personalized feedback and guidance from industry experts every week.',
      highlights: ['1-on-1 sessions', 'Performance review', 'Career guidance']
    }
  ];

  // Placement Support Data
  const placementFeatures = [
    {
      icon: '📄',
      title: 'Resume Building',
      description: 'Craft an ATS-friendly resume that highlights your cybersecurity skills and projects.',
      details: [
        'Industry-standard templates',
        'Skill optimization for ATS',
        'Project showcase guidance',
        'LinkedIn profile optimization'
      ]
    },
    {
      icon: '🎯',
      title: 'Interview Preparation',
      description: 'Comprehensive preparation covering technical and behavioral interview aspects.',
      details: [
        'Technical concept revision',
        'Common interview questions',
        'HR round preparation',
        'Salary negotiation tips'
      ]
    },
    {
      icon: '🎭',
      title: 'Mock Interviews',
      description: 'Practice with simulated interviews conducted by industry professionals.',
      details: [
        'Real interview simulation',
        'Technical round practice',
        'Detailed feedback session',
        'Improvement tracking'
      ]
    },
    {
      icon: '🤝',
      title: 'Referral Support',
      description: 'Get referrals from our network of hiring partners and alumni connections.',
      details: [
        '100+ hiring partners',
        'Alumni referral network',
        'Direct recruiter connect',
        'Priority applications'
      ]
    },
    {
      icon: '🔔',
      title: 'Job Alerts & Guidance',
      description: 'Stay updated with latest job openings and application strategies.',
      details: [
        'Daily job alerts',
        'Company-specific guidance',
        'Application tracking',
        'Follow-up strategies'
      ]
    }
  ];

  // Career Outcomes Data
  const careerOutcomes = [
    {
      title: 'SOC Analyst (L1)',
      icon: '🛡️',
      salary: '₹4-8 LPA',
      description: 'Monitor security alerts, analyze threats, and respond to incidents in real-time.',
      skills: ['SIEM Tools', 'Threat Analysis', 'Incident Response', 'Log Analysis'],
      companies: ['TCS', 'Wipro', 'Infosys', 'HCL'],
      demand: 'High'
    },
    {
      title: 'Cybersecurity Analyst',
      icon: '🔐',
      salary: '₹5-10 LPA',
      description: 'Protect organizational assets by implementing security measures and policies.',
      skills: ['Security Auditing', 'Risk Assessment', 'Compliance', 'Security Tools'],
      companies: ['Deloitte', 'PwC', 'KPMG', 'EY'],
      demand: 'Very High'
    },
    {
      title: 'Junior Penetration Tester',
      icon: '🔓',
      salary: '₹6-12 LPA',
      description: 'Identify vulnerabilities in systems and applications through ethical hacking.',
      skills: ['Ethical Hacking', 'Vulnerability Assessment', 'Burp Suite', 'Metasploit'],
      companies: ['Payatu', 'Securelayer7', 'Sum0', 'Appsecco'],
      demand: 'High'
    },
    {
      title: 'IT Security Engineer',
      icon: '⚙️',
      salary: '₹6-14 LPA',
      description: 'Design and implement security solutions to protect IT infrastructure.',
      skills: ['Firewall Configuration', 'Network Security', 'Cloud Security', 'Automation'],
      companies: ['Amazon', 'Microsoft', 'Google', 'IBM'],
      demand: 'Very High'
    },
    {
      title: 'Bug Bounty Researcher',
      icon: '🐛',
      salary: '₹8-20+ LPA',
      description: 'Find and report security vulnerabilities in exchange for bounty rewards.',
      skills: ['Web Security', 'Recon', 'Exploit Development', 'Report Writing'],
      companies: ['HackerOne', 'Bugcrowd', 'Synack', 'Independent'],
      demand: 'Growing'
    }
  ];

  // Placement Statistics
  const stats = [
    { value: '500+', label: 'Students Placed', icon: '👨‍🎓' },
    { value: '95%', label: 'Placement Rate', icon: '📈' },
    { value: '₹6.5 LPA', label: 'Average Package', icon: '💰' },
    { value: '100+', label: 'Hiring Partners', icon: '🏢' },
    { value: '₹18 LPA', label: 'Highest Package', icon: '🏆' },
    { value: '30 Days', label: 'Avg Placement Time', icon: '⏱️' }
  ];

  // Hiring Partners
  const hiringPartners = [
    'TCS', 'Wipro', 'Infosys', 'HCL', 'Tech Mahindra',
    'Deloitte', 'PwC', 'KPMG', 'EY', 'Accenture',
    'IBM', 'Cognizant', 'Capgemini', 'NTT Data', 'Paytm',
    'Flipkart', 'Amazon', 'Microsoft', 'Google', 'Razorpay'
  ];

  // Placement Process Steps
  const placementProcess = [
    {
      step: '01',
      title: 'Complete Training',
      description: 'Finish your course with all projects and assessments',
      icon: '📚',
      duration: '3-6 months'
    },
    {
      step: '02',
      title: 'Internship Phase',
      description: 'Work on real-time tasks with mentor guidance',
      icon: '💼',
      duration: '1 month'
    },
    {
      step: '03',
      title: 'Profile Building',
      description: 'Resume, LinkedIn, and portfolio optimization',
      icon: '📋',
      duration: '1 week'
    },
    {
      step: '04',
      title: 'Mock Interviews',
      description: 'Practice with industry experts',
      icon: '🎤',
      duration: '2 weeks'
    },
    {
      step: '05',
      title: 'Job Applications',
      description: 'Apply to matching opportunities with referrals',
      icon: '📧',
      duration: 'Ongoing'
    },
    {
      step: '06',
      title: 'Get Placed',
      description: 'Crack interviews and start your career',
      icon: '🎉',
      duration: 'Success!'
    }
  ];

  // Success Stories
  const successStories = [
    {
      name: 'Aditya Sharma',
      role: 'SOC Analyst L1',
      company: 'Wipro',
      package: '₹5.5 LPA',
      image: '👨‍💻',
      quote: 'The internship program gave me real exposure to SOC operations. Within 2 weeks of completing the course, I got placed!',
      previousRole: 'Fresh Graduate'
    },
    {
      name: 'Priya Patel',
      role: 'Cybersecurity Analyst',
      company: 'Deloitte',
      package: '₹8 LPA',
      image: '👩‍💻',
      quote: 'Mock interviews and resume building sessions were game-changers. The referral support helped me get interviews at top companies.',
      previousRole: 'IT Support'
    },
    {
      name: 'Rahul Kumar',
      role: 'Junior Penetration Tester',
      company: 'Payatu',
      package: '₹10 LPA',
      image: '🧑‍💻',
      quote: 'The web app pentesting tasks during internship directly helped me in my job interviews. Highly recommended!',
      previousRole: 'Web Developer'
    },
    {
      name: 'Sneha Reddy',
      role: 'Security Engineer',
      company: 'Amazon',
      package: '₹16 LPA',
      image: '👩‍🔬',
      quote: 'From a non-tech background to Amazon - this journey was only possible because of the structured training and placement support.',
      previousRole: 'Non-Tech'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'Is placement guaranteed after completing the course?',
      answer: 'While we cannot guarantee placement, we provide comprehensive placement support with a 95% placement rate. Our dedicated team works with you until you get placed.'
    },
    {
      question: 'What is the average time to get placed?',
      answer: 'On average, students get placed within 30-45 days after completing the course and internship. Some students with exceptional skills get placed even before course completion.'
    },
    {
      question: 'Do you provide internship certificates?',
      answer: 'Yes, upon successful completion of the 1-month internship, you receive an internship certificate along with your course completion certificate.'
    },
    {
      question: 'What kind of companies hire from your platform?',
      answer: 'We have 100+ hiring partners including top IT companies (TCS, Wipro, Infosys), Big 4 consulting firms (Deloitte, PwC), product companies (Amazon, Microsoft), and specialized cybersecurity firms.'
    },
    {
      question: 'Is the internship remote or on-site?',
      answer: 'The internship is completely remote. You will work on real tasks from home with regular mentor check-ins and weekly reviews.'
    },
    {
      question: 'What if I don\'t get placed within 3 months?',
      answer: 'We continue to provide placement support until you get placed. There is no time limit on our placement assistance.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400/20 to-cyan-400/20 border border-lime-400/50 text-lime-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <span className="animate-pulse">🚀</span>
              <span>95% Placement Rate • 500+ Students Placed</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Path to a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400">
                Cybersecurity
              </span>{' '}
              Career Starts Here
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              From training to placement, we've got you covered. Get hands-on internship experience, 
              personalized career support, and direct access to 100+ hiring partners.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-lime-300 hover:to-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 flex items-center justify-center gap-2"
              >
                Start Your Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="border border-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Success Stories
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-lime-400/50 transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-lime-400">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'internship', label: '💼 Internship Support', subtitle: '1 Month' },
              { id: 'placement', label: '🎯 Placement Support', subtitle: 'Until Placed' },
              { id: 'outcomes', label: '🏆 Career Outcomes', subtitle: '5+ Roles' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 sm:px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-lime-400 to-green-400 text-black shadow-lg shadow-lime-400/25'
                    : 'bg-gray-900/80 text-gray-400 border border-gray-800 hover:border-lime-400/50 hover:text-lime-400'
                }`}
              >
                <span className="text-lg">{tab.label}</span>
                <span className={`text-xs mt-1 ${activeTab === tab.id ? 'text-black/70' : 'text-gray-500'}`}>
                  {tab.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Internship Support Tab */}
            {activeTab === 'internship' && (
              <div className="animate-fadeIn">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    1 Month Real-World{' '}
                    <span className="text-lime-400">Internship Experience</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Bridge the gap between learning and working. Get hands-on experience with 
                    real cybersecurity tasks under expert mentorship.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {internshipFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 bg-lime-400/10 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {feature.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="text-lime-400">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Internship Timeline */}
                <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    Internship Timeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                      { week: 'Week 1', title: 'Onboarding & SOC Basics', tasks: ['Tool setup', 'SIEM introduction', 'Alert monitoring'] },
                      { week: 'Week 2', title: 'Threat Analysis', tasks: ['Log analysis', 'Threat hunting', 'Incident response'] },
                      { week: 'Week 3', title: 'Penetration Testing', tasks: ['Web app testing', 'Vulnerability assessment', 'Report writing'] },
                      { week: 'Week 4', title: 'Bug Bounty & Review', tasks: ['Recon practice', 'Final project', 'Mentor evaluation'] }
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-lime-400/50 transition-all duration-300">
                          <div className="bg-lime-400 text-black text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                            {item.week}
                          </div>
                          <h4 className="text-white font-semibold mb-3">{item.title}</h4>
                          <ul className="space-y-1">
                            {item.tasks.map((task, idx) => (
                              <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {index < 3 && (
                          <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-lime-400 to-transparent" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Placement Support Tab */}
            {activeTab === 'placement' && (
              <div className="animate-fadeIn">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    End-to-End{' '}
                    <span className="text-lime-400">Placement Support</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    We don't just train you; we ensure you land your dream job. 
                    Our dedicated placement team supports you until you get placed.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placementFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>

                      {/* Details */}
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <span className="w-5 h-5 bg-lime-400/20 rounded-full flex items-center justify-center text-lime-400 text-xs">
                              ✓
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Hiring Partners */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    Our Hiring Partners
                  </h3>
                  <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                      {hiringPartners.map((partner, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-xl p-4 text-center text-gray-400 hover:text-lime-400 hover:border-lime-400/50 border border-transparent transition-all duration-300"
                        >
                          {partner}
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-gray-500 mt-6">
                      And 80+ more companies...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Career Outcomes Tab */}
            {activeTab === 'outcomes' && (
              <div className="animate-fadeIn">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Career Roles You Can{' '}
                    <span className="text-lime-400">Achieve</span>
                  </h2>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Our training prepares you for multiple high-demand roles in cybersecurity. 
                    Choose your path and build a rewarding career.
                  </p>
                </div>

                {/* Career Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {careerOutcomes.map((career, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-2"
                    >
                      {/* Header */}
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 relative">
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            career.demand === 'Very High' 
                              ? 'bg-green-500/20 text-green-400' 
                              : career.demand === 'High'
                              ? 'bg-lime-400/20 text-lime-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {career.demand} Demand
                          </span>
                        </div>
                        <div className="text-4xl mb-3">{career.icon}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">
                          {career.title}
                        </h3>
                        <div className="text-lime-400 font-bold text-lg mt-2">
                          {career.salary}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        <p className="text-gray-400 mb-4 text-sm">
                          {career.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                          <p className="text-gray-500 text-xs mb-2">Key Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {career.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Companies */}
                        <div>
                          <p className="text-gray-500 text-xs mb-2">Top Recruiters:</p>
                          <div className="flex flex-wrap gap-2">
                            {career.companies.map((company, idx) => (
                              <span
                                key={idx}
                                className="text-gray-400 text-xs"
                              >
                                {company}{idx < career.companies.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Salary Comparison */}
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">
                    Salary Growth Potential
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-gray-400 mb-2">Entry Level</div>
                      <div className="text-3xl font-bold text-white">₹4-6 LPA</div>
                      <div className="text-gray-500 text-sm mt-2">0-1 years experience</div>
                    </div>
                    <div className="p-6 border border-lime-400/50 rounded-xl bg-lime-400/5">
                      <div className="text-lime-400 mb-2">Mid Level</div>
                      <div className="text-3xl font-bold text-lime-400">₹8-15 LPA</div>
                      <div className="text-gray-500 text-sm mt-2">2-4 years experience</div>
                    </div>
                    <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-gray-400 mb-2">Senior Level</div>
                      <div className="text-3xl font-bold text-white">₹18-35+ LPA</div>
                      <div className="text-gray-500 text-sm mt-2">5+ years experience</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Placement Process Timeline */}
      <section className="relative py-16 px-4 sm:px-6 z-10 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Placement Journey
            </h2>
            <p className="text-gray-400 text-lg">
              A structured path from learning to landing your dream job
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-lime-400/20 via-lime-400 to-lime-400/20 transform -translate-y-1/2" />

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {placementProcess.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Dot for Large Screens */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-lime-400 rounded-full z-10" />
                  
                  <div className={`bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-lime-400/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-24'
                  }`}>
                    {/* Step Number */}
                    <div className="bg-gradient-to-r from-lime-400 to-green-400 text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-4">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="text-3xl mb-3">{step.icon}</div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-3">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <span className="inline-block bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-xs">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-lime-400/20 text-lime-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ⭐ Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              From Learners to Professionals
            </h2>
            <p className="text-gray-400 text-lg">
              Real stories from students who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/50 transition-all duration-300"
              >
                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-lime-400/10 to-green-400/10 p-6 text-center border-b border-gray-800">
                  <div className="text-5xl mb-3">{story.image}</div>
                  <h3 className="text-lg font-bold text-white">{story.name}</h3>
                  <p className="text-lime-400 font-semibold">{story.role}</p>
                  <p className="text-gray-400 text-sm">@ {story.company}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Package */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Package</span>
                    <span className="text-lime-400 font-bold">{story.package}</span>
                  </div>

                  {/* Previous Role */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                    <span className="text-gray-500 text-sm">Previous</span>
                    <span className="text-gray-400">{story.previousRole}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm italic">
                    "{story.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <button className="border border-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300">
              View More Success Stories →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Everything you need to know about our placement program
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 text-white font-semibold hover:text-lime-400 transition-colors list-none">
                  <span className="flex items-center gap-3">
                    <span className="text-lime-400">Q{index + 1}.</span>
                    {faq.question}
                  </span>
                  <span className="text-lime-400 group-open:rotate-180 transition-transform duration-300 ml-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 border-t border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-lime-400/20 text-lime-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>🎯</span>
                <span>Limited Seats Available</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Launch Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                  Cybersecurity Career?
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join 500+ students who have successfully transformed their careers. 
                Enroll now and get access to training, internship, and placement support.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  <span>1 Month Internship</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  <span>100% Placement Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-lime-400">✓</span>
                  <span>Industry Certification</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="bg-gradient-to-r from-lime-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-lime-300 hover:to-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 inline-flex items-center justify-center gap-2"
                >
                  Enroll Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="border border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:border-lime-400 hover:text-lime-400 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Talk to Counselor
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-500 text-sm mb-4">Trusted by professionals from</p>
                <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                  {['TCS', 'Wipro', 'Infosys', 'Deloitte', 'IBM'].map((company, index) => (
                    <span key={index} className="hover:text-lime-400 transition-colors">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-lime-400 text-black p-4 rounded-full shadow-lg shadow-lime-400/25 hover:bg-lime-300 transition-all duration-300 hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }
      `}</style>
    </Layout>
  );
};

export default TrainingPlacement;