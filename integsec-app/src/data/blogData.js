// src/data/blogData.js

/**
 * ============================================
 * BLOG DATA - Easy to Add, Update, Delete
 * ============================================
 */

export const blogPosts = [
  {
    id: 1,
    slug: 'understanding-zero-trust-security-model',
    title: 'Understanding Zero Trust Security Model in 2024',
    shortDescription: 'Learn how Zero Trust architecture is revolutionizing enterprise security by eliminating implicit trust and continuously validating every digital interaction.',
    content: `
      <h2>What is Zero Trust Security?</h2>
      <p>Zero Trust is a security framework that requires all users, whether inside or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.</p>
      
      <h2>Core Principles of Zero Trust</h2>
      <ul>
        <li><strong>Never Trust, Always Verify:</strong> Every access request is fully authenticated and authorized before granting access.</li>
        <li><strong>Least Privilege Access:</strong> Users are given minimum levels of access needed to perform their tasks.</li>
        <li><strong>Assume Breach:</strong> Design systems assuming a breach has already occurred.</li>
      </ul>
      
      <h2>Implementing Zero Trust</h2>
      <p>Implementing Zero Trust requires a phased approach that includes identity verification, device security, network segmentation, and continuous monitoring.</p>
      
      <h2>Conclusion</h2>
      <p>Zero Trust is not a product but a strategy. By implementing these principles, organizations can significantly reduce their attack surface and improve their security posture.</p>
    `,
    thumbnail: '/images/blog/zero-trust.jpg',
    category: 'Security',
    tags: ['Zero Trust', 'Enterprise Security', 'Network Security', 'Cybersecurity'],
    author: {
      name: 'Alex Thompson',
      avatar: '/images/authors/alex.jpg',
      role: 'Security Architect',
      bio: 'Alex is a certified security architect with 10+ years of experience in enterprise security.'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    views: 2450,
    likes: 182,
    isFeatured: true,
    isPopular: true,
    status: 'published'
  },
  {
    id: 2,
    slug: 'top-10-cybersecurity-threats-2024',
    title: 'Top 10 Cybersecurity Threats to Watch in 2024',
    shortDescription: 'Explore the most dangerous cyber threats facing organizations this year and learn how to protect against them.',
    content: `
      <h2>The Evolving Threat Landscape</h2>
      <p>As technology advances, so do the tactics of cybercriminals. Here are the top 10 threats you need to be aware of in 2024.</p>
      
      <h2>1. AI-Powered Attacks</h2>
      <p>Attackers are leveraging artificial intelligence to create more sophisticated phishing emails, deepfakes, and automated attack tools.</p>
      
      <h2>2. Ransomware-as-a-Service (RaaS)</h2>
      <p>The commoditization of ransomware has made it accessible to less technical criminals, increasing attack frequency.</p>
      
      <h2>Conclusion</h2>
      <p>Staying informed about these threats is the first step in protecting your organization.</p>
    `,
    thumbnail: '/images/blog/cyber-threats.jpg',
    category: 'Threats',
    tags: ['Cyber Threats', 'Ransomware', 'AI Security', 'Cloud Security'],
    author: {
      name: 'Sarah Chen',
      avatar: '/images/authors/sarah.jpg',
      role: 'Threat Intelligence Analyst',
      bio: 'Sarah specializes in threat intelligence and has worked with Fortune 500 companies.'
    },
    publishedAt: '2024-01-12',
    readTime: '10 min read',
    views: 3200,
    likes: 245,
    isFeatured: false,
    isPopular: true,
    status: 'published'
  },
  {
    id: 3,
    slug: 'complete-guide-to-soc-operations',
    title: 'Complete Guide to SOC Operations for Beginners',
    shortDescription: 'A comprehensive introduction to Security Operations Center (SOC) operations, tools, and best practices for aspiring analysts.',
    content: `
      <h2>What is a Security Operations Center?</h2>
      <p>A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational and technical level.</p>
      
      <h2>Key Components of a SOC</h2>
      <ul>
        <li>People: Security analysts, engineers, and managers</li>
        <li>Process: Incident response procedures, playbooks</li>
        <li>Technology: SIEM, EDR, threat intelligence platforms</li>
      </ul>
      
      <h2>SOC Analyst Tiers</h2>
      <p>Learn about the different tiers of SOC analysts and their responsibilities.</p>
    `,
    thumbnail: '/images/blog/soc-operations.jpg',
    category: 'Security',
    tags: ['SOC', 'Security Operations', 'SIEM', 'Incident Response'],
    author: {
      name: 'Michael Roberts',
      avatar: '/images/authors/michael.jpg',
      role: 'SOC Manager',
      bio: 'Michael has managed SOC teams for over 8 years in various industries.'
    },
    publishedAt: '2024-01-10',
    readTime: '12 min read',
    views: 1890,
    likes: 156,
    isFeatured: true,
    isPopular: false,
    status: 'published'
  },
  {
    id: 4,
    slug: 'network-segmentation-best-practices',
    title: 'Network Segmentation: Best Practices for Enterprise Security',
    shortDescription: 'Learn how to implement effective network segmentation to contain breaches and protect critical assets.',
    content: `
      <h2>Why Network Segmentation Matters</h2>
      <p>Network segmentation divides a network into smaller parts, limiting the spread of attacks and protecting sensitive data.</p>
      
      <h2>Types of Network Segmentation</h2>
      <ul>
        <li>Physical Segmentation</li>
        <li>VLAN Segmentation</li>
        <li>Micro-segmentation</li>
      </ul>
    `,
    thumbnail: '/images/blog/network-segmentation.jpg',
    category: 'Network',
    tags: ['Network Security', 'Segmentation', 'Enterprise Security', 'VLAN'],
    author: {
      name: 'David Kim',
      avatar: '/images/authors/david.jpg',
      role: 'Network Security Engineer',
      bio: 'David is a CCIE-certified engineer specializing in network security architecture.'
    },
    publishedAt: '2024-01-08',
    readTime: '9 min read',
    views: 1450,
    likes: 98,
    isFeatured: false,
    isPopular: false,
    status: 'published'
  },
  {
    id: 5,
    slug: 'introduction-to-penetration-testing',
    title: 'Introduction to Penetration Testing: A Beginner\'s Guide',
    shortDescription: 'Everything you need to know to start your journey as an ethical hacker and penetration tester.',
    content: `
      <h2>What is Penetration Testing?</h2>
      <p>Penetration testing is a simulated cyber attack against your computer system to check for exploitable vulnerabilities.</p>
      
      <h2>Types of Penetration Tests</h2>
      <ul>
        <li>Black Box Testing</li>
        <li>White Box Testing</li>
        <li>Gray Box Testing</li>
      </ul>
    `,
    thumbnail: '/images/blog/penetration-testing.jpg',
    category: 'Security',
    tags: ['Penetration Testing', 'Ethical Hacking', 'Security Testing', 'Burp Suite'],
    author: {
      name: 'Emma Wilson',
      avatar: '/images/authors/emma.jpg',
      role: 'Senior Penetration Tester',
      bio: 'Emma is an OSCP-certified pentester with experience in bug bounty hunting.'
    },
    publishedAt: '2024-01-05',
    readTime: '11 min read',
    views: 2780,
    likes: 210,
    isFeatured: false,
    isPopular: true,
    status: 'published'
  },
  {
    id: 6,
    slug: 'bug-bounty-hunting-beginners',
    title: 'Bug Bounty Hunting for Beginners: Where to Start',
    shortDescription: 'Your complete roadmap to starting a career in bug bounty hunting and earning rewards for finding vulnerabilities.',
    content: `
      <h2>What is Bug Bounty Hunting?</h2>
      <p>Bug bounty programs reward security researchers for finding and reporting vulnerabilities in software and websites.</p>
      
      <h2>Getting Started</h2>
      <ul>
        <li>Learn Web Security Fundamentals</li>
        <li>Understand Common Vulnerabilities (OWASP Top 10)</li>
        <li>Practice on Legal Platforms</li>
      </ul>
    `,
    thumbnail: '/images/blog/bug-bounty.jpg',
    category: 'Security',
    tags: ['Bug Bounty', 'Ethical Hacking', 'Web Security', 'Vulnerability Research'],
    author: {
      name: 'Chris Taylor',
      avatar: '/images/authors/chris.jpg',
      role: 'Bug Bounty Hunter',
      bio: 'Chris is a top-ranked bug bounty hunter with $100k+ in earnings.'
    },
    publishedAt: '2023-12-22',
    readTime: '12 min read',
    views: 3890,
    likes: 278,
    isFeatured: true,
    isPopular: true,
    status: 'published'
  }
];

/**
 * CATEGORIES
 */
export const categories = [
  { id: 'all', name: 'All Posts', icon: '📚', count: 0 },
  { id: 'security', name: 'Security', icon: '🔒', count: 0 },
  { id: 'network', name: 'Network', icon: '🌐', count: 0 },
  { id: 'threats', name: 'Threats', icon: '⚠️', count: 0 },
  { id: 'updates', name: 'Updates', icon: '📢', count: 0 }
];

// Update category counts dynamically
export const getCategoriesWithCount = () => {
  const publishedPosts = getPublishedPosts();
  return categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' 
      ? publishedPosts.length 
      : publishedPosts.filter(p => p.category?.toLowerCase() === cat.id.toLowerCase()).length
  }));
};

/**
 * HELPER FUNCTIONS WITH ERROR HANDLING
 */

// Get all published posts
export const getPublishedPosts = () => {
  if (!blogPosts || !Array.isArray(blogPosts)) return [];
  return blogPosts.filter(post => post && post.status === 'published');
};

// Get posts by category
export const getPostsByCategory = (category) => {
  const posts = getPublishedPosts();
  if (!category || category === 'all') return posts;
  return posts.filter(
    post => post.category?.toLowerCase() === category.toLowerCase()
  );
};

// Get featured posts
export const getFeaturedPosts = () => {
  return getPublishedPosts().filter(post => post.isFeatured === true);
};

// Get popular posts
export const getPopularPosts = (limit = 5) => {
  const posts = getPublishedPosts()
    .filter(post => post.isPopular === true)
    .sort((a, b) => (b.views || 0) - (a.views || 0));
  return posts.slice(0, limit);
};

// Get recent posts
export const getRecentPosts = (limit = 5) => {
  const posts = getPublishedPosts()
    .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
  return posts.slice(0, limit);
};

// Get post by slug
export const getPostBySlug = (slug) => {
  if (!slug) return null;
  return blogPosts.find(post => post && post.slug === slug) || null;
};

// Get post by ID
export const getPostById = (id) => {
  if (!id) return null;
  return blogPosts.find(post => post && post.id === id) || null;
};

// Get related posts
export const getRelatedPosts = (currentPost, limit = 3) => {
  if (!currentPost) return [];
  return getPublishedPosts()
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       (post.tags && currentPost.tags && post.tags.some(tag => currentPost.tags.includes(tag))))
    )
    .slice(0, limit);
};

// Search posts
export const searchPosts = (query) => {
  if (!query) return getPublishedPosts();
  const searchTerm = query.toLowerCase();
  return getPublishedPosts().filter(post =>
    post.title?.toLowerCase().includes(searchTerm) ||
    post.shortDescription?.toLowerCase().includes(searchTerm) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  );
};

// Get all unique tags
export const getAllTags = () => {
  const allTags = blogPosts
    .filter(post => post && post.tags)
    .flatMap(post => post.tags);
  return [...new Set(allTags)];
};

// Format date
export const formatDate = (dateString) => {
  if (!dateString) return 'Unknown date';
  try {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  } catch {
    return 'Unknown date';
  }
};