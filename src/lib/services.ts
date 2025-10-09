
import { Code, Server, Layers, Database, Cable, Megaphone, Search, Disc, PartyPopper, ShieldCheck, Network, Rocket, DatabaseZap, Shield, Puzzle, TestTube, GitBranch, Monitor, Mail, MapPin, Briefcase, Wifi, Users, CodeXml } from "lucide-react";

export type ServiceItem = { 
  title: string; 
  description: string;
  price: string; 
  icon: React.ElementType 
};

type ServicePackage = {
    title: string;
    price: string;
    bestFor: string;
    includes: string[];
};

type ServiceAddOn = {
    title: string;
    price: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: React.ElementType;
  description: string;
  details: string;
  items?: ServiceItem[];
  packages?: ServicePackage[];
  addOns?: ServiceAddOn[];
  pricing?: string;
};

export const services: Record<string, Service> = {
  "frontend-development": {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: Code,
    description: "Creating beautiful, responsive, and user-friendly interfaces that provide a seamless user experience across all devices.",
    details: "I specialize in building modern, interactive, and high-performance user interfaces. From the initial design concept to the final deployment, I ensure your web application is not only visually stunning but also accessible, fast, and SEO-friendly.",
    packages: [
      {
        title: "🟢 Basic Package",
        price: "Ksh 20,000 – 50,000",
        bestFor: "Startups, small businesses, or personal portfolios.",
        includes: [
          "Up to 4 responsive pages (Home, About, Services, Contact)",
          "Clean, mobile-friendly layout (HTML, CSS, JS)",
          "Simple animations (hover, transitions)",
          "Navigation menu, header, and footer",
          "Contact form (basic validation)",
          "SEO-friendly HTML structure",
          "Deployment (Netlify or GitHub Pages)",
          "1-month free support",
        ],
      },
      {
        title: "🟡 Standard Package",
        price: "Ksh 60,000 – 120,000",
        bestFor: "Growing companies, small e-commerce, and service-based websites.",
        includes: [
          "Everything in Basic +",
          "Dynamic content with JavaScript or React",
          "Product/service listing pages",
          "Custom CSS theme and branding",
          "Image gallery or slider section",
          "Blog or news layout page",
          "Form validation and API integration (contact/order forms)",
          "Page speed optimization",
          "Accessibility-friendly design (A11y)",
          "Light/dark mode toggle",
          "2 months of support & minor revisions",
        ],
      },
      {
        title: "🔵 Premium Package",
        price: "Ksh 150,000 – 300,000+",
        bestFor: "Large organizations, SaaS platforms, and interactive web applications.",
        includes: [
          "Everything in Standard +",
          "Full Single Page Application (SPA) using React, Vue, or Next.js",
          "Advanced animations and transitions (GSAP, Framer Motion, etc.)",
          "Admin/dashboard interface (frontend side)",
          "Progressive Web App (PWA) frontend setup",
          "Real-time updates (API-driven data, live stats)",
          "SEO structure & analytics integration",
          "Frontend testing (Cypress/Jest)",
          "Continuous deployment setup (GitHub + Netlify/Vercel)",
          "3-month premium support & maintenance",
        ],
      },
    ],
    addOns: [
        { title: "Custom animated hero section", price: "Ksh 5,000–10,000" },
        { title: "Chat widget or chatbot integration", price: "Ksh 5,000–15,000" },
        { title: "Multi-language support", price: "Ksh 5,000–10,000" },
        { title: "UI/UX design system or brand guideline", price: "Ksh 8,000–20,000" },
    ],
  },
  "backend-development": {
    slug: "backend-development",
    title: "Backend Development",
    icon: Server,
    description: "Building robust and scalable server-side applications, ensuring high performance and data security.",
    details: "I develop secure and efficient backend systems that power your web applications. My focus is on creating scalable architectures, reliable APIs, and secure data handling to support your business logic.",
    packages: [
        {
            title: "🟢 Basic Package",
            price: "Ksh 40,000 – 80,000",
            bestFor: "Small websites, portfolios, or projects needing simple data handling.",
            includes: [
                "Database setup (MySQL / PostgreSQL / SQLite)",
                "Basic API endpoints (GET, POST, PUT, DELETE)",
                "User registration & login (basic auth)",
                "Email/contact form submission handling",
                "Server-side validation & security setup",
                "Hosting & deployment (Render, Railway, or Heroku)",
                "Basic admin or data management panel",
                "Documentation of endpoints (Postman collection)",
                "1-month free support",
            ],
        },
        {
            title: "🟡 Standard Package",
            price: "Ksh 100,000 – 180,000",
            bestFor: "E-commerce platforms, company dashboards, and growing startups.",
            includes: [
                "Everything in Basic +",
                "Advanced authentication (JWT, password hashing, sessions)",
                "Payment gateway integration (MPesa, PayPal, or Stripe)",
                "Role-based access control (Admin, User, Vendor)",
                "CRUD operations for multiple models (products, orders, users, etc.)",
                "Email verification & password recovery system",
                "Integration with third-party APIs (Google, Firebase, etc.)",
                "File uploads (images, documents) and storage management",
                "Backend performance optimization",
                "Logging & error tracking setup",
                "2-month support & maintenance",
            ],
        },
        {
            title: "🔵 Premium Package",
            price: "Ksh 200,000 – 350,000+",
            bestFor: "Large-scale systems, SaaS platforms, and enterprise-level applications.",
            includes: [
                "Everything in Standard +",
                "Scalable microservices or modular architecture",
                "Real-time backend features (WebSockets, live chat, notifications)",
                "Advanced analytics & reporting system",
                "Cloud storage integration (AWS S3, Firebase Storage)",
                "Security hardening (encryption, HTTPS, rate limiting, CORS setup)",
                "API documentation (Swagger / OpenAPI)",
                "Continuous integration & deployment (CI/CD pipelines)",
                "Data backup & recovery automation",
                "Load balancing and caching setup (Redis, Cloudflare)",
                "Backend monitoring & alert system (UptimeRobot, Grafana, etc.)",
                "3-month premium support & performance updates",
            ],
        },
    ],
    addOns: [
        { title: "AI integration (Chatbot, recommendations)", price: "Ksh 20,000–50,000" },
        { title: "Multi-tenant system setup", price: "Ksh 15,000–40,000" },
        { title: "API testing automation", price: "Ksh 10,000–20,000" },
        { title: "Full documentation (developer-level)", price: "Ksh 5,000–15,000" },
    ],
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    icon: Layers,
    description: "End-to-end packages covering frontend, backend, and deployment for complete web solutions.",
    details: "From database to user interface, I offer comprehensive packages to bring your entire project to life. These bundles cover system architecture, database design, backend logic, and frontend development to deliver a cohesive and complete product.",
    packages: [
        {
            title: "🟢 Basic Package",
            price: "Ksh 60,000 – 100,000",
            bestFor: "Small businesses, startups, or personal portfolios.",
            includes: [
                "Responsive website design (mobile + desktop)",
                "3–5 pages (Home, About, Services, Contact, etc.)",
                "Interactive UI (buttons, forms, animations)",
                "Basic backend setup (user data, contact form storage)",
                "Simple database (MySQL / PostgreSQL)",
                "Email or form submission integration",
                "SEO-friendly structure",
                "Basic deployment (Netlify, Render, or Vercel)",
                "Free 1-month support after delivery",
            ],
        },
        {
            title: "🟡 Standard Package",
            price: "Ksh 120,000 – 200,000",
            bestFor: "Growing businesses, e-commerce startups, and dynamic web apps.",
            includes: [
                "Everything in Basic +",
                "Dynamic content with API integration",
                "User authentication (login/register)",
                "Product or service listing pages",
                "Admin dashboard (basic CRUD system)",
                "Payment integration (MPesa, PayPal, or Stripe)",
                "Role-based access (Admin/User)",
                "Custom CSS theme and branding",
                "Blog or news section",
                "Page speed & performance optimization",
                "Deployment + version control (GitHub setup)",
                "2-month support after delivery",
            ],
        },
        {
            title: "🔵 Premium Package",
            price: "Ksh 250,000 – 400,000+",
            bestFor: "Established companies, SaaS platforms, or advanced e-commerce systems.",
            includes: [
                "Everything in Standard +",
                "Full e-commerce backend (cart, checkout, orders)",
                "Real-time features (chat, notifications, sockets)",
                "Progressive Web App (PWA) capabilities",
                "Cloud storage (AWS/Firebase)",
                "Security hardening (JWT, HTTPS, encryption)",
                "Advanced analytics dashboard",
                "API documentation (Swagger/Postman)",
                "Automated backups & monitoring",
                "Performance optimization & scalability setup",
                "Continuous Deployment (CI/CD) configuration",
                "Up to 3 months premium support & maintenance",
            ],
        },
    ],
    addOns: [
        { title: "Custom animation or UI design", price: "Ksh 5,000–15,000" },
        { title: "Multi-language support", price: "Ksh 5,000–10,000" },
        { title: "SEO content optimization", price: "Ksh 5,000–20,000" },
        { title: "Advanced reporting or analytics", price: "Ksh 10,000–25,000" },
    ],
  },
  "database-integration": {
    slug: "database-integration",
    title: "Database Integration",
    icon: Database,
    description: "Integrating and managing databases to ensure data is stored efficiently, securely, and is easily accessible.",
    details: "I design and integrate databases that are optimized for performance, scalability, and security. Whether you need a relational (SQL) or non-relational (NoSQL) database, I ensure your data is structured and managed effectively.",
    packages: [
      {
        title: "🟢 Basic Package",
        price: "Ksh 20,000 – 50,000",
        bestFor: "Small websites and simple data storage needs.",
        includes: [
          "Database setup (MySQL / PostgreSQL / SQLite)",
          "Table and schema design (users, contacts, products, etc.)",
          "Basic CRUD operations (Create, Read, Update, Delete)",
          "Simple API connection to frontend",
          "Form data storage (contact forms, leads, etc.)",
          "Secure database access (passwords, SSL, environment variables)",
          "Hosting configuration (Render, Railway, or Supabase)",
          "1-month support",
        ],
      },
      {
        title: "🟡 Standard Package",
        price: "Ksh 60,000 – 120,000",
        bestFor: "Medium-scale apps, business dashboards, and e-commerce sites.",
        includes: [
          "Everything in Basic +",
          "Advanced database modeling (relationships, joins, indexing)",
          "User authentication & role-based access (Admin/User)",
          "Integration with payment or order systems",
          "API endpoints for dynamic data (REST or GraphQL)",
          "Cloud database setup (Firebase, Supabase, MongoDB Atlas, or Neon)",
          "Data validation and error handling",
          "Backup and restore configuration",
          "Database optimization for speed and security",
          "2-month support and minor updates",
        ],
      },
      {
        title: "🔵 Premium Package",
        price: "Ksh 150,000 – 300,000+",
        bestFor: "Enterprise-level systems, SaaS platforms, or multi-user applications.",
        includes: [
          "Everything in Standard +",
          "Complex relational database architecture (multi-table joins, normalization)",
          "Scalable cloud database (AWS RDS, Google Cloud SQL, or MongoDB Atlas)",
          "Automated backups and replication setup",
          "Real-time database updates (Socket.IO, Firebase Realtime DB)",
          "Data analytics and reporting system",
          "Integration with multiple APIs or microservices",
          "High-security encryption and authentication (JWT, OAuth)",
          "Database monitoring and performance alerts",
          "Continuous deployment integration (CI/CD for DB migrations)",
          "3-month premium support & optimization",
        ],
      },
    ],
    addOns: [
        { title: "Database documentation (ERD + schema diagrams)", price: "Ksh 5,000–10,000" },
        { title: "Data migration from old system", price: "Ksh 10,000–25,000" },
        { title: "AI-powered analytics or reports", price: "Ksh 15,000–40,000" },
        { title: "Multi-tenant (multi-client) database setup", price: "Ksh 20,000–50,000" },
    ],
  },
  "apis": {
    slug: "apis",
    title: "API Development & Integration",
    icon: Cable,
    description: "Designing and integrating APIs to connect services, automate workflows, and extend application functionality.",
    details: "I build and integrate custom APIs to connect your applications with third-party services or to create a robust backend for your frontend. I focus on creating well-documented, secure, and easy-to-use APIs.",
    packages: [
      {
        title: "🟢 Basic Package",
        price: "Ksh 8,000 – 20,000",
        bestFor: "Ideal for: Simple projects needing one or two basic APIs.",
        includes: [
          "Basic REST API setup",
          "CRUD endpoints (Create, Read, Update, Delete)",
          "Connection to a local or cloud database",
          "JSON response formatting",
          "Basic authentication (API key or token)",
          "API documentation (Postman or Swagger)",
        ],
      },
      {
        title: "🔵 Standard Package",
        price: "Ksh 25,000 – 60,000",
        bestFor: "Ideal for: Businesses needing secure and well-structured APIs.",
        includes: [
          "Everything in Basic, plus:",
          "JWT or OAuth2 authentication",
          "Integration with external APIs (e.g., payment, SMS, or email)",
          "User roles and permissions",
          "Data validation and error handling",
          "API versioning and optimization",
          "Hosting or cloud deployment setup",
          "Real-time data support (WebSockets or Firebase integration)",
        ],
      },
       {
        title: "🟣 Premium Package",
        price: "Ksh 70,000 – 150,000+",
        bestFor: "Ideal for: Scalable apps, SaaS, or full e-commerce systems.",
        includes: [
          "Everything in Standard, plus:",
          "Complex multi-API integration (e.g., MPesa + Email + Analytics)",
          "Microservice or modular architecture",
          "GraphQL or advanced API gateway setup",
          "API performance monitoring and analytics dashboard",
          "Automated testing (Postman/Newman, CI/CD pipeline)",
          "Enterprise-level security & scalability setup",
          "Custom reporting and logs management",
        ],
      },
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Driving brand growth through strategic online marketing campaigns and engaging content tailored to your target audience.",
    details: "I create and execute data-driven digital marketing strategies to increase your online presence, generate leads, and drive sales. From social media to email, I cover all aspects of your digital footprint.",
    packages: [
      {
          title: "🟢 Basic Package",
          price: "Ksh 10,000 – 25,000/month",
          bestFor: "Startups, small businesses, or individuals building online presence.",
          includes: [
              "Social media setup (Facebook, Instagram, X, LinkedIn)",
              "3–4 weekly posts (images or captions provided by client)",
              "Basic content calendar",
              "Page optimization (bio, hashtags, SEO titles)",
              "Engagement management (reply to comments & DMs)",
              "Basic analytics report (reach, likes, followers)",
              "Boosting setup guidance (client pays ad budget)",
          ],
      },
      {
          title: "🔵 Standard Package",
          price: "Ksh 30,000 – 70,000/month",
          bestFor: "Growing brands that need consistent, high-quality engagement.",
          includes: [
              "Everything in Basic, plus:",
              "12–16 custom graphic posts per month",
              "2 short video reels (social media ads or highlights)",
              "Copywriting & content planning",
              "Social media ads setup & management (Facebook, Instagram, or Google Ads)",
              "Target audience research & A/B testing",
              "Email marketing campaign setup (Mailchimp, Brevo, etc.)",
              "Monthly analytics report with strategy insights",
              "SEO optimization for website/blog",
          ],
      },
      {
          title: "🟣 Premium Package",
          price: "Ksh 80,000 – 200,000+/month",
          bestFor: "Established brands, e-commerce businesses, or campaigns needing full digital strategy.",
          includes: [
              "Everything in Standard, plus:",
              "Full social media management (content creation, posting, engagement)",
              "4–6 video reels or ad creatives monthly",
              "Google Ads, Meta Ads, and YouTube Ads management",
              "Influencer marketing coordination",
              "Advanced SEO (on-page + off-page)",
              "Blog/article writing (2–4 per month)",
              "Competitor analysis & marketing automation",
              "Conversion tracking (Pixel, Analytics, Tag Manager)",
              "Detailed performance reports + monthly strategy meeting",
          ],
      },
    ],
    pricing: "Contact for Quote"
  },
  "seo": {
    slug: "seo",
    title: "SEO",
    icon: Search,
    description: "Optimizing your website to rank higher in search engine results, increasing organic traffic and online visibility.",
    details: "I implement comprehensive SEO strategies to improve your website's visibility on search engines like Google. By focusing on technical SEO, on-page optimization, and quality content, I help you attract more organic traffic.",
    packages: [
      {
        title: "🟢 Basic SEO Package",
        price: "Ksh 15,000 - 30,000/month",
        bestFor: "Small websites, local businesses, or blogs.",
        includes: [
          "Keyword Research (up to 20 keywords)",
          "On-Page SEO (Title tags, meta descriptions, headers)",
          "Technical SEO Audit (Site speed, mobile-friendliness)",
          "Google Analytics & Search Console Setup",
          "Local SEO (Google Business Profile optimization)",
          "Monthly Performance Report",
        ],
      },
      {
        title: "🟡 Standard SEO Package",
        price: "Ksh 35,000 - 60,000/month",
        bestFor: "Growing businesses and e-commerce stores.",
        includes: [
          "Everything in Basic +",
          "Advanced Keyword Research & Mapping",
          "Content Gap Analysis",
          "On-Page Optimization for up to 20 pages",
          "Schema Markup Implementation",
          "Basic Link Building Campaign (Guest posts, directory submissions)",
          "Competitor Analysis",
          "Bi-weekly Performance Reports with Insights",
        ],
      },
      {
        title: "🔵 Premium SEO Package",
        price: "Ksh 70,000+/month",
        bestFor: "Established brands and competitive industries.",
        includes: [
          "Everything in Standard +",
          "Comprehensive SEO Strategy & Roadmap",
          "Advanced Technical SEO (Crawling, indexing, site architecture)",
          "Content Marketing (2 blog posts per month)",
          "Advanced Link Building & Outreach",
          "Ongoing Competitor Monitoring",
          "Conversion Rate Optimization (CRO) recommendations",
          "Detailed Monthly Reports & Strategy Calls",
        ],
      },
    ],
  },
  "event-dj": {
    slug: "event-dj",
    title: "Event DJ",
    icon: Disc,
    description: "Bringing the right vibe to your special occasions with a professional and versatile music selection.",
    details: "With a passion for music and a professional setup, I provide the perfect soundtrack for your event. I work closely with you to understand your musical tastes and the desired atmosphere, ensuring a memorable experience for you and your guests.",
    items: [
      { title: "Weddings & Receptions", description: "Creating the perfect musical backdrop for your special day.", price: "Contact for Quote", icon: Disc },
      { title: "Corporate Events", description: "Professional DJ services for company parties, conferences, and functions.", price: "Contact for Quote", icon: Briefcase },
      { title: "Private Parties", description: "Bringing the energy to birthdays, anniversaries, and private gatherings.", price: "Contact for Quote", icon: PartyPopper },
    ],
    pricing: "Starting at $400"
  },
  "event-decoration": {
    slug: "event-decoration",
    title: "Event Decoration",
    icon: PartyPopper,
    description: "Transforming venues into unforgettable experiences with creative and elegant decoration solutions.",
    details: "I offer full-service event design and decoration, transforming any space into a beautiful and immersive environment. From concept to execution, I handle all the details to create a stunning backdrop for your special occasion.",
    items: [
      { title: "Wedding & Ceremony Decor", description: "Elegant and beautiful decorations to make your wedding unforgettable.", price: "Contact for Quote", icon: PartyPopper },
      { title: "Themed Party Decorations", description: "Creative decor to bring your party's theme to life.", price: "Contact for Quote", icon: Layers },
      { title: "Corporate Function Styling", description: "Professional and stylish decor for corporate events and functions.", price: "Contact for Quote", icon: Briefcase },
    ],
    pricing: "Contact for Quote"
  },
  "cyber-security": {
    slug: "cyber-security",
    title: "Cyber Security Consulting",
    icon: ShieldCheck,
    description: "Protecting your digital assets with comprehensive security services, from identifying weaknesses to responding to threats.",
    details: "I provide expert cybersecurity consulting to help you identify vulnerabilities, protect against threats, and secure your digital infrastructure. My goal is to give you peace of mind by safeguarding your valuable data and systems.",
    items: [
      { title: "Vulnerability Assessments", description: "Identifying and analyzing security weaknesses in your systems.", price: "Contact for Quote", icon: ShieldCheck },
      { title: "Penetration Testing", description: "Simulating cyber attacks to test the strength of your defenses.", price: "Contact for Quote", icon: Shield },
      { title: "Security Audits", description: "Comprehensive reviews of your security policies and infrastructure.", price: "Contact for Quote", icon: TestTube },
      { title: "Incident Response", description: "Planning and executing a response to security breaches.", price: "Contact for Quote", icon: Rocket },
    ],
    pricing: "Contact for Quote"
  },
  "networking-solutions": {
    slug: "networking-solutions",
    title: "Networking Solutions",
    icon: Network,
    description: "Building and maintaining robust and reliable network infrastructures to ensure seamless connectivity and performance.",
    details: "I offer professional networking services to design, implement, and manage secure and high-performance networks for homes and businesses. I ensure your network is reliable, scalable, and optimized for your specific needs.",
    items: [
        { title: "Network Design & Setup", description: "Designing and implementing secure and scalable network infrastructures.", price: "Contact for Quote", icon: GitBranch },
        { title: "Router & Switch Config", description: "Configuring network hardware for optimal performance and security.", price: "Contact for Quote", icon: Server },
        { title: "Wi-Fi Optimization", description: "Troubleshooting and optimizing your wireless network for better coverage.", price: "Contact for Quote", icon: Wifi },
        { title: "Network Security", description: "Implementing firewalls and other measures to secure your network.", price: "Contact for Quote", icon: Shield },
    ],
    pricing: "Contact for Quote"
  }
};
