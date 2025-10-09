import { Code, Server, Layers, Database, Cable, Megaphone, Search, Disc, PartyPopper, ShieldCheck, Network, Rocket, DatabaseZap, Shield, Puzzle, TestTube, GitBranch, Monitor } from "lucide-react";
import { Mail, MapPin, Briefcase, Wifi, Users } from "lucide-react";

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
    items: [
      { title: "Database Design", description: "Modeling and designing databases like MongoDB, PostgreSQL, or Firebase.", price: "Contact for Quote", icon: Database },
      { title: "Data Migration", description: "Seamlessly migrating and synchronizing data between different systems.", price: "Contact for Quote", icon: DatabaseZap },
      { title: "Query Optimization", description: "Tuning database queries for maximum performance and speed.", price: "Contact for Quote", icon: Rocket },
      { title: "Backup & Recovery", description: "Implementing robust backup and recovery solutions to protect your data.", price: "Contact for Quote", icon: Shield },
    ],
    pricing: "Starting at $1,000"
  },
  "apis": {
    slug: "apis",
    title: "API Development & Integration",
    icon: Cable,
    description: "Designing and integrating APIs to connect services, automate workflows, and extend application functionality.",
    details: "I build and integrate custom APIs to connect your applications with third-party services or to create a robust backend for your frontend. I focus on creating well-documented, secure, and easy-to-use APIs.",
    items: [
      { title: "Custom API Design", description: "Designing and building custom RESTful or GraphQL APIs.", price: "Contact for Quote", icon: Puzzle },
      { title: "Third-Party Integrations", description: "Integrating with external services like payment gateways or social media.", price: "Contact for Quote", icon: Puzzle },
      { title: "API Security", description: "Implementing secure authentication and authorization (OAuth, JWT).", price: "Contact for Quote", icon: Shield },
      { title: "Real-time APIs", description: "Building real-time communication features using WebSockets or Webhooks.", price: "Contact for Quote", icon: Monitor },
    ],
    pricing: "Starting at $1,200"
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Driving brand growth through strategic online marketing campaigns and engaging content tailored to your target audience.",
    details: "I create and execute data-driven digital marketing strategies to increase your online presence, generate leads, and drive sales. From social media to email, I cover all aspects of your digital footprint.",
    items: [
        { title: "Social Media Marketing", description: "Managing and growing your brand's presence on social platforms.", price: "Contact for Quote", icon: Megaphone },
        { title: "Content Strategy", description: "Creating valuable content to attract and engage your target audience.", price: "Contact for Quote", icon: Code },
        { title: "Email Campaigns", description: "Designing and running effective email marketing campaigns.", price: "Contact for Quote", icon: Mail },
        { title: "Paid Advertising", description: "Managing Google Ads and Meta Ads to drive targeted traffic.", price: "Contact for Quote", icon: Rocket },
    ],
    pricing: "Contact for Quote"
  },
  "seo": {
    slug: "seo",
    title: "SEO",
    icon: Search,
    description: "Optimizing your website to rank higher in search engine results, increasing organic traffic and online visibility.",
    details: "I implement comprehensive SEO strategies to improve your website's visibility on search engines like Google. By focusing on technical SEO, on-page optimization, and quality content, I help you attract more organic traffic.",
    items: [
      { title: "Keyword Research", description: "Identifying the best keywords to target for your business.", price: "Contact for Quote", icon: Search },
      { title: "On-Page & Technical SEO", description: "Optimizing your site's structure and content for search engines.", price: "Contact for Quote", icon: Code },
      { title: "Link Building", description: "Building high-quality backlinks to improve your domain authority.", price: "Contact for Quote", icon: Cable },
      { title: "Local SEO", description: "Optimizing your online presence to attract local customers.", price: "Contact for Quote", icon: MapPin },
    ],
    pricing: "Starting at $500/mo"
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
