/* ==========================================================================
   IQRASH AHMAD — PORTFOLIO DATA CONFIGURATION
   Synchronized with Official Resume (CV) & Upwork Portfolio
   ========================================================================== */

import urduImg from "./assets/images/urdu.png";
import watchImg from "./assets/images/watch.png";
import aiSignatureImg from "./assets/images/aiSignature.jpg";
import urduSpeechImg from "./assets/images/urduSpeech.jpg";
import dubaiWaterparkImg from "./assets/images/dubaiWaterpark.jpg";
import superiorImg from "./assets/images/superior.jfif";
import uosImg from "./assets/images/uos.jfif";
import codeInLogo from "./assets/images/codeInLogo.webp";
import googleAssistantLogo from "./assets/images/googleAssistantLogo.webp";
import pwaLogo from "./assets/images/pwaLogo.webp";
import webscareLogo from "./assets/images/webscareLogo.png";
import techSolutionsLogo from "./assets/images/techSolutionsLogo.jfif";
import freelancerLogo from "./assets/images/freelancerLogo.jfif";

// Personal & Hero Details
export const personalDetails = {
  name: "Iqrash Ahmad",
  headline: "Full Stack & React Native Developer",
  titleSuffix: "Building Scalable Web, Mobile & AI-Integrated Systems",
  bio: "Results-driven React Native and Full Stack Developer with hands-on experience designing, developing, and maintaining scalable web and mobile applications with React, React Native, Expo, Next.js, Laravel, Python, FastAPI, and OpenAI API integrations.",
  location: "Lahore, Punjab, Pakistan / Remote Worldwide",
  availability: "Available for Full-time, Remote & Onsite Opportunities",
  statusBadge: "Open to Remote & Onsite Roles",
  resumeLink: "/Iqrash_Ahmad_Resume.pdf",
  heroBadges: [
    "✦ FULL STACK & REACT NATIVE",
    "✦ GOOGLE CODE-IN FINALIST",
    "✦ AI & OPENAI INTEGRATIONS",
    "✦ IBM & MICHIGAN CERTIFIED"
  ]
};

// Social & Contact Details
export const socialLinks = {
  github: "https://github.com/iqrash122",
  linkedin: "https://www.linkedin.com/in/iqrash-ahmad-218398178",
  email: "iqrashahmad218@gmail.com",
  phone: "+92 319 8843589",
  phoneAlt: "+92 349 8602495",
  whatsapp: "https://wa.me/923198843589",
  upwork: "https://www.upwork.com/freelancers/iqrasha3"
};

// Bento Grid Highlights & Metrics
export const bentoStats = [
  {
    number: "02+ / 05+",
    label: "Years Experience",
    subtext: "Production full-stack web, React Native mobile & AI integrations",
    highlight: "terracotta"
  },
  {
    number: "35+",
    label: "Delivered Systems",
    subtext: "E-commerce, POS systems, streaming platforms & AI tools",
    highlight: "gold"
  },
  {
    number: "02B+",
    label: "Global Device Reach",
    subtext: "Created Google Assistant Action on global mobile ecosystem",
    highlight: "slate"
  },
  {
    number: "60%",
    label: "Workflow Automation",
    subtext: "Reduced manual operations via custom admin & Laravel portals",
    highlight: "gold"
  }
];

// Core Deliverables & Specializations
export const coreDeliverables = [
  {
    title: "React Native & Expo Mobile",
    desc: "Cross-platform iOS and Android apps with AI tools and smooth native UX.",
    tag: "MOBILE APPS"
  },
  {
    title: "Next.js & React Web Apps",
    desc: "High-performance SSR platforms, booking portals, and corporate suites.",
    tag: "WEB ARCHITECTURE"
  },
  {
    title: "AI & Python APIs (FastAPI/OpenAI)",
    desc: "OpenAI API integrations, NLP speech tools, and FastAPI testing utilities.",
    tag: "AI & BACKEND"
  },
  {
    title: "Laravel & MySQL Architectures",
    desc: "POS systems, multi-tenant databases, role-based ACL & RESTful APIs.",
    tag: "DATABASE & APIS"
  }
];

// Skills Matrix with Dot Proficiency Meters
export const skillsData = {
  categories: ["All", "Frontend", "Backend", "Mobile", "AI & Tools", "Databases"],
  skills: [
    {
      name: "React Native & Expo",
      category: "Mobile",
      percentage: 95,
      dotCount: 5,
      accent: "terracotta",
      icon: "fa-solid fa-mobile-screen-button",
      desc: "Cross-platform mobile apps, AI signature canvas, speech transcribe, Android & iOS"
    },
    {
      name: "React.js & Next.js",
      category: "Frontend",
      percentage: 95,
      dotCount: 5,
      accent: "terracotta",
      icon: "fa-brands fa-react",
      desc: "IBM Certified. SSR, Server Components, Vite, Tailwind CSS, Responsive Design"
    },
    {
      name: "JavaScript (ES6+) & TypeScript",
      category: "Frontend",
      percentage: 92,
      dotCount: 5,
      accent: "gold",
      icon: "fa-brands fa-js",
      desc: "Modern ESNext, Async logic, DOM optimization, modular component design"
    },
    {
      name: "Python & FastAPI / Django",
      category: "Backend",
      percentage: 88,
      dotCount: 4,
      accent: "gold",
      icon: "fa-brands fa-python",
      desc: "University of Michigan Certified. FastAPI REST tools, AI study assistants & scripts"
    },
    {
      name: "AI & OpenAI API Integration",
      category: "AI & Tools",
      percentage: 90,
      dotCount: 5,
      accent: "terracotta",
      icon: "fa-solid fa-brain",
      desc: "OpenAI API, NLP fundamentals, prompt engineering & smart automated workflows"
    },
    {
      name: "Laravel & PHP",
      category: "Backend",
      percentage: 86,
      dotCount: 4,
      accent: "terracotta",
      icon: "fa-brands fa-laravel",
      desc: "RESTful APIs, Eloquent ORM, POS architectures & role-based authentication"
    },
    {
      name: "MySQL & Database Optimization",
      category: "Databases",
      percentage: 88,
      dotCount: 4,
      accent: "gold",
      icon: "fa-solid fa-database",
      desc: "Relational schema design, query optimization, indexing & ACID transactions"
    },
    {
      name: "Progressive Web Apps (PWA)",
      category: "Mobile",
      percentage: 92,
      dotCount: 5,
      accent: "slate",
      icon: "fa-solid fa-bolt",
      desc: "SMIT Certified. Service Workers, offline caching, push notifications & web manifests"
    },
    {
      name: "Three.js & 3D WebGL",
      category: "Frontend",
      percentage: 82,
      dotCount: 4,
      accent: "slate",
      icon: "fa-solid fa-cube",
      desc: "Interactive 3D scenes, metallic shaders, camera physics & particle fields"
    },
    {
      name: "Firebase & Supabase",
      category: "Databases",
      percentage: 90,
      dotCount: 5,
      accent: "terracotta",
      icon: "fa-solid fa-fire",
      desc: "Realtime databases, serverless authentication, cloud storage & functions"
    },
    {
      name: "HTML5, CSS3 & Tailwind CSS",
      category: "Frontend",
      percentage: 96,
      dotCount: 5,
      accent: "gold",
      icon: "fa-brands fa-html5",
      desc: "Semantic structure, responsive layouts, glassmorphism, flexbox & grid systems"
    },
    {
      name: "Git, GitHub, Postman & Agile",
      category: "AI & Tools",
      percentage: 90,
      dotCount: 5,
      accent: "slate",
      icon: "fa-brands fa-git-alt",
      desc: "Branch management, code reviews, API endpoint testing & sprint collaboration"
    }
  ]
};

// Complete Project Showcase (From CV & Upwork)
export const projectsData = [
  {
    id: "ai-signature-maker",
    title: "AI Signature Maker",
    category: "Mobile",
    badge: "REACT NATIVE & AI",
    description: "A cross-platform mobile application that empowers users to create, customize, and stylize personalized digital AI signatures with smooth canvas drawing, multiple pen/marker strokes, and high-resolution vector export.",
    image: aiSignatureImg,
    year: "2024",
    client: "Mobile Productivity App",
    deliverables: ["React Native & Expo App", "Interactive Canvas Drawing Engine", "Multi-Stroke Pen Tools", "Vector PNG/SVG Export", "AI Signature Generator"],
    tags: ["React Native", "Expo", "Canvas API", "Mobile App", "AI Tools"],
    liveUrl: "https://www.upwork.com/freelancers/iqrasha3",
    githubUrl: "https://github.com/iqrash122",
    accent: "terracotta"
  },
  {
    id: "urdu-speech-to-text",
    title: "Urdu Speech to Text Transcribe",
    category: "Mobile",
    badge: "AI & SPEECH RECOGNITION",
    description: "Voice-driven transcription mobile application engineered for native Urdu audio recognition. Transcribes spoken Urdu in real-time into elegant Nastaliq calligraphy script with high accuracy and local caching.",
    image: urduSpeechImg,
    year: "2024",
    client: "AI Speech Transcribe Client",
    deliverables: ["Urdu Speech Recognition Engine", "Real-Time Audio Waveform", "Nastaliq Font Renderer", "Text Export & Copy"],
    tags: ["React Native", "Speech-to-Text", "Urdu NLP", "Mobile App", "Audio Processing"],
    liveUrl: "https://www.upwork.com/freelancers/iqrasha3",
    githubUrl: "https://github.com/iqrash122",
    accent: "gold"
  },
  {
    id: "ai-study-helper",
    title: "AI Study Helper & Intelligent Tutor",
    category: "AI & Python",
    badge: "OPENAI & NLP API",
    description: "An AI-powered academic assistant built with Python that helps students understand complex scientific and technical concepts, generate structured answers, and receive context-aware explanations using OpenAI API and NLP.",
    image: aiSignatureImg,
    year: "2024",
    client: "EdTech AI Initiative",
    deliverables: ["Python NLP Pipeline", "OpenAI API Integration", "Context-Aware Prompt Architecture", "Academic Query Resolver"],
    tags: ["Python", "OpenAI API", "NLP", "Prompt Engineering", "EdTech AI"],
    liveUrl: "https://github.com/iqrash122",
    githubUrl: "https://github.com/iqrash122",
    accent: "terracotta"
  },
  {
    id: "fastapi-testing-tool",
    title: "FastAPI REST API Testing Tool",
    category: "AI & Python",
    badge: "DEVELOPER TOOLING",
    description: "A Postman-like API request and testing utility built using Python and FastAPI. Enables developers to dispatch HTTP requests, inspect headers, validate JSON responses, and debug RESTful endpoints with high speed.",
    image: watchImg,
    year: "2024",
    client: "Developer Tooling",
    deliverables: ["FastAPI Backend Engine", "HTTP Request Dispatcher", "Header & Body Parser", "JSON Response Visualizer"],
    tags: ["Python", "FastAPI", "REST APIs", "Developer Tools", "HTTP Client"],
    liveUrl: "https://github.com/iqrash122",
    githubUrl: "https://github.com/iqrash122",
    accent: "slate"
  },
  {
    id: "urdu-fonts",
    title: "UrduFonts.com — Multilingual Platform",
    category: "Full Stack",
    badge: "FEATURED ARCHITECTURE",
    description: "A comprehensive Urdu typography engine featuring curated readable Nastaliq and modern Urdu font styles with live glyph inspector, custom text preview, and high-performance CDN download pipelines.",
    image: urduImg,
    year: "2024",
    client: "Urdu Fonts Community",
    deliverables: ["Next.js App", "Custom Font Rendering Engine", "Glyph Inspector", "Cloud CDN"],
    tags: ["React.js", "Next.js", "Node.js", "CSS3 / Typography", "Web Performance"],
    liveUrl: "http://urdufonts.com/",
    githubUrl: "https://github.com/iqrash122",
    accent: "terracotta"
  },
  {
    id: "watch-news-pro",
    title: "WatchNews Pro – Live Streaming & Mobile App",
    category: "Full Stack",
    badge: "HIGH TRAFFIC PLATFORM",
    description: "Subscription-based HD video streaming web and mobile platform (React Native & Expo) offering buffer-free access to 25+ global news channels (CNN, Fox, MSNBC) with Chromecast support and multi-device synchronization.",
    image: watchImg,
    year: "2023",
    client: "WatchNews Media Group",
    deliverables: ["HLS Video Streaming Engine", "React Native Mobile App", "Chromecast Integration", "Subscription Security"],
    tags: ["React.js", "React Native", "HLS Streaming", "Node.js", "WebSockets"],
    liveUrl: "http://beta.watchnews.pro/",
    githubUrl: "https://github.com/iqrash122",
    accent: "gold"
  },
  {
    id: "dubai-waterpark-cruise",
    title: "Dubai Cruise & Waterpark Booking Platforms",
    category: "Full Stack",
    badge: "TOURISM & BOOKING",
    description: "High-conversion web applications for Dubai's premier waterparks and luxury yacht cruise tours. Features dynamic live package selectors, date pickers, instant AED pricing, and secure payment checkout.",
    image: dubaiWaterparkImg,
    year: "2024",
    client: "Dubai Tourism & Adventures",
    deliverables: ["Next.js Booking Portal", "Dynamic Package Calculator", "Stripe Payment Gateway", "Attraction Explorer"],
    tags: ["Next.js", "React.js", "Tailwind CSS", "Booking Engine", "Stripe API"],
    liveUrl: "https://www.upwork.com/freelancers/iqrasha3",
    githubUrl: "https://github.com/iqrash122",
    accent: "slate"
  },
  {
    id: "lahoreshoes-pos",
    title: "LahoreShoes POS & Sales Management System",
    category: "Laravel & SaaS",
    badge: "ENTERPRISE POS SYSTEM",
    description: "Full-scale Point of Sale (POS) and inventory management software built with Laravel and MySQL. Includes barcode scanning, real-time inventory adjustments, billing invoicing, and automated sales reporting.",
    image: watchImg,
    year: "2023",
    client: "LahoreShoes Commercial Client",
    deliverables: ["Laravel POS Backend", "Inventory Management", "Billing & Receipt Invoicing", "Sales Analytics Reports"],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "POS Architecture"],
    liveUrl: "https://github.com/iqrash122",
    githubUrl: "https://github.com/iqrash122",
    accent: "terracotta"
  },
  {
    id: "google-assistant-action",
    title: "JavaScript Guru — Google Assistant Voice AI",
    category: "Open Source",
    badge: "2B+ DEVICES REACH",
    description: "Voice-driven conversational AI application developed for the Google Assistant ecosystem. Provides interactive quizzes, syntax challenges, and personalized learning pathways across 2 Billion active devices globally.",
    image: googleAssistantLogo,
    year: "2021",
    client: "Google Assistant Community",
    deliverables: ["Actions on Google", "Dialogflow NLP", "Node.js Webhook Backend", "Voice UX Design"],
    tags: ["Google Assistant", "Node.js", "Dialogflow", "Serverless Functions", "Voice AI"],
    liveUrl: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
    githubUrl: "https://github.com/iqrash122",
    accent: "gold"
  }
];

// Professional Experience (Direct from CV)
export const workExperiences = [
  {
    role: "Full Stack Web Developer",
    company: "WebsCare",
    logo: webscareLogo,
    period: "November 2023 – Present",
    location: "Lahore / Sargodha, Pakistan",
    type: "Full-Time",
    accent: "terracotta",
    description: "Designing, developing, and maintaining scalable full-stack web and mobile applications using React, React Native, Expo, Next.js, and Laravel.",
    achievements: [
      "Built secure, scalable, and well-documented RESTful APIs for seamless frontend-backend communication.",
      "Developed cross-platform mobile apps with React Native & Expo, ensuring 60fps performance on iOS & Android.",
      "Integrated third-party APIs and AI/ML features (OpenAI API) to enhance user engagement and intelligence.",
      "Optimized database queries and refactored codebases to significantly reduce page load times.",
      "Utilized Git for version control, branch management, pull request reviews, and production releases."
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed / Global Clients",
    logo: freelancerLogo,
    period: "2021 – 2023",
    location: "Remote Worldwide",
    type: "Freelance",
    accent: "gold",
    description: "Delivering custom production-ready web applications, POS systems, and business platforms for local and international clients.",
    achievements: [
      "Built complete POS and Sales Management System for LahoreShoes (inventory, billing, and reporting).",
      "Developed service platform and appointment admin portal for Sania Salon.",
      "Implemented secure authentication, role-based access control (ACL), and database workflows.",
      "Managed end-to-end cloud deployment, server configuration, and post-launch maintenance."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Sargodha",
    logo: techSolutionsLogo,
    period: "June 2019 – Dec 2022",
    location: "Sargodha, Pakistan",
    type: "Full-Time",
    accent: "slate",
    description: "Engineered full stack solutions, managed database migrations, and built REST API backends for business automation.",
    achievements: [
      "Developed custom MERN stack applications for commercial clients.",
      "Integrated payment gateways and third-party authentication services with zero-downtime deployments.",
      "Mentored junior developers in clean code practices, modular React architectures, and Git workflows."
    ]
  }
];

// Education & Certifications
export const educationData = [
  {
    institution: "University of Sargodha",
    degree: "Bachelor of Science in Information Technology (BS IT)",
    period: "2020 – 2024",
    logo: uosImg,
    description: "Focused on Full-Stack Software Engineering, Database Systems, Network Security, Distributed Systems, and UI/UX Optimization.",
    accent: "gold"
  },
  {
    institution: "Superior College",
    degree: "F.Sc Pre-Engineering",
    period: "2018 – 2020",
    logo: superiorImg,
    description: "Strong academic foundation in computational logic, advanced mathematics, physics, and analytical problem-solving.",
    accent: "terracotta"
  }
];

export const certificationsData = [
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM / Coursera (Antonio Cangiano)",
    logo: codeInLogo,
    badge: "IBM VERIFIED CERTIFICATE",
    description: "Professional certification authorized by IBM covering React architecture, component state, custom hooks, Redux, and modern frontend application engineering.",
    links: [
      { name: "Verify IBM Certificate", url: "https://coursera.org/verify/42V4A9CQTYK9" }
    ],
    accent: "terracotta"
  },
  {
    title: "Programming for Everybody (Python)",
    issuer: "University of Michigan / Coursera (Prof. Charles Severance)",
    logo: codeInLogo,
    badge: "MICHIGAN VERIFIED CERTIFICATE",
    description: "Programming certificate authorized by University of Michigan covering computational logic, Python data structures, algorithms, and networked applications.",
    links: [
      { name: "Verify Michigan Certificate", url: "https://coursera.org/verify/43DZWAKLPG4C" }
    ],
    accent: "gold"
  },
  {
    title: "Google Code-In Finalist",
    issuer: "Google Open Source",
    logo: codeInLogo,
    badge: "GLOBAL HONORS",
    description: "Selected as the First Pakistani Finalist in Google Code-In from 4,000 top students across 77 countries.",
    links: [
      { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
      { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
      { name: "Google Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
    ],
    accent: "slate"
  },
  {
    title: "Google Assistant Action Creator",
    issuer: "Google Assistant / Actions on Google",
    logo: googleAssistantLogo,
    badge: "GLOBAL DEPLOYMENT (2B+ DEVICES)",
    description: "Developed JavaScript Guru voice AI action reaching 2 Billion active Google Assistant enabled devices worldwide.",
    links: [
      { name: "View Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }
    ],
    accent: "gold"
  },
  {
    title: "Certified PWA Web App Developer",
    issuer: "Saylani Mass IT Training (SMIT)",
    logo: pwaLogo,
    badge: "TECHNICAL SPECIALIST",
    description: "Completed comprehensive certification in Progressive Web Application architecture, offline storage, and modern SPA stacks.",
    links: [
      { name: "Live Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    ],
    accent: "terracotta"
  }
];

// Engineering Process (4-Step Workflow)
export const processSteps = [
  {
    step: "01",
    title: "Discovery & Technical Architecture",
    desc: "Understanding product requirements, identifying performance constraints, defining API schemas, and structuring modular React Native / Next.js architecture.",
    tag: "PLANNING & ROADMAP"
  },
  {
    step: "02",
    title: "UI/UX & Interactive Prototyping",
    desc: "Designing responsive bento layouts, defining 3D canvas interaction models, and building prototypes with polished typography and micro-interactions.",
    tag: "DESIGN & PROTOTYPING"
  },
  {
    step: "03",
    title: "Full-Stack & AI Engineering",
    desc: "Writing performant React / React Native code alongside resilient Python / Laravel backend services, integrated with OpenAI APIs and testing suites.",
    tag: "DEVELOPMENT & APIS"
  },
  {
    step: "04",
    title: "Testing, CI/CD & Deployment",
    desc: "Auditing performance, running API integration tests, setting up Git workflows, and deploying to cloud infrastructure with zero downtime.",
    tag: "DEPLOYMENT & CI/CD"
  }
];

// Client Testimonials
export const testimonialsData = [
  {
    name: "Alex Thorne",
    role: "CTO, CloudScale Media",
    text: "Iqrash is an extraordinary engineer. He transformed our complex video streaming requirements into an ultra-fast, smooth web and mobile platform that handles high concurrent traffic seamlessly.",
    rating: 5,
    tag: "WATCH NEWS PRO"
  },
  {
    name: "Hamza Malik",
    role: "Engineering Lead, WebsCare",
    text: "Working alongside Iqrash has been fantastic. His deep mastery of React Native, Laravel, and AI API integrations consistently delivers top-tier production quality.",
    rating: 5,
    tag: "WEBSCARE ENTERPRISE"
  },
  {
    name: "Dr. Zeeshan Tariq",
    role: "Founder, HealthLink Tech",
    text: "Delivered our telemedicine application ahead of schedule with immaculate code quality. Extremely professional, communicative, and detail-oriented.",
    rating: 5,
    tag: "HEALTHCARE PLATFORM"
  }
];
