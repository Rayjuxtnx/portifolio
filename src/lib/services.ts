import { Code, Server, Layers, Database, Cable, Megaphone, Search, Disc, PartyPopper, ShieldCheck, Network, Smartphone, Palette, Puzzle, MousePointerClick, Rocket, AppWindow, Shield, GitBranch, TestTube, Framer, CodeXml, Scaling, Monitor, DatabaseZap, Mail, MapPin, Briefcase, Wifi } from "lucide-react";

export type ServiceItem = { 
  title: string; 
  description: string;
  price: string; 
  icon: React.ElementType 
};

export type Service = {
  slug: string;
  title: string;
  icon: React.ElementType;
  description: string;
  details: string;
  items: ServiceItem[];
  pricing?: string;
};

export const services: Record<string, Service> = {
  "frontend-development": {
    slug: "frontend-development",
    title: "Frontend Development",
    icon: Code,
    description: "Creating beautiful, responsive, and user-friendly interfaces that provide a seamless user experience across all devices.",
    details: "I specialize in building modern, interactive, and high-performance user interfaces. From the initial design concept to the final deployment, I ensure your web application is not only visually stunning but also accessible, fast, and SEO-friendly.",
    items: [
        { title: "Responsive Web Design", description: "Builds that look and work great on any device, from mobile phones to desktops.", price: "8,000 – 20,000", icon: Smartphone },
        { title: "Interactive UI", description: "Engaging user interfaces with dynamic elements like forms, sliders, and animations.", price: "5,000 – 15,000", icon: MousePointerClick },
        { title: "Landing Pages", description: "Compelling landing pages designed to convert visitors into customers.", price: "6,000 – 18,000", icon: Rocket },
        { title: "Navigation & Menus", description: "Intuitive navigation menus, headers, and footers for seamless user flow.", price: "3,000 – 8,000", icon: Framer },
        { title: "Product/Service Listings", description: "Clean and attractive layouts for showcasing products or services.", price: "5,000 – 15,000", icon: Layers },
        { title: "Contact Forms", description: "Custom contact forms with real-time validation to capture user inquiries.", price: "2,000 – 6,000", icon: Mail },
        { title: "Image Galleries & Sliders", description: "Visually appealing galleries and sliders to showcase your portfolio or products.", price: "3,000 – 8,000", icon: Palette },
        { title: "Blog Layouts", description: "Well-structured and readable layouts for your blog or news section.", price: "4,000 – 10,000", icon: CodeXml },
        { title: "Custom Animations", description: "Smooth, modern animations and transitions to enhance user experience.", price: "4,000 – 12,000", icon: Framer },
        { title: "SEO-Friendly Code", description: "Clean, semantic HTML structured for optimal search engine visibility.", price: "3,000 – 7,000", icon: CodeXml },
        { title: "API Integration", description: "Connecting your frontend to backend services for dynamic, real-time data.", price: "6,000 – 20,000", icon: Puzzle },
        { title: "Custom CSS & Theming", description: "Tailored styling and themes that match your brand identity perfectly.", price: "4,000 – 10,000", icon: Palette },
        { title: "Admin Dashboards", description: "Powerful and intuitive admin interfaces for managing your application.", price: "10,000 – 25,000", icon: AppWindow },
        { title: "Dark/Light Mode", description: "A modern toggle for user-preferred viewing modes.", price: "2,000 – 5,000", icon: Monitor },
        { title: "Accessibility (A11y)", description: "Ensuring your website is usable by people with disabilities.", price: "3,000 – 8,000", icon: Shield },
        { title: "Page Speed Optimization", description: "Improving load times and performance for a better user experience.", price: "3,000 – 9,000", icon: Rocket },
        { title: "SPA Development", description: "Building fast, reliable Single-Page Apps.", price: "10,000 – 25,000", icon: AppWindow },
        { title: "PWA Development", description: "Creating app-like experiences on the web with Progressive Web Apps.", price: "15,000 – 35,000", icon: AppWindow },
        { title: "Testing & Debugging", description: "Thorough testing to ensure a bug-free and smooth user experience.", price: "3,000 – 8,000", icon: TestTube },
        { title: "Deployment & Git Flow", description: "Setting up version control and deployment pipelines for your project.", price: "2,000 – 6,000", icon: GitBranch },
    ],
    pricing: "Custom"
  },
  "backend-development": {
    slug: "backend-development",
    title: "Backend Development",
    icon: Server,
    description: "Building robust and scalable server-side applications, ensuring high performance and data security.",
    details: "I develop secure and efficient backend systems that power your web applications. My focus is on creating scalable architectures, reliable APIs, and secure data handling to support your business logic.",
    items: [
      { title: "User Authentication", description: "Secure user login and registration systems.", price: "8,000 – 20,000", icon: Shield },
      { title: "Database Design & Setup", description: "Modeling and setting up your database (SQL or NoSQL).", price: "6,000 – 15,000", icon: Database },
      { title: "API Development", description: "Building RESTful or GraphQL APIs for your application.", price: "10,000 – 25,000", icon: Puzzle },
      { title: "Payment Gateway Integration", description: "Integrating M-Pesa, PayPal, or Stripe for payments.", price: "8,000 – 20,000", icon: ShieldCheck },
      { title: "Admin Dashboard Backend", description: "Creating the backend logic for analytics and management.", price: "10,000 – 25,000", icon: AppWindow },
      { title: "E-commerce Backend", description: "Developing systems for cart, checkout, and order management.", price: "15,000 – 35,000", icon: Briefcase },
      { title: "File Upload & Management", description: "System for handling file uploads and storage.", price: "5,000 – 12,000", icon: Rocket },
      { title: "Email Notifications", description: "Setting up password recovery and other email notifications.", price: "4,000 – 8,000", icon: Mail },
      { title: "Role-Based Access Control", description: "Implementing user roles and permissions (admin, user, etc.).", price: "5,000 – 12,000", icon: Users },
      { title: "Server-Side Security", description: "Implementing validation and security best practices.", price: "4,000 – 10,000", icon: Shield },
      { title: "Third-Party API Integration", description: "Connecting your backend with external services.", price: "6,000 – 15,000", icon: Puzzle },
      { title: "Backend Testing", description: "Ensuring your backend is robust and bug-free.", price: "3,000 – 8,000", icon: TestTube },
      { title: "Server Deployment", description: "Deploying your backend to a cloud server.", price: "3,000 – 7,000", icon: Server },
      { title: "Logging & Monitoring", description: "Setting up systems to monitor server health and errors.", price: "3,000 – 8,000", icon: Monitor },
      { title: "Real-Time Features", description: "Building chat or live notifications with WebSockets.", price: "8,000 – 20,000", icon: Wifi },
      { title: "Cloud Storage Integration", description: "Integrating with AWS S3 or Firebase Storage.", price: "5,000 – 12,000", icon: DatabaseZap },
      { title: "API Documentation", description: "Creating clear documentation for your API.", price: "2,000 – 5,000", icon: CodeXml },
      { title: "Backend Optimization", description: "Improving the speed and scalability of your server.", price: "5,000 – 12,000", icon: Scaling },
      { title: "Data Backup & Recovery", description: "Implementing strategies to protect your data.", price: "3,000 – 8,000", icon: DatabaseZap },
      { title: "Security Hardening", description: "Applying JWT, encryption, and other security measures.", price: "5,000 – 12,000", icon: ShieldCheck },
    ],
    pricing: "Starting at $2,000"
  },
  "full-stack-development": {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    icon: Layers,
    description: "Developing complete web applications from the ground up, managing both client-side and server-side logic.",
    details: "From the database to the user interface, I provide end-to-end development services to bring your entire project to life. I handle system architecture, database design, backend logic, and frontend development to deliver a cohesive and complete product.",
    items: [
      { title: "End-to-End Development", description: "Full application development using frameworks like MERN or Next.js.", price: "Contact for Quote", icon: Layers },
      { title: "System Architecture", description: "Designing scalable and robust architectures for your application.", price: "Contact for Quote", icon: GitBranch },
      { title: "Database Schema Design", description: "Creating efficient and scalable database schemas.", price: "Contact for Quote", icon: Database },
      { title: "CI/CD & DevOps", description: "Setting up continuous integration and deployment pipelines.", price: "Contact for Quote", icon: Rocket },
      { title: "Full-Stack QA", description: "Comprehensive testing across the entire stack to ensure quality.", price: "Contact for Quote", icon: TestTube },
    ],
    pricing: "Starting at $3,500"
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
        { title: "Content Strategy", description: "Creating valuable content to attract and engage your target audience.", price: "Contact for Quote", icon: CodeXml },
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
      { title: "On-Page & Technical SEO", description: "Optimizing your site's structure and content for search engines.", price: "Contact for Quote", icon: CodeXml },
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
      { title: "Themed Party Decorations", description: "Creative decor to bring your party's theme to life.", price: "Contact for Quote", icon: Palette },
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
