import { Code, Server, Layers, Database, Cable, Megaphone, Search, Disc, PartyPopper, ShieldCheck, Network } from "lucide-react";

export const services = {
  "frontend-development": {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: Code,
    description: "Creating beautiful, responsive, and user-friendly interfaces that provide a seamless user experience across all devices.",
    details: "I specialize in building modern, interactive, and high-performance user interfaces. From the initial design concept to the final deployment, I ensure your web application is not only visually stunning but also accessible, fast, and SEO-friendly.",
    items: [
      "Responsive website design (mobile, tablet, desktop)",
      "Interactive user interfaces (buttons, forms, sliders)",
      "Landing pages and homepages",
      "Navigation menus and footers",
      "Product/service listing pages",
      "Contact forms with validation",
      "Image galleries and sliders",
      "Blog & news page layouts",
      "Custom animations & transitions",
      "SEO-friendly HTML structure",
      "API Integration for dynamic data",
      "Custom CSS themes or brand styling",
      "Dashboard & admin interfaces",
      "Dark/light mode toggle",
      "Accessibility-friendly design (A11y)",
      "Page speed optimization",
      "Single-Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "Frontend testing & debugging",
      "Deployment & version control (Git, GitHub)",
    ],
    pricing: "Starting at $1,500"
  },
  "backend-development": {
    slug: "backend-development",
    title: "Backend Development",
    icon: Server,
    description: "Building robust and scalable server-side applications, ensuring high performance and data security.",
    details: "I develop secure and efficient backend systems that power your web applications. My focus is on creating scalable architectures, reliable APIs, and secure data handling to support your business logic.",
    items: ["Custom server-side logic with Node.js & Python", "Building RESTful APIs and GraphQL endpoints", "User authentication and authorization systems", "Server setup and deployment", "Performance monitoring and optimization"],
    pricing: "Starting at $2,000"
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    icon: Layers,
    description: "Developing complete web applications from the ground up, managing both client-side and server-side logic.",
    details: "From the database to the user interface, I provide end-to-end development services to bring your entire project to life. I handle system architecture, database design, backend logic, and frontend development to deliver a cohesive and complete product.",
    items: ["End-to-end application development (MERN, Next.js)", "System architecture and design", "Database schema design and management", "CI/CD and DevOps pipeline setup", "Full-stack testing and quality assurance"],
    pricing: "Starting at $3,500"
  },
  "database-integration": {
    slug: "database-integration",
    title: "Database Integration",
    icon: Database,
    description: "Integrating and managing databases to ensure data is stored efficiently, securely, and is easily accessible.",
    details: "I design and integrate databases that are optimized for performance, scalability, and security. Whether you need a relational (SQL) or non-relational (NoSQL) database, I ensure your data is structured and managed effectively.",
    items: ["Database design and modeling (MongoDB, PostgreSQL, Firebase)", "Data migration and synchronization", "Query optimization and performance tuning", "Backup and recovery solutions", "Secure data access and management"],
    pricing: "Starting at $1,000"
  },
  "apis": {
    slug: "apis",
    title: "API Development & Integration",
    icon: Cable,
    description: "Designing and integrating APIs to connect services, automate workflows, and extend application functionality.",
    details: "I build and integrate custom APIs to connect your applications with third-party services or to create a robust backend for your frontend. I focus on creating well-documented, secure, and easy-to-use APIs.",
    items: ["Custom REST API and GraphQL API design", "Third-party API integration (e.g., payment gateways, social media)", "Authentication and security (OAuth, JWT)", "Real-time communication with Webhooks", "API documentation and testing"],
    pricing: "Starting at $1,200"
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Driving brand growth through strategic online marketing campaigns and engaging content tailored to your target audience.",
    details: "I create and execute data-driven digital marketing strategies to increase your online presence, generate leads, and drive sales. From social media to email, I cover all aspects of your digital footprint.",
    items: ["Social Media Marketing (SMM)", "Content creation and strategy", "Email marketing campaigns", "Paid advertising (Meta Ads, Google Ads)", "Analytics and performance tracking"],
    pricing: "Contact for Quote"
  },
  "seo": {
    slug: "seo",
    title: "SEO",
    icon: Search,
    description: "Optimizing your website to rank higher in search engine results, increasing organic traffic and online visibility.",
    details: "I implement comprehensive SEO strategies to improve your website's visibility on search engines like Google. By focusing on technical SEO, on-page optimization, and quality content, I help you attract more organic traffic.",
    items: ["Keyword research and analysis", "On-page SEO optimization", "Technical SEO audits and fixes", "Link building and backlink strategy", "Local SEO and Google My Business optimization"],
    pricing: "Starting at $500/mo"
  },
  "event-dj": {
    slug: "event-dj",
    title: "Event DJ",
    icon: Disc,
    description: "Bringing the right vibe to your special occasions with a professional and versatile music selection.",
    details: "With a passion for music and a professional setup, I provide the perfect soundtrack for your event. I work closely with you to understand your musical tastes and the desired atmosphere, ensuring a memorable experience for you and your guests.",
    items: ["Weddings and receptions", "Corporate events and functions", "Private parties and birthdays", "Virtual DJ sets for online events", "Custom playlist creation"],
    pricing: "Starting at $400"
  },
  "event-decoration": {
    slug: "event-decoration",
    title: "Event Decoration",
    icon: PartyPopper,
    description: "Transforming venues into unforgettable experiences with creative and elegant decoration solutions.",
    details: "I offer full-service event design and decoration, transforming any space into a beautiful and immersive environment. From concept to execution, I handle all the details to create a stunning backdrop for your special occasion.",
    items: ["Wedding and ceremony decor", "Themed party decorations", "Corporate function styling", "Custom floral arrangements", "Lighting and ambiance design"],
    pricing: "Contact for Quote"
  },
  "cyber-security": {
    slug: "cyber-security",
    title: "Cyber Security Consulting",
    icon: ShieldCheck,
    description: "Protecting your digital assets with comprehensive security services, from identifying weaknesses to responding to threats.",
    details: "I provide expert cybersecurity consulting to help you identify vulnerabilities, protect against threats, and secure your digital infrastructure. My goal is to give you peace of mind by safeguarding your valuable data and systems.",
    items: ["Vulnerability assessments", "Penetration testing (ethical hacking)", "Security audits and compliance checks", "Incident response planning and execution", "Security awareness training for staff"],
    pricing: "Contact for Quote"
  },
  "networking-solutions": {
    slug: "networking-solutions",
    title: "Networking Solutions",
    icon: Network,
    description: "Building and maintaining robust and reliable network infrastructures to ensure seamless connectivity and performance.",
    details: "I offer professional networking services to design, implement, and manage secure and high-performance networks for homes and businesses. I ensure your network is reliable, scalable, and optimized for your specific needs.",
    items: ["Network design and setup", "Router and switch configuration", "Wi-Fi optimization and troubleshooting", "Network security and firewall setup", "Performance monitoring and optimization"],
    pricing: "Contact for Quote"
  }
};

export type Service = (typeof services)[keyof typeof services];
