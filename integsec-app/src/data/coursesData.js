// src/data/coursesData.js

export const coursesData = [
  {
  id: "cybersecurity-6-months",
  slug: "6-months-cyber-security-program",
  isPopular: true,
  badge: "🛡️ Best Cyber Security Program",
  
  // Basic Info
  title: "6 Months Cyber Security & Ethical Hacking Program",
  shortTitle: "Cyber Security Program",
  subtitle:
    "A job-oriented, practical cyber security and ethical hacking program from fundamentals to advanced red teaming, SOC, and incident response.",
  description:
    "Become a cyber security professional from scratch with hands-on labs, real-world attack simulations, blue team skills, and placement support.",

  // Course Meta
  duration: "6 Months (24 Weeks)",
  mode: "Online / Offline",
  level: "Beginner to Advanced",
  language: "Hindi + English",

  // Pricing
  price: 44999,
  originalPrice: 69999,
  discount: "35% OFF",
  emiAvailable: true,

  // Thumbnail/Images
  thumbnail: "/images/courses/cyber-security-program.jpg",
  heroImage: "/images/courses/cyber-security-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 380,
    rating: 4.9,
    reviews: 95,
    projectsCount: 12,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "clock", title: "6 Months", subtitle: "Intensive Training" },
    { id: 2, icon: "projects", title: "12+", subtitle: "Practical Labs & Projects" },
    { id: 3, icon: "shield", title: "Offensive + Defensive", subtitle: "Skills" },
    { id: 4, icon: "mentor", title: "1:1", subtitle: "Mentor Guidance" },
    { id: 5, icon: "placement", title: "100%", subtitle: "Placement Support" },
    { id: 6, icon: "internship", title: "Internship", subtitle: "Included" },
  ],

  // Technologies / Tools
  technologies: [
    "Kali Linux",
    "Linux",
    "Windows Server",
    "Nmap",
    "Wireshark",
    "Burp Suite",
    "Metasploit",
    "OWASP ZAP",
    "Hydra",
    "Nessus",
    "Splunk",
    "SIEM Tools",
    "Firewall & IDS/IPS",
    "VirtualBox / VMware",
    "AWS Security",
    "Docker Security",
    "Git & GitHub",
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "HackPro Cyber Security Certification",
      description: "Industry-recognized certificate for 6-month cyber security program.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Real Attack Labs",
      description: "Hands-on practice on real-world attack & defense scenarios.",
      icon: "projects",
    },
    {
      id: 3,
      title: "Placement Support",
      description: "Job assistance for roles like SOC Analyst, Pentester, Security Analyst.",
      icon: "placement",
    },
    {
      id: 4,
      title: "1:1 Mentor Support",
      description: "Doubt-solving, profile guidance, and career roadmap discussions.",
      icon: "mentor",
    },
    {
      id: 5,
      title: "Lifetime Access",
      description: "Lifetime access to notes, tools list, and important resources.",
      icon: "lifetime",
    },
    {
      id: 6,
      title: "Interview Preparation",
      description: "HR + technical interview prep, resume and LinkedIn optimization.",
      icon: "interview",
    },
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 1,
      month: "Month 1",
      title: "Cyber Security Fundamentals",
      weeks: "Weeks 1–4",
      color: "from-emerald-500 to-lime-500",
      icon: "fundamentals",
      topics: [
        {
          category: "Cyber Security Fundamentals (Module 1)",
          items: [
            "Introduction to Cybersecurity",
            "Indian Job Market Demand",
            "Roles and Career Paths in Cyber Security",
            "Linux Basics and Commands",
            "Basic Networking for Cybersecurity",
          ],
        },
        {
          category: "Security Concepts",
          items: [
            "CIA Triad (Confidentiality, Integrity, Availability)",
            "Types of Hackers (Black Hat, White Hat, Grey Hat)",
            "Types of Attacks (Malware, Phishing, DoS, Ransomware)",
          ],
        },
        {
          category: "Lab Setup",
          items: [
            "Installing VirtualBox / VMware",
            "Setting up Kali Linux & vulnerable machines",
            "Introduction to security distributions and tools",
          ],
        },
      ],
      projects: ["Cyber Security Career & Roadmap Report", "Basic Network & Linux Commands Lab"],
    },
    {
      id: 2,
      month: "Month 2",
      title: "Networking, OS & System Security",
      weeks: "Weeks 5–8",
      color: "from-blue-500 to-cyan-500",
      icon: "network",
      topics: [
        {
          category: "Computer Networks for Security",
          items: [
            "OSI & TCP/IP Models",
            "IP Addressing, Subnetting, DNS, DHCP",
            "Ports, Protocols & Common Services",
            "Packet Flow & Routing Basics",
          ],
        },
        {
          category: "Linux & Windows Security",
          items: [
            "User & Permission Management",
            "File System Security & Logging",
            "Windows Security Basics & Group Policy",
          ],
        },
        {
          category: "Network Security Basics",
          items: [
            "Firewalls, IDS/IPS Concepts",
            "VPNs & Secure Tunneling",
            "Email & Web Security Basics",
          ],
        },
      ],
      projects: ["Network Scanning & Mapping Lab using Nmap", "Hardening a Linux System"],
    },
    {
      id: 3,
      month: "Month 3",
      title: "Ethical Hacking & Vulnerability Assessment",
      weeks: "Weeks 9–12",
      color: "from-purple-500 to-pink-500",
      icon: "hacking",
      topics: [
        {
          category: "Ethical Hacking Methodology",
          items: [
            "Reconnaissance (Active & Passive)",
            "Footprinting & Information Gathering",
            "Scanning & Enumeration",
          ],
        },
        {
          category: "Vulnerability Assessment",
          items: [
            "Using tools like Nessus & OpenVAS",
            "Finding & validating vulnerabilities",
            "Reporting vulnerabilities ethically",
          ],
        },
        {
          category: "Password & Wireless Attacks",
          items: [
            "Password Cracking Basics (Hydra, John)",
            "Brute Force & Dictionary Attacks",
            "Wi-Fi Attacks (WEP/WPA concepts)",
          ],
        },
      ],
      projects: ["Complete Vulnerability Assessment Report", "Password Audit & Security Recommendations"],
    },
    {
      id: 4,
      month: "Month 4",
      title: "Web Application & Network Penetration Testing",
      weeks: "Weeks 13–16",
      color: "from-red-500 to-orange-500",
      icon: "web",
      topics: [
        {
          category: "Web Application Security",
          items: [
            "OWASP Top 10 Overview",
            "SQL Injection, XSS, CSRF Basics",
            "Authentication & Session Attacks",
          ],
        },
        {
          category: "Burp Suite & Manual Testing",
          items: [
            "Proxy Setup & Traffic Interception",
            "Request Modification, Repeater & Intruder",
            "Finding common web vulnerabilities",
          ],
        },
        {
          category: "Network Penetration Testing",
          items: [
            "Exploitation with Metasploit Framework",
            "Post-Exploitation Basics",
            "Maintaining Access & Covering Tracks (theory)",
          ],
        },
      ],
      projects: ["Web Application Pentest Report", "Internal Network Pentest Simulation"],
    },
    {
      id: 5,
      month: "Month 5",
      title: "Security Tools, SIEM & Cloud Security",
      weeks: "Weeks 17–20",
      color: "from-cyan-500 to-indigo-500",
      icon: "siem",
      topics: [
        {
          category: "Log Analysis & SIEM",
          items: [
            "Introduction to SIEM (Splunk / ELK Overview)",
            "Log Collection, Parsing & Correlation Concepts",
            "Basic Alert Rules & Dashboards",
          ],
        },
        {
          category: "Endpoint & Email Security",
          items: [
            "Antivirus, EDR Concepts",
            "Email Security & Phishing Analysis",
            "Data Loss Prevention Basics",
          ],
        },
        {
          category: "Cloud & Container Security (Overview)",
          items: [
            "Cloud Security Basics (AWS/Azure Overview)",
            "Identity & Access Management Concepts",
            "Basic Docker / Container Security Concepts",
          ],
        },
      ],
      projects: ["Security Incident Log Analysis Lab", "Basic Cloud Security Posture Review (theoretical case study)"],
    },
    {
      id: 6,
      month: "Month 6",
      title: "SOC Operations, Incident Response & Capstone",
      weeks: "Weeks 21–24",
      color: "from-lime-500 to-green-500",
      icon: "capstone",
      topics: [
        {
          category: "SOC Analyst Skills",
          items: [
            "SOC Structure & Responsibilities",
            "Use Cases & Playbooks Basics",
            "Alert Triage & Escalation Workflow",
          ],
        },
        {
          category: "Incident Response Lifecycle",
          items: [
            "Preparation, Detection & Analysis",
            "Containment, Eradication, Recovery",
            "Post-Incident Review & Reporting",
          ],
        },
        {
          category: "Career & Interview Preparation",
          items: [
            "Cyber Security Resume & LinkedIn",
            "Portfolio Building with Reports & Labs",
            "Common Interview Questions for SOC / Pentest",
          ],
        },
      ],
      projects: [
        "Capstone 1: End-to-End Vulnerability Assessment & Pentest Report",
        "Capstone 2: SOC Incident Case Study & Response Plan",
      ],
    },
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Who is this cyber security program for?",
      answer:
        "This program is designed for beginners, students, working professionals, and career switchers who want to start or grow a career in cyber security and ethical hacking.",
    },
    {
      id: 2,
      question: "Do I need prior technical or programming knowledge?",
      answer:
        "No. We start from basics such as Linux, networking, and security fundamentals. Basic computer knowledge is enough, and we guide you step-by-step.",
    },
    {
      id: 3,
      question: "What is the mode of training?",
      answer:
        "We offer both online and offline classes. Online classes are live with recordings provided, and offline batches are conducted at our Lucknow center.",
    },
    {
      id: 4,
      question: "Will I get placement assistance?",
      answer:
        "Yes, we provide 100% placement support including resume building, LinkedIn optimization, mock interviews, and job referrals for roles like SOC Analyst and Security Analyst.",
    },
    {
      id: 5,
      question: "What certification will I receive?",
      answer:
        "You will receive HackPro Academy's Cyber Security & Ethical Hacking Certification along with project reports and lab work to showcase to employers.",
    },
    {
      id: 6,
      question: "Is EMI or installment payment available?",
      answer:
        "Yes, we provide flexible EMI options. You can pay the fees in 3 or 6 monthly installments with easy and student-friendly plans.",
    },
  ],

  // Card Features (for listing page)
  cardFeatures: [
    "From Basics to Ethical Hacking",
    "12+ Hands-on Labs & Projects",
    "SOC & Pentest Oriented",
    "Industry-Recognized Certification",
  ],

  // Theme Colors
  theme: {
    primary: "lime",
    gradient: "from-emerald-400 to-lime-500",
  },
},
{
  id: "networking-for-cybersecurity",
  slug: "networking-for-cybersecurity-course",
  isPopular: true,
  badge: "🌐 Core Networking for Cybersecurity",

  // Basic Info
  title: "Networking for Cybersecurity",
  shortTitle: "Networking for Cybersec",
  subtitle:
    "Learn the essential networking concepts required to become a cyber security professional, including OSI, TCP/IP, subnetting, VLANs, ACLs, IDS/IPS, and firewalls.",
  description:
    "This course focuses on the core networking skills every cyber security engineer, SOC analyst, or ethical hacker must know. From network types and devices to IPv4/IPv6, VLANs, ACLs, NAT, port security, IDS/IPS, and firewall concepts, you will build a strong foundation with hands-on practice.",

  // Course Meta
  duration: "1 Month (4 Weeks)",
  mode: "Online / Offline",
  level: "Beginner Friendly",
  language: "Hindi + English",

  // Pricing
  price: 7999,
  originalPrice: 11999,
  discount: "33% OFF",
  emiAvailable: true,

  // Thumbnail/Images
  thumbnail: "/images/courses/networking-for-cybersecurity.jpg",
  heroImage: "/images/courses/networking-for-cybersecurity-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 220,
    rating: 4.8,
    reviews: 40,
    projectsCount: 3,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "clock", title: "4 Weeks", subtitle: "Focused Training" },
    { id: 2, icon: "projects", title: "3+", subtitle: "Practical Labs" },
    { id: 3, icon: "certificate", title: "Networking", subtitle: "Certificate" },
    { id: 4, icon: "mentor", title: "Live", subtitle: "Doubt Support" },
    { id: 5, icon: "placement", title: "Career", subtitle: "Cybersec Ready" },
    { id: 6, icon: "internship", title: "Pathway", subtitle: "to SOC / EH" },
  ],

  // Technologies / Tools
  technologies: [
    "TCP/IP",
    "IPv4",
    "IPv6",
    "Subnetting",
    "VLAN",
    "ACL",
    "NAT",
    "Switches",
    "Routers",
    "Firewalls",
    "IDS/IPS",
    "Wireshark",
    "Nmap",
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "HackPro Networking Certificate",
      description: "Course completion certificate focused on networking for cyber security.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Hands-on Networking Labs",
      description: "Realistic labs for subnetting, VLANs, ACLs, and basic firewall rules.",
      icon: "projects",
    },
    {
      id: 3,
      title: "Foundation for Cybersecurity Courses",
      description: "Perfect starting point before SOC, ethical hacking, or advanced cyber security programs.",
      icon: "placement",
    },
    {
      id: 4,
      title: "Live Doubt Support",
      description: "Ask questions directly to mentors during or after class.",
      icon: "mentor",
    },
    {
      id: 5,
      title: "Recorded Sessions",
      description: "Get access to class recordings and notes for future revision.",
      icon: "lifetime",
    },
    {
      id: 6,
      title: "Interview-Oriented Content",
      description: "Important networking questions asked in cyber security interviews.",
      icon: "interview",
    },
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 1,
      month: "Month 1",
      title: "Networking for Cybersecurity",
      weeks: "Weeks 1–4",
      color: "from-blue-500 to-cyan-500",
      icon: "networking",

      topics: [
        {
          // EXACTLY your handwritten topics
          category: "Core Networking for Cybersecurity",
          items: [
            "Network Types and Devices",      // 2.1
            "OSI and TCP/IP Models",          // 2.2
            "IPv4, Subnetting, IPv6",         // 2.3
            "VLANs, ACL, NAT",                // 2.4
            "Port Security",                  // 2.5
            "IDS/IPS Basics",                 // 2.6
            "Firewall Concepts"               // 2.7
          ],
        },
        {
          category: "Practical Understanding",
          items: [
            "Identifying real devices: switches, routers, firewalls, access points",
            "Reading and understanding network diagrams",
            "Visualizing how packets move across OSI & TCP/IP layers",
            "Real-world examples of ACL, NAT and firewall usage",
          ],
        },
        {
          category: "Tools & Labs",
          items: [
            "Using Packet Tracer / GNS3 (conceptual or actual, as per lab setup)",
            "Basic scanning with Nmap",
            "Traffic capture and analysis with Wireshark",
            "Designing a small secure network for an office (mini project)",
          ],
        },
      ],

      projects: [
        "Design a Secure Small Office Network (with IP plan, subnetting & VLANs)",
        "Firewall and ACL Rule Planning Document",
        "Wireshark + Nmap Lab Report for Basic Network Analysis",
      ],
    },
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Who should join this Networking for Cybersecurity course?",
      answer:
        "Students, beginners, and professionals who want to build strong networking fundamentals specifically for cyber security, SOC analyst, or ethical hacking roles.",
    },
    {
      id: 2,
      question: "Do I need prior networking knowledge?",
      answer:
        "No, this course starts from basics like network types and devices and gradually moves to OSI, TCP/IP, IPv4/IPv6, VLANs, ACLs, and firewalls.",
    },
    {
      id: 3,
      question: "Is this course enough to start cyber security?",
      answer:
        "Yes, this course gives you the networking foundation needed for most cyber security and ethical hacking programs. It is an ideal first step.",
    },
    {
      id: 4,
      question: "Will I get recordings and notes?",
      answer:
        "Yes, you will get access to recorded sessions, notes, and reference diagrams for revision.",
    },
    {
      id: 5,
      question: "Is there any certificate?",
      answer:
        "Yes, after completing the course and assignments, you will receive HackPro Academy’s Networking for Cybersecurity certificate.",
    },
    {
      id: 6,
      question: "Can I pay in installments?",
      answer:
        "Yes, EMI options are available. You can pay the fee in 2 easy installments.",
    },
  ],

  // Card Features (for listing page)
  cardFeatures: [
    "Designed for Cybersecurity Aspirants",
    "All Core Networking Concepts",
    "Hands-on Labs & Tools",
    "Certificate Included",
  ],

  // Theme Colors
  theme: {
    primary: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
},
{
  id: "ethical-hacking-red-team",
  slug: "ethical-hacking-and-red-team-course",
  isPopular: true,
  badge: "🔥 Ethical Hacking + Red Team Special",

  // Basic Info
  title: "Ethical Hacking & Red Teaming",
  shortTitle: "Ethical Hacking",
  subtitle:
    "Master Ethical Hacking, Red Teaming, and Offensive Security with hands-on attack simulations, system hacking, web app exploitation, WiFi hacking, and more.",
  description:
    "A practical, attack-focused ethical hacking course covering information gathering, footprinting, system hacking, SQL injection, WiFi hacking, IoT hacking, social engineering, and red team strategies. Includes real-world labs and tools like Nmap, Metasploit, Hydra, Burp Suite, Nessus, and Wireshark.",

  // Course Meta
  duration: "1.5 Months (6 Weeks)",
  mode: "Online / Offline",
  level: "Beginner to Intermediate",
  language: "Hindi + English",

  // Pricing
  price: 11999,
  originalPrice: 17999,
  discount: "33% OFF",
  emiAvailable: true,

  // Images
  thumbnail: "/images/courses/ethical-hacking.jpg",
  heroImage: "/images/courses/ethical-hacking-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 310,
    rating: 4.9,
    reviews: 70,
    projectsCount: 5,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "clock", title: "6 Weeks", subtitle: "Intensive Training" },
    { id: 2, icon: "attack", title: "Red Team", subtitle: "Attack Simulations" },
    { id: 3, icon: "projects", title: "5+", subtitle: "Live Hacking Labs" },
    { id: 4, icon: "certificate", title: "Ethical Hacking", subtitle: "Certificate" },
    { id: 5, icon: "tools", title: "10+ Tools", subtitle: "Nmap, MSF, Burp" },
    { id: 6, icon: "mentor", title: "1:1", subtitle: "Doubt Support" }
  ],

  // Technologies / Tools (from your notebook + essential ones)
  technologies: [
    "Nmap",
    "Metasploit",
    "Hydra",
    "Nessus",
    "Burp Suite",
    "Wireshark",
    "John the Ripper",
    "Aircrack-ng",
    "Setoolkit",
    "Gobuster",
    "Nikto"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "HackPro Ethical Hacking Certificate",
      description: "Earn an industry-recognized Ethical Hacking & Red Team certification.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Hands-on Red Team Labs",
      description: "Perform live attacks in guided lab environments with expert mentors.",
      icon: "projects",
    },
    {
      id: 3,
      title: "Tool-Based Training",
      description: "Master essential tools like Metasploit, Hydra, Burp, and Wireshark.",
      icon: "tools",
    },
    {
      id: 4,
      title: "Cybersecurity Roadmap",
      description: "Guidance for becoming a Pentester, Red Teamer, or Bug Bounty Hunter.",
      icon: "mentor",
    },
    {
      id: 5,
      title: "Recorded Videos",
      description: "Lifetime access to recorded sessions, notes, and lab reports.",
      icon: "lifetime",
    },
    {
      id: 6,
      title: "Interview Preparation",
      description: "Pentesting interview Q&A, reporting guidance, and resume support.",
      icon: "interview",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 3,
      month: "Month 1",
      title: "Ethical Hacking & Red Teaming",
      weeks: "Weeks 1–6",
      color: "from-red-500 to-orange-500",
      icon: "hacking",

      topics: [
        {
          category: "Ethical Hacking & Red Team (Module 3)",
          items: [
            "Information Gathering",                     // 3.1
            "Footprinting and Enumeration",              // 3.2
            "System Hacking (Windows and Linux)",        // 3.3
            "Web App Hacking",                           // 3.4
            "SQL Injection",                             // 3.5
            "Session Hijacking",                         // 3.6
            "DoS and DDoS",                              // 3.7
            "Malware Basics",                            // 3.8
            "WiFi and Mobile Hacking",                   // 3.9
            "IoT Hacking",                                // 3.10
            "Social Engineering",                        // 3.11
            "Honeypot and Firewall Bypass"               // 3.12
          ],
        },
        {
          category: "Red Team Skills",
          items: [
            "Attack Lifecycle (Recon → Exploitation → Privilege Escalation → Persistence)",
            "Password Attacks using Hydra & John",
            "Privilege Escalation on Windows & Linux (conceptual)",
            "Pivoting & Tunneling (overview)",
            "Understanding Blue Team Countermeasures"
          ],
        },
        {
          category: "Tools You Will Use",
          items: [
            "Nmap – Scanning & Enumeration",
            "Metasploit Framework – Exploitation",
            "Hydra – Password Cracking",
            "Nessus – Vulnerability Scanning",
            "Burp Suite – Web App Testing",
            "Wireshark – Packet Analysis"
          ],
        },
      ],

      projects: [
        "Complete Web Application Pentest Report (SQLi, XSS, Enumeration)",
        "System Hacking Lab (Windows or Linux VM)",
        "WiFi Attack Simulation (handshake capture + cracking demo)",
        "Social Engineering Case Study",
        "Red Team Attack Simulation Documentation"
      ],
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Do I need prior cybersecurity knowledge?",
      answer: "No, this ethical hacking course starts from basic reconnaissance and scanning concepts. Basic computer knowledge is enough.",
    },
    {
      id: 2,
      question: "Will I get practical hacking experience?",
      answer: "Yes! Every topic includes hands-on labs using tools like Nmap, Metasploit, Burp Suite, Hydra, and Wireshark.",
    },
    {
      id: 3,
      question: "Does this course include Red Team content?",
      answer: "Yes, it covers attack lifecycle, privilege escalation basics, lateral movement concepts, and bypassing security controls.",
    },
    {
      id: 4,
      question: "What career paths can I take after this course?",
      answer: "You can move toward roles such as Ethical Hacker, Penetration Tester, Red Team Trainee, or Bug Bounty Hunter.",
    },
    {
      id: 5,
      question: "Will I get the certificate?",
      answer: "Yes, after completing the labs and assignments, you will receive the HackPro Ethical Hacking & Red Team certificate.",
    },
    {
      id: 6,
      question: "Are installments available?",
      answer: "Yes, EMI options with 0% additional charges are available.",
    }
  ],

  // Card Features
  cardFeatures: [
    "Ethical Hacking Fundamentals",
    "Red Team Basic Attack Flows",
    "Hands-on Tools & Labs",
    "Industry Certification",
  ],

  // Theme Colors
  theme: {
    primary: "red",
    gradient: "from-red-500 to-orange-500",
  }
},
{
  id: "penetration-testing-bug-bounty",
  slug: "penetration-testing-and-bug-bounty-course",
  isPopular: true,
  badge: "🕵️ Advanced Web Pentesting + Bug Bounty",

  // Basic Info
  title: "Penetration Testing & Bug Bounty",
  shortTitle: "Pentesting & Bug Bounty",
  subtitle:
    "Master advanced web penetration testing, OWASP Top 10, Burp Suite, reconnaissance, and bug bounty automation with live projects.",
  description:
    "A practical and advanced course on web application penetration testing and bug bounty hunting. Learn OWASP Top 10, HTTP deep analysis, advanced Burp Suite, recon, subdomain enumeration, Nuclei automation, vulnerability scanning, and reporting with a final live web PT project.",

  // Course Meta
  duration: "1.5 Months (6 Weeks)",
  mode: "Online / Offline",
  level: "Intermediate to Advanced",
  language: "Hindi + English",

  // Pricing
  price: 14999,
  originalPrice: 19999,
  discount: "25% OFF",
  emiAvailable: true,

  // Images
  thumbnail: "/images/courses/pentesting-bugbounty.jpg",
  heroImage: "/images/courses/pentesting-bugbounty-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 260,
    rating: 4.9,
    reviews: 55,
    projectsCount: 4,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "https", title: "HTTP", subtitle: "Deep Understanding" },
    { id: 2, icon: "owasp", title: "OWASP", subtitle: "Top 10 Coverage" },
    { id: 3, icon: "burp", title: "Burp Suite", subtitle: "Advanced Usage" },
    { id: 4, icon: "bug", title: "Bug Bounty", subtitle: "Automation" },
    { id: 5, icon: "projects", title: "4+", subtitle: "Hack Labs" },
    { id: 6, icon: "certificate", title: "Certification", subtitle: "Included" },
  ],

  // Tools & Technologies
  technologies: [
    "Burp Suite",
    "Nuclei",
    "Subfinder",
    "Amass",
    "Dirsearch",
    "FFUF",
    "Nmap",
    "OWASP ZAP",
    "Wayback Machine",
    "Katana",
    "HTTP Toolkit"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "HackPro Pentesting Certificate",
      description: "Industry-recognized certificate for PT & Bug Bounty.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Advanced Recon Skills",
      description: "Learn deep recon, automation, and subdomain enumeration.",
      icon: "search",
    },
    {
      id: 3,
      title: "Bug Bounty Automation",
      description: "Use Nuclei and directory fuzzing tools to automate discovery.",
      icon: "automation",
    },
    {
      id: 4,
      title: "Real Web PT Project",
      description: "Work on a real live website for penetration testing.",
      icon: "projects",
    },
    {
      id: 5,
      title: "Lifetime Access",
      description: "Notes, scripts, recon tools, and recorded sessions.",
      icon: "lifetime",
    },
    {
      id: 6,
      title: "Reporting Skills",
      description: "Learn professional bug bounty and pentest reporting.",
      icon: "report",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 4,
      month: "Month 1",
      title: "Penetration Testing & Bug Bounty",
      weeks: "Weeks 1–6",
      color: "from-purple-500 to-indigo-500",
      icon: "bug-bounty",

      topics: [
        {
          category: "Penetration Testing & Bug Bounty (Module 4)",
          items: [
            "Web and Security Basics",                // 4.1
            "HTTP Deep Dive",                         // 4.2
            "OWASP Top 10",                           // 4.3
            "Web Attacks",                            // 4.4
            "Burp Suite Advanced",                    // 4.5
            "Vulnerability Scanning",                 // 4.6
            "Recon and Subdomain Enumeration",        // 4.7
            "Nuclei Automation",                      // 4.8
            "Bug Bounty Workflow",                    // 4.9
            "Reporting and Documentation",            // 4.10
            "Final Live Web PT Project"               // 4.11
          ],
        },
        {
          category: "Web Pentesting Skills",
          items: [
            "Understanding request-response lifecycle",
            "Fuzzing endpoints & directories",
            "Manually finding SQLi, XSS, CSRF, SSRF (overview)",
            "Authentication & Session-related vulnerabilities",
            "Bypassing common security filters",
          ],
        },
        {
          category: "Bug Bounty Recon & Automation",
          items: [
            "Passive Recon (OSINT, wayback, crt.sh, etc.)",
            "Active Recon (subdomain brute-force, port scans)",
            "Directory Fuzzing with FFUF/Dirsearch",
            "Automating scans with Nuclei",
            "Finding low-hanging fruits quickly",
          ],
        },
        {
          category: "Advanced Tools",
          items: [
            "Burp Suite: Intruder, Extender, Sequencer, Repeater Advanced",
            "Nuclei: Templates, Automating Vulnerability Discovery",
            "Subfinder & Amass: Subdomain Enumeration",
            "Katana: Crawling & URL extraction",
          ],
        },
      ],

      projects: [
        "Recon + Subdomain Enumeration Report",
        "Burp Suite Advanced Testing Lab",
        "Nuclei Automation Output + Fuzzing Report",
        "Final Web Penetration Testing Project (Live Website)"
      ],
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Do I need ethical hacking knowledge before this?",
      answer:
        "Basic understanding of networking and cybersecurity is recommended. Prior ethical hacking knowledge is helpful but not mandatory.",
    },
    {
      id: 2,
      question: "Will I learn Burp Suite in depth?",
      answer:
        "Yes, you will learn advanced Burp Suite modules including Intruder, Repeater, Extender, Sequencer, and custom extensions.",
    },
    {
      id: 3,
      question: "Will I be able to do bug bounty after this course?",
      answer:
        "Absolutely! The course teaches complete bug bounty workflow including recon, automation, testing, and reporting.",
    },
    {
      id: 4,
      question: "Is there a final project?",
      answer:
        "Yes, you will perform a complete penetration test on a live website and submit a professional PT report.",
    },
    {
      id: 5,
      question: "Will I learn automation?",
      answer:
        "Yes, tools like Nuclei, FFUF, Subfinder, and Amass help automate bug bounty tasks.",
    },
    {
      id: 6,
      question: "Can I pay the fee in installments?",
      answer: "Yes, EMI options are available for this course.",
    },
  ],

  // Card Features
  cardFeatures: [
    "OWASP Top 10",
    "Bug Bounty Automation",
    "Advanced Burp Suite",
    "Live Web PT Project"
  ],

  // Theme Colors
  theme: {
    primary: "purple",
    gradient: "from-purple-500 to-indigo-500",
  }
},
{
  id: "soc-analyst-blue-team",
  slug: "soc-analyst-and-blue-team-course",
  isPopular: true,
  badge: "🔵 SOC Analyst + Blue Team Program",

  // Basic Info
  title: "SOC Analyst & Blue Team Program",
  shortTitle: "SOC Analyst",
  subtitle:
    "Learn SIEM, log monitoring, incident response, malware traffic analysis, forensics, MITRE ATT&CK, and SOC use cases with hands-on labs.",
  description:
    "This course prepares you for real SOC Analyst roles with practical training in SIEM (Wazuh/Splunk), log analysis, alerts, forensics, malware traffic analysis, MITRE ATT&CK, and SOC use case building. Ideal for Blue Team careers.",

  // Course Meta
  duration: "1 Month (4 Weeks)",
  mode: "Online / Offline",
  level: "Beginner to Intermediate",
  language: "Hindi + English",

  // Pricing
  price: 12999,
  originalPrice: 18999,
  discount: "32% OFF",
  emiAvailable: true,

  // Images
  thumbnail: "/images/courses/soc-analyst.jpg",
  heroImage: "/images/courses/soc-analyst-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 180,
    rating: 4.9,
    reviews: 38,
    projectsCount: 4,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "siem", title: "SIEM Tools", subtitle: "Wazuh / Splunk" },
    { id: 2, icon: "alert", title: "Alert", subtitle: "Analysis" },
    { id: 3, icon: "incident", title: "Incident", subtitle: "Response" },
    { id: 4, icon: "forensics", title: "Digital", subtitle: "Forensics" },
    { id: 5, icon: "mitre", title: "MITRE", subtitle: "ATT&CK Mapping" },
    { id: 6, icon: "usecase", title: "SOC Use Cases", subtitle: "Realistic Labs" }
  ],

  // Tools & Technologies
  technologies: [
    "Wazuh",
    "Splunk",
    "ELK Stack",
    "Wireshark",
    "Suricata",
    "Zeek",
    "MITRE ATT&CK",
    "VirusTotal",
    "Any.Run",
    "TCPDump"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "SOC Analyst Certification",
      description: "Get certified as a Blue Team & SOC Analyst.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Real SIEM Experience",
      description: "Hands-on labs using Wazuh/Splunk with live log monitoring.",
      icon: "siem",
    },
    {
      id: 3,
      title: "Incident Handling Skills",
      description: "Learn step-by-step incident response and IR documentation.",
      icon: "incident",
    },
    {
      id: 4,
      title: "Forensics & Malware Basics",
      description: "Understand malware behavior & forensic investigation workflow.",
      icon: "forensics",
    },
    {
      id: 5,
      title: "SOC Use Case Building",
      description: "Create detection rules, alerts, and SOC playbooks.",
      icon: "usecase",
    },
    {
      id: 6,
      title: "Lifetime Notes & Recordings",
      description: "Access to notes, cheat sheets, and recording sessions.",
      icon: "lifetime",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 5,
      month: "Month 1",
      title: "SOC Analyst & Blue Team",
      weeks: "Weeks 1–4",
      color: "from-blue-500 to-indigo-500",
      icon: "blue-team",

      topics: [
        {
          category: "SOC Analyst & Blue Team (Module 5)",
          items: [
            "SIEM (Wazuh / Splunk)",                      // 5.1
            "Log Monitoring",                              // 5.2
            "Incident Response",                           // 5.3
            "Alert Analysis",                              // 5.4
            "Malware Traffic Analysis",                    // 5.5
            "Forensics Basics",                            // 5.6
            "MITRE ATT&CK",                                // 5.7
            "SOC Use Case Understanding"                   // 5.8
          ]
        },
        {
          category: "Blue Team Skills",
          items: [
            "Understanding SOC Architecture",
            "Detecting suspicious log patterns",
            "Triage levels (L1 → L2 → L3)",
            "Indicator of Compromise (IOC) Analysis",
            "How SOC teams respond to alerts"
          ]
        },
        {
          category: "Malware & Forensics Essentials",
          items: [
            "PCAP Analysis with Wireshark",
            "Basic malware traffic behavior",
            "Understanding file hashes (MD5/SHA256)",
            "Memory & disk forensic basics"
          ]
        },
        {
          category: "SIEM & MITRE Techniques",
          items: [
            "Creating Detection Rules",
            "Mapping alerts to MITRE ATT&CK",
            "Building simple SOC use cases",
            "Threat detection logic examples"
          ]
        }
      ],

      projects: [
        "Incident Response Report (IR Case Study)",
        "SIEM Log Monitoring Lab (Wazuh / Splunk)",
        "Malware Traffic PCAP Analysis Project",
        "MITRE ATT&CK Use Case Mapping Exercise"
      ]
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Do I need prior experience for SOC Analyst?",
      answer:
        "No, this course is beginner-friendly. Basic cybersecurity or IT knowledge is helpful but not mandatory.",
    },
    {
      id: 2,
      question: "Will I learn a real SIEM tool?",
      answer:
        "Yes, you will work hands-on with SIEM tools like Wazuh or Splunk for log monitoring and alert analysis.",
    },
    {
      id: 3,
      question: "Is this useful for Blue Team careers?",
      answer:
        "Absolutely. This is a perfect starting point for SOC Analyst, Blue Team, or Digital Forensics roles.",
    },
    {
      id: 4,
      question: "Will I learn malware analysis?",
      answer:
        "Yes, you will learn malware traffic basics and how to analyze PCAP files.",
    },
    {
      id: 5,
      question: "What projects will I complete?",
      answer:
        "Projects include SIEM log monitoring, malware analysis, MITRE mapping, and an incident response report.",
    },
    {
      id: 6,
      question: "Can I pay the fee in EMI?",
      answer:
        "Yes, EMI options are available.",
    }
  ],

  // Card Features
  cardFeatures: [
    "SIEM (Wazuh/Splunk)",
    "Incident Response",
    "Malware & Forensics",
    "SOC Use Case Development"
  ],

  // Theme Colors
  theme: {
    primary: "blue",
    gradient: "from-blue-500 to-indigo-500",
  }
},
{
  id: "cloud-security-mini-module",
  slug: "cloud-security-mini-module",
  isPopular: false,
  badge: "☁️ Cloud Security Mini Module",

  // Basic Info
  title: "Cloud Security (Mini Module)",
  shortTitle: "Cloud Security",
  subtitle:
    "Learn the fundamentals of cloud security including AWS IAM, S3 Security, Shared Responsibility Model, and common misconfigurations.",
  description:
    "This mini module introduces cloud security essentials required for cybersecurity, SOC, and ethical hacking roles. Understand IAM, S3 security, shared responsibility, and how attackers exploit cloud misconfigurations in real-world environments.",

  // Course Meta
  duration: "1 Week",
  mode: "Online / Offline",
  level: "Beginner Friendly",
  language: "Hindi + English",

  // Pricing
  price: 3999,
  originalPrice: 6999,
  discount: "42% OFF",
  emiAvailable: false,

  // Images
  thumbnail: "/images/courses/cloud-security.jpg",
  heroImage: "/images/courses/cloud-security-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 140,
    rating: 4.8,
    reviews: 22,
    projectsCount: 1,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "cloud", title: "AWS", subtitle: "Security Basics" },
    { id: 2, icon: "shield", title: "IAM", subtitle: "Access Control" },
    { id: 3, icon: "alert", title: "Misconfigurations", subtitle: "Real-World Cases" },
    { id: 4, icon: "security", title: "S3", subtitle: "Bucket Security" },
    { id: 5, icon: "project", title: "1 Project", subtitle: "Mini Hands-on" }
  ],

  // Technologies
  technologies: [
    "AWS IAM",
    "S3 Security",
    "Shared Responsibility Model",
    "CloudTrail",
    "CloudWatch",
    "Identity & Access Control",
    "Cloud Misconfigurations"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "Cloud Security Certificate",
      description: "Get certified in cloud security fundamentals.",
      icon: "certificate",
    },
    {
      id: 2,
      title: "Understand Cloud Threats",
      description: "Learn common cloud attacks & misconfigurations.",
      icon: "threats",
    },
    {
      id: 3,
      title: "Practical AWS Concepts",
      description: "Basics of IAM, S3, and cloud monitoring tools.",
      icon: "aws",
    },
    {
      id: 4,
      title: "Cloud Career Booster",
      description: "Perfect add-on to SOC, cyber security, and ethical hacking courses.",
      icon: "career",
    },
    {
      id: 5,
      title: "Quick Completion",
      description: "Short 1-week module to boost cloud fundamentals.",
      icon: "clock",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 6,
      month: "Mini Module",
      title: "Cloud Security",
      weeks: "Week 1",
      color: "from-indigo-500 to-blue-500",
      icon: "cloud",

      topics: [
        {
          category: "Cloud Security (Mini Module)",
          items: [
            "Cloud Security Overview",             // 6.1
            "Shared Responsibility Model",         // 6.2
            "AWS IAM Basics",                      // 6.3
            "S3 Security Basics",                  // 6.4
            "Common Cloud Misconfigurations"       // 6.5
          ]
        },
        {
          category: "Deep Cloud Concepts",
          items: [
            "IAM Users, Groups, Policies Overview",
            "Public vs Private S3 Buckets",
            "Cloud Misconfigurations used by Hackers",
            "Cloud Logging (CloudTrail & CloudWatch) Basics",
          ]
        },
        {
          category: "Real-world Cloud Security",
          items: [
            "How attackers exploit weak IAM permissions",
            "Impact of public S3 buckets",
            "Cloud data leaks case studies",
          ]
        }
      ],

      projects: [
        "AWS IAM & S3 Policy Review Mini Project"
      ]
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Is prior cloud knowledge required?",
      answer:
        "No, this is a beginner-friendly mini module for students and cybersecurity learners.",
    },
    {
      id: 2,
      question: "Do I need an AWS account?",
      answer:
        "Not mandatory. Demonstrations will be provided. If you want, you can use a free AWS account.",
    },
    {
      id: 3,
      question: "Will this help in cybersecurity roles?",
      answer:
        "Yes. Cloud security is essential for SOC, pentesting, and cyber security interviews.",
    },
    {
      id: 4,
      question: "Will I get a certificate?",
      answer:
        "Yes, after the module is completed, you will get a Cloud Security Fundamentals Certificate.",
    },
    {
      id: 5,
      question: "Can this be completed in 1 week?",
      answer:
        "Yes, this is designed as a fast-track cloud security foundation module.",
    }
  ],

  // Card Features
  cardFeatures: [
    "AWS Security Basics",
    "IAM + S3 Concepts",
    "Misconfigurations",
    "Mini Hands-on Project"
  ],

  // Theme Colors
  theme: {
    primary: "blue",
    gradient: "from-indigo-500 to-blue-500",
  }
},
{
  id: "python-for-cybersecurity",
  slug: "python-for-cybersecurity-course",
  isPopular: false,
  badge: "🐍 Python Automation for Cybersecurity",

  // Basic Info
  title: "Python for Cybersecurity",
  shortTitle: "Python for CyberSec",
  subtitle:
    "Learn Python scripting for cybersecurity, focusing on automation, log parsing, recon automation, and security tool development.",
  description:
    "A practical mini-module designed to teach Python scripting focused on cybersecurity tasks such as automation, log parsing, recon automation, and writing security-focused scripts. Ideal for SOC analysts, ethical hackers, and red team beginners.",

  // Course Meta
  duration: "1 Week",
  mode: "Online / Offline",
  level: "Beginner Friendly",
  language: "Hindi + English",

  // Pricing
  price: 2999,
  originalPrice: 5999,
  discount: "50% OFF",
  emiAvailable: false,

  // Images
  thumbnail: "/images/courses/python-cybersec.jpg",
  heroImage: "/images/courses/python-cybersec-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 160,
    rating: 4.9,
    reviews: 30,
    projectsCount: 2,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "python", title: "Python", subtitle: "Scripting Basics" },
    { id: 2, icon: "automation", title: "Security", subtitle: "Automation" },
    { id: 3, icon: "logs", title: "Log Parsing", subtitle: "Hands-on" },
    { id: 4, icon: "recon", title: "Recon", subtitle: "Automation" },
    { id: 5, icon: "project", title: "2 Projects", subtitle: "Included" }
  ],

  // Tools & Technologies
  technologies: [
    "Python",
    "Requests",
    "BeautifulSoup",
    "JSON & CSV Parsing",
    "OS & Sys Modules",
    "Regex",
    "Logging Module",
    "Subprocess Automation"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "Automation Skills",
      description: "Learn to automate cybersecurity tasks with Python.",
      icon: "automation",
    },
    {
      id: 2,
      title: "Practical Cyber Scripts",
      description: "Create real cybersecurity scripts: recon, log parsing & scanning.",
      icon: "script",
    },
    {
      id: 3,
      title: "Foundational Python",
      description: "Build Python basics needed for cyber roles and SOC tasks.",
      icon: "python",
    },
    {
      id: 4,
      title: "Hands-on Mini Projects",
      description: "Get practical experience through step-by-step coding tasks.",
      icon: "projects",
    },
    {
      id: 5,
      title: "Interview Advantage",
      description: "Python automation knowledge boosts cybersecurity job prospects.",
      icon: "interview",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 7,
      month: "Mini Module",
      title: "Python for Cybersecurity",
      weeks: "Week 1",
      color: "from-yellow-500 to-orange-500",
      icon: "python",

      topics: [
        {
          category: "Python for Cybersecurity (Module 7)",
          items: [
            "Python Basics",              // 7.1
            "Automation Scripts",         // 7.2
            "Log Parsing Automation",     // 7.3
            "Recon Automation"            // 7.4
          ]
        },
        {
          category: "Python Scripting Essentials",
          items: [
            "Variables, Loops, Conditions",
            "Reading/Writing Files",
            "Working with JSON & CSV",
            "Using OS, Sys & Subprocess modules",
            "Regex for log analysis"
          ]
        },
        {
          category: "Cybersecurity Automations",
          items: [
            "Parsing logs for errors, alerts & suspicious activity",
            "Auto directory scanning scripts",
            "Automated recon tool (subdomain check, HTTP status scan)",
            "Scraping public data for OSINT"
          ]
        }
      ],

      projects: [
        "Log Parsing Automation Script",
        "Recon Automation Python Tool"
      ]
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Do I need coding experience?",
      answer:
        "No, this module starts from Python basics and gradually builds into cybersecurity scripting.",
    },
    {
      id: 2,
      question: "Will I be able to automate tasks?",
      answer:
        "Yes! You will build automation scripts for logs, recon, and basic scanning.",
    },
    {
      id: 3,
      question: "Is this module useful for SOC or Pentesting?",
      answer:
        "Absolutely. Python automation is highly valuable for SOC analysts, ethical hackers, and red teamers.",
    },
    {
      id: 4,
      question: "Will I get projects?",
      answer:
        "Yes, two hands-on projects are included: log parsing automation & recon automation.",
    },
    {
      id: 5,
      question: "Can I complete this in one week?",
      answer:
        "Yes, it is designed as a fast-track practical scripting module.",
    }
  ],

  // Card Features
  cardFeatures: [
    "Python Basics",
    "Cybersecurity Automation",
    "Log Parsing",
    "Recon Automation"
  ],

  // Theme Colors
  theme: {
    primary: "yellow",
    gradient: "from-yellow-500 to-orange-500",
  }
},
{
  id: "soft-skills-career-building",
  slug: "soft-skills-and-career-building-course",
  isPopular: false,
  badge: "🎯 Career Building Module",

  // Basic Info
  title: "Soft Skills & Career Building",
  shortTitle: "Career Building",
  subtitle:
    "Develop essential career skills including resume building, LinkedIn optimization, GitHub portfolio setup, interview preparation, and project showcase guidance.",
  description:
    "This module focuses on improving soft skills and preparing you for cybersecurity industry roles. Learn how to build a strong resume, optimize LinkedIn, create a professional GitHub portfolio, prepare for interviews, and present your projects confidently.",

  // Course Meta
  duration: "1 Week",
  mode: "Online / Offline",
  level: "Beginner Friendly",
  language: "Hindi + English",

  // Pricing
  price: 1999,
  originalPrice: 3999,
  discount: "50% OFF",
  emiAvailable: false,

  // Images
  thumbnail: "/images/courses/soft-skills.jpg",
  heroImage: "/images/courses/soft-skills-hero.jpg",

  // Stats
  stats: {
    studentsEnrolled: 210,
    rating: 4.8,
    reviews: 40,
    projectsCount: 1,
  },

  // Highlights
  highlights: [
    { id: 1, icon: "resume", title: "Resume", subtitle: "Optimization" },
    { id: 2, icon: "linkedin", title: "LinkedIn", subtitle: "Branding" },
    { id: 3, icon: "portfolio", title: "Portfolio", subtitle: "GitHub Setup" },
    { id: 4, icon: "interview", title: "Interview", subtitle: "Preparation" },
    { id: 5, icon: "showcase", title: "Project", subtitle: "Showcase Guide" }
  ],

  // Tools & Technologies
  technologies: [
    "LinkedIn Optimization",
    "GitHub Portfolio",
    "Resume Templates",
    "Mock Interview Tools",
    "Presentation Techniques"
  ],

  // Student Benefits
  benefits: [
    {
      id: 1,
      title: "Professional Resume",
      description: "Get guidance to create a clean, impactful, and job-ready resume.",
      icon: "resume",
    },
    {
      id: 2,
      title: "LinkedIn Branding",
      description: "Learn LinkedIn optimization techniques to increase recruiter visibility.",
      icon: "linkedin",
    },
    {
      id: 3,
      title: "GitHub Portfolio",
      description: "Set up a professional GitHub showcasing your cybersecurity and coding projects.",
      icon: "portfolio",
    },
    {
      id: 4,
      title: "Interview Confidence",
      description: "Prepare for HR and technical interviews with mock questions & tips.",
      icon: "interview",
    },
    {
      id: 5,
      title: "Project Showcase Skills",
      description: "Learn how to present your projects effectively in interviews.",
      icon: "showcase",
    }
  ],

  // Modules / Curriculum
  modules: [
    {
      id: 8,
      month: "Mini Module",
      title: "Soft Skills & Career Building",
      weeks: "Week 1",
      color: "from-pink-500 to-red-500",
      icon: "career",

      topics: [
        {
          category: "Soft Skills & Career Building (Module 8)",
          items: [
            "Resume & LinkedIn Optimization",     // 8.1
            "Portfolio & GitHub Setup",           // 8.2
            "Interview Preparation",              // 8.3
            "Project Showcase Guidance"           // 8.4
          ]
        },
        {
          category: "Career Skill Development",
          items: [
            "Professional profile building",
            "GitHub readme & project structuring",
            "Common HR and technical questions",
            "How to showcase cybersecurity projects",
            "Building personal branding for job search"
          ]
        },
        {
          category: "Communication Skills",
          items: [
            "Speaking confidently in interviews",
            "Email & message etiquette",
            "Storytelling for project explanation"
          ]
        }
      ],

      projects: [
        "Resume + GitHub Portfolio Setup Project"
      ]
    }
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Is this module important?",
      answer:
        "Yes! Soft skills, resume quality, and professional branding are essential to crack interviews.",
    },
    {
      id: 2,
      question: "Will I get help building my resume?",
      answer:
        "Yes, you will create and optimize your resume with expert guidance.",
    },
    {
      id: 3,
      question: "Will this module help me get a job?",
      answer:
        "Absolutely. This module prepares you to present your skills, portfolio, and interviews professionally.",
    },
    {
      id: 4,
      question: "Do I need GitHub knowledge?",
      answer:
        "No, we will teach you how to set it up and use it properly.",
    },
    {
      id: 5,
      question: "Will I get a certificate?",
      answer:
        "Yes, you will receive a Soft Skills & Career Building Certificate.",
    }
  ],

  // Card Features
  cardFeatures: [
    "Resume Building",
    "LinkedIn Optimization",
    "GitHub Portfolio Setup",
    "Interview Preparation"
  ],

  // Theme Colors
  theme: {
    primary: "pink",
    gradient: "from-pink-500 to-red-500",
  }
},
// In src/data/coursesData.js - Update the free courses section

// Free Courses (with all required properties)
{
  id: 'free-1',
  slug: 'html-css-fundamentals',
  title: 'HTML & CSS Fundamentals',
  shortTitle: 'HTML & CSS',
  description: 'Learn the building blocks of web development. Master HTML5 and CSS3 from scratch with hands-on projects.',
  subtitle: 'Master HTML5 & CSS3 basics for web development',
  
  // Images
  thumbnail: '/images/courses/html-css.jpg',
  image: '/images/courses/html-css.jpg',
  heroImage: '/images/courses/html-css-hero.jpg',
  
  // Course Meta
  category: 'Web Development',
  level: 'Beginner',
  duration: '8 Hours',
  mode: 'Online',
  language: 'Hindi + English',
  
  // Pricing
  price: 0,
  originalPrice: 4999,
  discount: '100% OFF',
  isFree: true,
  emiAvailable: false,
  
  // Badges
  isPopular: true,
  isNew: false,
  isFeatured: true,
  badge: '✨ Free Course',
  
  // Instructor
  instructor: 'John Smith',
  
  // Stats
  stats: {
    rating: 4.9,
    reviews: 2450,
    studentsEnrolled: 15000,
    projectsCount: 3,
  },
  rating: 4.9,
  reviewCount: 2450,
  enrollmentCount: 15000,
  totalLessons: 25,
  totalDuration: '8 hours',
  
  // Highlights
  highlights: [
    { id: 1, icon: 'clock', title: '8 Hours', subtitle: 'Video Content' },
    { id: 2, icon: 'projects', title: '3+', subtitle: 'Projects' },
    { id: 3, icon: 'certificate', title: 'Free', subtitle: 'Certificate' },
    { id: 4, icon: 'lifetime', title: 'Lifetime', subtitle: 'Access' },
  ],
  
  // Technologies
  technologies: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
  
  // Benefits
  benefits: [
    {
      id: 1,
      title: 'Free Certificate',
      description: 'Get a completion certificate at no cost.',
      icon: 'certificate',
    },
    {
      id: 2,
      title: 'Hands-on Projects',
      description: 'Build 3 real projects to add to your portfolio.',
      icon: 'projects',
    },
    {
      id: 3,
      title: 'Lifetime Access',
      description: 'Access course content forever, learn at your pace.',
      icon: 'lifetime',
    },
  ],
  
  // What You'll Learn
  whatYouWillLearn: [
    'HTML5 semantic elements',
    'CSS3 styling and layouts',
    'Responsive design basics',
    'Build 3 real projects'
  ],
  
  // Requirements
  requirements: [
    'No prior experience needed',
    'A computer with internet',
    'Eagerness to learn'
  ],
  
  // Card Features
  cardFeatures: [
    'HTML5 Fundamentals',
    'CSS3 Styling',
    'Responsive Design',
    'Free Certificate',
  ],
  
  // Theme
  theme: {
    primary: 'orange',
    gradient: 'from-orange-400 to-red-500',
  },
  
  // Modules
  modules: [
    {
      id: 1,
      month: 'Week 1',
      title: 'HTML Fundamentals',
      weeks: 'Days 1-3',
      color: 'from-orange-500 to-red-500',
      icon: 'html',
      topics: [
        {
          category: 'HTML Basics',
          items: [
            'Introduction to HTML',
            'HTML Document Structure',
            'Text Elements & Formatting',
            'Links and Images',
            'Lists and Tables',
          ],
        },
      ],
      projects: ['Personal Portfolio Page'],
    },
    {
      id: 2,
      month: 'Week 2',
      title: 'CSS Fundamentals',
      weeks: 'Days 4-7',
      color: 'from-blue-500 to-purple-500',
      icon: 'css',
      topics: [
        {
          category: 'CSS Basics',
          items: [
            'CSS Selectors',
            'Colors and Typography',
            'Box Model',
            'Flexbox Layout',
            'CSS Grid Basics',
          ],
        },
      ],
      projects: ['Responsive Landing Page'],
    },
  ],
  
  // FAQs
  faqs: [
    {
      id: 1,
      question: 'Is this course really free?',
      answer: 'Yes! This course is 100% free with no hidden charges.',
    },
    {
      id: 2,
      question: 'Will I get a certificate?',
      answer: 'Yes, you will receive a free certificate upon completion.',
    },
    {
      id: 3,
      question: 'Do I need any prior experience?',
      answer: 'No, this course is designed for complete beginners.',
    },
  ],
},
{
  id: 'free-2',
  slug: 'javascript-basics-beginners',
  title: 'JavaScript Basics for Beginners',
  shortTitle: 'JavaScript Basics',
  description: 'Start your programming journey with JavaScript. Learn variables, functions, loops, and DOM manipulation.',
  subtitle: 'Learn JavaScript from scratch',
  
  // Images
  thumbnail: '/images/courses/javascript.jpg',
  image: '/images/courses/javascript.jpg',
  heroImage: '/images/courses/javascript-hero.jpg',
  
  // Course Meta
  category: 'Programming',
  level: 'Beginner',
  duration: '10 Hours',
  mode: 'Online',
  language: 'Hindi + English',
  
  // Pricing
  price: 0,
  originalPrice: 5999,
  discount: '100% OFF',
  isFree: true,
  emiAvailable: false,
  
  // Badges
  isPopular: true,
  isNew: false,
  isFeatured: true,
  badge: '✨ Free Course',
  
  // Instructor
  instructor: 'Sarah Johnson',
  
  // Stats
  stats: {
    rating: 4.8,
    reviews: 1890,
    studentsEnrolled: 12000,
    projectsCount: 4,
  },
  rating: 4.8,
  reviewCount: 1890,
  enrollmentCount: 12000,
  totalLessons: 30,
  totalDuration: '10 hours',
  
  // Highlights
  highlights: [
    { id: 1, icon: 'clock', title: '10 Hours', subtitle: 'Video Content' },
    { id: 2, icon: 'projects', title: '4+', subtitle: 'Projects' },
    { id: 3, icon: 'certificate', title: 'Free', subtitle: 'Certificate' },
    { id: 4, icon: 'lifetime', title: 'Lifetime', subtitle: 'Access' },
  ],
  
  // Technologies
  technologies: ['JavaScript', 'ES6+', 'DOM', 'Events', 'JSON'],
  
  // Benefits
  benefits: [
    {
      id: 1,
      title: 'Free Certificate',
      description: 'Get a completion certificate at no cost.',
      icon: 'certificate',
    },
    {
      id: 2,
      title: 'Hands-on Projects',
      description: 'Build 4 interactive projects.',
      icon: 'projects',
    },
    {
      id: 3,
      title: 'Lifetime Access',
      description: 'Access course content forever.',
      icon: 'lifetime',
    },
  ],
  
  // What You'll Learn
  whatYouWillLearn: [
    'JavaScript fundamentals',
    'DOM manipulation',
    'Events and handlers',
    'Build interactive web pages'
  ],
  
  // Requirements
  requirements: [
    'Basic HTML & CSS knowledge',
    'Text editor installed'
  ],
  
  // Card Features
  cardFeatures: [
    'JavaScript Basics',
    'DOM Manipulation',
    'Event Handling',
    'Free Certificate',
  ],
  
  // Theme
  theme: {
    primary: 'yellow',
    gradient: 'from-yellow-400 to-orange-500',
  },
  
  // Modules
  modules: [
    {
      id: 1,
      month: 'Week 1',
      title: 'JavaScript Fundamentals',
      weeks: 'Days 1-4',
      color: 'from-yellow-500 to-orange-500',
      icon: 'javascript',
      topics: [
        {
          category: 'JS Basics',
          items: [
            'Variables and Data Types',
            'Operators',
            'Control Structures',
            'Functions',
            'Arrays and Objects',
          ],
        },
      ],
      projects: ['Calculator App'],
    },
    {
      id: 2,
      month: 'Week 2',
      title: 'DOM & Events',
      weeks: 'Days 5-7',
      color: 'from-orange-500 to-red-500',
      icon: 'dom',
      topics: [
        {
          category: 'DOM Manipulation',
          items: [
            'Selecting Elements',
            'Modifying Elements',
            'Event Listeners',
            'Form Handling',
            'Local Storage',
          ],
        },
      ],
      projects: ['To-Do List App', 'Quiz App'],
    },
  ],
  
  // FAQs
  faqs: [
    {
      id: 1,
      question: 'Is this course really free?',
      answer: 'Yes! This course is 100% free with no hidden charges.',
    },
    {
      id: 2,
      question: 'Do I need HTML/CSS knowledge?',
      answer: 'Basic HTML & CSS knowledge is recommended but not required.',
    },
  ],
},
{
  id: 'free-3',
  slug: 'introduction-to-cybersecurity',
  title: 'Introduction to Cybersecurity',
  shortTitle: 'Intro to Cybersec',
  description: 'Start your cybersecurity journey with this free introductory course. Learn basic concepts, threats, and career paths.',
  subtitle: 'Free introduction to the world of cybersecurity',
  
  // Images
  thumbnail: '/images/courses/intro-cybersec.jpg',
  image: '/images/courses/intro-cybersec.jpg',
  heroImage: '/images/courses/intro-cybersec-hero.jpg',
  
  // Course Meta
  category: 'Cybersecurity',
  level: 'Beginner',
  duration: '6 Hours',
  mode: 'Online',
  language: 'Hindi + English',
  
  // Pricing
  price: 0,
  originalPrice: 3999,
  discount: '100% OFF',
  isFree: true,
  emiAvailable: false,
  
  // Badges
  isPopular: true,
  isNew: true,
  isFeatured: true,
  badge: '🔒 Free Security Course',
  
  // Instructor
  instructor: 'HackPro Team',
  
  // Stats
  stats: {
    rating: 4.9,
    reviews: 850,
    studentsEnrolled: 8000,
    projectsCount: 2,
  },
  rating: 4.9,
  reviewCount: 850,
  enrollmentCount: 8000,
  totalLessons: 15,
  totalDuration: '6 hours',
  
  // Highlights
  highlights: [
    { id: 1, icon: 'clock', title: '6 Hours', subtitle: 'Video Content' },
    { id: 2, icon: 'shield', title: 'Security', subtitle: 'Fundamentals' },
    { id: 3, icon: 'certificate', title: 'Free', subtitle: 'Certificate' },
    { id: 4, icon: 'career', title: 'Career', subtitle: 'Roadmap' },
  ],
  
  // Technologies
  technologies: ['Cybersecurity Basics', 'Threat Types', 'Security Tools', 'Career Paths'],
  
  // Benefits
  benefits: [
    {
      id: 1,
      title: 'Free Certificate',
      description: 'Get a completion certificate at no cost.',
      icon: 'certificate',
    },
    {
      id: 2,
      title: 'Career Guidance',
      description: 'Learn about various cybersecurity career paths.',
      icon: 'career',
    },
    {
      id: 3,
      title: 'Foundation Course',
      description: 'Perfect starting point for cybersecurity.',
      icon: 'foundation',
    },
  ],
  
  // What You'll Learn
  whatYouWillLearn: [
    'What is Cybersecurity',
    'Types of Cyber Threats',
    'Security Fundamentals',
    'Career Paths in Cybersecurity'
  ],
  
  // Requirements
  requirements: [
    'No prior experience needed',
    'Basic computer knowledge',
    'Interest in security'
  ],
  
  // Card Features
  cardFeatures: [
    'Cybersecurity Basics',
    'Threat Landscape',
    'Career Guidance',
    'Free Certificate',
  ],
  
  // Theme
  theme: {
    primary: 'cyan',
    gradient: 'from-cyan-400 to-blue-500',
  },
  
  // Modules
  modules: [
    {
      id: 1,
      month: 'Module 1',
      title: 'Cybersecurity Fundamentals',
      weeks: 'Lessons 1-8',
      color: 'from-cyan-500 to-blue-500',
      icon: 'security',
      topics: [
        {
          category: 'Security Basics',
          items: [
            'What is Cybersecurity',
            'CIA Triad',
            'Types of Hackers',
            'Common Threats',
            'Security Best Practices',
          ],
        },
      ],
      projects: ['Security Assessment Checklist'],
    },
    {
      id: 2,
      month: 'Module 2',
      title: 'Career in Cybersecurity',
      weeks: 'Lessons 9-15',
      color: 'from-blue-500 to-indigo-500',
      icon: 'career',
      topics: [
        {
          category: 'Career Paths',
          items: [
            'SOC Analyst Role',
            'Ethical Hacker Role',
            'Security Engineer Role',
            'Required Skills',
            'Certifications Overview',
          ],
        },
      ],
      projects: ['Personal Career Roadmap'],
    },
  ],
  
  // FAQs
  faqs: [
    {
      id: 1,
      question: 'Is this course really free?',
      answer: 'Yes! This introductory course is 100% free.',
    },
    {
      id: 2,
      question: 'Can I start cybersecurity after this?',
      answer: 'Yes, this gives you the foundation to pursue advanced courses.',
    },
  ],
}]
// Add these improved helper functions at the end of coursesData.js

// Helper functions with error handling
export const getAllCourses = () => {
  return coursesData || [];
};

export const getFreeCourses = () => {
  return coursesData.filter(course => course && (course.isFree || course.price === 0)) || [];
};

export const getPaidCourses = () => {
  return coursesData.filter(course => course && !course.isFree && course.price > 0) || [];
};

export const getCourseBySlug = (slug) => {
  if (!slug) return null;
  return coursesData.find(course => course && course.slug === slug) || null;
};

export const getCourseById = (id) => {
  if (!id) return null;
  return coursesData.find(course => course && course.id === id) || null;
};

export const getPopularCourses = (limit = 6) => {
  return coursesData
    .filter(course => course && course.isPopular)
    .slice(0, limit) || [];
};

export const getFeaturedCourses = (limit = 6) => {
  return coursesData
    .filter(course => course && (course.isPopular || course.isFeatured))
    .slice(0, limit) || [];
};

export const getCoursesByCategory = (category) => {
  if (!category) return [];
  return coursesData.filter(course => 
    course && course.category?.toLowerCase() === category.toLowerCase()
  ) || [];
};